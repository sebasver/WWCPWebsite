addEventListener("load", init, false);

function init() {

    let downloads = document.getElementById("downloads");

    downloads.innerHTML = downloads.innerHTML +

        '<section class="links">' +
        '<h3>WWCP downloads</h3>' +
        '<figure><a href="https://www.curseforge.com/minecraft/mc-mods/world-wide-content-pack"><img src="../../media/images/icons/curseforge.jpg" alt="WWCP link">' +
        '<figcaption>WWCP Pre-Alpha</figcaption></a></figure>' +
        '</section>' +
        '<section class="links">' +
        '<h3>Trains in Motion</h3>' +
        '<figure><a href="https://gitlab.com/EternalBlueFlame/trains-in-motion"><img src="../../media/images/icons/gitlab.png" alt="TiM link">' +
        '<figcaption>Trains in Motion</figcaption></a></figure>' +
        '</section>' +
        '<section class="links">' +
        '<h3>Partner Contentpacks</h3>' +
        '<figure><a href="http://tramsim.eu/"><img src="../../media/images/icons/tramsIM.png" alt="TramsIM link">' +
        '<figcaption>TramsIM</figcaption></a></figure>' +
        '<figure><a href="http://tramsim.eu/bap.html"><img src="../../media/images/icons/bap.png" alt="BAP link">' +
        '<figcaption>BAP</figcaption></a></figure>' +
        '<figure><a href=""><img src="../../media/images/icons/discord.png" alt="BAP link">' +
        '<figcaption>TCM+</figcaption></a></figure>' +
        '</section>' +
        '<section class="links">' +
        '<h3>Partner Servers</h3>' +
        '<p>Apply now at our discord to become a partner server!</p>'+
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
        '.links figure{margin: 20px 10px 20px 10px}' +
        '.links figure a{text-decoration: none; color: #EAF0CE}' +
        '</style>' +
        '</section>';
}