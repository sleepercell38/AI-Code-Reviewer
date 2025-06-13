import app from "./src/app.js";
import "dotenv/config.js";

app.listen(process.env.PORT ,()=>{
   console.log(`server is running on port ${process.env.PORT}`)
})