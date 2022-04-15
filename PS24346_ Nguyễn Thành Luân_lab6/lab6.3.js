function kiem_tra() {
    var sanpham = document.getElementById('san_pham').value;
    if(sanpham == "") {
        alert("Sản phẩm không được để trống");
        return false;
    }

    var dongia = document.getElementById('don_gia').value;
    if(dongia == "") {
        alert("Đơn giá không được để trống");
        return false;
    }
    if(isNaN(dongia) == true) {
        alert("Đơn giá phải là một số")
    }
}
function giavanchuyen(rdo) {
    if(rdo.value == "noithanh"){
        document.getElementById("gia").innerText = "Free";
    }
    if(rdo.value == "ngoaithanh") {
        document.getElementById("gia").innerText =" Phí vận chuyển: 100000 VNĐ";
    }
}