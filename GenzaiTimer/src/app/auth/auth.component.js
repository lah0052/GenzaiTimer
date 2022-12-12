function lookupUser(userId) {
    return $firebaseObject(getRoot().child("users").child(userId))
      .$loaded();
  }