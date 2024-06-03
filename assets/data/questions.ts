export default [
  {
    id: 1,
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
    id: 2,
    type: "OPEN_ENDED",
    text: "Yo soy un hombre",
    answer: "I am a man",
    image: require("../images/eddy.png"),
  },
  {
    id: 3,
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
    id: 4,
    type: "OPEN_ENDED",
    text: "La mujer",
    answer: "the woman",
    image: require("../images/zari.png"),
  },
  {
    id: 5,
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
    id: 6,
    type: "OPEN_ENDED",
    text: "Me gusta React Native",
    answer: "I like react native",
    image: require("../images/vikram.png"),
  },
  {
    id: 7,
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
