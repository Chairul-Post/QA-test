import { test, expect } from '@playwright/test';

test('TC-UI-005 - User mengisi Nickname dengan data tidak valid', async ({ page }) => {
  await page.goto('https://contoh.com');

  await page.fill('#firstName', 'Chairul');
  await page.fill('#middleName', 'D');
  await page.fill('#lastName', 'Jamil');
  await page.selectOption('#gender', 'male');
  await page.fill('#birthDate', '2026-01-10');
  await page.fill('#nickname', '!!@##!!@');

  await page.getByRole('button', { name: /save/i }).click();

  const nicknameError = page.locator('#nickname + .error');

  await expect(nicknameError).toBeVisible();
});
