const sentences = [
  {
    en: "I love apples",
    fr: {
      correct: ["J'aime les pommes", "J’adore les pommes", "J'aime bien les pommes", "Je kiffe les pommes "],
    },
    es: {
      correct: ["Me encantan las manzanas", "Me gustan un montón las manzanas"],
    },
    tr: {
      correct: ["Elmayı seviyorum", "Elmayı çok severim"],
    },
    ja: {
      correct: ["りんごが好きです", "りんご大好き"],
    }
  },
  {
    en: "The sky is blue",
    fr: {
      correct: ["Le ciel est bleu", "Le ciel est tout bleu"],
    },
    es: {
      correct: ["El cielo es azul"],
    },
    tr: {
      correct: ["Gökyüzü mavi"],
    },
    ja: {
      correct: ["空は青いです"],
    }
  },
  {
    en: "We are friends",
    fr: {
      correct: ["Nous sommes amis", "On est amis"],
    },
    es: {
      correct: ["Somos amigos"],
    },
    tr: {
      correct: ["Biz arkadaşız"],
    },
    ja: {
      correct: ["私たちは友達です", "ぼくたちは友だちだよ"],
    }
  },
  {
    en: "She is sleeping",
    fr: {
      correct: ["Elle dort"],
    },
    es: {
      correct: ["Ella está durmiendo"],
    },
    tr: {
      correct: ["O uyuyor", "O uyuyor şu an"],
    },
    ja: {
      correct: ["彼女は寝ています", "彼女は眠っている"],
    }
  },
  {
    en: "Where is the bus?",
    fr: {
      correct: ["Où est le bus ?", "Où est le bus"],
    },
    es: {
      correct: ["¿Dónde está el autobús?", "Dónde está el autobús"],
    },
    tr: {
      correct: ["Otobüs nerede?", "Otobüs nerde?"],
    },
    ja: {
      correct: ["バスはどこですか？", "バスはどこ？"],
    }
  }
];

let currentSentence;

function randomSentence() {
  const index = Math.floor(Math.random() * sentences.length);
  currentSentence = sentences[index];
  document.getElementById('englishSentence').textContent = currentSentence.en;
  document.getElementById('userInput').value = "";
  document.getElementById('result').textContent = "";
}

function checkTranslation() {
  const lang = document.getElementById('languageSelect').value;
  const userAnswer = document.getElementById('userInput').value.trim().toLowerCase();

  const correctAnswers = currentSentence[lang].correct.map(ans => ans.toLowerCase());

  const result = document.getElementById('result');

  const normalize = str => str
    .replace(/[!?？｡。]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const normalizedUserAnswer = normalize(userAnswer);
  const normalizedCorrectAnswers = correctAnswers.map(normalize);

  if (normalizedCorrectAnswers.includes(normalizedUserAnswer)) {
    result.textContent = "Correct! ✔";
    result.style.color = 'green';
  } else {
    result.textContent = `Incorrect. Possible answers: "${currentSentence[lang].correct.join('", "')}"`;
    result.style.color = 'red';
  }

  setTimeout(() => randomSentence(), 3000);
}

window.onload = randomSentence;