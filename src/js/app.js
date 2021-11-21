function sleep(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function start() {
  console.log('start');
  await sleep(4000);
  console.log('finish');
}

start();
