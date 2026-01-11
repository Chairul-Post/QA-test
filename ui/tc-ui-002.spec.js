import { test, expect } from '@playwright/test';

test('User save form tanpa mengisi field wajib', async ({ page }) => {

  await page.goto('https://contoh.com');

  await page.getByRole('button', { name: /save/i }).click();

  const errorMessages = page.locator('.error, .validation-error');

  await expect(errorMessages).toBeVisible();
});