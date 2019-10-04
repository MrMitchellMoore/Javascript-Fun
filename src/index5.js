const user = {
  name: 'mitchell',
  age: 32,
  married: false,
  purchases: ['phone', 'laptop', 'car'],

  sayName: function() {
    console.log(this.name);
  }
};

user.sayName();
