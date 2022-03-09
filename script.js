// deklarasi dan instansi variabel 
const frm = document.getElementById("formulir");
const multiple = document.getElementById("*");
const divide = document.getElementById("/");
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const batal = document.getElementById("batal");
let a1 = frm.a1;
let a2 = frm.a2;
let hasil = frm.hasil;

// fungsi penghapus value sebelumnya
function eraseVal(a) {
    a.value = '';
};

// fungsi pengecekan apabila NAN atau string kosong maka display class menjadi block. Lalu menambahkan class pada element, dan menampilkan kata dengan innerHTML. Apabila bilangan Numeric, class dihapus dan mengubah nilai display menjadi none.
function validasiIsNan(a, b, c) {
    if (isNaN(a.value) || a.value == '') {
        document.querySelector(c).style.display = 'block';
        document.getElementById(b).classList.add('remove');
        document.querySelector(c).innerHTML = '*Harap isi data berupa angka';
    } else {
        document.getElementById(b).classList.remove('remove');
        document.querySelector(c).style.display = 'none';
    };
};

// beberapa fungsi penghitungan
function getResultOperandKali() {
    hitung(a1.value * a2.value);
};

function getResultOperandBagi() {
    hitung(a1.value / a2.value);
};

// #catatan : pertambahan sering kali dianggap concatenate pada javascript maka merubah tipe datanya ke float agar dapat menghitung bilangan desimal.
function getResultOperandTambah() {
    hitung(parseFloat(a1.value) + parseFloat(a2.value));
};

function getResultOperandKurang() {
    hitung(a1.value - a2.value);
};

function getResultOperandAkar() {
    hitung(Math.pow(a1.value, a2.value));
};

function getResultOperandBatal() {
    eraseVal(a1);
    eraseVal(a2);
    eraseVal(hasil);
};

// fungsi untuk menampilkan hasil hitungan dengan logika apabila "NaN" maka alert akan keluar dan mereset dengan function batal
function hitung(a) {
    if (isNaN(a)) {
        alert("Error, Harap isi data berupa angka");
        getResultOperandBatal();
    } else {
        hasil.value = a;
    }
};

// Looping button
arrOpr = ["*", "/", "+", "-", "^", "batal"];
let temp = '';
let cadanganOperand;
for (let opr of arrOpr) {
    if (opr == "*") cadanganOperand = "Kali";
    else if (opr == "/") cadanganOperand = "Bagi";
    else if (opr == "+") cadanganOperand = "Tambah";
    else if (opr == "-") cadanganOperand = "Kurang";
    else if (opr == "^") cadanganOperand = "Akar";
    else if (opr == "batal") cadanganOperand = "Batal";
    temp += `<button onclick="getResultOperand${cadanganOperand}()" type="button" id="${opr}" value="${opr}">${opr}</button>`;
}
document.querySelector(".button-operand").innerHTML = temp;