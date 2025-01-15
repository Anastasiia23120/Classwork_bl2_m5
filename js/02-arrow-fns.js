const sum = (numA, numB) => {
  return numA + numB;
};

console.log(sum(10, 20));
// * --------------------------------------------
const greet = firstName => {
  console.log(`Hello ${firstName}!`);
};

greet('Anastasiia');
// * --------------------------------------------
const greet = () => {
  console.log('Welcome user!');
};

greet();
// * --------------------------------------------
const sum = (...args) => {
  let total = 0;
  for (const el of args) {
    total += el;
  }
  return total;
};

console.log(sum(10, 20, 30));
console.log(sum(10, 20, 30, 40, 50));
// * --------------------------------------------
const sum = (numA, numB) => numA + numB;

console.log(sum(10, 20));
// * --------------------------------------------
const createProduct = (partialProduct, callBack) => {
  const product = { id: Date.now(), ...partialProduct };

  callBack(product);
};

const logProduct = product => console.log(product);

const logTotalPrice = product => console.log(product.price * product.quantity);

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
console.log(Date.now());
// * --------------------------------------------
const each = (array, callBack) => {
  const newArray = [];

  for (const el of array) {
    newArray.push(callBack(el));
  }
  return newArray;
};

console.log([64, 49, 36, 25, 16]);

// * повна версія
console.log(
  each([64, 49, 36, 25, 16], arrayEl => {
    return arrayEl * 2;
  })
);
// ! скорочена версія
console.log(each([64, 49, 36, 25, 16], arrayEl => arrayEl * 2));

// * повна версія
console.log(
  each([64, 49, 36, 25, 16], arrayEl => {
    return arrayEl - 10;
  })
);
// ! скорочена версія
console.log(each([64, 49, 36, 25, 16], arrayEl => arrayEl - 10));

// * повна версія
console.log(
  each([64, 49, 36, 25, 16], arrayEl => {
    return Math.sqrt(arrayEl);
  })
);
// ! скорочена версія
console.log(each([64, 49, 36, 25, 16], arrayEl => Math.sqrt(arrayEl)));
