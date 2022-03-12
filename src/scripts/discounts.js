function showPricelist() {
    var ele = document.getElementsByName('offer');
    var general = document.getElementById("table-general");
    var u20 = document.getElementById("table-u20");
    var students = document.getElementById("table-students");

    if (ele[0].checked) {
       
        u20.style.display = "block";
        general.style.display = "none";
        students.style.display = "none";
    } else if (ele[1].checked) {
        u20.style.display = "none";
        general.style.display = "none";
        students.style.display = "block";
    } else {
        u20.style.display = "none";
        general.style.display = "block";
        students.style.display = "none";
    }
}