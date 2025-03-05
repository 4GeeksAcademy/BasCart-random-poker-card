import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.addEventListener("load" ,function() {
  document.body.style.background="green"

  let theBase = document.createElement("div")
  theBase.id= "theName" 
  document.body.appendChild(theBase)

  theBase.style.cssText=`width: 400px;
  height: 600px;
  background: white; 
  margin: auto;
  border-radius: 7%;
  display: flex;`

  let icon1= document.createElement("div")
  let icon2= document.createElement("div")
  let number= document.createElement("div") 
  
  icon1.style.cssText=`width: 120px;
  height: 120px; 
  font-size:120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px 0px 5px ;`
  
  icon2.style.cssText=`width: 120px;
  height: 120px; 
  font-size:120px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  margin: 0px 5px 5px 0px;
  align-self: end;
  transform: scaleY(-1)`
  
  number.style.cssText=`width: 200px;
  height: 400px;
  font-size: 250px;
  margin: auto; 
  display: flex; 
  justify-content: center;
  align-items: center`
  
  theBase.appendChild(icon1)
  theBase.appendChild(number)
  theBase.appendChild(icon2)

  let icons=["♦", "♥", "♠", "♣"]
  let numbers=["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
  let iconsRandom= Math.floor(Math.random()*icons.length)
  let numbersRandom= Math.floor(Math.random()*numbers.length)
  
  let iconItem=(icons[iconsRandom])
  
  let iconAdd1= document.createTextNode(icons[iconsRandom])
  let iconAdd2= document.createTextNode(icons[iconsRandom])
  
  let numberAdd= document.createTextNode(numbers[numbersRandom])
  
  if(iconItem==="♥" || iconItem==="♦"){
    icon1.style.cssText+="color:red;"
    icon2.style.cssText+="color:red;"
  }
  
  icon1.appendChild(iconAdd1)
  icon2.appendChild(iconAdd2)
  number.appendChild(numberAdd)

  let button= document.createElement("button")
  button.style.cssText=`display:flex;
  justify-self: center;
  margin-top:20px;`
  button.textContent= "Refresh Me"
  button.addEventListener("click", (_)=>
    location.reload()
  )
  theBase.insertAdjacentElement("afterend",button)
})