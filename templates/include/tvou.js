//window.onload = function()  {
  let opnbtn = document.getElementById("open-sidebar");

  opnbtn.onclick =function () {
    let side = document.getElementById("side-bar");
    if (side.style.marginLeft <"0px") {
    let position =-300
   
    
      let timeInterval =  setInterval(()=>{
       
        if (position ==0){
          clearInterval(timeInterval)
        }else{
        position=  position+5
        side.style.marginLeft = position+"px";
        }
      },1/10000)
   

  
}
    else if (side.style.marginLeft =="0px") {
     position=0
     let timeInterval= setInterval(() => {
      if (position ==-300){
        clearInterval(timeInterval)
      }else{
      position=  position-5
      side.style.marginLeft = position+"px";
      }
     }, 1/10000);

   
    }
 

  };
  
  

 

