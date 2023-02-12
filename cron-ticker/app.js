const cron = require('node-cron');

let times = 0;

cron.schedule('1-59/5 * * * * *', () => {
  times += 1;
  console.log('Tick cada 5 seconds', times);
});

console.log('Inicio de la app');
