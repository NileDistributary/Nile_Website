# 🚀 Quick Deployment Checklist for nileanderson.com

## Before You Begin
- [ ] Read the README.md file thoroughly
- [ ] Have FTP/SSH credentials ready from your hosting provider
- [ ] Ensure your domain (nileanderson.com) is pointed to your hosting server

## Step 1: Upload Files (5 minutes)
- [ ] Connect to your server via FTP/SFTP
- [ ] Upload ALL files to `/public_html/` or `/www/` directory
- [ ] Verify `.htaccess` file was uploaded (it's hidden by default)
- [ ] Set file permissions: Files = 644, Directories = 755

## Step 2: Configure Contact Form (2 minutes)
- [ ] Open `contact.php` in a text editor
- [ ] Change line 8: `$recipient_email = 'your-actual-email@domain.com';`
- [ ] Save and re-upload `contact.php`
- [ ] Test the contact form by submitting a message

## Step 3: Add Your Content (15-30 minutes)
- [ ] Edit `/assets/js/data.js` to update:
  - [ ] Email address
  - [ ] About section paragraphs
  - [ ] Education details (verify accuracy)
  - [ ] Projects (add more if needed)
  - [ ] Skills
- [ ] Save and re-upload `data.js`

## Step 4: Add Images (10-20 minutes)
- [ ] Create/generate favicons → upload to `/assets/icons/`
  - Use https://realfavicongenerator.net/
- [ ] Create Open Graph image (1200x630px) → upload as `/assets/images/og-image.jpg`
- [ ] (Optional) Add profile photo → upload as `/assets/images/portrait.jpg`
- [ ] (Optional) Add project images → upload to `/assets/images/projects/`

## Step 5: Upload Your CV (1 minute)
- [ ] Prepare your CV as a PDF file
- [ ] Upload to `/assets/docs/CV.pdf`
- [ ] Verify download button works

## Step 6: Domain & SSL Setup (5-15 minutes)
- [ ] Verify domain is working (http://nileanderson.com)
- [ ] Install SSL certificate (free via Let's Encrypt)
- [ ] Uncomment HTTPS redirect in `.htaccess` (lines 11-13)
- [ ] Test HTTPS (https://nileanderson.com)

## Step 7: SEO Setup (10 minutes)
- [ ] Update `sitemap.xml` with your actual domain
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Test Open Graph tags: https://www.opengraph.xyz/
- [ ] Run mobile-friendly test: https://search.google.com/test/mobile-friendly

## Step 8: Final Checks (10 minutes)
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test CV download
- [ ] Toggle dark/light theme
- [ ] Test on mobile device
- [ ] Test in different browsers (Chrome, Firefox, Safari)
- [ ] Check browser console for errors (F12)

## Optional Enhancements
- [ ] Set up Google Analytics
- [ ] Add more projects
- [ ] Create project detail pages
- [ ] Add blog section
- [ ] Integrate with LinkedIn profile
- [ ] Add testimonials section

## Common Issues & Solutions

### Contact form not working?
- Check PHP is enabled on your server
- Verify email address in contact.php
- Check server error logs
- Consider using Formspree as fallback

### Images not loading?
- Check file paths (case-sensitive on Linux)
- Verify files were uploaded
- Check file permissions (should be 644)

### Dark mode not persisting?
- Clear browser cache
- Ensure JavaScript is enabled
- Check if localStorage is enabled

### .htaccess causing errors?
- Ask your host if mod_rewrite is enabled
- Comment out sections causing issues
- Check Apache version compatibility

## 📞 Need Help?

1. **Hosting Provider** - Contact their support for server-specific issues
2. **Browser Console** - Press F12 to check for JavaScript errors
3. **HTML Validator** - https://validator.w3.org/
4. **CSS Validator** - https://jigsaw.w3.org/css-validator/

## 🎉 You're Done!

Share your new website:
- LinkedIn
- Twitter/X
- Email signature
- Business cards
- Academic profiles

Update regularly:
- Add new projects
- Update CV
- Write blog posts (if added)
- Keep content current

---

**Estimated Total Time: 1-2 hours**

Good luck with your website launch! 🚀
