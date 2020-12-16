/////////////////////
// Color Theme toggle

document.getElementById("theme").addEventListener("click",toggleTheme);
document.documentElement.setAttribute('data-theme', 'light');

function toggleTheme(){
    checked = document.getElementById("theme").checked;
    if(checked){
    document.documentElement.setAttribute('data-theme', 'dark');
    }else{
    document.documentElement.setAttribute('data-theme', 'light');
    }
}