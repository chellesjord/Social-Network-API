const router = require('express').Router();
// const apiRoutes = require('./api');
// const userRoutes = require('./api/users');
// const friendRoutes = require('./api/users');
// const thoughtRoutes = require('./api/thoughts');

// router.use('/api', apiRoutes);
// router.use('/api/users', userRoutes);
// router.use('/api/friends', friendRoutes);
// router.use('/api/thoughts', thoughtRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
