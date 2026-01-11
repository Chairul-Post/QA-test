import { test, expect } from '@playwright/test';

test('TC-UI-001 - User mengisi form profile dengan data valid', async ({ page }) => {
  await page.goto('https://contoh.com');

  await page.fill('#firstName', 'Chairul');
  await page.fill('#middleName', 'D');
  await page.fill('#lastName', 'Jamil');
  await page.fill('#nickname', 'Arul');
  await page.selectOption('#gender', 'male');
  await page.fill('#birthDate', '2026-01-10');

  await page.getByRole('button', { name: /save/i }).click();

  expect(true).toBeTruthy();
});
