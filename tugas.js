//Menghitung Keliling lingkaran
var diameter = prompt ("masukan diameter:")
var keliling = 3.14 * diameter;
console.log("keliling lingkarang tersebut adalah :" +keliling)

//Menghitung Luas Persegi Panjang 
var panjang  = prompt ("masukan panjang persegi:")
var lebar = prompt ("masukan lebar persegi :" )
var luas = panjang * lebar
console.log("luas persegi panjang tersebut adalah:" + luas)

//Menghitung Volume Kubus
var sisi =  prompt("masukan sisi :" )
var volume = sisi * sisi * sisi
console.log("volume kubus tersebut adalah :" + volume);


//Buat program yang meminta suhu 
var suhu = prompt("masukan suhu dalam celcius")
var fahrenheit = (suhu * 9/3) + 32 
console.log("suhu tersebut adalah " + fahrenheit +" F")


//Buat aplikasi  sederhana untuk menghitung uang kembalian 
var harga = 28000
var telur = prompt ("berapa jumlah telur yang di beli: ")
var total = telur * 28000
var uang = prompt ("uang yang di berikan: ")
var kembali = uang - total
console.log("Jumlah Telur(kg) :" + telur + "kilo")
console.log("total bayar : " + total )
console.log("Uang yang dibayarkan: " + uang)
console.log("uang kembalian : " + kembali)
