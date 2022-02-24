"use strict";

//---ЗАДАНИЕ-1----

/* С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль,
с помощью console.log) от 0 до 10 включительно, чтобы результат выглядел так:

0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
*/

let result = 0;
for (result = 0; result <= 10; result++) {
  if (result === 0) {
    console.log(`${result} - это ноль`);
  } else if (result % 2 != 0) {
    console.log(`${result} - это нечетное число`);
  } else {
    console.log(`${result} - это четное число`);
  }
}

//----ЗАДАНИЕ-2----

/* Выведите в консоль значения, указанные рядом с комментариями:*/

const post = {
  author: "John", //вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",

      rating: {
        likes: 10,
        dislikes: 2, //вывести это число
      },
    },

    {
      userId: 5, //вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", //вывести этот текст

      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(post.author); // John
console.log(post.comments[0].rating.dislikes); // 2
console.log(post.comments[1].userId); // 5
console.log(post.comments[1].text); // lorem ipsum 2

//---ЗАЖАНИЕ-3-----

/* Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый
товар применить скидку 15%, */

const products = [
  {
    id: 3,
    price: 200,
  },

  {
    id: 4,
    price: 900,
  },

  {
    id: 1,
    price: 1000,
  },
];

products.forEach(function (item) {
  if (item.price !== null) {
    item.price = item.price - (item.price * 15) / 100;
  }
});
console.log(products); // [ { id: 3, price: 170 }, { id: 4, price: 765 }, { id: 1, price: 850 } ]

// ----ЗАДАНИЕ-4------

/* Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии.
2. Отсортируйте товары по цене (от низкой цены к высокой),*/

const product = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },

  {
    id: 5,
    price: 499,
    photos: [],
  },

  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },

  {
    id: 8,
    price: 78,
  },
];

// Отфильтровываем объекты содержащие 'photos'
const arrOfPhotos = product.filter(function (item) {
  return item.hasOwnProperty("photos") && item.photos.length > 0;
});
console.log(arrOfPhotos);

//Сортировка по цене
product.sort((item1, item2) => {
  return item1.price - item2.price;
});
console.log(product);

//---ЗАДАНИЕ-5----
/*Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.*/

for (let i = 0; i <= 9; console.log(i++)) {}

//--ЗАДАНИЕ-6----

/* Нарисовать горку с помощью console.log (используя цикл for),
   у вашей горки должно быть 20 рядов */

let star = "x";
for (let i = 0; i <= 20; i++) {
  console.log(star.repeat(i + 1));
}
