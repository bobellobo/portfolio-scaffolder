<template>
  <section id="contact" class="contact section-block">
    <div class="container">
      <h2 class="section-title">{{ $t('contact.title') }}</h2>
      <p>{{ $t('contact.description') }}</p>
      <div class="contact-links">
        <a :href="profileIdentity.linkedinUrl" target="_blank" rel="noreferrer" class="contact-button">
          {{ $t('footer.links.linkedin') }}
        </a>
        <a :href="profileIdentity.githubUrl" target="_blank" rel="noreferrer" class="contact-button">
          {{ $t('footer.links.github') }}
        </a>
        <a :href="emailLink" target="_blank" rel="noreferrer" class="contact-button">
          {{ $t('footer.links.email') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getProfileIdentity } from '../../content/data/profile'

const profileIdentity = getProfileIdentity()
const emailLink = computed(() => `mailto:${profileIdentity.email}`)
</script>

<style scoped src="./Contact.css"></style>
