const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

const corsConfig = {
  origin:['http://127.0.0.1:5500'],
credentials:true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
};

app.use(cors(corsConfig));
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lbqsrfq.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


async function run() {
  try {
    const database = client.db("Hodlinfo");
    const cryptoCollection = database.collection("Crypto");

    // const result = await axios.get("https://api.wazirx.com/api/v2/tickers");
    // const tickers = Object.values(result.data).slice(0, 10);
    // await cryptoCollection.insertMany(tickers);

    app.get("/crypto", async (req, res) => {
      try {

        const result = await cryptoCollection.find({}).toArray();
        res.json(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
      }
    });
   
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("The server is running.");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
