export const sortHotels = (hotels, attribute) => {
  return hotels.sort((a, b) => {
    return ("" + a[attribute]).localeCompare(b[attribute]);
  });
};

export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

function saveInput() {
  console.log("Saving data");
}

const processChanges = debounce(() => saveInput());
