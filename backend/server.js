const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

// Dummy database of users (email, password, and userRole)
const users = [
    { email: "customer@email.com", passwordHash: "$2b$10$CiTpPSzv81r/Le5x2iZSjuV5NOSn/oCgz/bwWls.5lfiZ1onPVft6", userRole: "customer" }, // Hashed version of "customer_password"
    { email: "employee@email.com", passwordHash: "$2b$10$Y9heQ2UccyHPB0stMRfQb.j86KJ1zUgvtEkDQfq5Crdt.1gzQWjx6", userRole: "employee" }, // Hashed version of "employee_password"
    { email: "manager@email.com", passwordHash: "$2b$10$tjKjPsm4SzyG.BRjz.oyy.CQNd4U/ZJV8wCIdWc7amhUKXbFq1zFm", userRole: "manager" } // Hashed version of "manager_password"
];

// Middleware to parse JSON bodies
app.use(express.json());

// Authentication endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const user = users.find(u => u.email === email);

    if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare hashed password
    const match = await bcrypt.compare(password, user.passwordHash);

    if (match) {
        return res.status(200).json({ message: "Authentication successful", userRole: user.userRole });
    } else {
        return res.status(401).json({ error: "Invalid email or password" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
