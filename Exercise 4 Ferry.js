var tanggal = '21 '
var bulan = 1
var tahun= ' 1945'

switch (bulan) {
  case 1:   { bulan = 'Januari'; break; }
  case 2:   { bulan = 'Februari'; break; }
  case 3:   { bulan = 'Maret'; break; }
  case 4:   { bulan = 'April'; break; }
  case 5:   { bulan = 'May'; break; }
  case 6:   { bulan = 'Juni'; break; }
  case 7:   { bulan = 'Juli'; break; }
  case 8:   { bulan = 'Agustus'; break; }
  case 9:   { bulan = 'September'; break; }
  case 10:  { bulan = 'October'; break; }
  case 11:  { bulan = 'November'; break; }
  case 12:  { bulan = 'Desember'; break; }
  default:  { bulan = 'Tidak terjadi apa-apa'; }
}
console.log(tanggal  +  bulan  + tahun)