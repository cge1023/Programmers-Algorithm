function solution(price) {
  var answer = 0;
  if (price < 100000) {
    answer = price;
  } else if (price >= 100000 && price < 300000) {
    answer = price - price * 0.05;
  } else if (price >= 300000 && price < 500000) {
    answer = price - price * 0.1;
  } else if (price >= 500000) {
    answer = price - price * 0.2;
  }
  return answer;
}

console.log(solution(580000));
