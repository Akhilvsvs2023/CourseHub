function openLogin()
{
    window.location.href="login.html";
}
function logout()
{
    window.location.href="index.html";
}
function openJava()
{
    window.location.href="java.html";
}
function openPython()
{
    window.location.href="python.html";
}
function openCSharp()
{
    window.location.href="csharp.html";
}
function openCPlus()
{
    window.location.href="cplus.html";
}
function openHtml()
{
    window.location.href="html5.html";
}
function openCss()
{
    window.location.href="css.html";
}
function openJavaScript()
{
    window.location.href="javascript.html";
}
function openSap()
{
    window.location.href="sap.html";
}
function openReactJS()
{
    window.location.href="reactjs.html";
}
function openNodeJS()
{
    window.location.href="nodejs.html";
}
function openDjango()
{
    window.location.href="django.html";
}
function openCyber()
{
    window.location.href="cyber.html";
}
function loginHome()
{
    var uname = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(uname == 'admin@gmail.com' & password ==1234)
    {
        document.getElementById("form1").action="home.html";
    }
    else
    {
        document.getElementById("error").innerHTML='Username or Password is wrong.';
        return false;
    }
}
    var coursearray = new Array();
    var count=0;
function enroll(course)
{
    coursearray[count]=course;
    count++;
    var courses ="";
    for(var i=0;i<count;i++)
    {
        courses=courses+"\n"+coursearray[i];
    }
    var message="Congratulations! \nYou are successfully enrolled to following courses "+courses;
    alert(message);
}
function check()
{
    try
    {
    var urlname = window.location.search;
    var str = urlname.substring(1);
    var arr = str.split('&',3);
    var uname = arr[0].substring(arr[0].indexOf('=')+1);
    var password = arr[1].substring(arr[1].indexOf('=')+1);
    if(uname=='admin%40gmail.com'&password==1234)
    {
        alert("Welcome to CourseHub");
    }
    else
    {
        alert("Please login properly.");
        window.location.href="login.html";
    }
    }
    catch(err)
    {
        alert("Please login properly.");
        window.location.href="login.html";
    }
}