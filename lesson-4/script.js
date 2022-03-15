"use strict";

// ЗАДАНИЕ-1
/*
Написать функцию, преобразующую число в объект. Передавая на
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа.
*/

function getNumbers(num) {
  if (!Number.isInteger(num) || num < 0 || num > 999) {
    console.log("Введите целое число в диапазоне от 0 да 999");
    return {};
  } else {
    return {
      units: num % 10,
      tens: Math.floor(num / 100),
      hundreds: Math.floor(num / 100) % 10,
    };
  }
}

console.log(getNumbers(256));

// ЗАДАНИЕ 1.1

/*Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
и price, сохраните их как свойства объекта.
*/

//es5

function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
  this.price = this.price - (this.price * 25) / 100;
};

const product1 = new Product("Book", 650);
product1.make25PercentDiscount();
console.log(product1);

// es6

class ProductEs6 {
  constructor(name2, price2) {
    this.name2 = name2;
    this.price2 = price2;
  }

  make25PercentDiscount() {
    this.price2 = this.price2 - (this.price2 * 25) / 100;
  }
}
const product2 = new ProductEs6("Coffee", 450);
product2.make25PercentDiscount();
console.log(product2);

// ЗАДАНИЕ 1.2

//es5

function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

Post.prototype.edit = function (text) {
  this.text = text;
};

function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);
  this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighLighted = function () {
  this.highlighted = true;
};

const element = new AttachedPost("Ivan", "Some text", "27 of May 2022");
element.makeTextHighLighted();
element.edit("Another text");
console.log(element);

//es6

class PostEs6 {
  constructor(author1, text1, date1) {
    this.author1 = author1;
    this.text1 = text1;
    this.date1 = date1;
  }
  edit(text) {
    this.text1 = text;
  }
}

class AttachedEs6 extends Post {
  constructor(author, text, date) {
    super(author, text, date);
    this.highlighted = false;
  }
  makeTextHighLighted() {
    this.highlighted = true;
  }
}
const element2 = new AttachedPost("Petr", "Some text", "27 of Mart 2022");
element2.makeTextHighLighted();
element2.edit("Another text");
console.log(element2);
