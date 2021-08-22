import faker from 'faker';
import { v4 as uuid } from 'uuid';
import { getCapitalizedWord } from 'utils/capitalize';
import { getRandomInteger } from 'utils/random';
import { IProductParameter, ProductParameter } from 'models/ProductParameter';

type VehicleParamsType = keyof typeof faker.vehicle;

export interface IProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  parameters: IProductParameter[];
  ratings: number;
}

export class Product implements IProduct {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly parameters: IProductParameter[];
  readonly ratings: number;

  constructor() {
    this.id = uuid();
    this.name = faker.vehicle.vehicle();
    this.description = faker.lorem.paragraph();
    this.image = faker.image.image();
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
