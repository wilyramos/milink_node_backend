import { Router } from 'express';
import { createUser, login } from './handlers';
import { body } from 'express-validator';
import { handleInputErrors } from './middleware/validation';

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

export default router;
