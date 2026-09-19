export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  sale?: number;
  image: string;
}

export const products: Product[] = [
  { id: 'p1', name: 'Discover 2 Step-Thru', brand: 'Premium Sets', price: 768, oldPrice: 980, sale: 22,
    image: 'https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/bike-pr10-600x392.png' },
  { id: 'p2', name: 'Folding Electric Bike', brand: 'Exclusive', price: 1270,
    image: 'https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/bike-pr11-600x392.png' },
  { id: 'p3', name: 'Parkwood Electric Bike', brand: 'Cannondale', price: 980,
    image: 'https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/bike-pr7-600x392.png' },
  { id: 'p4', name: 'Special Roar Bike CE', brand: 'Cannondale', price: 675,
    image: 'https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/bike-pr8-600x392.png' },
  { id: 'p5', name: 'Vega CE Low-Step', brand: 'Cannondale', price: 805,
    image: 'https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/bike-pr6-600x392.png' },
  { id: 'p6', name: 'Hybrid Electric Bike', brand: 'Bianchi', price: 999,
    image: 'https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/bike-pr3-600x392.png' },
];
