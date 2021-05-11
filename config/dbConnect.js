const mongoose = require('mongoose')

// DB Connection
const dbConnect = () => {
    const dbURL =
      "mongodb+srv://dnor_dev:test_1234@cluster0.mnhzc.mongodb.net/zuridata?retryWrites=true&w=majority";

    mongoose.connect(dbURL, {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
        .then(() => {
        console.log("Connected to db")
        })
        .catch((err) => {
        console.log('Error is from: ' + err.message)
    })
}

module.exports = dbConnect;

