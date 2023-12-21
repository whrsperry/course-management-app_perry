import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "courseapp123",
  database: "test"
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// If there is an auth problem:
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '*putyourpasswordhere*';

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.get("/course", (req, res) => {
  const q = "SELECT * FROM test.course"
  db.query(q, (err, data) => {
    if (err) {
      return res.json("Error connecting to database", err)
    } else {
      return res.json(data)
    }
  })
});

app.post("/course", (req, res) => {
  const q = "INSERT INTO course (`title`, `description`, `image`, `creator`, `lessons`, `duration`, `level`, `price`, `language`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.description,
    req.body.image,
    req.body.creator,
    req.body.lessons,
    req.body.duration,
    req.body.level,
    req.body.price,
    req.body.language,
  ];

  db.query(q, [values], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    } else {
      // Retrieve the added course by querying the database again
      const selectQuery = "SELECT * FROM course WHERE id = ?";

      db.query(selectQuery, [result.insertId], (selectErr, selectData) => {
        if (selectErr) {
          return res.status(500).json(selectErr);
        } else {
          const addedCourse = selectData[0];
          return res.status(200).json({ message: "Course has been created successfully", addedCourse });
        }
      });
    }
  });
});

app.delete("/course/:id", (req, res) => {
  const courseId = req.params.id;
  const q = "DELETE FROM course WHERE id = ?";

  db.query(q, [courseId], (err, data) => {
    if (err) {
      return res.status(500).send("Error deleting course", err);
    } else {
      return res.status(200).json({ message: "Course deleted successfully", data });
    }
  })
});

app.put("/course/:id", (req, res) => {
  const courseId = req.params.id;
  const q = "UPDATE course SET `title` = ?, `description` = ?, `image` = ?, `creator` = ?, `lessons` = ?, `duration` = ?, `level` = ?, `price` = ?, `language` = ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.description,
    req.body.image,
    req.body.creator,
    req.body.lessons,
    req.body.duration,
    req.body.level,
    req.body.price,
    req.body.language,
  ];

  db.query(q, [...values, courseId], (err, data) => {
    if (err) {
      return res.status(500).send("Error updating course", err);
    } else {
      return res.status(200).json({ message: "Course has been updated successfully", data });
    }
  })
});

app.listen(8800, () => {
  console.log("Connected to backend");
});