// locomotive
function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive()

// canvas function
function canvas(){
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  https://neverland.agency/assets/0001.6092bc89.webp
  https://neverland.agency/assets/0002.0d0eda63.webp
  https://neverland.agency/assets/0003.ca7b38f3.webp
  https://neverland.agency/assets/0004.4aace1a4.webp
  https://neverland.agency/assets/0005.11a84f1a.webp
  https://neverland.agency/assets/0006.53da3b21.webp
  https://neverland.agency/assets/0007.dbd27e9b.webp
  https://neverland.agency/assets/0008.a8723adf.webp
  https://neverland.agency/assets/0009.361e0ae1.webp
  https://neverland.agency/assets/0010.6562a56d.webp
  https://neverland.agency/assets/0011.57bbc8b2.webp
  https://neverland.agency/assets/0012.e8b861c0.webp
  https://neverland.agency/assets/0013.19f0aedd.webp
  https://neverland.agency/assets/0014.c218eb85.webp
  https://neverland.agency/assets/0015.7ce373ff.webp
  https://neverland.agency/assets/0016.7591480f.webp
  https://neverland.agency/assets/0017.568cdca0.webp
  https://neverland.agency/assets/0018.1771360f.webp
  https://neverland.agency/assets/0019.ca23f56c.webp
  https://neverland.agency/assets/0020.89b8a885.webp
  https://neverland.agency/assets/0021.912a0920.webp
  https://neverland.agency/assets/0022.98aef5b6.webp
  https://neverland.agency/assets/0023.8e6d8139.webp
  https://neverland.agency/assets/0024.360754d7.webp
  https://neverland.agency/assets/0025.59ac8ca9.webp
  https://neverland.agency/assets/0026.03dc177e.webp
  https://neverland.agency/assets/0027.f2fcc66f.webp
  https://neverland.agency/assets/0028.3c68eca5.webp
  https://neverland.agency/assets/0029.3830c1ca.webp
  https://neverland.agency/assets/0030.313c7bff.webp
  https://neverland.agency/assets/0031.ed19d3d0.webp
  https://neverland.agency/assets/0032.e5722575.webp
  https://neverland.agency/assets/0033.57e4fbbf.webp
  https://neverland.agency/assets/0034.26593155.webp
  https://neverland.agency/assets/0035.c478bb6e.webp
  https://neverland.agency/assets/0036.7617954b.webp
  https://neverland.agency/assets/0037.ff0d6e04.webp
  https://neverland.agency/assets/0038.454374f5.webp
  https://neverland.agency/assets/0039.6c849dce.webp
  https://neverland.agency/assets/0040.6d54db4b.webp
  https://neverland.agency/assets/0041.d17a75b5.webp
  https://neverland.agency/assets/0042.8e58519f.webp
  https://neverland.agency/assets/0043.a097a1c8.webp
  https://neverland.agency/assets/0044.1cd5291a.webp
  https://neverland.agency/assets/0045.7261d27f.webp
  https://neverland.agency/assets/0046.4a0fbc3a.webp
  https://neverland.agency/assets/0047.05927d38.webp
  https://neverland.agency/assets/0048.a7f3a34b.webp
  https://neverland.agency/assets/0049.4f784875.webp
  https://neverland.agency/assets/0050.3b1729e5.webp
  https://neverland.agency/assets/0051.4ba7db54.webp
  https://neverland.agency/assets/0052.46af8114.webp
  https://neverland.agency/assets/0053.122f3406.webp
  https://neverland.agency/assets/0054.67083a77.webp
  https://neverland.agency/assets/0055.63219e06.webp
  https://neverland.agency/assets/0056.293d230f.webp
  https://neverland.agency/assets/0057.b264bb1b.webp
  https://neverland.agency/assets/0058.4e6bbf2d.webp
  https://neverland.agency/assets/0059.4bad6714.webp
  https://neverland.agency/assets/0060.d0fd1dbc.webp
  https://neverland.agency/assets/0061.8fc89c0d.webp
  https://neverland.agency/assets/0062.75b6ed2e.webp
  https://neverland.agency/assets/0063.e58fec21.webp
  https://neverland.agency/assets/0064.22bd60d1.webp
  https://neverland.agency/assets/0065.3d29b95f.webp
  https://neverland.agency/assets/0066.956e9808.webp
  https://neverland.agency/assets/0067.8fe4db86.webp
  https://neverland.agency/assets/0068.05d2eb46.webp
  https://neverland.agency/assets/0069.1bb341ff.webp
  https://neverland.agency/assets/0070.7f21347f.webp
  https://neverland.agency/assets/0071.f4170e25.webp
  https://neverland.agency/assets/0072.3db2e158.webp
  https://neverland.agency/assets/0073.ba8215f1.webp
  https://neverland.agency/assets/0074.29a935f8.webp
  https://neverland.agency/assets/0075.3648b877.webp
  https://neverland.agency/assets/0076.395b8926.webp
  https://neverland.agency/assets/0077.4a22fcec.webp
  https://neverland.agency/assets/0078.246033aa.webp
  https://neverland.agency/assets/0079.64ecb26b.webp
  https://neverland.agency/assets/0080.c1c7483f.webp
  https://neverland.agency/assets/0081.260fbec3.webp
  https://neverland.agency/assets/0082.548c4ab9.webp
  https://neverland.agency/assets/0083.fe120aba.webp
  https://neverland.agency/assets/0084.c111ddc3.webp
  https://neverland.agency/assets/0085.a31c2799.webp
  https://neverland.agency/assets/0086.07ee9200.webp
  https://neverland.agency/assets/0087.85667652.webp
  https://neverland.agency/assets/0088.b7bea6b9.webp
  https://neverland.agency/assets/0089.c1d2d545.webp
  https://neverland.agency/assets/0090.03a882f6.webp
  https://neverland.agency/assets/0091.77c5097b.webp
  https://neverland.agency/assets/0092.d9eb834e.webp
  https://neverland.agency/assets/0093.27e749e5.webp
  https://neverland.agency/assets/0094.36f380b4.webp
  https://neverland.agency/assets/0095.a9b66983.webp
  https://neverland.agency/assets/0096.a99d5952.webp
  https://neverland.agency/assets/0097.3620b5b5.webp
  https://neverland.agency/assets/0098.52874d61.webp
  https://neverland.agency/assets/0099.c07fd584.webp
  https://neverland.agency/assets/0100.20fab468.webp
  https://neverland.agency/assets/0101.1b3a8f1b.webp
  https://neverland.agency/assets/0102.d4e135d6.webp
  https://neverland.agency/assets/0103.dd55c798.webp
  https://neverland.agency/assets/0104.9f40453f.webp
  https://neverland.agency/assets/0105.b7566ad9.webp
  https://neverland.agency/assets/0106.0947b2a7.webp
  https://neverland.agency/assets/0107.bf64a661.webp
  https://neverland.agency/assets/0108.691f2046.webp
  https://neverland.agency/assets/0109.0dcbc659.webp
  https://neverland.agency/assets/0110.c97e80e7.webp
  https://neverland.agency/assets/0111.603f5a86.webp
  https://neverland.agency/assets/0112.9e3bbcd3.webp
  https://neverland.agency/assets/0113.63dbae55.webp
  https://neverland.agency/assets/0114.eeefc95e.webp
  https://neverland.agency/assets/0115.75b22289.webp
  https://neverland.agency/assets/0116.98e6d982.webp
  https://neverland.agency/assets/0117.6715eaac.webp
  https://neverland.agency/assets/0118.1edf8f57.webp
  https://neverland.agency/assets/0119.a69aedb9.webp
  https://neverland.agency/assets/0120.6cd83251.webp
  https://neverland.agency/assets/0121.7ae8021b.webp
  https://neverland.agency/assets/0122.3517cdab.webp
  https://neverland.agency/assets/0123.26c0c828.webp
  https://neverland.agency/assets/0124.73ccb271.webp
  https://neverland.agency/assets/0125.3417be6f.webp
  https://neverland.agency/assets/0126.4140979f.webp
  https://neverland.agency/assets/0127.43987755.webp
  https://neverland.agency/assets/0128.7b97aa5a.webp
  https://neverland.agency/assets/0129.0c324526.webp
  https://neverland.agency/assets/0130.5f078a69.webp
  https://neverland.agency/assets/0131.a168ea4b.webp
  https://neverland.agency/assets/0132.165189b6.webp
  https://neverland.agency/assets/0133.f0db2c3d.webp
  https://neverland.agency/assets/0134.9d2b664e.webp
  https://neverland.agency/assets/0135.1eaa3346.webp
  https://neverland.agency/assets/0136.dc55de5e.webp
  https://neverland.agency/assets/0137.44d20eac.webp
  https://neverland.agency/assets/0138.7e757891.webp
  https://neverland.agency/assets/0139.c459e880.webp
  https://neverland.agency/assets/0140.b0da991a.webp
  https://neverland.agency/assets/0141.f88d43b3.webp
  https://neverland.agency/assets/0142.7649691d.webp
  https://neverland.agency/assets/0143.44b403f3.webp
  https://neverland.agency/assets/0144.3924295e.webp
  https://neverland.agency/assets/0145.fb5ea5a4.webp
  https://neverland.agency/assets/0146.25875915.webp
  https://neverland.agency/assets/0147.e7801793.webp
  https://neverland.agency/assets/0148.f176b71c.webp
  https://neverland.agency/assets/0149.56cbfced.webp
  https://neverland.agency/assets/0150.1ca09a66.webp
  https://neverland.agency/assets/0151.a94b5cdb.webp
  https://neverland.agency/assets/0152.4586f23c.webp
  https://neverland.agency/assets/0153.d5d587b5.webp
  https://neverland.agency/assets/0154.ae870207.webp
  https://neverland.agency/assets/0155.1af81ba6.webp
  https://neverland.agency/assets/0156.6ad16740.webp
  https://neverland.agency/assets/0157.88ab5e09.webp
  https://neverland.agency/assets/0158.03d34446.webp
  https://neverland.agency/assets/0159.4c62584f.webp
  https://neverland.agency/assets/0160.ef399f69.webp
  https://neverland.agency/assets/0161.e5c1660a.webp
  https://neverland.agency/assets/0162.aedb121e.webp
  https://neverland.agency/assets/0163.a64559cf.webp
  https://neverland.agency/assets/0164.8d435d74.webp
  https://neverland.agency/assets/0165.d0d74920.webp
  https://neverland.agency/assets/0166.5050ada6.webp
  https://neverland.agency/assets/0167.6ca0b95e.webp
  https://neverland.agency/assets/0168.1db2d9a5.webp
  https://neverland.agency/assets/0169.c7126214.webp
  https://neverland.agency/assets/0170.6daefd9f.webp
  https://neverland.agency/assets/0171.6798021d.webp
  https://neverland.agency/assets/0172.7eae7481.webp
  https://neverland.agency/assets/0173.fb1fb7c3.webp
  https://neverland.agency/assets/0174.fe50aa6e.webp
  https://neverland.agency/assets/0175.f3c9e9c1.webp
  https://neverland.agency/assets/0176.0d158f5d.webp
  https://neverland.agency/assets/0177.847bee6d.webp
  https://neverland.agency/assets/0178.2f1724cf.webp
  https://neverland.agency/assets/0179.0680274d.webp
  https://neverland.agency/assets/0180.9f5b661b.webp
 `;
  return data.split("\n")[index];
}

const frameCount = 180;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page1`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page1",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}
canvas()

// span tag
let clutter = ""
function split(){
    document.querySelector('#page1>h1').textContent.split("").forEach(function(item){
      clutter += `<span>${item}</span>`
    })
    document.querySelector('#page1>h1').innerHTML = clutter
}
split()
gsap.to('#page1>h1>span',{
  scrollTrigger:{
    trigger:'#page1>h1>sapn',
    scroller:'#main',
    start:'top -10%',
    end:'100% top',
    scrub:.15,
    // markers:true
  },
  stagger:.1,
  opacity:0
})

// h2
let clutter1 = ""
function splitSecond(){
    document.querySelector('#page1>h2').textContent.split("").forEach(function(item){
      clutter1 += `<span>${item}</span>`
    })
    document.querySelector('#page1>h2').innerHTML = clutter1
}
splitSecond()

gsap.to('#page1>h2>span',{
  scrollTrigger:{
    trigger:'#page1>h2>sapn',
    scroller:'#main',
    start:'80% 0%',
    end:'90% top',
    scrub:.15,
    // markers:true
  },
  stagger:.1,
  opacity:0
})

// page1 scale down 
gsap.to('#page1>canvas',{
  scrollTrigger:{
    trigger:'#page1 ',
    scroller:'#main',
    start:'5% 0%',
    end:'100% top',
    scrub:.15,
    // markers:true
    pin:true
  },
  position: "absolute",
  top: "50%",
  left: "50%",
  xPercent: -50,
  yPercent: -50,
  width:'90%',
  height:'90%',
  // transform:'-50%,-50%',
  // scale:0.5,
  stagger:.1
})

// image change nav

// page2  image up 
gsap.to('#page2>img',{
  scrollTrigger:{
    trigger:'#page2>img',
    scroller:'#main',
    start:'-40% 20%',
    end:'50% 40%',
    scrub:.15,
    // markers:true
  },
  y:-1400,
  // duration:3,
  stagger:.15
})

// page-2 h1 fade

let clutter2 = ""
function splitSpan(){
  document.querySelector('#inner-div-bottom>h1').textContent.split("").forEach(function (char){
    clutter2 += `<span>${char}</span>`
  })
  document.querySelector('#inner-div-bottom>h1').innerHTML = clutter2
}
splitSpan()

gsap.to('#inner-div-bottom>h1>span',{
  scrollTrigger:{
    trigger:'#inner-div-bottom>h1>span',
    scroller:'#main',
    start:'20% 40%',
    end:'100% top',
    scrub:.15,
    // markers:true
  },
  stagger:.2,
  opacity:1
})

// h2

let clutter3 = ""
function splitSpan3(){
  document.querySelector('#inner-div-bottom>h6').textContent.split("").forEach(function (char3){
    clutter3 += `<span>${char3}</span>`
  })
  document.querySelector('#inner-div-bottom>h6').innerHTML = clutter3
}
splitSpan3()

gsap.to('#inner-div-bottom>h6>span',{
  scrollTrigger:{
    trigger:'#inner-div-bottom>h6>span',
    scroller:'#main',
    start:'10% 100%',
    end:'100% top',
    scrub:.15,
    // markers:true
  },
  // x:400,
  stagger:.1,
  opacity:0
})

// page2 h4 slide
gsap.to('#page2>h4',{
  scrollTrigger:{
    trigger:'#page2>h4',
    scroller:'#main',
    start:'10% 100%',
    end:'100% top',
    scrub:.15,
    // markers:true,
    start:'5% 80%',
    end:'100% 100%',
    scrub:1,
    // pin:true
  },
  left:100,
  duration:1,
  stagger:.1
})
// ************** Page 3  h1 fade effect****************
function Split4(){
  let clutter = ""
  document.querySelector('#page3 #top>h1').textContent.split("").forEach(function(ch){
    clutter += `<span>${ch}</span>`
  })
  document.querySelector('#page3 #top>h1').innerHTML = clutter
}
Split4()

gsap.to('#page3 #top>h1>span',{
  scrollTrigger:{
    trigger:'#page3 #top>h1>span',
    scroller:'#main',
    start:'0% 60%',
    end:'100% 80%',
    // markers:true,
    scrub:4
  },
  stagger:.6,
  opacity:1,
})

// bottom h1
function Split5(){
  let clutter = ""
  document.querySelector('#page3 #p-bottom>h1').textContent.split("").forEach(function(c){
    clutter += `<span>${c}</span>`
  })
  document.querySelector('#page3 #p-bottom>h1').innerHTML = clutter
}
Split5()

gsap.to('#p-bottom>h1>span',{
  scrollTrigger:{
    trigger:'#p-bottom>h1>span',
    scroller:'#main',
    start:'top 80%',
    end:'100% top',
    scrub:.15,
    // markers:true
  },
  stagger:.4,
  opacity:1
})

// h6 fade effect
function fadeH(){
  let clutterh6 = ""
  document.querySelector('#page3>h6').textContent.split("").forEach(function(v){
    clutterh6 += `<span>${v}</span>`
  })
  document.querySelector('#page3>h6').innerHTML = clutterh6
}
fadeH()

gsap.to('#page3>h6>span',{
  scrollTrigger:{
    trigger:'#page3>h6>span',
    scroller:'#main',
    start:'top 100%',
    end:'100% 50%',
    scrub:.15,
    // markers:true
  },
  stagger:.1,
  opacity:1
})

// ************* Page 4****************

let tl = gsap.timeline({
  scrollTrigger:{
    trigger:'#gif-container',
    scroller:'#main',
    start:'top 50%',
    end:'400% top',
    // markers:true,
    pin:true
  }
})

// **************** Page-7 ********************

let tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:'#page-7>h2',
    scroller:'#main',
    start:'50% 90%',
    end:'60% top',
    // markers:true,
    scrub:1
  }
})
tl1.to('#page-7>h2',{
  left:100,
  opacity:1,
  stagger:.1
})

// ************** Page-8*******************

let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:'#page-8>h2',
    scroller:'#main',
    start:'50% 90%',
    end:'60% top',
    // markers:true,
    scrub:1
  }
})
tl1.to('#page-8>h2',{
  left:100,
  opacity:1,
  stagger:.1
})

// spliting string
function split8(){
  let clutter8 = ""
  document.querySelector('#page-8>h1').textContent.split("").forEach(function(n){
    clutter8 += `<span>${n}</span>`
  })
  document.querySelector('#page-8>h1').innerHTML = clutter8
}
split8()

gsap.to('#page-8>h1>span',{
  scrollTrigger:{
    trigger:'#page-8>h1>span',
    scroller:'#main',
    start:'0% 60%',
    end:'100% 80%',
    // markers:true,
    scrub:4
  },
  stagger:.6,
  opacity:1,
})

// ********* Page8  let's fly **********

let tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:'#page-8>h2',
    scroller:'#main',
    start:'50% 90%',
    end:'60% top',
    // markers:true,
    scrub:1
  }
})
tl3.to('#page-8>h2',{
  left:150,
  opacity:1,
  stagger:.1
})


// **************Second canvas************************

function cnvs(){
  const canvas = document.querySelector("#page9>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    https://neverland.agency/assets/0001.79b3f4bd.webp
    https://neverland.agency/assets/0002.c8a269b8.webp
    https://neverland.agency/assets/0003.6a5589b0.webp
    https://neverland.agency/assets/0004.a6707b12.webp
    https://neverland.agency/assets/0005.a6a57710.webp
    https://neverland.agency/assets/0006.c931e419.webp
    https://neverland.agency/assets/0007.5eb18740.webp
    https://neverland.agency/assets/0008.01b6202e.webp
    https://neverland.agency/assets/0009.96fbce3c.webp
    https://neverland.agency/assets/0010.1fe68672.webp
    https://neverland.agency/assets/0011.5154b5c6.webp
    https://neverland.agency/assets/0012.26fc3b2d.webp
    https://neverland.agency/assets/0013.e2b7d4c5.webp
    https://neverland.agency/assets/0014.8f1e0d07.webp
    https://neverland.agency/assets/0015.e3229a8f.webp
    https://neverland.agency/assets/0016.e6abe5d5.webp
    https://neverland.agency/assets/0017.1d35af76.webp
    https://neverland.agency/assets/0018.1ac6708b.webp
    https://neverland.agency/assets/0019.b627e3a9.webp
    https://neverland.agency/assets/0020.e5d18983.webp
    https://neverland.agency/assets/0021.a2bc192b.webp
    https://neverland.agency/assets/0022.d7f2c10d.webp
    https://neverland.agency/assets/0023.ac95d331.webp
    https://neverland.agency/assets/0024.fdb7ccb2.webp
    https://neverland.agency/assets/0025.f999bc5d.webp
    https://neverland.agency/assets/0026.e50f82db.webp
    https://neverland.agency/assets/0027.776b1c9f.webp
    https://neverland.agency/assets/0028.61ef7fa7.webp
    https://neverland.agency/assets/0029.8cc38e0a.webp
    https://neverland.agency/assets/0030.5a52e756.webp
    https://neverland.agency/assets/0031.44132d6b.webp
    https://neverland.agency/assets/0032.f3edbece.webp
    https://neverland.agency/assets/0033.771589fd.webp
    https://neverland.agency/assets/0034.6aa638e5.webp
    https://neverland.agency/assets/0035.30183aeb.webp
    https://neverland.agency/assets/0036.6663aca2.webp
    https://neverland.agency/assets/0037.4a222751.webp
    https://neverland.agency/assets/0038.0024aa05.webp
    https://neverland.agency/assets/0039.a3026556.webp
    https://neverland.agency/assets/0040.8d2dd547.webp
    https://neverland.agency/assets/0041.d14a25e4.webp
    https://neverland.agency/assets/0042.14dc7353.webp
    https://neverland.agency/assets/0043.44351f30.webp
    https://neverland.agency/assets/0044.455871e1.webp
    https://neverland.agency/assets/0045.c9eda857.webp
    https://neverland.agency/assets/0046.917eb755.webp
    https://neverland.agency/assets/0047.6c5d5dae.webp
    https://neverland.agency/assets/0048.b5ceecd4.webp
    https://neverland.agency/assets/0049.9d119b5a.webp
    https://neverland.agency/assets/0050.7f011c3c.webp
    https://neverland.agency/assets/0051.d4f21794.webp
    https://neverland.agency/assets/0052.19b9b4ec.webp
    https://neverland.agency/assets/0053.e582e891.webp
    https://neverland.agency/assets/0054.8c15855f.webp
    https://neverland.agency/assets/0055.77d816c9.webp
    https://neverland.agency/assets/0056.f7829d8d.webp
    https://neverland.agency/assets/0057.11aa75b0.webp
    https://neverland.agency/assets/0058.e4089d82.webp
    https://neverland.agency/assets/0059.03eaa7f8.webp
    https://neverland.agency/assets/0060.3898db51.webp
    https://neverland.agency/assets/0061.162f1501.webp
    https://neverland.agency/assets/0062.060ae4ca.webp
    https://neverland.agency/assets/0063.e310a7ff.webp
    https://neverland.agency/assets/0064.bad2cc1f.webp
    https://neverland.agency/assets/0065.a56aa3ce.webp
    https://neverland.agency/assets/0066.52d64310.webp
    https://neverland.agency/assets/0067.cb9b8106.webp
    https://neverland.agency/assets/0068.d9c4004f.webp
    https://neverland.agency/assets/0069.8647df65.webp
    https://neverland.agency/assets/0070.8c704ed7.webp
    https://neverland.agency/assets/0071.4a5e0b80.webp
    https://neverland.agency/assets/0072.b51d7e58.webp
    https://neverland.agency/assets/0073.abe6f10f.webp
    https://neverland.agency/assets/0074.7cba1065.webp
    https://neverland.agency/assets/0075.06da08e5.webp
    https://neverland.agency/assets/0076.28935a69.webp
    https://neverland.agency/assets/0077.5581cd5a.webp
    https://neverland.agency/assets/0078.28bc548e.webp
    https://neverland.agency/assets/0079.faf9cf25.webp
    https://neverland.agency/assets/0080.58ff647c.webp
    https://neverland.agency/assets/0081.a3a587b1.webp
    https://neverland.agency/assets/0082.3821e366.webp
    https://neverland.agency/assets/0083.12ed85d0.webp
    https://neverland.agency/assets/0084.d506f8c7.webp
    https://neverland.agency/assets/0085.1550ca9a.webp
    `;
    return data.split("\n")[index];
  }
  
  const frameCount = 85;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page9`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page9",
    pin: true,
    // markers:true,
    scroller: `#main`,
  //   set start end according to preference
    start: `top top`,
    end: `600% top`,
  });
  }
cnvs()

// page-9 scale down 
gsap.to('#page9',{
  scrollTrigger:{
    trigger:'#page9 ',
    scroller:'#main',
    start:'5% 0%',
    end:'100% top',
    scrub:.1,
    // markers:true
    pin:true
  },
  position: "absolute",
  top: "50%",
  left: "50%",
  xPercent: -50,
  yPercent: -50,
  width:'90%',
  height:'90%',
  // transform:'-50%,-50%',
  // scale:0.5,
  stagger:.1
})


// ********* Page9 **********


let tl4 = gsap.timeline({
  scrollTrigger:{
    trigger:'#page9>h2',
    scroller:'#main',
    start:'50% 90%',
    end:'60% top',
    // markers:true,
    scrub:1
  }
})
tl4.to('#page9>h2',{
  left:100,
  opacity:1,
  stagger:.1
})

// ************* Page-10*********************

let tl5 = gsap.timeline({
  scrollTrigger:{
    trigger:'#page-10>h1',
    scroller:'#main',
    start:'50% 90%',
    end:'60% top',
    // markers:true,
    scrub:1
  }
})
tl5.to('#page-10>h1',{
  left:100,
  opacity:1,
  stagger:.1
})

// ************* Page-10*********************

let tl6 = gsap.timeline({
  scrollTrigger:{
    trigger:'#page-11',
    scroller:'#main',
    start:'40% 30%',
    end:'60% 70%',
    // markers:true,
    scrub:.15
  }
})
tl6.to('#nav>svg',{
  dispaly:'none',
  opacity:0
})

// custom cursor
let cursor = document.querySelector('#cursor')
let main = document.querySelector('#main')

main.addEventListener("mousemove",function(e){
  cursor.style.left = `${e.x+30}px`
  cursor.style.top = `${e.y}px`
})

// document.querySelector("#cursor");

// main.addEventListener("mousemove",function(dets){
//   cursor.style.left = dets.x + "px";
//   cursor.style.top = dets.y + "px";
// })




// **************Slide menu******************

let icon = document.querySelector('#icon>h6')
let slide_menu = document.querySelector('#silde-menu')
console.log(icon);

let flag = 0
icon.addEventListener('click',function(){
  if (flag == 0) {
    slide_menu.style.top = '0%'
    icon.style.dispaly = ''
    flag = 1
  } else {
    slide_menu.style.top = '-100%'
    
    flag = 0

  }

})


// page-1 scroll hover
let scrollDown = document.querySelector('#scrollDown')
// console.log(scrollDown);
scrollDown.addEventListener('mouseenter',function(){
  cursor.style.mixBlendMode = `difference`
  cursor.style.backgroundColor = `#fff`
  cursor.style.scale = '2'
})
scrollDown.addEventListener("mouseleave",function(){
  cursor.style.scale = '1'
  cursor.style.mixBlendMode = `normal`
  cursor.style.backgroundColor = `#000`
  cursor.style.scale = '1'

})

// site of the day

let img = document.querySelector("body>img")
// console.log(img);
// img.addEventListener('mouseenter',function(){
//   cursor.style.scale = '1.1'
//   cursor.style.mixBlendMode = `difference`
//   cursor.style.backgroundColor = `#fff`
// })
// img.addEventListener('mouseleave',function(){
//   cursor.style.scale = '1'
// })

// ******************footer f-left**********************

let ask_any = document.querySelector('#f-left>p')
console.log(ask_any);
ask_any.addEventListener('mouseenter',function(){
  // alert('im here')
  cursor.style.scale = '3'
  cursor.style.mixBlendMode = `color-burn`
  cursor.style.backgroundColor = `blue`

})
ask_any.addEventListener('mouseleave',function(){
  cursor.style.scale = '1'
  cursor.style.mixBlendMode = `normal`
  cursor.style.backgroundColor = `#000`
})

// **************** second-div *******************

let second_div = document.querySelector('#second-div>p')

second_div.addEventListener('maouseenter',function(){
  cursor.style.scale = '3'
  cursor.style.mixBlendMode = `color-burn`
  cursor.style.backgroundColor = `blue`
})
second_div.addEventListener('mouseleave',function(){
  cursor.style.scale = '1'
  cursor.style.mixBlendMode = `normal`
  cursor.style.backgroundColor = `#000`
})


// ******************* s-3**************************

let s_icon = document.querySelectorAll('#s-3>img')
s_icon.forEach(function(item){
  item.addEventListener('mouseenter',function(){
      cursor.style.scale = '3'
      cursor.style.mixBlendMode = `color-burn`
      cursor.style.backgroundColor = `blue`
  })
  item.addEventListener('mouseleave',function(){
      cursor.style.scale = '1'
      cursor.style.mixBlendMode = `normal`
      cursor.style.backgroundColor = `#000`
  })
})


// ******************* footer second*****************************

let sec = document.querySelector('#second>h2')

sec.addEventListener('mouseenter',function(){
  cursor.style.scale = '3'
  cursor.style.mixBlendMode = `color-burn`
  // cursor.style.backgroundColor = `#dd2d56`
  cursor.style.backgroundColor = `blue`
})
sec.addEventListener('mouseleave',function(){
  cursor.style.scale = '1'
  cursor.style.mixBlendMode = `normal`
  cursor.style.backgroundColor = `#000`
})


// ************** page-11 *****************
let fly = document.querySelector('#right-link>p')

fly.addEventListener('mouseenter',function(){
  cursor.style.scale = '3'
  cursor.style.mixBlendMode = `color-burn`
  cursor.style.backgroundColor = `blue`
})
fly.addEventListener('mouseleave',function(){
  cursor.style.scale = '1'
  cursor.style.mixBlendMode = `normal`
  cursor.style.backgroundColor = `#000`
})