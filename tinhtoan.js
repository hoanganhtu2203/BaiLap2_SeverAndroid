
var exports =  module.exports = {};
exports.tinhTong = function(num1,num2) {
  return (num1+num2);
}
exports.tinhHieu = function(num1,num2) {
  return (num1-num2);
}
exports.tinhTich = function(num1,num2) {
  return (num1*num2);
}
exports.tinhThuong = function(num1,num2) {
  if(num2 == 0){
    return false
  }else
  return (num1/num2);
}
