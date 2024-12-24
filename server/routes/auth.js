import express from "express";
const router = express.Router();

router.get('/login', (req,res) => {
    res.send('Hello Login');
})

export default router;