<script setup lang="ts">
import { ref } from "vue";
import Sentence from "./Sentence.vue";

const sentences = ref([
  {
    zh: "当谈到 xxx 时，每个人都会有自己的想法。",
    en: "When it comes to xxx, everyone has his or her own idea.",
  },
  {
    zh: "从我的角度来看",
    en: "From my perspective",
  },
  {
    zh: "从我的角度来看",
    en: "From my point of view",
  },
  {
    zh: "在我看来",
    en: "In my opinion",
  },
  {
    zh: "我一直认为 xxx 是我的选择。",
    en: "I always think that xxx is my choice.",
  }
  {
    zh: "原因如下。",
    en: "The reasons are as follows.",
  },
  {
    zh: "我的观点主要有 xxx 个理由。",
    en: "There are mainly xxx reasons for my view.",
  },
  {
    zh: "一方面",
    en: "On the one hand"
  },
  {
    zh: "另一方面",
    en: "On the other hand",
  },
  {
    zh: "最后但同样重要的是",
    en: "Last but not least",
  },
  {
    zh: "首先",
    en: "To begin with",
  },
  {
    zh: "此外",
    en: "In addition",
  },
  {
    zh: "最后",
    en: "In the end",
  },
  {
    zh: "总之",
    en: "In a word",
  },
  {
    zh: "总之",
    en: "To sum up",
  },
  {
    zh: "总之",
    en: "All in all",
  },
  {
    zh: "总之",
    en: "In summary",
  },
]);
</script>

<template>
  <div class="">
    <Sentence
      v-for="sentence in sentences"
      :key="sentence.zh"
      :sentence="sentence"
    />
  </div>
</template>

<style scoped lang="less"></style>
