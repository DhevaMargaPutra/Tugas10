const jadwalLst = document.getElementById("lst");
const masukanBtn = document.getElementById("sub");
const inputFld = document.getElementById("in");

var jadwalArr = [];
var checkedArr = [];

if (JSON.parse(localStorage.getItem ("jList") != null)) {
    jadwalArr = JSON.parse(localStorage.getItem ("jList"));
    render ();
}

if (JSON.parse(localStorage.getItem ("cList") != null)) {
    checkedArr = JSON.parse(localStorage.getItem ("cList"));
    render ();
}
checkedArr = JSON.parse(localStorage.getItem ("cList"));
    render ();

masukanBtn.addEventListener ("click", function() {
    if (inputFld.value != "") {
        jadwalArr.push(inputFld.value);
        checkedArr.push("0");
        render ();
        inputFld.value = "";
    } else {
        alert ("Masukan sebuah jadwal!");
    }
    console.log (localStorage.getItem("jList"));
    console.log (localStorage.getItem("cList"));
});

function render () {
    var i = 0;
    jadwalLst.innerHTML = "";
    var isChecked = "";
    while (i < jadwalArr.length) {
        if (checkedArr[i] == "1") {
            isChecked = "checked";
        } else {
            isChecked = "";
        }
        jadwalLst.innerHTML += '<li class="list-group-item"><div class="checkbox-item"><input type="checkbox" '+isChecked+' onchange="saveChecked(this, '+i+')"></div><div class="text-item">'+jadwalArr[i]+'</div><div class="delete-item"><button type="button" class="btn btn-outline-danger" onclick="delList('+i+')">X</button></div></li>';
        i++;
    }
    localStorage.setItem ("jList", JSON.stringify(jadwalArr));
    localStorage.setItem ("cList", JSON.stringify(checkedArr));
}

function saveChecked (checkbox, index) {
    if (checkbox.checked == true) {
        console.log ("checked", index);
        checkedArr[index] = "1";
        render ();
    } else {
        console.log ("dischecked", index);
        checkedArr[index] = "0";
        render ();
    }
}

function delList (index) {
    console.log (index);
    jadwalArr.splice (index, 1);
    console.log (jadwalArr);
    render ();
}