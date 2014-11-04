var DemoPage = function() {
    //selecting elements
    this.welcomeHeader = element(by.tagName('h1'));
    this.localUsers = element.all(by.repeater('user in localUsers'));
    this.remoteUsers = element.all(by.repeater('user in remoteUsers'));

    this.get = function() {
        browser.get('http://127.0.0.1/~djohn3/angular-workshop/exercise1/client/index.html');
    };
};

describe('demo page', function() {
    var demoPage;
    
    beforeEach(function() {
        //i.e. typing the url into your browser and hitting enter
        demoPage = new DemoPage();
        demoPage.get();
    });
    
    it('should have a h1 tag with the correct text', function() {
        //gets the text content of this element/contents
        expect(demoPage.welcomeHeader.getText()).toEqual('Welcome Dan');
    });
    
    it('should have three local users', function() {
        expect(demoPage.localUsers.count()).toEqual(3);
    });
    
    it('should add a local user', function() {
        //make sure we're starting off with 3 users
        expect(demoPage.localUsers.count()).toEqual(3);

        //click the adduser button
        element(by.css('.js-addLocalUser')).click();
        
        expect(demoPage.localUsers.count()).toEqual(4);
    });
    
    it('should have three remote users', function() {
        expect(demoPage.remoteUsers.count()).toEqual(3);
    });
});