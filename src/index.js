/*!
 * JS File Downloader v ##package_version##
 * https://github.com/AleeeKoi/js-file-downloader
 *
 * Copyright Alessandro Pellizzari
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */

'use strict';

const downloadException = require('./exception').downloadException;

const defaultParams = {
  timeout: 40000,
  mobileDisabled: true,
  headers: [],
  forceDesktopMode: false,
  autoStart: true,
  withCredentials: false,
  method: 'GET',
  nameCallback: name => name
};

class jsFileDownloader {

  /**
   * You need to define a {String} "url" params and optionally others
   * * {String} filename
   * * {Int} timeout in ms
   * * {Boolean} mobileDisabled
   * * {Function} process call on request event
   * @param {Object} customParams
   */
  constructor (customParams = {}) {
    this.params = Object.assign({}, defaultParams, customParams);
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
      this.initDonwload(resolve, reject);
    });
  }

  initDonwload (resolve, reject) {
    // fallback for old browsers
    if (!('download' in this.link) || this.isMobile()) {
      this.link.target = '_blank';
      this.link.href = this.params.url;
      this.clickLink();
      return resolve();
    }

    this.request = this.createRequest();

    if (!this.params.url) {
      return reject('Downloader error: url param not defined!');
    }

    this.request.onload = () => {
      if (parseInt(this.request.status, 10) !== 200) {
        // eslint-disable-next-line new-cap
        return reject(new downloadException(`status code [${this.request.status}]`, this.request));
      }
      this.startDownload();
      return resolve(this);
    };

    this.request.ontimeout = () => {
      reject(new Error('Downloader error: request timeout'));
    };

    this.request.onerror = (e) => {
      reject(e);
    };

    this.request.send();

    return this;
  }

  isMobile () {
    return !this.params.forceDesktopMode &&
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  createRequest () {
    let request = new XMLHttpRequest();

    request.open(this.params.method, this.params.url, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    this.params.headers.forEach(header => {
      request.setRequestHeader(header.name, header.value);
    });
    request.responseType = 'arraybuffer';
    if (this.params.process && typeof this.params.process === 'function') {
      request.addEventListener('progress', this.params.process);
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
    let file = null;
    let options = { type: 'application/octet-stream' };

    try {
      file = new File([response], fileName, options);
    } catch (e) {
      file = new Blob([response], options);
      file.name = fileName;
      file.lastModifiedDate = new Date();
    }
    return file;
  }

  startDownload () {
    let fileName = this.getFileName();
    let file = this.getFile(this.request.response, fileName);

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

    return this;
  }

}

module.exports = jsFileDownloader;
