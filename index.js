
exports.values = function (iterator) {
  var results = [];

  var ret = iterator.next();
  while (!ret.done) {
    results.push(ret.value);
    ret = iterator.next();
  }

  return results;
};
