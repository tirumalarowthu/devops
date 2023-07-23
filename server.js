const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
const path= require("path")
app.use(express.json())
app.get("/",async(req,res)=>{
    res.send("Continuous integration and continuous deployment using aws ec2,Hello how are you")
})
const _dirname = path.dirname("")
const builPath = path.join(_dirname, "./client/build");
// app.use(express.static(builPath))
app.use(express.static(path.join(builPath)));
app.get("/client", function (req, res) {
    res.sendFile('index.html',
        { root: path.join(_dirname, "../client/build") },
        function (err) {
            if (err) {
                res.status(500).send(err)
            }
        }
    );
})
app.listen(4321,()=>{
    console.log('server running at port 4321')
})