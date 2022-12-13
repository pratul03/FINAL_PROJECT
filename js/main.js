function validationUser()
{
    var user_name=document.getElementById("firstname").value;
    var last_name=document.getElementById("lastname").value;
    var email=document.getElementById("Email").value;
    var pass=document.getElementById("Password").value;
    var con_pass=document.getElementById("ConfirmPassword").value;
    var phn=document.getElementById("Phone").value;
    if (user_name!='') {
        if (last_name!='') {
            if (email!='') {
                if (pass!='') {
                    if (con_pass!='') {
                        if (pass==con_pass) {
                            if (phn!='') {
                                alert("Log in Successful")
                                document.getElementById("f_alert").style.display='none';
                            } else {
                                document.getElementById("ph_alert").style.display='block';
                                // alert("Enter your Phone Number")
                            }
                        } else {
                            document.getElementById("f_alert").style.display='block';
                            // alert("Confirm Password Does'nt matched")
                        }
                    } else {
                        // alert("Confirm your Password")
                        document.getElementById("cps_alert").style.display='block';
                    }
                } else {
                    // alert("Enter your Password")
                    document.getElementById("ps_alert").style.display='block';
                }
            } else {
                // alert("Enter your Email")
                document.getElementById("m_alert").style.display='block';
            }
        } else {
            document.getElementById("ln_alert").style.display='block';
            // alert("Enter your Last Name")
        }
    } else {
        document.getElementById("fn_alert").style.display='block';
        // alert("Enter your First Name")
    }
}