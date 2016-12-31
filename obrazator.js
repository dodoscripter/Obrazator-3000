var losoweCzesciCiala = ["Twarz", "Noga", "Ręka", "Miednica"];
var losowePrzymiotniki = ["Cuchnąca", "Brudna", "Głupia", "Brzydka", "Okropna"];
var losoweSlowa = ["Mucha", "Glista", "Małpa", "Jaszczurka", "Kawa", "Odbytnica"]
var losowaCzescCiala = losoweCzesciCiala[Math.floor(Math.random() * 4)];
var losowyPrzymiotnik = losowePrzymiotniki[Math.floor(Math.random() * 5)];
var losoweSlowo = losoweSlowa[Math.floor(Math.random() * 6)];
var zdanie = "Twoja " + losowaCzescCiala + " jest jak " + losowyPrzymiotnik + " "  + losoweSlowo;
 napis(zdanie);
