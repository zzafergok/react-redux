import express from "express";
import mongodb from "mongodb";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
dotenv.config();

const dbUrl =
  "mongodb://admin:12345@zzafergok-shard-00-00.bagoz.mongodb.net:27017,zzafergok-shard-00-01.bagoz.mongodb.net:27017,zzafergok-shard-00-02.bagoz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ek45k6-shard-0&authSource=admin&retryWrites=true&w=majority";

const validate = (data) => {
  let errors = {};
  if (data.title === "") errors.title = "Can't be empty";
  if (data.cover === "") errors.cover = "Can't be empty";
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
};

mongodb.MongoClient.connect(dbUrl, (err, db) => {
  if (err) {
    throw new Error(err);
  }

  app.get("/api/movies", (req, res) => {
    setTimeout(() => {
      db.collection("movies")
        .find({})
        .toArray((err, movies) => {
          res.json({ movies });
        });
    }, 2000);
  });

  app.post("/api/movies", (req, res) => {
    const { errors, isValid } = validate(req.body);
    if (isValid) {
      const { title, cover } = req.body;
      db.collection("movies").insert({ title, cover }, (err, result) => {
        if (err) {
          res.status(500).json({
            errors: { global: "Something went wrong" + "" + `${err}` },
          });
        } else {
          res.json({ movie: result.ops[0] });
        }
      });
    } else {
      res.status(400).json({ errors });
    }
  });

  app.put("/api/movies/:_id", (req, res) => {
    const { errors, isValid } = validate(req.body);

    if (isValid) {
      const { title, cover } = req.body;
      db.collection("movies").findOneAndUpdate(
        { _id: new mongodb.ObjectId(req.params._id) },
        { $set: { title, cover } },
        { returnOriginal: false },
        (err, result) => {
          if (err) {
            res.status(500).json({ errors: { global: err } });
            return;
          }

          res.json({ movie: result.value });
        }
      );
    } else {
      res.status(400).json({ errors });
    }
  });

  app.get("/api/movies/:_id", (req, res) => {
    db.collection("movies").findOne(
      { _id: new mongodb.ObjectId(req.params._id) },
      (err, movie) => {
        res.json({ movie });
      }
    );
  });

  app.delete("/api/movies/:_id", (req, res) => {
    db.collection("movies").deleteOne(
      { _id: new mongodb.ObjectId(req.params._id) },
      (err, r) => {
        if (err) {
          res.status(500).json({ errors: { global: err } });
          return;
        }

        res.json({});
      }
    );
  });

  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global:
          "Still working on it. Please try again later when we implement it.",
      },
    });
  });

  app.listen(8080, () => console.log("Server is running on localhost:8080"));
});
