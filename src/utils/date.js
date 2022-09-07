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

export const getDateAsAString = (dt_txt) => {
  /**
   * Converts a db date string to a UK/EU date string format.
   *
   * @param {String} dt_txt
   * @return {String} Returns date as string
   */
  const date = new Date(dt_txt).getDate();
  const month = new Date(dt_txt).getMonth();
  const year = new Date(dt_txt).getFullYear();
  return `${date} ${toMonthName(month)} ${year}`;
};

export const kelvinToCelsius = (kelvinTemp) => {
  /**
   * Converts a kelvin temp to celsius temp
   *
   * @param {Number} kelvinTemp
   * @return {Number} Returns celsius temp as Number
   */
  return (kelvinTemp - 272.15).toFixed(0);
};

export const toMonthName = (monthNumber) => {
  /**
   * Converts a day number to a string.
   *
   * @param {Number} monthNumber
   * @return {String} Returns month as string
   */
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "long",
  });
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
