import { EnergyValueDto } from './EnergyValueDto';
import { MealDto } from './MealDto';

export class MenuIngredientDto {
    id: number;
    meal: MealDto;
    weight: number;
    ingredientId: number;
    totalCost: number;
    name: string;
    totalEnergyValue: EnergyValueDto;
}