logout: (req: RequestAuth, res: Response) => {
    return sendResponse(res, httpStatus.OK, { accessToken: null }, null);
  },