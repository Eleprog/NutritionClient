export class NewProductDto {
    constructor(
        public name: string,
        public cost: number,
        public proteins: number,
        public fats: number,
        public carbohydrates: number
    ) { }
}