import { EnergyValueDto } from './EnergyValueDto';

export class RecipeIngredientDto {
    id: number;
    weight: number;
    ingredientId: number;
    totalCost: number;
    name: string;
    totalEnergyValue: EnergyValueDto;
}