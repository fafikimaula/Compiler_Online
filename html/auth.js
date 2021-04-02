// const API_URL = window.location.origin + '/' + window.location.pathname + 'api' + '/';
const API_URL = "172.27.37.93:8080/api/";

function getMainData() {
    $(document).ready(function () {
        let id = localStorage.getItem("id");
        console.log(id);
        if (id != null) {
            setTimeout("location.href = 'code.html';", 0);
        } 
    });
}

function signup() {
    $(document).ready(function () {
        $("#signupButton").click(function () {
            let data = {
                "first_name": $("#firstName").val(),
                "last_name": $("#lastName").val(),
                "email": $("#email").val(),
                "password": $("#password").val(),
            }
            console.log("register, name:" + data.first_name)
            $.ajax({
                url:  "api/signup.php",
                type: "post",
                dataType: 'json',
                data: data,
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        localStorage.setItem("email", response.email);
                        localStorage.setItem("first_name", response.first_name);
                        localStorage.setItem("last_name", response.last_name);
                        localStorage.setItem("id", response.id);
                        if (response.photo == null) {
                            localStorage.setItem("photo", "https://ui-avatars.com/api/?name=" + response.first_name + response.last_name + "&color=7F9CF5&background=EBF4FF");
                        } else {
                            localStorage.setItem("photo", response.photo);
                        }
                        setTimeout("location.href = 'code.html';", 1000);
                    }
                },
                error: function (errormessage) {
                    console.log(errormessage);
                }
            });
        });
    });
}

function signin() {
    $(document).ready(function () {
        $("#signinButton").click(function () {
            let data = {
                "email": $("#email").val(),
                "password": $("#password").val(),
            }
            console.log("signin, name:" + data.email)
            console.log(API_URL)
            $.ajax({
                url: "api/signin.php",
                type: "post",
                dataType: 'json',
                data: data,
                success: function (response) {
                    console.log(response);
                    if (response.status == true) {
                        console.log("sukses login");
                        localStorage.setItem("email", response.email);
                        localStorage.setItem("first_name", response.first_name);
                        localStorage.setItem("last_name", response.last_name);
                        localStorage.setItem("id", response.id);
                        if (response.photo == null) {
                            localStorage.setItem("photo", "https://ui-avatars.com/api/?name=" + response.first_name + response.last_name + "&color=7F9CF5&background=EBF4FF");
                        } else {
                            localStorage.setItem("photo", response.photo);
                        }
                        setTimeout("location.href = 'code.html';", 1000);
                    }
                },
                error: function (errormessage) {
                    console.log("gagal login");
                    console.log(errormessage);
                }
            });
        });
    });


}

