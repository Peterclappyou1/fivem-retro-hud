# FiveM Avero HUD

Ein neues HUD mit AVERO-Branding oben, City-Hintergrund und Pink-Fokus `#f91cf9`.

## Starten

1. Öffne die Datei `index.html` im Browser.
2. Oder nutze einen lokalen Server:

```bash
python -m http.server 8000
```

Dann auf `http://localhost:8000` gehen.

## Anpassen

Die wichtigsten Farben und Werte stehen in `config.js`:

```js
const hudConfig = {
  brand: {
    name: 'AVERO',
    subtitle: 'CITY',
    accent: '#f91cf9',
    accentSecondary: '#7d6dff',
    accentSoft: '#52ebff'
  },
  money: {
    cash: '$ 15.800',
    bank: '$ 138.420',
    wanted: '1★'
  }
};
```

Die visuellen Grunddaten sind über CSS-Variablen in `styles.css` steuerbar.

## Dateien

- `index.html` – HUD-Struktur
- `styles.css` – Styling und Layout
- `config.js` – schnelle Konfiguration
