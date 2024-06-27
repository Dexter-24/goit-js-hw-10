import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
form.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
    evt.preventDefault();
    const delay = parseInt(form.elements['delay'].value);
    const state = form.elements['state'].value;
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                res(delay);
            } else {
                rej(delay);
            }
        }, delay)
    })

    promise.then((delay) => {
    iziToast.success({
      title: 'Success',
      message: `✅ Fulfilled promise in ${delay}ms`,
    });
  }).catch((delay) => {
    iziToast.error({
      title: 'Error',
      message: `❌ Rejected promise in ${delay}ms`,
    });
  });
}