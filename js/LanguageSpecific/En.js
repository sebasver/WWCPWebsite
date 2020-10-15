addEventListener("load", init, false);
function init() {
    let mynavbar = document.getElementById("menu");

    mynavbar.innerHTML = mynavbar.innerHTML +
        '<ul>' +
        '<li class="one"><a href="homeEn.html">Home</a></li>' +
        '<li class="two"><a href="downloadsEn.html">Downloads</a></li>' +
        '<li class="three"><a href="historyEn.html">Our history</a></li>' +
        '<li class="four"><a href="screensEn.html">Screenshots</a></li>' +
        '<li class="five"><a href="ContentCreationEn.html">Content creation guidelines</a></li>' +
        '<li class="six"><a href="LlistEn.html">Locomotive list</a></li>' +
        '<li class="seven"><a href="PlistEn.html">Passenger Car list</a></li>' +
        '<li class="eight"><a href="FlistEn.html">Freight Car list</a></li>' +
        '</ul>' +
        '<style>' +
        '.one {background-color: #610366;}' +
        '.two {background-color: #590767;}' +
        '.three {background-color: #500B66;}' +
        '.four {background-color: #480F65;}' +
        '.five {background-color: #3F1365;}' +
        '.six {background-color: #371866;}' +
        '.seven {background-color: #2E1C65;}' +
        '.eight {background-color: #242165 ;}' +
        '</style>';

    let mydiscord = document.getElementById("discordtext");

    mydiscord.innerHTML = mydiscord.innerHTML +
        '<img src="../../media/images/logo/discordLogo.png" alt="">' +
        '<p>World Wide Content Pack TIM</p>' +
        '<a href="https://discord.gg/FVVAEpS"><button class="join" style="cursor:pointer">Join</button></a>' +
        '<style> div.discord section{align-content: center;text-align: center;background-color: #4b4d52;padding: 10px;margin-right: 10px;margin-left: 10px;border-radius: 10px 10px;}' +
        'div.discord section div p{padding: 0;}' +
        'button.join, button.join:hover{padding: 20px 40px 20px 40px;font-size: 1em;color: white;border-radius: 10px 10px;background-color: #43B581;border: none;}' +
        '@media only screen and (max-width: 1200px){div.discord section{margin: auto;max-width:250px; width: auto%;}div.discord{align-content: center;}}' +
        '</style>';
}

