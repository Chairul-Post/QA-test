import { test, expect } from '@playwright/test';

test('User tidak mengisi Birth Date', async ({ page }) => {

  await page.goto('https://contoh.com');

  await page.fill('#firstName', 'Chairul');
  await page.fill('#middleName', 'D');
  await page.fill('#lastName', 'Jamil');
  await page.fill('#nickname', 'Arul');
  await page.selectOption('#gender', 'male');

  await page.getByRole('button', { name: /save/i }).click();

  const birthDateError = page.locator('#birthDate + .error');

  await expect(birthDateError).toBeVisible();
});
