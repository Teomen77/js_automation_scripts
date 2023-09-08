// Die Liste von Wörtern als Zeichenkette mit Kommas getrennt
const wortListeStr = 'this,is,a,test,text';

// Konvertiere die Zeichenkette in ein Array, indem du sie mit Kommas trennst
const wortListe = wortListeStr.split(',');

// Wähle das Input-Feld und den Add-Button aus
const inputField = document.querySelector('.tag_input_field input');
const addButton = document.querySelector('.add_tag_btn');

// Funktion, um das "input"-Ereignis auszulösen und den Text zu setzen
function setInputAndTriggerEvent(text) {
    inputField.value = text;

    const inputEvent = new Event('input', {
        bubbles: true,
        cancelable: true,
    });

    inputField.dispatchEvent(inputEvent);

    addButton.click(); // Klick auf den "Add" Button
}

// Iteriere durch die Liste von Wörtern und löse das "input"-Ereignis für jedes Wort aus
for (const wort of wortListe) {
    setInputAndTriggerEvent(wort);
}
