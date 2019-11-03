//用户名
var usernameRegex = /^\w{6,12}$/;
//密码
var passwordRegex = /^\w{6,12}$/;
//邮箱
var emailRegex = /^\w+@\w+(\.\w+)+$/;
//手机
var phoneRegex = /0?(13|14|15|18|17)[0-9]{9}/;


function validateForm() {
    var flag = true;
    //验证用户名
    var usernameNode = byId("username");
    var username = usernameNode.value;
    if(!usernameRegex.test(username)){
        byId("username").style.color = "red";
        flag = false ;
    }
    //验证密码
    var passwordNode = byId("userPassword");
    var password = passwordNode.value;
    if(!passwordRegex.test(password)){
        byId("userPassword").style.color = "red";
        flag = false;
    }
    //确认密码
    var rePasswordNode = byId("userRePassword");
    var rePassword = rePasswordNode.value;
    if(!password == rePassword){
        byId("userRePassword").style.color = "red";
        flag = false;
    }else if (!passwordRegex.test(rePassword)){
        byId("userRePassword").style.color = "red";
        flag = false;
    }else{
        byId("userRePassword").style.color = "gree";
    }
    //验证邮箱
    var emailNode = byId("userEmail");
    var email = emailNode.value;
    if(!emailRegex.test(email)){
        byId("userEmail").style.color = "red";
        flag = false
    }
    //验证手机
    var phoneNode = byId("userPhone");
    var phone = phoneNode.value;
    if (!phoneRegex.test(phone)){
        byId("userPhone").style.color = "red";
        flag = false
    }
    return flag;
}
function byId(id) {
    return document.getElementById(id);
}
function checkUsername(node) {
    var username = node.value;
    if(!usernameRegex.test(username)){
        byId("username").style.color = "red";
    }else {
        byId("username").style.color = "green";
    }
    
}
function checkPassword(node) {
    var userRePassword = node.value;
    if (!passwordRegex.test(userRePassword)){
        byId("userPassword").style.color = "red";
    }else {
        byId("userPassword").style.color = "green";
    }

}
function checkRePassword(node) {
     var rePassword = node.value;
     var password = byId("userRePassword").value;
     if(!password == rePassword){
         byId("userRePassword_span").style.color = "red";
     }else if (!passwordRegex.test(rePassword)){
         byId("userRePassword_span").style.color = "red";
     }else {
         byId("userRePassword_span").style.color = "green";
     }
}
function checkEmail(node) {
    var email = node.value;
    if(!emailRegex.test(email)){
        byId("userEmail").style.color = "red";
    }else{
        byId("userEmail").style.color = "green";
    }


}
function checkPhone(node) {
    var phone = node.value;
    if (!passwordRegex.test(phone)){
        byId("userPhone").style.color = "red";
    }else {
        byId("userPhone").style.color = "green";
    }
}

