/////////////////////
// Color Theme toggle

document.getElementById("themeToggle").addEventListener("click",toggleTheme);
document.documentElement.setAttribute('data-theme', 'light');

function toggleTheme(){
    checked = document.getElementById("themeToggle").checked;
    if(checked){
    document.documentElement.setAttribute('data-theme', 'dark');
    }else{
    document.documentElement.setAttribute('data-theme', 'light');
    }
}