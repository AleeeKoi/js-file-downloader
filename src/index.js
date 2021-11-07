/*!
 * JS File Downloader v ##package_version##
 * https://github.com/AleeeKoi/js-file-downloader
 *
 * Copyright Alessandro Pellizzari
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */

'use strict';

import { DownloadException } from './exception';
import {fileSignatures} from './signatures';

const DEFAULT_PARAMS = {
  timeout: 40000,
  headers: [],
  forceDesktopMode: false,
  autoStart: true,
  withCredentials: false,
  method: 'GET',
  nameCallback: name => name,
  contentType: 'application/x-www-form-urlencoded',
  body: null,
  nativeFallbackOnError: false,
  contentTypeDetermination: false
};

class JsFileDownloader {

  /**
   * Create a new JsFileDownloader instance
   * You need to define a {String} "url" params and other
   * @param {Object} customParams
   */
  constructor (customParams = {}) {
    this.params = Object.assign({}, DEFAULT_PARAMS, customParams);
    this.link = this.createLink();
    this.request = null;

    if (this.params.autoStart) return this.downloadFile();

    return this;
  }

  start () {
    return this.downloadFile();
  }

  downloadFile () {
    return new Promise((resolve, reject) => {
      this.initDownload(resolve, reject);
    });
  }

  initDownload (resolve, reject) {

    const fallback = () => {
      this.link.target = '_blank';
      this.link.href = this.params.url;
      this.clickLink();
    };

    // fallback for old browsers
    if (!('download' in this.link) || this.isMobile()) {
      fallback();
      return resolve();
    }

    this.request = this.createRequest();

    if (!this.params.url) {
      return reject(new DownloadException('url param not defined!', this.request));
    }

    this.request.onload = () => {
      if (parseInt(this.request.status, 10) !== 200) {
        return reject(new DownloadException(`status code [${this.request.status}]`, this.request));
      }
      this.startDownload();
      return resolve(this);
    };

    this.request.ontimeout = () => {
      reject(new DownloadException('request timeout', this.request));
    };

    this.request.onerror = () => {
      if (this.params.nativeFallbackOnError) {
        fallback();
        resolve(this);
      } else {
        reject(new DownloadException('network error', this.request));
      }
    };

    this.request.send(this.params.body);

    return this;
  }

  isMobile () {
    return !this.params.forceDesktopMode &&
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  createRequest () {
    let request = new XMLHttpRequest();

    request.open(this.params.method, this.params.url, true);
    if (this.params.contentType !== false) {
      request.setRequestHeader('Content-type', this.params.contentType);
    }
    this.params.headers.forEach(header => {
      request.setRequestHeader(header.name, header.value);
    });
    request.responseType = 'arraybuffer';
    if (this.params.process && typeof this.params.process === 'function') {
      request.addEventListener('progress', this.params.process);
    }
    if (this.params.onloadstart && typeof this.params.onloadstart === 'function') {
      request.onloadstart = this.params.onloadstart;
    }
    request.timeout = this.params.timeout;
    request.withCredentials = !!this.params.withCredentials || !!this.params.includeCredentials;
    return request;
  }

  getFileName () {
    // Forcing file name
    if (typeof this.params.filename === 'string') {
      return this.params.filename;
    }
    // Trying to get file name from response header
    let content = this.request.getResponseHeader('Content-Disposition');
    let contentParts = [];

    if (content) {
      contentParts = content.replace(/["']/g, '').match(/filename\*?=([^;]+)/);
    }

    const extractedName = contentParts && contentParts.length >= 1 ?
      contentParts[1] :
      this.params.url.split('/').pop().split('?')[0];

    return this.params.nameCallback(extractedName);
  }

  getContentTypeFromFileSignature (file) {
    let signatures = Object.assign({}, fileSignatures, this.params.customFileSignatures);

    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      let first4BytesOfFile = file.slice(0, 4);

      reader.onloadend = function (evt) {
        if (evt.target.readyState === FileReader.DONE) {
          let uint = new Uint8Array(evt.target.result);
          let bytes = [];
          uint.forEach((byte) => {
            bytes.push(byte.toString(16));
          });
          let hex = bytes.join('').toUpperCase();
          resolve(signatures[hex]);
        }
      };

      reader.onerror = reject;

      reader.readAsArrayBuffer(first4BytesOfFile);
    });
  }

  getContentTypeFromResponseHeader () {
    return this.request.getResponseHeader('content-type');
  }

  getContentType (file) {
    return new Promise((resolve) => {
      let defaultContentType = 'application/octet-stream';

      if (typeof this.params.contentTypeDetermination === 'string') {
        if (this.params.contentTypeDetermination === 'header') {
          resolve(this.getContentTypeFromResponseHeader() ?? defaultContentType);
        } else if (this.params.contentTypeDetermination === 'signature') {
          this.getContentTypeFromFileSignature(file)
            .then(signatureContentType => resolve(signatureContentType ?? defaultContentType));
        } else if (this.params.contentTypeDetermination === 'full') {
          let headerContentType = this.getContentTypeFromResponseHeader();
          this.getContentTypeFromFileSignature(file)
            .then(signatureContentType => resolve((signatureContentType ?? headerContentType) ?? defaultContentType));
        } else {
          resolve(defaultContentType);
        }
      } else {
        resolve(defaultContentType);
      }
    });
  }

  createLink () {
    let link = document.createElement('a');

    link.style.display = 'none';
    return link;
  }

  clickLink () {
    let event;

    try {
      event = new MouseEvent('click');
    } catch (e) {
      event = document.createEvent('MouseEvent');
      event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }

    this.link.dispatchEvent(event);
  }

  getFile (response, fileName) {
    return this.getContentType(new Blob([response])).then(type => {
      let file = null;
      let options = { type: type};

      try {
        file = new File([response], fileName, options);
      } catch (e) {
        file = new Blob([response], options);
        file.name = fileName;
        file.lastModifiedDate = new Date();
      }
      return file;
    });
  }

  startDownload () {
    let fileName = this.getFileName();
    this.getFile(this.request.response, fileName).then(file => {
      // native IE
      if ('msSaveOrOpenBlob' in window.navigator) {
        return window.navigator.msSaveOrOpenBlob(file, fileName);
      }

      let objectUrl = window.URL.createObjectURL(file);

      this.link.href = objectUrl;
      this.link.download = fileName;
      this.clickLink();

      setTimeout(() => {
        (window.URL || window.webkitURL || window).revokeObjectURL(objectUrl);
      }, 1000 * 40);

      return file;
    });

    return this;
  }
}

export default JsFileDownloader;
