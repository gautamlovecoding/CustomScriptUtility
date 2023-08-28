require('dotenv').config();
const express = require('express');
const { connectAndCopyData } = require('./source/database_Dump')
const { UploadUlbs } = require('./source/uploadulbs')

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/database_collection_dump', connectAndCopyData);
app.get('/ulb_upload', UploadUlbs);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
