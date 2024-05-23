const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

userSchema.statics.findUserByCredentials = function(email, password) {
  return this.findOne({ email }) // this — это модель users
    .then(user => {
      if (!user) {
        return Promise.reject(new Error("Неправильные почта или пароль"));
      }
      
      return bcrypt.compare(password, user.password)
        .then(matched => {
          if (!matched) {
            return Promise.reject(new Error("Неправильные почта или пароль"));
          }

          return user; // Теперь user доступен
      });
  });
};

module.exports = mongoose.model("user", userSchema);