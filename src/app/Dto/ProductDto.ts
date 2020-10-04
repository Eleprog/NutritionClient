import { EnergyValueDto } from './EnergyValueDto';

export class ProductDto {
  constructor(
    public id: Number,
    public name: String,
    public cost: Number,
    public energyValue: EnergyValueDto
  ) {
  }
};
