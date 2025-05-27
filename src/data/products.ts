import type { Product } from '../types';
import { getProductImage } from '../config/images';

export const products: Product[] = [
  {
    id: 1,
    name: "Fones de Ouvido Sem Fio",
    price: 99.99,
    description: "Fones de ouvido de alta qualidade com cancelamento de ruído",
    image: getProductImage('fone-bluetooth.png')
  },
  {
    id: 2,
    name: "Smartphone",
    price: 2699.99,
    description: "Smartphone último modelo com recursos avançados",
    image: getProductImage('celular.jpeg')
  },
  {
    id: 3,
    name: "Notebook",
    price: 2299.99,
    description: "Notebook potente para trabalho",
    image: getProductImage('notebook.png')
  },
]; 