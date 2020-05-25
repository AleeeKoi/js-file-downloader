<p align="center">
  <a href="http://alessandropellizzari.it" target="_blank" rel="noopener noreferrer">
    <img height="150" src="http://alessandropellizzari.it/github/alessandro_pellizzari.png" alt="AP Logo" />
  </a>
</p>

---

# JS File Downloader

<p align="center">
  <a href="https://www.npmjs.com/package/js-file-downloader"><img src="https://img.shields.io/npm/v/js-file-downloader.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/js-file-downloader"><img src="https://img.shields.io/npm/l/js-file-downloader.svg" alt="License"></a>
</p>

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

import Downloader from 'js-file-downloader';

const fileUrl = 'http://...';

new Downloader({ 
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
  new jsFileDownloader({ url: 'http://alessandropellizzari.it/assets/img/og-image.jpg' })
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

new Downloader({ 
  url: '...',
  process: process
})
  
```

#### headers (of request)
If you need to customize request header data you can pass an array of objects like following example:

```js
new Downloader({ 
  url: '...',
  headers: [
    { name: 'Authorization', value: 'Bearer ABC123...' }
  ]
})
```

#### filename
Setting this String you can force output file name

#### mobileDisabled
Boolean value (default false) to enable/disable library on mobile browsers.

#### timeout (ms)
Integer value (default 40000) defining how much ms attend before stop download action.

#### autoStart
Boolean value (default true) to enable/disable automatically starting the download. When the value is `true` the constructor returns a `Promise`, however when it's set to false, the constructor doesn't return anything and the download can be started by calling the `start()` method on the object.

Example with `autoStart` set to `true`
```js
new Downloader({ 
  url: '...',
  autoStart: true
})
```

Example with `autoStart` set to `false`
```js
const download = new Downloader({ 
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
new Downloader({ 
  url: '...',
  forceDesktopMode: true
})
```

#### withCredentials
This is a Boolean that indicates whether or not cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates. Setting withCredentials has no effect on same-site requests.
```js
new Downloader({ 
  url: '...',
  withCredentials: true
})
```

#### method
The HTTP request method to use, such as "GET", "POST", "PUT", etc. (default "GET")
Ignored for non-HTTP(S) URLs.

```js
new Downloader({ 
  url: '...',
  method: 'POST'
})
```

--- 

### License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Alessandro Pellizzari

[alessandropellizzari.it](http://www.alessandropellizzari.it)
