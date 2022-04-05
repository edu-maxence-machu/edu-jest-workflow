module.exports = {
    'Demo test FizzBuzz': function(browser) {
      browser
        .url('http://localhost:5500')
        .waitForElementVisible('body')
        .assert.visible('h1') 
        .assert.containsText('#content > .col', '1')
        .end();
    },
  };
  