/*
    for in
    可以遍历所有可枚举属性以及原型上的属性
*/
var createObj = function(){
    this.name = "大表哥";
}
var obj1 = new createObj();
createObj.prototype.age = 10;

for(var p in obj1){
    console.log('key:',p);
    console.log('value:',obj1[p]);
}
/*
    hasOwnProperty()不会从原型上寻找属性
*/
var resName = obj1.hasOwnProperty("name");
console.log("name",resName);

var resAge = obj1.hasOwnProperty("age");
console.log("age",resAge);
