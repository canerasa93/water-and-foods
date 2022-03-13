// Import Utils
import { unixTimeStampToDate } from 'src/common/utils/date/dateUtils';

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
