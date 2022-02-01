/**
 *
 * Display all hotels whose availability dates lies between the search dates.
 *
 * @function filterByDate
 * @param {Date} fromDate - From Date from Hotel search.
 * @param {Date} toDate - To Date from Hotel search.
 * @param {object} hotelList - List of all Hotel list.
 * @return  {object}  hotelList
 */

export const filterByDate = (fromDate, toDate, hotelList) => {
  if (!(fromDate || toDate)) return [];
  return hotelList.filter((obj) => {
    const availableDate = new Date(obj.available_on);

    return availableDate > fromDate && availableDate < toDate;
  });
};

/**
 *
 * Display the total number of nights based on selected date range.
 * (For example if user search from Aug 12, 2020 to Aug 17, 2020 than Total Number of Nights will be 5.)
 *
 * @function getNumberOfNights
 * @param {Date} fromDate - From Date from Hotel search.
 * @param {Date} toDate - To Date from Hotel search.
 * @return  {number}  Number of nights from given date range
 */

export const getNumberOfNights = (fromDate, toDate) => {
  const from = new Date(fromDate);
  const to = new Date(toDate);
  const timeDiff = Math.abs(to.getTime() - from.getTime());
  const numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return numberOfNights;
};
