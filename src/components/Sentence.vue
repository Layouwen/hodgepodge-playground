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
  const normalizeText = (text: string) => text.replace(/[，。]/g, (match) => match === '，' ? ',' : '.');
  isCorrect.value = normalizeText(enAnswer.value.trim()) === normalizeText(props.sentence.en.trim());
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
  <div class="text-xl space-y-2 py-2">
    <div class="space-x-2 flex items-center">
      <div :class="{
        'text-red-500': isValidate && !isCorrect,
        'text-green-500': isValidate && isCorrect,
      }">
        {{ sentence.zh }}
      </div>
      <el-button type="primary" @click="onPlayAudio" tabindex="-1">播放句子</el-button>
      <el-button type="info" @click="onShowEn" tabindex="-1">
        {{ isShowEn ? "隐藏答案" : "显示答案" }}
      </el-button>
    </div>
    <div v-if="isShowEn">
      <div>
        {{ sentence.en }}
      </div>
    </div>
    <div class="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
      <div class="w-full">
        <el-input class="!text-xl" v-model="enAnswer" @keyup.enter="onSaveSentence"
          :autosize="{ minRows: 1, maxRows: 5 }" type="textarea" resize="none" />
      </div>
      <div class="flex justify-start md:justify-end space-x-2">
        <el-button type="success" @click="onSaveSentence">保存</el-button>
        <el-button type="warning" @click="onClearSentence" tabindex="-1">清空</el-button>
        <el-button type="primary" @click="onValidate" tabindex="-1">验证</el-button>
      </div>
    </div>
  </div>
</template>
