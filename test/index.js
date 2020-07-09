
import chai from 'chai';
import Downloader from '../src/index';

chai.expect();
chai.should();

function noOp () { }

if (typeof window.URL.createObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'createObjectURL', { value: noOp });
}
if (typeof window.URL.revokeObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'revokeObjectURL', { value: noOp });
}

// const expect = chai.expect;
// const should = chai.should;

describe('Create an instance of Downloader', () => {

  let DownloaderPromise;

  before(() => {
    DownloaderPromise = new Downloader({
      url: 'http://github.alessandropellizzari.it/test/apedesign-bg.png'
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
      url: 'http://github.alessandropellizzari.it/test/apedesign-bg.png',
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
