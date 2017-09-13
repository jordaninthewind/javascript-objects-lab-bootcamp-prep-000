var recipes = {
  ingredient: "turnips"
};

function updateObjectWithKeyAndValue(object, key, value) {
    object = (object[key] = value);
    return object;
}
