const jadwalLst = document.getElementById("lst");
const masukanBtn = document.getElementById("sub");
const inputFld = document.getElementById("in");

var todos = [];
if (localStorage.getItem ("todos") != null) {
    todos = JSON.parse (localStorage.getItem ("todos"));
    render ();
}

masukanBtn.addEventListener ("click", function() {
    if (inputFld.value != "") {
        var todo = {
            name : inputFld.value,
            status : false
        };
        todos.push (todo);
        render ();
        inputFld.value = "";
    } else {
        alert ("Masukan sebuah jadwal!");
    }
});

function render () {
    var i = 0;
    jadwalLst.innerHTML = "";
    while (i < todos.length) {
        if (todos[i].status == true) {
            jadwalLst.innerHTML += '<li class="list-group-item"><div class="checkbox-item"><input type="checkbox" checked onchange="saveChecked(this, '+i+')"></div><div class="text-item">'+todos[i].name+'</div><div class="delete-item"><button type="button" class="btn btn-outline-danger" onclick="delList('+i+')">X</button></div></li>';
        } else {
            jadwalLst.innerHTML += '<li class="list-group-item"><div class="checkbox-item"><input type="checkbox" onchange="saveChecked(this, '+i+')"></div><div class="text-item">'+todos[i].name+'</div><div class="delete-item"><button type="button" class="btn btn-outline-danger" onclick="delList('+i+')">X</button></div></li>';
        }
        i++;
    }
    localStorage.setItem ("todos", JSON.stringify (todos))
}

function saveChecked (checkbox, index) {
    if (checkbox.checked == true) {
        console.log ("checked", index);
        todos[index].status = true;
        render ();
    } else {
        console.log ("dischecked", index);
        todos[index].status = false;
        render ();
    }
}

function delList (index) {
    todos.splice (index, 1);
    render ();
}