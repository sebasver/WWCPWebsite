addEventListener("load", init, false);

function init() {

    let LocomotiveList = document.getElementById("LocomotiveList");
    LocomotiveList.innerHTML = LocomotiveList.innerHTML +
        '<table>' +
        '<tr><th></th><th>Name</th><th># Skins</th><th># Seats</th><th>Fuel Type</th></tr>'+
        '<tr><td><a href=""><img src="" alt=""></a></td><td>Class 37</td><td>Skins#</td><td>Seats#</td><td>Diesel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>Class 812</td><td>Skins#</td><td>Seats#</td><td>Steam</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>DB BR 01</td><td>Skins#</td><td>Seats#</td><td>Steam</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>DB BR 01 Neukessel</td><td>Skins#</td><td>Seats#</td><td>Steam</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>DB BR 01 Umbau</td><td>Skins#</td><td>Seats#</td><td>Steam</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>DB BR 01.10</td><td>Skins#</td><td>Seats#</td><td>Steam</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>DB BR 01.10 Neukessel</td><td>Skins#</td><td>Seats#</td><td>Steam</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>DB BR 01.10 Oil</td><td>Skins#</td><td>Seats#</td><td>Oil</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>DB BR 01.10 Streamlined</td><td>Skins#</td><td>Seats#</td><td>Steam</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>DR BR 01</td><td>Skins#</td><td>Seats#</td><td>Steam</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>DR BR 01.5</td><td>Skins#</td><td>Seats#</td><td>Steam</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>DR BR 01.5 SD</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>DR BR 01.10 Streamlined</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>DRG BR 01</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>DRG BR 01 (850mm)</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>DRG BR 01.10</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>DRG BR 01.10 Streamlined</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>ES64U2</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>ES64U4</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>F140 MS2E</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>F7A</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>GP7</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>GWR 9400</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>Köf III type 1</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>Köf III type 2</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>MZ I</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>MZ I (1967)</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>MZ II</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>MZ II (1970)</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>MZ III</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>MZ IV</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>Sentinel 100HP Christmas</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>Wehrmachtslokomotive WR360 C14</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>Wehrmachtslokomotive WR360 C14 Electric</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>Wehrmachtslokomotive WR360 C14 Kanzel</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '<tr><td><a href=""><img src="" alt=""></a></td><td>Name</td><td>Skins#</td><td>Seats#</td><td>Fuel</td></tr>' +
        '</table>';
}