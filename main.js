
console.log("TEST: app.js file is connected!");
import { gsap } from "https://esm.sh/gsap";
import { SplitText } from "https://esm.sh/gsap/SplitText";
import { ScrollTrigger } from "https://esm.sh/gsap/ScrollTrigger";
console.log("TEST: app.js file is connected!");
gsap.registerPlugin(SplitText, ScrollTrigger);

gsap.from('#logo',{
   y: "-50px",
   opacity: 0,
   duration: 1
})
gsap.from('.navItem',{
   y: "-50px",
   opacity: 0,
   duration: 1
})
gsap.from('#contcs',{
   x: "-50px",
   opacity: 0,
   duration: 1
})
gsap.from('#backTxt',{
   y: "50px",
   opacity: 0,
   duration: 1
})
// parallel in frontend text
gsap.to('#backTxt',{
   y: "100px",
   color: "black",
   scrollTrigger:{
        trigger:".heroSec",
        scroller:"body",
        markers:false,
        start:"10px",
        end: "300px",
        scrub:3
    }

})
gsap.from('#proLogo',{
   x: "-80px",
   opacity: 0.1,
   scrollTrigger:{
        trigger:".heroSec",
        scroller:"body",
        markers:false,
        start:"250px",
        end: "320px",
        scrub:3
    }

})

gsap.from('#gr',{
   y: "80px",
   opacity: 0.1,
   scrollTrigger:{
        trigger:".heroSec",
        scroller:"body",
        markers:false,
        start:"260px",
        end: "330px",
        scrub:3
    }

})

gsap.from('.project',{
   backgroundColor: "black",
   scrollTrigger:{
        trigger:".heroSec",
        scroller:"body",
        markers:false,
        start:"220px",
        end: "400px",
        scrub:3
    }

})

// the project section 
gsap.from('.lg',{
   backgroundColor: "white",
   scrollTrigger:{
        trigger:".heroSec",
        scroller:"body",
        markers:false,
        start:"260px",
        end: "400px",
        scrub:3
    }

})

gsap.from('.gradient1',{
   x: "-150px",
   opacity:0,
   scrollTrigger:{
        trigger:".heroSec",
        scroller:"body",
        markers:false,
        start:"30px",
        end: "600px",
        scrub:3
    }

})
gsap.from('#img2',{
   y: "80px",
   opacity:0,
   scrollTrigger:{
        trigger:".heroSec",
        scroller:"body",
        markers:false,
        start:"320px",
        end: "600px",
        scrub:3
    }

})
gsap.from('#img1',{
   y: "80px",
   opacity:0,
   scrollTrigger:{
        trigger:".heroSec",
        scroller:"body",
        markers:false,
        start:"260px",
        end: "600px",
        scrub:3
    }

})
gsap.from('.viewer2',{
   y: "-80px",
   opacity:0,
   scrollTrigger:{
        trigger:".heroSec",
        scroller:"body",
        markers:false,
        start:"260px",
        end: "600px",
        scrub:3
    }

})


// Wait for the page to load
document.addEventListener("DOMContentLoaded", () => {
    
    // Tell GSAP to use the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Select all our text steps
    const textSteps = gsap.utils.toArray(".text-step");
    
    // Select all our image groups
    const imageGroups = gsap.utils.toArray(".image-group");

    // Loop through each text step to create a trigger
    textSteps.forEach(step => {
        
        // Create a ScrollTrigger for this step
        ScrollTrigger.create({
            // IMPORTANT: Tell ScrollTrigger to watch the .txtsec scroller
            scroller: ".txtsec",
            
            // The element that triggers the animation
            trigger: step,
            
            // When the top of the step hits 50% of the scroller's height
            start: "top 50%", 
            
            // Uncomment markers to see the start/end points while debugging
            // markers: true, 

            // Function to run when you scroll INTO the step
            onEnter: () => {
                // Get the ID from the step's "data-group" attribute
                const groupId = step.dataset.group;
                
                // Remove .is-active from ALL image groups
                imageGroups.forEach(group => {
                    group.classList.remove("is-active");
                });
                
                // Add .is-active to the ONE matching group
                document.getElementById(groupId).classList.add("is-active");
            },

            // Function to run when you scroll BACK UP into the step
            onEnterBack: () => {
                // Get the ID from the step's "data-group" attribute
                const groupId = step.dataset.group;

                // Remove .is-active from ALL image groups
                imageGroups.forEach(group => {
                    group.classList.remove("is-active");
                });

                // Add .is-active to the ONE matching group
                document.getElementById(groupId).classList.add("is-active");
            }
        });
    });
});


gsap.registerPlugin(ScrollTrigger);
const model = document.querySelector("#tree");
let rotationProxy = {
  yaw: 0  
};

gsap.to(rotationProxy, {
  yaw: 360, 
  
  onUpdate: () => {
    model.cameraOrbit = `${rotationProxy.yaw}deg 75deg 105%`;
  },
  
  scrollTrigger: {
    trigger: model, 
    scrub: 1.5, 
    start: "0px", 
    end: "700px", 
    pin: true
  }
});





gsap.from('.p1',{
   y: "80px",
   opacity:0,
   scrollTrigger:{
        trigger:".exProjects",
        scroller:"body",
        markers:false,
        start:"-50px",
        end: "10px",
        scrub:2,
    }
})
gsap.from('.p2',{
   y: "80px",
   opacity:0,
   scrollTrigger:{
        trigger:".exProjects",
        scroller:"body",
        markers:false,
        start:"-30px",
        end: "20px",
        scrub:2,
    }
})

gsap.from('.p3',{
   y: "80px",
   opacity:0,
   scrollTrigger:{
        trigger:".exProjects",
        scroller:"body",
        markers:false,
        start:"270px",
        end: "370px",
        scrub:2
    }
})
gsap.from('.p4',{
   y: "80px",
   opacity:0,
   scrollTrigger:{
        trigger:".exProjects",
        scroller:"body",
        markers:false,
        start:"350px",
        end: "480px",
        scrub:2
    }
})

// / the about me section
gsap.from('#aboutMe',{
   backgroundColor: "black",
   scrollTrigger:{
        trigger:".exProjects",
        scroller:"body",
        markers:false,
        start:"950px",
        end: "1300px",
        scrub:3
    }

}) 


console.log("hii");


let split = SplitText.create("#p101",{
    type: "words,chars"
})


function vanish(){}

gsap.from(split.chars,{
    opacity: 0,
    stagger: 0.1,
    scrollTrigger:{
        trigger:"#aboutMe",
        // scroller:"body",
       start: "30% 80%",    // Start when the top of #aboutMe hits 80% down the screen
        end: "60% 50%",
        scrub:true,
    }
})

// the legend animation at last about skildsss  hehehhahahahah
gsap.from('.roll1',{
   width: 0,
   scrollTrigger:{
        trigger:".dummySec",
        scroller:"body",
   
        start:"-60%",
        end: "-8%",
        scrub:2
    }
})
gsap.from('.roll2',{
   width: 0,
   scrollTrigger:{
        trigger:".dummySec",
        scroller:"body",

        start:"-60%",
        end: "-8%",
        scrub:2
    }
})

gsap.from('.roll3',{
   width: 0,
   scrollTrigger:{
        trigger:".dummySec",
        scroller:"body",
       
        start:"-60%",
        end: "-8%",
        scrub:2
    }
})

gsap.to('.roll2',{
   scale: 5,
   scrollTrigger:{
        trigger:".dummySec",
        scroller:"body",
        markers:false,
        start:"8%",
        end: "30%",
        scrub:2,
        pin:true
    }
})
gsap.to('.roll2',{
   x:"-110%",
   scrollTrigger:{
        trigger:".dummySec",
        scroller:"body",
        markers:false,
        start:"10%",
        end: "75%",
        scrub:2,
        pin:true
    }
})

gsap.from('#skill',{
   opacity:0,
   scrollTrigger:{
        trigger:".dummySec",
        scroller:"body",
        markers:false,
        start:"10%",
        end: "80%",
        scrub:2,
       
    }
})
gsap.from('#plane',{
   opacity:0,
   scrollTrigger:{
        trigger:".dummySec",
        scroller:"body",
        markers:false,
        start:"20%",
        end: "20%",
        scrub:2,
       
    }
})


gsap.to('.roll2',{
   y: 80,
   scrollTrigger:{
        trigger:".dummySec",
        scroller:"body",
        markers:false,
        start:"20%",
        end: "40%",
        scrub:2,

    }
})

gsap.from('#my',{
   y: "-100px",
   scrollTrigger:{
        trigger:".dummySec",
        scroller:"body",
        markers:false,
        start:"30%",
        end: "50%",
        scrub:2
    }
})

let split2 = SplitText.create("#langsIntro",{
    type: "words",
    wordsClass: "words"
})

split2.words.forEach(word=>{
    let div = document.createElement("DIV")
    div.classList.add("cover")
    word.appendChild(div)
})


gsap.to(".cover",{
    opacity: 0,
    stagger: 0.1,
    scrollTrigger:{
        trigger:".contact",
        // scroller:"body",
       start: "70% 80%",    // Start when the top of #aboutMe hits 80% down the screen
        end: "75% 50%",
        scrub:true
    }
})

gsap.from('#frimg',{
   x: -8,
   opacity:0,
   scrollTrigger:{
        trigger:".contact",
        scroller:"body",
        markers:false,
        start: "63% 50%",    // Start when the top of #aboutMe hits 80% down the screen
        end: "65% 50%",
        scrub:2
    }
})
gsap.from('#html',{
   y: -8,
   opacity:0,
   scrollTrigger:{
        trigger:".contact",
        scroller:"body",
        markers:false,
        start: "56% 50%",    // Start when the top of #aboutMe hits 80% down the screen
        end: "58% 50%",
        scrub:2,
        markers: false
    }
})

gsap.from('#css',{
   y: -8,
   opacity:0,
   scrollTrigger:{
        trigger:".contact",
        scroller:"body",
        markers:false,
        start: "55% 50%",    // Start when the top of #aboutMe hits 80% down the screen
        end: "56% 50%",
        scrub:2
    }
})

gsap.from('#js',{
   y: -8,
   opacity:0,
   scrollTrigger:{
        trigger:".contact",
        scroller:"body",
        markers:false,
        start: "56% 50%",    // Start when the top of #aboutMe hits 80% down the screen
        end: "58% 50%",
        scrub:2
    }
})

gsap.from('#firebase',{
   y: -8,
   opacity:0,
   scrollTrigger:{
        trigger:".contact",
        scroller:"body",
        markers:false,
        start: "63% 50%",    // Start when the top of #aboutMe hits 80% down the screen
        end: "65% 50%",
        scrub:2
    }
})

gsap.from('#python',{
   y: -8,
   opacity:0,
   scrollTrigger:{
        trigger:".contact",
        scroller:"body",
        markers:false,
        start: "63% 50%",    // Start when the top of #aboutMe hits 80% down the screen
        end: "65% 50%",
        scrub:2
    }
})






let proxy = document.querySelector("#mouse")

let proxpos = { x : 0, y : 0} 
let mouseps = { x : 0, y : 0} 

window.addEventListener("mousemove",(e) =>{
    mouseps.x = e.x
    mouseps.y = e.y
})

let speed = 0.17
const follow = ()=>{

  proxpos.x += (mouseps.x - proxpos.x) * speed
  proxpos.y += (mouseps.y - proxpos.y) * speed

  proxy.style.transform = `translate(${proxpos.x}px ,${proxpos.y}px )`
  window.requestAnimationFrame(follow)

}

follow()


gsap.from('#touch',{
   width: "0px",
   scrollTrigger:{
        trigger:".dummy2",
        scroller:"body",
        markers:false,
        start: "-90%",    // Start when the top of #aboutMe hits 80% down the screen
        end: "-70%",
        scrub:2,
    }
})

let split3 = SplitText.create("#headTouch",{
    type: "words",
})



gsap.from(split3.words,{
    y:100,
    opacity:0,
    stagger: 0.1,
    scrollTrigger:{
        trigger:".dummy2",
        scroller:"body",
        markers:false,
        start: "-70%", 
        end: "-50%",
        scrub:2
    }
})

// animation for the 3 figures 
// the GSAP oen

gsap.from('.f1',{
   y: "-100px",
   opacity: 0,
   scrollTrigger:{
        trigger:".dummy2",
        scroller:"body",
        markers:false,
        start:"-40%",
        end: "-20%",
        scrub:2,
        markers: false
    }
})
gsap.from('.f2',{
   y: "-100px",
   opacity: 0,
   scrollTrigger:{
        trigger:".dummy2",
        scroller:"body",
        markers:false,
        start:"-40%",
        end: "-20%",
        scrub:2,
        markers: false
    }
})
gsap.from('.f3',{
   y: "-100px",
   opacity: 0,
   scrollTrigger:{
        trigger:".dummy2",
        scroller:"body",
        markers:false,
        start:"-40%",
        end: "-20%",
        scrub:2,
        markers: false
    }
})

gsap.from('.form',{
   y: "100px",
   opacity: 0,
   scrollTrigger:{
        trigger:".dummy2",
        scroller:"body",
        markers:false,
        start:"-40%",
        end: "-20%",
        scrub:2,
        markers: false
    }
})

// now the main animation

function shift(){
    console.log("yes but not rotating");
    
    let allFig = document.querySelectorAll(".figure")
    allFig.forEach(fig =>{
        fig.style.transform = "rotate(10deg)"
        fig.style.transition = "1s"
    })
}


let f1 = document.querySelector(".f1")
let f2 = document.querySelector(".f2")
let f3 = document.querySelector(".f3")

function shiftPsedo(a,b,c){
    a.style.setProperty("---f1Afterleft","150px")
    a.style.setProperty("---rotation1","-15deg")

    b.style.setProperty("---f2Afterleft","90px")
    b.style.setProperty("---f2Aftertop","20%")
    b.style.setProperty("---rotation2","-15deg")

    c.style.setProperty("---f3Afterleft","100px")
    c.style.setProperty("---rotation3","-15deg")

    a.style.setProperty("---f1beforetop","7%")
    a.style.setProperty("---f1beforeleft","155px")

    b.style.setProperty("---f2beforetop","7%")
    b.style.setProperty("---f2beforeleft","110px")

    c.style.setProperty("---f3beforetop","7%")
    c.style.setProperty("---f3beforeleft","130px")
}


let name = document.querySelector(".inp1")
name.addEventListener("click",()=>{
    shift()
    f1.style.left = "100px"
    f2.style.left = "300px"
    f3.style.right = "-100px"
    shiftPsedo(f1,f2,f3)
    setTimeout(()=>{
        document.querySelector("#msg").style.display = "block"
    },3000)
    setTimeout(()=>{
        document.querySelector("#msg").style.display = "none"
    },9000)
})