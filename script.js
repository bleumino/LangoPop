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
  {
    en: "I need a coffee.",
    fr: ["J'ai besoin d'un café.", "Il me faut un café."],
    es: ["Necesito un café.", "Me hace falta un café."],
    tr: ["Bir kahveye ihtiyacım var.", "Kahve lazım bana."],
    ja: ["コーヒーが必要です。", "コーヒーをください。"]
  },
  {
    en: "Where is the bathroom?",
    fr: ["Où sont les toilettes ?", "Les toilettes, où sont-elles ?"],
    es: ["¿Dónde está el baño?", "¿Dónde están los baños?"],
    tr: ["Tuvalet nerede?", "Banyo nerede?"],
    ja: ["トイレはどこですか？", "お手洗いはどこ？"]
  },
  {
    en: "Can you speak slower?",
    fr: ["Pouvez-vous parler plus lentement ?", "Parlez plus lentement, s'il vous plaît."],
    es: ["¿Puedes hablar más despacio?", "Habla más despacio, por favor."],
    tr: ["Daha yavaş konuşabilir misin?", "Lütfen daha yavaş konuş."],
    ja: ["もっとゆっくり話してくれますか？", "ゆっくり話してください。"]
  },
  {
    en: "I love learning new languages.",
    fr: ["J'adore apprendre de nouvelles langues.", "J'aime apprendre de nouvelles langues."],
    es: ["Me encanta aprender nuevos idiomas.", "Me gusta aprender idiomas nuevos."],
    tr: ["Yeni diller öğrenmeyi seviyorum.", "Yeni diller öğrenmek hoşuma gidiyor."],
    ja: ["新しい言語を学ぶのが大好きです。", "新しい言語を勉強するのが好きです。"]
  },
  {
    en: "The food here is delicious.",
    fr: ["La nourriture ici est délicieuse.", "La bouffe ici est excellente."],
    es: ["La comida aquí es deliciosa.", "La comida está riquísima aquí."],
    tr: ["Buradaki yemek çok lezzetli.", "Yemekler harika burada."],
    ja: ["ここの料理は美味しいです。", "食べ物がとてもおいしいです。"]
  },
  {
    en: "She loves to dance.",
    fr: { correct: ["Elle aime danser.", "Elle adore danser."] },
    es: { correct: ["A ella le encanta bailar.", "Le gusta bailar."] },
    tr: { correct: ["O, dans etmeyi sever.", "Dans etmeyi çok seviyor."] },
    ja: { correct: ["彼女は踊るのが好きです。", "彼女はダンスが大好きです。"] }
  },
  {
    en: "The sun is shining.",
    fr: { correct: ["Le soleil brille.", "Il y a du soleil."] },
    es: { correct: ["El sol está brillando.", "Está soleado."] },
    tr: { correct: ["Güneş parlıyor.", "Hava güneşli."] },
    ja: { correct: ["太陽が輝いています。", "日が照っています。"] }
  },
  {
    en: "I bought a new book.",
    fr: { correct: ["J'ai acheté un nouveau livre.", "Je me suis acheté un livre."] },
    es: { correct: ["Compré un libro nuevo.", "He comprado un libro nuevo."] },
    tr: { correct: ["Yeni bir kitap aldım.", "Bir kitap satın aldım."] },
    ja: { correct: ["新しい本を買いました。", "本を新しく買った。"] }
  },
  {
    en: "We are going on vacation.",
    fr: { correct: ["Nous partons en vacances.", "On va en vacances."] },
    es: { correct: ["Nos vamos de vacaciones.", "Vamos de vacaciones."] },
    tr: { correct: ["Tatile gidiyoruz.", "Tatil yapacağız."] },
    ja: { correct: ["私たちは休暇に行きます。", "バケーションに行きます。"] }
  },
  {
    en: "This movie is interesting.",
    fr: { correct: ["Ce film est intéressant.", "Le film est captivant."] },
    es: { correct: ["Esta película es interesante.", "La película es fascinante."] },
    tr: { correct: ["Bu film ilginç.", "Film çok güzel."] },
    ja: { correct: ["この映画は面白いです。", "映画が興味深いです。"] }
  },
  {
    en: "I drink tea every morning.",
    fr: { correct: ["Je bois du thé tous les matins.", "Je prends du thé chaque matin."] },
    es: { correct: ["Bebo té cada mañana.", "Tomo té todas las mañanas."] },
    tr: { correct: ["Her sabah çay içerim.", "Sabahları çay içerim."] },
    ja: { correct: ["毎朝お茶を飲みます。", "私は毎朝お茶を飲みます。"] }
  },
  {
    en: "Do you have any pets?",
    fr: { correct: ["As-tu des animaux ?", "Est-ce que tu as des animaux ?"] },
    es: { correct: ["¿Tienes mascotas?", "¿Tienes algún animal?"] },
    tr: { correct: ["Evcil hayvanın var mı?", "Hayvan besliyor musun?"] },
    ja: { correct: ["ペットはいますか？", "動物を飼っていますか？"] }
  },
  {
    en: "I lost my keys.",
    fr: { correct: ["J'ai perdu mes clés.", "Mes clés sont perdues."] },
    es: { correct: ["Perdí mis llaves.", "He perdido las llaves."] },
    tr: { correct: ["Anahtarlarımı kaybettim.", "Anahtarlarım yok."] },
    ja: { correct: ["鍵をなくしました。", "鍵が見つかりません。"] }
  },
  {
    en: "The sky is blue.",
    fr: { correct: ["Le ciel est bleu.", "Le ciel est clair."] },
    es: { correct: ["El cielo es azul.", "El cielo está despejado."] },
    tr: { correct: ["Gökyüzü mavidir.", "Hava açık."] },
    ja: { correct: ["空は青いです。", "空が青い。"] }
  },
  {
    en: "She works at a hospital.",
    fr: { correct: ["Elle travaille à l'hôpital.", "Elle est à l'hôpital."] },
    es: { correct: ["Ella trabaja en un hospital.", "Trabaja en un hospital."] },
    tr: { correct: ["O bir hastanede çalışıyor.", "Hastanede çalışıyor."] },
    ja: { correct: ["彼女は病院で働いています。", "彼女は病院勤務です。"] }
  },
  {
    en: "I want to learn to cook.",
    fr: { correct: ["Je veux apprendre à cuisiner.", "J'aimerais apprendre la cuisine."] },
    es: { correct: ["Quiero aprender a cocinar.", "Me gustaría aprender a cocinar."] },
    tr: { correct: ["Yemek yapmayı öğrenmek istiyorum.", "Aşçılık öğrenmek istiyorum."] },
    ja: { correct: ["料理を習いたいです。", "料理を学びたい。"] }
  },
  {
    en: "They are my friends.",
    fr: { correct: ["Ce sont mes amis.", "Ils sont mes amis."] },
    es: { correct: ["Ellos son mis amigos.", "Son mis amigos."] },
    tr: { correct: ["Onlar benim arkadaşlarım.", "Arkadaşlarım onlar."] },
    ja: { correct: ["彼らは私の友達です。", "彼らは友達です。"] }
  },
  {
    en: "I’m hungry.",
    fr: { correct: ["J'ai faim.", "Je suis affamé."] },
    es: { correct: ["Tengo hambre.", "Estoy hambriento."] },
    tr: { correct: ["Acıktım.", "Karnım aç."] },
    ja: { correct: ["お腹が空きました。", "お腹がすいた。"] }
  },
  {
    en: "Please close the door.",
    fr: { correct: ["Veuillez fermer la porte.", "Fermez la porte, s'il vous plaît."] },
    es: { correct: ["Por favor, cierra la puerta.", "Cierra la puerta, por favor."] },
    tr: { correct: ["Lütfen kapıyı kapat.", "Kapıyı kapat lütfen."] },
    ja: { correct: ["ドアを閉めてください。", "ドアを閉じてください。"] }
  },
  {
    en: "It’s raining outside.",
    fr: { correct: ["Il pleut dehors.", "Il y a de la pluie dehors."] },
    es: { correct: ["Está lloviendo afuera.", "Llueve afuera."] },
    tr: { correct: ["Dışarıda yağmur yağıyor.", "Yağmur yağıyor dışarda."] },
    ja: { correct: ["外は雨が降っています。", "外で雨が降っている。"] }
  },
  {
    en: "The book is on the table.",
    fr: { correct: ["Le livre est sur la table.", "Le livre repose sur la table."] },
    es: { correct: ["El libro está sobre la mesa.", "El libro está en la mesa."] },
    tr: { correct: ["Kitap masanın üstünde.", "Kitap masada."] },
    ja: { correct: ["本はテーブルの上にあります。", "本がテーブルにあります。"] }
  },
  {
    en: "My phone is ringing.",
    fr: { correct: ["Mon téléphone sonne.", "Le téléphone sonne."] },
    es: { correct: ["Mi teléfono está sonando.", "El teléfono está sonando."] },
    tr: { correct: ["Telefonum çalıyor.", "Telefon çalıyor."] },
    ja: { correct: ["電話が鳴っています。", "携帯が鳴っている。"] }
  },
  {
    en: "She is very kind.",
    fr: { correct: ["Elle est très gentille.", "Elle est très aimable."] },
    es: { correct: ["Ella es muy amable.", "Es muy bondadosa."] },
    tr: { correct: ["O çok nazik.", "Çok kibar biri."] },
    ja: { correct: ["彼女はとても親切です。", "彼女は優しいです。"] }
  },
  {
    en: "I like to listen to music.",
    fr: { correct: ["J'aime écouter de la musique.", "J'adore la musique."] },
    es: { correct: ["Me gusta escuchar música.", "Me encanta la música."] },
    tr: { correct: ["Müzik dinlemeyi seviyorum.", "Müziği çok severim."] },
    ja: { correct: ["音楽を聴くのが好きです。", "音楽が大好きです。"] }
  },
  {
    en: "Turn left at the corner.",
    fr: { correct: ["Tournez à gauche au coin.", "Prends à gauche au coin."] },
    es: { correct: ["Gira a la izquierda en la esquina.", "Dobla a la izquierda en la esquina."] },
    tr: { correct: ["Köşede sola dön.", "Köşeden sola dönün."] },
    ja: { correct: ["角を左に曲がってください。", "角で左に曲がる。"] }
  },
  {
    en: "I’m going to bed.",
    fr: { correct: ["Je vais au lit.", "Je vais me coucher."] },
    es: { correct: ["Me voy a la cama.", "Voy a dormir."] },
    tr: { correct: ["Yatmaya gidiyorum.", "Uyumaya gidiyorum."] },
    ja: { correct: ["寝ます。", "ベッドに行きます。"] }
  },
  {
    en: "He plays soccer every weekend.",
    fr: { correct: ["Il joue au foot chaque week-end.", "Il joue au football tous les weekends."] },
    es: { correct: ["Él juega al fútbol todos los fines de semana.", "Juega fútbol cada fin de semana."] },
    tr: { correct: ["Her hafta sonu futbol oynar.", "O hafta sonları futbol oynar."] },
    ja: { correct: ["彼は毎週末サッカーをします。", "毎週末サッカーをしています。"] }
  },
  {
    en: "I can’t wait for summer.",
    fr: { correct: ["J'ai hâte d'être en été.", "Je suis impatient pour l'été."] },
    es: { correct: ["No puedo esperar al verano.", "Estoy deseando que llegue el verano."] },
    tr: { correct: ["Yazı sabırsızlıkla bekliyorum.", "Yaz gelsin diye sabırsızlanıyorum."] },
    ja: { correct: ["夏が待ちきれません。", "夏が楽しみです。"] }
  },
  {
    en: "This is my favorite song.",
    fr: { correct: ["C'est ma chanson préférée.", "C’est mon morceau préféré."] },
    es: { correct: ["Esta es mi canción favorita.", "Esta es mi canción preferida."] },
    tr: { correct: ["Bu benim en sevdiğim şarkı.", "En sevdiğim şarkı bu."] },
    ja: { correct: ["これは私のお気に入りの曲です。", "好きな歌です。"] }
  },
  {
    en: "The kids are playing outside.",
    fr: { correct: ["Les enfants jouent dehors.", "Les gamins jouent dehors."] },
    es: { correct: ["Los niños están jugando afuera.", "Los niños juegan afuera."] },
    tr: { correct: ["Çocuklar dışarıda oynuyor.", "Çocuklar dışarda oynuyor."] },
    ja: { correct: ["子供たちは外で遊んでいます。", "子どもたちが外で遊んでいる。"] }
  },
  {
    en: "I lost my wallet.",
    fr: { correct: ["J'ai perdu mon portefeuille.", "Mon portefeuille est perdu."] },
    es: { correct: ["Perdí mi cartera.", "He perdido mi billetera."] },
    tr: { correct: ["Cüzdanımı kaybettim.", "Cüzdanım yok."] },
    ja: { correct: ["財布をなくしました。", "財布が見つかりません。"] }
  },
  {
    en: "She is reading a magazine.",
    fr: { correct: ["Elle lit un magazine.", "Elle est en train de lire un magazine."] },
    es: { correct: ["Ella está leyendo una revista.", "Está leyendo una revista."] },
    tr: { correct: ["O dergi okuyor.", "Dergi okuyor."] },
    ja: { correct: ["彼女は雑誌を読んでいます。", "雑誌を読んでいる。"] }
  },
  {
    en: "I forgot my homework.",
    fr: { correct: ["J'ai oublié mes devoirs.", "Mes devoirs sont oubliés."] },
    es: { correct: ["Olvidé mi tarea.", "Se me olvidó la tarea."] },
    tr: { correct: ["Ödevimi unuttum.", "Ev ödevimi unuttum."] },
    ja: { correct: ["宿題を忘れました。", "宿題を忘れてしまった。"] }
  },
  {
    en: "The birds are singing.",
    fr: { correct: ["Les oiseaux chantent.", "Les oiseaux sont en train de chanter."] },
    es: { correct: ["Los pájaros están cantando.", "Los pájaros cantan."] },
    tr: { correct: ["Kuşlar şarkı söylüyor.", "Kuşlar ötüyor."] },
    ja: { correct: ["鳥が歌っています。", "鳥が鳴いています。"] }
  },
  {
    en: "The river flows gently.",
    fr: { correct: ["La rivière coule doucement.", "Le fleuve coule paisiblement."] },
    es: { correct: ["El río fluye suavemente.", "El río corre despacio."] },
    tr: { correct: ["Nehir yavaşça akıyor.", "Nehir nazikçe akıyor."] },
    ja: { correct: ["川はゆっくり流れています。", "川が穏やかに流れている。"] }
  },
  {
    en: "The trees are tall and green.",
    fr: { correct: ["Les arbres sont grands et verts.", "Les arbres sont hauts et verts."] },
    es: { correct: ["Los árboles son altos y verdes.", "Los árboles están verdes y altos."] },
    tr: { correct: ["Ağaçlar uzun ve yeşil.", "Ağaçlar büyük ve yeşil."] },
    ja: { correct: ["木々は高くて緑色です。", "木は背が高くて緑です。"] }
  },
  {
    en: "The mountain is covered with snow.",
    fr: { correct: ["La montagne est couverte de neige.", "La montagne a de la neige dessus."] },
    es: { correct: ["La montaña está cubierta de nieve.", "La montaña tiene nieve."] },
    tr: { correct: ["Dağ karla kaplı.", "Dağın üzeri karla örtülü."] },
    ja: { correct: ["山は雪に覆われています。", "山に雪が積もっています。"] }
  },
  {
    en: "The flowers bloom in spring.",
    fr: { correct: ["Les fleurs fleurissent au printemps.", "Les fleurs s'ouvrent au printemps."] },
    es: { correct: ["Las flores florecen en primavera.", "Las flores abren en primavera."] },
    tr: { correct: ["Çiçekler baharda açar.", "Çiçekler ilkbaharda açar."] },
    ja: { correct: ["花は春に咲きます。", "春に花が咲く。"] }
  },
  {
    en: "If you don't follow my Twitch lives, you've definitely missed everything on my island Rette.",
    fr: { correct: ["Si vous ne suivez pas mes lives sur Twitch, vous avez forcément tout loupé sur mon île Rette."] },
    es: { correct: ["Si no sigues mis directos en Twitch, seguro que te has perdido todo en mi isla Rette."] },
    tr: { correct: ["Eğer Twitch yayınlarımı takip etmiyorsan, Rette adasında olan her şeyi kesinlikle kaçırdın."] },
    ja: { correct: ["もし私のTwitchライブを見ていなければ、Rette島のすべてを見逃しています。"] }
  },
  {
    en: "Since the last video, a lot has changed on my island.",
    fr: { correct: ["Depuis la dernière vidéo, beaucoup de choses ont changé sur mon île."] },
    es: { correct: ["Desde el último video, muchas cosas han cambiado en mi isla."] },
    tr: { correct: ["Son videodan beri adamdaki çok şey değişti."] },
    ja: { correct: ["前回の動画から、島でたくさんのことが変わりました。"] }
  },
  {
    en: "Today, I will show you all the improvements and decorations.",
    fr: { correct: ["Aujourd'hui, je vais vous montrer toutes les améliorations et décorations."] },
    es: { correct: ["Hoy les mostraré todas las mejoras y decoraciones."] },
    tr: { correct: ["Bugün size tüm gelişmeleri ve dekorasyonları göstereceğim."] },
    ja: { correct: ["今日は島の改良や装飾を全部お見せします。"] }
  },
  {
    en: "My island has a Normcore theme with pink, green, and white colors.",
    fr: { correct: ["Mon île a un thème Normcore, avec des couleurs roses, vertes et du blanc."] },
    es: { correct: ["Mi isla tiene un tema Normcore con colores rosa, verde y blanco."] },
    tr: { correct: ["Adamdaki tema Normcore ve renkler pembe, yeşil ve beyaz."] },
    ja: { correct: ["私の島はノームコアテーマで、ピンク、緑、白の色があります。"] }
  },
  {
    en: "I created custom patterns which I'll soon show you in a tutorial.",
    fr: { correct: ["J'ai créé des motifs personnalisés que je vais bientôt vous montrer en tutoriel."] },
    es: { correct: ["He creado patrones personalizados que pronto les mostraré en un tutorial."] },
    tr: { correct: ["Özel desenler yaptım, yakında size bir öğreticide göstereceğim."] },
    ja: { correct: ["カスタムパターンを作成したので、近いうちにチュートリアルで紹介します。"] }
  },
  {
    en: "I buy all my furniture myself, no online or cheating.",
    fr: { correct: ["J'achète tous mes meubles moi-même, sans online ni triche."] },
    es: { correct: ["Compro todos mis muebles yo mismo, sin usar online ni hacer trampas."] },
    tr: { correct: ["Tüm mobilyalarımı kendim alıyorum, online ya da hile yok."] },
    ja: { correct: ["家具は全部自分で買っています。オンラインもチートも使っていません。"] }
  },
  {
    en: "The decor is simple but I try to make it nice and harmonious.",
    fr: { correct: ["La déco est simple mais j'essaie de rendre ça joli et harmonieux."] },
    es: { correct: ["La decoración es simple, pero trato de que sea bonita y armoniosa."] },
    tr: { correct: ["Dekorasyon basit ama güzel ve uyumlu yapmaya çalışıyorum."] },
    ja: { correct: ["装飾はシンプルですが、きれいで調和のとれたものにしようとしています。"] }
  },
  {
    en: "I started installing ramps and remodeling.",
    fr: { correct: ["J'ai commencé à installer des rampes et faire du remodelage."] },
    es: { correct: ["Empecé a instalar rampas y remodelar."] },
    tr: { correct: ["Rampalar kurmaya ve yeniden düzenlemeye başladım."] },
    ja: { correct: ["スロープの設置とリフォームを始めました。"] }
  },
  {
    en: "I earn money by growing vegetables in my field.",
    fr: { correct: ["Je gagne de l'argent en cultivant des légumes dans mon champ."] },
    es: { correct: ["Gano dinero cultivando verduras en mi campo."] },
    tr: { correct: ["Tarlamda sebze yetiştirerek para kazanıyorum."] },
    ja: { correct: ["畑で野菜を育ててお金を稼いでいます。"] }
  },
  {
    en: "My favorite villagers include Gambette, Gloria, and soon new frogs.",
    fr: { correct: ["Mes habitants préférés incluent Gambette, Gloria et bientôt de nouvelles grenouilles."] },
    es: { correct: ["Mis aldeanos favoritos incluyen a Gambette, Gloria y pronto nuevas ranas."] },
    tr: { correct: ["Favori köylülerim Gambette, Gloria ve yakında yeni kurbağalar."] },
    ja: { correct: ["お気に入りの住民はガンベット、グロリア、そしてもうすぐ新しいカエルたちです。"] }
  },
  {
    en: "I really like this spot, huh. A golden hour like I love.",
    fr: { correct: ["Moi je le trouve très bien ce spot hein.", "J'aime bien cet endroit, c’est l'heure dorée comme j'aime."] },
    es: { correct: ["Me gusta mucho este lugar, eh.", "Me encanta este momento dorado que tanto me gusta."] },
    tr: { correct: ["Ben bu yeri çok beğendim ya.", "Altın saat tam sevdiğim gibi."] },
    ja: { correct: ["ここいいスポットだと思うよ。", "好きなゴールデンアワーだね。"] }
  },
  {
    en: "We have 40.43 square meters. Honestly, it's beautiful. Even prettier in real life.",
    fr: { correct: ["On a donc 40,43 m².", "En vrai, il est beau.", "Il est plus joli en vrai encore."] },
    es: { correct: ["Tenemos 40,43 metros cuadrados.", "En realidad, es bonito.", "Es aún más bonito en persona."] },
    tr: { correct: ["Toplamda 40,43 metrekare var.", "Aslında güzel.", "Gerçek hayatta daha güzel."] },
    ja: { correct: ["40.43平方メートルあります。", "実際は綺麗です。", "実物はもっと綺麗です。"] }
  },
  {
    en: "Hello everyone, welcome to this new vlog, the last before my dad’s month-long vacation.",
    fr: { correct: ["Bonjour tout le monde, bienvenue dans ce nouveau vlog.", "Dernier vlog avant les vacances d’un mois de mon père."] },
    es: { correct: ["Hola a todos, bienvenidos a este nuevo vlog.", "Último vlog antes de las vacaciones de un mes de mi papá."] },
    tr: { correct: ["Herkese merhaba, yeni vloguma hoş geldiniz.", "Babamın bir aylık tatili öncesindeki son vlog."] },
    ja: { correct: ["みなさんこんにちは、新しいブログへようこそ。", "父の1か月の休暇前の最後のブログです。"] }
  },
  {
    en: "It’s Thursday, July 17th, 7:14 am. Usually, my dad doesn’t go to the site on Fridays, so today might be the last day.",
    fr: { correct: ["Jeudi 17 juillet, 7h14.", "Mon père ne va généralement pas sur le chantier le vendredi.", "Aujourd’hui pourrait être le dernier jour."] },
    es: { correct: ["Jueves 17 de julio, 7:14 am.", "Mi papá generalmente no va al sitio los viernes.", "Hoy podría ser el último día."] },
    tr: { correct: ["17 Temmuz Perşembe, 7:14.", "Babam genellikle cuma günleri şantiyeye gitmez.", "Bugün son gün olabilir."] },
    ja: { correct: ["7月17日木曜日、7時14分です。", "父は普段金曜日に現場に行きません。", "今日は最後の日かもしれません。"] }
  },
  {
    en: "The plumber is coming today, so if all goes well, we’ll have working toilets. I’m so excited!",
    fr: { correct: ["Le plombier vient aujourd'hui.", "Si tout se passe bien, on aura des toilettes.", "Je suis impatiente !"] },
    es: { correct: ["El plomero viene hoy.", "Si todo va bien, tendremos baños funcionando.", "¡Estoy muy emocionada!"] },
    tr: { correct: ["Tesisatçı bugün geliyor.", "Her şey yolunda giderse tuvaletler çalışacak.", "Çok heyecanlıyım!"] },
    ja: { correct: ["今日は配管工が来ます。", "うまくいけばトイレが使えるようになります。", "楽しみです！"] }
  },
  {
    en: "The drains will work; we can pour water in taps and sinks. I can clean the shower; water will flow.",
    fr: { correct: ["Les évacuations seront en service.", "On pourra verser de l'eau dans les robinets et éviers.", "Je pourrai nettoyer la douche."] },
    es: { correct: ["Las tuberías funcionarán.", "Podremos echar agua en los grifos y lavabos.", "Podré limpiar la ducha."] },
    tr: { correct: ["Drenajlar çalışacak.", "Musluklara ve lavabolara su dökebileceğiz.", "Duşu temizleyebileceğim."] },
    ja: { correct: ["排水が使えるようになります。", "蛇口や流しに水を流せます。", "シャワーを掃除できます。"] }
  },
  {
    en: "I’m ready; I left some makeup minimal. No time for more.",
    fr: { correct: ["Je suis prête.", "J’ai juste mis du mascara et un gel à sourcils transparent."] },
    es: { correct: ["Estoy lista.", "Solo me puse máscara y gel transparente para cejas."] },
    tr: { correct: ["Hazırım.", "Sadece rimel ve şeffaf kaş jeli sürdüm."] },
    ja: { correct: ["準備できました。", "マスカラと透明の眉ジェルだけつけました。"] }
  },
  {
    en: "I’ll try to buy many things and take you shopping with me while my dad’s away.",
    fr: { correct: ["Je vais essayer d’acheter plein de choses.", "Je vous emmènerai faire du shopping."] },
    es: { correct: ["Intentaré comprar muchas cosas.", "Les llevaré de compras conmigo."] },
    tr: { correct: ["Birçok şey almaya çalışacağım.", "Sizi alışverişe götüreceğim."] },
    ja: { correct: ["たくさん買い物しようと思います。", "みなさんを買い物に連れて行きます。"] }
  },
  {
    en: "I finished applying joints everywhere I could. The plumber started on the drains.",
    fr: { correct: ["J’ai fini de faire les joints partout.", "Le plombier a commencé les évacuations."] },
    es: { correct: ["Terminé de aplicar selladores donde pude.", "El plomero comenzó con las tuberías."] },
    tr: { correct: ["Yapabildiğim her yere derz uyguladım.", "Tesisatçı drenajlara başladı."] },
    ja: { correct: ["できる限りジョイントを仕上げました。", "配管工が排水工事を始めました。"] }
  },
  {
    en: "We installed the baseboards before putting in the toilets for easier fitting.",
    fr: { correct: ["Nous avons mis les plinthes avant les toilettes.", "C’est plus pratique ainsi."] },
    es: { correct: ["Instalamos las molduras antes de poner los baños.", "Así es más práctico."] },
    tr: { correct: ["Tuvaletleri koymadan önce süpürgelikleri taktık.", "Bu daha pratik oldu."] },
    ja: { correct: ["トイレを入れる前に巾木を取り付けました。", "これで作業が楽になります。"] }
  },
  {
    en: "We have water! The toilets work, and no leaks so far.",
    fr: { correct: ["On a de l'eau !", "Les toilettes fonctionnent sans fuite pour l'instant."] },
    es: { correct: ["¡Tenemos agua!", "Los baños funcionan y no hay fugas por ahora."] },
    tr: { correct: ["Suyumuz var!", "Tuvaletler çalışıyor, şimdilik sızıntı yok."] },
    ja: { correct: ["水が出ます！", "トイレは動いていて、今のところ漏れはありません。"] }
  },
  {
    en: "Everything is progressing well. I’m super happy.",
    fr: { correct: ["Tout avance bien.", "Je suis super contente."] },
    es: { correct: ["Todo avanza bien.", "Estoy súper contenta."] },
    tr: { correct: ["Her şey yolunda gidiyor.", "Çok mutluyum."] },
    ja: { correct: ["すべて順調です。", "とても嬉しいです。"] }
  },
  {
    en: "Today, I studied French and played games in French.",
    fr: { correct: ["Aujourd’hui, j’ai étudié le français et joué à des jeux en français."] },
    es: { correct: ["Hoy estudié francés y jugué juegos en francés."] },
    tr: { correct: ["Bugün Fransızca çalıştım ve Fransızca oyunlar oynadım."] },
    ja: { correct: ["今日はフランス語を勉強して、フランス語のゲームをしました。"] }
  },
  {
    en: "I live in Adelaide, a beautiful city in Australia.",
    fr: { correct: ["J’habite à Adélaïde, une belle ville en Australie."] },
    es: { correct: ["Vivo en Adelaida, una ciudad hermosa en Australia."] },
    tr: { correct: ["Avustralya’nın güzel bir şehri olan Adelaide’de yaşıyorum."] },
    ja: { correct: ["オーストラリアの美しい都市、アデレードに住んでいます。"] }
  },
  {
    en: "I love playing video games and making videos.",
    fr: { correct: ["J’adore jouer aux jeux vidéo et faire des vidéos."] },
    es: { correct: ["Me encanta jugar videojuegos y hacer videos."] },
    tr: { correct: ["Video oyunları oynamayı ve video yapmayı seviyorum."] },
    ja: { correct: ["ビデオゲームをしたり、動画を作ったりするのが好きです。"] }
  },
  {
    en: "Next week, I will practice French every day.",
    fr: { correct: ["La semaine prochaine, je pratiquerai le français tous les jours."] },
    es: { correct: ["La próxima semana practicaré francés todos los días."] },
    tr: { correct: ["Gelecek hafta her gün Fransızca pratiği yapacağım."] },
    ja: { correct: ["来週は毎日フランス語を練習します。"] }
  },
  {
    en: "I’m going to the store to buy some snacks.",
    fr: { correct: ["Je vais au magasin pour acheter des snacks."] },
    es: { correct: ["Voy a la tienda a comprar algunos snacks."] },
    tr: { correct: ["Atıştırmalık almak için mağazaya gidiyorum."] },
    ja: { correct: ["お菓子を買いに店に行きます。"] }
  },
  {
    en: "The weather is nice today, perfect for a walk.",
    fr: { correct: ["Il fait beau aujourd’hui, parfait pour une promenade."] },
    es: { correct: ["El clima está agradable hoy, perfecto para pasear."] },
    tr: { correct: ["Bugün hava güzel, yürüyüş için mükemmel."] },
    ja: { correct: ["今日は天気が良くて、散歩にぴったりです。"] }
  },
  {
    en: "I drink coffee every morning to wake up.",
    fr: { correct: ["Je bois du café tous les matins pour me réveiller."] },
    es: { correct: ["Bebo café todas las mañanas para despertarme."] },
    tr: { correct: ["Her sabah uyanmak için kahve içerim."] },
    ja: { correct: ["毎朝、目を覚ますためにコーヒーを飲みます。"] }
  },
  {
    en: "Can you help me with this homework?",
    fr: { correct: ["Peux-tu m’aider avec ce devoir ?"] },
    es: { correct: ["¿Puedes ayudarme con esta tarea?"] },
    tr: { correct: ["Bana bu ödevde yardım eder misin?"] },
    ja: { correct: ["この宿題を手伝ってくれますか？"] }
  },
  {
    en: "I like listening to music when I study.",
    fr: { correct: ["J’aime écouter de la musique quand j’étudie."] },
    es: { correct: ["Me gusta escuchar música cuando estudio."] },
    tr: { correct: ["Çalışırken müzik dinlemeyi severim."] },
    ja: { correct: ["勉強するときに音楽を聴くのが好きです。"] }
  },
  // Easy
  {
    en: "I eat breakfast at 7 am every day.",
    fr: { correct: ["Je prends le petit déjeuner à 7 heures tous les jours."] },
    es: { correct: ["Desayuno a las 7 de la mañana todos los días."] },
    tr: { correct: ["Her gün sabah 7’de kahvaltı yaparım."] },
    ja: { correct: ["毎日朝7時に朝食を食べます。"] }
  },
  // Medium
  {
    en: "She has been studying French for three years now.",
    fr: { correct: ["Elle étudie le français depuis trois ans maintenant."] },
    es: { correct: ["Ella ha estado estudiando francés por tres años."] },
    tr: { correct: ["O, üç yıldır Fransızca çalışıyor."] },
    ja: { correct: ["彼女はもう3年間フランス語を勉強しています。"] }
  },
  // Medium
  {
    en: "If it rains tomorrow, we will stay inside and watch movies.",
    fr: { correct: ["S’il pleut demain, nous resterons à l’intérieur et regarderons des films."] },
    es: { correct: ["Si llueve mañana, nos quedaremos dentro y veremos películas."] },
    tr: { correct: ["Yarın yağmur yağarsa, içerde kalıp film izleyeceğiz."] },
    ja: { correct: ["もし明日雨が降ったら、家の中で映画を見ます。"] }
  },
  // Hard
  {
    en: "Despite the challenges, she managed to finish the project on time.",
    fr: { correct: ["Malgré les défis, elle a réussi à terminer le projet à temps."] },
    es: { correct: ["A pesar de los desafíos, ella logró terminar el proyecto a tiempo."] },
    tr: { correct: ["Zorluklara rağmen, projeyi zamanında bitirmeyi başardı."] },
    ja: { correct: ["困難にもかかわらず、彼女はプロジェクトを時間通りに終わらせました。"] }
  },
  // Hard
  {
    en: "The technology we use today will probably seem outdated in just a few years.",
    fr: { correct: ["La technologie que nous utilisons aujourd’hui semblera probablement obsolète dans quelques années seulement."] },
    es: { correct: ["La tecnología que usamos hoy probablemente parecerá obsoleta en solo unos años."] },
    tr: { correct: ["Bugün kullandığımız teknoloji muhtemelen sadece birkaç yıl içinde eski görünecek."] },
    ja: { correct: ["今日使っている技術は、たった数年で時代遅れに見えるでしょう。"] }
  },
  {
    en: "I forgot where I put my keys this morning.",
    fr: { correct: [
      "J’ai oublié où j’ai mis mes clés ce matin.",
      "Ce matin, j’ai oublié où étaient mes clés."
    ]},
    es: { correct: [
      "Olvidé dónde puse mis llaves esta mañana.",
      "Esta mañana olvidé dónde dejé las llaves."
    ]},
    tr: { correct: [
      "Bu sabah anahtarlarımı nereye koyduğumu unuttum.",
      "Sabah anahtarlarımı koyduğum yeri unuttum."
    ]},
    ja: { correct: [
      "今朝、鍵をどこに置いたか忘れました。",
      "今朝、鍵をどこにしまったか忘れてしまった。"
    ]}
  },
  {
    en: "It’s important to drink enough water every day.",
    fr: { correct: [
      "Il est important de boire assez d’eau chaque jour.",
      "Boire suffisamment d’eau tous les jours est important."
    ]},
    es: { correct: [
      "Es importante beber suficiente agua todos los días.",
      "Beber bastante agua diariamente es importante."
    ]},
    tr: { correct: [
      "Her gün yeterince su içmek önemlidir.",
      "Günde yeterli su içmek çok önemlidir."
    ]},
    ja: { correct: [
      "毎日十分な水を飲むことが大切です。",
      "毎日適量の水を飲むことは重要です。"
    ]}
  },
  {
    en: "She has been learning French for three years.",
    fr: { correct: [
      "Elle apprend le français depuis trois ans.",
      "Cela fait trois ans qu’elle étudie le français."
    ]},
    es: { correct: [
      "Ella ha estado aprendiendo francés durante tres años.",
      "Lleva tres años estudiando francés."
    ]},
    tr: { correct: [
      "Üç yıldır Fransızca öğreniyor.",
      "Üç yıldır Fransızca çalışıyor."
    ]},
    ja: { correct: [
      "彼女は3年間フランス語を勉強しています。",
      "彼女は3年もフランス語を学んでいます。"
    ]}
  },
  {
    en: "The weather forecast says it might rain tomorrow.",
    fr: { correct: [
      "La météo annonce qu’il pourrait pleuvoir demain.",
      "Le bulletin météo dit qu’il va peut-être pleuvoir demain."
    ]},
    es: { correct: [
      "El pronóstico del tiempo dice que podría llover mañana.",
      "El reporte del clima indica que tal vez llueva mañana."
    ]},
    tr: { correct: [
      "Hava durumu yarın yağmur yağabileceğini söylüyor.",
      "Yarın yağmur yağabilir diye hava raporu veriyor."
    ]},
    ja: { correct: [
      "天気予報では明日雨が降るかもしれません。",
      "明日は雨が降るかもしれないと天気予報が言っています。"
    ]}
  },
  {
    en: "I will call you as soon as I arrive.",
    fr: { correct: [
      "Je t’appellerai dès que j’arriverai.",
      "Je te téléphonerai dès mon arrivée."
    ]},
    es: { correct: [
      "Te llamaré tan pronto como llegue.",
      "Te voy a llamar en cuanto llegue."
    ]},
    tr: { correct: [
      "Vardığım gibi seni arayacağım.",
      "Varır varmaz seni arayacağım."
    ]},
    ja: { correct: [
      "着いたらすぐに電話します。",
      "到着したらすぐに連絡します。"
    ]}
  },
  {
    en: "Do you know where the nearest train station is?",
    fr: { correct: [
      "Sais-tu où se trouve la gare la plus proche ?",
      "Est-ce que tu sais où est la gare la plus proche ?"
    ]},
    es: { correct: [
      "¿Sabes dónde está la estación de tren más cercana?",
      "¿Conoces la ubicación de la estación de tren más próxima?"
    ]},
    tr: { correct: [
      "En yakın tren istasyonunun nerede olduğunu biliyor musun?",
      "Yakındaki tren istasyonunu biliyor musun?"
    ]},
    ja: { correct: [
      "一番近い駅がどこか知っていますか？",
      "最寄りの駅はどこか分かりますか？"
    ]}
  },
  {
    en: "They invited us to their wedding next month.",
    fr: { correct: [
      "Ils nous ont invités à leur mariage le mois prochain.",
      "Nous sommes invités à leur mariage le mois prochain."
    ]},
    es: { correct: [
      "Nos invitaron a su boda el próximo mes.",
      "Estamos invitados a su boda el mes que viene."
    ]},
    tr: { correct: [
      "Bizi gelecek ayki düğünlerine davet ettiler.",
      "Gelecek ayki düğünlerine çağrıldık."
    ]},
    ja: { correct: [
      "彼らは来月の結婚式に私たちを招待しました。",
      "来月の結婚式に招待されています。"
    ]}
  },
  {
    en: "I prefer tea over coffee in the morning.",
    fr: { correct: [
      "Je préfère le thé au café le matin.",
      "Le matin, je préfère boire du thé plutôt que du café."
    ]},
    es: { correct: [
      "Prefiero el té al café por la mañana.",
      "En la mañana, me gusta más el té que el café."
    ]},
    tr: { correct: [
      "Sabahları kahveden çok çayı tercih ederim.",
      "Sabah çay içmeyi kahveden daha çok seviyorum."
    ]},
    ja: { correct: [
      "朝はコーヒーよりお茶の方が好きです。",
      "朝はコーヒーではなくお茶を好みます。"
    ]}
  },
  {
    en: "I am planning to cook dinner for my friends tonight.",
    fr: { correct: [
      "Je prévois de préparer le dîner pour mes amis ce soir.",
      "Ce soir, je vais cuisiner pour mes amis."
    ]},
    es: { correct: [
      "Estoy planeando cocinar la cena para mis amigos esta noche.",
      "Voy a preparar la cena para mis amigos esta noche."
    ]},
    tr: { correct: [
      "Bu akşam arkadaşlarım için akşam yemeği yapmayı planlıyorum.",
      "Bu gece arkadaşlarım için yemek pişirmeyi düşünüyorum."
    ]},
    ja: { correct: [
      "今夜、友達のために夕食を作る予定です。",
      "今晩、友達に夕ご飯を作ろうと思っています。"
    ]}
  },
  {
    en: "Could you please repeat that more slowly?",
    fr: { correct: [
      "Pourriez-vous répéter cela plus lentement, s’il vous plaît ?",
      "Peux-tu répéter plus lentement, s’il te plaît ?"
    ]},
    es: { correct: [
      "¿Podrías repetir eso más despacio, por favor?",
      "¿Puede repetir eso más lentamente, por favor?"
    ]},
    tr: { correct: [
      "Lütfen bunu daha yavaş tekrar eder misin?",
      "Bunu daha yavaş söyler misin lütfen?"
    ]},
    ja: { correct: [
      "もっとゆっくり言ってもらえますか？",
      "もう少しゆっくり繰り返していただけますか？"
    ]}
  },
  {
    en: "The children are playing in the park right now.",
    fr: { correct: [
      "Les enfants jouent dans le parc en ce moment.",
      "Les enfants sont en train de jouer au parc."
    ]},
    es: { correct: [
      "Los niños están jugando en el parque ahora mismo.",
      "Los niños juegan en el parque en este momento."
    ]},
    tr: { correct: [
      "Çocuklar şu anda parkta oynuyor.",
      "Çocuklar şu an parkta oyun oynuyorlar."
    ]},
    ja: { correct: [
      "子供たちは今、公園で遊んでいます。",
      "子どもたちはただいま公園で遊んでいます。"
    ]}
  },
  {
    en: "I have never been to Japan, but I want to visit someday.",
    fr: { correct: [
      "Je ne suis jamais allé(e) au Japon, mais je veux y aller un jour.",
      "Je n’ai jamais visité le Japon, mais j’aimerais y aller un jour."
    ]},
    es: { correct: [
      "Nunca he estado en Japón, pero quiero visitarlo algún día.",
      "No he visitado Japón, pero me gustaría hacerlo algún día."
    ]},
    tr: { correct: [
      "Hiç Japonya’ya gitmedim ama bir gün ziyaret etmek istiyorum.",
      "Japonya’ya hiç gitmedim ama bir gün gitmek istiyorum."
    ]},
    ja: { correct: [
      "私は日本に行ったことがありませんが、いつか訪れたいです。",
      "日本には行ったことがないけど、いつか行ってみたいです。"
    ]}
  },
  {
    en: "Please turn off the lights when you leave the room.",
    fr: { correct: [
      "Veuillez éteindre les lumières en quittant la pièce.",
      "Merci d’éteindre la lumière en sortant."
    ]},
    es: { correct: [
      "Por favor, apaga las luces cuando salgas de la habitación.",
      "Apaga la luz al salir, por favor."
    ]},
    tr: { correct: [
      "Odadayken ışıkları kapatır mısın lütfen?",
      "Odadayken ışıkları kapatmanı rica ediyorum."
    ]},
    ja: { correct: [
      "部屋を出るときに電気を消してください。",
      "部屋から出るときはライトを消してください。"
    ]}
  },
  {
    en: "I am excited about the concert next weekend.",
    fr: { correct: [
      "Je suis impatient(e) pour le concert le week-end prochain.",
      "J’ai hâte pour le concert du week-end prochain."
    ]},
    es: { correct: [
      "Estoy emocionado/a por el concierto del próximo fin de semana.",
      "Tengo muchas ganas del concierto del fin de semana que viene."
    ]},
    tr: { correct: [
      "Gelecek hafta sonu konser için çok heyecanlıyım.",
      "Önümüzdeki hafta sonundaki konseri sabırsızlıkla bekliyorum."
    ]},
    ja: { correct: [
      "来週末のコンサートが楽しみです。",
      "次の週末のコンサートにワクワクしています。"
    ]}
  },
  {
    en: "How long does it take to get to the airport from here?",
    fr: { correct: [
      "Combien de temps faut-il pour aller à l’aéroport d’ici ?",
      "Ça prend combien de temps pour aller à l’aéroport d’ici ?"
    ]},
    es: { correct: [
      "¿Cuánto se tarda en llegar al aeropuerto desde aquí?",
      "¿Cuánto tiempo toma llegar al aeropuerto desde aquí?"
    ]},
    tr: { correct: [
      "Buradan havaalanına gitmek ne kadar sürer?",
      "Buradan havaalanına varmak ne kadar zaman alır?"
    ]},
    ja: { correct: [
      "ここから空港までどのくらい時間がかかりますか？",
      "ここから空港までの所要時間はどれくらいですか？"
    ]}
  },
  {
    en: "I lost my phone at the shopping mall yesterday.",
    fr: { correct: [
      "J’ai perdu mon téléphone au centre commercial hier.",
      "Hier, j’ai égaré mon portable au centre commercial."
    ]},
    es: { correct: [
      "Perdí mi teléfono en el centro comercial ayer.",
      "Ayer perdí mi móvil en el centro comercial."
    ]},
    tr: { correct: [
      "Dün alışveriş merkezinde telefonumu kaybettim.",
      "Telefonumu dün AVM’de kaybettim."
    ]},
    ja: { correct: [
      "昨日ショッピングモールで携帯電話を失くしました。",
      "昨日、ショッピングモールでスマホをなくしました。"
    ]}
  },
  {
    en: "The movie we watched last night was really interesting.",
    fr: { correct: [
      "Le film que nous avons regardé hier soir était vraiment intéressant.",
      "Le film d’hier soir était très captivant."
    ]},
    es: { correct: [
      "La película que vimos anoche fue muy interesante.",
      "El filme que vimos anoche estuvo muy entretenido."
    ]},
    tr: { correct: [
      "Dün gece izlediğimiz film gerçekten ilginçti.",
      "Geçen gece izlediğimiz film çok ilgi çekiciydi."
    ]},
    ja: { correct: [
      "昨晩見た映画は本当に面白かったです。",
      "昨日の夜に見た映画はすごく興味深かったです。"
    ]}
  },
  {
    en: "Could you recommend a good restaurant nearby?",
    fr: { correct: [
      "Pourriez-vous recommander un bon restaurant dans les environs ?",
      "Peux-tu me conseiller un bon restaurant proche d’ici ?"
    ]},
    es: { correct: [
      "¿Podrías recomendarme un buen restaurante cerca de aquí?",
      "¿Me recomiendas un restaurante bueno por aquí?"
    ]},
    tr: { correct: [
      "Buraya yakın iyi bir restoran önerebilir misin?",
      "Yakınlarda iyi bir restoran tavsiye eder misin?"
    ]},
    ja: { correct: [
      "近くに良いレストランをおすすめしてもらえますか？",
      "近所の美味しいレストランを教えてくれますか？"
    ]}
  },
  {
    en: "I have been feeling tired lately because of work.",
    fr: { correct: [
      "Je me sens fatigué(e) ces derniers temps à cause du travail.",
      "Dernièrement, je suis fatigué(e) à cause du travail."
    ]},
    es: { correct: [
      "Últimamente me siento cansado/a por el trabajo.",
      "He estado cansado/a últimamente debido al trabajo."
    ]},
    tr: { correct: [
      "Son zamanlarda iş yüzünden yorgun hissediyorum.",
      "İş nedeniyle son zamanlarda kendimi yorgun hissediyorum."
    ]},
    ja: { correct: [
      "最近仕事のせいで疲れています。",
      "仕事のせいで最近疲れを感じています。"
    ]}
  },
  {
    en: "Please write down your phone number here.",
    fr: { correct: [
      "Veuillez écrire votre numéro de téléphone ici, s’il vous plaît.",
      "Merci d’écrire votre numéro de téléphone ici."
    ]},
    es: { correct: [
      "Por favor, escribe tu número de teléfono aquí.",
      "Anota tu número de teléfono aquí, por favor."
    ]},
    tr: { correct: [
      "Lütfen telefon numaranızı buraya yazınız.",
      "Telefon numaranızı buraya yazmanızı rica ediyorum."
    ]},
    ja: { correct: [
      "ここに電話番号を書いてください。",
      "電話番号をここに記入してください。"
    ]}
  },
  {
    en: "I’m thinking about starting a new hobby this summer.",
    fr: { correct: [
      "Je pense commencer un nouveau hobby cet été.",
      "Je réfléchis à commencer une nouvelle activité cet été."
    ]},
    es: { correct: [
      "Estoy pensando en empezar un nuevo pasatiempo este verano.",
      "Quiero comenzar una nueva afición este verano."
    ]},
    tr: { correct: [
      "Bu yaz yeni bir hobiye başlamayı düşünüyorum.",
      "Yazın yeni bir uğraş başlatmayı planlıyorum."
    ]},
    ja: { correct: [
      "今年の夏に新しい趣味を始めようと思っています。",
      "夏に新しい趣味を始めることを考えています。"
    ]}
  },
  {
    en: "The traffic was terrible during my commute today.",
    fr: { correct: [
      "Le trafic était horrible pendant mon trajet aujourd’hui.",
      "Aujourd’hui, la circulation était très mauvaise durant mon déplacement."
    ]},
    es: { correct: [
      "El tráfico estuvo terrible durante mi trayecto hoy.",
      "Hoy el tráfico fue horrible mientras iba al trabajo."
    ]},
    tr: { correct: [
      "Bugün işe giderken trafik çok yoğundu.",
      "Bugünkü yolculuğumda trafik berbattı."
    ]},
    ja: { correct: [
      "今日の通勤中、交通渋滞がひどかったです。",
      "今日は通勤時の渋滞が酷かった。"
    ]}
  },
  {
    en: "Can you help me fix my computer? It won’t start.",
    fr: { correct: [
      "Peux-tu m’aider à réparer mon ordinateur ? Il ne démarre pas.",
      "Tu peux m’aider à réparer mon PC ? Il ne s’allume plus."
    ]},
    es: { correct: [
      "¿Puedes ayudarme a arreglar mi computadora? No enciende.",
      "¿Me ayudas con mi ordenador? No arranca."
    ]},
    tr: { correct: [
      "Bilgisayarımı tamir etmeme yardım eder misin? Açılmıyor.",
      "Bilgisayarım açılmıyor, yardım eder misin?"
    ]},
    ja: { correct: [
      "パソコンを直すのを手伝ってくれますか？起動しません。",
      "コンピューターが起動しないので助けてくれますか？"
    ]}
  },
  {
    en: "I need to buy a gift for my sister’s birthday.",
    fr: { correct: [
      "Je dois acheter un cadeau pour l’anniversaire de ma sœur.",
      "Il me faut un cadeau pour l’anniversaire de ma sœur."
    ]},
    es: { correct: [
      "Necesito comprar un regalo para el cumpleaños de mi hermana.",
      "Tengo que comprar un presente para el cumpleaños de mi hermana."
    ]},
    tr: { correct: [
      "Kardeşimin doğum günü için bir hediye almam gerekiyor.",
      "Kız kardeşimin doğum günü için hediye almalıyım."
    ]},
    ja: { correct: [
      "妹の誕生日のためにプレゼントを買う必要があります。",
      "妹の誕生日プレゼントを買わなければなりません。"
    ]}
  },
  {
    en: "The book I’m reading is very interesting and informative.",
    fr: { correct: [
      "Le livre que je lis est très intéressant et instructif.",
      "Le livre que je suis en train de lire est passionnant et informatif."
    ]},
    es: { correct: [
      "El libro que estoy leyendo es muy interesante e informativo.",
      "El libro que leo es fascinante y educativo."
    ]},
    tr: { correct: [
      "Okuduğum kitap çok ilginç ve bilgilendirici.",
      "Şu anda okuduğum kitap çok ilginç ve öğretici."
    ]},
    ja: { correct: [
      "私が読んでいる本はとても面白くてためになります。",
      "読んでいる本はすごく興味深くて役に立ちます。"
    ]}
  },
  {
    en: "Would you like to join us for dinner tonight?",
    fr: { correct: [
      "Veux-tu te joindre à nous pour dîner ce soir ?",
      "Aimerais-tu venir dîner avec nous ce soir ?"
    ]},
    es: { correct: [
      "¿Te gustaría acompañarnos a cenar esta noche?",
      "¿Quieres venir a cenar con nosotros esta noche?"
    ]},
    tr: { correct: [
      "Bu akşam yemeğe bize katılmak ister misin?",
      "Bu gece yemeğe gelmek ister misin?"
    ]},
    ja: { correct: [
      "今晩、一緒に夕食をどうですか？",
      "今夜、一緒に食事しませんか？"
    ]}
  },
  {
    en: "I’m worried about the exam next week.",
    fr: { correct: [
      "Je suis inquiet/inquiète pour l’examen de la semaine prochaine.",
      "Je m’inquiète pour l’examen de la semaine prochaine."
    ]},
    es: { correct: [
      "Estoy preocupado/preocupada por el examen de la próxima semana.",
      "Me preocupa el examen que tengo la semana que viene."
    ]},
    tr: { correct: [
      "Gelecek hafta sınav için endişeliyim.",
      "Önümüzdeki haftaki sınav hakkında kaygılıyım."
    ]},
    ja: { correct: [
      "来週の試験が心配です。",
      "来週のテストについて不安です。"
    ]}
  },
  {
    en: "The museum closes at 6 PM on Sundays.",
    fr: { correct: [
      "Le musée ferme à 18 heures le dimanche.",
      "Le dimanche, le musée ferme à 18h."
    ]},
    es: { correct: [
      "El museo cierra a las 6 PM los domingos.",
      "Los domingos, el museo cierra a las 6 de la tarde."
    ]},
    tr: { correct: [
      "Müze pazar günleri saat 6’da kapanıyor.",
      "Pazar günleri müze saat 18’de kapanır."
    ]},
    ja: { correct: [
      "美術館は日曜日は午後6時に閉まります。",
      "日曜日の美術館は6時に閉館します。"
    ]}
  },
  {
    en: "I’m trying to improve my pronunciation in French.",
    fr: { correct: [
      "J’essaie d’améliorer ma prononciation en français.",
      "Je travaille à améliorer ma prononciation du français."
    ]},
    es: { correct: [
      "Estoy intentando mejorar mi pronunciación en francés.",
      "Trato de perfeccionar mi pronunciación en francés."
    ]},
    tr: { correct: [
      "Fransızca telaffuzumu geliştirmeye çalışıyorum.",
      "Fransızca telaffuzumu iyileştirmeye uğraşıyorum."
    ]},
    ja: { correct: [
      "フランス語の発音を良くしようとしています。",
      "フランス語の発音を上達させようと頑張っています。"
    ]}
  },
  {
    en: "My favorite season is autumn because of the colorful leaves.",
    fr: { correct: [
      "Ma saison préférée est l’automne à cause des feuilles colorées.",
      "J’aime l’automne pour ses feuilles aux belles couleurs."
    ]},
    es: { correct: [
      "Mi estación favorita es el otoño por las hojas coloridas.",
      "Me gusta el otoño por sus hojas de colores."
    ]},
    tr: { correct: [
      "En sevdiğim mevsim sonbahar, renkli yapraklar yüzünden.",
      "Sonbahar benim favori mevsimim çünkü yapraklar çok renkli."
    ]},
    ja: { correct: [
      "私の好きな季節は秋です。色とりどりの葉っぱがあるからです。",
      "好きな季節は秋で、カラフルな葉っぱがあるのが理由です。"
    ]}
  },
  {
    en: "Please write an email to confirm your reservation.",
    fr: { correct: [
      "Veuillez écrire un email pour confirmer votre réservation.",
      "Merci d’envoyer un email pour confirmer votre réservation."
    ]},
    es: { correct: [
      "Por favor, escribe un correo electrónico para confirmar tu reserva.",
      "Envía un email para confirmar la reserva, por favor."
    ]},
    tr: { correct: [
      "Rezervasyonunuzu onaylamak için lütfen bir e-posta yazın.",
      "Lütfen rezervasyonunuzu onaylamak üzere e-posta gönderin."
    ]},
    ja: { correct: [
      "予約を確認するためにメールを書いてください。",
      "予約確認のメールを送ってください。"
    ]}
  },
  {
    en: "He doesn’t like spicy food, so we went somewhere else.",
    fr: { correct: [
      "Il n’aime pas la nourriture épicée, alors nous sommes allés ailleurs.",
      "Comme il n’aime pas les plats épicés, on est allés ailleurs."
    ]},
    es: { correct: [
      "No le gusta la comida picante, así que fuimos a otro lugar.",
      "Como no le gusta la comida picante, fuimos a otro sitio."
    ]},
    tr: { correct: [
      "O, baharatlı yemekleri sevmediği için başka bir yere gittik.",
      "Baharatlı yemek sevmiyor, bu yüzden başka yere gittik."
    ]},
    ja: { correct: [
      "彼は辛い食べ物が好きではないので、別のところに行きました。",
      "辛い料理が嫌いなので、他の場所へ行きました。"
    ]}
  },
  {
    en: "I will finish the report by the end of the day.",
    fr: { correct: [
      "Je finirai le rapport d’ici la fin de la journée.",
      "Je terminerai le rapport avant la fin de la journée."
    ]},
    es: { correct: [
      "Terminaré el informe para el final del día.",
      "Voy a acabar el reporte antes de que termine el día."
    ]},
    tr: { correct: [
      "Raporu gün sonuna kadar bitireceğim.",
      "Raporu gün bitmeden tamamlayacağım."
    ]},
    ja: { correct: [
      "レポートは今日中に終わらせます。",
      "今日の終わりまでにレポートを完成させます。"
    ]}
  },
  {
    en: "I got stuck in an elevator for 30 minutes yesterday!",
    fr: { correct: [
      "Je suis resté coincé dans un ascenseur pendant 30 minutes hier !",
      "Hier, j’ai été bloqué dans un ascenseur pendant 30 minutes !"
    ]},
    es: { correct: [
      "¡Quedé atrapado en un ascensor durante 30 minutos ayer!",
      "Ayer me quedé atrapado en el ascensor por media hora."
    ]},
    tr: { correct: [
      "Dün 30 dakika asansörde mahsur kaldım!",
      "Asansörde 30 dakika kaldım dün!"
    ]},
    ja: { correct: [
      "昨日、エレベーターに30分閉じ込められました！",
      "昨日、30分間エレベーターに閉じ込められた！"
    ]}
  },
  {
    en: "She always helps others without expecting anything in return.",
    fr: { correct: [
      "Elle aide toujours les autres sans rien attendre en retour.",
      "Elle aide les autres sans jamais rien attendre en échange."
    ]},
    es: { correct: [
      "Ella siempre ayuda a los demás sin esperar nada a cambio.",
      "Siempre ayuda a otros sin esperar algo a cambio."
    ]},
    tr: { correct: [
      "O, karşılık beklemeden her zaman başkalarına yardım eder.",
      "Hep başkalarına yardım eder, karşılık beklemez."
    ]},
    ja: { correct: [
      "彼女はいつも見返りを求めずに人を助けます。",
      "彼女は何も期待せずにいつも人を助けています。"
    ]}
  },
  {
    en: "The new restaurant in town has amazing reviews.",
    fr: { correct: [
      "Le nouveau restaurant en ville a des critiques incroyables.",
      "Le nouveau resto de la ville reçoit d’excellents avis."
    ]},
    es: { correct: [
      "El nuevo restaurante en la ciudad tiene reseñas increíbles.",
      "El nuevo restaurante de la ciudad tiene críticas excelentes."
    ]},
    tr: { correct: [
      "Kasabadaki yeni restoran harika yorumlara sahip.",
      "Yeni açılan restoran çok iyi yorumlar alıyor."
    ]},
    ja: { correct: [
      "街の新しいレストランは素晴らしい口コミがあります。",
      "新しいレストランは評判がいいです。"
    ]}
  },
  {
    en: "I forgot to set my alarm and woke up late today.",
    fr: { correct: [
      "J’ai oublié de régler mon réveil et je me suis réveillé(e) en retard aujourd’hui.",
      "Aujourd’hui, je me suis réveillé(e) tard car j’ai oublié mon alarme."
  ]}
  }

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