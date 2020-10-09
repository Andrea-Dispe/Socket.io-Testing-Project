const express = require('express');
const app = express();
const socket = require('socket.io');
// const router = require('./routers');
// const cors = require('cors');
const PORT = process.env.PORT || 3001;






const server = app.listen(PORT, () => {
console.log(`listening on http://localhost:${PORT}`); // eslint-disable-line no-console
});






// app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// socket.io setup
//
const io = socket(server)









// app.use(router);


