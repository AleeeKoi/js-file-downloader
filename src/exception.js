export class downloadException extends Error {
  constructor (message, request) {
    super(`Downloader error: ${message}`);
    this.request = request;
    this.name = 'downloadException';
  }
};
