import { expect, test } from '@playwright/test';

test('page loads with welcome message', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toContainText('Iyan Armanda Websites');
});

test('displays all links', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('a').first()).toBeVisible();
	const linksCount = await page.locator('a').count();
	expect(linksCount).toBe(2);
});

test('arrow down navigates to next link', async ({ page }) => {
	await page.goto('/');
	const firstLink = page.locator('a').first();
	const secondLink = page.locator('a').nth(1);

	await expect(firstLink).toHaveClass('active');

	await page.keyboard.press('ArrowDown');

	await expect(secondLink).toHaveClass('active');
	await expect(firstLink).not.toHaveClass('active');
});

test('arrow up navigates to previous link', async ({ page }) => {
	await page.goto('/');
	const firstLink = page.locator('a').first();
	const secondLink = page.locator('a').nth(1);

	await expect(firstLink).toHaveClass('active');

	await page.keyboard.press('ArrowDown');
	await expect(secondLink).toHaveClass('active');

	await page.keyboard.press('ArrowUp');
	await expect(firstLink).toHaveClass('active');
});

test('shows label when link is active', async ({ page }) => {
	await page.goto('/');

	const linkLabel = page.locator('.link-label');
	
	await expect(linkLabel).toBeVisible();
	await expect(linkLabel).toContainText('Personal Portfolio');

	await page.keyboard.press('ArrowDown');
	
	await expect(linkLabel).toContainText('Tech Blog & Articles');
});

test('tab key is prevented', async ({ page }) => {
	await page.goto('/');
	const firstLink = page.locator('a').first();
	
	await firstLink.focus();
	await expect(firstLink).toBeFocused();

	await page.keyboard.press('Tab');

	await expect(firstLink).toBeFocused();
});