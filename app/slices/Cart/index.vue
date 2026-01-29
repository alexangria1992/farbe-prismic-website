<script setup lang="ts">
import type { Content } from '@prismicio/client';

defineProps(getSliceComponentProps<Content.CartSlice>());
</script>

<template>
  <SlideIn
    id="cart"
    as="from"
    class="bounded rich-text min-h-screen flex flex-col"
    method="POST"                                                   
    action="/api/"          
  >             
  </SlideIn>
</template>
