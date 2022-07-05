authRouter.get('/logout', checkToken, authController.logout);
