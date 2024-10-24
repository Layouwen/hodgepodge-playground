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
  <div>
    <h1>{{ props.article.title }}</h1>
    <div>
      <ParagraphComponent
        v-for="paragraph in props.article.paragraph"
        :key="paragraph.title"
        :paragraph="paragraph"
      />
    </div>
  </div>
</template>
