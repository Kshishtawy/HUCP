function mm(){
    document.getElementById('mm').innerHTML='1988: Bradshaw Lecture, Royal College of Physicians. It was held in Sheffield.'
}
function  myFuncation(){
    var txt;
    if(confirm("Above there are important links about Dr.magdi yacoub!"))
    {
       txt="he was appointed rotating surgical senior registrar to the National Heart and Chest Hospitals where he worked with cardiothoracic surgeon Donald Ross. Here, they worked on repairing heart valves in people with severe valvular heart disease and heart failure.Four of their cases, operated on between December 1965 and October 1967, were reported on in the British Medical Journal (1968) in an article titled Too ill for cardiac surgeryThree had severe aortic valve disease and one had rheumatic heart disease with multiple affected valves";
    }
    else
    {
        txt="it is very important !";
    }
    document.getElementById("yes").innerHTML = txt;
}