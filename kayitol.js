function kontrol() {
    var username, pass, text ; 
    
    // Kullanıcı adının uzunluğunu username değişkenine aktar
    // Şifrenin uzunluğunu pass değişkenine aktar
    phonenumber=document.getElementById("telefonnumarasi").value.length;
    username= document.getElementById("eposta").value.length;
    pass= document.getElementById("kullanicisifre").value.length;
    
   
    // Kullanıcı adı veya şifre girilmemişse
    if (username == 0 || pass == 0 || phonenumber==0) {    
    text= "Kullanıcı adı,sifre veya telefon numarası boş bırakılamaz!";
    }
    
    // Şifre 6 karakterden kısaysa
    else if (pass < 6) {
    text= "Şifre 6 karakterden kısa olamaz!";
    }
    
    // Kullanıcı adı 3'den küçük 20'den fazlaysa 
    else if (username < 3 || username > 20) {    
    text= "Kullanıcı adı 3-20 karakter arasında olmalıdır!"; 
    }
    else if (phonenumber < 11 || phonenumber > 12) {    
        text= "Telefon numarası 11 rakamdan oluşmaktadır!"; 
        } 
    // Üçüde uygunsa
    else {    
    text= "Başarıyla Kayıt Oldunuz." ;
    alert("Başarıyla kayıt oldunuz. Netflixi seçmediğiniz için teşekkür ederiz");
    window.location.assign("index.html");
    }
    
    
    document.getElementById("result").innerHTML = text;
}