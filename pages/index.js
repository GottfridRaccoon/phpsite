window.onload = ()=>{
    let but = document.getElementById("openbar")
    let bar = document.getElementById("content-bar")
    let tab = document.getElementById("tabledb")
    let xhr = new XMLHttpRequest()
    but.onclick=()=>{
            if(bar.style.display ==="none"){
                bar.style.display = "block"
            }else {
                bar.style.display = "none" 
            }
    }
    

}