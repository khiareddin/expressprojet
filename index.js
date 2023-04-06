const { Router } = require("express");
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.port || 5000;

// const router = express.Router()

// router.get('/home', (req, res) => {
//     res.sendFile(path.join(__dirname+"/home.html"));
// })

// router.get('/Services', (req, res) => {
//     res.sendFile(path.join(__dirname+"/Services.html"));
// })

// router.get('/Contact', (req, res) => {
//     res.sendFile(path.join(__dirname+"/Contact.html"));
// })
// app.use("/", router)

const date = new Date();
const day = date.getDay();
const hour = date.getHours();

if (day==0 || day==6){
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname+"/Timeout.html"));
    })
}
else if (hour>=9 && hour<=17){
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname+"/home.html"));
    })
    app.get('/Services', (req, res) => {
        res.sendFile(path.join(__dirname+"/Services.html"));
    })
    
    app.get('/Contact', (req, res) => {
        res.sendFile(path.join(__dirname+"/Contact.html"));
    })
}

else {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname+"/Timeout.html"));
    })
}




// if (
//     day == 1 ||
//     day == 2 ||
//     day == 3 ||
//     day == 4 ||
//     (day == 5 && hour >= 9 && hour <= 17)
// ) {
//     app.get("/home", (req, res) => {
//         res.sendFile(path.join(__dirname + "/home.html"));
//     });



// } else {
//     app.get("/Timeout", (req, res) => {
//         res.sendFile(path.join(__dirname + "/Timeout.html"));
//     });
// }



// app.get("/Services", (req, res) => {
//     res.sendFile(path.join(__dirname + "/Services.html"));
// });

// app.get("/Contact", (req, res) => {
//     res.sendFile(path.join(__dirname + "/Contact.html"));
// });

app.listen(port, () => {
    console.log(`server run on port ${port}`);
});
