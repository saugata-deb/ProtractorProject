import {browser, element, by, protractor} from "protractor"
import {log4jsconfig} from '../config/log4jsconfig'
//import * as prop from "C:/DataScience/ProtractorProject/testdata/prop.json"

//const log=require('../config/logging').defaults;
var prop1= require("C:/Data Science/ProtractorProject/testdata/prop");
describe("Banking Project Test",function(){
    
    function VerifyAndCloseAlert(text:string)
    {
      let condition=protractor.ExpectedConditions;
      browser.wait(condition.alertIsPresent(),4000,"Alert is not found");
      let alert=browser.switchTo().alert();
      let alertText=alert.getText();

      alertText.then(function(txt){
        log4jsconfig.Log().debug("Alert Text:"+ txt);
      })

      browser.sleep(4000);
      expect(alertText).toContain(text);
      alert.accept();


    }
    beforeEach(function()
    {
        //browser.get("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust");
        //browser.get((<any>prop).siteUrl);
        browser.get(prop1.siteUrl);
        
    })
    it("Verify the flow",function(){
      //let firstname=(<any>prop).customers.firstName;
      //let lastname=(<any>prop).customers.lastName;
      //let postalcode=(<any>prop).customers.postalCode;
      let firstname=prop1.customers.firstName;
      let lastname=prop1.customers.lastName;
      let postalcode=prop1.customers.postalCode;
      element(by.model('fName')).sendKeys(firstname);
      element(by.model('lName')).sendKeys(lastname);
      element(by.model('postCd')).sendKeys(postalcode);
      element(by.className('btn btn-default')).click();  
      VerifyAndCloseAlert("Customer added successfully");
      
      element(by.buttonText('Open Account')).click();
      let customers=element(by.model('custId'));
      let options=customers.all(by.tagName('option'));

      options.then(function(items){
        log4jsconfig.Log().debug("Drop-down option size:"+items.length);
        for(let i=0;i<items.length;i++)
        {
          items[i].getText().then(function(text:any){
            log4jsconfig.Log().debug(text);
            if(text==(firstname+" "+lastname))
            {
              items[i].click();
              log4jsconfig.Log().debug("Item found in the list:"+text);
            }
          })

        }
      })

      element(by.model('currency')).$('[value="Dollar"]').click();
      element(by.buttonText('Process')).click();
      browser.sleep(4000);
      VerifyAndCloseAlert("Account created successfully");

      element(by.buttonText("Customers")).click();
      let rows=element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
      browser.sleep(10000);

      rows.each(function(row:any){
        let cells=row.$$('td');
        cells.get(0).getText().then(function(txt:any){
          if(txt==firstname)
          {
            cells.get(4).$('button').click();
          }
        })
      })
      browser.sleep(2000);

    })
})