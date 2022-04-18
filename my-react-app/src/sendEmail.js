function get(elementID) {
    return document.getElementById(elementID);
}

export default function () {
    var email = 'contact@marwanzaky.com';
    var subject = get('subject').value;
    var body = get('body').value;
    var url = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
    window.open(url);
}
