<script setup lang="ts">
import { Paragraph } from "./Paragraph.vue";
import ParagraphComponent from "./Paragraph.vue";
import { provide } from "vue";

export interface Article {
  id: string;
  title: string;
  paragraph: Paragraph[];
}

const props = defineProps<{ article: Article }>();
provide("articleId", props.article.id);
</script>

<template>
  <div class="bg-[#fff] py-3 px-3">
    <h1>{{ props.article.title }}</h1>
    <div class="space-y-2">
      <ParagraphComponent v-for="(paragraph, index) in props.article.paragraph" :key="paragraph.title"
        :paragraph="paragraph" :class="{
          'border-solid border-[1px] border-b-0 border-l-0 border-r-0 border-[#d149ce]': index !== 0,
        }" />
    </div>
  </div>
</template>
