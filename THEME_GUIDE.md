# 🎨 Strapi Admin Theme Customization Guide

## ภาพรวม (Overview)

ระบบ theme ของ Degito CMS ช่วยให้สามารถปรับแต่งสีและรูปลักษณ์ของ Strapi admin console ได้อย่างง่ายดาย

## 🚀 ฟีเจอร์หลัก (Key Features)

- ✅ **หลายธีมสี** - 7 ธีมสีให้เลือก
- ✅ **Dark Mode** - โหมดมืดสำหรับการใช้งานตอนกลางคืน
- ✅ **Responsive Design** - รองรับทุกขนาดหน้าจอ
- ✅ **Theme Switcher** - เปลี่ยนธีมได้ทันที
- ✅ **Keyboard Shortcuts** - ใช้คีย์บอร์ดลัดได้
- ✅ **Persistent Settings** - เก็บการตั้งค่าไว้

## 🎯 ธีมที่มีให้เลือก (Available Themes)

| ธีม | สีหลัก | คำอธิบาย |
|-----|-------|----------|
| **Default Degito** | Purple (#4945ff) | ธีมหลักของ Degito CMS |
| **Purple Theme** | Purple (#8b5cf6) | ธีมม่วงเข้ม |
| **Blue Theme** | Blue (#3b82f6) | ธีมน้ำเงิน |
| **Green Theme** | Green (#10b981) | ธีมเขียว |
| **Orange Theme** | Orange (#f59e0b) | ธีมส้ม |
| **Red Theme** | Red (#ef4444) | ธีมแดง |
| **Dark Theme** | Dark Purple (#7c3aed) | ธีมมืด |

## 🛠️ วิธีการใช้งาน (How to Use)

### 1. เปลี่ยนธีมด้วย Theme Switcher

1. เข้าสู่ Strapi Admin Panel
2. รอ 2 วินาที Theme Switcher จะปรากฏที่มุมขวาบน
3. คลิกเลือกธีมที่ต้องการ
4. ธีมจะเปลี่ยนทันที

### 2. ใช้คีย์บอร์ดลัด

- **Ctrl + T**: เปิด/ปิด Theme Switcher
- **Escape**: ปิด Theme Switcher

### 3. โหมดมืด (Dark Mode)

- ธีมจะปรับตามการตั้งค่าระบบโดยอัตโนมัติ
- หรือใช้ Dark Theme preset

## 📁 โครงสร้างไฟล์ (File Structure)

```
src/admin/
├── app.tsx                 # Main theme configuration
├── theme-config.js         # Theme settings and presets
├── custom-theme.css        # Custom CSS styling
└── app.example.tsx         # Original example file
```

## ⚙️ การปรับแต่งธีม (Customization)

### 1. เปลี่ยนสีหลัก

แก้ไขไฟล์ `theme-config.js`:

```javascript
export const themeConfig = {
  brand: {
    primary: '#your-color',      // สีหลัก
    secondary: '#your-color',    // สีรอง
    accent: '#your-color',       // สีเน้น
  },
  // ... rest of config
};
```

### 2. เพิ่มธีมใหม่

เพิ่มใน `themePresets`:

```javascript
export const themePresets = {
  yourTheme: {
    name: 'Your Theme Name',
    colors: {
      primary: '#your-primary',
      secondary: '#your-secondary',
      accent: '#your-accent',
    },
  },
  // ... existing themes
};
```

### 3. ปรับแต่ง CSS

แก้ไขไฟล์ `custom-theme.css`:

```css
:root {
  --degito-primary: #your-color;
  --degito-secondary: #your-color;
  /* ... other variables */
}
```

## 🎨 ตัวอย่างการใช้งาน (Usage Examples)

### เปลี่ยนธีมแบบโปรแกรม

```javascript
import { applyTheme } from './theme-config';

// เปลี่ยนเป็นธีมสีน้ำเงิน
applyTheme('blue');

// เปลี่ยนเป็นธีมสีเขียว
applyTheme('green');
```

### ตรวจสอบธีมปัจจุบัน

```javascript
import { themeConfig } from './theme-config';

console.log('Current theme:', themeConfig);
```

## 🔧 การแก้ไขปัญหา (Troubleshooting)

### ปัญหาที่พบบ่อย

1. **Theme Switcher ไม่ปรากฏ**
   - รอ 2-3 วินาทีหลังจากเข้าสู่ admin panel
   - กด Ctrl+T เพื่อเปิด Theme Switcher

2. **สีไม่เปลี่ยน**
   - ตรวจสอบ console สำหรับ error messages
   - ลองรีเฟรชหน้าเว็บ

3. **CSS ไม่ทำงาน**
   - ตรวจสอบว่าไฟล์ `custom-theme.css` ถูกโหลด
   - ตรวจสอบ browser developer tools

### การ Debug

เปิด Browser Developer Tools และดูใน Console:

```javascript
// ตรวจสอบ theme configuration
console.log(window.themeConfig);

// ตรวจสอบ CSS variables
console.log(getComputedStyle(document.documentElement));
```

## 📱 Responsive Design

ธีมรองรับทุกขนาดหน้าจอ:

- **Desktop**: แสดง Theme Switcher ที่มุมขวาบน
- **Tablet**: ปรับขนาด Theme Switcher
- **Mobile**: ซ่อน Theme Switcher และใช้คีย์บอร์ดลัด

## 🌙 Dark Mode Support

- รองรับ `prefers-color-scheme: dark`
- มี Dark Theme preset แยกต่างหาก
- ปรับสีอัตโนมัติตามระบบ

## 💡 Tips & Best Practices

1. **เลือกสีที่เหมาะสม**: ใช้สีที่ตัดกันชัดเจน
2. **ทดสอบบนหลายอุปกรณ์**: ตรวจสอบการแสดงผลบนหน้าจอต่างๆ
3. **เก็บการตั้งค่า**: Theme จะถูกเก็บไว้ใน browser
4. **ใช้คีย์บอร์ดลัด**: Ctrl+T สำหรับการเปลี่ยนธีมเร็วๆ

## 🔄 การอัปเดต

เมื่อต้องการอัปเดตธีม:

1. แก้ไขไฟล์ `theme-config.js`
2. รีเฟรชหน้าเว็บ
3. ธีมใหม่จะถูกโหลดทันที

## 📞 การสนับสนุน

หากมีปัญหาหรือคำถาม:

1. ตรวจสอบ Console สำหรับ error messages
2. ดูไฟล์ `THEME_GUIDE.md` นี้
3. ตรวจสอบไฟล์ configuration

---

**สร้างโดย**: Degito CMS Team  
**เวอร์ชัน**: 1.0.0  
**อัปเดตล่าสุด**: กันยายน 2025
