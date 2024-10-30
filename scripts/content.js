// Biến đếm số lần chạy
let runningStateCount = 0;

chrome.storage.sync.get("enabledState", function (result) {
  // Kiểm tra nếu exetension được bật
  if (result.enabledState == true) {
    // Hàm xử lý quảng cáo
    function handleAds() {
      // Bỏ qua video quảng cáo
      const skipAdButton = document.querySelector('.ytp-skip-ad-button');
      if (skipAdButton) {
        skipAdButton.click();
      }

      // Đóng banner quảng cáo
      const closeAdBannerButton = document.querySelector('.ytp-ad-overlay-close-button');
      if (closeAdBannerButton) {
        closeAdBannerButton.click();
      }

      // Tăng biến đếm số lần chạy và log
      runningStateCount++;
      console.clear();
      console.log(`Đã xóa quảng cáo ${runningStateCount} lần.`);
    }

    // Thiết lập MutationObserver để theo dõi thay đổi DOM
    const observer = new MutationObserver((mutations) => {
      handleAds(); // Gọi hàm xử lý khi có sự thay đổi trong DOM
    });

    // Cấu hình MutationObserver để theo dõi thay đổi trong body
    observer.observe(document.body, {
      childList: true, // Theo dõi sự thay đổi trong các phần tử con
      subtree: true // Theo dõi sự thay đổi trong toàn bộ cây DOM con
    });
  }
});