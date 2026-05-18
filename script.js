

    function log(...value){
    console.log(...value);
}


document.getElementById("btnPlus").addEventListener("click", increaser);
document.getElementById("btnMinus").addEventListener("click", decreaser);
document.getElementById("btnSave").addEventListener("click", save);
document.getElementById("btnLoad").addEventListener("click", load);
document.getElementById("btnReset").addEventListener("click", reset);

let count = 0;

updatecount();

function updatecount(){
    document.getElementById("count").innerHTML = count;
}

function increaser(){
    count++;
    updatecount();
}

function decreaser(){
    if(count > 0){
    count--;
    updatecount();
    }

}

function save() {
  localStorage.setItem("count", count);
}

function reset(){
    count = 0;
    updatecount();

}


function load(){
    let saved = localStorage.getItem("count");
    if (saved !== null){
        count = Number(saved);
    }  
 updatecount(); 
}




