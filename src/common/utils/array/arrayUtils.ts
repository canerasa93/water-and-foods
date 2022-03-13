// Import Utils
import { unixTimeStampToDate } from 'src/common/utils/date/dateUtils';
import { removeAccents } from './../string/stringUtils';

export const isArray = (value) => {
  const result = Array?.isArray(value);

  return result;
};

export function arrayToPaginate(arr, size) {
  return arr?.reduce((acc, val, i) => {
    const idx = Math.floor(i / size);
    const page = acc[idx] || (acc[idx] = []);

    page.push(val);

    return acc;
  }, []);
}

export function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

export function sortAscByKey(array, key) {
  return array.sort(function (a, b) {
    const x = a[key];
    const y = b[key];

    return x < y ? -1 : x > y ? 1 : 0;
  });
}
export function sortDescByKey(array, key) {
  return array.sort(function (a, b) {
    const x = a[key];
    const y = b[key];

    return x > y ? -1 : x < y ? 1 : 0;
  });
}

export function sortDateAscByKey(array, key) {
  return array.sort(function (a, b) {
    const x = unixTimeStampToDate(a[key]);
    const y = unixTimeStampToDate(b[key]);

    return x < y ? -1 : x > y ? 1 : 0;
  });
}

export function sortDateDescByKey(array, key) {
  return array.sort(function (a, b) {
    const x = unixTimeStampToDate(a[key]);
    const y = unixTimeStampToDate(b[key]);

    return x > y ? -1 : x < y ? 1 : 0;
  });
}

export function countByKey(array, key, key2) {
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (removeAccents(array[i]?.[key]) === removeAccents(key2)) {
      counter++;
    }
  }

  return counter;
}

export function countByFind(array, key, key2) {
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i]?.[key]?.includes(key2)) {
      counter++;
    }
  }

  return counter;
}
