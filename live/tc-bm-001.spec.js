const { test, expect } = require('@playwright/test');

test.describe('TC-BM-001 - Homepage', () => {
  test('Akses homepage dan cek elemen utama', async ({ page }) => {
    await page.goto('https://borobudurmarathon.com/');
    const banner = page.locator('.main-container.transition--fade.transition--active');
    await expect(banner).toBeVisible();
    const header = page.locator('#menu-english');
    await expect(header).toBeVisible();
    const footer = page.locator('.bg--dark.footer-4');
    await expect(footer).toBeVisible();
  });
});
