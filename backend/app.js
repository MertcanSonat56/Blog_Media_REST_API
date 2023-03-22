import express from 'express';
import mongoose from 'mongoose';
import router from './routers/user-routes';
import blogRouter from './routers/blog-routes';

const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog", blogRouter);

mongoose.connect('<Mongo Connection>'
).then(() => app.listen(5000)
).then(() => console.log("Connected to Database and Listening to Localhost 5000")
).catch((err) => console.log(err));

























