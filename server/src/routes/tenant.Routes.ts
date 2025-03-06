import express from 'express';
import { createTenant, getTenant, updateTenant } from '../controllers/tenant.controllers';


const router = express.Router();

router.get('/:cognitoId', getTenant);
router.post('/', createTenant);
router.put('/:cognitoId', updateTenant);

export default router;
