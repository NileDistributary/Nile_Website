<?php
// /contact.php
// Secure PHP mailer for contact form

// ==================== CONFIGURATION ====================
// Set your email address here
$recipient_email = 'niletributary@gmail.com';
$email_subject = 'New Contact Form Submission - Nile Anderson Website';

// Rate limiting (optional - requires session support)
$enable_rate_limiting = true;
$max_submissions_per_hour = 5;

// ==================== SECURITY HEADERS ====================
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// ==================== CORS (if needed) ====================
// Uncomment if your form is on a different domain
// header('Access-Control-Allow-Origin: https://nileanderson.com');
// header('Access-Control-Allow-Methods: POST');

// ==================== FUNCTION DEFINITIONS ====================

/**
 * Sanitise input data
 */
function sanitise_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

/**
 * Validate email address
 */
function is_valid_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Check for spam patterns
 */
function is_spam($name, $email, $message) {
    // Check for common spam patterns
    $spam_patterns = [
        '/\[url=/i',
        '/\[link=/i',
        '/<a\s+href=/i',
        '/http:\/\//i',
        '/https:\/\//i',
        '/viagra|cialis|casino|lottery|winner/i'
    ];
    
    $combined_text = $name . ' ' . $email . ' ' . $message;
    
    foreach ($spam_patterns as $pattern) {
        if (preg_match($pattern, $combined_text)) {
            return true;
        }
    }
    
    // Check if message is too short (likely spam)
    if (strlen($message) < 10) {
        return true;
    }
    
    return false;
}

/**
 * Rate limiting function
 */
function check_rate_limit($max_submissions, $time_window = 3600) {
    session_start();
    
    $current_time = time();
    $session_key = 'contact_form_submissions';
    
    if (!isset($_SESSION[$session_key])) {
        $_SESSION[$session_key] = [];
    }
    
    // Remove submissions older than time window
    $_SESSION[$session_key] = array_filter($_SESSION[$session_key], function($timestamp) use ($current_time, $time_window) {
        return ($current_time - $timestamp) < $time_window;
    });
    
    // Check if limit exceeded
    if (count($_SESSION[$session_key]) >= $max_submissions) {
        return false;
    }
    
    // Add current submission
    $_SESSION[$session_key][] = $current_time;
    return true;
}

/**
 * Send email using mail() function
 */
function send_email($to, $subject, $name, $email, $message) {
    // Prepare email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n";
    $headers .= "From: " . $name . " <noreply@nileanderson.com>" . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "X-Priority: 3" . "\r\n";
    
    // Prepare email body
    $email_body = "New contact form submission from nileanderson.com\n\n";
    $email_body .= "Name: " . $name . "\n";
    $email_body .= "Email: " . $email . "\n";
    $email_body .= "Submitted: " . date('Y-m-d H:i:s') . "\n\n";
    $email_body .= "Message:\n" . $message . "\n\n";
    $email_body .= "---\n";
    $email_body .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";
    $email_body .= "User Agent: " . $_SERVER['HTTP_USER_AGENT'] . "\n";
    
    // Send email
    return mail($to, $subject, $email_body, $headers);
}

/**
 * Send JSON response
 */
function send_response($success, $message) {
    echo json_encode([
        'success' => $success,
        'message' => $message
    ]);
    exit;
}

// ==================== MAIN LOGIC ====================

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    send_response(false, 'Invalid request method.');
}

// Rate limiting check
if ($enable_rate_limiting && !check_rate_limit($max_submissions_per_hour)) {
    send_response(false, 'Too many submissions. Please try again later.');
}

// Get and sanitise form data
$name = isset($_POST['name']) ? sanitise_input($_POST['name']) : '';
$email = isset($_POST['email']) ? sanitise_input($_POST['email']) : '';
$message = isset($_POST['message']) ? sanitise_input($_POST['message']) : '';

// Validation
$errors = [];

if (empty($name) || strlen($name) < 2) {
    $errors[] = 'Please provide a valid name (at least 2 characters).';
}

if (empty($email) || !is_valid_email($email)) {
    $errors[] = 'Please provide a valid email address.';
}

if (empty($message) || strlen($message) < 10) {
    $errors[] = 'Please provide a message (at least 10 characters).';
}

// Check for spam
if (is_spam($name, $email, $message)) {
    // Log spam attempt (optional)
    error_log("Spam detected from IP: " . $_SERVER['REMOTE_ADDR']);
    // Send success message to not reveal spam detection
    send_response(true, 'Message sent successfully!');
}

// If there are validation errors
if (!empty($errors)) {
    send_response(false, implode(' ', $errors));
}

// Attempt to send email
$email_sent = send_email($recipient_email, $email_subject, $name, $email, $message);

if ($email_sent) {
    send_response(true, 'Thank you for your message! I will get back to you soon.');
} else {
    // Log the error
    error_log("Failed to send email from contact form. From: $email");
    send_response(false, 'Sorry, there was an error sending your message. Please try emailing directly at hello@nileanderson.com');
}
?>
