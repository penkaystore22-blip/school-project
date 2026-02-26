# 📘 MAGANA CBC SCHOOL MANAGEMENT SYSTEM
## User Manual & Operations Guide
### Version 2.0 | February 2026

---

## TABLE OF CONTENTS

1. [Getting Started](#1-getting-started)
2. [Login & Security](#2-login--security)
3. [Main Menu Navigation](#3-main-menu-navigation)
4. [Student Admission](#4-student-admission)
5. [Fee Collection](#5-fee-collection)
6. [Attendance Management](#6-attendance-management)
7. [Teacher Management](#7-teacher-management)
8. [Marks Entry](#8-marks-entry)
9. [Report Generation](#9-report-generation)
10. [CBC Assessment Records](#10-cbc-assessment-records)
11. [System Settings](#11-system-settings)
12. [Database Browser](#12-database-browser)
13. [Backup & Restore](#13-backup--restore)
14. [User Management](#14-user-management)
15. [Troubleshooting](#15-troubleshooting)

---

## 1. GETTING STARTED

### System Requirements
- **Microsoft Excel 2016** or later (Windows)
- **Macros must be enabled** (the system runs on VBA)
- Minimum 4GB RAM recommended
- Screen resolution: 1366×768 or higher

### First-Time Installation

1. **Open** the file `MAGANA_CBC_SchoolMIS_Professional.xlsx` in Excel
2. If prompted about macros, click **"Enable Content"**
3. Press **Alt+F11** to open the VBA Editor
4. Go to **Insert → Module**
5. Open `SchoolSystem_AutoSetup.txt` in Notepad, **Select All (Ctrl+A)**, Copy **(Ctrl+C)**
6. Click inside the new module in Excel VBA Editor
7. **Paste (Ctrl+V)** all the code
8. Press **Alt+F8**, select **`AutoSetup`**, click **Run**
9. Wait for the "Setup complete!" message
10. **Save As** → Choose **Excel Macro-Enabled Workbook (.xlsm)**
11. **Close** and **reopen** the file
12. The **Login screen** will appear automatically

### Updating the System
If you receive an updated `SchoolSystem_AutoSetup.txt`:
1. Open the Excel file
2. A backup prompt will appear — **click Yes** to create a safety copy
3. AutoSetup will update all code while **preserving your data**

---

## 2. LOGIN & SECURITY

### Default Login Credentials

| Username | Password | Role |
|----------|----------|------|
| `admin` | `admin123` | Administrator |
| `teacher1` | `teach123` | Teacher |
| `clerk` | `clerk123` | Clerk |
| `viewer` | `view123` | Viewer |

> ⚠️ **IMPORTANT**: Change the default admin password immediately after first login!

### Changing Your Password
1. From the Main Menu, click **the password option** or go to the user management
2. Enter your current password
3. Enter and confirm your new password
4. Click **Change Password**

### Roles & Permissions
| Role | Can Do |
|------|--------|
| **Administrator** | Full access: all modules, user management, settings, backup |
| **Teacher** | Marks entry, attendance, generate reports, view students |
| **Clerk** | Fee collection, student admission, attendance |
| **Viewer** | View-only access to reports and database |

---

## 3. MAIN MENU NAVIGATION

After login, the **Main Menu** appears with these options:

| Button | Function | Description |
|--------|----------|-------------|
| 📋 **STUDENT ADMISSION** | Opens student registration form | Add, edit, search, delete students |
| 💰 **FEE COLLECTION** | Opens fee management | Record payments, generate receipts |
| ✅ **ATTENDANCE** | Opens daily attendance | Mark present/absent/sick/excused |
| 👨‍🏫 **TEACHER MANAGEMENT** | Opens teacher records | Add, edit, delete teacher profiles |
| 📊 **REPORT CENTER** | Opens all reports | 8 report types available |
| 🗄️ **DATABASE** | Opens data browser | View and export any data table |
| ⚙️ **SETTINGS** | Opens configuration | Streams, subjects, fees structure |
| 📥 **CSV IMPORT** | Bulk import students | Upload student data from CSV files |
| 📝 **MARKS ENTRY** | Opens marks grid | Enter scores by class and subject |
| ❌ **EXIT** | Closes the menu | Returns to spreadsheet |

The **status panel** at the bottom shows live statistics:
- Total active students
- Today's attendance percentage
- Fee collection summary

---

## 4. STUDENT ADMISSION

### Adding a New Student
1. Click **STUDENT ADMISSION** from the Main Menu
2. Fill in the required fields:
   - **Learner ID**: Auto-generated (S001, S002...)
   - **Admission Number**: Enter the official admission number
   - **First Name** and **Last Name**
   - **Gender**: Select M or F
   - **Date of Birth**: Format dd/mm/yyyy
   - **Class**: Select from dropdown (PP1 to G9)
   - **Stream**: Auto-populated based on class
   - **Parent/Guardian Name** and **Phone Number**
3. Optional fields: UPI, Birth Certificate, Blood Group, Allergies, Special Needs
4. Click **📷 PHOTO** to browse and attach a passport photo
5. Click **💾 SAVE** to register the student

### Finding an Existing Student
1. Type the **Admission Number** or **Name** in the search box
2. Click **🔍 FIND**
3. The form will populate with the student's data
4. Make changes and click **🔄 UPDATE** to save

### Deleting a Student
1. Search for the student first
2. Click **❌ DELETE**
3. Confirm the deletion (this cannot be undone!)

> 💡 **Tip**: Instead of deleting, change the student's **Status** to "Left" or "Graduated" to keep historical records.

---

## 5. FEE COLLECTION

### Recording a Payment
1. Click **FEE COLLECTION** from the Main Menu
2. Enter the student's **Admission Number** — their name will auto-populate
3. Select the **Fee Type** (Tuition, Activity, Lunch, Transport, etc.)
4. Enter the **Amount Paid**
5. Select the **Payment Mode** (Cash, M-Pesa, Bank Transfer)
6. The **Receipt Number** is auto-generated
7. The **Date** defaults to today
8. Click **SAVE PAYMENT**

### Generating a Fee Receipt
1. After saving, click **PRINT RECEIPT**
2. A professional A4 receipt is generated as PDF
3. The PDF is saved to the `\Reports` folder

### Viewing Payment History
1. Enter the student's admission number
2. Click **VIEW HISTORY**
3. All previous payments will be listed

---

## 6. ATTENDANCE MANAGEMENT

### Marking Daily Attendance
1. Click **ATTENDANCE** from the Main Menu
2. Select the **Class** and **Date**
3. Click **LOAD** to see all students in the class
4. For each student, select status:
   - ✅ **Present**
   - ❌ **Absent**
   - 🤒 **Sick**
   - 📋 **Excused**
5. Click **SAVE ATTENDANCE**

### Viewing Attendance Records
- Use the **Report Center → Attendance Summary** to view consolidated attendance statistics by class.

---

## 7. TEACHER MANAGEMENT

### Adding a Teacher
1. Click **TEACHER MANAGEMENT** from the Main Menu
2. Fill in: Name, TSC Number, Phone, Email, Subject, Join Date
3. Click **SAVE**

### Editing/Deleting a Teacher
1. Select the teacher from the list
2. Modify fields and click **UPDATE**, or click **DELETE** to remove

---

## 8. MARKS ENTRY

### Entering Marks for a Class
1. Click **MARKS ENTRY** from the Main Menu
2. Select:
   - **Class** (e.g., G1)
   - **Stream** (e.g., A) — optional
   - **Subject** (e.g., Mathematics)
   - **Term** (Term 1, 2, or 3)
   - **Year** (e.g., 2026)
3. Click **LOAD CLASS** — all active students appear in a grid
4. Enter **scores** in the textboxes next to each student name
5. The **CBC grade** (EE1, ME2, etc.) auto-calculates as you type
6. Click **💾 SAVE ALL MARKS**
7. A summary shows how many marks were saved vs skipped

### Grading Scale (CBC Kenya)
| Score | Level | Meaning |
|-------|-------|---------|
| 90-100% | EE1 | Exceeding Expectations (Highest) |
| 75-89% | EE2 | Exceeding Expectations |
| 58-74% | ME1 | Meeting Expectations |
| 41-57% | ME2 | Meeting Expectations |
| 31-40% | AE1 | Approaching Expectations |
| 21-30% | AE2 | Approaching Expectations |
| 11-20% | BE1 | Below Expectations |
| 0-10% | BE2 | Below Expectations (Lowest) |

### Quick Report from Marks Form
- Click **📊 CLASS REPORT** to generate a class assessment directly from the marks form
- Click **📄 STUDENT REPORT** to generate an individual report card

---

## 9. REPORT GENERATION

### Accessing the Report Center
1. Click **REPORT CENTER** from the Main Menu
2. The Report Center shows **3 sections** with **8 report types**

### Report Types

#### 📄 REPORT CARDS
| Report | What It Does |
|--------|-------------|
| **Single Report Card** | Generates one student's A4 CBC report card |
| **Batch Report Cards** | Generates report cards for ALL students in a class (saved as PDF) |

#### 📊 ACADEMIC REPORTS
| Report | What It Does |
|--------|-------------|
| **Class Assessment** | Subject-by-subject breakdown for a class (shows every student's score per subject in a grid) |
| **Class Performance** | Summary report showing each student's average, total, rank, and grade across all subjects |

#### 📋 SYSTEM REPORTS
| Report | What It Does |
|--------|-------------|
| **Class List** | Student roster for a class/stream (Name, Adm No, Gender, Status) |
| **Attendance Summary** | Attendance statistics by class (Present/Absent/Sick counts) |
| **Fee Arrears** | Students with outstanding fee balances |
| **Population Count** | Enrollment statistics (Active, Left, Total by class) |

### Generating a Single Report Card
1. Click **Single Report Card**
2. Enter the student's **Admission Number**
3. Select **Term** and **Year**
4. Click **Generate**
5. The report card appears on a new sheet and can be exported to PDF

### Generating Batch Report Cards
1. Click **Batch Report Cards**
2. Select **Class**, **Term**, and **Year**
3. Click **Generate** — progress is shown in the status bar
4. All PDFs are saved to the `\Reports` folder

### Generating a Class Assessment
1. Click **Class Assessment**
2. Enter the **Class** (e.g., G1)
3. Enter the **Term** (e.g., Term 1)
4. Enter the **Year** (e.g., 2026)
5. The report generates on the `Report_Class` sheet

### Generating a Class Performance Report
1. Click **Class Performance**
2. Enter the **Class**, **Term**, and **Year** when prompted
3. A summary table appears with student rankings

### Navigating Back from Reports (Fullscreen Mode)
The system runs in fullscreen/kiosk mode with all Excel menus hidden. When viewing any generated report, you have **4 ways** to return to the Dashboard:

| Method | How |
|--------|-----|
| **◀ BACK Button** | Click the dark **"◀ BACK TO DASHBOARD"** button in the top-right corner of any report |
| **ESC Key** | Press the **Escape** key on your keyboard |
| **Ctrl+Home** | Press **Ctrl+Home** as an alternative shortcut |
| **Right-Click** | Right-click anywhere on the report → select **"◀ Back to Dashboard"** from the context menu |

> 💡 **Tip**: A small hint text below the back button reminds you: *"Press ESC or Ctrl+Home to return"*

---

## 10. CBC ASSESSMENT RECORDS

### Recording Competency Skills
1. Open the **CBC Assessment** form from the Marks Entry area
2. Select the student, term, and year
3. Rate each competency area on a 1-5 scale:
   - Communication & Collaboration
   - Critical Thinking & Problem Solving
   - Creativity & Imagination
   - Citizenship
   - Digital Literacy
   - Learning to Learn
   - Self-efficacy
4. Click **SAVE**

### Recording Physical Health Data
1. Open the **Physical Entry** form
2. Enter: Height (cm), Weight (kg)
3. BMI is auto-calculated
4. Click **SAVE**

---

## 11. SYSTEM SETTINGS

### Managing Streams
1. Click **SETTINGS** from the Main Menu
2. Go to the **Streams** tab
3. Add new streams (e.g., "C") or remove unused ones

### Managing Subjects
1. Go to the **Subjects** tab
2. Add subjects with: Name, Level (Lower Primary/Upper Primary/Junior Sec), Max Marks

### Managing Fee Structure
1. Go to the **Fees** tab
2. Add fee types with amounts
3. These appear in the Fee Collection dropdown

---

## 12. DATABASE BROWSER

### Browsing Data
1. Click **DATABASE** from the Main Menu
2. Select a **table** from the dropdown (e.g., DB_Students, DB_Marks)
3. Click **LOAD TABLE DATA**
4. Data appears in a scrollable list (use mouse wheel to scroll)

### Exporting to CSV
1. Load a table
2. Click **EXPORT TO CSV**
3. Choose a save location
4. The data is exported as a `.csv` file for use in other programs

---

## 13. BACKUP & RESTORE

### Creating a Backup
1. Click **SETTINGS** → **Backup** (or access from the Backup form)
2. Choose **Full Backup** (all data) or **Partial Backup** (selected sheets)
3. Click **CREATE BACKUP**
4. The backup is saved to `\Backups` folder with a timestamp

### Restoring from Backup
1. Open the Backup form
2. Click **RESTORE**
3. Select the backup file
4. Confirm the restore operation

> ⚠️ **WARNING**: Restoring will overwrite current data!

### Recommended Backup Schedule
| Frequency | Type | When |
|-----------|------|------|
| **Daily** | Full Backup | End of each school day |
| **Weekly** | Copy to USB | Every Friday |
| **Termly** | Archive copy | End of each term |

---

## 14. USER MANAGEMENT

### Adding a New User (Admin Only)
1. Click **User Management** (accessible to admins)
2. Click **Add New User**
3. Enter: Username, Password, Role
4. Click **SAVE**

### Editing a User
1. Select the user from the list
2. Modify role or reset password
3. Click **UPDATE**

### Deleting a User
1. Select the user
2. Click **DELETE**
3. Confirm deletion

---

## 15. TROUBLESHOOTING

### Common Issues

| Problem | Solution |
|---------|----------|
| **"Macros have been disabled"** | File → Options → Trust Center → Trust Center Settings → Enable all macros |
| **Login screen doesn't appear** | Close and reopen the file, or press `Alt+F8` → `ShowMainMenu` |
| **"Sub or Function not defined"** | Re-run AutoSetup: `Alt+F8` → `AutoSetup` |
| **Report shows no data** | Ensure marks have been entered for the selected Term and Year |
| **"Run-time error 9: Subscript out of range"** | A required sheet is missing; re-run AutoSetup |
| **"Permission denied" on save** | Close any other programs that have the file open |
| **Photos not showing** | Ensure photos are in the same folder as the workbook, or update paths |
| **Slow performance** | Close other Excel workbooks; reduce number of open applications |
| **Stuck on report sheet (fullscreen)** | Press **ESC** or **Ctrl+Home**, click the **◀ BACK TO DASHBOARD** button, or right-click → **Back to Dashboard** |

### Getting Help
- Check the `DB_SystemLogs` sheet for error details
- The audit log records all system activities with timestamps
- Contact your system administrator for user account issues

### Emergency Recovery
If the system becomes unresponsive:
1. Press **Ctrl+Break** to stop VBA execution
2. Press **Alt+F11** to open VBA Editor
3. Click **Reset** (square stop button)
4. Close VBA Editor
5. Save the file
6. If data is corrupted, restore from the latest backup in `\Backups`

---

## 📊 QUICK REFERENCE CARD

### Keyboard Shortcuts
| Shortcut | Action |
|----------|--------|
| `Alt+F8` → `ShowMainMenu` | Open the Main Menu |
| `Alt+F8` → `SeedTestData` | Load 20 test students (first-time only) |
| `Alt+F11` | Open VBA Editor |
| `Ctrl+S` | Save the workbook |
| `Esc` | Close active form / **Return to Dashboard from reports** |
| `Ctrl+Home` | **Return to Dashboard from any report sheet** |
| `Right-click` | Context menu includes **"◀ Back to Dashboard"** on reports |

### File Locations
| Item | Location |
|------|----------|
| Main workbook | `MAGANA_CBC_SchoolMIS_Professional.xlsm` |
| PDF Reports | `\Reports\` folder (same directory) |
| Backups | `\Backups\` folder (same directory) |
| CSV Exports | User-selected location |

### CBC Class Structure
| Level | Classes | Subjects |
|-------|---------|----------|
| Pre-Primary | PP1, PP2 | 5 subjects |
| Lower Primary | G1, G2, G3 | 8 subjects |
| Upper Primary | G4, G5, G6 | 10 subjects |
| Junior Secondary | G7, G8, G9 | 11 subjects |

---

*Manual Version 2.0 | Magana CBC School Management Information System*
*Generated: 24-Feb-2026*
