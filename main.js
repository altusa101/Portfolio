

// the hero sec elements 

function dropDownHeroTxt(){
    let s1 = document.querySelector(".s1")
    let s2 = document.querySelector(".s2")
    let s3 = document.querySelector(".s3")
    let alls = document.querySelectorAll(".head")
    s1.style.transform = "translateY(20px)"
    s2.style.transform = "translateY(-40px)"
    s3.style.transform = "translateY(-80px)"
    alls.forEach((es)=>{
        es.style.opacity = "100%";
    })
}

setTimeout(dropDownHeroTxt,2000)


    // animation for home elements