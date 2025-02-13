import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('TuiError', () => {
    test('No extra space between content', async ({page}) => {
        await tuiGoto(page, 'components/error#base');
        const example = new TuiDocumentationPagePO(page).getExample('#base');

        const checkbox = example.locator('tui-toggle input[type="checkbox"]');
        const error = example.locator('tui-error');

        await expect(error).not.toBeVisible();
        await checkbox.click();

        await expect(checkbox).toBeChecked();
        await expect(error).toBeVisible();
        await expect(error).toHaveText('An error');

        await expect(example).toHaveScreenshot('01-error.png');
    });
});
