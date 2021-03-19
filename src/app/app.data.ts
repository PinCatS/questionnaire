export const QUESTIONS = [
  {
    id: 1,
    question: 'Есть ли у вас резервный фонд?',
    answer: {
      type: 'bool',
      options: null,
    },
  },
  {
    id: 2,
    question:
      'Примерно через сколько лет вы планируете начать жить на пассивный доход?',
    answer: {
      type: 'choice',
      options: [
        'Через4—6лет—52балла',
        'Через7—10лет—69баллов',
        'Через11—16лет—70баллов',
        'Более чем через 16 лет — 71 балл',
      ],
    },
  },
  {
    id: 3,
    question: 'Какими инвестиционными инструментами вы пользуетесь?',
    answer: {
      type: 'options',
      options: ['Акции', 'Облигации', 'ETF', 'Недвижимость'],
    },
  },
];