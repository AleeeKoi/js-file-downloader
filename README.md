<p align="center">
  <a href="http://alessandropellizzari.it" target="_blank" rel="noopener noreferrer">
    <img height="150" src="http://alessandropellizzari.it/github/alessandro_pellizzari.png" alt="AP Logo" />
  </a>
</p>

---

# JS Download Status

## Introduction

JS Download Status is a simple no dependency library you will be able to download file from browser and show downloading status.

### Browser Compatibility

JS Download Status supports all browsers that are [ES5-compliant] (http://kangax.github.io/compat-table/es5/) (IE8 and below are not supported).

---

### Installing

With a package manager (**recomanded**): 
```js
npm install js-download-status --save 
```

**Manually:**  
Download this library from https://github.com/AleeeKoi/js-download-status/releases

---

### Basic usage

```js

import Downloader from 'js-download-status';

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

#### filename
Setting this String you can force output file name

#### mobileDisabled
Boolean value (default false) to enable/disable library on mobile browsers.

#### timeout (ms)
Integer value (default 40000) defining how much ms attend before stop download action.

--- 

### License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Alessandro Pellizzari
