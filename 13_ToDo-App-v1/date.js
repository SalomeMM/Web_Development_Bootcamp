// module.exports.getDate = getDate; // without parentheses because we don't want to call the function.
// modules are objects, so we dont have to bind the entire object. Export 2 functions separately

exports.getDate = function () {
  // "exports" is node's shortcut for "module.exports"

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
// we make this available with node.js modules

exports.getDay = function () {
  const today = new Date();

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
