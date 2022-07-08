// //Load xong rồi mới chạy hàm
// $(function () {
//   console.log("Trang tải xong, thích làm gì làm");
// });

// // 1. Duyệt cấu trúc DOM và lấy các phần tử DOM ra
// // vd: children, nextELementSibling,...
// // Getter (vd: .text(), .html(),...) => lấy ra phần tử đầu tiên
// // Setter (vd: .text(value), .html(value),..) => tự động lặp qua áp dụng toàn bộ

// //Selector

// //Cách DOM thuần
// const dom = document.getElementById("dom");

// //jQuery
// //Sử dụng prefix $ để phân biệt giữa đối tượng DOM thông thường và đối tượng jQuery
// const $jquery = $("#jquery"); //Trả về jQuery Object không phải node
// console.log($jquery);

// // 2. Thao tác: sửa, xóa, chỉnh sử style, gắn sự kiện, sửa thuộc tính, thêm các thẻ con,....
// //DOM thuần
// dom.style.backgroundColor = "red";
// dom.classList.add("dom", "abc");
// dom.classList.remove("abc");
// dom.textContent = "What's up YOOOO";
// console.log(dom.textContent);
// dom.innerHTML = "<h2>Test cái lào</h2>";
// // const items = document.querySelectorAll("#dom, .item");
// // items.forEach(item) = (item.textContent = "DOM");
// dom.setAttributeNS("id", "dom");
// dom.setAttributeNS("title", "dom");
// dom.setAttributeNS("data-name", "Ba");

// //jquery
// $jquery.css({
//   backgroundColor: "blue",
// });
// $jquery.addClass("jquery abc");
// $jquery.remove("abc");
// $jquery.text("Hello jQuery");
// console.log($jquery.text());
// $jquery.html("<h2>Test jquery</h2>");
// // const $items = $("#jquery .item");
// // $items.text("jQuery");

// $jquery.attr({ id: "jQuery", title: "jQuery" });
// $jquery.data({ name: "Ba" });
// $jquery.append("<p>Paragraph</p>");

// $jquery.on("click", function (e) {
//   console.log("clicked");
// })

// $("<div />", {
//   id: "container",
//   style: { backgroundColor: "yellow" },
//   click: function () {
//     console.log("click em đi");
//   },

// }).appendTo($jquery);

// const $button = $(".show");
// const $test = $(".test");

// $button.on("click", function () {
//   $test.fadeOut(200);
// });

// ".btn-dropdown".on("click", function () {
//   const target = this.dataset.target;
//   const $target = $(target);

//   target.toggleClass("show");
//   target.on("click", function () {
//     $target.toggleClass("show");
//   });

//   $(window).on("click", function (e) {
//     const parent = $(e.target).parent(".dropdown");
    
//   })
// });






