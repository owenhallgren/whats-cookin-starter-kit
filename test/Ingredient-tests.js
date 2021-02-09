const chai = require('chai');
const expect = chai.expect;

const Ingredient = require('../src/Ingredient')

describe('Ingredient', function() {
  it('should be a function', function() {
    const ingredient = new Ingredient({
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    });
    expect(Ingredient).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    const ingredient = new Ingredient({
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    });
    expect(ingredient).to.be.an.instanceOf(Ingredient);
  });

  it('should return ingredient names', function() {
    const ingredient = new Ingredient([{
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    }, {
      "id": 18372,
      "name": "bicarbonate of soda",
      "estimatedCostInCents": 582
    }]);

    expect(ingredient.findIngredientName()).to.deep.equal(['wheat flour', "bicarbonate of soda"])
  })
});
