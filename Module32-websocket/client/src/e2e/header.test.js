import puppeteer from 'puppeteer';

describe('h1 title', () => {
	it('should be displayed correctly', async () => {
		//создаём объект браузера
		let browser = await puppeteer.launch({
			//без графической оболочки
			headless: false,
			slowMo: 250,
		});
		//создаём объект страницы
		let page = await browser.newPage();
		page.emulate({
			viewport: {
				width: 600,
				height: 800,
			},
			userAgent: '',
		});
		await page.goto('http://localhost:3000/reg');
		await page.waitForSelector('.title');

		const html = await page.$eval('.title', (e) => e.innerHTML);
		expect(html).toBe('Расскажите о себе');
		browser.close();
	}, 16000);
});
