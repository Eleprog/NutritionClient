import { EnergyValueDto } from './EnergyValueDto';

export class RecipeDto {
    id: number;
    name: string;
    description: string;
    cost: number;
    energyValue: EnergyValueDto;
}