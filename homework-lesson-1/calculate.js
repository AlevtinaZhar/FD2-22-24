function calculate(str) {
  //поиск через реглярные выражения
  let match_mult_div = /(-?[\d\.]+)\s*([\*\/])\s*(-?[\d\.]+)/g;
  let match_sum_diff = /(-?[\d\.]+)\s*([\+-])\s*(-?[\d\.]+)/g;

  let sum_or_diff = function (sub, a, sign, b) {
    return sign == "-" ? a - b : +a + +b;
  };

  let mult_or_div = function (sub, a, sign, b) {
    return sign == "*" ? a * b : a / b;
  };

  let get_value = function (sub, exp) {
    while (match_mult_div.test(exp))
      exp = exp.replace(match_mult_div, mult_or_div);
    while (match_sum_diff.test(exp))
      exp = exp.replace(match_sum_diff, sum_or_diff);
    return exp;
  };
  while (str.indexOf("(") !== -1)
    // убираем скобки
    str = str.replace(/\(([^\(\)]*)\)/g, get_value);

  return get_value("", str);
}
