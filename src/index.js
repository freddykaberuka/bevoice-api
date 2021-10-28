import express from 'express'
import userRoute from './routers/user'
import Blogs from './routers/blog'
import contactRoute from './routers/contact'
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use('/user',userRoute)
app.use('/article',Blogs)
app.use('/contact',contactRoute)

export default app;