$(document).ready(function () {

    var username = $(".username").val();
    var password = $(".password").val();
    var logbutton = $(".logbutton");
    var output = $(".output");

    logbutton.click(function () {
        $.ajax({
            type: "POST",
            url: "Home/Login",
            dataType: 'json',
            async: false,
            data: {
                "Username": username,
                "Password": password
            },
            success: function (stringResponse) {
                response = JSON.parse(stringResponse);
                response.Message == "Success" ? Home.GetAccount(username, usernameMsg) : Home.LoginError(username, usernameMsg, data);
                output.html(response.usernameMsg);
            }
        });
    });
});