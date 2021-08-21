export interface IProductParameter {
  name: string;
  value: string;
}

export class ProductParameter implements IProductParameter {
  name: string;
  value: string;

  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
}
