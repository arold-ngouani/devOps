
let myDate = () => {
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  let tranformDate = () => {
    let monArray = [month, hour, min, sec]
    monArray.forEach(x => x < 10 ? x = "0" + x : x);
  }

  tranformDate()

  let myFullDate = "Le " + day + "/" + month + "/" + year + "  " + hour + ":" + min + ":" + sec;
  return myFullDate;
}


setInterval(()=>{
  document.getElementById('date_p').innerHTML = myDate();
}, 1000);

