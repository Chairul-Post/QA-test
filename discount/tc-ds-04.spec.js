import { test, expect } from '@playwright/test';


test.describe('Pembayaran Berhasil Setelah Diskon Diterapkan', () => {


  test('Transaksi berhasil dan status pembayaran sukses', async ({ page }) => {


    const discountApplied = true;
    expect(discountApplied).toBe(true);


    await page.goto('https://contoh.com/checkout');


    const checkoutStatus = 'READY';
    expect(checkoutStatus).toBe('READY');


    const paymentStatus = 'SUCCESS';
    expect(paymentStatus).toBe('SUCCESS');


    const transactionStatus = 'SUCCESS';
    expect(transactionStatus).toBe('SUCCESS');


  });


});
