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

// Save local Storage
function luuDataLocal() {
  var dsNVjson = JSON.stringify(dsNV);
  localStorage.setItem("dsNVLocal", dsNVjson);
}
// Save local Storage
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

function xoaNV(_maNV) {
  var index = timKiemNV(_maNV);
  if (index < 0) {
    return;
  }
  dsNV.splice(index, 1);
  renderTable(dsNV);
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
  var maIsValid = false;
  dsNV.map(function (nv) {
    if (nv.Ma === maNV) {
      maIsValid = true;
    } else {
      maIsValid = false;
    }
  });
  if (maIsValid) {
    alert("Mã nhân viên đã tồn tại");
    return;
  }
  var NV = new NhanVien(
    maNV.trim(),
    tenNV.trim(),
    emailNV.trim(),
    ngaySinhNV.trim(),
    chucVuNV.trim()
  );
  dsNV.push(NV);
  renderTable(dsNV);
}

function suaNV(_maNV) {
  clearAllFields();
  var index = timKiemNV(_maNV);
  if (index < 0) {
    return;
  }
  var nv = dsNV[index];
  document.getElementById("txtMaNV").value = nv.Ma;
  document.getElementById("txtTenNV").value = nv.Ten;
  document.getElementById("txtEmailNV").value = nv.Email;
  document.getElementById("txtNgaySinhNV").value = nv.NgaySinh;
  document.getElementById("txtChucVuNV").value = nv.ChucVu;
}

function renderTable(array) {
  var contentHTML = "";
  for (var index = 0; index < array.length; index++) {
    var nv = array[index];
    contentHTML += `
    <tr>
    <td>${nv.Ma}</td>
    <td>${nv.Ten}</td>
    <td>${nv.Email}</td>
    <td>${nv.NgaySinh}</td>    
    <td>${nv.ChucVu}</td> 
    <td>
    
    <button onclick="suaNV(${nv.Ma})" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Sửa</button>
    <button onclick="xoaNV(${nv.Ma})" class="btn btn-danger">Xóa</button>
    </td>
    </tr> 
    `;
  }
  document.getElementById("tbodyNhanVien").innerHTML = contentHTML;
  luuDataLocal();
}

function timKiemNV(_maNV) {
  for (var index = 0; index < dsNV.length; index++) {
    if (dsNV[index].Ma == _maNV) {
      return index;
    }
  }
}
