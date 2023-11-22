const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

// Database
const database = require("./config/database");
database();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route
const studentRoute = require("./routes/studentRoute");
app.use("/mahasiswa", studentRoute);
const dosenRoute = require("./routes/dosenRoute");
app.use("/dosen", dosenRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

// ADD DATA STUDENT : DONE
// GET DATA STUDENT : DONE
// VALIDATION DATA STUDENT : DONE
// ADD DATA DOSEN : DONE
// GET DATA DOSEN : DONE
// VALIDATION DATA DOSEN : BELUM DONE
// YT : 44:16 - NGODING MASTERY MERN STACK
