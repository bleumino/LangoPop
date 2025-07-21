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
      correct: ["Nous sommes amis", "On est amis", "Nous sommes amies"],
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
      correct: ["Où est le bus?", "Serait-il possible de savoir où est le bus ?", " Il est où le bus ? "," C’est où le bus ? " ],
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
      correct: ["J’ai faim", "Je crève la dalle", "	J’ai la dalle.", ],
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
      correct: ["Allons-y", "On y va", "C’est parti !", "Allez !"],
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
      correct: ["Je ne comprends pas", "Je pige pas", "Je comprends pas"],
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
    en: "Don’t be silly, you're going to the game!",
    fr: {
      correct: ["Ne sois pas bête, tu vas au match!"],
    },
    es: {
      correct: ["No seas tonto, ¡vas al partido!"],
    },
    tr: {
      correct: ["Aptal olma, maça gidiyorsun!"],
    },
    ja: {
      correct: ["ふざけないで、試合に行くんだよ！"],
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
  },

  {
    en: "Are trees green or blue?",
    fr: {
      correct: ["Les arbres sont-ils verts ou bleus ?", "Est-ce que les arbres sont verts ou bleus ?"],
    },
    es: {
      correct: ["¿Los árboles son verdes o azules?", " ¿Son verdes o azules los árboles?"],
    },
    tr: {
      correct: ["Ağaçlar yeşil mi yoksa mavi mi?", "Ağaçlar yeşil mi, mavi mi ya?"],
    },
    ja: {
      correct: ["木は緑ですか、それとも青ですか？", "木って緑？それとも青？"],
    }
  },

  {
  en: "I'm really tired today.",
  fr: {
    correct: ["Je suis vraiment fatigué aujourd'hui.", "Aujourd'hui, je suis super fatigué.", "Je suis trop fatigué aujourd’hui", "Je suis trop fatiguée aujourd’hui"]
  },
  es: {
    correct: ["Estoy muy cansado hoy.", "Hoy estoy realmente cansado."]
  },
  tr: {
    correct: ["Bugün gerçekten yorgunum.", "Çok yoruldum bugün."]
  },
  ja: {
    correct: ["今日は本当に疲れた。", "マジで今日は疲れた。"]
  }
},

{
  en: "Do you want to hang out this weekend?",
  fr: {
    correct: ["Tu veux traîner ce week-end ?", "Tu veux qu’on sorte ce week-end ?"]
  },
  es: {
    correct: ["¿Quieres salir este fin de semana?", "¿Te apetece quedar este finde?"]
  },
  tr: {
    correct: ["Bu hafta sonu takılmak ister misin?", "Hafta sonu buluşalım mı?"]
  },
  ja: {
    correct: ["今週末、遊びたい？", "今週末、どこか行く？"]
  }
},

{
  en: "I forgot my password again.",
  fr: {
    correct: ["J'ai encore oublié mon mot de passe.", "Encore une fois, j'ai oublié mon mot de passe."]
  },
  es: {
    correct: ["Olvidé mi contraseña otra vez.", "Se me olvidó la contraseña otra vez."]
  },
  tr: {
    correct: ["Şifremi yine unuttum.", "Yine şifreyi unuttum ya."]
  },
  ja: {
    correct: ["またパスワードを忘れちゃった。", "またパスワード忘れた。"]
  }
},

{
  en: "It's raining, don't forget your umbrella!",
  fr: {
    correct: ["Il pleut, n'oublie pas ton parapluie !", "N'oublie pas ton parapluie, il pleut !"]
  },
  es: {
    correct: ["Está lloviendo, ¡no olvides tu paraguas!", "¡No te olvides el paraguas, que llueve!"]
  },
  tr: {
    correct: ["Yağmur yağıyor, şemsiyeni unutma!", "Şemsiyeni almayı unutma, yağmur yağıyor!"]
  },
  ja: {
    correct: ["雨が降ってるよ、傘を忘れないで！", "傘持っていくの忘れないでね、雨だよ！"]
  }
},

{
  en: "Can you help me with this?",
  fr: {
    correct: ["Tu peux m'aider avec ça ?", "Est-ce que tu peux m’aider ?", "Pouvez-vous m’aider avec ça ?", "Tu me files un coup de main avec ça ?"]
  },
  es: {
    correct: ["¿Puedes ayudarme con esto?", "¿Me echas una mano con esto?"]
  },
  tr: {
    correct: ["Bana bununla yardım edebilir misin?", "Şuna yardım eder misin?"]
  },
  ja: {
    correct: ["これ手伝ってくれる？", "これ、助けてくれない？", "これを手伝ってもらえますか？", "これを手伝ってもらえますか？"]
  }
},

{
  en: "What time does the movie start?",
  fr: {
    correct: ["Le film commence à quelle heure ?", "À quelle heure commence le film ?", "C’est à quelle heure que le film commence ?", "Serait-il possible de connaître l’heure de début du film ?"]
  },
  es: {
    correct: ["¿A qué hora empieza la película?", "¿Cuándo empieza la peli?"]
  },
  tr: {
    correct: ["Film saat kaçta başlıyor?", "Film ne zaman başlıyor?"]
  },
  ja: {
    correct: ["映画は何時に始まる？", "映画、何時から？"]
  }
},

{
  en: "I didn’t sleep well last night.",
  fr: {
    correct: ["J'ai mal dormi cette nuit.", "Je n'ai pas bien dormi la nuit dernière.", "Je n’ai pas passé une bonne nuit.", "J’ai super mal dormi hier soir.", "J’ai fait une nuit de merde."]
  },
  es: {
    correct: ["No dormí bien anoche.", "Anoche dormí fatal."]
  },
  tr: {
    correct: ["Dün gece pek iyi uyuyamadım.", "Gece iyi uyuyamadım."]
  },
  ja: {
    correct: ["昨夜、よく眠れなかった。", "昨日の夜、全然寝れなかった。"]
  }
},

{
  en: "Let’s meet at the café around 4.",
  fr: {
    correct: ["On se retrouve au café vers 16h ?", "Rendez-vous au café vers 16h."]
  },
  es: {
    correct: ["Quedamos en el café sobre las 4.", "Nos vemos en la cafetería a eso de las 4."]
  },
  tr: {
    correct: ["Saat 4 gibi kafede buluşalım.", "4 gibi kafede görüşelim mi?"]
  },
  ja: {
    correct: ["4時ごろカフェで会おう。", "4時ごろカフェで待ち合わせしよう。"]
  }
},

{
  en: "That was a great idea!",
  fr: {
    correct: ["C'était une super idée !", "Quelle bonne idée !"]
  },
  es: {
    correct: ["¡Fue una gran idea!", "¡Qué buena idea!"]
  },
  tr: {
    correct: ["Harika bir fikirdi!", "Çok iyi düşündün!"]
  },
  ja: {
    correct: ["それはいいアイデアだったね！", "めっちゃいいアイデアだった！"]
  }
},

{
  en: "I need to charge my phone.",
  fr: {
    correct: ["Je dois recharger mon téléphone.", "Faut que je recharge mon portable.", "'J'ai besoin de charger mon téléphone"]
  },
  es: {
    correct: ["Necesito cargar mi teléfono.", "Tengo que cargar el móvil."]
  },
  tr: {
    correct: ["Telefonumu şarj etmem lazım.", "Şarjım bitiyor, telefonu takmam lazım."]
  },
  ja: {
    correct: ["スマホ充電しなきゃ。", "スマホの充電が必要。"]
  }
},

{
  en: "If I had known earlier, I would have come.",
  fr: {
    correct: ["Si j'avais su plus tôt, je serais venu(e)."]
  },
  es: {
    correct: ["Si lo hubiera sabido antes, habría venido."]
  },
  tr: {
    correct: ["Daha önce bilseydim, gelirdim."]
  },
  ja: {
    correct: ["もっと早く知ってたら、来てたのに。"]
  }
},

{
  en: "He pretended not to hear me.",
  fr: {
    correct: ["Il a fait semblant de ne pas m'entendre."]
  },
  es: {
    correct: ["Fingió no escucharme.", "Hizo como si no me oyera."]
  },
  tr: {
    correct: ["Beni duymamış gibi yaptı."]
  },
  ja: {
    correct: ["私のことを聞こえなかったふりをした。"]
  }
},

{
  en: "I’m not sure if I’ll be able to make it on time.",
  fr: {
    correct: ["Je ne suis pas sûr(e) de pouvoir arriver à l'heure."]
  },
  es: {
    correct: ["No estoy seguro/a de poder llegar a tiempo."]
  },
  tr: {
    correct: ["Zamanında yetişebilir miyim, emin değilim."]
  },
  ja: {
    correct: ["時間通りに行けるかどうか、ちょっと分からない。"]
  }
},

{
  en: "I wish I could speak all languages.",
  fr: {
    correct: ["J'aimerais pouvoir parler toutes les langues."]
  },
  es: {
    correct: ["Ojalá pudiera hablar todos los idiomas."]
  },
  tr: {
    correct: ["Keşke bütün dilleri konuşabilseydim."]
  },
  ja: {
    correct: ["すべての言語が話せたらいいのに。"]
  }
},

{
  en: "No matter how hard I try, it’s never enough.",
  fr: {
    correct: ["Peu importe à quel point j'essaie, ce n'est jamais suffisant."]
  },
  es: {
    correct: ["Por más que lo intente, nunca es suficiente."]
  },
  tr: {
    correct: ["Ne kadar uğraşırsam uğraşayım, yetmiyor."]
  },
  ja: {
    correct: ["どれだけ頑張っても、足りない気がする。"]
  }
},

{
  en: "Although he appears confident, he constantly doubts his own abilities.",
  fr: {
    correct: ["Bien qu'il semble sûr de lui, il doute constamment de ses propres capacités."]
  },
  es: {
    correct: ["Aunque aparenta tener confianza, duda constantemente de sus propias capacidades."]
  },
  tr: {
    correct: ["Kendinden emin görünse de, kendi yeteneklerinden sürekli şüphe duyuyor."]
  },
  ja: {
    correct: ["自信があるように見えるけれど、実はいつも自分の能力を疑っている。"]
  }
},

{
  en: "Had I known about the consequences, I would have made a different decision.",
  fr: {
    correct: ["Si j'avais connu les conséquences, j'aurais pris une autre décision."]
  },
  es: {
    correct: ["Si hubiera sabido las consecuencias, habría tomado una decisión diferente."]
  },
  tr: {
    correct: ["Sonuçları bilseydim, farklı bir karar verirdim."]
  },
  ja: {
    correct: ["結果を知っていたら、違う決断をしていただろう。"]
  }
},

{
  en: "What distinguishes humans from other species is our ability to reflect on our existence.",
  fr: {
    correct: ["Ce qui distingue les humains des autres espèces, c'est notre capacité à réfléchir à notre existence."]
  },
  es: {
    correct: ["Lo que distingue a los humanos de otras especies es nuestra capacidad de reflexionar sobre nuestra existencia."]
  },
  tr: {
    correct: ["İnsanları diğer türlerden ayıran şey, varoluşları üzerine düşünebilme yetileridir."]
  },
  ja: {
    correct: ["人間を他の種と区別するのは、自分の存在について考える能力だ。"]
  }
},

{
  en: "Contrary to popular belief, success often stems from persistence rather than talent.",
  fr: {
    correct: ["Contrairement à ce que l'on croit, le succès provient souvent de la persévérance plutôt que du talent."]
  },
  es: {
    correct: ["Contrario a la creencia popular, el éxito suele derivar de la perseverancia más que del talento."]
  },
  tr: {
    correct: ["Yaygın inanışın aksine, başarı çoğunlukla yetenekten değil, azimden kaynaklanır."]
  },
  ja: {
    correct: ["一般的な考えとは異なり、成功は多くの場合、才能よりも粘り強さに由来する。"]
  }
},

{
  en: "No matter how compelling the argument, it remains a matter of personal interpretation.",
  fr: {
    correct: ["Peu importe la force de l'argument, cela reste une question d'interprétation personnelle."]
  },
  es: {
    correct: ["Por muy convincente que sea el argumento, sigue siendo una cuestión de interpretación personal."]
  },
  tr: {
    correct: ["Ne kadar ikna edici olursa olsun, bu yine de kişisel yoruma bağlı bir konudur."]
  },
  ja: {
    correct: ["どれほど説得力のある主張でも、それはあくまで個人の解釈の問題だ。"]
  }
},

{
  en: "I like cats.",
  fr: {
    correct: ["J'aime les chats.", "je kiffe le chat"]
  },
  es: {
    correct: ["Me gustan los gatos."]
  },
  tr: {
    correct: ["Kedileri severim."]
  },
  ja: {
    correct: ["私は猫が好きです。", "猫が好きです。"]
  }
},

{
  en: "Where is the station?",
  fr: {
    correct: ["Où est la gare ?", "où est la station ?"]
  },
  es: {
    correct: ["¿Dónde está la estación?"]
  },
  tr: {
    correct: ["İstasyon nerede?"]
  },
  ja: {
    correct: ["駅はどこですか？", "駅どこ？"]
  }
},

{
  en: "I want water.",
  fr: {
    correct: ["Je veux de l'eau.", "J’ai besoin d’eau."," Il me faut de l’eau"  ]
  },
  es: {
    correct: ["Quiero agua."]
  },
  tr: {
    correct: ["Su istiyorum."]
  },
  ja: {
    correct: ["水が欲しいです。", "水がほしい。"]
  }
},

{
  en: "He is my friend.",
  fr: {
    correct: ["Il est mon ami."]
  },
  es: {
    correct: ["Él es mi amigo."]
  },
  tr: {
    correct: ["O benim arkadaşım."]
  },
  ja: {
    correct: ["彼は私の友達です。", "彼は友達です。"]
  }
},

{
  en: "It's cold today.",
  fr: {
    correct: ["Il fait froid aujourd'hui.","c’est froid aujourd’hui "]
  },
  es: {
    correct: ["Hace frío hoy."]
  },
  tr: {
    correct: ["Bugün hava soğuk."]
  },
  ja: {
    correct: ["今日は寒いです。", "今日寒い。"]
  }
},

{
  en: "It is possible that he is coming.",
  fr: {
    correct: ["Il est possible qu'il vienne.", "Il se peut qu’il vienne. ", "Peut-être qu’il vient."]
  },
  es: {
    correct: ["Es posible que él venga."]
  },
  tr: {
    correct: ["Geliyor olması mümkün."]
  },
  ja: {
    correct: ["彼が来る可能性があります。", "彼が来るかもしれません。", "彼が来るかもしれない。", "彼は来るかも。"]
  }
},

];

let currentSentence = null;
let previousIndex = -1;

function normalize(str) {
  return str
    .toLowerCase()           // <-- THIS makes it case-insensitive
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")  // remove accents
    .replace(/[!?.¿¡]/g, "")  // remove punctuation
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
  const lang = document.getElementById('languageSelect').value;
  const correctAnswers = currentSentence[lang].correct.map(normalize);

  const resultDiv = document.getElementById("result");

  if (correctAnswers.includes(userAnswer)) {
    resultDiv.textContent = "✅ Correct!";
    resultDiv.style.color = "green";
    setTimeout(randomSentence, 3000);
  } else {
    resultDiv.innerHTML = `❌ Nope!<br>Correct answers:<br><ul>${currentSentence[lang].correct
      .map(ans => `<li>${ans}</li>`)
      .join("")}</ul>`;
    resultDiv.style.color = "red";
  }
}

// When user clicks Next button
document.getElementById("nextBtn").addEventListener("click", () => {
  randomSentence();  // Update currentSentence internally
});

// Enter key listener: only check answer, never go next
document.getElementById("userInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkTranslation();
  }
});

// Your randomSentence function picks a new sentence and updates UI
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

// checkTranslation just checks and sets timeout to next sentence
function checkTranslation() {
  const userAnswer = normalize(document.getElementById("userInput").value);
  const lang = document.getElementById("languageSelect").value;
  const correctAnswers = currentSentence[lang].correct.map(normalize);
  const resultDiv = document.getElementById("result");

  if (correctAnswers.includes(userAnswer)) {
    resultDiv.textContent = "✅ Correct!";
    resultDiv.style.color = "green";
    setTimeout(randomSentence, 3000);
  } else {
resultDiv.textContent = "❌ Nope! Correct answers:\n• " + currentSentence[lang].correct.join("\n• ");
    resultDiv.style.color = "red";
  }
}

window.addEventListener('load', () => {
  randomSentence();
});

function nextSentence() {
  const index = Math.floor(Math.random() * sentences.length);
  currentSentence = sentences[index]; // Save the actual sentence object

  document.getElementById("englishSentence").textContent = currentSentence.en;
  document.getElementById("result").textContent = "";
  document.getElementById("userInput").value = "";
}

document.getElementById("submitUserSentence").addEventListener("click", () => {
  const userEn = document.getElementById("userEn").value.trim();
  const userFr = document.getElementById("userFr").value.trim().split(",").map(s => s.trim());
  const userEs = document.getElementById("userEs").value.trim().split(",").map(s => s.trim());
  const userTr = document.getElementById("userTr").value.trim().split(",").map(s => s.trim());
  const userJa = document.getElementById("userJa").value.trim().split(",").map(s => s.trim());

  if (!userEn) {
    document.getElementById("userSentenceResult").textContent = "Please enter at least an English sentence.";
    return;
  }

  sentences.push({
    en: userEn,
    fr: userFr.filter(Boolean),
    es: userEs.filter(Boolean),
    tr: userTr.filter(Boolean),
    ja: userJa.filter(Boolean)
  });

  document.getElementById("userSentenceResult").textContent = "✅ Sentence added!";
  
  // Clear form
  document.getElementById("userEn").value = "";
  document.getElementById("userFr").value = "";
  document.getElementById("userEs").value = "";
  document.getElementById("userTr").value = "";
  document.getElementById("userJa").value = "";
});



document.getElementById("submitUserSentence").addEventListener("click", () => {
  // ... your existing code to get inputs and push to sentences

  // Set currentSentence to the newly added one immediately
  currentSentence = sentences[sentences.length - 1];
  document.getElementById("englishSentence").textContent = currentSentence.en;
  document.getElementById("userInput").value = "";
  document.getElementById("result").textContent = "";

  // Focus input ready for user to translate it
  document.getElementById("userInput").focus();

  document.getElementById("userSentenceResult").textContent = "✅ Sentence added and ready!";
});

window.scrollTo(0, 0); // Jump to top-left of the page