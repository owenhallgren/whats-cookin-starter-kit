class Ingredient {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.cost = obj.estimatedCostInCents;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Ingredient;
}