
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


