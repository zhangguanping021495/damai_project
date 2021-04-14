
window.onload = setInterval(function(){
    let img = document.getElementsByClassName('imgdown');
    let time = [];
    let current = +new Date();
    let future = +new Date('2021/1/1 00:00:00');
    let countDown = (future - current) / 1000;
    let day = Math.floor(countDown / 60 / 60 / 24);
    day = day < 10 ? '0' + day : day;
    time[0] = day.toString().charAt(0);
    time[1] = day.toString().charAt(1);
    let h = Math.floor(countDown / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    time[2] = h.toString().charAt(0);
    time[3] = h.toString().charAt(1);
    let m = Math.floor(countDown / 60 % 60);
    m = m < 10 ? '0' + m : m;
    time[4] = m.toString().charAt(0);
    time[5] = m.toString().charAt(1);
    let s = Math.floor(countDown % 60);
    s = s < 10 ? '0' + s : s;
    time[6] = s.toString().charAt(0);
    time[7] = s.toString().charAt(1);
    time.forEach((item, index) => {
        img[index].src = "./img/countdown/" + item + ".png";
    })
    
},1000); 


