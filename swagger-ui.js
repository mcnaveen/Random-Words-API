import express from 'express';
import swaggerUi from 'swagger-ui-express';
import specs from './swagger.js';

const router = express.Router();

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(specs, { explorer: true }));

export default router;