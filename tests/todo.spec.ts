import { test, expect } from "@playwright/test";


test('Todoリストにタスクを追加', async ({ page }) => {
await page.goto('http://localhost:3000/todo');

const taskInput = page.locator('input[placeholder="タスクを入力"]');
await taskInput.fill('新しいタスク');

await page.click('button:has-text("追加")');

  // タスクがリストに追加されたことを確認
  const taskList = page.locator('ul > li');
  await expect(taskList).toHaveCount(1);
  await expect(taskList.first()).toHaveText('新しいタスク');
});