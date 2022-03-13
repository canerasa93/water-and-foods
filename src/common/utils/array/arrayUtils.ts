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