// 获取页面上的显示元素
const screenInfoElement = document.getElementById("screen-info");

// 定义一个函数来更新屏幕信息
function updateScreenInfo() {
  const screenWidth = screen.width; // 屏幕实际宽度
  const screenHeight = screen.height; // 屏幕实际高度
  const windowWidth = window.innerWidth; // 浏览器窗口宽度
  const windowHeight = window.innerHeight; // 浏览器窗口高度

  // 构建显示的字符串
  const infoString = `
    屏幕实际宽度: ${screenWidth}px<br>
    屏幕实际高度: ${screenHeight}px<br>
    浏览器窗口宽度: ${windowWidth}px<br>
    浏览器窗口高度: ${windowHeight}px
  `;

  // 更新页面上的显示
  screenInfoElement.innerHTML = infoString;
}

// 初次加载时更新一次屏幕信息
updateScreenInfo();

// 监听窗口大小变化事件，每次变化时更新屏幕信息
window.addEventListener("resize", updateScreenInfo);

