function isSantaComing(dateObject) {
  if(dateObject.getDate() === 24 && dateObject.getMonth() === 11) {
    return true;
  } else {
    return false;
  }
}
