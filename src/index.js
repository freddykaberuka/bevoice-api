import express from 'express'
import userRoute from './routers/user'
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.listen(port, console.log(`server started at:...${port}`));
app.use('/user',userRoute)

export default app;