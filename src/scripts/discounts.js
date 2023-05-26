function showPricelist() {
    var ele = document.getElementsByName('offer');
    var general = document.getElementById("table-general");
    var u16 = document.getElementById("table-u16");
    var G2 = document.getElementById("table-G2");
    var G3 = document.getElementById("table-G3");
    
    if (ele[0].checked) {
        G2.style.display = "block";
        G3.style.display = "none";
        u16.style.display = "none";
        general.style.display = "none";
       
    } else if (ele[1].checked) {
        G2.style.display = "none";
        G3.style.display = "block";
        u16.style.display = "none";
        general.style.display = "none";
    } else if (ele[2].checked) {
        G2.style.display = "none";
        G3.style.display = "none";
        u16.style.display = "block";
        general.style.display = "none";
    } else {
        G2.style.display = "none";
        G3.style.display = "none";
        u16.style.display = "none";
        general.style.display = "block";
    }
}