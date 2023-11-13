const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("Minutes");
const secondsEl = document.getElementById("Seconds");
const ampmEl = document.getElementById("ampm");


const updateClock = () =>{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h<10 ? "0" + h : h;
    m = m < 10 ? "0" + m: m;
    s = s < 10 ? "0" + s: s;
    hourEl.innerHTML = h;
    minutesEl.innerHTML = m;
    secondsEl.innerHTML = s;
    ampmEl, (innerText = ampm);
    setTimeout(()=>{
        updateClock()
    }, 1000)

}

updateClock()