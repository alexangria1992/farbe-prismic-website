<script setup lang="ts">
import type { Content } from '@prismicio/client';
import SlideIn from '~/components/SlideIn.vue';

defineProps(getSliceComponentProps<Content.RichTextSlice>());
</script>

<template>
  <SlideIn class="bounded rich-text flex flex-col justify-center" :class="{
    'min-h-[40vh]': slice.variation !== 'fullscreen',
    'min-h-screen opacity-0': slice.variation === 'fullscreen',
  }">
    <PrismicRichText :field="slice.primary.title" />
    <PrismicRichText :field="slice.primary.text" />
    <div v-if="slice.primary?.ctas?.length" class="mt-16 flex f -ml-4">
      <PrismicLink v-for="link in slice.primary.ctas" :key="link.key" :field="link" :class="link.variant?.toLowerCase()"
        class="cta" />
    </div>
  </SlideIn>
</template>
