describe("Pizza", function() {
  it("initializes a Pizza", function() {
    var aPizza = new Pizza('pepperoni', 'large');
    expect([aPizza.toppings, aPizza.howBig]).to.eql(['pepperoni', 'large']);
  });
});
