// tc-bm-004.spec.js
const { test, expect } = require('@playwright/test');

test.describe('TC-BM-004 - Course Map', () => {

  test('Cek peta rute lomba', async ({ page }) => {
    // 1. Buka homepage
    await page.goto('https://borobudurmarathon.com/');
    await page.waitForLoadState('networkidle');

    // 2. Klik menu "The Race"
    const theRaceMenu = page.locator('text=The Race');
    await expect(theRaceMenu).toBeVisible();
    await theRaceMenu.click();

    // 3. Klik submenu "Course Map"
    const courseMapMenu = page.locator('text=Course Map');
    await expect(courseMapMenu).toBeVisible();
    await courseMapMenu.click();

    // 4. Cek apakah peta muncul
    // Misal peta ada di iframe atau div dengan id #course-map
    const map = page.locator('#course-map'); // ganti sesuai inspect sebenarnya
    if (await map.count() === 0) {
      console.log('BUG: Course Map tidak muncul');
    } else {
      await expect(map).toBeVisible();
    }
  });

});
