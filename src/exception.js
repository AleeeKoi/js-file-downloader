export class DownloadException extends Error {
  constructor (message, request) {
    super(`Downloader error: ${message}`);
    this.request = request;
    this.name = 'DownloadException';
  }
};

/**
 * @deprecated use DownloadException instead, it will be removed in next releases!
 */
export const downloadException = DownloadException;
