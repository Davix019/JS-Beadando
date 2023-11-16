let szam = 20000 // Az induló szám értéke
const szamElem = document.getElementById("szam");
const novekedesElem = document.getElementById("novekedes")

let cursor = 0
const cursorOwned = document.getElementById("cursorowned");
const cursorCost = document.getElementById("cursorcost");

let grandma = 0
const grandmaOwned = document.getElementById("grandmaowned");
const grandmaCost = document.getElementById("grandmacost");

let farm = 0
const farmOwned = document.getElementById("farmowned");
const farmCost = document.getElementById("farmcost");

let mine = 0
const mineOwned = document.getElementById("mineowned");
const mineCost = document.getElementById("minecost");

let novekedes = 0
/*cursorOwned * cursorcp +
grandmaOwned * grandmacp +
farmOwned * farmcp +
mineOwned * minecp*/

let cursorcp = 0.1, cursorcost = 15
let grandmacp = 1, grandmacost = 100
let farmcp = 8, farmcost = 1100
let minecp = 47, minecost = 12000

function novelSzamot()
{
    szam += novekedes // Szám növelése
    kerekitettSzam = parseInt(szam)
    szamElem.innerText = kerekitettSzam // Az új érték megjelenítése a HTML-ben
}

function Kattint()
{
    szam++ // Szám növelése
    kerekitettSzam = parseInt(szam)
    szamElem.innerText = kerekitettSzam // Az új érték megjelenítése a HTML-ben
}

function Cursor()
{
    if (szam >= cursorcost)
    {
        szam -= cursorcost
        cursorcost *= 1.15
        cursorcost = parseInt(cursorcost)
        cursorCost.innerText = cursorcost
        cursor++
        cursorOwned.innerText = cursor

        novekedes += cursorcp
        kerekitettNovekedes = novekedes.toFixed(1)
        if (kerekitettNovekedes % 1 == 0)
        {
            kerekitettNovekedes = parseInt(kerekitettNovekedes)
        }
        novekedesElem.innerText = kerekitettNovekedes
    }
    else
    {
        alert("You don't have enough resources")
    }
}

function Grandma()
{
    if (szam >= grandmacost)
    {
        szam -= grandmacost
        grandmacost *= 1.15
        grandmacost = parseInt(grandmacost)
        grandmaCost.innerText = grandmacost
        grandma++
        grandmaOwned.innerText = grandma

        novekedes += grandmacp
        kerekitettNovekedes = novekedes.toFixed(1)
        if (kerekitettNovekedes % 1 == 0)
        {
            kerekitettNovekedes = parseInt(kerekitettNovekedes)
        }
        novekedesElem.innerText = kerekitettNovekedes
    }
    else
    {
        alert("You don't have enough resources")
    }
}

function Farm()
{
    if (szam >= farmcost)
    {
        szam -= farmcost
        farmcost *= 1.15
        farmcost = parseInt(farmcost)
        farmCost.innerText = farmcost
        farm++
        farmOwned.innerText = farm

        novekedes += farmcp
        kerekitettNovekedes = novekedes.toFixed(1)
        if (kerekitettNovekedes % 1 == 0)
        {
            kerekitettNovekedes = parseInt(kerekitettNovekedes)
        }
        novekedesElem.innerText = kerekitettNovekedes
    }
    else
    {
        alert("You don't have enough resources!")
    }
}

function Mine()
{
    if (szam >= minecost)
    {
        szam -= minecost
        minecost *= 1.15
        minecost = parseInt(minecost)
        mineCost.innerText = minecost
        mine++
        mineOwned.innerText = mine

        novekedes += minecp
        kerekitettNovekedes = novekedes.toFixed(1)
        if (kerekitettNovekedes % 1 == 0)
        {
            kerekitettNovekedes = parseInt(kerekitettNovekedes)
        }
        novekedesElem.innerText = kerekitettNovekedes

        stopRotation()
        startRotation(3)

        var audio = document.getElementById("myAudio");
        audio.play();
    }
    else
    {
        alert("You don't have enough resources")
    }
}

// A setInterval használatával az novelSzamot függvény másodpercenként fut
setInterval(novelSzamot, 1000); // 1000 millimásodperc = 1 másodperc


//Forgatás
let currentRotation = 0;
let rotationInterval;

function rotateImage()
{
    const image = document.getElementById("rotatingImage");
    currentRotation = (currentRotation + 1) % 360;
    image.style.transform = `rotate(${currentRotation}deg)`;
}

function startRotation(szam)
{
    rotationInterval = setInterval(rotateImage, szam);
}

function stopRotation()
{
    clearInterval(rotationInterval);
}

window.onload = startRotation(30);


//Fokozatosan gyorsuló forgatás