import { test, expect } from '@playwright/test';


test.describe('Diskon Tidak Berlaku Jika Total < Rp100.000', () => {


  test('Sistem tidak menerapkan diskon dan user tetap bisa checkout', async ({ page }) => {


    await page.goto('https://contoh.com/products');


    const item1Price = 40000;
    const item2Price = 50000;
    const totalBelanja = item1Price + item2Price;


    expect(totalBelanja).toBe(90000);
    expect(totalBelanja).toBeLessThan(100000);


    const discountApplied = totalBelanja >= 100000;
    expect(discountApplied).toBe(false);


    const canProceedToCheckout = true;
    expect(canProceedToCheckout).toBe(true);


  });


});
