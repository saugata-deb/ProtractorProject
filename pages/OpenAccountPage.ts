import {browser, element, by, protractor} from "protractor"
import {log4jsconfig} from '../config/log4jsconfig'
import {alert} from "../util/alert"

export class OpenAccountPage{
    
    prop1=require("../testdata/prop1")
    customers=element(by.model('custId'));
    options=this.customers.all(by.tagName('option'));
    
    currency=element(by.model('currency'));
    processBtn=element(by.buttonText('Process'));
    
    customerName=this.prop1.customers.firstName+" "+this.prop1.customers.lastName;

    /*SelectACustomer(){
            let customerName=this.customerName;
            this.options.then(function(items){
            log4jsconfig.Log().debug("Drop-down option size:"+items.length);
            for(let i=0;i<items.length;i++)
            {
              items[i].getText().then(function(text:any){
                log4jsconfig.Log().debug(text);
                
                if(text==customerName)
                {
                  items[i].click();
                  log4jsconfig.Log().debug("Item found in the list:"+text);
                }
              })
    
            }
          })
    
    }*/

    async SelectACustomer(){
        let customerName=this.customerName;
        log4jsconfig.Log().debug("Drop-down option size:"+(await this.options).length);
        log4jsconfig.Log().debug("Customers Count:"+(await this.options).length);
        for(let i=0;i<(await this.options).length;i++){
            log4jsconfig.Log().debug(await this.options.get(i).getText());
            if(await this.options.get(i).getText()==customerName){
                await this.options.get(i).click();
            }
        }
    }

    async SelectCurrency(){
        
        await this.currency.$('[value="Dollar"]').click();
    }

    async ClickOnProcessBtn(){
        await this.processBtn.click();
        browser.sleep(3000);
        await alert.VerifyAndCloseAlert("Account created successfully")
    }

}