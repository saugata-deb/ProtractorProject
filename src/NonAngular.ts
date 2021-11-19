import {browser,element,by} from "protractor"
import {log4jsconfig} from '../config/log4jsconfig'


//const log=require('../config/logging').defaults;

describe("Calculator Test",function(){

    it("Launch url check",function(){
        //browser.ignoreSynchronization=true;
        (global as any).isAngularSite(false);
        browser.get("http://qavalidation.com/demo/");
        browser.sleep(1000);
    })
   
})
