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
        render ();
        inputFld.value = "";
    } else {
        alert ("Masukan sebuah jadwal!");
    }
    console.log (localStorage.getItem("jList"));
});

function render () {
    localStorage.setItem ("jList", JSON.stringify(jadwalArr));
    var i = 0;
    jadwalLst.innerHTML = "";
    while (i < jadwalArr.length) {
        jadwalLst.innerHTML += '<li class="list-group-item"><div class="checkbox-item"><input type="checkbox"></div><div class="text-item">'+jadwalArr[i]+'</div><div class="delete-item"><button type="button" class="btn btn-outline-danger" onclick="delList('+i+')">X</button></div></li>';
        i++;
    }
}

function delList (index) {
    console.log (index);
    jadwalArr.splice (index, 1);
    console.log (jadwalArr);
    render ();
}