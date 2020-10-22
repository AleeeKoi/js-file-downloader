module.exports.DownloadException = class DownloadException extends Error {
  constructor (message, request) {
    super(`Downloader error: ${message}`);
    this.request = request;
    this.name = 'DownloadException';
  }
};
