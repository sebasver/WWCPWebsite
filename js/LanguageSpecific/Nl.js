addEventListener("load", init, false);

function init(){
    let mynavbar = document.getElementById("menu");

    mynavbar.innerHTML = mynavbar.innerHTML +
        '<ul>'+
        '<li class="one"><a href="homeNl.html">Home</a></li>'+
        '<li class="two"><a href="../nl/downloadsNl.html">Downloads</a></li>'+
        '<li class="three"><a href="../nl/historyNl.html">Onze geschiedenis</a></li>'+
        '<li class="four"><a href="../nl/screensNl.html">Scherm afbeeldingen</a></li>'+
        '<li class="five"><a href="../nl/LlistNl.html">Lijst van locomotieven</a></li>'+
        '<li class="six"><a href="../nl/PlistNl.html">Lijst van passagiers wagons</a></li>'+
        '<li class="seven"><a href="../nl/FlistNl.html">Lijst van vrachtwagons</a></li>'+
        '</ul>' +
        '<style>' +
        '.one {background-color: #650166;}' +
        '.two {background-color: #590766;}' +
        '.three {background-color: #4E0C66;}' +
        '.four {background-color: #421266;}' +
        '.five {background-color: #371765;}' +
        '.six {background-color: #2B1D65;}' +
        '.seven {background-color: #212365;}' +
        '</style>';

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