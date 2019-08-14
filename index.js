var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
   Object.assign({}, object, {[key]: value});
   return object
}

function destructivelyUpdateObjectWithKeyAndVal(object, key1, value1) {
  object[key] = value;
  return value
}
