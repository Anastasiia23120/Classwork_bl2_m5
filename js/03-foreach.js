const numbers = [5, 10, 15, 20, 25];

console.log(numbers);

for (const num of numbers) {
  console.log(num);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach((el, ind, arr) => {
  console.log('el:', el, 'ind:', ind, 'arr:', arr);
});
//*------------------------------------------------------
const logItems = items => {
  console.log(items);

  // for (let i = 0; i < items.length; i++) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }

  items.forEach((el, idx) => {
    console.log(`${idx + 1} - ${el}`);
  });
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
//*------------------------------------------------------
const printContactsInfo = (names, phones) => {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  // for (let i = 0; i < nameList.length; i++) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }

  nameList.forEach((el, idx) => {
    console.log(`${el}: ${phoneList[idx]}`);
  });
};

printContactsInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');
//*------------------------------------------------------
const calculateAverage = (...args) => {
  let total = 0;

  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }

  //  args.forEach(el => {
  //    total += el;
  //  });

  args.forEach(el => (total += el));

  return total / args.length;
};

console.log(calculateAverage(1, 2, 3, 4)); // 2.5
console.log(calculateAverage(14, 8, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
