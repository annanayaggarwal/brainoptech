const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/advisorpedia", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `Mongoose Database connected with HOST: ${con.connection.host}`
      );
    });
};

module.exports = connectDatabase;
