function zipCodeValidator(zipToValidate) {
  if (zipToValidate.length > 5) {
    return false;
  } else {
    zipToValidate = Number(zipToValidate);
    if (isNaN(zipToValidate)) {
      return false;
    } else {
      return true;
    }
  }
}
