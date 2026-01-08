# Website Icons

This directory contains the website's favicon and app icons.

## Files

- **favicon.svg** - Main favicon (SVG format, works in modern browsers)
- **favicon.ico** - Legacy favicon (needs to be generated from SVG)
- **apple-touch-icon.png** - Apple touch icon 180x180 (needs to be generated from SVG)
- **icon-192.png** - PWA icon 192x192 (needs to be generated from SVG)
- **icon-512.png** - PWA icon 512x512 (needs to be generated from SVG)

## Converting SVG to PNG/ICO

To create the PNG and ICO files from the SVG:

### Online Tools
1. Visit https://realfavicongenerator.net/
2. Upload favicon.svg
3. Download all generated files and replace the placeholders

### Using Command Line Tools

**With ImageMagick:**
```bash
convert -background none favicon.svg -resize 32x32 favicon.ico
convert -background none favicon.svg -resize 180x180 apple-touch-icon.png
convert -background none favicon.svg -resize 192x192 icon-192.png
convert -background none favicon.svg -resize 512x512 icon-512.png
```

**With Inkscape:**
```bash
inkscape favicon.svg -w 32 -h 32 -o favicon.ico
inkscape favicon.svg -w 180 -h 180 -o apple-touch-icon.png
inkscape favicon.svg -w 192 -h 192 -o icon-192.png
inkscape favicon.svg -w 512 -h 512 -o icon-512.png
```

## Design

The favicon features a blue river symbol with flowing waves, representing the name "Nile" and incorporating the website's color scheme (deep ocean blue #0A4D68 and teal #088395).
