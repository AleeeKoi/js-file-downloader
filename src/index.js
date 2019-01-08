'use strict';

const downloadException = require('./exception').downloadException;

const defaultParams = {
  timeout: 40000,
  mobileDisabled: true
};

class Downloader {

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
    return new Promise(this.initDonwload);
  }

  initDonwload (resolve, reject) {

    let link = this.createLink();

    // fallback for old browsers
    if (!('download' in link) || this.isMobile()) {
      link.target = '_blank';
      link.href = this.params.url;
      this.clickLink(link);
      return resolve();
    }

    let request = this.createRequest();

    if (!this.params.url) {
      return reject('Downloader error: url param not defined!');
    }

    request.onload = () => {
      try {
        if (parseInt(request.status, 10) !== 200) {
          throw downloadException(`status code [${request.status}]`);
        }
        this.startDownload(request, link);
        resolve();
      } catch (error) {
        reject(new Error(`Downloader error: ${error}`));
      }
    };

    request.ontimeout = () => {
      reject(new Error('Downloader error: request timeout'));
    };

    request.onerror = (e) => {
      reject(e);
    };

    request.send();

    return request;
  }

  isMobile () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  createRequest () {
    let request = new XMLHttpRequest();

    request.open('GET', this.params.url, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    request.responseType = 'arraybuffer';
    if (this.params.process && typeof this.params.process === 'function') {
      request.addEventListener('progress', this.params.process);
    }
    request.timeout = this.params.timeout;
    return request;
  }

  getFileName (request) {
    // Forcing file name
    if (typeof this.params.filename === 'string') {
      return this.params.filename;
    }
    // Trying to get file name from response header
    let content = request.getResponseHeader('Content-Disposition');
    let contentParts = [];

    if (content) {
      contentParts = content.replace(/\s|"|'/g, '').match(/(filename=)([\s\S]+)/);
    }
    return contentParts.length >= 2 ?
      contentParts[2] :
      this.params.url.split('/').pop().split('?')[0];
  }

  createLink () {
    let link = document.createElement('a');

    link.style.display = 'none';
    return link;
  }

  clickLink (link) {
    let event = new MouseEvent('click');

    link.dispatchEvent(event);
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

  startDownload (request, link) {
    let fileName = this.getFileName(request);
    let file = this.getFile(request.response, fileName);

    // native IE
    if ('msSaveOrOpenBlob' in window.navigator) {
      return window.navigator.msSaveOrOpenBlob(file, fileName);
    }

    let objectUrl = window.URL.createObjectURL(file);

    link.href = objectUrl;
    link.download = fileName;
    this.clickLink(link);
    setTimeout(() => {
      (window.URL || window.webkitURL || window).revokeObjectURL(objectUrl);
    }, 1000 * 40);

    return this;
  }

}

module.exports = Downloader;
