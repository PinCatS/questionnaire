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
        'Через 4-6 лет',
        'Через 7-10 лет',
        'Через 11-16 лет',
        'Более чем через 16 лет',
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