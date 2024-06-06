const stopwatch = document.getElementById("stopwatch"),
start = document.getElementById("start"),
stp = document.getElementById("stop"),
lap = document.getElementById("lap"),
reset = document.getElementById("reset"),
laps = document.getElementById("laps");

let hrs=0,
mins=0,
sec=0,
ms=0,
timeInterval;


start.onclick= () => {
    timeInterval=setInterval(()=>{
        ms++
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            mins++;
            sec=0;
        }
        if(mins==60){
            hrs++;
            mins=0;
        }
        stopwatch.innerHTML = ` ${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    },10);
    start.setAttribute("style", "display:none");
    stp.setAttribute("style", "display:block");
    lap.setAttribute("style", "display:block");
    reset.setAttribute("style", "display:none");
    lap.removeAttribute("disabled");
};

const zeroPad=(num)=>{
    return String(num).padStart(2,"0");
}

stp.onclick= () => {
    clearInterval(timeInterval);
    reset.setAttribute("style", "display:block");
    lap.setAttribute("style", "display:none");
    stp.setAttribute("style", "display:none");
    start.setAttribute("style", "display: block");
    start.innerHTML="Resume"
};
let count=0;
lap.onclick= () => {
    count++;
    let li=document.createElement("li");
    li.innerHTML = ` ${ + count + " "} . ${zeroPad(hrs)}:${zeroPad(mins)}:${zeroPad(sec)}:${zeroPad(ms)}`;
    laps.appendChild(li);
    laps.scroll({top:laps.scrollHeight,behavior: "smooth"});
};

reset.onclick= () => {
    hrs=mins=sec=ms=count=0;
    laps.innerHTML= "";
    clearInterval(timeInterval);
    stopwatch.innerHTML="00:00:00:00";

    start.innerHTML="Start";
    lap.setAttribute("style","display:block");
    lap.setAttribute("disabled",true);
    start.setAttribute("style","display:block");
    reset.setAttribute("style","display:none");
    stp.setAttribute("style","display:none");
};