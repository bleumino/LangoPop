const sentences = [
  {
    en: "I love apples",
    fr: {
      correct: ["J'aime les pommes", "J’adore les pommes", "J'aime bien les pommes", "Je kiffe les pommes"],
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
  },
  {
    en: "I’m hungry",
    fr: {
      correct: ["J’ai faim", "Je crève la dalle (slang)"],
    },
    es: {
      correct: ["Tengo hambre", "Estoy hambriento"],
    },
    tr: {
      correct: ["Açım", "Karnım aç"],
    },
    ja: {
      correct: ["お腹がすいた", "腹ペコだ"],
    }
  },
  {
    en: "Let’s go!",
    fr: {
      correct: ["Allons-y", "On y va", "C’est parti !"],
    },
    es: {
      correct: ["¡Vamos!", "Vámonos"],
    },
    tr: {
      correct: ["Hadi gidelim", "Hadi bakalım"],
    },
    ja: {
      correct: ["行こう！", "さあ行こう！"],
    }
  },
  {
    en: "I don’t understand",
    fr: {
      correct: ["Je ne comprends pas", "Je pige pas (slang)", "Je comprends pas"],
    },
    es: {
      correct: ["No entiendo", "No comprendo"],
    },
    tr: {
      correct: ["Anlamıyorum", "Kavrayamadım"],
    },
    ja: {
      correct: ["わかりません", "理解できません"],
    }
  },
  {
    en: "Good morning",
    fr: {
      correct: ["Bonjour"],
    },
    es: {
      correct: ["Buenos días"],
    },
    tr: {
      correct: ["Günaydın"],
    },
    ja: {
      correct: ["おはようございます", "おはよう"],
    }
  },
  {
    en: "See you later",
    fr: {
      correct: ["À plus tard", "À plus", "À bientôt"],
    },
    es: {
      correct: ["Hasta luego", "Nos vemos"],
    },
    tr: {
      correct: ["Sonra görüşürüz", "Görüşürüz"],
    },
    ja: {
      correct: ["またね", "じゃあね"],
    }
  }
];let currentSentence = null;
let previousIndex = -1;

function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD") // split accents from letters
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/[!?.¿¡]/g, "") // remove punctuation
    .trim();
}

function randomSentence() {
  let index;
  do {
    index = Math.floor(Math.random() * sentences.length);
  } while (index === previousIndex);

  previousIndex = index;
  currentSentence = sentences[index];
  document.getElementById("englishSentence").textContent = currentSentence.en;
  document.getElementById("userInput").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("userInput").focus();
}

function checkTranslation() {
  const userAnswer = normalize(document.getElementById("userInput").value);
  const correctAnswers = currentSentence.fr.correct.map(normalize);

  const resultDiv = document.getElementById("result");

  if (correctAnswers.includes(userAnswer)) {
    resultDiv.textContent = "✅ Correct!";
    resultDiv.style.color = "green";
    setTimeout(randomSentence, 3000); // 3 seconds if correct
  } else {
    resultDiv.innerHTML = `❌ Nope!<br>Correct answers:<br><em>${currentSentence.fr.correct.join(", ")}</em>`;
    resultDiv.style.color = "red";
    setTimeout(randomSentence, 7000); // 7 seconds if incorrect
  }
}

// Handle Enter key
document.getElementById("userInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkTranslation();
  }
});

// Init
window.onload = randomSentence;

function nextSentence() {
  document.getElementById('result').textContent = '';   // Clear previous feedback
  document.getElementById('userInput').value = '';      // Clear input box
  randomSentence();                                      // Load a new random sentence
}

document.getElementById('submitUserSentence').addEventListener('click', () => {
  const en = document.getElementById('userEn').value.trim();
  const fr = document.getElementById('userFr').value.trim();
  const es = document.getElementById('userEs').value.trim();
  const tr = document.getElementById('userTr').value.trim();
  const ja = document.getElementById('userJa').value.trim();

  if (!en) {
    document.getElementById('userSentenceResult').textContent = 'Please enter an English sentence.';
    return;
  }

  // Helper function to split comma-separated translations into array
  const parseTranslations = (str) =>
    str ? str.split(',').map(s => s.trim()).filter(Boolean) : [];

  const newUserSentence = {
    en,
    fr: { correct: parseTranslations(fr) },
    es: { correct: parseTranslations(es) },
    tr: { correct: parseTranslations(tr) },
    ja: { correct: parseTranslations(ja) },
  };

  // Add it to your existing sentences array
  sentences.push(newUserSentence);

  document.getElementById('userSentenceResult').textContent = 'Thanks! Your sentence was added. 🎉';

  // Clear inputs
  ['userEn', 'userFr', 'userEs', 'userTr', 'userJa'].forEach(id => {
    document.getElementById(id).value = '';

    // After adding the new sentence:
sentences.push(newUserSentence);

// Show the newly added sentence immediately:
currentSentence = newUserSentence;
document.getElementById('englishSentence').textContent = currentSentence.en;
document.getElementById('userInput').value = '';
document.getElementById('result').textContent = '';
  });
});

// Load saved user sentences on page load
window.onload = () => {
  const saved = localStorage.getItem('userSentences');
  if (saved) {
    const savedSentences = JSON.parse(saved);
    sentences.push(...savedSentences);
  }
  randomSentence();
};

// Save sentences after adding new user sentence
function saveUserSentences() {
  // Filter only sentences added by users, or just save entire array if you want
  localStorage.setItem('userSentences', JSON.stringify(sentences));
}

// Modify the listener to save after push
document.getElementById('submitUserSentence').addEventListener('click', () => {
  // ... existing code ...
  sentences.push(newUserSentence);
  saveUserSentences();
  // ... rest ...
});