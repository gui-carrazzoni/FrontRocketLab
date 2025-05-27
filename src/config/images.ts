// Configuração central para gerenciamento de imagens
// No futuro, isso pode ser facilmente alterado para usar um CDN

export const IMAGE_BASE_URL = '/images/products';

export function getProductImage(imageName: string): string {
  // No futuro, você pode mudar isso para usar um CDN
  // return `https://seu-cdn.com/products/${imageName}`;
  return `${IMAGE_BASE_URL}/${imageName}`;
} 