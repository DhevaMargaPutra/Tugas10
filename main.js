const jadwalLst = document.getElementById("lst");
const masukanBtn = document.getElementById("sub");
const inputFld = document.getElementById("in");

var jadwalArr = [];

jadwalArr = 

masukanBtn.addEventListener ("click", function() {
    if (inputFld.value != "") {
        jadwalArr.push(inputFld.value);
        render ();
        localStorage.setItem ("jList", jadwalArr);
        inputFld.value = "";
    } else {
        alert ("Masukan sebuah jadwal!");
    }
    console.log (localStorage.getItem("jList"));
});

function render () {
    var i = 0;
    jadwalLst.innerHTML = "";
    while (i < jadwalArr.length) {
        jadwalLst.innerHTML += '<li>' + jadwalArr[i] + '<button>X</button></li>';
        i++;
    }
}

function getListData () {
    
}