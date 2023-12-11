const express = require('express');
const app = express();
const { DbConnect } = require('./config/database');
const cors = require('cors');
const route = require('./routes/UserRoute');

app.use(express.json()); 
app.use(cors());
app.use('/', route);
DbConnect();

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server Started At Port No ${PORT}`);
});
