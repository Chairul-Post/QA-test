const { test, expect } = require('@playwright/test');

test.describe('TC-BM-003 - Race Category', () => {

  test('Cek kategori race', async ({ page }) => {
    await page.goto('https://borobudurmarathon.com/');
    await page.waitForLoadState('networkidle'); // tunggu page load semua

    const theRaceMenu = page.locator('text=The Race');
    await expect(theRaceMenu).toBeVisible();
    await theRaceMenu.click();

    const raceCategoryMenu = page.locator('text=Race Category');
    await expect(raceCategoryMenu).toBeVisible();
    await raceCategoryMenu.click();


    const categories = page.locator('.race-category-card');
    const count = await categories.count();

    if (count === 0) {
      console.log('BUG: Tidak ada kategori race yang muncul');
    } else {
      console.log(`Ditemukan ${count} kategori race`);

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
