export const filterByDate = (fromDate, toDate, hotelList) => {
  return hotelList.filter((obj) => {
    const availableDate = new Date(obj.available_on);

    return availableDate > fromDate && availableDate < toDate;
  });
};

export const getNumberOfNights = (fromDate, toDate) => {
  const from = new Date(fromDate);
  const to = new Date(toDate);
  const timeDiff = Math.abs(to.getTime() - from.getTime());
  const numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return numberOfNights;
};
