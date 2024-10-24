<script setup lang="ts">
import { inject, onMounted, ref, watch } from "vue";
import { debounce } from "lodash";
import { articleStore } from "../utils";
import axios from "axios";

export interface Sentence {
  id: string;
  zh: string;
  en: string;
}

const props = defineProps<{ sentence: Sentence }>();
const articleId = inject<string>("articleId")!;
const paragraphId = inject<string>("paragraphId")!;
const sentenceId = props.sentence.id;

const enAnswer = ref<string>("");
const isValidate = ref<boolean>(false);
const isCorrect = ref<boolean>(false);

const onValidate = () => {
  isValidate.value = true;
  isCorrect.value = enAnswer.value.trim() === props.sentence.en.trim();
};

const onDebouncedValidate = debounce(onValidate, 250);

const onSaveSentence = () => {
  articleStore.setSentenceEn(
    articleId,
    paragraphId,
    sentenceId,
    enAnswer.value
  );
};

const onClearSentence = () => {
  enAnswer.value = "";
  isValidate.value = false;
  isCorrect.value = false;
  articleStore.setSentenceEn(articleId, paragraphId, sentenceId, "");
};

const isShowEn = ref<boolean>(false);
const onShowEn = () => {
  isShowEn.value = !isShowEn.value;
};

const onPlayAudio = async () => {
  const {
    data: { audio: audioBufferArr },
  } = await axios.get(
    `https://lingva.pot-app.com/api/v1/audio/en/${props.sentence.en}`
  );
  const buffer = new Uint8Array(audioBufferArr).buffer;
  const audioContext = new AudioContext();
  const audioBuffer = await audioContext.decodeAudioData(buffer);
  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioContext.destination);
  source.start();
};

watch(enAnswer, () => {
  onDebouncedValidate();
});

onMounted(() => {
  enAnswer.value = articleStore.getSentenceEn(
    articleId,
    paragraphId,
    sentenceId
  );
});
</script>

<template>
  <div class="text-xl space-y-2">
    <div class="space-x-2 flex items-center">
      <div
        :class="{
          'text-red-500': isValidate && !isCorrect,
          'text-green-500': isValidate && isCorrect,
        }"
      >
        {{ sentence.zh }}
      </div>
      <el-button @click="onPlayAudio">播放句子</el-button>
      <el-button @click="onShowEn" tabindex="-1">
        {{ isShowEn ? "隐藏答案" : "显示答案" }}
      </el-button>
    </div>
    <div v-if="isShowEn">
      <div>
        {{ sentence.en }}
      </div>
    </div>
    <div class="flex space-x-2">
      <el-input
        class="!text-xl"
        v-model="enAnswer"
        @keyup.enter="onSaveSentence"
      />
      <el-button @click="onSaveSentence" tabindex="-1">保存</el-button>
      <el-button @click="onClearSentence" tabindex="-1">清空</el-button>
      <el-button @click="onValidate" tabindex="-1">验证</el-button>
    </div>
  </div>
</template>
