class HelperFunction {
  static generateRandomEmailId() {
    let randomEmail =
      "user_email_" + Math.round(Math.random() * 100000) + "@randomemail.com";
    return randomEmail;
  }

  static generateStrongPassword() {
    let password = "password_" + Math.random().toString(36).slice(-8);
    return password;
  }

  static generateName() {
    var name1 = ["abandoned", "able", "absolute", "adorable", "accurate"];
    var name =
      name1[HelperFunction.getRandomInt(0, name1.length + 1)] +
      Math.floor(Math.random() * 100000);
    return name;
  }

  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

export default HelperFunction;
