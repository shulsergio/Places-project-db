import { Router } from 'express';
import {
  loginUserController,
  logoutUserController,
  registerUserController,
} from '../controllers/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const authRouter = Router();
authRouter.post(
  '/register',
  //   validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

authRouter.post('/login', ctrlWrapper(loginUserController));

authRouter.post('/logout', ctrlWrapper(logoutUserController));

export default authRouter;
