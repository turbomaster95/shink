export default defineAppConfig({
  title: 'Shink',
  description: 'A Custom URL Shortener for Me! :3 :3',
  image: '',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
    'admin',
    'app'
  ],
})
