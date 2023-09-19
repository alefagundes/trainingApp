const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassord = process.env.DB_PASSWORD;

async function main() {
  await mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassord}@clusterale.7kwdhu0.mongodb.net/?retryWrites=true&w=majority`
  );
  console.log("conectado ao banco NoSQL trainigApp");
}

main().catch((err) => console.log(err));

module.exports = mongoose;
