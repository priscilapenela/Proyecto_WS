import fs from 'fs';
import { chromium } from 'playwright';

async function scrapePage(url) {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url);

    let data = [];

    if (url.includes('guvi.in')) {
        data = await page.$$eval('.single-post-content', (results) => 
            results.flatMap((myBox) => {
                return Array.from(myBox.querySelectorAll('h3.wp-block-heading'))
                    .slice(0, 10)
                    .map((el) => {
                        const title = el.innerText;
                        const imageElement = el.nextElementSibling?.querySelector('figure.wp-block-image img');
                        const image = imageElement ? imageElement.getAttribute('src') : null;
                        const descriptionElement = imageElement?.closest('figure')?.nextElementSibling;
                        const description = descriptionElement ? descriptionElement.innerText : null;
                        return { title, image, description };
                    });
            })
        );
    } else if (url.includes('zegocloud.com')) {
        data = await page.$$eval('.post-content', (results) =>
            results.flatMap((myBox) => {
                return Array.from(myBox.querySelectorAll('h3'))
                    .slice(0, 10)
                    .map((el) => {
                        const title = el.innerText;
                        const imageElement = el.nextElementSibling?.querySelector('figure.wp-block-image img');
                        const image = imageElement ? imageElement.getAttribute('src') : null;
                        const descriptionElement = imageElement?.closest('figure')?.nextElementSibling;
                        const description = descriptionElement ? descriptionElement.innerText : null;
                        return { title, image, description };
                    });
                    
            })
        );
    } else if (url.includes('appacademy.io')) {
        
        data = await page.$$eval('.blog-content_text', (results) => 
            results.flatMap((myBox) => {
                return Array.from(myBox.querySelectorAll('h3'))
                    .slice(0, 8)
                    .map((el) => {
                        const title = el.innerText;
                        const description = el.nextElementSibling.innerText;
                        return { title, description };
                    });
            })
        );
        
    } else if (url.includes('forbes.com')) {
        
        data = await page.$$eval('.article-body', (results) => 
            results.flatMap((myBox) => {
                return Array.from(myBox.querySelectorAll('h3'))
                    .slice(0, 7)
                    .map((el) => {
                        const title = el.innerText;
                        const description = el.nextElementSibling.innerText;
                        return { title, description };
                    });
            })
        );
        
    } else{
        console.log(`No scraping rules for URL: ${url}`);
        data = [];
    }

    await browser.close();
    return data;
}

async function scrapeAndSave() {
    const urls = [
        'https://www.guvi.in/blog/easiest-programming-languages-to-hardest-ranked/#:~:text=HTML%2C%20CSS%2C%20PHP%2C%20JavaScript,good%20availability%20of%20learning%20opportunities.',
        'https://www.zegocloud.com/blog/easiest-programming-language-to-learn', 
        'https://www.appacademy.io/blog/easy-programming-langauges-to-learn',
        'https://www.forbes.com/advisor/education/it-and-tech/easiest-programming-language-to-learn/'
    ];

    let results = [];

    for (const url of urls) {
        const data = await scrapePage(url);
        results.push(...data);
    }

    fs.writeFileSync('datos_scraping.json', JSON.stringify(results, null, 2), 'utf-8');
    console.log('Datos guardados en datos_scraping.json');
}

scrapeAndSave();