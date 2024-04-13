// const personCount = parseInt(prompt("Nece adam var?"));

// // Yaslara gore odenecek qiymeti hesapla
// let totalPayment = 0;

// for (let i = 0; i < personCount; i++) {
//     const age = parseInt(prompt(`Kişi ${i + 1} yasini gostersin:`));

//     if (age < 6) {
//         totalPayment += 0;
//     } else if (age >= 6 && age < 18) {
//         totalPayment += 0.3; // 30 qəpik
//     } else {
//         totalPayment += 0.5; // 50 qəpik
//     }
// }

// // Toplam ödenecek qiymeti yaz
// console.log(`Odenilecek qiymet : ${totalPayment.toFixed(2)} manat`);
      

                            //  Ev tapsirigi.
// Array elementlerin sayini secmeliyem he deyiremse yaratsin yox deyiremse yaratmasin
// array daxilinde obyekt olmalidir ve onlarin icinde ad,soyad ve yas olmalidir



















//1. İstifadəçinin daxil etdiyi doğum ilinə görə yaşını tapın
function findAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }
  
  //2. 6 Simvoldan ibarət olan random şifrə yaradın. (yalnız balaca hərflərdən ibarət)
  function generateRandomPassword() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }
  
  //3. Daxil olunan birinci cümlədə, 2-ci sözün olub olmadığını tapın.
  function hasSecondWord(sentence) {
    const words = sentence.trim().split(/\s+/);
    return words.length > 1;
  }
  
  //4. Daxil olunan stringi böyük hərfə çevirin
  function toUpperCase(str) {
    return str.toUpperCase();
  }
  
  //5. Daxil olunan stringi kiçik hərfə çevirin
  function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  //6. Daxil olunan stringin ilk hərfini böyüdün
  function capitalizeFirstLetter(str) {
    if (str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  //7. Daxil olunan stringin son hərfini böyüdün
  function capitalizeLastLetter(str) {
    if (str.length === 0) {
      return str;
    }
    return str.slice(0, -1) + str.charAt(str.length - 1).toUpperCase();
  }
  
  // Misal üçün funksiyalardan istifadə edə bilərsiniz
  // Yaş tapmaq ucun
  const birthYear = 2005;
  console.log(`Yaş: ${findAge(birthYear)}`);
  
  // Random şifrə yaradılması
  console.log(`Random şifrə: ${generateRandomPassword()}`);
  
  // Cümlənin 2-ci sözü var ?
  const sentence = 'Bu birinci cümlədir';
  console.log(`Cümlədə 2-ci söz: ${hasSecondWord(sentence) ? 'var' : 'yox'}`);
  
  // Stringi böyük hərfə çevirin
  const lowerString = 'salam babayev';
  console.log(`Böyük hərf: ${toUpperCase(lowerString)}`);
  
  // Stringi kiçik hərfə çevirin
  const upperString = 'SALAM BABAYEV';
  console.log(`Kiçik hərf: ${toLowerCase(upperString)}`);
  
  // Stringin ilk hərfini böyüdün
  const str = 'salam';
  console.log(`İlk hərf böyüdülmüş: ${capitalizeFirstLetter(str)}`);
  
  // Stringin son hərfini böyüdün
  const str2 = 'salam';
  console.log(`Son hərf böyüdülmüş: ${capitalizeLastLetter(str2)}`);
  