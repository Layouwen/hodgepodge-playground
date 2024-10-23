<script setup lang="ts">
import { ref } from "vue";
import Sentence from "./Sentence.vue";

const sentences = ref([
  {
    zh: "当谈到 xxx 时，每个人都会有自己的想法。",
    en: "When it comes to xxx, everyone has his or her own idea.",
  },
  {
    zh: "从我的角度来看, 我一直认为 xxx 是我的选择。",
    en: "From my perspective, I always think that xxx is my choice.",
  },
  {
    zh: "原因如下。",
    en: "The reasons are as follows.",
  },
]);
</script>

<template>
  <Sentence
    v-for="sentence in sentences"
    :key="sentence.zh"
    :sentence="sentence"
  />
</template>

<style scoped></style>
