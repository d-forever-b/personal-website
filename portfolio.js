const photoContainer = document.querySelector(".photo-container");
const horiContainer = document.querySelector(".horizontal-photos");
const vertContainer = document.querySelector(".vertical-photos");
const hori1 = document.querySelector(".h-photo1");
const hori2 = document.querySelector(".h-photo2");
const hori3 = document.querySelector(".h-photo3");
const vert1 = document.querySelector(".v-photo1");
const vert2 = document.querySelector(".v-photo2");
const vert3 = document.querySelector(".v-photo3");
//let isLoading = false;
var horNum = 0;
var verNum = 0;

/* 
const photos = [
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-ybCJDZr1jVLbcxKZMNO0q1Y6rdpkjOpyLDyoBjb_TlUvoXIL1JwKCfzeBvRN0YXimKWNQuIomo3eQ3M43nQpiWPCR-mg=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-zqCsQzTOSx3LthwQ_tnFmVzrpPq91MFAU4hJxRvnPULkiPMe29ytovardVrlqzInjqiv8-wsmnQ2E_nomkGD5NyJ82cQ=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-znonSWaHRZW3WXr1GyvTEC5XVRFLjWUdFoStiBDnsWgcg08oLBNk2vByQR6euDo15knGnULnG4XL40G37YXbaVZAaL=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-xMApsSrcmBMzLPGesT4-FRiRl1QoNo1EzjG3BdmcLm_5pENSX4YGaW2XArW8ZNvo0LPLBIPhACkt6lBeAWe1aL3ONHiA=s1600"
    
];
*/

const horiPhotos = [
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-ybCJDZr1jVLbcxKZMNO0q1Y6rdpkjOpyLDyoBjb_TlUvoXIL1JwKCfzeBvRN0YXimKWNQuIomo3eQ3M43nQpiWPCR-mg=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-zqCsQzTOSx3LthwQ_tnFmVzrpPq91MFAU4hJxRvnPULkiPMe29ytovardVrlqzInjqiv8-wsmnQ2E_nomkGD5NyJ82cQ=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-xMApsSrcmBMzLPGesT4-FRiRl1QoNo1EzjG3BdmcLm_5pENSX4YGaW2XArW8ZNvo0LPLBIPhACkt6lBeAWe1aL3ONHiA=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-xoPYB-a2h0ByEou2QfEvNXhVMsVaRO8FxVHp22XxRS25qYrv2wBP7JPxo7OpF2s1SijJiEr-mpOHtpxHT-4_911uz1=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-znFx2Ws5Ei2aV5lAH3boVVgXEBSVVWsE4x0eCC0eHVTCowaTJlQ2lKJ9vPxJ8sAHuNxTUB1IEZEwkiIZKL-FGvl4GE0w=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-xoPYB-a2h0ByEou2QfEvNXhVMsVaRO8FxVHp22XxRS25qYrv2wBP7JPxo7OpF2s1SijJiEr-mpOHtpxHT-4_911uz1=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-ymgiNm94BxyS07Dq8wrfLE96KAo2rxM4qn24I-8E3GNdz_NNeBfZsKyHTnsR6sA-sjARBnNHdU6Lrs4A2zymumwiuR3Q=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-z4xxAgnLK26Hrhp-lcfV82Fn2_a2yOkknRkeHdNWZZcIEprzfCjsGWumcPLDlhWAvr0XdbfrICGyZg66aCdklAa4oNIw=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-xdMWH3OpTDQteml7fF4wdgjgiEFDgr4w_IQTKDi_LQgeLXjzj--0KLZe4x3cm8xE4Z6ZTQkl3_B2RhILnKlpF_Se5SoQ=s1600"
];
const vertPhotos = [
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-znonSWaHRZW3WXr1GyvTEC5XVRFLjWUdFoStiBDnsWgcg08oLBNk2vByQR6euDo15knGnULnG4XL40G37YXbaVZAaL=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-x02S9PSApHSJ3ilGRzXDu2h3dSh39IayRYIFBbgyvD_4I-qkimmtOK6XLFWd-bgoHzP6xaAJS0A-pr40_cT-geYQAQ=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-z6F8YhfkEewk5cfcT6cJanAgcgF7bFkbBPUYj0X39Cc8b_YtcL4XfYifUCz8OKxBK7l_sRNknJmQGMnXof-ZjIDFEtnw=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-wWHKeK584kaITDMS14cCJIcfA53sDVeFCEdXtRs-YRYRBh6CWDzz91di1GodyHIT0rHBJHOLvjZ9aDMr5ofWwRHzX1aw=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-x-qxX2MdiNiPyq01m7yMhVek0ht2yjirLKMa3XAvKPTEf1wyDmJXHSBwTvd0NttDIs5DPIidFbDzJGUN3nPTaa5RJyrw=s1600",
    "https://lh3.googleusercontent.com/drive-viewer/AITFw-zCmS8Lj86vzhjqIdFk24riMpI6vr_I4pjPrRRXxhd9k1O3BmWISElYNN0zKP_fiJPHugy6O1tVpKHHV0b-LyUUAVw_=s1600"
];

function loadPhotos() {
    if(horNum < 0){
        horNum = horiPhotos.length - (Math.abs(horNum) % horiPhotos.length);
    }
    if(verNum < 0){
        verNum = vertPhotos.length - (Math.abs(verNum) % vertPhotos.length);
    }
    fadeIn(hori1);
    fadeIn(hori2);
    fadeIn(hori3);
    fadeIn(vert1);
    fadeIn(vert2);
    fadeIn(vert3);
    hori1.src = horiPhotos[(horNum % horiPhotos.length)];
    hori2.src = horiPhotos[((horNum + 1) % horiPhotos.length)];
    hori3.src = horiPhotos[((horNum + 2) % horiPhotos.length)];
    vert1.src = vertPhotos[(verNum % vertPhotos.length)];
    vert2.src = vertPhotos[((verNum + 1) % vertPhotos.length)];
    vert3.src = vertPhotos[((verNum + 2) % vertPhotos.length)];
    /* 
    photos.forEach(photo => {
        const photoElement = document.createElement("div");
        photoElement.classList.add("photo");

        const img = document.createElement("img");
        img.src = photo;
        img.alt = "Portfolio Photo";

        photoElement.appendChild(img);
        photoContainer.appendChild(photoElement);
    });
    */
}
/* 
horiContainer.addEventListener("wheel", horiScroll);
vertContainer.addEventListener("wheel", vertScroll);

function horiScroll(event){
    if(event.deltaY > 0){
        horNum += 3;
    }
    else{
        horNum -= 3;
    }
}

function vertScroll(event){
    if(event.deltaY > 0){
        verNum += 3;
    }
    else{
        verNum -= 3;
    }
}
*/

loadPhotos();

window.addEventListener("scroll", scrollAction, false);
function scrollAction(event){
    if(event.deltaY > 0){
        horNum += 3;
        verNum += 3;
    }
    else{
        horNum -= 3;
        verNum -= 3;
    }
    loadPhotos();
}

function fadeIn(element){
    setInterval(function() {
        var opacity = element.style.opacity;
        if (opacity < 100) {
            opacity += 1;
            element.style.opacity = opacity;
        }
    }, 50);
}
function fadeOut(element){
    setInterval(function() {
        var opacity = element.style.opacity;
        if (opacity > 0) {
            opacity -= 1;
            element.style.opacity = opacity;
        }
    }, 50);
}

/* 
window.addEventListener("scroll", () => {
    const scrollOffset = 100; // Adjust as needed
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - scrollOffset;

    if (isAtBottom && !isLoading) {
        // isLoading = true;
        // Simulate loading delay
        setTimeout(() => {
            loadPhotos();
            isLoading = false;
        }, 1000);
    }
});
*/


