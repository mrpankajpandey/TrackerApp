import express from 'express';
import { getData, sendData } from '../controller/trackerData.js';

import { isAuthenticated } from '../middleware/authMiddleware.js';
const router = express.Router();


router.route('/').get(getData);
router.route('/').post(sendData);

export default router;  