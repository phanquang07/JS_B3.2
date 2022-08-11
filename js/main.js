// Bài 1: Tính điểm tốt nghiệp

function tinhDTK(diemUT) {
  var diem1 = Number(document.querySelector('#inputScore1').value)
  var diem2 = Number(document.querySelector('#inputScore2').value)
  var diem3 = Number(document.querySelector('#inputScore3').value)
  var diemChuan = Number(document.querySelector('#inputScore0').value)

  var diem3M = diem1 + diem2 + diem3
  var diemTK = diem3M + tinhDUT(diemUT)
  var contents = ''

  if (diemTK >= diemChuan && diem1 !== 0 && diem2 !== 0 && diem3 !== 0) {
    contents = 'Bạn đã đậu <br>'
  } else {
    contents = 'Bạn đã trượt <br>'
  }
  console.log('DTK: ', diemTK);
  document.querySelector('#calcScore').innerHTML = contents + ' Điểm: ' + diemTK
}
document.querySelector('#btn-calcScore').onclick = tinhDTK

// Tính điểm ưu tiên
function tinhDUT(diemUT) {
  var selectDiemKV = document.querySelector('#inputScore4')
  var diemKV = Number(selectDiemKV.options[selectDiemKV.selectedIndex].value)
  var selectDiemDT = document.querySelector('#inputScore5')
  var diemDT = Number(selectDiemDT.options[selectDiemDT.selectedIndex].value)
  var diemUT = ''
  return diemUT = diemKV + diemDT
}


// Bài 2: Tính tiền điện

function tinhTienDien() {
  const tu1Den50 = 500
  const tu50Den100 = 650
  const tu100Den150 = 850
  const tu150Den200 = 1100
  const tu200TroLen = 1300

  var fName = document.querySelector('#inputUser').value
  var soKw = Number(document.querySelector('#inputKw').value)
  var tongTien = ''

  if (soKw < 0) {
    alert('k hop le')
  } else if (soKw <= 50) {
    tongTien = soKw * tu1Den50
  } else if (soKw <= 100) {
    tongTien = (50 * tu1Den50) + ((soKw - 50) * tu50Den100)
  } else if (soKw <= 150) {
    tongTien = (50 * tu1Den50) + (50 * tu50Den100) + ((soKw - 100) * tu100Den150)
  } else if (soKw <= 200) {
    tongTien = (50 * tu1Den50) + (50 * tu50Den100) + (50 * tu100Den150) + ((soKw - 150) * tu150Den200)
  } else if (soKw > 200) {
    tongTien = (50 * tu1Den50) + (50 * tu50Den100) + (50 * tu100Den150) + (50 * tu150Den200) + ((soKw - 200) * tu200TroLen)
  }
  document.querySelector('#viewElecttricBill').innerHTML = `Họ tên: ${fName} <br> Tiền điện: ${tongTien}`
}

document.querySelector('#btn-calcBill').onclick = tinhTienDien