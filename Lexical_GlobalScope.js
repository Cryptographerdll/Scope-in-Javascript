// Scope is like encapsulation make something unreadable in other function .
// Local scope is when you put some data inside currely braces you make it unaccessased .

const API_KEY = "zz45er5ci33015f1f121xze";
// Globale scope

function getKey() {

    const KEY_2 = "0a0a0a2032s0d2z0q30za.";
    console.log(API_KEY);
}

if (true) {

    const KEY_3 = "er123smls52x000056s31e";
}

getKey();