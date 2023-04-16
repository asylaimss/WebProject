function Add(){
    // remove if there is
    var deleting = document.getElementById(`blablabla`);
    deleting.remove();
    // create
    var a = document.getElementById("input_1").value;
    let div1 = document.createElement('div');
    div1.id = `blablabla`;
    // div1.className = "div_4";
    div1.innerHTML = a;
    var place = document.getElementById("div_out");
    place.appendChild(div1);
}
alert("Hello");

// var Add = {
//       init: () => { 
//         // remove if there is
//         var deleting = document.getElementById(`blablabla`);
//         deleting.remove();
//         // create
//         var a = document.getElementById("input_1").value;
//         let div1 = document.createElement('div');
//         div1.id = `blablabla`;
//         // div1.className = "div_4";
//         div1.innerHTML = a;
//         var place = document.getElementById("div_out");
//         place.appendChild(div1);
//       } 
// }