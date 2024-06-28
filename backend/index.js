const express = require("express");
const mainRouter = require("./routes/index")
const cors = require("cors");
const router = require("./routes/user");
const dotenv = require("dotenv")
const {connectDB} = require("./db")

dotenv.config({
    path: './.env'
})

const app = express();



app.use(cors())
app.use(express.json())

app.use("/api/v1",mainRouter)




connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


module.exports = router