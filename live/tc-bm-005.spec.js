const { test, expect } = require('@playwright/test');

test('TC-BM-005 - Contact Us (Dropdown)', async ({ page }) => {
  await page.goto('https://borobudurmarathon.com/');
  await page.waitForLoadState('networkidle');

  // 1. Hover menu Contact (parent) → FIX STRICT MODE
  const contactMenu = page.locator('a:has-text("Contact")').first();
  await expect(contactMenu).toBeVisible();
  await contactMenu.hover();

  // 2. Klik Contact Us (submenu, pakai ID)
  const contactUsMenu = page.locator('#menu-item-6545');
  await expect(contactUsMenu).toBeVisible();
  await contactUsMenu.click();

  // 3. Validasi isi halaman
  await expect(
    page.locator('a[href="mailto:info@borobudurmarathon.com"]')
  ).toBeVisible();

  await expect(
    page.locator('a[href="/ig"]')
  ).toBeVisible();
});
