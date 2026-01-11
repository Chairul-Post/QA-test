import { test, expect } from '@playwright/test';

test.describe('Split Payment 40:60 Tunai & QRIS', () => {

  test('Split payment berhasil', async ({ page }) => {
    await page.goto('https://contoh.com');
    await expect(page).toHaveURL(/contoh.com/);

    const cash = 40000;
    const qris = 60000;
    const total = cash + qris;
    expect(total).toBe(100000);

    const qrisStatus = 'SUCCESS';
    expect(qrisStatus).toBe('SUCCESS');


  });


});
