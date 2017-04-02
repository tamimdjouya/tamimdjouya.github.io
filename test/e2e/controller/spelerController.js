describe('E2E: SpelersController', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/#!/speler');
    });
    
    it('should display title page', function() {
        var locator = by.css('.text-left');
        var element = browser.driver.findElement(locator);
        expect(element.getAttribute('textContent')).toBe("Spelers");
    });

});
