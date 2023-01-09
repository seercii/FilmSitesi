const arrows=document.querySelectorAll(".arrow");
const movieLists=document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    let clickCounter=0;
    const imageItem=movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click",function(){
    if(imageItem-(5+clickCounter)>=0){
       
            clickCounter++;
            movieLists[i].style.transform=`translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
        
    }else{
        movieLists[i].style.transform="translateX(0)"
        clickCounter=0;
    }
});
});

/* dark mode */
const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container,.navbar,.menu-item,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title")
ball.addEventListener("click",function(){
    items.forEach((item)=>item.classList.toggle("active"));
})

const videoPlay=document.getElementById("playVd");
videoPlay.addEventListener('mouseenter',function(){
        let src1 = videoPlay.src;
        src1 +="?autoplay=1";
        videoPlay.src = src1;
       console.log(videoPlay.src);
})
videoPlay.addEventListener('mouseleave',function(){
    let src2 = videoPlay.src;
    let index = '?autoplay=1';
    let ind2 = src2.length;
    videoPlay.src = src2.substring(0,(ind2 - index.length));
})

const sercan = document.getElementById("Src");
const sercan1=document.getElementById("Src1");

sercan.addEventListener('mouseenter',function(){
    sercan.style.display="none";
    sercan1.style.display="block";
    console.log(sercan1);
   
})
sercan1.addEventListener('mouseleave',function(){
    sercan.style.display="block";
    sercan1.style.display="none";
    console.log("asdasd");
})

function iptal(){
    alert("Üzüldük");
    alert("sg");
    location="https://www.netflix.com/tr/";
}

function hulkyorumlar(){
    window.open("https://eksisozluk.com/the-incredible-hulk--53132");
}
function like(){
    alert("Bu filmi beğendim!");
}
function dislike(){
    alert("Bu filmi beğenmedim!");
}
function hulkwatch(){
    window.open("https://www.youtube.com/watch?v=Wr33YmDHbTw");
}

function gorayorumlar() {
    window.open("https://eksisozluk.com/g-o-r-a--92630");
}
function gorawatch() {
    window.open("https://www.youtube.com/watch?v=LhiFw_2EasE");
}

function facebook() {
    window.open("https://tr-tr.facebook.com/");
}

function instagram() {
    window.open("https://www.instagram.com");
}
function twitter() {
    window.open("https://twitter.com/login?lang=tr");
}
function darkyorum() {
    window.open("darkvideo.html");
}
function kayit() {
    location="kayitol.html";
}