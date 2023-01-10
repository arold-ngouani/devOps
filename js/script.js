
let myDate = () => {
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  let tranformDate = () => {
    if(month < 10) {
      month = "0" + month;
    }
    if(hour < 10) {
      hour = "0" + hour;
    }

    if(sec < 10) {
      sec = "0" + sec;
    }

  }

  tranformDate()

  let myFullDate = "Le " + day + "/" + month + "/" + year + "  " + hour + ":" + min + ":" + sec;
  return myFullDate;
}

let paragraphe = document.getElementById('date_p').innerHTML = myDate();
