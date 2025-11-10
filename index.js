const express = require("express");
const app = express();
const PORT = 5000;


app.use(express.json())


//User Creation

app.use("/api/v1/auth", require("./routes/user"));









//Server Connection And Db connection

app.listen(PORT, () => {
    try {
        console.log(`Server Running on PORT: ${PORT} `)
    } catch (error) {
        console.error("error Running the Server", error);

    }
})