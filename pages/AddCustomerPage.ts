import {browser, element, by, protractor} from "protractor"
import {log4jsconfig} from '../config/log4jsconfig'
import {alert} from "../util/alert"

export class AddCustomerPage{

    prop1=require("../testdata/prop1");

    firstname=element(by.model('fName'));
    lastname=element(by.model('lName'));
    postalcode=element(by.model('postCd'));
    addcustbtn=element(by.className('btn btn-default')); 

    fname=this.prop1.customers.firstName;
    lname=this.prop1.customers.lastName;
    pcode=this.prop1.customers.postalCode;
    
    async AddCustomer(){
        var prop1= require("C:/Data Science/ProtractorProject/testdata/prop");
        
        
        await this.firstname.sendKeys(this.fname);
        await this.lastname.sendKeys(this.lname);
        await this.postalcode.sendKeys(this.pcode);
        await this.addcustbtn.click();
        browser.sleep(3000);
        await alert.VerifyAndCloseAlert("Customer added successfully");
    }


      
}