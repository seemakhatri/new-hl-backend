import express from 'express';
import { register, login } from '../controllers/auth.controller';
import { authenticate, authorizeRoles } from '../middleware/role.middleware';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Protected route examples
router.get('/admin', authenticate, authorizeRoles('admin'), (req, res) => {
  res.send('Welcome Admin');
});

router.get('/user', authenticate, authorizeRoles('user', 'admin'), (req, res) => {
  res.send('Welcome User');
});

export default router;
