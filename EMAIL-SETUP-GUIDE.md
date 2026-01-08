# Email Configuration Guide for Contact Form

## Current Issue
The contact form is configured to send emails to `niletributary@gmail.com` but emails are not being received.

## Why This Happens
Most hosting providers (including Narcany Secure Hosting) have restrictions on the PHP `mail()` function for security reasons:
- Prevents spam abuse
- Requires proper SMTP configuration
- May be disabled by default

## Solutions

### Option 1: Configure SMTP (Recommended for PHP)
You'll need to modify `contact.php` to use SMTP instead of the basic `mail()` function.

**Steps:**
1. Get SMTP credentials from your hosting provider (Narcany Secure Hosting should provide these)
2. Install PHPMailer library (ask hosting support for help)
3. We can update the contact.php to use SMTP

**What to ask your hosting provider:**
- "Is PHP mail() enabled on my account?"
- "What are my SMTP server settings?" (hostname, port, username, password)
- "Can you help me install PHPMailer or enable SMTP email?"

### Option 2: Use a Free Email Service (Easiest - No Server Config Needed)

Instead of using PHP, use a service like **Formspree** (free for up to 50 submissions/month):

**Formspree Setup (5 minutes):**
1. Go to https://formspree.io/
2. Sign up with your email
3. Create a new form
4. They'll give you a form endpoint like: `https://formspree.io/f/YOUR_ID`
5. Update your form to use this endpoint

I can update your contact form to use Formspree if you'd like - it's much simpler and doesn't require server configuration!

### Option 3: Use Gmail SMTP (For Personal Sites)

Configure contact.php to send via Gmail's SMTP:
- SMTP Host: smtp.gmail.com
- SMTP Port: 587
- Username: niletributary@gmail.com
- Password: App-specific password (you'll need to generate this in Gmail)
- Requires 2-Step Verification enabled on your Gmail account

## What I Recommend

**For quick setup (5 minutes):** Use Formspree (Option 2)
- No server configuration needed
- Reliable delivery
- Email notifications
- Free tier is perfect for personal websites

**For long-term/professional setup:** Configure SMTP with your hosting provider (Option 1)
- Full control
- Uses your hosting infrastructure
- May require technical support from Narcany

## Next Steps

Let me know which option you prefer:
1. **Formspree** - I can update the form right now (easiest)
2. **SMTP** - I'll create the configuration code, you'll need hosting provider's SMTP details
3. **Check with hosting** - Contact Narcany support first to see what they recommend

The contact form code is ready - we just need to choose the delivery method!
