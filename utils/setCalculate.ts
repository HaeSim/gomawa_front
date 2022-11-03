export const getUniqueCnt = (array: any) => {
  const setOfTo = new Set();
  for (let i = 0; i < array.length; i++) {
    setOfTo.add(array[i].to);
  }
  return setOfTo.size;
};
