const days = document.querySelector("#days")
const hour = document.querySelector("#hours")
const minute = document.querySelector("#minutes")
const second = document.querySelector("#seconds")


function reloadtime(){
    const currentYear = new Date().getFullYear();
    const newYear = new Date(`January 1, ${currentYear+1} 00:00:00`);

    const currentDate = new Date();

    const diff = newYear - currentDate;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    days.innerHTML = d < 10 ? "0" + d : d;
    hour.innerHTML = h < 10 ? "0" + h : h;
    minute.innerHTML = m < 10 ? "0" + m : m;
    second.innerHTML = s < 10 ? "0" + s : s;

}

setInterval(reloadtime, 1000);