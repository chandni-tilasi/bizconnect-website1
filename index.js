let menuBtn = document.querySelector(".menu");
let closeBtn = document.querySelector(".close");
let virtualDropDown = document.querySelector(".virtual-menu");
let hybridDropDown = document.querySelector(".hybrid-menu");
let companyDropDown = document.querySelector(".company-menu");

menuBtn.addEventListener("click", function(){
  document.querySelector(".navbar").style.transform ="translateX(0)"  
})
closeBtn.addEventListener("click", function(){
    document.querySelector(".navbar").style.transform ="translateX(-1000px)"  
    document.querySelector(".virtual-drop-down").style.display ="none"
    document.querySelector(".hybrid-drop-down").style.display ="none"
    document.querySelector(".company-drop-down").style.display ="none"
  })

virtualDropDown.addEventListener("mousemove", function(){
    document.querySelector(".hybrid-drop-down").style.display ="none"
    document.querySelector(".company-drop-down").style.display ="none"
    document.querySelector(".virtual-drop-down").style.display ="flex"
    document.getElementById("virtual-icon").classList.remove("fa-caret-down")
    document.getElementById("virtual-icon").classList.add("fa-caret-right")
    virtualDropDown.addEventListener("mouseout", function(){
      document.querySelector(".virtual-drop-down").style.display ="none"
      document.getElementById("virtual-icon").classList.remove("fa-caret-right")
      document.getElementById("virtual-icon").classList.add("fa-caret-down")
    })
})
hybridDropDown.addEventListener("mousemove", function(){
    document.querySelector(".virtual-drop-down").style.display ="none"
    document.querySelector(".company-drop-down").style.display ="none"
    document.querySelector(".hybrid-drop-down").style.display ="flex"
    document.getElementById("hybrid-icon").classList.remove("fa-caret-down")
    document.getElementById("hybrid-icon").classList.add("fa-caret-right")
    hybridDropDown.addEventListener("mouseout",function(){
      document.querySelector(".hybrid-drop-down").style.display ="none"
      document.getElementById("hybrid-icon").classList.remove("fa-caret-right")
      document.getElementById("hybrid-icon").classList.add("fa-caret-down")
    })
})
companyDropDown.addEventListener("mousemove", function(){
    document.querySelector(".virtual-drop-down").style.display ="none"
    document.querySelector(".hybrid-drop-down").style.display ="none"
    document.querySelector(".company-drop-down").style.display ="flex"
    document.getElementById("company-icon").classList.remove("fa-caret-down")
    document.getElementById("company-icon").classList.add("fa-caret-right")
    companyDropDown.addEventListener("mouseout",function(){
      document.querySelector(".company-drop-down").style.display ="none"
      document.getElementById("company-icon").classList.remove("fa-caret-right")
      document.getElementById("company-icon").classList.add("fa-caret-down")
    })
})

