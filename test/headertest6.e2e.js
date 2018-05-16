const assert = require('assert')

describe('header test', () => {
    describe('failing JS test', () => {
        before(() => browser.url('/'))

        it('should have opened correct page', () => {
            assert.deepEqual(browser.getTitle(), 'Jumbotron Template for Bootstrap');
        })
        
        it('should open modal', () => {
            $('#modal').click()
            $('#exampleModalLong').waitForVisible()
            assert($('#exampleModalLong').isVisible())
            assert.deepEqual($('#exampleModalLong .modal-body').getText(), 'Hello There')
        })
        
        it('should close modal', () => {
            $('#closeit').click()
            $('#closeit').waitForVisible(3000, true)
        })

        it('wait 15 seconds', () => {
            browser.pause(15000);
        })

    })
  
})