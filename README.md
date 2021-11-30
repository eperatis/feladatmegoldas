# Feladat megoldása
Feladat szövege:
```
Adott egy http végpont ("/rest/jsons/init"), amelyen vagy adat, vagy url található. A válasz szerkezete az alábbi:
adat esetben: { content: 421327 }
url esetben: { redirectUrl: "/rest/jsons/bba93f12-4ec6-11ec-81d3-0242ac130003" }

Ha adat érkezett, akkor annak tartalmát meg kell jeleníteni egy "result" id-jú div-ben a html oldalon.
Ha url érkezett, akkor az url-t kell követni (tehát egy újabb http hívást kell küldeni az új url-re),
azon az url-en ismét vagy adat, vagy url található az előbbiek szerint.

Feladat:
Készíts kódot, ami megjeleníti az adatot, vagy ha 30 redirectnél többet kellene kezelni, akkor kiírja hogy "túl sok átirányítás".
A kiíráshoz már rendelkezésre áll a megjelenítő függvény és a html, amiket használni kell:

<div id="result">loading...</div>

function showResult(result){
    document.getElementById('result').innerHTML=result;
}

Használható technológiák: natív javascript böngészőben, nodejs, axios vagy nativ xhr kezelés.
Ügyelj, hogy a lehető legteljesebb megoldást készítsd el!
```
## Leírás
A feladat megoldása a frontend mappában található, ahol elkészítettem egy alap HTML vázat, abba belaraktam a div-et,
ami kiírja a result-ot. A script.js fájlban XHR segítségével küldtem egy kérést az adott végpontra és
elindítottam egy sámlálót ami 30-ig mehet. A kérés akkor indul amikor betölt az oldal.
A visszaérkezett választ megvizsgáltam és ha `content` érkezett vissza akkor kiírtam az adatot,
ha `redirectUrl` akkor pedig indítottam egy új kérést az adott végpontra.

A feladat kipróbálására készítettem egy nodejs backend-et amit a backend mappában van.
`node app.js` paranccsal futattam. Csak tesztelés szempontjából készítettem el.
