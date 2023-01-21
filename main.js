console.log(`%c
888       888          888 888          
888   o   888          888 888          
888  d8b  888          888 888          
888 d888b 888  .d88b.  888 888  .d88b.  
888d88888b888 d8P  Y8b 888 888 d88""88b 
88888P Y88888 88888888 888 888 888  888 
8888P   Y8888 Y8b.     888 888 Y88..88P 
888P     Y888  "Y8888  888 888  "Y88P"  

`+
`%c.d8888b.   888                  888 d8b         
d88P  Y88b 888                  888 Y8P         
Y88b.      888                  888             
 "Y888b.   888888 888  888  .d88888 888  .d88b. 
    "Y88b. 888    888  888 d88" 888 888 d88""88b
      "888 888    888  888 888  888 888 888  888
Y88b  d88P Y88b.  Y88b 888 Y88b 888 888 Y88..88P
 "Y8888P"   "Y888  "Y88888  "Y88888 888  "Y88P" 
`
 +`%c학생들이 세상을 구한다.
 
 
 
 `,
'color:#5dff68;font-family: "DungGeunMo";',
'color:#ffffff; background:#000000;font-family: "DungGeunMo";','font-family: "DungGeunMo"; font-size: 20px;');

var emit = 1000;
setInterval("getDday()", emit);
function getDday() {
    var today = new Date();
    var startDay = new Date(2022,06,29)
    var start = today.getTime() - startDay.getTime();

    var day = Math.ceil(start / (1000 * 60 * 60 * 24));
    document.getElementById("dday").innerHTML = day + "일";
};