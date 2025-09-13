const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender) // залишаємо тільки потрібну стать
    .map(user => user.balance) // беремо лише баланс
    .reduce((total, balance) => total + balance, 0); // сумуємо

console.log('task-4 result:');
// Код для перевірки
const clients = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];
