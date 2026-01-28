<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CartSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    Placeholder component for cart (variation: {{ slice.variation }}) slices.

    <br />
    <strong>You can edit this slice directly in your code editor.</strong>
    <!--
	💡 Use the Prismic MCP server with your code editor
	📚 Docs: https://prismic.io/docs/ai#code-with-prismics-mcp-server
-->
  </section>
</template>
