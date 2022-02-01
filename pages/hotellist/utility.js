/**
 *
 * To sort based on hotel name and price
 *
 * @function sortHotels
 * @param {object} hotels - From Date from Hotel search.
 * @param {string} property - Any Property from Hotellist object i.e. name or price.
 * @return {object}  hotelList
 */

export const sortHotels = (hotels, property) => {
  return hotels.sort((a, b) => {
    return ("" + a[property]).localeCompare(b[property]);
  });
};

/**
 *
 * To Avoid number of continuous call,
 * The function forces a function to wait a certain amount of time before running again.
 *
 * @function debounce
 * @param {requestCallback} func - A Call back function.
 * @param {number} timeout - Milliseconds.
 * @return {func}  with timeout
 */

export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

/**
 *
 * A function calls after every millisecond or a particular interval of time only the first click is executed immediately.
 *
 * @function throttle
 * @param {requestCallback} func - A Call back function.
 * @param {number} timeout - Milliseconds.
 * @return {func}  hotelList
 */

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

/**
 *
 * Filter based on hotel name
 *
 * @function searchByName
 * @param {Sting} name - Entered name from Input
 * @param {Object} hotels - List of Hotels.
 * @return {object}  hotelList
 */

export const searchByName = (name, hotels) => {
  const reg = new RegExp(name + ".+$", "i");
  return hotels.filter((hotel) => {
    return hotel.name.search(reg) != -1;
  });
};

/**
 *
 * Filter based on Price
 *
 * @function searchByPrice
 * @param {number} price - Price from slider
 * @param {Object} hotels - List of Hotels.
 * @return {object}  hotelList
 */

export const searchByPrice = (price, hotels) => {
  return hotels.filter((hotel) => {
    return Number(hotel.price) >= price;
  });
};

/**
 *
 * Get Minimum Price and Maximum Price from the given Hotel list
 *
 * @function getMinMaxPrice
 * @param {Date} fromDate - From Date from Hotel search.
 * @param {Object} hotels - List of Hotels.
 * @return {Array}  [Minmum, Maximum]
 */

export const getMinMaxPrice = (hotels) => {
  if (!hotels) return [0, 0];
  const priceArr = hotels.map((hotel) => hotel.price);

  return [Math.min(...priceArr), Math.max(...priceArr)];
};
