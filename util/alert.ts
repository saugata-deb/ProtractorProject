import {protractor, browser} from "protractor"
import {log4jsconfig} from '../config/log4jsconfig'

export class alert{

    /*static VerifyAndCloseAlert(text:string)
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
    }*/

    static async VerifyAndCloseAlert(text:string)
    {
      let condition=protractor.ExpectedConditions;
      browser.wait(condition.alertIsPresent(),4000,"Alert is not found");
      
      let alert= await browser.switchTo().alert();
      let alertText=await alert.getText();
      log4jsconfig.Log().debug("Alert Text:"+ alertText);
      /*alertText.then(function(txt){
        log4jsconfig.Log().debug("Alert Text:"+ txt);
      })*/
      browser.sleep(4000);
      expect(alertText).toContain(text);
      await alert.accept();
    }
}