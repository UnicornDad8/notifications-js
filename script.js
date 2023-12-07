const buttonSuccess = document.querySelector(".btn-success");
const toastSuccess = document.querySelector(".toast-success");
const progressSuccess = document.querySelector(".progress-success");

const buttonInfo = document.querySelector(".btn-info");
const toastInfo = document.querySelector(".toast-info");
const progressInfo = document.querySelector(".progress-info");

const buttonWarning = document.querySelector(".btn-warning");
const toastWarning = document.querySelector(".toast-warning");
const progressWarning = document.querySelector(".progress-warning");

const buttonDanger = document.querySelector(".btn-danger");
const toastDanger = document.querySelector(".toast-danger");
const progressDanger = document.querySelector(".progress-danger");

const closeIcon = document.querySelector(".close");

// success
buttonSuccess.addEventListener("click", () => {
  toastSuccess.classList.add("active");
  progressSuccess.classList.add("active");

  setTimeout(() => {
    toastSuccess.classList.remove("active");
  }, 5000);

  setTimeout(() => {
    progressSuccess.classList.remove("active");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
  toastSuccess.classList.remove("active");

  setTimeout(() => {
    progressSuccess.classList.remove("active");
  }, 300);
});

// info
buttonInfo.addEventListener("click", () => {
  toastInfo.classList.add("active");
  progressInfo.classList.add("active");

  setTimeout(() => {
    toastInfo.classList.remove("active");
  }, 5000);

  setTimeout(() => {
    progressInfo.classList.remove("active");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
  toastInfo.classList.remove("active");

  setTimeout(() => {
    progressInfo.classList.remove("active");
  }, 300);
});

// warning
buttonWarning.addEventListener("click", () => {
  toastWarning.classList.add("active");
  progressWarning.classList.add("active");

  setTimeout(() => {
    toastWarning.classList.remove("active");
  }, 5000);

  setTimeout(() => {
    progressWarning.classList.remove("active");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
  toastWarning.classList.remove("active");

  setTimeout(() => {
    progressWarning.classList.remove("active");
  }, 300);
});

// danger
buttonDanger.addEventListener("click", () => {
  toastDanger.classList.add("active");
  progressDanger.classList.add("active");

  setTimeout(() => {
    toastDanger.classList.remove("active");
  }, 5000);

  setTimeout(() => {
    progressDanger.classList.remove("active");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
  toastDanger.classList.remove("active");

  setTimeout(() => {
    progressDanger.classList.remove("active");
  }, 300);
});
