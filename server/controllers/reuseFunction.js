exports.filterObj = (Obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(Obj).forEach((prop) => {
    if (allowedFields.includes(prop)) newObj[prop] = Obj[prop];
  });
  return newObj;
};
