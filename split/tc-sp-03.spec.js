import { test, expect } from '@playwright/test';

test.describe('QRIS Gagal Setelah Tunai Diproses', () => {
  test('Pembayaran Gagal', async ({ page }) => {

    await page.goto('https://contoh.com/checkout');
    const cash = 40000;   // 40%
    const qris = 60000;   // 60%
    const totalPayment = cash + qris;
    expect(totalPayment).toBe(100000);

    const cashPaymentStatus = 'SUCCESS';
    expect(cashPaymentStatus).toBe('SUCCESS');

    const qrisPaymentStatus = 'FAILED';
    expect(qrisPaymentStatus).toBe('FAILED');

    const transactionStatus = 'FAILED';
    expect(transactionStatus).toBe('FAILED');

  });


});
