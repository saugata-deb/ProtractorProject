import {browser,element,by} from "protractor"
import {log4jsconfig} from '../config/log4jsconfig'


//const log=require('../config/logging').defaults;

describe("Handle Multiple Winodws",function(){

    beforeEach(function()
    {
        (global as any).isAngularSite(false);
        browser.get("https://skpatro.github.io/demo/links/");
    })
    it("Launch url check",function(){
        let parentWindowTitle:any;
        browser.getTitle().then(function(txt){
            console.log("Main brwser title:"+txt);
            parentWindowTitle=txt;
        })
        browser.findElement(by.name('NewWindow')).click();
        let windowHandles=browser.getAllWindowHandles();
        let parentHandle, childHandle;
        windowHandles.then(function(handle){
            parentHandle=handle[0];
            childHandle=handle[1];
            console.log("Total Handles:"+handle.length);
            browser.switchTo().window(childHandle).then(function(){
                browser.getTitle().then(function(txt){
                console.log("Child Window title:"+txt);
                browser.close();
                })
            })
            browser.switchTo().window(parentHandle).then(function(){
                browser.getTitle().then(function(txt){
                    console.log("Main Window title:"+txt);
                    expect(txt).toEqual(parentWindowTitle)
                    })
                    
            })
           
        })


        
    })
    
})
