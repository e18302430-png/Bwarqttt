const fs = require('fs');

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('ERROR: SUPABASE_URL or SUPABASE_ANON_KEY is missing in Vercel Environment Variables');
  process.exit(1);
}

fs.mkdirSync('public', { recursive: true });
fs.copyFileSync('index.html', 'public/index.html');
fs.writeFileSync(
  'public/config.js',
  'window.ENV = ' + JSON.stringify({ SUPABASE_URL: url, SUPABASE_ANON_KEY: key }) + ';'
);
console.log('Build OK');
