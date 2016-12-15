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
    var elemval = $(".elemval");
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
                if (response.Message == "Success") {
                    $(".content").css("display", "none");
                    $(".output").css("display", "inline");
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
                            infogpa.val(user.account.gpa);
                        }
                    })
                }
                else {
                    if (response.Username == "Invalid") {
                        $(".logerror").html("Must be an existing account username");
                    }
                    else if (response.Password == "Wrong") {
                        $(".logerror").html("Wrong password for existing account");
                    }
                    
                }
            }
        });
        
    
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
                if (response.Message == "Error") {
                    if (response.Username == "Invalid") {
                        $(".createrr").html("Must be at least 6 characters");
                    }
                    else if (response.Username == "Exists") {
                        $(".createrr").html("Username is already taken");
                    }
                    else if (response.Password == "Invalid") {
                        $(".createrr").html("Username is already taken");
                    }
                    else if (response.EmailAdd == "Invalid") {
                        $(".createrr").html("Must have a value and contain @");
                    }
                    else if (response.EmailCon == "Invalid") {
                        $(".createrr").html("Must have a value");
                    }
                    else if (response.EmailCon == "Mismatch") {
                        $(".createrr").html("Must match EmailAdd");
                    }
                }
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
    });

    $(".upgpabutton").click(function () {
        $.ajax({
            url: "Home/AddOrUpdateElement",
            data: {
                "Username": infousername.val(),
                "ElementName": "gpa",
                "ElementValue": infogpa.val()
            },
            success: function (stringResponse) {
                response = JSON.parse(stringResponse);
            }
        })
    });

    $(".upbutton").click(function () {
        $.ajax({
            url: "Home/AddOrUpdateElement",
            data: {
                "Username": infousername.val(),
                "ElementName": elemname.val(),
                "ElementValue": elemval.val()
            },
            success: function (stringResponse) {
                response = JSON.parse(stringResponse);
                if (response.Message == "Success") {
                    payload = response.Payload;
                    user = JSON.parse(payload);
                    infousername.val(user.account.username);
                    infoemail.val(user.account.emailadd);
                    infogpa.val(user.account.gpa);
                    elemname.val('');
                    elemval.val('');
                }
                else if (response.Error == "Cannot Have Spaces In Element Name") {
                    $(".elemerror").html("Cannot Have Spaces In Element Name");
                }
                else if (response.Error == "Cannot Change Username") {
                    $(".elemerror").html("Cannot Change Username");
                }
            }
        })
    });
});