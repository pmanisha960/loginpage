function validate(){
    var username=document.form1.username.value;
    var password=document.form1.password.value;
    if (username=="pasuladimanisha@gmail.com"|| password=="@mani") {
        return true
    } else {
        alert("invalid username OR password");
        return false
    }
}