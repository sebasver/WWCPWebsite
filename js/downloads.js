addEventListener("load", init, false);

function init() {

    let downloads = document.getElementById("downloads");

    downloads.innerHTML = downloads.innerHTML +
        '<section class="links">' +
        '<h3>Trains in Motion links</h3>' +
        '<figure><a href="https://github.com/EternalBlueFlame/Trains-In-Motion/releases"><img src="../../media/images/icons/github.png" alt="TiM link"><figcaption>Trains in Motion pre-alpha</figcaption></a></figure>' +
        '</section>' +
        '<section class="links">' +
        '<h3>WWCP downloads</h3>' +
        '<figure><a href="https://www.curseforge.com/minecraft/mc-mods/world-wide-content-pack/files"><img src="../../media/images/icons/curseforge.jpg" alt="TiM link"><figcaption>WWCP Press Teaser</figcaption></a></figure>' +
        '</section>' +
        '<section class="links">' +
        '<h3>World download links</h3>' +
        '<p>No Worlds up for download yet</p>' +
        '</section>' +
        '' +
        '' +
        '' +
        '' +
        '' +
        '<style>' +
        '.links{text-align: center}' +
        '.links section{display:flex; flex-wrap:wrap; justify-content: center}' +
        '.links figure{margin: 20px 10px 20px 10px}' +
        '.links figure a img{width: 100px;height: auto;}' +
        '.links figure a{text-decoration: none; color: #EAF0CE}' +
        '</style>' +
        '</section>';
}