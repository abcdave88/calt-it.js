var number = document.getElementsByClassName("number");

var operator = document.getElementsByClassName("operator")

var equals = document.getElementById('eq');
  equals.addEventListener('click', function(event){
console.log(this.value);
return this.value;
  });

var clear = document.getElementById('clear');
  clear.addEventListener('click', function(event){
console.log(this.value);
return this.value;
  });


 for(var i=0;i<number.length;i++){
 number[i].addEventListener('click', function(event){
  var numVal = this.value;
  console.log(numVal);
   return numVal;
 });
}

for(var j=0;j<operator.length;j++){
  operator[j].addEventListener('click', function(event){
  var oper = this.value;
  console.log(oper);
  return oper;
  });
}

var addition = function(numVal, operator) {
  if (operator === '+') {
    var sum = num1 + num2;
  }
  console.log(sum);
  return sum;
}