// Navbar berubah saat scroll
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Menu mobile
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Animasi saat halaman selesai dimuat
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

const targetDate = new Date("July 13, 2026 07:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const distance = targetDate - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/60000);

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("timer").innerHTML=

`${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;

},1000);

const slides=document.querySelectorAll(".slide");

let index=0;

setInterval(()=>{

slides[index].classList.remove("active");

index++;

if(index>=slides.length){

index=0;

}

slides[index].classList.add("active");

},5000);

async function loadData(){

const response = await fetch("data/data.json");

const data = await response.json();

loadStats(data.stats);

loadAgenda(data.schedule);

loadNews(data.news);

loadGallery(data.gallery);

loadAnnouncement(data.announcement);

}

loadData();

function loadStats(stats){

document.getElementById("stats").innerHTML=`

<div class="box">

<h2>${stats.students}+</h2>

<p>Siswa</p>

</div>

<div class="box">

<h2>${stats.teachers}</h2>

<p>Guru & Tendik</p>

</div>

<div class="box">

<h2>${stats.classes}</h2>

<p>Rombel</p>

</div>

<div class="box">

<h2>${stats.accreditation}</h2>

<p>Akreditasi</p>

</div>

`;

}

function loadAgenda(schedule){

let html="";

schedule.forEach(item=>{

html+=`

<div class="agenda">

<b>${item.time}</b>

${item.activity}

</div>

`;

});

document.getElementById("agenda").innerHTML=html;

}

function loadNews(news){

let html="";

news.forEach(item=>{

html+=`

<div class="news-card">

<img src="${item.image}">

<h3>${item.title}</h3>

<p>${item.date}</p>

</div>

`;

});

document.getElementById("news").innerHTML=html;

}

function loadGallery(images){

let html="";

images.forEach(img=>{

html+=`

<img src="${img}">

`;

});

document.getElementById("gallery").innerHTML=html;

}

function loadAnnouncement(data){

document.querySelector(".marquee-content").innerHTML=data.join(" • ");

}

function loadSchedule(day){

const jadwal=data.schedule[day];

let html="";

jadwal.forEach(item=>{

html+=`

<div class="agenda">

<b>${item.time}</b>

${item.activity}

</div>

`;

});

document.getElementById("scheduleContent").innerHTML=html;

}

document.querySelectorAll(".tab").forEach(btn=>{

btn.onclick=()=>{

document.querySelector(".tab.active").classList.remove("active");

btn.classList.add("active");

loadSchedule(btn.dataset.day);

};

document

.getElementById("searchNews")

.addEventListener("keyup",function(){

const keyword=this.value.toLowerCase();

document.querySelectorAll(".news-card").forEach(card=>{

card.style.display=

card.innerText.toLowerCase().includes(keyword)

?

"block"

:

"none";

});

function loadDownload(files){

let html="";

files.forEach(f=>{

html+=`

<a

href="${f.file}"

class="download-card"

target="_blank">

📄 ${f.title}

</a>

`;

});

document

.getElementById("download")

.innerHTML=html;

}

document

.querySelectorAll(".gallery img")

.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

};

});

lightbox.onclick=()=>{

lightbox.style.display="none";

};

window.onscroll=()=>{

topBtn.style.display=

window.scrollY>300

?

"block"

:

"none";

};

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

window.onload=()=>{

loader.style.display="none";

};

if("serviceWorker" in navigator){

navigator.serviceWorker.register("sw.js");

}

function loadProfile(profile){

let html=`

<h3>Visi</h3>

<p>${profile.vision}</p>

<h3>Misi</h3>

<ul>

`;

profile.mission.forEach(item=>{

html+=`<li>${item}</li>`;

});

html+="</ul>";

document.getElementById("profileContent").innerHTML=html;

}

function loadTeachers(data){

let html="";

data.forEach(g=>{

html+=`

<div class="teacher-card">

<img src="${g.photo}">

<h3>${g.name}</h3>

<p>${g.position}</p>

</div>

`;

});

document.getElementById("teachers").innerHTML=html;

}

};
});

});