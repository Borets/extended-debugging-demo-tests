const assert = require('assert')

describe('flaky login test', () => {
    before(() => browser.url('/'))
    
    it('should try to login', () => {
        $('#username').setValue('admin')
        $('#password').setValue('mysupersecretpassword')
        $('#login').click()
        browser.waitUntil(() => browser.getTitle() === 'Admin Area', 5000, 'Could not log in')
    })
}) 