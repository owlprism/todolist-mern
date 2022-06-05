import express from 'express';
import ListsRoutes from './routes/todolist.route.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()

app.use(cors());

const HOSTNAME = '127.0.0.1';
const PORT = 5000;

mongoose.connect('mongodb+srv://Owlprism:xukYwXnyF4n5RO1o@cluster0.gspd1.mongodb.net/todolist',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);

//Connection à la BDD
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//Utilisation de BodyParser
app.use(bodyParser.json());

app.use('/lists', ListsRoutes);

app.listen(PORT, () =>
  console.log(`Server is running on: http://${HOSTNAME}:${PORT}.`)
)