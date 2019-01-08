const jadwalLst = document.getElementById("lst");
const masukanBtn = document.getElementById("sub");
const inputFld = document.getElementById("in");

var jadwalArr = [];

if (JSON.parse(localStorage.getItem ("jList") != null)) {
    jadwalArr = JSON.parse(localStorage.getItem ("jList"));
    render ();
}


masukanBtn.addEventListener ("click", function() {
    if (inputFld.value != "") {
        jadwalArr.push(inputFld.value);
        localStorage.setItem ("jList", JSON.stringify(jadwalArr));
        render ();
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
        jadwalLst.innerHTML += '<li>' + jadwalArr[i] + '<button onclick="delList(' + i + ')">X</button></li>';
        i++;
    }
}

function delList (index) {
    console.log (index);
    jadwalArr.slice (index, 1);
    console.log (jadwalArr);
    render ();
}