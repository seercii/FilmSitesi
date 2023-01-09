function kontrol1() {
    var user, password, text;

    user = document.getElementById("user").value;
    password = document.getElementById("password").value;


    if (user == "admin" && password == "1234") {
        text = "Başarıyla Giriş Yaptınız";
        alert("Başarıyla giriş yaptınız. Netflixi seçmediğiniz için teşekkür ederiz");
        window.location.assign("index.html")
    }

    // Şifre 6 karakterden kısaysa
    else if (user != "admin" && password == "1234") {
        text = "Kullanıcı adınız yanlış!";
    } 
    else if (user == "admin" && password != "1234") {
        text = "Şifreniz yanlış!";
    } 
    else if (user == "" && password == "") {
        text = "Kullanıcı adı ve şifre boş bırakılamaz !";
    }
    else {
        text = "Kullanıcı adınız ve şifreniz yanlış!";
    }


    document.getElementById("result2").innerHTML = text;
}