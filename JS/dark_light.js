let btn = document.getElementById("dark_light_btn");
btn.addEventListener('click', changer_mode);

function changer_mode() 
{
    let body = document.getElementById("body");
    if(body.getAttribute("data-theme")=="light")
    {
        body.setAttribute("data-theme", "dark");
        btn.innerHTML = "Go light";
    }
    else
    {
        body.setAttribute("data-theme", "light");
        btn.innerHTML = "Go dark";
    }
}
