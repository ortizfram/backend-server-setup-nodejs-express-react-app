const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const router = require("./routes/router")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })); // Fix typo here

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

// routes
app.use('/', router)

const port = 4000

app.listen(port, ()=> {
    console.log(`server runing on port ${port}`)
})
