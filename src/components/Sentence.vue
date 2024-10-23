<script setup lang="ts">
import { ref, watch } from "vue";
import { debounce } from "lodash";

const props = defineProps<{ sentence: { zh: string; en: string } }>();

const inputValue = ref("");
const isValidate = ref(false);
const isCorrect = ref(false);

const onValidate = () => {
  isValidate.value = true;
  isCorrect.value = inputValue.value.trim() === props.sentence.en.trim();
};

const onDebouncedValidate = debounce(onValidate, 250);

watch(inputValue, () => {
  onDebouncedValidate();
});
</script>

<template>
  <div>
    <div
      :class="{
        'text-red-500': isValidate && !isCorrect,
        'text-green-500': isValidate && isCorrect,
      }"
    >
      {{ sentence.zh }}
    </div>
    <div class="flex space-x-2">
      <el-input v-model="inputValue" @keyup.enter="onValidate" />
      <el-button @click="onValidate" tabindex="-1">验证</el-button>
    </div>
  </div>
</template>
