var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
      return object.assign([{key}, value])
   
}

function destructivelyUpdateObjectWithKeyAndVal(object, key1, value1) {
  object[key] = value;
  return value
}
