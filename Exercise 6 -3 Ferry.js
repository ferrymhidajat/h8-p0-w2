//ganti angka= 0,1
for(angka=0; angka<=100; angka++) {
  angka = angka + 1;
if (angka%2 === 0)
  console.log(angka + ' Genap');
  else
  console.log(angka + ' Ganjil');
}

for(angka=0; angka<=100; angka+=2) {
if (angka%3 === 0)
  console.log(angka + ' is kelipatan 3');
}

for(angka=0; angka<=100; angka+=5) {
if (angka%5 === 0)
  console.log(angka + ' is kelipatan 5');
}

for(angka=0; angka<=100; angka+=9) {
if (angka%9 === 0)
  console.log(angka + ' is kelipatan 9');
}
  
