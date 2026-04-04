class User {
  #age;
  #tel;

  constructor(name, age, tel) {
    this.name = name;
    this.age = age;
    this.tel = tel;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (Number.isInteger(value) && value >= 1 && value <= 100) {
      this.#age = value;
    } else {
      throw new Error('Age must be integer between 1 and 100');
    }
  }

  get tel() {
    return this.#tel;
  }

  set tel(value) {
    const phoneRegex = /^\+7\d{10}$/;
    if (phoneRegex.test(value)) {
      this.#tel = value;
    } else {
      throw new Error('Invalid phone format. Use +7xxxxxxxxxx');
    }
  }

  hello() {
    const msg = `Hi! My name is ${this.name}. And I am ${this.age} years old.`;
    console.log(msg);
    alert(msg);
  }
}

function UserFunc(name, age) {
  this.name = name;
  this.age = age;
}
UserFunc.prototype.hello = function() {
  const msg = `Hi! My name is ${this.name}. And I am ${this.age} years old.`;
  console.log(msg);
  alert(msg);
};

class Student extends User {
  #knowledge = 0;

  get knowledge() {
    return this.#knowledge;
  }

  learn() {
    this.#knowledge++;
  }

  hello() {
    const msg = `Hi! My name is ${this.name}. I am ${this.age} years old. And I am a student!`;
    console.log(msg);
    alert(msg);
  }
}

Array.prototype.reverse = function() {
  const copy = [...this];
  return copy.concat(copy);
};

const user1 = new User('Alice', 25, '+71234567890');
user1.hello();
console.log('User tel:', user1.tel);
console.log('User age:', user1.age);

const user2 = new UserFunc('Bob', 30);
user2.hello();

const student = new Student('Charlie', 20, '+79876543210');
student.hello();
student.learn();
student.learn();
console.log('Student knowledge:', student.knowledge);

const arr = [1,2,3,4,5];
const reversedArr = arr.reverse();
console.log('Original array:', arr);
console.log('Reversed (duplicated):', reversedArr);
alert('Check console for results');