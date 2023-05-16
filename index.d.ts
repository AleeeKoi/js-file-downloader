declare module 'js-file-downloader' {
  export interface OptionalParams {
    timeout?: number;
    headers?: { name: string, value: string }[];
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
    onloadstart?: () => void;
    contentTypeDetermination?: false | 'header' | 'signature' | 'full';
    customFileSignatures?: { [key: string]: string };
  }

  type Params = OptionalParams & { url: string };
  interface JsFileDownloaderBase {
    start(): Promise<void>;
    params: Params;
    link: HTMLAnchorElement;
    request: XMLHttpRequest;
    downloadedFile: null | Blob | File;
    abort(reason: any): void;
  }
  interface JsFileDownloaderContructor {
    new (data?: Params & { autoStart: false }): JsFileDownloaderBase;
    new (data?: Params): Promise<void>;
  }

  const JsFileDownloader: JsFileDownloaderContructor;

  export default JsFileDownloader;
}
