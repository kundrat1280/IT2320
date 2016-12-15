$(document).ready(function () {

    var username = $(".username");
    var password = $(".password");
    var logbutton = $(".logbutton");
    var output = $(".output");
    var crbutton = $(".crbutton");
    var crusername = $(".crusername");
    var crpassword = $(".crpassword");
    var email = $(".email");
    var repemail = $(".repemail");
    var elemname = $(".elemname");
    var elempassword = $(".elempassword");
    var infousername = $(".infousername");
    var infoemail = $(".infoemail");
    var infogpa = $(".infogpa");

    logbutton.click(function () {
        $.ajax({
            url: "Home/Login",
            data: {
                "Username": username.val(),
                "Password": password.val()
            },
            success: function (stringResponse) {
                response = JSON.parse(stringResponse);
                $(".content").css("display", "none");
                $(".output").css("display", "inline");
                
            }
        });
        $.ajax({
            url: "Home/GetAccountInformation",
            data: {
                "Username": username.val()
            },
            success: function (stringResponse) {
                response = JSON.parse(stringResponse);
                payload = response.Payload;
                user = JSON.parse(payload);
                infousername.val(user.account.username);
                infoemail.val(user.account.emailadd);
            }
        })
    });

    crbutton.click(function () {
        $.ajax({
            url: "Home/CreateAccount",
            data: {
                "Username": crusername.val(),
                "Password": crpassword.val(),
                "EmailAdd": email.val(),
                "EmailCon": repemail.val()
            },
            success: function (stringResponse) {
                response = JSON.parse(stringResponse);
            }
        });
    });

    $(".upemlbutton").click(function () {
        $.ajax({
            url: "Home/AddOrUpdateElement",
            data: {
                "Username": infousername.val(),
                "ElementName": "emailadd",
                "ElementValue": infoemail.val()
            },
            success: function (stringResponse) {
                response = JSON.parse(stringResponse);
                alert(response.Message);
            }
        })
    })
});