let toggleCheckbox = document.getElementById("toggle");
let toogleButton = document.querySelector(".button-toogle");

// Bật tắt exetension
toggleCheckbox.addEventListener("change", function () {
  enabledState = this.checked;
  chrome.storage.sync.set({ enabledState });
});

// Phục hồi trạng thái toggleCheckbox
chrome.storage.sync.get("enabledState", function (result) {
  console.log(result);
  if (result.enabledState == true) {
    toggleCheckbox.checked = true;
    toogleButton.className = "button-toogle";
    // toogleButton.textContent = "ON";
  } else {
    toggleCheckbox.checked = false;
    toogleButton.className = "button-toogle off";
    // toogleButton.textContent = "OFF";
  }
});

// Đổi màu và nội dung nút ON/OFF
toogleButton.addEventListener("click", function () {
  this.classList.toggle("off");
  // if (this.classList.contains("off")) {
  //   this.textContent = "OFF";
  // } else {
  //   this.textContent = "ON";
  // }
});