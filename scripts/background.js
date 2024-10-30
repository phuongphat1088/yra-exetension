// Kiểm tra nếu chưa tồn tại thì tạo biến enabled trong sync storage
chrome.storage.sync.get("enabledState", function (result) {
  console.log(`Trạng thái exetension: ${result.enabledState}`);
  if (result.enabledState === undefined) {
    let enabledState = true;
    chrome.storage.sync.set({ enabledState });
  }
});