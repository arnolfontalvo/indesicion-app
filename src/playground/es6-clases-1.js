class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getDescription(){
      return `${this.name} is ${this.age} year(s) old.`;
    }

    getGreeting(){
      return `Hi. I am ${this.name}.`;
    }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor(){
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    return this.hasMajor ? description += ` Their major is ${this.major}.` : description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation(){
    return !!this.homeLocation;
  }

  getGreeting(){
    let greeting = super.getGreeting();
    return this.hasHomeLocation() ? greeting += ` I'm visiting from ${this.homeLocation}` : greeting;
  }
}

const anonymous = new Traveler();
console.log(anonymous.getGreeting());

const me = new Traveler('Arnol Fontalvo', 37, 'Barranquilla');
console.log(me.getGreeting());