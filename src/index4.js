const names = ['Ed', 'John', 'Sally', 'Harry', 'Potter', 'Maria', 'Burrito'];

for (name of names) {
  console.log(`Hello there ${name}`);
}

for (name of names) {
  if (name === 'Harry') {
    console.log('Harry is on the list');
    break;
  }
}

let loading = 0;

while (loading < 10) {
  console.log('website is still loading');
  loading += 2;
  if (loading === 10) {
    console.log('Website is done loading');
  }
}
