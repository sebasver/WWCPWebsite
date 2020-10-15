addEventListener("load", init, false);

function init(){
    let mynavbar = document.getElementById("menu");

    mynavbar.innerHTML = mynavbar.innerHTML +
        '<ul>'+
        '<li class="one"><a href="../en/underconstruction.html">Dom</a></li>\n'+
        '<li class="two"><a href="../en/underconstruction.html">Pobieranie</a></li>\n'+
        '<li class="three"><a href="../en/underconstruction.html">Nasza historia</a></li>\n'+
        '<li class="four"><a href="../en/underconstruction.html">Zrzuty ekranu</a></li>\n'+
        '<li class="five"><a href="../en/underconstruction.html">Lista lokomotyw</a></li>\n'+
        '<li class="six"><a href="../en/underconstruction.html">Lista samochodów osobowych</a></li>\n'+
        '<li class="seven"><a href="../en/underconstruction.html">ista samochodów ciężarowych</a></li>\n'+
        '</ul>\n' +
        '<style>\n' +
        '.one {background-color: #650166;}\n' +
        '.two {background-color: #590766;}\n' +
        '.three {background-color: #4E0C66;}\n' +
        '.four {background-color: #421266;}\n' +
        '.five {background-color: #371765;}\n' +
        '.six {background-color: #2B1D65;}\n' +
        '.seven {background-color: #212365;}\n' +
        '</style>'

    let mydiscord = document.getElementById("discordtext");

    mydiscord.innerHTML = mydiscord.innerHTML+
        '<img src="../../media/images/logo/discordLogo.png" alt="">'+
        '<p>World Wide <br> Content Pack <br>TIM</p>'+
        '<a href="https://discord.gg/FVVAEpS"><button class="join" style="cursor:pointer">Join</button></a>'+
        '<style> div.discord section{align-content: center;text-align: center;background-color: #4b4d52;padding: 10px;margin-right: 10px;margin-left: 10px;border-radius: 10px 10px;}' +
        'div.discord section div p{padding: 0;}' +
        'button.join, button.join:hover{padding: 20px 40px 20px 40px;font-size: 1em;color: white;border-radius: 10px 10px;background-color: #43B581;border: none;}' +
        '</style>';

}