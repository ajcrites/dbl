describe(`landing/login`, () => {
  it(`logs the user in`, function() {
    browser.get("http://localhost:3000/");

    let loginAnchor = element(by.css("#login a"))
    loginAnchor.click();

    browser.getAllWindowHandles().then(handles => browser.switchTo().window(handles[1]));

    browser.driver.findElement(by.id("Email")).sendKeys("ajcrites");
    browser.driver.findElement(by.id("next")).click();
    browser.sleep(200);
    browser.driver.findElement(by.id("Passwd")).sendKeys("INSERT PW HERE");
    browser.driver.findElement(by.id("signIn")).click();

    browser.getAllWindowHandles().then(handles => browser.switchTo().window(handles[0]));

    browser.sleep(1000);

    let logoutAnchor = element(by.css("header a"));
    expect(loginAnchor.isPresent()).toBeFalsy();
    expect(logoutAnchor.isPresent()).toBeTruthy();

    logoutAnchor.click();
    expect(loginAnchor.isPresent()).toBeTruthy();
    expect(logoutAnchor.isPresent()).toBeFalsy();
  });
});
