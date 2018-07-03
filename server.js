const express = require("express");
const multer = require("multer");
let app = express();
let upload = multer({dest: 'upload/'});

app.use(express.static("public"));
app.use(upload.any());

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
})

app.use('/file', (req, res) => {
	res.json({"name": req.files[0].originalname, "type": req.files[0].mimetype, "size": req.files[0].size});
})

app.listen(9000, () => {
	console.log("server running at 9000");
})
