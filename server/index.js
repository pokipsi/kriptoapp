require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const coins = require('./routes/api/coins');
app.use('/api/coins', coins);

const alerts = require('./routes/api/alerts');
app.use('/api/alerts', alerts);

const Checker = require('./business/checker');


//production
if(process.env.NODE_ENV == 'production'){
    app.use(express.static(__dirname + '/public'));

    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });
}

const port = process.env.PORT || 5000;

const server = require('http').createServer(app);
const io = require('socket.io')(server);
let x = null;
io.on('connection', () => {
    if(x === null) {
        
        x = setInterval(async () => {
            //check every 10s
            let data = await Checker.check();
            //data holds "all" alerts (active and inactive), and alerts for "display"
            //if "display" has something in it, send data to user using websocket
            if (data.display.length > 0){
                io.emit("alerts", {
                    data: data
                });
            }
        }, 10000);
    }
    console.log("User connected");
});

server.listen(port, () => console.log(`Server started on port ${port}`));



