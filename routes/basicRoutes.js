const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utilities/wrapAsync');
const controller = require('../controller/index');

router.route('/').get(controller.home).post(wrapAsync(controller.search));

router.route('/show/toilets/:inletType').get(wrapAsync(controller.showInlet));

router.route('/show/:code').get(wrapAsync(controller.showOne));

router.route('/show').get(wrapAsync(controller.show));

module.exports = router;
