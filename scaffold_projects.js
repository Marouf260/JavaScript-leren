const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'projecten');

// Template for the generic coming soon pages
const getTemplate = (id) => `<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project ${id} - DOM Projecten</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2rem; }
        .container { background: white; border-radius: 12px; padding: 2rem; max-width: 800px; width: 100%; box-shadow: 0 10px 40px rgba(0,0,0,0.2); text-align: center; }
        h1 { color: #333; margin-bottom: 0.5rem; }
        .level { display: inline-block; padding: 0.25rem 0.75rem; background: #e2e3e5; color: #383d41; border-radius: 20px; font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem; }
        .description { color: #666; margin-bottom: 2rem; line-height: 1.6; }
        .coming-soon { background: #f8f9fa; border: 2px dashed #ccc; padding: 3rem; border-radius: 12px; margin-bottom: 2rem; }
        .coming-soon h2 { color: #555; margin-bottom: 10px; }
        .back-link { display: inline-block; margin-top: 1rem; color: #667eea; text-decoration: none; font-weight: 600; }
        .back-link:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Project ${id}</h1>
        <span class="level">Wordt gebouwd</span>
        <p class="description">Dit project is momenteel in ontwikkeling en zal binnenkort beschikbaar zijn als onderdeel van de 100-projecten uitbreiding.</p>
        
        <div class="coming-soon">
            <h2>🚧 Binnenkort Beschikbaar 🚧</h2>
            <p>We zijn hard aan het werk in de werkplaats om dit gave project te bouwen.</p>
        </div>
        
        <a href="../index.html#projects" class="back-link">← Terug naar Projecten</a>
    </div>
</body>
</html>`;

// Scripts to generate files 31 to 100
for (let i = 31; i <= 100; i++) {
    const fileName = `project-${i}.html`;
    const filePath = path.join(targetDir, fileName);

    // Alleen maken als het nog niet bestaat (veiligheid)
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, getTemplate(i));
        console.log(`Created ${fileName}`);
    } else {
        console.log(`Skipped ${fileName} (already exists)`);
    }
}
console.log('Scaffolding complete!');
