afterEach(async function (capabilities, specs) {
    if (this.currentTest.state === 'failed') {
        await browser.takeScreenshot();
    }
});
