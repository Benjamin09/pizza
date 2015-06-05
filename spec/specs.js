describe("Pizza", function() {
  it("initializes a Pizza", function() {
    var pie = new Pizza('nada', 'big', 2);
    expect([pie.toppings, pie.howBig, pie.quantity]).to.eql(['nada', 'big', 2]);
  });
});
