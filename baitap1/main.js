document.getElementById("btnXemKetQua").onclick = function(){
    var sum = 0;
    var number = 0;
    
    while (sum < 10000){
        number++;
        sum += number;
    }
    document.getElementById("showInfo").innerHTML = "Số nguyên dương nhỏ nhất là: " + number;
}