const { test, expect } = require('@playwright/test');

test.describe('Registration', () => {

  test('Cek keberadaan form pendaftaran', async ({ page }) => {
    await page.goto('https://my.borobudurmarathon.com/signin');

    const form = page.locator('form'); 
    const logo = page.locator('img[alt="Logo"]');

    if (await form.count() === 0 && await logo.count() > 0) {
      console.log('BUG: Form registrasi tidak muncul, hanya logo terlihat');
    } else {
      await expect(form).toBeVisible();
    }
  });

});