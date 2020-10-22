
interface JsFileDownloaderDefaultProps {
  timeout?: number;
  mobileDisabled?: boolean;
  headers?: [{ name: string, value: string }];
  forceDesktopMode?: boolean;
  includeCredentials?: boolean;
  method?: 'GET' | 'POST';
  process?: (event: ProgressEvent) => undefined;
  nameCallback?: (name: string) => string;
  autoStart?: boolean;
}

interface JsFileDownloaderProps extends JsFileDownloaderDefaultProps {
  url: string;
  filename?: string;
}

declare class DownloadException extends Error {
  constructor(message: any, request: any);
  name: string;
  request: XMLHttpRequest;
}

export = jsFileDownloader;
declare class jsFileDownloader {
  constructor(customParams: JsFileDownloaderProps);
  start(): Promise<undefined>;
  params: JsFileDownloaderProps;
  link: HTMLAnchorElement;
  request: XMLHttpRequest;
}
