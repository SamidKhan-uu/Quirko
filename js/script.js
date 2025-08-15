$(document).ready(function(){

    $("#signinBtn").click(function(){
        $("#signinModal").fadeIn();
    });

    $("#signinModal .close").click(function(){
        $("#signinModal").fadeOut();
    });

    $(window).click(function(event){
        if(event.target.id === "signinModal"){
            $("#signinModal").fadeOut();
        }
    });

    $("#signinForm").submit(function(e){
        e.preventDefault(); 
        let email = $("#email").val();
        let password = $("#password").val();
        alert("Email: " + email + "\nPassword: " + password);
        $("#signinModal").fadeOut();
        $(this)[0].reset();
    });

    // ---------------- Cookies ----------------
    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        let cname = name + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(cname) === 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }

    if (getCookie("cookiesAccepted") !== "yes") {
        $("#cookieConsent").fadeIn();
    }

    $("#acceptCookies").click(function(){
        setCookie("cookiesAccepted", "yes", 365);
        $("#cookieConsent").fadeOut();
    });

});
      




