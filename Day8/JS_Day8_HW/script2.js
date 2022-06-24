// Viết hàm capitalize(str) nhận vào một chuỗi, trả về chuỗi chỉ viết hoa ký tự đầu tiên, tất cả
// ký tự khác viết thường, loại bỏ khoảng trắng ở 2 đầu nếu có
function capitalize(str) {
  str = str.trim();
  return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize("alo"));
