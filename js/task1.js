const delay = ms => {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ms) {
        resolve(ms);
      }
      reject('introduce a delay')
    }, ms);   
  });
}
 const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger).catch(value => console.error(value)); // Resolved after 2000ms
delay(1000).then(logger).catch(value => console.error(value)); // Resolved after 1000ms
delay(1500).then(logger).catch(value => console.error(value)); // Resolved after 1500ms