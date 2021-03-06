module.exports = {
    async autoGeneratedWord() {
      let autoGenerateWord = ''
      let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      for (let i = 0; i < 7; i++) {
        autoGenerateWord += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      return autoGenerateWord
    },
  
    async deleteAllPlaylist() {
      let until = protractor.ExpectedConditions
      let deleteItemLocator = '[data-testid*="addremove-card"]'
      await browser.wait(until.visibilityOf(element(by.css(deleteItemLocator))), 25000, 'Delete item was not displayed')
      let deleteItems = await element.all(by.css(deleteItemLocator))
      for (let i = deleteItems.length - 1; i >= 0; i--) {
        let elementPresent = await element(by.css(deleteItemLocator)).isPresent()
        if (elementPresent) {
          await element(by.css(deleteItemLocator)).click()
          await browser.sleep(3000) // We are waiting a few seconds as the system is sometimes slow updating playlist
        }
      }
    },
  }