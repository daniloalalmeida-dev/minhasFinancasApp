import toastr from "toastr";

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};
export const showMessages = (title, message, type) => {
  toastr[type](message, title);
};

export const errorMessage = (message) => {
  showMessages("Error", message, "error");
};

export const successMessage = (message) => {
  showMessages("Sucesso", message, "success");
};

export const alertMessage = (message) => {
  showMessages("Alerta", message, "warning");
};
