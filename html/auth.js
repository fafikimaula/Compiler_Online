// const API_URL = window.location.origin + '/' + window.location.pathname + 'api' + '/';
const API_URL = "172.27.37.93:8080/api/";

function getMainData() {
    $(document).ready(function () {
        let id = localStorage.getItem("id");
        console.log(id);
        if (id != null) {
            setTimeout("location.href = 'index.html';", 0);
        }
    });
}

function checkLogin() {
    $(document).ready(function () {
        let id = localStorage.getItem("id");
        console.log(id);
        let authButton = document.getElementById("authButton");
        if (id != null) {
            console.log("sudah login");

            authButton.innerHTML = `
        <form class="d-flex py-3 py-lg-0"><a class="btn btn-light rounded-pill shadow fw-bold" href="signin.html" role="button" 
        @click='localStorage.clear(); console.log("clear"); location.href = "signin.html";'
        x-data="{ }">Logout
            <svg class="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#9C69E2" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
            </svg></a></form>
        `;

        } else {
            authButton.innerHTML = `
        <form class="d-flex py-3 py-lg-0"><a class="btn btn-light rounded-pill shadow fw-bold" role="button" 
        @click='localStorage.clear(); console.log("clear"); location.href = "signin.html";'
        x-data="{ }">Login
            <svg class="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#9C69E2" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
            </svg></a></form>
        `;
            console.log("belum login");
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
                url: "api/signup.php",
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
                        setTimeout("location.href = 'index.html';", 1000);
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
                        setTimeout("location.href = 'index.html';", 1000);
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

