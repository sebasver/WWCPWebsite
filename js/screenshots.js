addEventListener("load", screenshots, false);

function screenshots() {

    let profscreens = document.getElementById("profscreens");

    profscreens.innerHTML = profscreens.innerHTML +
        '<section>'+
        '<figure><a href="../../media/images/screenshots/wwcp/1.png"><img src="../../media/images/screenshots/wwcp/1.png" alt=""></a><figcaption>sebasver</figcaption></figure>' +
        '<figure><a href="../../media/images/screenshots/wwcp/2.png"><img src="../../media/images/screenshots/wwcp/2.png" alt=""></a><figcaption>sebasver</figcaption></figure>' +
        '<figure><a href="../../media/images/screenshots/wwcp/3.png"><img src="../../media/images/screenshots/wwcp/3.png" alt=""></a><figcaption>sebasver</figcaption></figure>' +
        '<figure><a href="../../media/images/screenshots/wwcp/4.png"><img src="../../media/images/screenshots/wwcp/4.png" alt=""></a><figcaption>sebasver</figcaption></figure>' +
        '<figure><a href="../../media/images/screenshots/wwcp/5.png"><img src="../../media/images/screenshots/wwcp/5.png" alt=""></a><figcaption>sebasver</figcaption></figure>' +
        '<figure><a href="../../media/images/screenshots/wwcp/6.png"><img src="../../media/images/screenshots/wwcp/6.png" alt=""></a><figcaption>sebasver</figcaption></figure>' +
        '<figure><a href="../../media/images/screenshots/wwcp/7.png"><img src="../../media/images/screenshots/wwcp/7.png" alt=""></a><figcaption>sebasver</figcaption></figure>' +
        '<figure><a href="../../media/images/screenshots/wwcp/8.png"><img src="../../media/images/screenshots/wwcp/8.png" alt=""></a><figcaption>sebasver</figcaption></figure>' +
        '<figure><a href="../../media/images/screenshots/wwcp/9.png"><img src="../../media/images/screenshots/wwcp/9.png" alt=""></a><figcaption>sebasver</figcaption></figure>' +
        '<style>' +
        '.prof{text-align: center}' +
        '.prof section{display:flex; flex-wrap:wrap; justify-content: center}' +
        '.prof figure{margin: 20px 10px 20px 10px}' +
        '.prof figure img{width: 270px;height: auto;}' +
        '</style>' +
        '</section>';

    let comscreens = document.getElementById("profscreens");

    comscreens.innerHTML = profscreens.innerHTML +
        '<section>'+
        '<style>' +
        '.com{text-align: center}' +
        '.com section{display:flex; flex-wrap:wrap; justify-content: center}' +
        '.com figure{margin: 20px 10px 20px 10px}' +
        '.com figure img{width: 270px;height: auto;}' +
        '</style>' +
        '</section>';

}