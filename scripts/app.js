import{datajson} from "./functions.js";
let dailytextBTN=document.getElementById("daily");
let weeklytextBTN=document.getElementById("weekly");
let monthlytextBTN=document.getElementById("monthly");
let workhrsTxt=document.getElementById("work-hrs");
let previoushoursworkTXT=document.getElementById("previous-hrs");
let playhrsTXT=document.getElementById("play-hrs");
let playprevious=document.getElementById("previous-play-hrs");
let studyhrsTXT=document.getElementById("study-hrs");
let studyprevious=document.getElementById("study-previous-hrs");
let exercisehrsTXT=document.getElementById("Excercise-hrs");
let exerciseprevious=document.getElementById("Excercise-previous-hrs");
let socialhrsTXT=document.getElementById("social-hrs");
let socialprevious=document.getElementById("Social-previous-hrs");
let selfcarehrsTXT=document.getElementById("self-care-hrs");
let selfcareprevious=document.getElementById("self-care-previos-hrs");


dailytextBTN.addEventListener('click',function(){
    workhrsTxt.innerText=datajson[0].timeframes.daily.current+"hrs";
    previoushoursworkTXT.innerText="Last Week - "+datajson[0].timeframes.daily.previous+"hrs";
    playhrsTXT.innerText=datajson[1].timeframes.daily.current+"hrs";
    playprevious.innerText="Last Week - "+datajson[1].timeframes.daily.previous+"hrs";
    studyhrsTXT.innerText=datajson[2].timeframes.daily.current+"hrs";
    studyprevious.innerText="Last Week - "+datajson[1].timeframes.daily.previous+"hrs";
    exercisehrsTXT.innerText=datajson[3].timeframes.daily.current+"hrs";
    exerciseprevious.innerText="Last Week - "+datajson[3].timeframes.daily.previous+"hrs";
    socialhrsTXT.innerText=datajson[4].timeframes.daily.current+"hrs";
    socialprevious.innerText="Last Week - "+datajson[4].timeframes.daily.previous+"hrs";
    selfcarehrsTXT.innerText=datajson[5].timeframes.daily.current+"hrs";
    selfcareprevious.innerText="Last Week - "+datajson[5].timeframes.daily.previous+"hrs";
    dailytextBTN.style.color="white";
})
weeklytextBTN.addEventListener('click',function(){
    workhrsTxt.innerText=datajson[0].timeframes.weekly.current+"hrs";
    previoushoursworkTXT.innerText="Last Week - "+datajson[0].timeframes.daily.previous+"hrs";
    playhrsTXT.innerText=datajson[1].timeframes.daily.current+"hrs";
    playprevious.innerText="Last Week - "+datajson[1].timeframes.daily.previous+"hrs";
    studyhrsTXT.innerText=datajson[2].timeframes.daily.current+"hrs";
    studyprevious.innerText="Last Week - "+datajson[1].timeframes.daily.previous+"hrs";
    exercisehrsTXT.innerText=datajson[3].timeframes.daily.current+"hrs";
    exerciseprevious.innerText="Last Week - "+datajson[3].timeframes.daily.previous+"hrs";
    socialhrsTXT.innerText=datajson[4].timeframes.daily.current+"hrs";
    socialprevious.innerText="Last Week - "+datajson[4].timeframes.daily.previous+"hrs";
    selfcarehrsTXT.innerText=datajson[5].timeframes.daily.current+"hrs";
    selfcareprevious.innerText="Last Week - "+datajson[5].timeframes.daily.previous+"hrs";
})
monthlytextBTN.addEventListener('click',function(){
    
})
