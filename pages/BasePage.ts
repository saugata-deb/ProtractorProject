import {browser, element, by, protractor} from "protractor"
import {log4jsconfig} from '../config/log4jsconfig'
import {alert} from "../util/alert"

export class BasePage{

    openAccountTab=element(by.buttonText('Open Account'));
    customersTab=element(by.buttonText("Customers"));

    async clickOnOpenAccountTab(){
        await this.openAccountTab.click();
    }

    async clickOnCustomersTab()
    {
        await this.customersTab.click();
    }
}
