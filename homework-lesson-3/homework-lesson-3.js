const purchases = [
  { date: "Apr", category: "clothing", amount: 10 },
  { date: "Feb", category: "clothing", amount: 50 },
  { date: "Feb", category: "Food", amount: 50 },
  { date: "Apr", category: "clothing", amount: 50 },
  { date: "Feb", category: "Entertainment", amount: 100 },
  { date: "mar", category: "Food", amount: 200 },
  { date: "Jul", category: "clothing", amount: 150 },
  { date: "Jun", category: "Entertainment", amount: 200 },
  { date: "mar", category: "clothing", amount: 450 },
  { date: "Apr", category: "Entertainment", amount: 100 },
  { date: "mar", category: "Food", amount: 350 },
  { date: "Jul", category: "clothing", amount: 100 },
  { date: "Jun", category: "clothing", amount: 200 },
  { date: "Apr", category: "Entertainment", amount: 100 },
  { date: "Jul", category: "Food", amount: 25 },
  { date: "Jun", category: "clothing", amount: 75 },
];

const makePurchaseStat = (purchases) => {
  return purchases.reduce((acc, current) => {
    result.total += current.amount;

    if (!result.categories[current.category]) {
      result.categories[current.category] = 0;
    }
    result.categories[current.category] += current.amount;

    if (!result.months[current.date]) {
      result.months[current.date] = 0;
    }
    result.months[current.date] += current.amount;

    return result;
  }, 0);
};

const result = {
  total: 0,
  categories: {},
  months: {},
};
console.log(makePurchaseStat(purchases));
