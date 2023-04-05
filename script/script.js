let date = new Date();
let day_week = date.getDay() - 1;
const blocks = document.querySelectorAll('.block');
const start_lesson = ["12:05", "12:55", "13:45", 
    "14:40", "15:30", "16:20", "17:15"];

let active_day;

let time = date.getHours() + ":" + date.getMinutes();

if (day_week < 5) {
    blocks[day_week].classList.add('active-day');
    active_day = blocks[day_week];
}

const subjects = document.querySelectorAll('.active-day > .subject');


for (let i = 0; i < start_lesson.length; i++) {
    if (start_lesson[i] <= time) {
        subjects[i].classList.add("active-lesson");
        if (i != 0) {
            subjects[i - 1].classList.remove("active-lesson");
        }
    }
}