function function1(a, b, fun2, fun3) {
  console.log("\ncalling from function1");
  let res = a + b;
  console.log(a + "+" + b + "=" + res);
  fun2(res, fun3);
  console.log("ending from function1");
}
function function2(sum, fun3) {
  console.log("\ncalling from function2");
  let sum_to_5x = sum * 5;
  console.log("final result is " + sum_to_5x);
  fun3(sum_to_5x);
  console.log("ending from function2");
}
function function3(final_digit) {
  console.log("\ncalling from function3");
  let original_sum = final_digit / 5;
  console.log(`here a+b value is ${original_sum}`);
  console.log("\nending from function3");
}

function1(4, 2, function2, function3);
