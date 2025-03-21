function trial()
{
    document.write("Hell0");
}
function Nested(x)
{

if (x > 23)
    var y = x-24;
else 
y = x;
return y;

}

function TAIM()
{
    try 
    {
        var D = new Date();
       var NH = D.getHours();
       var hours = D.getHours() - 7;
       var minutes = D.getMinutes();
       var seconds = D.getSeconds();
       document.getElementById("CT").innerHTML = 'Current Time : ' + hours + ':' + minutes + ':' + seconds;

       var ATH = Nested(NH + 8);
      
       document.getElementById("AT").innerHTML = ' Time : ' + ATH + ':' + minutes + ':' + seconds;
       var SFH = Nested(hours - 5);
      
       document.getElementById("SFT").innerHTML = ' Time : ' + SFH + ':' + minutes + ':' + seconds;
       
       var TH = Nested(NH + 6);
      
       document.getElementById("TT").innerHTML = ' Time : ' + TH + ':' + minutes + ':' + seconds;
       var LH = Nested(NH - 3);
      
       document.getElementById("LT").innerHTML = ' Time : ' + LH + ':' + minutes + ':' + seconds;

       
       
       
       var t = setTimeout('TAIM()', 500);


    }
       
    catch(er)
    {
       document.write(er.description);
     
       
    }

   
     
    
}
function Buks()
{
    var x = document.getElementsByName("Buked");
    document.getElementById("buk").innerHTML = x;
}
