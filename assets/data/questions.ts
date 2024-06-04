export default [
  {
    id: 1,
    type: "TRANSLATE_SENTENCE",
    image: require("../images/bea.png"),
    text: "La nina",
    options: ["girl", "a", "man", "boy", "The", "water"],
    answer: ["The", "girl"],
  },
  {
    id: 2,
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the glass"?',
    options: [
      {
        id: 1,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
        correct: false,
      },
      {
        id: 2,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
        correct: true,
      },
      {
        id: 3,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
        correct: false,
      },
      {
        id: 4,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    type: "OPEN_ENDED",
    image: require("../images/eddy.png"),
    text: "Yo soy un hombre",
    answer: "I am a man",
  },
  {
    id: 4,
    type: "TRANSLATE_SENTENCE",
    image: require("../images/junior.png"),
    text: "Yo soy un nino",
    options: ["I", "the", "milk", "woman", "a", "am", "he", "boy"],
    answer: ["I", "am", "a", "boy"],
  },
  {
    id: 5,
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the coffee"?',
    options: [
      {
        id: 1,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
        correct: true,
      },
      {
        id: 2,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
        correct: false,
      },
      {
        id: 3,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
        correct: false,
      },
      {
        id: 4,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    type: "OPEN_ENDED",
    image: require("../images/zari.png"),
    text: "La mujer",
    answer: "the woman",
  },
  {
    id: 7,
    type: "TRANSLATE_SENTENCE",
    image: require("../images/falstaff.png"),
    text: "Quiero dormir mucho hoy",
    options: [
      "soccer",
      "today",
      "lot",
      "to",
      "want",
      "sleep",
      "I",
      "a",
      "light",
      "There",
      "keys",
    ],
    answer: ["I", "want", "to", "sleep", "a", "lot", "today"],
  },
  {
    id: 8,
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the cup"?',
    options: [
      {
        id: 1,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
        correct: false,
      },
      {
        id: 2,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
        correct: false,
      },
      {
        id: 3,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
        correct: false,
      },
      {
        id: 4,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
        correct: true,
      },
    ],
  },
  {
    id: 9,
    type: "OPEN_ENDED",
    image: require("../images/vikram.png"),
    text: "Me gusta React Native",
    answer: "I like react native",
  },
  {
    id: 10,
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the milk"?',
    options: [
      {
        id: 1,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
        correct: false,
      },
      {
        id: 2,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
        correct: true,
      },
      {
        id: 3,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
        correct: false,
      },
      {
        id: 4,
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
        correct: false,
      },
    ],
  },
];
