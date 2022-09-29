// logo

logo = document.querySelectorAll('.logo')[0];
logo.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b4347494-bc1a-4a9d-87af-8b3dcba44824/dccakw7-85edd7da-ac27-40f8-9848-fcc2e94db738.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYjQzNDc0OTQtYmMxYS00YTlkLTg3YWYtOGIzZGNiYTQ0ODI0XC9kY2Nha3c3LTg1ZWRkN2RhLWFjMjctNDBmOC05ODQ4LWZjYzJlOTRkYjczOC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.X0YgxePvNAw2SKduaPV25EUU5lTvNrXzt_jt84FF4xg';
logo.style.display = 'block';
logo.style.margin = '65px auto 15px auto';
logo.style.width = '500px';
logo.style.animation = 'floating 4s ease-in-out infinite';
logo.style.animationDelay = '0.4s';

// moves UI

movestitle = document.createElement("h3");
movestitle.setAttribute("class", "title");
movestitle.style.marginTop = '50px';
movestitle.innerHTML = 'MOVES';
movestitle.style.color = 'white';
movestitle.style.textAlign = 'center';
movestitle.style.animation = 'floating 4s ease-in-out infinite';
movestitle.style.animationDelay = '0.3s';
document.getElementsByClassName('moves')[0].appendChild(movestitle);

movesbox = document.createElement("div");
movesbox.setAttribute("class", "box");
movesbox.style.marginTop = '10px';
movesbox.style.width = '100px';
movesbox.style.animation = 'floating 4s ease-in-out infinite';
movesbox.style.animationDelay = '0.3s';
document.getElementsByClassName('moves')[0].appendChild(movesbox);

click = document.createElement("p");
click.setAttribute("class", "click");
document.getElementsByClassName('box')[0].appendChild(click);

movestext = document.getElementsByClassName('click')[0];
movestext.innerHTML = '0';
movestext.style.color = 'white';
movestext.style.textAlign = 'center';
movestext.style.padding = '15px 0px';
movestext.style.fontSize = '25px';

// timer UI

timertitle = document.createElement("h3");
timertitle.setAttribute("class", "title");
timertitle.style.marginTop = '50px';
timertitle.innerHTML = 'TIMER';
timertitle.style.color = 'white';
timertitle.style.textAlign = 'center';
timertitle.style.animation = 'floating 4s ease-in-out infinite';
timertitle.style.animationDelay = '0.3s';
document.getElementsByClassName('timer')[0].appendChild(timertitle);

timerbox = document.createElement("div");
timerbox.setAttribute("class", "box2");
timerbox.style.marginTop = '10px';
timerbox.style.width = '135px';
timerbox.style.animation = 'floating 4s ease-in-out infinite';
timerbox.style.animationDelay = '0.3s';
document.getElementsByClassName('timer')[0].appendChild(timerbox);

time = document.createElement("p");
time.setAttribute("class", "time");
document.getElementsByClassName('box2')[0].appendChild(time);

timertext = document.getElementsByClassName('time')[0];
timertext.innerHTML = '00:00';
timertext.style.color = 'white';
timertext.style.textAlign = 'center';
timertext.style.padding = '15px 0px';
timertext.style.fontSize = '25px';

// back-card image

for (i = 0; i < 18; i++) {
    document.querySelectorAll('.game-back-card')[i].src = 'https://pbs.twimg.com/profile_images/573984336271122432/k8vEBoCW.jpeg';
}