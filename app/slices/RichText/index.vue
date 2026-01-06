<script setup lang="ts">
import type { Content } from '@prismicio/client';

defineProps(getSliceComponentProps<Content.RichTextSlice>());
</script>

<template>
  <section class="bounded rich-text">
    <PrismicRichText :field="slice.primary.title" />
    <PrismicRichText :field="slice.primary.text" />
    <div v-if="slice.primary?.ctas?.length" class="mt-16 flex -ml-4">
      <PrismicLink
        v-for="link in slice.primary.ctas"
        :key="link.key"
        :field="link"
        :class="link.variant?.toLowerCase()"
        class="cta"
      />
    </div>
  </section>
</template>
