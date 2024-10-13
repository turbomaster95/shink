export default defineAppConfig({
  title: 'Shink',
  description: 'Lol my own shorturl :3 :)',
  image: '',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
