const isValueUnique = (array, value, key) =>
  !array.some((obj) => obj[key] === value);

// Get the unique objects of this array based on a key
// Just remove the duplicate ones
const getUniqueObjects = (array, key = 'id') =>
  array.reduce(
    (acc, obj) => (isValueUnique(acc, obj[key], key) ? acc.concat([obj]) : acc),
    [],
  );

export default getUniqueObjects;
