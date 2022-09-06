export const dayOfWeekAsString = (dayIndex) => {
  /**
   * Converts a day number to a string.
   *
   * @param {Number} dayIndex
   * @return {String} Returns day as string
   */
  return (
    [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][dayIndex] || ""
  );
};

export const fourUniqueDays = (list) => {
  let fourUniqueDaysArray = [];
  for (let i = 0; i <= list.length - 1; i++) {
    if (fourUniqueDaysArray.length === 4) {
      break;
    }
    const date = new Date(list[i].dt_txt).getDate();
    if (!fourUniqueDaysArray.includes(date)) {
      fourUniqueDays.push(date);
    }
  }
  return fourUniqueDaysArray;
};

export const getTodaysData = (list) => {
  /**
   * Returns todays data
   *
   * @param {Array} list
   * @return {Object} Returns today's data as an object
   */
  return list[0];
};

export const isNewForecast = (el, today, threeDaysArray) => {
  /**
   * Returns true when the element's day is not today, is not in the threeDaysArray and its
   * hour is 12 o'clock
   *
   * @param {Object, Number, Array} el today threeDaysArray
   * @return {Object} Returns today's data as an object
   */
  return (
    new Date(el.dt_txt).getDate() != today &&
    !threeDaysArray.includes(el) &&
    new Date(el.dt_txt).getHours() == 12
  );
};

export const getForecast = (list) => {
  /**
   * Returns the forecast for the next three days
   *
   * @param {Array} list
   * @return {Array} Returns an array of objects with the forecast
   */
  const today = new Date(list[0].dt_txt).getDate();
  let threeDaysArray = [];
  for (let i = 1; i <= list.length - 1; i++) {
    if (threeDaysArray.length === 3) {
      break;
    }
    const el = list[i];
    if (isNewForecast(el, today, threeDaysArray)) {
      threeDaysArray.push(el);
    }
  }
  return threeDaysArray;
};
