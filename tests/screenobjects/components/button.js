export default class Button {
    static openMake () {
        $('~make').click();
    }

    static openAbarth () {
        $('~Abarth').click();
    }
    
    static waitForButtonResetShown () {
        $('~reset').waitForDisplayed(20000);
    }

    static waitForButtonMakeShown () {
        $('~make').waitForDisplayed(20000);
    }

    static waitForAbarthShown () {
        $('~Abarth').waitForDisplayed(20000);
    }
}
