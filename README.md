# Nile Anderson Personal Website

A professional, accessible personal website showcasing research, projects, and academic background with a distinctive river-inspired design.

## 🌊 Features

- **Responsive Design**: Optimised for all devices from mobile to desktop
- **Accessible**: WCAG AA compliant with keyboard navigation support
- **Light/Dark Theme**: Automatic theme detection with manual toggle
- **Performance Optimised**: Lazy loading, caching, and compression
- **SEO Ready**: Structured data, meta tags, and sitemap
- **Interactive Projects Gallery**: Filterable by category
- **Secure Contact Form**: PHP-based with spam protection and rate limiting

## 📁 File Structure

```
nileanderson.com/
├── index.html                 # Main website file
├── contact.php               # Contact form handler
├── .htaccess                 # Apache configuration
├── robots.txt                # Search engine directives
├── sitemap.xml               # XML sitemap
├── README.md                 # This file
├── assets/
│   ├── css/
│   │   └── styles.css        # All styling
│   ├── js/
│   │   ├── data.js           # Centralised content (EDIT HERE!)
│   │   └── script.js         # Site interactions
│   ├── images/
│   │   ├── portrait.jpg      # Your profile photo
│   │   ├── og-image.jpg      # Social media preview image
│   │   ├── wave.svg          # Wave decoration
│   │   └── projects/         # Project images
│   ├── icons/
│   │   ├── favicon.svg       # Favicon (SVG)
│   │   ├── favicon.ico       # Favicon (ICO)
│   │   ├── apple-touch-icon.png
│   │   └── site.webmanifest
│   └── docs/
│       └── CV.pdf            # Your CV/Resume
└── public_html/              # Upload all files here
```

## ✏️ Editing Content

### Quick Content Updates

All personal content is centralised in `/assets/js/data.js`. This makes updates simple:

1. **Open** `/assets/js/data.js`
2. **Edit** the relevant sections:
   - `personalData.name` - Your name
   - `personalData.email` - Contact email
   - `personalData.about.paragraphs` - About section text
   - `personalData.education` - Education timeline
   - `personalData.projects` - Project gallery
   - `personalData.skills` - Technical skills
3. **Save** the file
4. **Refresh** your browser

### Adding Projects

To add a new project, edit the `projects` array in `data.js`:

```javascript
{
  title: "Your Project Title",
  description: "Brief description of the project",
  tags: ["Python", "Machine Learning", "Research"],
  year: "2025",
  category: "ai-ml", // Options: "ai-ml", "robotics", "embedded"
  link: null // or "https://project-url.com"
}
```

### Updating CV

1. Replace `/assets/docs/CV.pdf` with your updated CV
2. Keep the filename as `CV.pdf` or update the link in `index.html` (line ~349)

## 🚀 Deployment Instructions

### Method 1: Standard Linux Hosting (cPanel/Plesk)

1. **Connect via FTP/SFTP** (using FileZilla, Cyberduck, or similar)
   - Host: `ftp.yourhost.com`
   - Username: Your hosting username
   - Password: Your hosting password

2. **Upload all files** to `/public_html/` or `/www/` directory
   - Maintain the folder structure
   - Ensure `.htaccess` is uploaded (it's hidden by default)

3. **Set permissions**:
   - Files: 644
   - Directories: 755
   - `contact.php`: 644

4. **Configure contact form**:
   - Open `contact.php`
   - Update line 8: `$recipient_email = 'your-email@domain.com';`
   - Test by submitting the contact form

### Method 2: SSH/Command Line

```bash
# Connect to your server
ssh username@yourserver.com

# Navigate to web directory
cd /public_html  # or /www or ~/public_html

# Upload files (from your local machine)
scp -r /path/to/local/files/* username@yourserver.com:/public_html/

# Set correct permissions
find . -type f -exec chmod 644 {} \;
find . -type d -exec chmod 755 {} \;
```

### Method 3: Git Deployment

```bash
# On your server
cd /public_html
git clone https://github.com/yourusername/nileanderson-website.git .

# Set up automatic deployment (optional)
# Add post-receive hook for automatic updates
```

## 🔧 Configuration

### Contact Form Setup

1. **Email Configuration** (`contact.php`, line 8):
   ```php
   $recipient_email = 'hello@nileanderson.com';
   ```

2. **Rate Limiting** (line 12-13):
   ```php
   $enable_rate_limiting = true;
   $max_submissions_per_hour = 5;
   ```

3. **Test the form** after deployment to ensure emails are sending

### Domain Setup

1. **Update domain references**:
   - `index.html`: Update all `nileanderson.com` references
   - `sitemap.xml`: Update URLs
   - `.htaccess`: Configure www/non-www redirect

2. **SSL Certificate**:
   - Obtain SSL certificate (Let's Encrypt recommended)
   - Uncomment HTTPS redirect in `.htaccess` (lines 11-13)

### Theme Customisation

To change colours, edit CSS variables in `/assets/css/styles.css` (lines 14-30):

```css
:root {
  --color-primary: #0A4D68;      /* Main blue */
  --color-secondary: #088395;     /* Teal */
  --color-accent: #D4AF37;        /* Gold */
  /* ... */
}
```

## 🖼️ Image Assets Needed

Replace these placeholder references:

1. **Profile Photo** (`/assets/images/portrait.jpg`)
   - Recommended: 800x800px, optimised JPEG
   - Shows in About section (if you add it to HTML)

2. **Open Graph Image** (`/assets/images/og-image.jpg`)
   - Required for social media previews
   - Dimensions: 1200x630px
   - Shows when sharing site on social media

3. **Favicon Files** (`/assets/icons/`)
   - Generate from a logo at https://realfavicongenerator.net/
   - Upload `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`
   - Update `site.webmanifest` with your details

4. **Wave SVG** (`/assets/images/wave.svg`)
   - Already embedded in HTML
   - Can export separately if needed

## 🔍 SEO Checklist

After deployment:

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Test structured data at https://search.google.com/test/rich-results
- [ ] Verify Open Graph tags at https://www.opengraph.xyz/
- [ ] Test mobile-friendliness at https://search.google.com/test/mobile-friendly
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Set up Google Analytics (optional)

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome)

## ♿ Accessibility Features

- Semantic HTML5 markup
- ARIA landmarks and labels
- Keyboard navigation support
- Skip-to-content link
- Focus-visible styles
- Screen reader friendly
- WCAG AA colour contrast
- Prefers-reduced-motion support

## 🐛 Troubleshooting

### Contact Form Not Sending

1. **Check PHP mail() function**:
   ```bash
   php -r "mail('test@example.com', 'Test', 'Testing mail');"
   ```

2. **Alternative**: Use SMTP or external service (Formspree, SendGrid)
   - Formspree fallback already commented in HTML

3. **Check server logs**:
   ```bash
   tail -f /var/log/apache2/error.log
   ```

### .htaccess Errors

- Ensure mod_rewrite is enabled on server
- Check Apache version (2.2 vs 2.4) for syntax differences
- Comment out problematic sections if needed

### Theme Not Persisting

- Ensure JavaScript is enabled
- Check browser localStorage is not disabled
- Clear browser cache

### Images Not Loading

- Check file paths are correct (case-sensitive on Linux)
- Verify file permissions (should be 644)
- Ensure images are actually uploaded

## 📞 Support

For issues with the website code:
- Check browser console for JavaScript errors (F12)
- Validate HTML at https://validator.w3.org/
- Validate CSS at https://jigsaw.w3.org/css-validator/

## 📄 Licence

© 2025 Nile Anderson. All rights reserved.

---

**Built with care in Oxford, UK 🇬🇧**

For questions about deployment or customisation, refer to your hosting provider's documentation or contact their support team.
