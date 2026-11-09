// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';

// Works out the site address on its own:
// - with a custom domain: put the domain in public/CNAME (e.g. kclredforge.co.uk)
// - otherwise it uses https://<org>.github.io/<repo>/ from GitHub Actions
const cname = fs.existsSync('./public/CNAME')
  ? fs.readFileSync('./public/CNAME', 'utf8').trim()
  : '';
const [owner = 'kcl-redforge', repo = 'website'] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const userSite = repo.toLowerCase().endsWith('.github.io');

export default defineConfig({
  site: cname ? `https://${cname}` : `https://${owner.toLowerCase()}.github.io`,
  base: cname || userSite || !process.env.GITHUB_REPOSITORY ? '/' : `/${repo}`,
  trailingSlash: 'ignore',
});
