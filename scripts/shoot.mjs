// Screenshot every theme's /app page in base + flip mode.
import { chromium } from 'playwright';
import { readdirSync, mkdirSync, existsSync } from 'node:fs';

const OUT = '/private/tmp/claude-501/-Users-gab-bulldozer/e3e851c2-6e3f-41e5-8aeb-6b830ce9359e/scratchpad/shots';
mkdirSync(OUT, { recursive: true });
const BASE = 'https://style-foundry-gabbulldo.vercel.app';

const slugs = readdirSync('/Users/gab-bulldozer/projects/style-foundry/src/styles/themes')
  .filter(f => f.endsWith('.css')).map(f => f.replace('.css', '')).sort();

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();

let done = 0;
for (const slug of slugs) {
  if (existsSync(`${OUT}/${slug}--base.png`) && process.env.SKIP_EXISTING) { continue; }
  try {
    await page.goto(`${BASE}/styles/${slug}/app`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(600); // fonts settle
    await page.screenshot({ path: `${OUT}/${slug}--base.png` });
    await page.evaluate(() => {
      document.querySelector('[data-style]')?.classList.add('alt-mode');
    });
    await page.waitForTimeout(250);
    await page.screenshot({ path: `${OUT}/${slug}--flip.png` });
    done++;
    if (done % 20 === 0) console.log(`${done}/${slugs.length}`);
  } catch (e) {
    console.log(`FAIL ${slug}: ${e.message.split('\n')[0]}`);
  }
}
await browser.close();
console.log(`DONE: ${done}/${slugs.length} themes shot -> ${OUT}`);
