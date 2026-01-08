# Image Assets Guide

This directory should contain the following image files for the website.

## Required Images

### 1. Profile Photo (Optional)
**Filename:** `portrait.jpg`  
**Location:** `/assets/images/portrait.jpg`  
**Dimensions:** 800x800px (square)  
**Format:** JPEG, optimised  
**File Size:** < 200KB  
**Purpose:** Can be added to About section if desired

### 2. Open Graph / Social Media Preview
**Filename:** `og-image.jpg`  
**Location:** `/assets/images/og-image.jpg`  
**Dimensions:** 1200x630px  
**Format:** JPEG  
**File Size:** < 300KB  
**Purpose:** Preview image when sharing site on social media  
**Content Suggestions:**
- Your name
- Title (AI Researcher & Robotics Enthusiast)
- Simple background with river/tech motif
- Oxford branding (if appropriate)

### 3. Favicon Files
**Location:** `/assets/icons/`  
**Files Needed:**
- `favicon.ico` (16x16, 32x32, 48x48)
- `favicon.svg` (scalable vector)
- `apple-touch-icon.png` (180x180px)
- `icon-192.png` (192x192px for PWA)
- `icon-512.png` (512x512px for PWA)

**How to Generate:**
1. Create a simple logo or use your initials "NA"
2. Use https://realfavicongenerator.net/
3. Upload your logo and download the generated files
4. Place all files in `/assets/icons/`

**Design Suggestions for Favicon:**
- River wave symbol
- Gear/cog for engineering
- Your initials "NA" in a distinctive font
- Colours: Deep blue (#0A4D68) and gold (#D4AF37)

### 4. Project Images (Optional)
**Location:** `/assets/images/projects/`  
**Purpose:** Visual representations of your projects  
**Recommendations:**
- Screenshots of working projects
- Diagrams or schematics
- Robot/hardware photos
- Data visualisations
- Keep consistent dimensions (e.g., 1200x800px)
- Optimise for web (< 200KB each)

## Image Optimisation Tools

Before uploading, optimise your images:

### Online Tools:
- **TinyPNG** - https://tinypng.com/ (JPEG/PNG compression)
- **Squoosh** - https://squoosh.app/ (Google's image optimiser)
- **ImageOptim** - https://imageoptim.com/ (Mac app)

### Command Line (Linux/Mac):
```bash
# Install ImageMagick
sudo apt install imagemagick

# Resize and optimise
convert input.jpg -resize 1200x630^ -gravity center -extent 1200x630 -quality 85 og-image.jpg

# Batch optimise
for img in *.jpg; do
  convert "$img" -quality 85 "optimised-$img"
done
```

## Accessibility Notes

- Always include descriptive `alt` text when adding images to HTML
- Ensure sufficient contrast for text overlays
- Consider colour-blind users when choosing colours
- Test images in both light and dark theme

## Current Status

- [ ] Profile photo (portrait.jpg)
- [ ] Open Graph image (og-image.jpg)
- [ ] Favicon files (5 files)
- [ ] Project images (optional)

## Need Help?

Free design resources:
- **Canva** - https://canva.com (easy graphic design)
- **Figma** - https://figma.com (professional design tool)
- **Unsplash** - https://unsplash.com (free stock photos)
- **Undraw** - https://undraw.co (free illustrations)

For favicon design, search for "geometric patterns" or "abstract tech logos" for inspiration.
