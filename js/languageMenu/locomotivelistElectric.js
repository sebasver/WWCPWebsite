addEventListener("load", init, false);

function init() {
    let mylanguages = document.getElementById("myDropdown");

    mylanguages.innerHTML = (
        '<a class="l1" href="../da/LElistDa.html">Dansk</a>' +
        '<a class="l2" href="../de/LElistDe.html">Deutsch</a>' +
        '<a class="l3" href="../en/LElistEn.html">English</a>' +
        '<a class="l4" href="../fr/LElistFr.html">Français</a>' +
        '<a class="l5" href="../ce/LElistHu.html">Magyar</a>' +
        '<a class="l6" href="../nl/LElistNl.html">Nederlands</a>' +
        '<a class="l7" href="../pl/LElistPl.html">Polski</a>');

    let pastablein = document.getElementById("dropdownclass");
    pastablein.innerHTML = pastablein.innerHTML + '<style>' +
    '.l1{background-color:#650166;}' +
    '.l2{background-color:#590766;}' +
    '.l3{background-color:#4E0C66;}' +
    '.l4{background-color:#421266;}' +
    '.l5{background-color:#371765;}' +
    '.l6{background-color:#2B1D65;}' +
    '.l7{background-color:#212365;}' +
    '</style>';



}