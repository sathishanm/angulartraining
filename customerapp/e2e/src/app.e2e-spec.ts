 import { browser, logging, element, by } from 'protractor';

describe('Customer application E2E test Suite', () => {
  
  beforeAll(() => {
    // window.sessionStorage.setItem("user","banu");
  })

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
  });

  it('should display customers', async (done) => {
    browser.get("/");
    browser.waitForAngular();
    let customers = element.all(by.css(".card"));
    let count = await customers.count();
    await browser.sleep(1000);
    expect(count).toBe(6);
    done();
  });

  it('should filter', async (done) => {
    browser.get("/");
    browser.waitForAngular();
    let searchInput = element.all(by.name("searchText"));
    searchInput.sendKeys("Geller").then( async () => {
      await browser.sleep(3000);
      let customers = element.all(by.css(".card"));
      let count = await customers.count();
      expect(count).toBe(2);
      done();
    });
   
  });
});
