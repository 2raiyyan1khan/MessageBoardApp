const msgForm = document.querySelector('.msgForm');
const msgInput = document.querySelector('.msgInput');
const msg = document.querySelector('.msg');

msgForm.addEventListener('submit', sendMessage);

function sendMessage(e) {
    if (msgInput.value !== '') {
        msg.innerHTML = msgInput.value;
        show('Your message has been Delivered!', 'success');
        msgForm.reset();
    }
    else {
        show('Please check the input!', 'danger');
        msgForm.reset();
    }
    e.preventDefault();
}

function show(errMsg, color) {
    let err = document.querySelector('.err');
    err.innerHTML = `
    <div class="alert alert-${color}" role="alert">
        ${errMsg}
    </div>
    `;
    setTimeout(function () {
        err.innerHTML = '';
    }, 3000);
}