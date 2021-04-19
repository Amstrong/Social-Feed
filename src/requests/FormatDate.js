export const FormatDate = () => {
  let currentTime = new Date();

//DAY
let day = currentTime.getDate()
let month = currentTime.getMonth() + 1
let year = currentTime.getFullYear()

//TIME
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let suffix = "AM";

if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
}

if (hours === 0) {
    hours = 12;
}

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

const FormatDate = `${day}/${month}/${year} ${hours}:${minutes} ${suffix}` 
return FormatDate
};
