import chai, { expect } from 'chai';
import Downloader from '../dist/js-file-downloader.min';

chai.expect();
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
      url: 'https://github.alessandropellizzari.it/test/apedesign-bg.png'
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

describe('Passing nameCallback', () => {

  let DownloaderPromise;

  before(() => {
    DownloaderPromise = new Downloader({
      url: 'https://github.alessandropellizzari.it/test/apedesign-bg.png',
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
            DL.link.download.should.equal('test-apedesign-bg.png');
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
      url: 'https://github.alessandropellizzari.it/test/no-exists.png'
    });
  });

  it('should be rejected', done => {

    DownloaderPromise
      .catch(e => {

        describe('Checking exception', () => {

          it('should be and exception', () => {
            e.name.should.be.a('string');
            e.name.should.be.equal('downloadException');
            e.message.should.be.a('string');
            e.request.should.be.a('XMLHttpRequest');
          });
        });

        done();
      });
  });

});
