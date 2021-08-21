import faker from 'faker';
import { getCapitalizedWord } from 'utils/capitalize';
import { getRandomInteger } from 'utils/random';
import { IProductParameter, ProductParameter } from 'models/ProductParameter';

type VehicleParamsType = keyof typeof faker.vehicle;

export interface IProduct {
  name: string;
  description: string;
  image: string;
  parameters: IProductParameter[];
  ratings: number;
}

export class Product implements IProduct {
  name: string;
  description: string;
  image: string;
  parameters: IProductParameter[];
  ratings: number;

  constructor() {
    this.name = faker.vehicle.vehicle();
    this.description = faker.lorem.paragraph();
    this.image = faker.image.technics(1000, 750);
    this.ratings = getRandomInteger(100);
    this.parameters = [];

    this.setParameters();
  }

  private setParameters(): void {
    ['manufacturer', 'model', 'type', 'fuel', 'color'].forEach((key) =>
      this.parameters.push(
        new ProductParameter(getCapitalizedWord(key), faker.vehicle[key as VehicleParamsType]())
      )
    );
  }
}
