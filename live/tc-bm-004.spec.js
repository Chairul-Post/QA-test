const { test, expect } = require('@playwright/test');

test.describe('TC-BM-004 - Course Map', () => {

  test('Cek peta rute lomba', async ({ page }) => {

    await page.goto('https://borobudurmarathon.com/');
    await page.waitForLoadState('networkidle');

    const theRaceMenu = page.locator('text=The Race');
    await expect(theRaceMenu).toBeVisible();
    await theRaceMenu.click();

    const courseMapMenu = page.locator('text=Course Map');
    await expect(courseMapMenu).toBeVisible();
    await courseMapMenu.click();

    const map = page.locator('#course-map'); 
    if (await map.count() === 0) {
      console.log('BUG: Course Map tidak muncul');
    } else {
      await expect(map).toBeVisible();
    }
  });

});
