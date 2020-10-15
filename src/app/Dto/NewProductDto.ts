export class NewProductDto {
    constructor(
        // public id: number = 0,
        public name: string,
        public cost: number,
        public proteins: number,
        public fats: number,
        public carbohydrates: number,
    ) { }
}