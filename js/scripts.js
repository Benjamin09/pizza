var Pizza = function(toppings, howBig, quantity) {
  this.toppings = toppings;
  this.howBig = howBig;
  this.quantity = quantity;
};

Pizza.prototype.cost = function() {
  return 10 * this.quantity;
};

var Order = function(pizzas) {
  var cost = 0;
  pizzas.forEach(function(pizza) {
    cost += pizza.cost();
  });
  this.cost = cost;
  this.pizzas = pizzas;
};
