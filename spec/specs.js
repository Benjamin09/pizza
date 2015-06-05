describe("Pizza", function() {
  it("initializes a Pizza", function() {
    var pie = new Pizza('nada', 'big', 2);
    expect([pie.toppings, pie.howBig, pie.quantity]).to.eql(['nada', 'big', 2]);
  });

  it("calculates the cost of the pizza", function() {
    var pie = new Pizza('nada', 'big', 2);
    expect(pie.cost()).to.equal(20)
  });
});

describe("Order", function() {
  it("initializes an Order", function() {
    var pie = new Pizza('nada', 'big', 2);
    var order = new Order([pie]);
    expect(order.pizzas).to.eql([pie]);
  });

  it("calculates the cost of an Order", function() {
    var pie = new Pizza('nada', 'big', 2);
    var order = new Order([pie]);
    expect(order.cost).to.equal(20);
  });
});
