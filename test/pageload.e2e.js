const assert = require('assert')

describe('Performance Test', () => {
    describe('Web App Performance Test', () => {
        it('should load fast', () => {
            browser.url('https://saucecon.herokuapp.com/')

            const { value } = browser.log('sauce:metrics')
            const pageLoadTime = value.domContentLoaded - value.navigationStart
            assert.ok(pageLoadTime <= 5, `Expected page load time to be lower than 5s but was ${pageLoadTime}s`)
        })

    })
})
