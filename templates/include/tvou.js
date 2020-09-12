//window.onload = function()  {
  let opnbtn = document.getElementById("open-sidebar");
 

  opnbtn.onclick =function () {
    let side = document.getElementById("side-bar");
    if (side.hidden == false) {
    //  console.log(side.style.visibility);
    side.hidden = true
    }
    else if (side.hidden == true) {
     // console.log(side.style.visibility);
     side.hidden = false
    }
    let a = document.querySelector('#onclicked')
    a.onclick=()=>console.log(2)
  };
  

 
//};
