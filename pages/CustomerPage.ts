import {browser, element, by, protractor} from "protractor"
import {log4jsconfig} from '../config/log4jsconfig'
import {alert} from "../util/alert"

export class CustomerPage{
    prop1=require("../testdata/prop1")
    rows=element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
    
    fname=this.prop1.customers.firstName;
    
    /*VerifyCustEntryAndDelete(){
        let firstname=this.fname;
        this.rows.each(function(row:any){
            let cells=row.$$('td');
            cells.get(0).getText().then(function(txt:any){
              if(txt==firstname)
              {
                cells.get(4).$('button').click();
              }
            })
          })
    }*/
    async VerifyCustEntryAndDelete(){
        let firstname=this.fname;

        this.rows.each( async function(row:any){
            let cells=row.$$('td');
            if(cells.get(0).getText()==firstname)
            {
                await cells.get(4).$('button').click();
            }
            
          })

    }  
      
}