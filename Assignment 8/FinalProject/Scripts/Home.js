$(document).ready(function () {

    var username = $(".username");
    var password = $(".password")
    var logbutton = $(".logbutton");
    var output = $(".output");

    logbutton.click(function () {
        $.ajax({
            url: "Home/Login",
            data: {
                "Username": username,
                "Password": password
            },
            success: function (stringResponse) {
                response = JSON.parse(stringResponse);
                response.Message == "Success" ? Home.GetAccount(username, usernameMsg) : Home.LoginError(username, usernameMsg, data);
            }
        });
    });
});