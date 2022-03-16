function showPricelist() {
    var ele = document.getElementsByName('offer');
    var general = document.getElementById("table-general");
    var u16 = document.getElementById("table-u16");
    var students = document.getElementById("table-students");

    if (ele[0].checked) {
       
        u16.style.display = "block";
        general.style.display = "none";
        students.style.display = "none";
    } else if (ele[1].checked) {
        u16.style.display = "none";
        general.style.display = "none";
        students.style.display = "block";
    } else {
        u16.style.display = "none";
        general.style.display = "block";
        students.style.display = "none";
    }
}