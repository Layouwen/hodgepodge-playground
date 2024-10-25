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
  <div class="py-2">
    <div class="flex items-end space-x-2">
      <h2>{{ props.paragraph.title }}</h2>
      <p class="text-sm text-gray-500">{{ props.paragraph.description }}</p>
    </div>
    <div class="space-y-2">
      <SentenceComponent v-for="(sentence, index) in props.paragraph.sentences" :key="sentence.zh" :sentence="sentence"
        :class="{
          'border-solid border-[1px] border-b-0 border-l-0 border-r-0 border-[#5ea4ba]': index !== 0,
        }" />
    </div>
  </div>
</template>
