<script setup lang="ts">
import { ref } from "vue";
import { ArticleComponent, Article } from "../components";

const 选择与原因 = {
  id: "12fad7s98423",
  title: "选择与原因",
  paragraph: [
    {
      id: "7f9a8sd714",
      title: "p1",
      description: "引入",
      sentences: [
        {
          id: "df78a9sd71",
          zh: "当谈到 xxx 时，每个人都会有自己的想法。",
          en: "When it comes to xxx, everyone has his or her own idea.",
        },
        {
          id: "f789ad704",
          zh: "从我的角度来看, 我一直认为 xxx 是我的选择。",
          en: "From my perspective, I always think that xxx is my choice.",
        },
        {
          id: "7f809as7d3",
          zh: "原因如下。",
          en: "The reasons are as follows.",
        },
      ],
    },
    {
      id: "9a8s7d6f5e",
      title: "p2",
      description: "理由",
      sentences: [
        {
          id: "1b2c3d4e5f",
          zh: "我的观点主要有 xxx 个理由。",
          en: "There are mainly xxx reasons for my view.",
        },
        {
          id: "6g7h8i9j0k",
          zh: "一方面",
          en: "On the one hand",
        },
        {
          id: "1l2m3n4o5p",
          zh: "另一方面",
          en: "On the other hand",
        },
        {
          id: "6q7r8s9t0u",
          zh: "最后但同样重要的是",
          en: "Last but not least",
        },
      ],
    },
    {
      id: "1v2w3x4y5z",
      title: "p3",
      description: "总结",
      sentences: [
        {
          id: "6a7b8c9d0e",
          zh: "总之",
          en: "In a word",
        },
      ],
    },
  ],
};

const 选择与好处 = {
  id: "3f4g5h6i1231",
  title: "选择与好处",
  paragraph: [
    {
      id: "8k9l0m1n2o",
      title: "p1",
      description: "引入",
      sentences: [
        {
          id: "3p4q5r6s7t",
          zh: "当谈到 xxx 时，每个人都会有自己的想法。",
          en: "When it comes to xxx, everyone has his or her own idea.",
        },
        {
          id: "8u9v0w1x2y",
          zh: "从我的角度来看, 我一直认为 xxx 有很多好处.",
          en: "From my perspective, I always think xxx has a great number of benefits.",
        },
        {
          id: "3z4a5b6c7d",
          zh: "以下是好处.",
          en: "The following are the benefits.",
        },
      ],
    },
    {
      id: "8e9f0g1h2i",
      title: "p2",
      description: "好处",
      sentences: [
        {
          id: "3j4k5l6m7n",
          zh: "xxx 有很多好处.",
          en: "There are a great number of benefits of xxx.",
        },
        {
          id: "8o9p0q1r2s",
          zh: "首先",
          en: "To begin with",
        },
        {
          id: "3t4u5v6w7x",
          zh: "此外",
          en: "In addition",
        },
        {
          id: "8y9z0a1b2c",
          zh: "最后",
          en: "In the end",
        },
      ],
    },
    {
      id: "3d4e5f6g7h",
      title: "p3",
      description: "总结",
      sentences: [
        {
          id: "8i9j0k1l2m",
          zh: "总之",
          en: "In a word",
        },
      ],
    },
  ],
};

const 问题性报告 = {
  id: "3n4o5p6q7r",
  title: "问题性报告",
  paragraph: [
    {
      id: "8s9t0u1v2w",
      title: "p1",
      description: "引入问题",
      sentences: [
        {
          id: "3x4y5z6a7b",
          zh: "如今, xxx 已成为一个严重的问题, 引起了全社会的关注.",
          en: "Nowadays, xxx has become a serious problem that arouses the concern of the whole society.",
        },
        {
          id: "8c9d0e1f2g",
          zh: "它威胁这人类的生存.",
          en: "It is threatening the survival of human beings.",
        },
        {
          id: "3h4i5j6k7l",
          zh: "xxx 会对我们的身体和社会造成很大的伤害.",
          en: "xxx will cause a lot of damage to our body and society.",
        },
      ],
    },
    {
      id: "8m9n0o1p2q",
      title: "p2",
      description: "问题的影响",
      sentences: [
        {
          id: "3r4s5t6u7v",
          zh: "一方面, xxx 对身体健康有显著的负面影响, 会导致严重的疾病.",
          en: "On the one hand, xxx has significantly negative effects on body health and will result in serious diseases.",
        },
        {
          id: "8w9x0y1z2a",
          zh: "另一方面",
          en: "On the other hand",
        },
      ],
    },
    {
      id: "3b4c5d6e7f",
      title: "p3",
      description: "解决方案",
      sentences: [
        {
          id: "8g9h0i1j2k",
          zh: "面对 xxx, 我们应该采取一些有效的措施来解决它.",
          en: "Confronted with xxx, we should take a number of effective measures to solve it.",
        },
        {
          id: "3l4m5n6o7p",
          zh: "首先, 我们的政府应该实施非常严格的政策来惩罚 xxx.",
          en: "First of all, our government should carry out highly strict policies to punish xxx.",
        },
        {
          id: "8q9r0s1t2u",
          zh: "其次, 我们也应该努力过一种环保的生活方式.",
          en: "Secondly, we should also make efforts to live an eco-friendly way of life.",
        },
      ],
    },
    {
      id: "3v4w5x6y7z",
      title: "p4",
      description: "总结",
      sentences: [
        {
          id: "8a9b0c1d2e",
          zh: "总之, 我相信只有我们一起努力, 我们才能期待有一个更好的未来.",
          en: "In a word, I believe that only when we work together can we expect to have a better future.",
        },
      ],
    },
  ],
};

const 议论文类 = {
  id: "3f4g5h6i7j",
  title: "议论文类",
  paragraph: [
    {
      id: "8k9l0m1n2o1",
      title: "p1",
      description: "引入话题",
      sentences: [
        {
          id: "3p4q5r6s7t1",
          zh: "说到 xxx, 每个人都有自己的想法.",
          en: "When it comes to xxx, everyone has his or her own idea.",
        },
        {
          id: "8u9v0w1x2y1",
          zh: "有些人认为 xxx, 而另一些人认为 xxx.",
          en: "Some people suggest that xxx, while others think that xxx.",
        },
        {
          id: "3z4a5b6c7d1",
          zh: "在我看来, 我更喜欢前者/第二个.",
          en: "From my point of view, I prefer the first one/the second one.",
        },
      ],
    },
    {
      id: "8e9f0g1h2i1",
      title: "p2",
      description: "论述理由",
      sentences: [
        {
          id: "3j4k5l6m7n1",
          zh: "我的观点主要有以下 xxx 理由.",
          en: "There are mainly xxx reasons for my view.",
        },
        {
          id: "8o9p0q1r2s1",
          zh: "一方面",
          en: "On the one hand",
        },
        {
          id: "3t4u5v6w7x1",
          zh: "另一方面",
          en: "On the other hand",
        },
        {
          id: "8y9z0a1b2c1",
          zh: "最后",
          en: "Finally",
        },
      ],
    },
    {
      id: "3d4e5f6g7h1",
      title: "p3",
      description: "总结",
      sentences: [
        {
          id: "8i9j0k1l2m1",
          zh: "总之",
          en: "In a word",
        },
      ],
    },
  ],
};

const 电子邮件类 = {
  id: "df81972312",
  title: "电子邮件类",
  paragraph: [
    {
      id: "79812g789234",
      title: "p1",
      description: "背景介绍+引出目的",
      sentences: [
        {
          id: "3a4b5c6d7e",
          zh: "(称呼) 亲爱的 xxx",
          en: "Dear xxx",
        },
        {
          id: "8f9g0h1i2j",
          zh: "(寒暄句) 你好吗?",
          en: "How are you?",
        },
        {
          id: "3k4l5m6n7o",
          zh: "(寒暄句) 你怎么了?",
          en: "What's wrong with you?",
        },
        {
          id: "8p9q0r1s2t",
          zh: "(寒暄句) 收到你的来信我很高兴.",
          en: "I am happy to hear from you.",
        },
        {
          id: "3u4v5w6x7y",
          zh: "(寒暄句) 我很高兴得知 xxx",
          en: "I am happy to know that xxx",
        },
        {
          id: "8z9a0b1c2d",
          zh: "(寒暄句) 我很高兴得知你对 xxx 感兴趣",
          en: "I am happy to know that you are interested in xxx",
        },
        {
          id: "3e4f5g6h7i",
          zh: "(邀请) 我写信是邀请你去参加 xxx",
          en: "I am writing to invite you to take part in xxx",
        },
        {
          id: "8j9k0l1m2n",
          zh: "(建议) 我写信是想要给你一些建议.",
          en: "I am writing to provide you with some suggestions.",
        },
        {
          id: "3o4p5q6r7s",
          zh: "这里有一些建议可能对你有所帮助.",
          en: "There are some pieces of advice that may help you.",
        },
        {
          id: "8t9u0v1w2x",
          zh: "(介绍) 我很荣幸给你介绍 xxx",
          en: "I'm honored to introduce xxx to you.",
        },
        {
          id: "3y4z5a6b7c",
          zh: "我写信是为了想你提供更多的细节.",
          en: "I'm writing to provide you with more details.",
        },
        {
          id: "8u9v0w1x2y2",
          zh: "(分享) 我写信是想要和你分享 xxx",
          en: "I am writing to share xxx with you.",
        },
        {
          id: "3y4z5a6b7c2",
          zh: "(申请) 我写信是想要申请 xxx",
          en: "I am writing to apply for xxx",
        },
        {
          id: "8v9w0x1y2z2",
          zh: "我渴望为 xxx 而工作.",
          en: "I am eager to work for xxx.",
        },
      ],
    },
    {
      id: "3y4z5a6b7c3",
      title: "p2",
      description: "正文内容",
      sentences: [
        {
          id: "8v9w0x1y2z3",
          zh: "(邀请) 通过参加这个活动, 你不仅可以更好的了解 xxx, 而且可以结交一些新朋友.",
          en: "By participating in this activity, you may not only get a better understanding of xxx, but also may make some new friends.",
        },
        {
          id: "3y4z5a6b7c4",
          zh: "这个活动的目的是鼓励我们去 xxx.",
          en: "The purpose of this activity is to encourage us to xxx.",
        },
        {
          id: "8v9w0x1y2z4",
          zh: "(建议) 对你来说去 xxx 是很重要的, 因为你将能够 xxx",
          en: "It is important for you to xxx, as you will be able to xxx",
        },
        {
          id: "3y4z5a6b7c5",
          zh: "就我个人而言, 如果你 xxx 会更好.",
          en: "As far as I'm concerned, it would be better if you xxx.",
        },
        {
          id: "8v9w0x1y2z5",
          zh: "(介绍) 将组织各种各样的活动, 包括 xxx",
          en: "A variety of activities will be organized xxx, including xxx",
        },
        {
          id: "3y4z5a6b7c6",
          zh: "首先, 你将有机会去体验 xxx",
          en: "First of all, you will have a chance to experience xxx",
        },
        {
          id: "8v9w0x1y2z6",
          zh: "(申请) 我相信我能胜任 xxx",
          en: "I am confident that I am suitable for xxx",
        },
        {
          id: "3y4z5a6b7c7",
          zh: "喜欢 xxx, 这极大地开阔了我的视野.",
          en: "I am keen on xxx, which greatly widens my horizon.",
        },
      ],
    },
    {
      id: "3y4z5a6b7c8",
      title: "p3 结尾段",
      description: "结束语",
      sentences: [
        {
          id: "8v9w0x1y2z7",
          zh: "(邀请) 总之, 我相信这次活动一定会取得圆满成功, 希望您能接受我的邀请.",
          en: "In conclusion, I do believe the activity will be a great success and hop you can accept my invitation.",
        },
        {
          id: "3y4z5a6b7c9",
          zh: "(建议) 我希望这些建议能帮助你解决问题.",
          en: "I hope these suggestions will be helpful to solve your problems.",
        },
        {
          id: "8v9w0x1y2z8",
          zh: "(介绍) 如果你想了解更多的细节, 请不要犹豫告诉我.",
          en: "If you want to learn more details, don't hesitate to tell me.",
        },
        {
          id: "3y4z5a6b7c10",
          zh: "(申请) 我真诚地希望您能给我这个机会去 xxx",
          en: "I sincerely hope you can give me this opportunity to xxx",
        },
        {
          id: "8v9w0x1y2z9",
          zh: "如果您能考虑我的申请, 我将不胜感激.",
          en: "I would appreciate it if you could take my application into consideration.",
        },
        {
          id: "3y4z5a6b7c11",
          zh: "(通用结束语) 我期待你的回复.",
          en: "I look forward to hearing from you.",
        },
        {
          id: "8v9w0x1y2z10",
          zh: "祝你生活愉快.",
          en: "May you live a happy life.",
        },
      ],
    },
    {
      id: "3y4z5a6b7c12",
      title: "p3 结束段",
      description: "祝福语",
      sentences: [
        {
          id: "8v9w0x1y2z11",
          zh: "诚挚的问候.",
          en: "Yours, regards",
        },
      ],
    },
  ],
};

const 描述类 = {
  id: "3f4g5h6i7j8k",
  title: "描述类",
  paragraph: [
    {
      id: "8l9m0n1o2p3",
      title: "p1",
      description: "引入主题",
      sentences: [
        {
          id: "3q4r5s6t7u",
          zh: "说到 xxx, 人们通常会想到 xxx",
          en: "When it comes to xxx, people usually think of xxx",
        },
      ],
    },
    {
      id: "8l9m0n1o2p4",
      title: "p2",
      description: "描述 1",
      sentences: [
        {
          id: "3q4r5s6t7u4",
          zh: "我们能 xxx",
          en: "We can xxx",
        },
        {
          id: "8v9w0x1y2z12",
          zh: "一方面",
          en: "On the one hand",
        },
        {
          id: "3y4z5a6b7c13",
          zh: "另一方面",
          en: "On the other hand",
        },
      ],
    },
    {
      id: "3y4z5a6b7c14",
      title: "p3",
      description: "描述 2",
      sentences: [
        {
          id: "8v9w0x1y2z13",
          zh: "此外, 有 xxx",
          en: "In addition, there are xxx",
        },
        {
          id: "3y4z5a6b7c15",
          zh: "首先",
          en: "Firstly",
        },
        {
          id: "8v9w0x1y2z14",
          zh: "其次",
          en: "Secondly",
        },
      ],
    },
    {
      id: "3y4z5a6b7c16",
      title: "p4",
      description: "总结",
      sentences: [
        {
          id: "8v9w0x1y2z15",
          zh: "总之, 我很喜欢 xxx, 并将从中受益良多.",
          en: "In a word, I like xxx very much and I will benefit a lot from it.",
        },
      ],
    },
  ],
};

const articles = ref<Article[]>([
  选择与原因,
  选择与好处,
  问题性报告,
  议论文类,
  电子邮件类,
  描述类,
]);
</script>

<template>
  <div class="space-y-3 bg-[#f5f5f5] p-3">
    <ArticleComponent v-for="article in articles" :key="article.id" :article="article" class="mb-2" />
  </div>
</template>

<style scoped lang="less"></style>
