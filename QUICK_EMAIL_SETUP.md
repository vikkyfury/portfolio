# Quick EmailJS Setup - Complete Your Configuration

## ✅ You Have: Service ID
- **Service ID:** `service_561y9oj` (or your actual service ID)

## 🔄 Next Steps:

### 1. Create Email Template
1. Go to **"Email Templates"** in EmailJS dashboard
2. Click **"Create New Template"**
3. Fill in:
   - **Name:** `Portfolio Contact`
   - **Subject:** `Portfolio Contact from {{name}}`
   - **Message:**
   ```
   Name: {{name}}
   Email: {{email}}
   Message: {{message}}

   ---
   Sent from your portfolio contact form.
   ```
4. **Save** and note your **Template ID** (e.g., `template_abc123`)

### 2. Get Public Key
1. Go to **"Account"** → **"API Keys"**
2. Copy your **Public Key** (e.g., `user_xyz789`)

### 3. Update Code
Replace these values in `src/components/Contact.tsx`:

```jsx
// Line ~25: Replace YOUR_PUBLIC_KEY
emailjs.init("user_xyz789"); // Your actual public key

// Lines ~40-43: Replace all placeholders
const result = await emailjs.sendForm(
  'service_561y9oj',    // Your service ID
  'template_abc123',    // Your template ID  
  e.target as HTMLFormElement,
  'user_xyz789'         // Your public key
);
```

## 📋 Your Values Checklist:
- [ ] **Service ID:** `service_561y9oj` ✅ (You have this)
- [ ] **Template ID:** `template_abc123` (Create this)
- [ ] **Public Key:** `user_xyz789` (Get this)

## 🧪 Test Your Setup:
1. Start your React app: `npm start`
2. Go to Contact section
3. Fill out the form
4. Submit and check your email (vikkyus2772000@gmail.com)

## 🎯 Expected Result:
- Form submits without errors
- You receive email at vikkyus2772000@gmail.com
- Email contains: Name, Email, Message from the form 