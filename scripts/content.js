let runningStateCount = 1;

setInterval(function () {
  console.clear();
  console.log("Đang chạy: " + runningStateCount);
  runningStateCount++;

  //Skip AD Video
  if (document.querySelector('.ytp-skip-ad-button')) {
    document.querySelector('.ytp-skip-ad-button').click();
  }

  //Close AD Banner
  if (document.querySelector('.ytp-ad-overlay-close-button')) {
    document.querySelector('.ytp-ad-overlay-close-button').click();
  }
}, 300);