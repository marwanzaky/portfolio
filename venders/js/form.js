function sendEmail() {
    var email = 'marwanzaky.dev@gmail.com';
    var subject = Get('subject').value;
    var body = Get('body').value;
    var url = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
    window.open(url);
}

function Get(elementID) {
    return document.getElementById(elementID);
}