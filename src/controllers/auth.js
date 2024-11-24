import { registerUser } from '../services/auth';

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'User create!',
    data: user,
  });
};
