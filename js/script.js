// Створіть функцію, в яку передається число. Функція повинна повертати квадрат цього числа.

console.log(Square(2));

// Створіть функцію, в яку передається 3 числа (x, y, z), функція обчислює і повертає об'єм вказаної коробки.

console.log(Amount(4,7,8));

// Створіть функцію, в яку передається деяке значення і об'єкт html-сторінки, знайдений за допомогою, наприклад, функції document.querySelector.
// Функція повинна записати в innerText цього об'єкта значення з першого аргумента і повернути true, або false, якщо об'єкт не знайдено.

console.log(fun("Привіт!", document.querySelector("#d")));

// Створіть функцію, що приймає 5 аргументів (a, b, c, d, e). Функція повина повернути результат обчислення по формулі:
// a + b * -c - --d + e
// Якщо аргументи не задано, то прописати їм значення по-замовчуванню:
// a = 50;
// b = 1;
// c = 10;
// d = 17;
// e = ' !!!';

console.log(getValue(5,3));


function Square(x){
  return x*x;
}
function Amount(x,y,z){
  return x*y*z;
}
function fun(str, obj){
  if(obj===null||obj===undefined){
    return false;
  }
  else{
    obj.innerText = str;
    return true;
  }
}
function getValue(a, b, c, d, e){
  if (a === undefined) { a = 50; }
  if (b === undefined) { b = 1; }
  if (c === undefined) { c = 10; }
  if (d === undefined) { d = 17; }
  if (e === undefined) { e = ' !!!'; }
 
  return (a + b * -c - --d + e);
}
