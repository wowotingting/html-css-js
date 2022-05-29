// membuat konstanta pi
// const pi = 3.14 ;
// console.log("Halo dunia, ini adl javascript pertamaku");
// console.log(pi) ;

// const pi = 3.14; // konstanta angka
// let harga = 15000; // data angka
// let nama = "LipSum"; // data nama;

// ganti harga jadi 10000
// harga = 10000;
// console.log(pi) ;
// ganti pi jadi 3.25
// pi = 3.25; // di sini akan terjadi error

// let apelPerKilo = 10000;
// let minyakPerLiter = 48000;

// // misalnya harga apel turun
// apelPerKilo = apelPerKilo - 2000;

// // misalnya harga minyak naik lagi
// minyakPerLiter = minyakPerLiter + 3000

// let hargaBelanja = 2 * apelPerKilo + 5 * minyakPerLiter;

// console.log('total'); // berapakah hasilnya?

// ini adalah sebuah variabel, sekarang menampung Number
// let variabelDinamis = 10;

// // sekarang akan kita ganti tipe data nya menjadi boolean
// variabelDinamis = true;

// // sekarang akan berubah lagi menjadi String
// variabelDinamis = "Halo, aku adalah string !";
// console.log(variabelDinamis);

// camelCase, PascalCase, snake_case, kebab-case
// let hasil = 4 > 2 && 4 < 2 ; // true dan false hasilnya FALSE
// let hasil2 = 4 > 2 && 4 > 2 ; // true dan true hasilnya TRUE
// let hasil3 = 4 < 2 && 4 < 2 ; //
// let hasil4 = 4 < 2 && 4 > 2 ; 

// console.log(hasil);
// console.log(hasil2);
// console.log(hasil3);
// console.log(hasil4);

// console.log("===========");

// let hasil5  = (4 > 2) || (4 < 2);
// let hasil6 = (4 > 2) || (4 > 2);
// let hasil7 = (4 < 2) || (4 < 2);
// let hasil8 = (4 < 2) || (4 > 2);

// console.log(hasil5);
// console.log(hasil6);
// console.log(hasil7);
// console.log(hasil8);

// Cara penulisan ini namanya adalah "fungsi" (function)
// akan dipelajari nanti yah !
function kalkulasiNilaiTotal(uts, uas, tugas) {
    const nilaiUts = uts;
    const nilaiUas = uas;
    const nilaiTugas = tugas;
    const nilaiTotal = (30/100 * nilaiUts) + (0.4 * nilaiUas) + (0.3 * nilaiTugas);
  
    // JANGAN DIMODIFIKASI
    return nilaiTotal;
  };
  
  function cetakHasil(total) {
    const nilaiTotal = total;
    const apakahLulus = nilaiTotal >= 70;
    // bag ini tdk di modif
    let kalimatHasil ;

    if(apakahLulus) {  
      kalimatHasil = "Anda Lulus " + nilaiTotal;
      console.log(kalimatHasil) ;
    } else {
      kalimatHasil = "Anda Tidak Lulus" + nilaiTotal;
      console.log(kalimatHasil) ;
    }
  }
  
  // Main function
  // JANGAN DIMODIFIKASI
  function main() {
    // Anak 1: Lulus
    let nilaiAnakPertama = kalkulasiNilaiTotal(80,70,70);
    cetakHasil(nilaiAnakPertama);
    // Output: Selamat ! Anda lulus dengan nilai 73.
  
    // Anak 2: Tidak Lulus
    let nilaiAnakKedua = kalkulasiNilaiTotal(70,60,70);
    cetakHasil(nilaiAnakKedua);
    // Output: Mohon maaf... Anda dinyatakan tidak lulus karena nilai Anda kurang dari 70.
  }
  
  main();