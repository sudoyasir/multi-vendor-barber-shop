const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://yasir2002:yasir2002@cluster0.vgcb7fd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "barber-shop-mern",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
