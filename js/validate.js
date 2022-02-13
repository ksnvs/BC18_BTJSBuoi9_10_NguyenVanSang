function isEmpty(idInput, idErr) {
  var value = document.getElementById(idInput).value.trim();
  if (!value.trim().length) {
    document.getElementById(idErr).innerText = `Trường này không được để trống`;
  } else {
    document.getElementById(idErr).innerText = ``;
  }
  return !value.trim().length;
}

function autoCheck(idInput, idErr) {
  document.getElementById(idInput).addEventListener("input", function () {
    if (isEmpty(idInput, idErr)) {
      document.getElementById(
        idErr
      ).innerText = `Trường này không được để trống`;
    } else {
      document.getElementById(idErr).innerText = ``;
    }
  });
}

function autoCheckSelect(idInput, idErr) {
  document.getElementById(idInput).addEventListener("change", function () {
    if (isEmpty(idInput, idErr)) {
      document.getElementById(
        idErr
      ).innerText = `Trường này không được để trống`;
    } else {
      document.getElementById(idErr).innerText = ``;
    }
  });
}

function validateEmail(idInput, idErr) {
  var value = document.getElementById(idInput).value.trim();
  var re = /\S+@\S+\.\S+/;
  if (re.test(value)) {
    document.getElementById(idErr).innerText = ``;
  } else {
    document.getElementById(idErr).innerText = `Email không hợp lệ`;
  }
  return re.test(value);
}

function validateDate(idInput, idErr) {
  var _isValid = false;
  var date = document.getElementById(idInput).value.trim();
  var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
  if (pattern.test(date)) {
    var data = date.split("/");
    if (isNaN(Date.parse(data[2] + "-" + data[1] + "-" + data[0]))) {
      _isValid = false;
    } else {
      if (
        data[0] * 1 > 31 ||
        data[0] * 1 <= 0 ||
        data[1] * 1 > 12 ||
        data[1] <= 0
      ) {
        _isValid = false;
      } else {
        switch (data[1] * 1) {
          case 2: {
            if ((data[2] * 1) % 4 === 0) {
              if (data[0] <= 29) {
                _isValid = true;
              } else {
                _isValid = false;
              }
            } else {
              if (data[0] <= 28) {
                _isValid = true;
              } else {
                _isValid = false;
              }
            }
            break;
          }
          case 4:
          case 6:
          case 9:
          case 11: {
            if (data[0] <= 30) {
              _isValid = true;
            } else {
              _isValid = false;
            }
            break;
          }
          default: {
            _isValid = true;
          }
        }
      }
    }
  } else {
    _isValid = false;
  }
  if (_isValid) {
    document.getElementById(idErr).innerText = ``;
  } else {
    document.getElementById(idErr).innerText = `Ngày sinh không hợp lệ`;
  }
  return _isValid;
}
