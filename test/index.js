import chai from 'chai';
import Downloader from '../dist/js-file-downloader.min';
import FileReaderMock from './FileReaderMock';

global.FileReader = FileReaderMock;

const expect = chai.expect;
chai.should();

function noOp () { }

if (typeof window.URL.createObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'createObjectURL', { value: noOp });
}
if (typeof window.URL.revokeObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'revokeObjectURL', { value: noOp });
}

describe('Create an instance of Downloader', () => {

  let DownloaderPromise;

  before(() => {
    DownloaderPromise = new Downloader({
      url: 'https://cdn.apedesign.net/github/logo.png'
    });
  });

  it('should not be rejected', done => {
    DownloaderPromise
      .then(DL => {

        done();

        describe('Checking file', () => {

          it('should have a name', () => {
            DL.link.should.have.property('download');
            DL.link.download.should.be.a('string');
            DL.link.download.should.not.be.empty;
          });

          it('should have an href', () => {
            DL.link.should.have.property('href');
            DL.link.href.should.be.a('string');
            DL.link.href.should.not.be.empty;
          });

        });

      })
      .catch(e => { done(e); });
  });

});

describe('Fallback istance', () => {

  let DownloaderPromise;

  before(() => {
    DownloaderPromise = new Downloader({
      url: 'https://cdn.apedesign.net/github/pixel.png',
      nativeFallbackOnError: true
    });
  });

  it('should fail and fallback to default download', done => {
    DownloaderPromise
      .then(DL => {

        done();

        describe('Checking link', () => {
          it('should have _blank target', () => {
            DL.link.should.have.property('target');
            DL.link.target.should.equal('_blank');
          });
        });

      })
      .catch(e => { done(e); });
  });

});

describe('Passing nameCallback', () => {

  let DownloaderPromise;

  before(() => {
    DownloaderPromise = new Downloader({
      url: 'https://cdn.apedesign.net/github/logo.png',
      nameCallback: name => `test-${name}`
    });
  });

  it('should not be rejected', done => {
    DownloaderPromise
      .then(DL => {

        done();

        describe('Checking file', () => {

          it('should have a name starting with "test-"', () => {
            DL.link.should.have.property('download');
            DL.link.download.should.be.a('string');
            DL.link.download.should.equal('test-logo.png');
          });

        });

      })
      .catch(e => { done(e); });
  });

});

describe('Passing onloadstart', () => {

  let DownloaderPromise;
  let loadingStarted = false;

  before(() => {
    DownloaderPromise = new Downloader({
      url: 'https://cdn.apedesign.net/github/logo.png',
      onloadstart () { loadingStarted = true; }
    });
  });

  it('should not be rejected', done => {
    DownloaderPromise
      .then(DL => {

        done();

        describe('Checking if loadstart listener has been called', () => {

          it('"loadingStarted" flag should be set to true', () => {
            expect(loadingStarted).to.equal(true);
          });

        });
      })
      .catch(e => { done(e); });
  });

});

describe('Rejection test', () => {

  let DownloaderPromise;

  before(() => {
    DownloaderPromise = new Downloader({
      url: 'https://cdn.apedesign.net/github/none.png'
    });
  });

  it('should be rejected', done => {

    DownloaderPromise
      .catch(e => {

        describe('Checking exception', () => {

          it('should be and exception', () => {
            e.name.should.be.a('string');
            e.name.should.be.equal('DownloadException');
            e.message.should.be.a('string');
            e.request.should.be.a('XMLHttpRequest');
          });
        });

        done();
      });
  });

});

describe('Determine content type by header test', () => {

  let DownloaderPromise;

  before(() => {
    DownloaderPromise = new Downloader({
      url: 'https://cdn.apedesign.net/github/logo',
      contentTypeDetermination: 'header'
    });
  });

  it('should not be rejected', done => {
    DownloaderPromise
      .then(({ downloadedFile }) => {

        done();

        describe('Checking file', () => {

          it('should have have correct mime type (image/png)', () => {
            downloadedFile.type.should.be.equal('image/png');
          });

        });
      })
      .catch(e => { done(e); });
  });

});

describe('Determine content type by signature test', () => {

  let DownloaderPromise;

  before(() => {
    DownloaderPromise = new Downloader({
      url: 'https://cdn.apedesign.net/github/logo',
      contentTypeDetermination: 'signature'
    });
  });

  it('should not be rejected', done => {
    DownloaderPromise
      .then(({ downloadedFile }) => {

        done();

        describe('Checking file', () => {

          it('should have have correct mime type (image/png)', () => {
            downloadedFile.type.should.be.equal('image/png');
          });

        });
      })
      .catch(e => { done(e); });
  });

});

describe('Shoud abort', () => {

  let instance;

  before(() => {
    instance = new Downloader({
      url: 'https://cdn.apedesign.net/github/logo.png',
      autoStart: false
    });
  });

  it('should be rejected', done => {
    const promise = instance.start()
      .catch(e => {

        describe('Checking exception', () => {

          it('should be and exception', () => {
            e.should.be.equal('Download cancelled');
          });
        });

        done();
      });

    instance.abort();

    promise
      .catch(e => { done(e); });
  });

});
