function validateForm() {
    let name = document.forms["spform"]["name"].value;
    if (name == '') {
        alert("First Name must be filled out.");
        return false;
    }
}