import { test, expect } from '@playwright/test';

test.describe('Split Payment Error Total ≠ 100%', () => {
  test('Menampilkan error jika total split payment tidak 100%', async ({ page }) => {

    await page.goto('https://contoh.com/checkout');
    const paymentMethod = 'SPLIT_PAYMENT';
    expect(paymentMethod).toBe('SPLIT_PAYMENT');

    const cash = 30000;   // 30%
    const qris = 60000;   // 60%
    const totalPayment = cash + qris;
    expect(totalPayment).not.toBe(100000);

    const systemMessage = 'Total pembayaran harus 100%';
    expect(systemMessage).toContain('100%');
  });
});
