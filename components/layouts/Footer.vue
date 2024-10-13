<script setup>
import { BloggerIcon, GitHubIcon, GmailIcon, MastodonIcon, TelegramIcon, XIcon } from 'vue3-simple-icons'

const email = ref(null)
onMounted(() => {
  email.value.href = email.value.href.replace('$', '@')
})
</script>

<template>
  <section class="md:pt-6">
    <div class="container flex flex-col items-center py-8 mx-auto sm:flex-row">
      <a
        href="/"
        class="text-xl font-black leading-none text-gray-900 select-none dark:text-gray-100 logo"
        title="Sink"
      >Shink</a>
      <span
        class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start"
      >
        <a
          ref="email"
          href="mailto:admin$coderrrrr.site"
          title="Email"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Email</span>
          <GmailIcon
            class="w-6 h-6"
          />
        </a>
        <a
          href="https://coderrrrr.site"
          target="_blank"
          title="Blog"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Blog</span>
          <BloggerIcon
            class="w-6 h-6"
          />
        </a>

        <a
          href="https://x.com/coderrrrrsite"
          target="_blank"
          title="Twitter"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Twitter</span>
          <XIcon
            class="w-6 h-6"
          />
        </a>

        <a
          href="https://mastodon.social/@coderrrrr"
          target="_blank"
          title="Mastodon"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Mastodon</span>
          <MastodonIcon
            class="w-6 h-6"
          />
        </a>

        <a
          href="https://github.com/turbomaster95"
          target="_blank"
          title="GitHub"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">GitHub</span>
          <GitHubIcon
            class="w-6 h-6"
          />
        </a>
      </span>
    </div>
  </section>
</template>
