var Nama = 'Ferry';
var Peran = 'Penyihir';

if (Nama === '') {
  console.log('Nama harus diisi!');
} else if (Peran === '') {
  console.log('Halo ' + Nama + ', Pilih peranmu untuk memulai game!');
}
if (Peran === 'Ksatria') {
  console.log('Selamat datang di Dunia Proxytia, ' + Nama + '. Halo Ksatria ' + Nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (Peran === 'Tabib') {
  console.log('Selamat datang di Dunia Proxytia, ' + Nama + '. Halo Tabib ' + Nama + ', kamu akan membantu temanmu yang terluka.');
} else if (Peran === 'Penyihir') {
  console.log('"Selamat datang di Dunia Proxytia, ' + Nama + '. Halo Penyihir ' + Nama + ', ciptakan keajaiban yang membantu kemenanganmu!"');
}
