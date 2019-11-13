// ====== Tugas 22 JavaScript =====

var data = "Saya ingin belajar bersama";

function init() {
  var data2 = data.split(" ");
  data2.forEach(function (Item, Index, Array) {
    console.log("Item : ",Item, "Index ke ", Index);
  });
}
init()