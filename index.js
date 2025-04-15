require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // load file HTML quét QR
app.get('/', (req,res) => {
    res.sendFile(Path2D.join(__dirname, 'public', 'qr-scanner.html'));
})
app.use('/api/product', productRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Đã kết nối MongoDB");
    app.listen(process.env.PORT, () => {
        console.log(`Server chạy tại http://localhost:${process.env.PORT}`);

    });
}).catch((err) => console.error(' Kết nối MongoDB lỗi: ', err));