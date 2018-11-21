import { Component } from 'react';

export default class SiteByLev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pass: 0,
      firstRun: true,
    };
  }
  
  inputPass() {
    this.setState({pass: (this.state.pass + 1)});
    if (this.state.pass >= 4)
      recursiveTimeOut(easterEgg.bind(this), 555, 100500);
  }

  render = () => <div id="site-by-Lev">
    <p style={{display: "inline"}} onClick={() => this.inputPass()}>Сайт</p> — 
    <a href="http://vk.com/the_sociophobic" target="_blank"> Lev</a>
  </div>
}

const recursiveTimeOut = (func, ms, iterations = 1) => {
  if (iterations <= 0)
    return;
  setTimeout(() => {
    func();
    recursiveTimeOut(func, ms, iterations - 1);
  }, ms);
}

function easterEgg() {
  document.title = "each⠀(Нигилисты⠀=>⠀{ R 4 V E; });";
  var divs = ["div", "a", "b", "body", "header", "span", 'p', 'button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'small', 'li', 'img', 'button', 'article'];
  var pics = [
    /* COVERS */
    "http://pp.userapi.com/c636119/v636119299/3e95c/n1Hj3mLvM7g.jpg",
    "http://pp.userapi.com/c636119/v636119299/3e966/JiLln8wexCc.jpg",
    "http://pp.userapi.com/c837420/v837420530/1a55d/-74itzrBufg.jpg",
    "http://pp.userapi.com/c637420/v637420530/32886/smBJhI4k8ac.jpg",
    "http://sun9-3.userapi.com/c840522/v840522046/120e8/jLCz84TnvKg.jpg",
    "http://pp.userapi.com/c841237/v841237143/41422/DQvw5iq2i7U.jpg",
    "http://pp.userapi.com/c824200/v824200005/534d5/4fDD05fhxdU.jpg",
    "http://pp.userapi.com/c841637/v841637479/469f0/o3Z7A3S0XaM.jpg",
    "http://pp.userapi.com/c841637/v841637479/469e6/7FY2DNlEoh4.jpg",
    /* LOGOS */
    "http://pp.userapi.com/c851432/v851432308/a75d/ppf63WwN4eY.jpg",
    "http://pp.userapi.com/c638920/v638920299/138b1/D_oq44Zf-O8.jpg",
    "http://pp.userapi.com/c836320/v836320299/1a73b/YiFoZSrAd40.jpg",
    "http://pp.userapi.com/c637420/v637420530/32897/BowL7-CgJJI.jpg",
    "http://pp.userapi.com/c639322/v639322344/4e3e3/bK3C8o8SYk4.jpg",
    "http://pp.userapi.com/c841235/v841235626/36197/4Onpf3S2V3k.jpg",
    "http://pp.userapi.com/c834102/v834102738/3ab31/dQYKJ9rbrjI.jpg",
    "http://pp.userapi.com/c824504/v824504244/5d64e/07ZUDCkNceQ.jpg",
    /* ACID MEMES */
    "http://pp.userapi.com/c846218/v846218215/341bc/VLbbRhyWd5Q.jpg",
    "http://sun9-9.userapi.com/c840634/v840634722/71977/sd5TRwkfbD8.jpg",
    "http://pp.userapi.com/c604525/v604525089/58d6c/3Dg4lAj5R3g.jpg",
    "http://pp.userapi.com/c637520/v637520530/290b2/DjA9uFVgTfU.jpg",
    "http://pp.userapi.com/c637520/v637520089/5b4db/f2zBKmOZxw4.jpg",
    "http://pp.userapi.com/c638823/v638823530/1c87a/-CwT9e6_6Yk.jpg",
    "http://pp.userapi.com/c626829/v626829530/3f9ff/bDfQGlwUDWU.jpg",
    /* 3D MEMES */
    "http://pp.userapi.com/c848536/v848536066/903bf/y8uzAhveyDU.jpg",
    "http://pp.userapi.com/c848536/v848536066/903cf/Pzi9u_qb8ZA.jpg",
    "http://pp.userapi.com/c848536/v848536066/903c7/Wif9KDz3GlM.jpg",
    "http://pp.userapi.com/c848536/v848536066/903b7/tRoVw-a8moo.jpg",
    "http://pp.userapi.com/c846217/v846217252/71849/xLp_zL-UgbA.jpg",
    "http://pp.userapi.com/c824409/v824409691/18283c/yi0ysrVbyKc.jpg",
    "http://pp.userapi.com/c621705/v621705123/824a4/d5xIzWMJqjk.jpg",
    "http://pp.userapi.com/c846219/v846219293/3cd3a/TgrO6Dv-Fko.jpg",
    "http://sun9-1.userapi.com/c840723/v840723340/77116/Dx_ukyuqDXg.jpg",
    "http://pp.userapi.com/c846418/v846418754/17655/azRopPgo30E.jpg",
    "http://pp.userapi.com/c844721/v844721562/4aada/mzfQIVMOwG0.jpg",
    /* RELIGIOUS MEMES */
    "http://pp.userapi.com/c840327/v840327334/77188/VLm_diMG7Bg.jpg",
    /* COOL MEMES */
    "http://pp.userapi.com/c841332/v841332771/784bd/ZurztY1znRY.jpg",
    "http://sun9-8.userapi.com/c840535/v840535885/6d9ab/XkwcSGLl1KU.jpg",
    "http://pp.userapi.com/c824603/v824603194/68b00/DdJDvmZa_u0.jpg",
    "http://pp.userapi.com/c637720/v637720530/1ea48/XqOJVyAC1Wc.jpg",
    "http://pp.userapi.com/c637720/v637720530/1b682/lLWKSRxFR8Q.jpg",
    /* LIFE CHANGING MEMES */
    "http://pp.userapi.com/c852024/v852024421/1a209/Um3-JGwiAwk.jpg",
    "http://pp.userapi.com/c637520/v637520089/5b4af/pFAtApywPPo.jpg",
  ];

  if (this.state.firstRun) {
    var sound      = document.createElement('audio');
    sound.autoplay = "autoplay";
    sound.src      = 'https://tochkadostupa.spb.ru/img/rangers.mp3';
    sound.type     = 'audio/mp3';
    document.getElementById("site-by-Lev").appendChild(sound);
  }
  // this.setState({iterations: this.state.iterations + 1});

  if (this.state.firstRun)
  for (let i = 0; i < divs.length; i++) {
    let a = document.getElementsByTagName(divs[i]);
    for (let j = 0; j < a.length; j++) {
      // if (a[j].id == "footer")
      //   continue;
      if (!this.state.mobile && this.state.firstRun) {
        a[j].style.transition = "all " + (Math.random() * 120 + 25) + "s";
      }
      // if (this.state.firstRun || Math.random() < 0.15) {
      //   a[j].style.backgroundPosition = (Math.random() * 5000 - 2500) + "% " + (Math.random() * 2000 - 1000) + "%";
      // }
      if (!this.state.mobile && (this.state.firstRun || Math.random() < (this.state.iterations + 10) / (this.state.iterations + 50) * 0.25) && a[j].className != "content" && a[j].className != "container" && a[j].clientHeight < window.innerHeight * .95 && a[j].clientWidth < window.innerWidth * .95) {
        a[j].style.transform = "rotate(" + (Math.random() * 150 - 75) + "deg)";
      }
      if (this.state.firstRun || Math.random() < 0.1) {
        // a[j].style.fontSize = (Math.random() + 1) * 35 + "px";
        // a[j].padding = Math.random() * 205 + "px";

        a[j].style.opacity = 0.75 + Math.random() * 0.25;
      }
      if (Math.random() < 0.1 && !a[j].innerHTML.includes("mp3")) {
        a[j].innerHTML += 'Ничего нет';
      }
      if (this.state.firstRun || Math.random() < 0.35 && !a[j].innerHTML.includes("mp3")) {
        a[j].style.background = 'url(' + pics[Math.floor(Math.random() * pics.length)] + ')';
      }
      if (this.state.firstRun || Math.random() < .5) {
        // a[j].style.backgroundSize = Math.floor(Math.random() * 5 + 2) * 66 + 'px';
        a[j].style.backgroundSize = Math.floor(Math.random() * 12 + 1) * 66 + 'px';
      }
      if (Math.random() < .05 && a[j].clientHeight < window.innerHeight * .5 && a[j].clientWidth < window.innerWidth * .5) {
        // a[j].style.position = "relative";
        // a[j].style.top = Math.random() * 700 + "px";
        // a[j].style.margin = Math.random() * Math.random() * 200 + "px";
      }
    }
  }
  if (this.state.firstRun)
    this.setState({firstRun: false});
}
