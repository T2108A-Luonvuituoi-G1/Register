function takeData() {
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var password = document.getElementById('password').value;
    var avatar = document.getElementById('ava').value;
    var address = document.getElementById('address').value;
    var gender = document.getElementById('gender').value;
        if (gender === 'male') {
            gender = 1;
        } else if (gender === 'female') {
            gender = 2;
        } else {
            gender = 3;
        }
    var birthday = document.getElementById('birthday').value;

}