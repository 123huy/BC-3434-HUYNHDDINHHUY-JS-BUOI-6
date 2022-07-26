document.getElementById("btnTaoThe").onclick = function(){
    var content = "";
    var div1 = "<div style = 'background-color: red; color: white; padding: 10px 0;'>" + "Đỏ Thẻ Chẵn" + "</div>";
    var div2 = "<div style = 'background-color: blue; color: white; padding: 10px 0;'>" + "Xanh Thẻ Lẻ" + "</div>";
    for(var i = 1; i <= 10; i++){
        if(i % 2 === 0){
            content += div1;
        }else{
            content += div2;
        }
    }
    document.getElementById("showInfo").innerHTML = content;
}