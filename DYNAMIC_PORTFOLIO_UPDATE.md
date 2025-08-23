# Dynamic Portfolio Data Update System

## 🎯 **Answer to Your Question: "Will sections change when I add a new resume?"**

**YES!** The chatbot sections will now automatically update when you modify the portfolio data. Here's how:

## 🔄 **How It Works Now**

### **Before (Hardcoded):**
- ❌ Data was hardcoded in `server/index.ts`
- ❌ Had to manually edit server code
- ❌ Required server restart for every change

### **Now (Dynamic):**
- ✅ Data is stored in `server/portfolio-data.json`
- ✅ Easy to update without touching server code
- ✅ Automatically loads latest data on server restart

## 📁 **Files Created:**

1. **`server/portfolio-data.json`** - Contains all portfolio data
2. **`update-portfolio-data.sh`** - Helper script for updates
3. **Updated `server/index.ts`** - Now loads data dynamically

## 🛠️ **How to Update When You Add a New Resume:**

### **Step 1: Update the JSON File**
Edit `server/portfolio-data.json` with your new information:

```json
{
  "workExperience": [
    {
      "title": "New Job Title",
      "company": "New Company",
      "period": "New Period",
      "description": "New description",
      "achievements": ["New achievement 1", "New achievement 2"],
      "technologies": ["New Tech 1", "New Tech 2"]
    }
  ],
  "technicalSkills": [
    {
      "name": "New Skill",
      "level": 90,
      "description": "New skill description"
    }
  ]
}
```

### **Step 2: Restart the Server**
```bash
cd server && npm run dev
```

### **Step 3: Done!**
The chatbot will automatically use your updated data.

## 📋 **What You Can Update:**

### **Work Experience:**
- Job titles, companies, periods
- Job descriptions and achievements
- Technologies used
- Add new jobs or remove old ones

### **Skills:**
- Add new technical skills
- Update proficiency levels (0-100%)
- Modify skill descriptions
- Remove outdated skills

### **Projects:**
- Add new projects
- Update project descriptions
- Modify technologies used
- Update GitHub links

### **Education:**
- Add new degrees
- Update school names and periods
- Modify degree descriptions

### **Contact Information:**
- Update email, phone, location
- Modify GitHub profile

## 🚀 **Quick Update Commands:**

```bash
# View update guide
./update-portfolio-data.sh

# Edit portfolio data
nano server/portfolio-data.json

# Restart server
cd server && npm run dev
```

## ✅ **Benefits:**

1. **Easy Updates**: Just edit a JSON file
2. **No Code Changes**: No need to modify server code
3. **Immediate Effect**: Changes take effect after server restart
4. **Structured Data**: Well-organized, easy to maintain
5. **Version Control**: JSON file can be tracked in git

## 🔄 **Sync with Website:**

For complete consistency, also update:
- `src/components/Experience.tsx` - Website experience section
- `src/components/Skills.tsx` - Website skills section
- `src/components/Projects.tsx` - Website projects section

## 📝 **Example: Adding a New Job**

1. **Edit `server/portfolio-data.json`:**
```json
{
  "workExperience": [
    {
      "title": "Senior AI Engineer",
      "company": "Tech Company",
      "period": "Jan 2025 - Present",
      "description": "Leading AI initiatives...",
      "achievements": ["Achievement 1", "Achievement 2"],
      "technologies": ["Python", "PyTorch", "AWS"]
    }
  ]
}
```

2. **Restart server:**
```bash
cd server && npm run dev
```

3. **Test chatbot:**
Ask "What is Vikas's current job?" → Will show new role!

## 🎉 **Result:**

Now when you add a new resume, you can easily update the chatbot data by:
1. Editing the JSON file
2. Restarting the server
3. The chatbot automatically reflects all changes!

**No more hardcoded data - everything is dynamic and easy to update!** 🚀 