declare module 'js-file-downloader' {
  export interface OptionalParams {
    timeout?: number;
    headers?: [{ name: string, value: string }];
    forceDesktopMode?: boolean;
    withCredentials?: boolean;
    method?: 'GET' | 'POST';
    process?: (event: ProgressEvent) => undefined;
    nameCallback?: (name: string) => string;
    autoStart?: boolean;
    filename?: string;
    contentType?: false | string;
    body?: Document | BodyInit | null;
    nativeFallbackOnError?: boolean;
  }

  type Params = OptionalParams & { url: string };
  interface JsFileDownloaderBase {
    start(): Promise<void>;
    params: Params;
    link: HTMLAnchorElement;
    request: XMLHttpRequest;
  }
  interface JsFileDownloaderContructor {
    new (data?: Params): JsFileDownloaderBase;
  }

  const JsFileDownloader: JsFileDownloaderContructor;

  export default JsFileDownloader;
}
