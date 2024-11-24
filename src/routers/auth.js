import { Router } from 'express';
import { registerUserController } from '../controllers/auth';
import { ctrlWrapper } from '../utils/ctrlWrapper';

const authRouter = Router();
authRouter.post(
  '/register',
  //   validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

export default authRouter;
