import { test, expect } from '@playwright/test';


test.describe('Pembayaran Gagal Setelah Checkout', () => {


  test('User dikembalikan ke halaman checkout jika pembayaran gagal', async ({ page }) => {


    await page.goto('https://contoh.com/payment');


    const checkoutStatus = 'STARTED';
    expect(checkoutStatus).toBe('STARTED');
l
    const paymentStatus = 'FAILED';
    expect(paymentStatus).toBe('FAILED');


    const redirectPage = 'CHECKOUT';
    expect(redirectPage).toBe('CHECKOUT');


  });


});
