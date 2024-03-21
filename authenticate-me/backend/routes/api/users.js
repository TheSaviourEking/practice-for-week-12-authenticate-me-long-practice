// /api/users
const express = require('express');
const router = express.Router();

const { User } = require('../../db/models');
const { setTokenCookie } = require('../../utils/auth');

router.post('/', async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({ user });
});

module.exports = router;
