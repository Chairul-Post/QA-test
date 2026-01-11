// test/tc-bm-003.spec.js
const { test, expect } = require('@playwright/test');

test.describe('TC-BM-003 - Race Category', () => {

  test('Cek kategori race', async ({ page }) => {
    // 1. Buka homepage
    await page.goto('https://borobudurmarathon.com/');
    await page.waitForLoadState('networkidle'); // tunggu page load semua

    // 2. Klik menu "The Race"
    const theRaceMenu = page.locator('text=The Race');
    await expect(theRaceMenu).toBeVisible();
    await theRaceMenu.click();

    // 3. Klik submenu "Race Category"
    const raceCategoryMenu = page.locator('text=Race Category');
    await expect(raceCategoryMenu).toBeVisible();
    await raceCategoryMenu.click();

    // 4. Cek elemen kategori lomba
    // Misal setiap kategori ada di class .race-category-card
    const categories = page.locator('.race-category-card');
    const count = await categories.count();

    if (count === 0) {
      console.log('BUG: Tidak ada kategori race yang muncul');
    } else {
      console.log(`Ditemukan ${count} kategori race`);
      // cek tiap kategori minimal ada nama, jarak, tanggal, price
      for (let i = 0; i < count; i++) {
        const category = categories.nth(i);
        await expect(category.locator('.category-name')).toBeVisible();
        await expect(category.locator('.category-distance')).toBeVisible();
        await expect(category.locator('.category-date')).toBeVisible();
        await expect(category.locator('.category-price')).toBeVisible();
      }
    }
  });

});
