
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    
  
    directConnect:true,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['MVP.js'],
    rootElement: 'container',
    // multiCapabilities: [{
    // browserName: 'firefox',
    // shardTestFiles: true,
    //   browserName: 'chrome' ,
    //  chromeOptions:{
    //    args: ['--start-maximized','--disable-extensions']
    //  }
     
    // },],

    multiCapabilities: [
      {'browserName': 'firefox'},
      {'browserName': 'chrome',
      chromeOptions:{
           args: ['--start-maximized','--disable-extensions']
         }
    },    
],
    
    maxSessions: 1,
    // allScriptsTimeout: 100000,
    // jasmineNodeOpts: {
    //   showColors: true,
    //   defaultTimeoutInterval: 250000,
    //   isVerbose: true
    //    },
    //    plugins: [{
    //     package: 'jasmine2-protractor-utils',
    //     disableHTMLReport: false,
    //     disableScreenshot: false,
    //     screenshotPath:'./reports/screenshots',
    //     screenshotOnExpectFailure:true,
    //     screenshotOnSpecFailure:true,
    //     clearFoldersBeforeTest: true,
    //     htmlReportDir: './reports/htmlReports',
    //     failTestOnErrorLog: {
    //                 failTestOnErrorLogLevel: 900,
    //                 excludeKeywords: ['keyword1', 'keyword2']
    //             }
    //   }],

      onPrepare: function () {
 
        // returning the promise makes protractor wait for the reporter config before executing tests 
        //return global.browser.getProcessedConfig().then(function (config) {
              
       // });

       jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: 'tmp/screenshots',
        //preserveDirectory: false,
        docTitle: 'My Villa Plus Execution Report'
     }).getJasmine2Reporter());
        }

      
    
       

  }