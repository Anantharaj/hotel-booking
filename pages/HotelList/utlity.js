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

export const throttle = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      func.apply(this, args);
      timer = undefined;
    }, timeout);
  };
};

export const searchByName = (name, hotels) => {
  const reg = new RegExp(name + ".+$", "i");
  return hotels.filter((hotel) => {
    return hotel.name.search(reg) != -1;
  });
};

export const searchByPrice = (price, hotels) => {
  return hotels.filter((hotel) => {
    return Number(hotel.price) >= price;
  });
};

export const getMinMaxPrice = (hotels) => {
  const priceArr = hotels.map((hotel) => hotel.price);

  return [Math.min(...priceArr), Math.max(...priceArr)];
};
