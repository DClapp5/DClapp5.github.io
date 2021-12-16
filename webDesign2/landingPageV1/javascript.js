/* Days Until Christmas Countdown 3 
Powered by https://www.days-until-christmas.co.uk
Free to use as long as this notice is kept in place.
Created: 17/04/2010
Modified: 03/02/2018 */

document.write('<style>div#xcd3250{width:300px;height:220px;overflow:hidden;font-family:Verdana,Arial;cursor:pointer;background:#023006 url(https://www.days-until-christmas.co.uk/webcounts/imgs/xcd3.jpg);text-align:center;line-height:normal;position:relative;}div#xcd3250 div{font-weight:bold;color:#a00;position:absolute;left:0;width:100%;}div#xcd3250 a{font-size:14px;color:#f29c16;text-decoration:none;position:absolute;left:0;bottom:20px;width:100%;}</style>');
var t = new Date(),
    td = t.getDate(),
    tm = t.getMonth(),
    xy = t.getFullYear();
11 == tm && td > 25 && xy++;
var xd = new Date(xy, 11, 25),
    msd = 86400000,
    tl = (xd.getTime() - t.getTime()),
    dl = tl / msd,
    wdl = Math.ceil(dl),
    a = document.getElementById('xcda3250');
0 == wdl ? document.write("<div style='font-size:20px;left:3px;top:83px;'>Merry<br>Christmas!</div>") : 1 == wdl ? document.write("<div style='font-size:16px;left:3px;top:88px;'>It's<br>Christmas Eve!</div>") : document.write("<div style='font-size:36px;top:87px;'>" + wdl + "</div>");
(!a || a.href.indexOf("www.days-until-christmas.co.uk") < 0 || a.innerHTML.indexOf("Days Until Christmas") < 0) && (document.getElementById("xcd3250").innerHTML = "");