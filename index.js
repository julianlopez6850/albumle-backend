const express = require('express');
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cors({
	credentials: true,
	origin: "http://localhost:3000"
}));
app.use(cookieParser());


const db = require('./models');

//Routers
const albumInfoRouter = require("./routes/AlbumInfo");
app.use("/albuminfo", albumInfoRouter);
const gamedPlayedRouter = require("./routes/GamesPlayed");
app.use("/gamesplayed", gamedPlayedRouter);
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
	app.listen(5000, () => {
		console.log("Server running on port 5000");
	})
})

