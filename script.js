const shareBtn = document.getElementById("shareBtn");
const shareDesktop = document.querySelector(".social-share-desktop");
const shareMobile = document.querySelector(".social-share-mobile");

shareBtn.addEventListener("click", () => {
  shareDesktop.classList.toggle("active");
  shareMobile.classList.toggle("active");
  shareBtn.classList.toggle("active");

  // When click on the share button
  if (shareDesktop.classList.contains("active")) {
    positionPopup();
  }
});

// When resize the browser window or change the width + when the social share desktop component is present
window.addEventListener("resize", () => {
  if (shareDesktop.classList.contains("active")) {
    positionPopup();
  }
});

// Pressing Esc on the keyboard will close the share component out
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    shareDesktop.classList.remove("active");
    shareMobile.classList.remove("active");
    shareBtn.classList.remove("active");
  }
});

// Calculate the position of the popup to be relative to the share button
function positionPopup() {
  const btnRect = shareBtn.getBoundingClientRect();
  const popupRect = shareDesktop.getBoundingClientRect();

  const top = btnRect.top - popupRect.height - 24;
  const left = btnRect.left + btnRect.width / 2 - popupRect.width / 2;

  shareDesktop.style.top = `${top}px`;
  shareDesktop.style.left = `${left}px`;
}
