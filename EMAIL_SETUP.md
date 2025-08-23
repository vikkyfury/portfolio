# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (vikkyus2772000@gmail.com)
5. Note down the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** Portfolio Contact from {{name}}

**Message:**
```
Name: {{name}}
Email: {{email}}
Message: {{message}}

This message was sent from your portfolio contact form.
```

4. Note down the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., "user_def456")

## Step 5: Update Contact Component
Replace the placeholders in `src/components/Contact.tsx`:

```jsx
// Replace these values with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY"); // Your public key

const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID', // Your service ID
  'YOUR_TEMPLATE_ID', // Your template ID
  e.target as HTMLFormElement,
  'YOUR_PUBLIC_KEY' // Your public key
);
```

## Step 6: Test the Form
1. Start your development server
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email (vikkyus2772000@gmail.com) for the message

## Free Plan Limits
- 200 emails per month
- Perfect for portfolio websites
- No credit card required

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for errors
- Verify Gmail connection in EmailJS dashboard
- Ensure template variables match form field names 