function sendEmail() {
    var email = 'marwanzaky.dev@gmail.com';
    var subject = $('subject').value;
    var body = $('body').value;
    var url = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
    window.open(url);
}

function $(elementID) {
    return document.getElementById(elementID);
}