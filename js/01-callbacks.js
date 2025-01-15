const fn1 = function (callBack) {
  console.log('Execution fn1');

  callBack();
};

const fn2 = function () {
  console.log('Execution fn2');
};

fn1(function () {
  console.log('Execution fn2');
});
//*------------------------------------------------------
const each = function (array, callBack) {
  const newArray = [];

  for (const el of array) {
    newArray.push(callBack(el));
  }
  return newArray;
};

console.log([64, 49, 36, 25, 16]);

console.log(
  each([64, 49, 36, 25, 16], function (arrayEl) {
    return arrayEl * 2;
  })
);

console.log(
  each([64, 49, 36, 25, 16], function (arrayEl) {
    return arrayEl - 10;
  })
);

console.log(
  each([64, 49, 36, 25, 16], function (arrayEl) {
    return Math.sqrt(arrayEl); // sqrt = шукає корінь квадратний
  })
);
