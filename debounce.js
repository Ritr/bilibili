// 防抖
const debounce = (func, Await = 100) => {
  let debounce_timer;
  return function (...args) {
    if (debounce_timer) {
      clearTimeout(debounce_timer);
    }
    debounce_timer = setTimeout(() => {
      func.apply(this, args);
    }, Await);
  };
};

function change(a, b, c) {
  console.log(a, b, c)
}
var a = debounce(change)(1, 2, 3);

// 节流
const throttle = (func, Await = 100) => {
  let lastTime = Date.now();
  return function (...args) {
    const nowTime = Date.now();
    if (nowTime - lastTime > Await) {
      func.call(this, ...args);
      lastTime = nowTime;
    }
  };
};
