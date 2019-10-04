const schedule = ['wake up', 'eat', 'film a video', 'watch things on netflix'];
console.log(schedule);

schedule.push('hey a new thing got added');
console.log(schedule);

schedule.pop();
console.log(schedule);

schedule.unshift('sleep');
console.log(schedule);

schedule.shift();
console.log(schedule);

const film = schedule.indexOf('film a video');
console.log(film);
console.log(schedule[film]);
