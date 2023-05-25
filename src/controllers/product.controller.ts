import { Request, Response } from 'express';
import productService from 'src/services/product.service';

const create = async (req: Request, res: Response) => {
  const { type, status, message } = await productService.create(req.body);
  if (type) return res.status(status).json({ message });
  return res.status(status).json(message);
};

export default {
  create,
};
