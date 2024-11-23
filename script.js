document.addEventListener("DOMContentLoaded", function () {
  // 选择所有员工卡片
  const EmployeeItems = document.querySelectorAll(".employee-card");

  // 添加点击事件（onclick）
  EmployeeItems.forEach(function (item) {
    item.onclick = function () {
      alert("你点击了： " + this.textContent);
    };
  });

  // 添加鼠标悬停事件（onmouseover）
  EmployeeItems.forEach(function (item) {
    item.onmouseover = function () {
      this.style.backgroundColor = "#b2ebf2"; // 鼠标悬停时改变背景色
    };
  });

  // 添加鼠标移出事件（onmouseout）
  EmployeeItems.forEach(function (item) {
    item.onmouseout = function () {
      this.style.backgroundColor = ""; // 鼠标移出时恢复原样
    };
  });
});
