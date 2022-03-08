class Gempa {
    constructor(lokasi, skala) {
        this.lokasi = lokasi;
        this.skala = skala;
    }

    dampak() {
        if (this.skala > 0 && this.skala <= 2) return 'tidak terasa';
        else if (this.skala > 2 && this.skala <= 4) return 'bangunan retak - retak';
        else if (this.skala > 4 && this.skala <= 6) return 'bangunan roboh';
        else if (this.skala > 6) return 'bangunan roboh dan berpotensi tsunami';
    }

    cetakKeteranganLengkap() {
        return `<td>${this.lokasi}</td><td>${this.skala}</td><td>${this.dampak()}</td>`;
    }
}

const gempa1 = new Gempa('Jakarta', 2.3);
const gempa2 = new Gempa('Bogor', 2.5);
const gempa3 = new Gempa('Depok', 1);
const gempa4 = new Gempa('Tanggerang', 1.5);
const gempa5 = new Gempa('Bekasi', 1.8);
const gempa6 = new Gempa('Banten', 6.2);
const gempa7 = new Gempa('Temanggung', 7);
const gempa8 = new Gempa('Yogyakarta', 5);
const gempa9 = new Gempa('Deli Serdang', 4);
const gempa10 = new Gempa('Tegal', 2);

arraVarGempa = [gempa1, gempa2, gempa3, gempa4, gempa5, gempa6, gempa7, gempa8, gempa9, gempa10]
let temp = '';

for (const varGempa of arraVarGempa) {
    temp += `<tr>${varGempa.cetakKeteranganLengkap()}
                </tr>`;
}

let struckturTable =
    `<table><thead><tr class="head-table"><th colspan="3">INFORMASI GEMPA</th></tr><tr><th>Lokasi</th><th>Skala</th><th>Deskripsi</th></tr></thead><tbody>${temp}</tbody></table>`;

document.write(struckturTable);