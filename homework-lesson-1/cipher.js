let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("");

function encrypt(str, num) {
  let lowerCaseStr = str.toLowerCase();
  let newStr = "";

  for (var i = 0; i < lowerCaseStr.length; i++) {
    let currentLetter = lowerCaseStr[i];
    if (currentLetter == " ") {
      newStr += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 32) newIndex = newIndex - 33;
    if (newIndex < 0) newIndex = 33 + newIndex;
    if (str[i] == str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    } else newStr += alphabet[newIndex];
  }
  return newStr;
}

function decrypt(str, num) {
  let lowerCaseStr = str.toLowerCase();
  let newStr = "";

  for (var i = 0; i < lowerCaseStr.length; i++) {
    let currentLetter = lowerCaseStr[i];
    if (currentLetter == " ") {
      newStr += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex - num;
    if (newIndex > 32) newIndex = newIndex - 33;
    if (newIndex < 0) newIndex = 33 + newIndex;
    if (str[i] == str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    } else newStr += alphabet[newIndex];
  }
  return newStr;
}


console.log("Зашифрованный текст - " + encrypt("Шифр Цезаря один из наиболее древнейших известных шифров", 3));
console.log("Расшифрованный текст - " + decrypt("Ылчу Щзкгув сжлр лк рглдсозз жузерзмылш лкезфхрюш ылчусе", 3));
