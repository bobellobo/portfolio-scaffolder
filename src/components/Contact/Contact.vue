<template>
  <section id="contact" class="contact section-block">
    <div class="container">
      <h2 class="section-title">{{ $t('contact.title') }}</h2>
      <p>{{ $t('contact.description') }}</p>
      <div class="contact-links">
        <a
          v-for="link in contactLinks"
          :key="`${link.label}-${link.url}`"
          :href="link.url"
          target="_blank"
          rel="noreferrer"
          class="contact-button"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { getSupportedLocale } from '../../content/locale'
import { getContactLinksForContactSection } from '../../content/data/profile'

const { locale } = useI18n()
const contactLinks = computed(() => getContactLinksForContactSection(getSupportedLocale(locale.value)))
</script>

<style scoped src="./Contact.css"></style>
