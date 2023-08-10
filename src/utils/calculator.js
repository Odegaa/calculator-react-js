export const operations = [
  {
    id: 1,
    op: "/",
  },
  {
    id: 2,
    op: "*",
  },
  {
    id: 3,
    op: "+",
  },
  {
    id: 4,
    op: "-",
  },
  {
    id: 5,
    op: "%",
  },
  
];

export function getNumbers() {
  const numbers = [];
  for (let i = 1; i < 10; i++) {
    numbers.push(i);
  }
  return numbers;
}
