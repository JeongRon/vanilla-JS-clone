const quotes = [
  {
    quote: "상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.",

    autor: "John Wooden",
  },
  {
    quote:
      "비참해져라. 혹은 스스로에게 동기를 부여하라. 뭘 해야 하든, 그건 언제나 당신의 선택이다.",
    autor: "Wayne Dyer",
  },
  {
    quote: "성공한 사람이 되려고 노력하기보다 가치있는 사람이 되려고 노력하라.",
    autor: "Alvert Einstein",
  },
  {
    quote:
      "나는 실패한 게 아니다. 나는 잘 되지 않는 방법 1만 가지를 발견한 것이다.",
    autor: "Thomas Edison",
  },
  {
    quote:
      "남들이 당신에게 던진 벽돌들로 탄탄한 기반을 쌓을 수 있어야 성공한다.",
    autor: "David Brinkley",
  },
  {
    quote: "언성을 높이지 말고 논거를 강화하라.",
    autor: "Unknown",
  },
  {
    quote: "괴로운 시련처럼 보이는 것이 뜻밖의 좋은 일일 때가 많다.",
    autor: "Oscar Wilde",
  },
  {
    quote: "위대한 것으로 향하기 위해 좋은 것을 포기하는 걸 두려워하지 마라.",
    autor: "John Rockefeller",
  },
  {
    quote: "간단하게 설명할 수 없으면 제대로 이해하지 못하는 것이다.",
    autor: "Alvert Einstein",
  },
  {
    quote: "당신의 문제가 문제가 아니라 당신의 반응이 문제다.",
    autor: "Unknown",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.autor;
