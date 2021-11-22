import {browser, element, by, protractor} from "protractor"
import {log4jsconfig} from '../config/log4jsconfig'
import { AddCustomerPage } from "../pages/AddCustomerPage";
import { BasePage } from "../pages/BasePage";
import { CustomerPage } from "../pages/CustomerPage";
import { OpenAccountPage } from "../pages/OpenAccountPage";
//import * as prop from "C:/DataScience/ProtractorProject/testdata/prop.json"

//const log=require('../config/logging').defaults;
var prop1= require("C:/Data Science/ProtractorProject/testdata/prop");
describe("Banking Project Test",async function(){
    
    beforeEach(async function(){
        //browser.get("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust");
        //browser.get((<any>prop).siteUrl);
        await browser.get(prop1.siteUrl);
        
    })
    it("Verify Add Customer Details",async function(){
      
      let addCustomer=new AddCustomerPage();
      await addCustomer.AddCustomer();
      browser.sleep(2000);
      await new BasePage().clickOnOpenAccountTab();

      let openAccount=new OpenAccountPage();
      await openAccount.SelectACustomer();
      await openAccount.SelectCurrency();
      browser.sleep(2000);
      await openAccount.ClickOnProcessBtn();
      browser.sleep(2000);
      
      await new BasePage().clickOnCustomersTab();
      browser.sleep(2000);

      await new CustomerPage().VerifyCustEntryAndDelete();
      browser.sleep(3000);

    })
})