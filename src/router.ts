import { Router } from 'express';
import { createUser, getUser, login } from './handlers';
import { body } from 'express-validator';
import { handleInputErrors } from './middleware/validation';
import { authenticate } from './middleware/auth';

const router = Router();

router.post('/auth/register',
    body('handle')
        .notEmpty()
        .withMessage('Handle is required'),
    body('name')
        .notEmpty()
        .withMessage('Name is required'),
    body('email')
        .isEmail()  
        .withMessage('Email is required'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 6 characters'),
    handleInputErrors,
    createUser
);

router.post('/auth/login', 
    body('email')
        .isEmail()
        .withMessage('Email is required'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),
    handleInputErrors,
    login 
);

router.get('/user',authenticate, getUser);

export default router;
