addEventListener("load", init, false);

function init() {
    let mylanguages = document.getElementById("myDropdown");

    mylanguages.innerHTML = (
        '<a class="l1" href="../en/underconstruction.html">Dansk</a>' +
        '<a class="l2" href="../en/underconstruction.html">Deutsch</a>' +
        '<a class="l3" href="../en/FlistEn.html">English</a>' +
        '<a class="l4" href="../en/underconstruction.html">Français</a>' +
        '<a class="l5" href="../en/underconstruction.html">Čeština</a>' +
        '<a class="l6" href="../en/underconstruction.html">Nederlands</a>' +
        '<a class="l7" href="../en/underconstruction.html">Polski</a>');

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