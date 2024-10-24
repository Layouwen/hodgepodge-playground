<script setup lang="ts">
import { provide } from "vue";
import SentenceComponent from "./Sentence.vue";
import { Sentence } from "./Sentence.vue";

export interface Paragraph {
  id: string;
  title: string;
  description: string;
  sentences: Sentence[];
}

const props = defineProps<{ paragraph: Paragraph }>();
provide("paragraphId", props.paragraph.id);
</script>

<template>
  <div>
    <div class="flex items-end space-x-2">
      <h2>{{ props.paragraph.title }}</h2>
      <p class="text-sm text-gray-500">{{ props.paragraph.description }}</p>
    </div>
    <div class="space-y-2">
      <SentenceComponent
        v-for="sentence in props.paragraph.sentences"
        :key="sentence.zh"
        :sentence="sentence"
      />
    </div>
  </div>
</template>
