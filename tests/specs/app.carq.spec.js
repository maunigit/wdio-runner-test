import Button from '../screenobjects/components/button';

describe('WebdriverIO and Appium, interacting with Home elements,', () => {
    it('should be able turn click on Make', () => {        
        Button.waitForButtonMakeShown();
        Button.openMake();
        Button.waitForAbarthShown();
        Button.openAbarth();
        driver.pause(5000);
    });
});