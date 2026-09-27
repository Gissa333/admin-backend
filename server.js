const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "الرجاء إدخال البريد الإلكتروني وكلمة المرور" });
    }
    if (email === "admin@test.com" && password === "123456") {
        return res.status(200).json({
            user: { email: email, isPlatformOwner: true }
        });
    }
    return res.status(401).json({ error: "بيانات الدخول غير صحيحة" });
});

app.post('/api/auth/logout', (req, res) => {
    return res.status(200).json({ message: "تم تسجيل الخروج بنجاح" });
});

app.get('/', (req, res) => {
    res.send("Render API Server is Running Successfully!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
