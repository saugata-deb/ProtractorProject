import { Config, browser } from "protractor"

export let config:Config={

    directConnect: true,
    framework: "jasmine",

    capabilities:{
        browserName:'chrome',
        //browserName:'firefox',
        //marionette: true,
        acceptSslCerts: true

    },
    suites:{
        calc:['./src/Calculator.js'],
        bank:['./testspecs/bankTest.js'],
        bothapp:['./src/Calculator.js', './testspecs/bankTest.js']
    },
    specs:['./testspecs/bankTest.js'],
    seleniumAddress:'http://localhost:4444/wd/hub',
    
    onPrepare:()=>{
        (global as any).isAngularSite=function(flag:boolean){
            browser.ignoreSynchronization=!flag;
        }
        var os= require('os');
        //browser.waitForAngularEnabled(false)
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(4000);
        
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'C:\allure-results'
    }));

    }

}