const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientRouter=require("./controllers/patientRouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://jeffjoev:jeffinjosev@cluster0.3tagu6i.mongodb.net/patientDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/patient",patientRouter)
app.listen(3004,()=>{
    console.log("Server Running on 3004")
})