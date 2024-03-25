const personCount = parseInt(prompt("Nece adam var?"));

// Yaslara gore odenecek qiymeti hesapla
let totalPayment = 0;

for (let i = 0; i < personCount; i++) {
    const age = parseInt(prompt(`Kişi ${i + 1} yasini gostersin:`));

    if (age < 6) {
        totalPayment += 0;
    } else if (age >= 6 && age < 18) {
        totalPayment += 0.3; // 30 qəpik
    } else {
        totalPayment += 0.5; // 50 qəpik
    }
}

// Toplam ödenecek qiymeti yaz
console.log(`Odenilecek qiymet : ${totalPayment.toFixed(2)} manat`);