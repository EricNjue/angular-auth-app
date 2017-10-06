export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  uom: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
