<p align="center">
  <a href="https://apedesign.net/" target="_blank" rel="noopener noreferrer">
    <img height="150" src="https://cdn.apedesign.net/github/logo.png" alt="APE Design" />
  </a>
</p>

---

# JS File Downloader

<p align="center">
  <a href="https://www.npmjs.com/package/js-file-downloader"><img src="https://img.shields.io/npm/v/js-file-downloader.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/js-file-downloader"><img src="https://img.shields.io/npm/l/js-file-downloader.svg" alt="License"></a>
</p>

## **🌟Please remember to star this github repo if you like it. Thank you! ❤️**

## Introduction

JS File Downloader is a simple no dependency library you will be able to download file from browser and show downloading status.

### Browser Compatibility

JS File Downloader supports all browsers that are [ES5-compliant] (http://kangax.github.io/compat-table/es5/) (IE8 and below are not supported).

---

### Installing with package manager

With a package manager (**recomanded**): 
```js
npm install js-file-downloader --save 
```

### Basic usage

```js

import JsFileDownloader from 'js-file-downloader';

const fileUrl = 'http://...';

new JsFileDownloader({ 
    url: fileUrl
  })
  .then(function () {
    // Called when download ended
  })
  .catch(function (error) {
    // Called when an error occurred
  });
  
```

---

### Use without a package manager
Download this library from https://github.com/AleeeKoi/js-file-downloader/releases
```js
<script src="/path/to/js-file-downloader.min.js"></script>
<script>
  // Then somewhere in your code
  new jsFileDownloader({ url: 'https://github.alessandropellizzari.it/test/apedesign-bg.png' })
    .then(function () {
      // Called when download ended
    })
    .catch(function (error) {
      // Called when an error occurred
    });
</script>
```

---


### Options:

#### process (for checking download status)
A function to call every time a process event is called. Function receive an Event Object as input.

```js

function process (event) {
  if (!event.lengthComputable) return; // guard
  var downloadingPercentage = Math.floor(event.loaded / event.total * 100);
  // what to do ...
};

new JsFileDownloader({ 
  url: '...',
  process: process
})
  
```

#### headers (of request)
If you need to customize request header data you can pass an array of objects like following example:

```js
new JsFileDownloader({ 
  url: '...',
  headers: [
    { name: 'Authorization', value: 'Bearer ABC123...' }
  ]
})
```

#### filename
Setting this String you can force output file name

#### timeout (ms)
Integer value (default 40000) defining how much ms attend before stop download action.

#### autoStart
Boolean value (default true) to enable/disable automatically starting the download. When the value is `true` the constructor returns a `Promise`, however when it's set to false, the constructor doesn't return anything and the download can be started by calling the `start()` method on the object.

Example with `autoStart` set to `true`
```js
new JsFileDownloader({ 
  url: '...',
  autoStart: true
})
```

Example with `autoStart` set to `false`
```js
const download = new JsFileDownloader({ 
  url: '...',
  autoStart: false
});

download.start()
  .then(function(){
      // success 
  })
  .catch(function(error){
      // handle errors
  });
```

#### forceDesktopMode
Boolean value (default false) to force desktop mode even on mobile devices for downloading files.
```js
new JsFileDownloader({ 
  url: '...',
  forceDesktopMode: true
})
```

#### withCredentials
This is a Boolean that indicates whether or not cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates. Setting withCredentials has no effect on same-site requests.
```js
new JsFileDownloader({ 
  url: '...',
  withCredentials: true
})
```

#### method
The HTTP request method to use, such as "GET", "POST", "PUT", etc. (default "GET")
Ignored for non-HTTP(S) URLs.

```js
new JsFileDownloader({ 
  url: '...',
  method: 'POST'
})
```

#### nameCallback
You could pass a callback to customize final name, the function receive as 1st argument the name automatically extracted.

```js
new JsFileDownloader({ 
  url: '...',
  nameCallback: function(name) {
    return 'i-am-prefix-' + name;
  }
})
```

#### contentType
Setting this property you can customize the content type in the heade request, default is 'application/x-www-form-urlencoded'
If you set this property as false, the library doesn't set it.

```js
new JsFileDownloader({ 
  url: '...',
  contentType: 'multipart/form-data; boundary=something' // or false to unset it
})
```

--- 

#### nativeFallbackOnError
By setting this property to true (default is false) when error occours the download will fallback to the default behavior opening a new tab.

```js
new JsFileDownloader({ 
  url: '...',
  nativeFallbackOnError: true
})
```

--- 

#### body
By setting this property you can customize the body content sent with the request. Default value is `null` (nothing is sent), `Document` or `BodyInit` value can be set.

```js
new JsFileDownloader({ 
  url: '...',
  body: 'The body as a string'
})
```
### License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Alessandro Pellizzari

[apedesign.net](https://apedesign.net/)
