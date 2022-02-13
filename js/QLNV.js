var dsNV = [];
autoCheck("txtMaNV", "spanMaNV");
autoCheck("txtTenNV", "spanTenNV");
autoCheck("txtEmailNV", "spanEmailNV");
autoCheck("txtNgaySinhNV", "spanNSNV");
autoCheckSelect("txtChucVuNV", "spanCVNV");
// Loading data from local Storage
var dsNVLocal = JSON.parse(localStorage.getItem("dsNVLocal"));
if (dsNVLocal !== null) {
  dsNV = dsNVLocal.map(function (nv) {
    return new NhanVien(nv.Ma, nv.Ten, nv.Email, nv.NgaySinh, nv.ChucVu);
  });
  renderTable(dsNV);
}
// Loading data from local Storage
function clearAllFields() {
  document.getElementById("txtMaNV").value = "";
  document.getElementById("txtTenNV").value = "";
  document.getElementById("txtEmailNV").value = "";
  document.getElementById("txtNgaySinhNV").value = "";
  document.getElementById("txtChucVuNV").value = "";
  document.getElementById("spanMaNV").innerText = "";
  document.getElementById("spanTenNV").innerText = "";
  document.getElementById("spanEmailNV").innerText = "";
  document.getElementById("spanNSNV").innerText = "";
  document.getElementById("spanCVNV").innerText = "";
}

function SelectChangeVal() {
  isEmpty("txtChucVuNV", "spanCVNV");
}
function themNV() {
  var maNV = document.getElementById("txtMaNV").value;
  var tenNV = document.getElementById("txtTenNV").value;
  var emailNV = document.getElementById("txtEmailNV").value;
  var ngaySinhNV = document.getElementById("txtNgaySinhNV").value;
  var chucVuNV = document.getElementById("txtChucVuNV").value;
  var _isEmpty =
    isEmpty("txtMaNV", "spanMaNV") |
    isEmpty("txtTenNV", "spanTenNV") |
    isEmpty("txtEmailNV", "spanEmailNV") |
    isEmpty("txtNgaySinhNV", "spanNSNV") |
    isEmpty("txtChucVuNV", "spanCVNV");
  if (_isEmpty) {
    return;
  }
  if (
    !validateEmail("txtEmailNV", "spanEmailNV") |
    !validateDate("txtNgaySinhNV", "spanNSNV")
  ) {
    return;
  }

  var NV = new NhanVien(maNV, tenNV, emailNV, ngaySinhNV, chucVuNV);
  dsNV.push(NV);
  console.log({ NV });
}
