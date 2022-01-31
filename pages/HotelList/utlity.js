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

export const searchByName = (name, hotels) => {
  const reg = new RegExp(name + ".+$", "i");
  debugger;
  return hotels.filter((hotel) => {
    return hotel.name.search(reg) != -1;
  });
};
