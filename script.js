// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Example Data
const examples = {
    variables: {
        title: 'Variabelen',
        code: `// Variabelen declareren
let naam = "Marouf";
const leeftijd = 25;
var stad = "Amsterdam";

// Let - kan worden aangepast
naam = "Ahmed";
console.log(naam); // "Ahmed"

// Const - kan niet worden aangepast
// leeftijd = 26; // Error!

// Var - oude manier (niet meer aanbevolen)
console.log(stad); // "Amsterdam"`,
        explanation: 'let: kan worden aangepast, const: constante waarde, var: oude manier'
    },
    datatypes: {
        title: 'Data Types',
        code: `// String
let tekst = "Hallo";
console.log(typeof tekst); // "string"

// Number
let getal = 42;
console.log(typeof getal); // "number"

// Boolean
let waar = true;
console.log(typeof waar); // "boolean"

// Object
let persoon = {
    naam: "Marouf",
    leeftijd: 25
};
console.log(typeof persoon); // "object"

// Array
let lijst = [1, 2, 3];
console.log(typeof lijst); // "object"
console.log(Array.isArray(lijst)); // true

// Null & Undefined
let niets = null;
let nietGedefinieerd = undefined;`,
        explanation: 'JavaScript heeft verschillende data types: string, number, boolean, object, null, undefined'
    },
    operators: {
        title: 'Operators',
        code: `// Rekenkundige operators
let a = 10;
let b = 5;
console.log(a + b); // 15 (optellen)
console.log(a - b); // 5 (aftrekken)
console.log(a * b); // 50 (vermenigvuldigen)
console.log(a / b); // 2 (delen)
console.log(a % b); // 0 (modulo/rest)

// Vergelijkingsoperators
console.log(a > b);  // true
console.log(a < b);  // false
console.log(a === b); // false (gelijk aan)
console.log(a !== b); // true (niet gelijk aan)

// Logische operators
let x = true;
let y = false;
console.log(x && y); // false (EN)
console.log(x || y); // true (OF)
console.log(!x);     // false (NIET)`,
        explanation: 'Operators worden gebruikt voor berekeningen, vergelijkingen en logica'
    },
    loops: {
        title: 'Loops',
        code: `// For loop
for (let i = 0; i < 5; i++) {
    console.log("Nummer:", i);
}
// Output: 0, 1, 2, 3, 4

// While loop
let teller = 0;
while (teller < 3) {
    console.log("Teller:", teller);
    teller++;
}
// Output: 0, 1, 2

// ForEach (voor arrays)
let nummers = [10, 20, 30];
nummers.forEach(nummer => {
    console.log(nummer * 2);
});
// Output: 20, 40, 60

// For...of loop
for (let nummer of nummers) {
    console.log(nummer);
}
// Output: 10, 20, 30`,
        explanation: 'Loops herhalen code. For, while, forEach en for...of zijn veelgebruikte loops'
    },
    conditionals: {
        title: 'Conditionals',
        code: `// If/else
let leeftijd = 18;
if (leeftijd >= 18) {
    console.log("Je bent volwassen");
} else {
    console.log("Je bent minderjarig");
}

// If/else if/else
let cijfer = 85;
if (cijfer >= 90) {
    console.log("Uitstekend!");
} else if (cijfer >= 70) {
    console.log("Goed!");
} else {
    console.log("Probeer het nog eens");
}

// Switch
let dag = "maandag";
switch (dag) {
    case "maandag":
        console.log("Start van de week");
        break;
    case "vrijdag":
        console.log("Weekend komt eraan!");
        break;
    default:
        console.log("Gewone dag");
}

// Ternaire operator
let status = leeftijd >= 18 ? "Volwassen" : "Minderjarig";
console.log(status);`,
        explanation: 'Conditionals maken beslissingen in je code mogelijk'
    },
    functions: {
        title: 'Functions',
        code: `// Function declaration
function groet(naam) {
    return "Hallo, " + naam + "!";
}
console.log(groet("Marouf")); // "Hallo, Marouf!"

// Arrow function
const optellen = (a, b) => {
    return a + b;
};
console.log(optellen(5, 3)); // 8

// Korte arrow function
const vermenigvuldigen = (a, b) => a * b;
console.log(vermenigvuldigen(4, 5)); // 20

// Function met default parameters
function maakNaam(voornaam, achternaam = "Onbekend") {
    return voornaam + " " + achternaam;
}
console.log(maakNaam("Marouf")); // "Marouf Onbekend"
console.log(maakNaam("Marouf", "Ahmed")); // "Marouf Ahmed"`,
        explanation: 'Functions zijn herbruikbare code blokken. Arrow functions zijn moderne syntax'
    },
    objects: {
        title: 'Objects & Classes',
        code: `// Object literal
let persoon = {
    naam: "Marouf",
    leeftijd: 25,
    groet: function() {
        return "Hallo, ik ben " + this.naam;
    }
};
console.log(persoon.naam); // "Marouf"
console.log(persoon.groet()); // "Hallo, ik ben Marouf"

// Class
class Auto {
    constructor(merk, model) {
        this.merk = merk;
        this.model = model;
    }
    
    info() {
        return this.merk + " " + this.model;
    }
}

let mijnAuto = new Auto("Toyota", "Corolla");
console.log(mijnAuto.info()); // "Toyota Corolla"`,
        explanation: 'Objects slaan data op. Classes zijn blauwdrukken voor objects'
    },
    arrays: {
        title: 'Arrays & Methods',
        code: `let nummers = [1, 2, 3, 4, 5];

// Map - transformeer elk element
let verdubbeld = nummers.map(n => n * 2);
console.log(verdubbeld); // [2, 4, 6, 8, 10]

// Filter - filter elementen
let groot = nummers.filter(n => n > 3);
console.log(groot); // [4, 5]

// Reduce - reduceer tot één waarde
let som = nummers.reduce((totaal, n) => totaal + n, 0);
console.log(som); // 15

// Find - vind eerste match
let gevonden = nummers.find(n => n > 3);
console.log(gevonden); // 4

// ForEach - loop door array
nummers.forEach(n => console.log(n));`,
        explanation: 'Array methods maken het werken met arrays makkelijk en krachtig'
    },
    async: {
        title: 'Async & Promises',
        code: `// Promise
let belofte = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data geladen!");
    }, 1000);
});

belofte.then(resultaat => {
    console.log(resultaat); // "Data geladen!"
});

// Async/Await
async function laadData() {
    try {
        let resultaat = await belofte;
        console.log(resultaat);
    } catch (error) {
        console.log("Error:", error);
    }
}

laadData();

// Fetch API
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error));`,
        explanation: 'Async code voorkomt dat je website vastloopt tijdens langdurige operaties'
    },
    dom: {
        title: 'DOM Manipulatie',
        code: `// Element selecteren
let element = document.querySelector('#mijnId');
let elementen = document.querySelectorAll('.mijnClass');

// Content wijzigen
element.textContent = "Nieuwe tekst";
element.innerHTML = "<strong>Bold tekst</strong>";

// Styling wijzigen
element.style.color = "red";
element.style.backgroundColor = "blue";

// Classes toevoegen/verwijderen
element.classList.add("nieuweClass");
element.classList.remove("oudeClass");
element.classList.toggle("toggleClass");

// Nieuwe element maken
let nieuwElement = document.createElement("div");
nieuwElement.textContent = "Nieuw element";
document.body.appendChild(nieuwElement);

// Traversing
let parent = element.parentElement;
let children = element.children;
let nextSibling = element.nextElementSibling;

// Formulieren
let input = document.querySelector('input');
let waarde = input.value;
input.value = "Nieuwe waarde";`,
        explanation: 'DOM manipulatie laat je de HTML pagina dynamisch aanpassen. Je kunt elementen selecteren, wijzigen, toevoegen en verwijderen.'
    },
    events: {
        title: 'Events',
        code: `// Click event
let knop = document.querySelector('#mijnKnop');
knop.addEventListener('click', function() {
    console.log("Knop geklikt!");
});

// Keyboard event
document.addEventListener('keydown', function(event) {
    console.log("Toets ingedrukt:", event.key);
});

// Form submit
let formulier = document.querySelector('#mijnForm');
formulier.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Formulier verzonden!");
});

// Mouse events
element.addEventListener('mouseenter', () => {
    console.log("Mouse over element");
});`,
        explanation: 'Events reageren op gebruikersacties zoals klikken, typen en bewegen'
    },
    es6: {
        title: 'ES6+ Features',
        code: `// Destructuring
let [a, b, c] = [1, 2, 3];
let {naam, leeftijd} = {naam: "Marouf", leeftijd: 25};

// Spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

let obj1 = {a: 1};
let obj2 = {...obj1, b: 2}; // {a: 1, b: 2}

// Template literals
let naam = "Marouf";
let tekst = \`Hallo, \${naam}!\`; // "Hallo, Marouf!"

// Arrow functions (zie functions voorbeeld)

// Default parameters
function groet(naam = "Gast") {
    return \`Hallo, \${naam}!\`;
}`,
        explanation: 'ES6+ voegt moderne features toe die code korter en leesbaarder maken'
    }
};

// Show Example Function
function showExample(topic) {
    const example = examples[topic];
    if (!example) return;

    const modal = document.getElementById('example-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <h2>${example.title}</h2>
        <p style="margin: 1rem 0; color: #666;">${example.explanation}</p>
        <div class="code-block">
            <div class="code-header">
                <span class="code-title">${example.title} Voorbeeld</span>
            </div>
            <pre><code>${example.code}</code></pre>
        </div>
        <button class="btn btn-primary" onclick="runExampleTopic('${topic}', 'example-output')">▶ Run Code</button>
        <div id="example-output" class="output" style="margin-top: 1rem;"></div>
    `;

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('example-modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('example-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Run Example Topic Code Function
function runExampleTopic(topic, outputId) {
    const example = examples[topic];
    if (!example) return;

    const output = document.getElementById(outputId);
    output.innerHTML = '';
    output.className = 'output';

    // Capture console.log
    const originalLog = console.log;
    let logs = [];
    console.log = function (...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };

    try {
        eval(example.code);
        output.innerHTML = logs.join('\n') || 'Code uitgevoerd (geen output)';
        output.classList.add('success');
    } catch (error) {
        output.innerHTML = 'Error: ' + error.message;
        output.classList.add('error');
    } finally {
        console.log = originalLog;
    }
}

// Switch Tab Function
function switchTab(tabName) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const exampleContent = document.getElementById('example-content');

    // Map tab names
    const tabMap = {
        'variables': 'Variabelen',
        'functions': 'Functions',
        'arrays': 'Arrays',
        'dom': 'DOM'
    };

    // Update active tab
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.textContent.trim();
        if (btnText === tabMap[tabName] ||
            (tabName === 'variables' && btnText === 'Variabelen') ||
            (tabName === 'functions' && btnText === 'Functions') ||
            (tabName === 'arrays' && btnText === 'Arrays') ||
            (tabName === 'dom' && btnText === 'DOM')) {
            btn.classList.add('active');
        }
    });

    // Show example
    if (examples[tabName]) {
        const example = examples[tabName];
        exampleContent.innerHTML = `
            <h3>${example.title}</h3>
            <p style="margin: 1rem 0; color: #666;">${example.explanation}</p>
            <div class="code-block">
                <div class="code-header">
                    <span class="code-title">${example.title} Code</span>
                </div>
                <pre><code>${example.code}</code></pre>
            </div>
            <button class="btn btn-primary" onclick="runExampleTopic('${tabName}', 'tab-output')">▶ Run Code</button>
            <div id="tab-output" class="output" style="margin-top: 1rem;"></div>
        `;
    }
}

// Run Exercise Function
function runExercise(exerciseNum) {
    const textarea = document.getElementById(`exercise${exerciseNum}`);
    const output = document.getElementById(`output${exerciseNum}`);

    if (!textarea || !output) return;

    const code = textarea.value;
    output.innerHTML = '';
    output.className = 'output';

    // Capture console.log
    const originalLog = console.log;
    let logs = [];
    console.log = function (...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };

    try {
        eval(code);
        const outputText = logs.join('\n');

        // Check for correct answers
        if (exerciseNum === 1) {
            if (outputText.includes('undefined')) {
                output.innerHTML = '⚠ Vul alle variabelen in!';
                output.classList.add('error');
            } else {
                output.innerHTML = outputText || '✓ Variabelen aangemaakt!';
                output.classList.add('success');
            }
        } else if (exerciseNum === 2) {
            if (outputText.includes('8')) {
                output.innerHTML = outputText + '\n✓ Correct! De functie werkt goed.';
                output.classList.add('success');
            } else {
                output.innerHTML = outputText || '⚠ Controleer je functie. Het resultaat moet 8 zijn.';
                output.classList.add('error');
            }
        } else if (exerciseNum === 3) {
            if (outputText.includes('1') && outputText.includes('10')) {
                output.innerHTML = outputText + '\n✓ Correct! De loop werkt goed.';
                output.classList.add('success');
            } else {
                output.innerHTML = outputText || '⚠ Controleer je loop. Je moet 1 tot 10 printen.';
                output.classList.add('error');
            }
        } else {
            output.innerHTML = outputText || 'Code uitgevoerd';
            output.classList.add('success');
        }
    } catch (error) {
        output.innerHTML = '❌ Error: ' + error.message;
        output.classList.add('error');
    } finally {
        console.log = originalLog;
    }
}

// Playground Functions
function runPlayground() {
    const code = document.getElementById('playground-code').value;
    const output = document.getElementById('playground-output');

    output.innerHTML = '';
    output.className = 'output-content';

    // Capture console.log
    const originalLog = console.log;
    let logs = [];
    console.log = function (...args) {
        logs.push(args.map(arg => {
            if (typeof arg === 'object') {
                return JSON.stringify(arg, null, 2);
            }
            return String(arg);
        }).join(' '));
        originalLog.apply(console, args);
    };

    try {
        eval(code);
        output.innerHTML = logs.join('\n') || '✓ Code uitgevoerd (geen output)';
        output.style.color = '#28A745';
    } catch (error) {
        output.innerHTML = '❌ Error: ' + error.message;
        output.style.color = '#DC3545';
    } finally {
        console.log = originalLog;
    }
}

function clearPlayground() {
    document.getElementById('playground-code').value = '';
    document.getElementById('playground-output').innerHTML = '';
}

// Run Tab Example
function runTabExample(tabName) {
    const example = examples[tabName];
    if (!example) return;

    const output = document.getElementById('tab-output');
    output.innerHTML = '';
    output.className = 'output';

    const originalLog = console.log;
    let logs = [];
    console.log = function (...args) {
        logs.push(args.join(' '));
        originalLog.apply(console, args);
    };

    try {
        eval(example.code);
        output.innerHTML = logs.join('\n') || 'Code uitgevoerd (geen output)';
        output.classList.add('success');
    } catch (error) {
        output.innerHTML = 'Error: ' + error.message;
        output.classList.add('error');
    } finally {
        console.log = originalLog;
    }
}

// DOM Examples Functions
function runDOMExample(type) {
    const demoContainer = document.getElementById('demo-container');
    const demoText = document.getElementById('demo-text');
    const demoBtn = document.getElementById('demo-btn');

    // Reset
    demoContainer.innerHTML = '<p id="demo-text">Dit is een demo tekst. Klik op de voorbeelden hierboven!</p><button id="demo-btn" class="demo-btn">Demo Button</button>';
    const newDemoText = document.getElementById('demo-text');
    const newDemoBtn = document.getElementById('demo-btn');

    switch (type) {
        case 'select':
            newDemoText.textContent = 'Element geselecteerd met querySelector!';
            newDemoText.style.color = 'green';
            break;

        case 'content':
            newDemoText.innerHTML = '<strong>Tekst gewijzigd!</strong> Dit is nieuwe content met <em>HTML</em>.';
            break;

        case 'styling':
            newDemoText.style.color = 'red';
            newDemoText.style.backgroundColor = 'yellow';
            newDemoText.style.padding = '1rem';
            newDemoText.style.borderRadius = '8px';
            newDemoText.textContent = 'Styling toegepast!';
            break;

        case 'create':
            const newElement = document.createElement('div');
            newElement.textContent = 'Nieuw element gemaakt!';
            newElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            newElement.style.color = 'white';
            newElement.style.padding = '1rem';
            newElement.style.borderRadius = '8px';
            newElement.style.marginTop = '1rem';
            demoContainer.appendChild(newElement);
            break;

        case 'remove':
            newDemoBtn.addEventListener('click', function () {
                this.remove();
            });
            newDemoBtn.textContent = 'Klik om te verwijderen';
            break;

        case 'traverse':
            newDemoText.textContent = 'Parent: ' + demoContainer.parentElement.tagName;
            const info = document.createElement('div');
            info.textContent = 'Children: ' + demoContainer.children.length;
            info.style.marginTop = '1rem';
            info.style.padding = '0.5rem';
            info.style.background = '#e3f2fd';
            info.style.borderRadius = '4px';
            demoContainer.appendChild(info);
            break;

        case 'forms':
            const form = document.createElement('form');
            form.style.marginTop = '1rem';
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Type hier...';
            input.style.padding = '0.5rem';
            input.style.borderRadius = '4px';
            input.style.border = '2px solid #ccc';
            input.style.width = '100%';
            input.addEventListener('input', function () {
                newDemoText.textContent = 'Input waarde: ' + this.value;
            });
            form.appendChild(input);
            demoContainer.appendChild(form);
            break;

        case 'delegation':
            demoContainer.innerHTML = '<div class="demo-item" style="padding: 1rem; margin: 0.5rem; background: #f0f0f0; border-radius: 4px; cursor: pointer;">Item 1</div><div class="demo-item" style="padding: 1rem; margin: 0.5rem; background: #f0f0f0; border-radius: 4px; cursor: pointer;">Item 2</div><div class="demo-item" style="padding: 1rem; margin: 0.5rem; background: #f0f0f0; border-radius: 4px; cursor: pointer;">Item 3</div>';
            demoContainer.addEventListener('click', function (e) {
                if (e.target.classList.contains('demo-item')) {
                    e.target.style.background = '#4CAF50';
                    e.target.style.color = 'white';
                    e.target.textContent += ' (geklikt!)';
                }
            });
            break;
    }
}

// Project Data
const projects = {
    1: {
        title: 'Klik Teller',
        level: 'Beginner',
        description: 'Maak een knop die een teller verhoogt bij elke klik.',
        instructions: [
            'Maak een variabele om de teller bij te houden (begin bij 0)',
            'Selecteer de knop element',
            'Voeg een click event listener toe',
            'Verhoog de teller bij elke klik',
            'Update de tekst om het nieuwe aantal te tonen'
        ],
        html: '<div id="counter-display">Teller: 0</div><button id="counter-btn" class="demo-btn">Klik Mij!</button>',
        solution: `let teller = 0;
const knop = document.getElementById('counter-btn');
const display = document.getElementById('counter-display');

knop.addEventListener('click', function() {
    teller++;
    display.textContent = 'Teller: ' + teller;
});`
    },
    2: {
        title: 'Tekst Wijzigen',
        level: 'Beginner',
        description: 'Wijzig tekst in een element wanneer je op een knop klikt.',
        instructions: [
            'Selecteer het tekst element',
            'Selecteer de knop',
            'Voeg click event listener toe',
            'Wijzig de textContent of innerHTML bij klik'
        ],
        html: '<p id="change-text">Originele tekst</p><button id="change-btn" class="demo-btn">Wijzig Tekst</button>',
        solution: `const tekst = document.getElementById('change-text');
const knop = document.getElementById('change-btn');

knop.addEventListener('click', function() {
    tekst.textContent = 'Tekst is gewijzigd!';
});`
    },
    3: {
        title: 'Kleur Veranderen',
        level: 'Beginner',
        description: 'Verander de achtergrondkleur van een element.',
        instructions: [
            'Selecteer het element waarvan je de kleur wilt wijzigen',
            'Maak een knop',
            'Voeg click event toe',
            'Wijzig element.style.backgroundColor'
        ],
        html: '<div id="color-box" style="width: 200px; height: 200px; background: #3498db; border-radius: 8px; margin: 1rem 0;"></div><button id="color-btn" class="demo-btn">Verander Kleur</button>',
        solution: `const box = document.getElementById('color-box');
const knop = document.getElementById('color-btn');
const kleuren = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
let huidigeKleur = 0;

knop.addEventListener('click', function() {
    huidigeKleur = (huidigeKleur + 1) % kleuren.length;
    box.style.backgroundColor = kleuren[huidigeKleur];
});`
    },
    4: {
        title: 'Show/Hide Element',
        level: 'Beginner',
        description: 'Toon of verberg een element met een knop.',
        instructions: [
            'Selecteer het element dat je wilt tonen/verbergen',
            'Maak een toggle knop',
            'Gebruik element.style.display om te tonen/verbergen',
            'Of gebruik classList.toggle voor een class'
        ],
        html: '<div id="toggle-box" style="width: 200px; height: 100px; background: #3498db; border-radius: 8px; margin: 1rem 0;">Ik ben zichtbaar!</div><button id="toggle-btn" class="demo-btn">Verberg/Toon</button>',
        solution: `const box = document.getElementById('toggle-box');
const knop = document.getElementById('toggle-btn');
let isZichtbaar = true;

knop.addEventListener('click', function() {
    if (isZichtbaar) {
        box.style.display = 'none';
        knop.textContent = 'Toon';
    } else {
        box.style.display = 'block';
        knop.textContent = 'Verberg/Toon';
    }
    isZichtbaar = !isZichtbaar;
});`
    },
    5: {
        title: 'Lijst Toevoegen',
        level: 'Beginner',
        description: 'Voeg items toe aan een lijst via een input veld.',
        instructions: [
            'Maak een input veld en knop',
            'Selecteer de ul/ol lijst',
            'Bij klik: lees input waarde',
            'Maak nieuw li element',
            'Voeg toe aan lijst en leeg input'
        ],
        html: '<input type="text" id="list-input" placeholder="Voer item in..." style="padding: 0.5rem; width: 200px; margin-right: 0.5rem;"><button id="add-btn" class="demo-btn">Voeg Toe</button><ul id="item-list" style="margin-top: 1rem; list-style: disc; padding-left: 2rem;"></ul>',
        solution: `const input = document.getElementById('list-input');
const knop = document.getElementById('add-btn');
const lijst = document.getElementById('item-list');

knop.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const nieuwItem = document.createElement('li');
        nieuwItem.textContent = input.value;
        lijst.appendChild(nieuwItem);
        input.value = '';
    }
});

// Enter toevoegen
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        knop.click();
    }
});`
    },
    6: {
        title: 'To-Do Lijst',
        level: 'Intermediate',
        description: 'Maak een to-do lijst waar je items kunt toevoegen en verwijderen.',
        instructions: [
            'Maak input en add knop',
            'Maak een lijst voor todos',
            'Bij toevoegen: maak li met checkbox en verwijder knop',
            'Bij verwijderen: verwijder het li element',
            'Bij checkbox: voeg completed class toe'
        ],
        html: '<input type="text" id="todo-input" placeholder="Nieuwe taak..." style="padding: 0.5rem; width: 250px; margin-right: 0.5rem;"><button id="todo-add" class="demo-btn">Voeg Toe</button><ul id="todo-list" style="margin-top: 1rem; list-style: none; padding: 0;"></ul>',
        solution: `const input = document.getElementById('todo-input');
const addBtn = document.getElementById('todo-add');
const todoList = document.getElementById('todo-list');

function voegTodoToe() {
    if (input.value.trim() === '') return;
    
    const li = document.createElement('li');
    li.style.cssText = 'display: flex; align-items: center; padding: 0.5rem; margin: 0.5rem 0; background: #f0f0f0; border-radius: 4px;';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.marginRight = '0.5rem';
    
    const span = document.createElement('span');
    span.textContent = input.value;
    span.style.flex = '1';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Verwijder';
    deleteBtn.style.cssText = 'background: #e74c3c; color: white; border: none; padding: 0.25rem 0.5rem; border-radius: 4px; cursor: pointer;';
    
    checkbox.addEventListener('change', function() {
        span.style.textDecoration = this.checked ? 'line-through' : 'none';
        span.style.opacity = this.checked ? '0.5' : '1';
    });
    
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    
    input.value = '';
}

addBtn.addEventListener('click', voegTodoToe);
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') voegTodoToe();
});`
    },
    7: {
        title: 'Kleuren Picker',
        level: 'Intermediate',
        description: 'Maak een color picker die de achtergrondkleur wijzigt.',
        instructions: [
            'Maak een color input element',
            'Selecteer het element waarvan je de kleur wilt wijzigen',
            'Luister naar input event op color picker',
            'Update backgroundColor met de gekozen kleur'
        ],
        html: '<div id="color-preview" style="width: 300px; height: 200px; background: #3498db; border-radius: 8px; margin: 1rem 0; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Kies een kleur!</div><input type="color" id="color-picker" value="#3498db" style="width: 100px; height: 50px; cursor: pointer;">',
        solution: `const preview = document.getElementById('color-preview');
const picker = document.getElementById('color-picker');

picker.addEventListener('input', function() {
    preview.style.backgroundColor = this.value;
    preview.textContent = 'Gekozen kleur: ' + this.value;
});`
    },
    8: {
        title: 'Accordeon Menu',
        level: 'Intermediate',
        description: 'Maak een accordeon menu dat open en dicht klapt.',
        instructions: [
            'Maak meerdere secties met headers en content',
            'Verberg content standaard',
            'Bij klik op header: toggle de zichtbaarheid',
            'Sluit andere secties wanneer je een nieuwe opent (optioneel)'
        ],
        html: '<div class="accordion-item" style="margin-bottom: 0.5rem; border: 1px solid #ddd; border-radius: 4px;"><div class="accordion-header" style="padding: 1rem; background: #f0f0f0; cursor: pointer; font-weight: bold;">Sectie 1</div><div class="accordion-content" style="padding: 1rem; display: none;">Dit is de inhoud van sectie 1.</div></div><div class="accordion-item" style="margin-bottom: 0.5rem; border: 1px solid #ddd; border-radius: 4px;"><div class="accordion-header" style="padding: 1rem; background: #f0f0f0; cursor: pointer; font-weight: bold;">Sectie 2</div><div class="accordion-content" style="padding: 1rem; display: none;">Dit is de inhoud van sectie 2.</div></div>',
        solution: `const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isOpen = content.style.display === 'block';
        
        // Sluit alle andere
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.style.display = 'none';
        });
        
        // Open deze als het gesloten was
        if (!isOpen) {
            content.style.display = 'block';
        }
    });
});`
    },
    9: {
        title: 'Tab Interface',
        level: 'Intermediate',
        description: 'Maak een tab interface waar je tussen verschillende secties kunt wisselen.',
        instructions: [
            'Maak tab knoppen en tab content secties',
            'Verberg alle content standaard',
            'Toon eerste tab standaard',
            'Bij klik op tab: verberg alle, toon geselecteerde',
            'Update actieve tab styling'
        ],
        html: '<div class="tabs"><button class="tab-btn active" data-tab="1">Tab 1</button><button class="tab-btn" data-tab="2">Tab 2</button><button class="tab-btn" data-tab="3">Tab 3</button></div><div class="tab-content active" data-content="1" style="padding: 1rem; border: 1px solid #ddd; margin-top: 0.5rem;">Inhoud van Tab 1</div><div class="tab-content" data-content="2" style="padding: 1rem; border: 1px solid #ddd; margin-top: 0.5rem; display: none;">Inhoud van Tab 2</div><div class="tab-content" data-content="3" style="padding: 1rem; border: 1px solid #ddd; margin-top: 0.5rem; display: none;">Inhoud van Tab 3</div>',
        solution: `const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const tabId = this.dataset.tab;
        
        // Verwijder active van alle tabs
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => {
            c.classList.remove('active');
            c.style.display = 'none';
        });
        
        // Voeg active toe aan geklikte tab
        this.classList.add('active');
        const content = document.querySelector(\`[data-content="\${tabId}"]\`);
        content.classList.add('active');
        content.style.display = 'block';
    });
});`
    },
    10: {
        title: 'Modal Popup',
        level: 'Intermediate',
        description: 'Maak een modal popup die opent en sluit.',
        instructions: [
            'Maak modal overlay en modal content',
            'Verberg modal standaard',
            'Bij klik op open knop: toon modal',
            'Bij klik op sluit knop of overlay: verberg modal',
            'Voorkom body scroll wanneer modal open is'
        ],
        html: '<button id="open-modal" class="demo-btn">Open Modal</button><div id="modal-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000; align-items: center; justify-content: center;"><div id="modal-content" style="background: white; padding: 2rem; border-radius: 8px; max-width: 500px; position: relative;"><span id="close-modal" style="position: absolute; top: 10px; right: 15px; font-size: 28px; cursor: pointer;">&times;</span><h3>Modal Titel</h3><p>Dit is de inhoud van de modal.</p></div></div>',
        solution: `const openBtn = document.getElementById('open-modal');
const overlay = document.getElementById('modal-overlay');
const closeBtn = document.getElementById('close-modal');

openBtn.addEventListener('click', function() {
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

function closeModal() {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
});`
    },
    11: {
        title: 'Image Slider',
        level: 'Advanced',
        description: 'Maak een image slider met vorige/volgende knoppen.',
        instructions: [
            'Maak een array met image URLs',
            'Toon eerste image standaard',
            'Maak vorige/volgende knoppen',
            'Bij klik: verander image index',
            'Voeg animaties toe voor smooth transitions'
        ],
        html: '<div id="slider-container" style="position: relative; width: 100%; max-width: 500px; margin: 0 auto;"><img id="slider-image" src="https://via.placeholder.com/500x300/3498db/ffffff?text=Image+1" style="width: 100%; border-radius: 8px;"><button id="prev-btn" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">❮</button><button id="next-btn" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">❯</button></div>',
        solution: `const images = [
    'https://via.placeholder.com/500x300/3498db/ffffff?text=Image+1',
    'https://via.placeholder.com/500x300/e74c3c/ffffff?text=Image+2',
    'https://via.placeholder.com/500x300/2ecc71/ffffff?text=Image+3',
    'https://via.placeholder.com/500x300/f39c12/ffffff?text=Image+4'
];
let currentIndex = 0;
const img = document.getElementById('slider-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showImage(index) {
    img.style.opacity = '0';
    setTimeout(() => {
        img.src = images[index];
        img.style.opacity = '1';
    }, 200);
    img.style.transition = 'opacity 0.3s';
}

prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});`
    },
    12: {
        title: 'Form Validatie',
        level: 'Advanced',
        description: 'Valideer een formulier met real-time feedback.',
        instructions: [
            'Maak formulier met verschillende input types',
            'Voeg event listeners toe voor real-time validatie',
            'Toon error messages bij invalid input',
            'Voorkom form submit bij errors',
            'Voeg success styling toe bij valid input'
        ],
        html: '<form id="validatie-form" style="max-width: 400px;"><div style="margin-bottom: 1rem;"><label>Naam:</label><input type="text" id="naam-input" style="width: 100%; padding: 0.5rem; margin-top: 0.25rem;"><span class="error-msg" style="color: red; font-size: 0.85rem;"></span></div><div style="margin-bottom: 1rem;"><label>Email:</label><input type="email" id="email-input" style="width: 100%; padding: 0.5rem; margin-top: 0.25rem;"><span class="error-msg" style="color: red; font-size: 0.85rem;"></span></div><button type="submit" class="demo-btn" style="width: 100%;">Verzenden</button></form>',
        solution: `const form = document.getElementById('validatie-form');
const naamInput = document.getElementById('naam-input');
const emailInput = document.getElementById('email-input');

function validateNaam() {
    const error = naamInput.nextElementSibling;
    if (naamInput.value.length < 3) {
        error.textContent = 'Naam moet minimaal 3 karakters zijn';
        naamInput.style.borderColor = 'red';
        return false;
    }
    error.textContent = '';
    naamInput.style.borderColor = 'green';
    return true;
}

function validateEmail() {
    const error = emailInput.nextElementSibling;
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        error.textContent = 'Voer een geldig email adres in';
        emailInput.style.borderColor = 'red';
        return false;
    }
    error.textContent = '';
    emailInput.style.borderColor = 'green';
    return true;
}

naamInput.addEventListener('blur', validateNaam);
emailInput.addEventListener('blur', validateEmail);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateNaam() && validateEmail()) {
        alert('Formulier is geldig!');
    }
});`
    },
    13: {
        title: 'Search Filter',
        level: 'Advanced',
        description: 'Filter een lijst op basis van zoekinput.',
        instructions: [
            'Maak een lijst met items',
            'Maak een zoek input veld',
            'Luister naar input events',
            'Filter items op basis van zoekterm',
            'Verberg items die niet matchen'
        ],
        html: '<input type="text" id="search-input" placeholder="Zoek..." style="width: 100%; padding: 0.5rem; margin-bottom: 1rem;"><ul id="filter-list" style="list-style: none; padding: 0;"><li class="filter-item" style="padding: 0.5rem; margin: 0.25rem 0; background: #f0f0f0; border-radius: 4px;">Appel</li><li class="filter-item" style="padding: 0.5rem; margin: 0.25rem 0; background: #f0f0f0; border-radius: 4px;">Banaan</li><li class="filter-item" style="padding: 0.5rem; margin: 0.25rem 0; background: #f0f0f0; border-radius: 4px;">Citroen</li><li class="filter-item" style="padding: 0.5rem; margin: 0.25rem 0; background: #f0f0f0; border-radius: 4px;">Druif</li><li class="filter-item" style="padding: 0.5rem; margin: 0.25rem 0; background: #f0f0f0; border-radius: 4px;">Kiwi</li></ul>',
        solution: `const searchInput = document.getElementById('search-input');
const items = document.querySelectorAll('.filter-item');

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});`
    },
    14: {
        title: 'Drag & Drop',
        level: 'Advanced',
        description: 'Maak elementen die je kunt slepen en neerzetten.',
        instructions: [
            'Maak draggable elementen',
            'Voeg draggable="true" attribuut toe',
            'Luister naar dragstart, dragover, drop events',
            'Gebruik dataTransfer om data te verplaatsen',
            'Voeg visual feedback toe tijdens drag'
        ],
        html: '<div id="drag-container" style="display: flex; gap: 1rem;"><div id="source" style="flex: 1; min-height: 200px; padding: 1rem; background: #e3f2fd; border-radius: 8px;"><div class="draggable" draggable="true" style="padding: 1rem; margin: 0.5rem 0; background: white; border-radius: 4px; cursor: move;">Item 1</div><div class="draggable" draggable="true" style="padding: 1rem; margin: 0.5rem 0; background: white; border-radius: 4px; cursor: move;">Item 2</div><div class="draggable" draggable="true" style="padding: 1rem; margin: 0.5rem 0; background: white; border-radius: 4px; cursor: move;">Item 3</div></div><div id="target" style="flex: 1; min-height: 200px; padding: 1rem; background: #f3e5f5; border-radius: 8px; border: 2px dashed #ccc;">Drop Zone</div></div>',
        solution: `const draggables = document.querySelectorAll('.draggable');
const target = document.getElementById('target');

draggables.forEach(item => {
    item.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/html', this.outerHTML);
        this.style.opacity = '0.5';
    });
    
    item.addEventListener('dragend', function() {
        this.style.opacity = '1';
    });
});

target.addEventListener('dragover', function(e) {
    e.preventDefault();
    this.style.borderColor = '#4CAF50';
});

target.addEventListener('dragleave', function() {
    this.style.borderColor = '#ccc';
});

target.addEventListener('drop', function(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforeend', data);
    this.style.borderColor = '#ccc';
    
    // Verwijder origineel element
    const dragged = document.querySelector('.draggable[style*="opacity: 0.5"]');
    if (dragged) dragged.remove();
});`
    },
    15: {
        title: 'Infinite Scroll',
        level: 'Advanced',
        description: 'Laad meer content automatisch wanneer je scrollt.',
        instructions: [
            'Maak een container met items',
            'Luister naar scroll event op window',
            'Bereken wanneer gebruiker bijna onderaan is',
            'Laad meer items dynamisch',
            'Voeg loading indicator toe'
        ],
        html: '<div id="scroll-container" style="max-height: 300px; overflow-y: auto; border: 1px solid #ddd; padding: 1rem;"><div class="scroll-item" style="padding: 1rem; margin: 0.5rem 0; background: #f0f0f0; border-radius: 4px;">Item 1</div><div class="scroll-item" style="padding: 1rem; margin: 0.5rem 0; background: #f0f0f0; border-radius: 4px;">Item 2</div><div class="scroll-item" style="padding: 1rem; margin: 0.5rem 0; background: #f0f0f0; border-radius: 4px;">Item 3</div></div><div id="loading" style="text-align: center; padding: 1rem; display: none;">Laden...</div>',
        solution: `const container = document.getElementById('scroll-container');
const loading = document.getElementById('loading');
let itemCount = 3;

container.addEventListener('scroll', function() {
    const scrollTop = this.scrollTop;
    const scrollHeight = this.scrollHeight;
    const clientHeight = this.clientHeight;
    
    if (scrollTop + clientHeight >= scrollHeight - 10) {
        loading.style.display = 'block';
        
        setTimeout(() => {
            for (let i = 0; i < 3; i++) {
                itemCount++;
                const item = document.createElement('div');
                item.className = 'scroll-item';
                item.style.cssText = 'padding: 1rem; margin: 0.5rem 0; background: #f0f0f0; border-radius: 4px;';
                item.textContent = 'Item ' + itemCount;
                container.appendChild(item);
            }
            loading.style.display = 'none';
        }, 500);
    }
});`
    },
    16: {
        title: 'Dynamische Tabel',
        level: 'Expert',
        description: 'Maak een tabel met sorteren, filteren en paginatie.',
        instructions: [
            'Maak tabel met data',
            'Voeg sorteer functionaliteit toe per kolom',
            'Voeg filter opties toe',
            'Implementeer paginatie',
            'Voeg zoek functionaliteit toe'
        ],
        html: '<input type="text" id="table-search" placeholder="Zoek..." style="width: 100%; padding: 0.5rem; margin-bottom: 1rem;"><table id="data-table" style="width: 100%; border-collapse: collapse;"><thead><tr style="background: #f0f0f0;"><th style="padding: 0.75rem; text-align: left; cursor: pointer; border: 1px solid #ddd;">Naam <span>⇅</span></th><th style="padding: 0.75rem; text-align: left; cursor: pointer; border: 1px solid #ddd;">Leeftijd <span>⇅</span></th><th style="padding: 0.75rem; text-align: left; cursor: pointer; border: 1px solid #ddd;">Stad <span>⇅</span></th></tr></thead><tbody><tr><td style="padding: 0.75rem; border: 1px solid #ddd;">Jan</td><td style="padding: 0.75rem; border: 1px solid #ddd;">25</td><td style="padding: 0.75rem; border: 1px solid #ddd;">Amsterdam</td></tr><tr><td style="padding: 0.75rem; border: 1px solid #ddd;">Piet</td><td style="padding: 0.75rem; border: 1px solid #ddd;">30</td><td style="padding: 0.75rem; border: 1px solid #ddd;">Rotterdam</td></tr><tr><td style="padding: 0.75rem; border: 1px solid #ddd;">Klaas</td><td style="padding: 0.75rem; border: 1px solid #ddd;">28</td><td style="padding: 0.75rem; border: 1px solid #ddd;">Utrecht</td></tr></tbody></table>',
        solution: `const table = document.getElementById('data-table');
const searchInput = document.getElementById('table-search');
const headers = table.querySelectorAll('th');
let sortDirection = {};

headers.forEach((header, index) => {
    header.addEventListener('click', function() {
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        
        sortDirection[index] = !sortDirection[index];
        
        rows.sort((a, b) => {
            const aText = a.cells[index].textContent.trim();
            const bText = b.cells[index].textContent.trim();
            
            if (!isNaN(aText) && !isNaN(bText)) {
                return sortDirection[index] ? aText - bText : bText - aText;
            }
            
            return sortDirection[index] 
                ? aText.localeCompare(bText)
                : bText.localeCompare(aText);
        });
        
        rows.forEach(row => tbody.appendChild(row));
    });
});

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});`
    },
    17: {
        title: 'WYSIWYG Editor',
        level: 'Expert',
        description: 'Maak een rich text editor met formatting opties.',
        instructions: [
            'Maak toolbar met formatting knoppen',
            'Gebruik contentEditable voor edit gebied',
            'Implementeer document.execCommand voor formatting',
            'Voeg undo/redo functionaliteit toe',
            'Voeg link en image insertie toe'
        ],
        html: '<div id="editor-toolbar" style="border: 1px solid #ddd; padding: 0.5rem; background: #f0f0f0; border-radius: 4px 4px 0 0;"><button class="format-btn" data-command="bold" style="padding: 0.25rem 0.5rem; margin-right: 0.25rem; cursor: pointer;">B</button><button class="format-btn" data-command="italic" style="padding: 0.25rem 0.5rem; margin-right: 0.25rem; cursor: pointer;">I</button><button class="format-btn" data-command="underline" style="padding: 0.25rem 0.5rem; margin-right: 0.25rem; cursor: pointer;">U</button></div><div id="editor-content" contenteditable="true" style="min-height: 200px; padding: 1rem; border: 1px solid #ddd; border-top: none; border-radius: 0 0 4px 4px;">Type hier je tekst...</div>',
        solution: `const toolbar = document.getElementById('editor-toolbar');
const content = document.getElementById('editor-content');
const formatBtns = toolbar.querySelectorAll('.format-btn');

formatBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const command = this.dataset.command;
        document.execCommand(command, false, null);
        content.focus();
    });
});

// Voeg meer commands toe
const commands = ['bold', 'italic', 'underline', 'justifyLeft', 'justifyCenter', 'justifyRight'];
commands.forEach(cmd => {
    const btn = document.createElement('button');
    btn.textContent = cmd;
    btn.className = 'format-btn';
    btn.dataset.command = cmd;
    btn.style.cssText = 'padding: 0.25rem 0.5rem; margin-right: 0.25rem; cursor: pointer;';
    btn.addEventListener('click', function() {
        document.execCommand(cmd, false, null);
        content.focus();
    });
    toolbar.appendChild(btn);
});`
    },
    18: {
        title: 'Kanban Board',
        level: 'Expert',
        description: 'Maak een Kanban board met drag & drop functionaliteit.',
        instructions: [
            'Maak meerdere kolommen (To Do, In Progress, Done)',
            'Maak kaarten die tussen kolommen gesleept kunnen worden',
            'Implementeer drag & drop tussen kolommen',
            'Sla state op in localStorage',
            'Voeg nieuwe kaarten toe functionaliteit'
        ],
        html: '<div id="kanban-board" style="display: flex; gap: 1rem;"><div class="kanban-column" data-column="todo" style="flex: 1; background: #e3f2fd; padding: 1rem; border-radius: 8px; min-height: 300px;"><h3 style="margin-bottom: 1rem;">To Do</h3><div class="kanban-card" draggable="true" style="background: white; padding: 1rem; margin-bottom: 0.5rem; border-radius: 4px; cursor: move;">Taak 1</div></div><div class="kanban-column" data-column="progress" style="flex: 1; background: #fff3e0; padding: 1rem; border-radius: 8px; min-height: 300px;"><h3 style="margin-bottom: 1rem;">In Progress</h3></div><div class="kanban-column" data-column="done" style="flex: 1; background: #e8f5e9; padding: 1rem; border-radius: 8px; min-height: 300px;"><h3 style="margin-bottom: 1rem;">Done</h3></div></div>',
        solution: `const cards = document.querySelectorAll('.kanban-card');
const columns = document.querySelectorAll('.kanban-column');

cards.forEach(card => {
    card.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/html', this.outerHTML);
        this.style.opacity = '0.5';
    });
    
    card.addEventListener('dragend', function() {
        this.style.opacity = '1';
    });
});

columns.forEach(column => {
    column.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.border = '2px dashed #4CAF50';
    });
    
    column.addEventListener('dragleave', function() {
        this.style.border = 'none';
    });
    
    column.addEventListener('drop', function(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforeend', data);
        this.style.border = 'none';
        
        const dragged = document.querySelector('.kanban-card[style*="opacity: 0.5"]');
        if (dragged) dragged.remove();
        
        // Update event listeners voor nieuwe card
        const newCard = this.querySelector('.kanban-card:last-child');
        if (newCard) {
            newCard.addEventListener('dragstart', function(e) {
                e.dataTransfer.setData('text/html', this.outerHTML);
                this.style.opacity = '0.5';
            });
        }
    });
});`
    },
    19: {
        title: 'Real-time Chat',
        level: 'Expert',
        description: 'Maak een chat interface met berichten die automatisch verschijnen.',
        instructions: [
            'Maak chat container met message gebied',
            'Maak input veld en send knop',
            'Voeg berichten dynamisch toe',
            'Scroll automatisch naar laatste bericht',
            'Voeg timestamp en gebruikersnaam toe'
        ],
        html: '<div id="chat-container" style="border: 1px solid #ddd; border-radius: 8px; height: 300px; display: flex; flex-direction: column;"><div id="chat-messages" style="flex: 1; overflow-y: auto; padding: 1rem;"><div class="message" style="margin-bottom: 0.5rem; padding: 0.5rem; background: #e3f2fd; border-radius: 4px;"><strong>Gebruiker:</strong> Hallo!</div></div><div style="border-top: 1px solid #ddd; padding: 0.5rem; display: flex;"><input type="text" id="chat-input" placeholder="Type bericht..." style="flex: 1; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;"><button id="chat-send" class="demo-btn" style="margin-left: 0.5rem;">Verzend</button></div></div>',
        solution: `const messagesContainer = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('chat-send');

function addMessage(text, user = 'Jij') {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.style.cssText = 'margin-bottom: 0.5rem; padding: 0.5rem; background: #e3f2fd; border-radius: 4px;';
    
    const time = new Date().toLocaleTimeString();
    messageDiv.innerHTML = \`<strong>\${user}:</strong> \${text} <span style="font-size: 0.75rem; color: #666;">(\${time})</span>\`;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
    if (chatInput.value.trim() !== '') {
        addMessage(chatInput.value);
        chatInput.value = '';
        
        // Simuleer antwoord na 1 seconde
        setTimeout(() => {
            addMessage('Bedankt voor je bericht!', 'Bot');
        }, 1000);
    }
}

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
});`
    },
    20: {
        title: 'Single Page App',
        level: 'Expert',
        description: 'Maak een complete SPA met routing en state management.',
        instructions: [
            'Maak verschillende "pagina\'s" als divs',
            'Implementeer routing systeem',
            'Toon/verberg pagina\'s op basis van route',
            'Update URL zonder page reload',
            'Voeg navigatie menu toe',
            'Beheer applicatie state'
        ],
        html: '<nav id="spa-nav" style="display: flex; gap: 1rem; margin-bottom: 1rem; border-bottom: 2px solid #ddd; padding-bottom: 0.5rem;"><a href="#home" class="spa-link" style="text-decoration: none; color: #333; padding: 0.5rem; cursor: pointer;">Home</a><a href="#about" class="spa-link" style="text-decoration: none; color: #333; padding: 0.5rem; cursor: pointer;">About</a><a href="#contact" class="spa-link" style="text-decoration: none; color: #333; padding: 0.5rem; cursor: pointer;">Contact</a></nav><div id="spa-content"><div id="home-page" class="spa-page" style="padding: 1rem;"><h2>Home Pagina</h2><p>Welkom op de home pagina!</p></div><div id="about-page" class="spa-page" style="padding: 1rem; display: none;"><h2>About Pagina</h2><p>Dit is de about pagina.</p></div><div id="contact-page" class="spa-page" style="padding: 1rem; display: none;"><h2>Contact Pagina</h2><p>Neem contact met ons op!</p></div></div>',
        solution: `const links = document.querySelectorAll('.spa-link');
const pages = document.querySelectorAll('.spa-page');

function showPage(pageId) {
    pages.forEach(page => {
        page.style.display = 'none';
    });
    
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.style.display = 'block';
    }
    
    links.forEach(link => {
        link.style.fontWeight = 'normal';
        link.style.color = '#333';
    });
    
    const activeLink = document.querySelector(\`[href="#\${pageId}"]\`);
    if (activeLink) {
        activeLink.style.fontWeight = 'bold';
        activeLink.style.color = '#F7DF1E';
    }
}

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const pageId = this.getAttribute('href').substring(1);
        showPage(pageId);
        window.history.pushState({page: pageId}, '', '#' + pageId);
    });
});

// Handle browser back/forward
window.addEventListener('popstate', function(e) {
    const pageId = e.state ? e.state.page : 'home';
    showPage(pageId);
});

// Initial page
const initialPage = window.location.hash.substring(1) || 'home';
showPage(initialPage);`
    },
    21: {
        title: 'Weer Applicatie',
        level: 'Master',
        description: 'Bouw een prachtige weer app met dynamische glassmorphism achtergronden.',
        instructions: ['Maak layout', 'Haal weer op', 'Update UI'],
        html: '<div class="weer-app">Weer App UI</div>',
        solution: 'console.log("Weer app");'
    },
    22: {
        title: 'Neumorphic Rekenmachine',
        level: 'Master',
        description: 'Maak een geavanceerde calculator met een indrukwekkend neumorphic design patroon.',
        instructions: ['Maak neumorphic body', 'Voeg knoppen toe', 'Implementeer rekenlogica'],
        html: '<div class="calc">Calculator UI</div>',
        solution: 'console.log("Calculator");'
    },
    23: {
        title: 'Quiz Applicatie',
        level: 'Master',
        description: 'Een interactieve quiz met vloeiende animaties en een mooi resultaten dashboard.',
        instructions: ['Vragen array', 'Toon vraag', 'Score berekenen'],
        html: '<div class="quiz">Quiz UI</div>',
        solution: 'console.log("Quiz");'
    },
    24: {
        title: 'Recepten Zoeker',
        level: 'Master',
        description: 'Een uitgebreide receptenzoeker met mooie kaarten-UI.',
        instructions: ['Zoekbalk', 'Toon grid', 'Filter logica'],
        html: '<div class="recepten">Recepten UI</div>',
        solution: 'console.log("Recepten");'
    },
    25: {
        title: 'Uitgaven Tracker',
        level: 'Master',
        description: 'Beheer je budget met een gestroomlijnde UI.',
        instructions: ['Voeg uitgave toe', 'Update totaal', 'Sla op'],
        html: '<div class="tracker">Tracker UI</div>',
        solution: 'console.log("Tracker");'
    },
    26: {
        title: 'Muziek Speler',
        level: 'Master',
        description: 'Een adembenemende muziekspeler interface met draaiende platen.',
        instructions: ['Speel audio', 'Draai plaat', 'Progress bar'],
        html: '<div class="player">Player UI</div>',
        solution: 'console.log("Player");'
    },
    27: {
        title: 'Typ Snelheid Test',
        level: 'Master',
        description: 'Test je WPM met realtime feedback en neon accenten.',
        instructions: ['Start timer', 'Bereken WPM', 'Toon accuratesse'],
        html: '<div class="typ-test">Typ Test UI</div>',
        solution: 'console.log("Typ Test");'
    },
    28: {
        title: '3D Geheugenspel',
        level: 'Master',
        description: 'Een memory card game met verbluffende 3D flip-animaties.',
        instructions: ['Maak kaarten', 'Flip logica', 'Match check'],
        html: '<div class="memory">Memory UI</div>',
        solution: 'console.log("Memory");'
    },
    29: {
        title: 'E-commerce Winkelwagen',
        level: 'Master',
        description: 'Bouw een webshop interface met een side-cart.',
        instructions: ['Toon producten', 'Voeg toe aan cart', 'Bereken totaal'],
        html: '<div class="shop">Shop UI</div>',
        solution: 'console.log("Shop");'
    },
    30: {
        title: 'Data Dashboard',
        level: 'Master',
        description: 'Een prachtig ontworpen dashboard met interactieve grafieken.',
        instructions: ['Maak layout', 'Teken grafieken', 'Toggle dark mode'],
        html: '<div class="dashboard">Dashboard UI</div>',
        solution: 'console.log("Dashboard");'
    }
};

// Open Project Function
function openProject(num) {
    const project = projects[num];
    if (!project) {
        alert('Project ' + num + ' komt binnenkort!');
        return;
    }

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('project-modal-body');

    modalBody.innerHTML = `
        <h2>Project ${num}: ${project.title}</h2>
        <p style="color: #666; margin-bottom: 1rem;">${project.description}</p>
        
        <div class="project-workspace">
            <div class="project-preview" id="project-preview-${num}">
                ${project.html}
            </div>
            <div class="project-instructions">
                <h4>Instructies:</h4>
                <ul>
                    ${project.instructions.map(inst => `<li>${inst}</li>`).join('')}
                </ul>
                <h4 style="margin-top: 1.5rem;">Oplossing:</h4>
                <div class="code-block" style="margin-top: 1rem;">
                    <pre><code>${project.solution}</code></pre>
                </div>
                <button class="btn btn-primary" onclick="runProjectSolution(${num})" style="margin-top: 1rem; width: 100%;">▶ Run Oplossing</button>
            </div>
        </div>
    `;

    modal.style.display = 'block';

    // Run solution after a short delay to ensure DOM is ready
    setTimeout(() => {
        if (typeof runProjectSolution === 'function') {
            // Solution will be run when button is clicked
        }
    }, 100);
}

function closeProjectModal() {
    document.getElementById('project-modal').style.display = 'none';
}

function runProjectSolution(num) {
    const project = projects[num];
    if (!project) return;

    const preview = document.getElementById(`project-preview-${num}`);
    if (!preview) return;

    try {
        // Clear and reset preview
        preview.innerHTML = project.html;

        // Run the solution code
        eval(project.solution);
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

// Close modal when clicking outside
window.addEventListener('click', function (event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeProjectModal();
    }
});

// Initialize first tab and AOS Animations
window.addEventListener('DOMContentLoaded', () => {
    switchTab('variables');

    // --- Advanced Premium Polish: Animate-on-Scroll (AOS) ---
    const animatedElements = document.querySelectorAll('.project-item, .topic-card, .dom-topic-card, .exercise-card');

    // Set initial state
    animatedElements.forEach(el => {
        el.classList.add('aos-init');
    });

    // Observer for scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                // Optional: Stop observing once animated in
                // observer.unobserve(entry.target);
            } else {
                // Remove this else block if you only want them to animate in once
                entry.target.classList.remove('aos-animate');
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach(el => observer.observe(el));
});

console.log('JavaScript Learning Website geladen met Grandmaster Polish! 🚀');
