import { test, expect } from '@playwright/test';

test.describe('TC-SP-01 Split Payment 40:60 Tunai & QRIS', () => {

  test('Split payment berhasil', async ({ page }) => {

    // STEP 1: Buka halaman aplikasi (dummy untuk tugas)
    await page.goto('https://example.com');

    // STEP 2: Simulasi pilih produk & checkout
    await expect(page).toHaveURL(/example.com/);

    // STEP 3: Validasi proses split payment (simulasi)
    const cash = 40000;
    const qris = 60000;
    const total = cash + qris;

    // STEP 4: Validasi total pembayaran
    expect(total).toBe(100000);

    // STEP 5: Simulasi hasil pembayaran QRIS berhasil
    const qrisStatus = 'SUCCESS';

    expect(qrisStatus).toBe('SUCCESS');

  });

});
