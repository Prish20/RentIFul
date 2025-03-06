import express from 'express';

import { authMiddleware } from '../middleware/authMiddleware';
import multer from 'multer';
import { createProperty, getProperties, getProperty } from '../controllers/property.controllers';

const storage = multer.memoryStorage();
const Upload = multer({ storage: storage });

const router = express.Router();

router.get('/', getProperties);
router.get('/:id', getProperty);
router.post('/', authMiddleware(["manager"]), Upload.array("photos"), createProperty);

export default router;
