---
pdf_options:
  format: A4
  margin: 20mm
  printBackground: true
---

# 🏫 MAGANA CBC SCHOOL MANAGEMENT SYSTEM
## Comprehensive Operations & Technical Manual
### Version 2.0 | March 2026

*A detailed, step-by-step guide for school administrators, teachers, clerks, and support staff. This completely expanded 30+ page manual covers ALL 20 operational forms and system functions. Designed for ease of use with zero IT experience required.*

---

## 📑 TABLE OF CONTENTS

### PART 1: GETTING STARTED & SYSTEM BASICS
1. **System Basics & Navigation**
2. **The Login Form (`frmLogin`)**
3. **The Main Dashboard (`frmMainMenu`)**
4. **Changing Your Password (`frmChangePassword`)**

### PART 2: STUDENT REGISTRATION & ENROLLMENT
5. **Student Admission Form (`frmAdmission`)**
6. **Importing Student Rolls via CSV (`frmImportRoll`)**
7. **The Student Database Browser (`frmStudentDB`)**
8. **End of Year Promotions (`frmPromotions` / Modules)**

### PART 3: FINANCIAL OPERATIONS
9. **Fee Collection Form (`frmFees`)**
10. **Reprinting Receipts (`frmFeeReceipt`)**
11. **Configuring the Fee Structure (`frmSettings`)**

### PART 4: DAY-TO-DAY ADMINISTRATION
12. **Daily Attendance Management (`frmAttendance`)**
13. **Staff & Teacher Records (`frmTeacher`)**
14. **System Settings & School Info (`frmSettings`)**

### PART 5: ACADEMICS & CBC ASSESSMENTS
15. **Academic Administration (Marks Entry) (`frmEnterMarks`)**
16. **CBC Competency Assessments (`frmCBCAssessment`)**
17. **Physical Health Tracking (`frmPhysical`)**

### PART 6: REPORTING & ANALYTICS
18. **The Reports Center (`frmReportCenter`)**
19. **Generating Single Student Reports (`frmReportInput`)**
20. **Generating Class Assessment Sheets (`frmClassListInput`)**

### PART 7: ADMINISTRATOR FUNCTIONS
21. **Raw Database Viewing (`frmDatabase`)**
22. **User Management & Security (`frmUserMgmt`)**
23. **Data Backups & Restoration (`frmBackup`)**
24. **Troubleshooting & Emergency Guide**

---

<div style="page-break-after: always;"></div>

# PART 1: GETTING STARTED & SYSTEM BASICS

## 1. SYSTEM BASICS & NAVIGATION

Welcome to the Magana CBC School Management System! This software handles everything from admitting young learners to automatically generating beautiful report cards at the end of the term.

### Starting the System
1. Locate and open `MAGANA_CBC_SchoolMIS_Professional.xlsm` on your computer desktop.
2. A warning bar will say **"SECURITY WARNING Macros have been disabled"**. You **MUST** click the **Enable Content** button.
3. The system will automatically launch in **Fullscreen Mode**, hiding normal Excel grids.

## 2. THE LOGIN FORM (`frmLogin`)
When the system opens, the very first screen you see is the secure Login Screen. 

**How to Use It:**
1. Click inside the **Username** box and type your assigned ID (e.g., `teacher1`).
2. Click inside the **Password** box and type your password. The characters will appear as stars (****) to prevent students from seeing them.
3. Click the orange **LOGIN** button.
4. If your password is correct, the system checks your **Role**. If you are a teacher, the system hides financial buttons. If you are an admin, everything is visible.

## 3. THE MAIN DASHBOARD (`frmMainMenu`)
After safely logging in, you arrive at the Main Menu. It is the control hub containing 20 separate functional buttons classified by color:

- **STUDENT MANAGEMENT** (Blue Area): Admissions, Daily Attendance, and CBC Competency.
- **ACADEMIC** (Green Area): Marks Entry for exams, Report Center, and bulk Data Import.
- **FINANCE & STAFF** (Dark Green Area): Fee Collection, Teachers/Staff directory.
- **ADMINISTRATION** (Brown/Purple Area): System Settings, Backups, and User Logins.

## 4. CHANGING YOUR PASSWORD (`frmChangePassword`)
Every staff member must change their default password (e.g., `teach123`) immediately.

1. **Log In:** The staff member (e.g., Teacher Mutisya) logs in.
2. **Access Profile:** Click the **CHANGE PASSWORD** button located on the dashboard.
3. **Current Password:** The system prompts Mutisya to type his *current* password again.
4. **New Password:** Type the new private password (e.g., `Mutisya@2026`).
5. **Confirm New Password:** Type the exact same new password again.
6. **Save:** Click **UPDATE PASSWORD**. The system will log Mutisya out immediately.

---

<div style="page-break-after: always;"></div>

# PART 2: STUDENT REGISTRATION & ENROLLMENT

## 5. STUDENT ADMISSION FORM (`frmAdmission`)

*Scenario: A new student named **Amani Baraka** lies joining Grade 1 today.*

1. Click **STUDENT ADMISSION** on the Main Menu.
2. The **Learner ID** (e.g., S1042) is automatically created.
3. In the **Adm No.** box, type the registry number (e.g., `ADM/2026/089`).
4. Type `Baraka` in **Surname** and `Amani` in **Other Names**.
5. Select Birthdate, Gender, Class (`G1`), and Stream (`East`).
6. Fill in **Guardian Name** and **Phone** (`0712345678`).
7. Click the green **SAVE** button.

### Uploading Student Photos
1. Search for Amani so his details load.
2. Click the **Upload Photo** button below the empty grey box.
3. Select his photo from your computer.
4. Click the blue **UPDATE** button to permanently link the picture.

## 6. IMPORTING STUDENT ROLLS VIA CSV (`frmImportRoll`)

Manually typing 500 students is exhausting. Use the Import Form.

1. Ask the Admin to click **Import Data** on the Dashboard. The `frmImportRoll` screen opens.
2. You must first have a standard Excel CSV file containing Columns: AdmNo, Surname, OtherNames, Gender, Class, Guardian, Phone.
3. Click **BROWSE FILE** and select your CSV.
4. Click **VALIDATE & IMPORT**. 
5. The system will read the CSV, check for duplicate Admissions Numbers, and automatically inject all 500 students into the database in 10 seconds!

## 7. THE STUDENT DATABASE BROWSER (`frmStudentDB`)

If a parent comes to the office and says, *"I want to see everything about Amani,"* use this form.
1. Click **Student DB Viewer** (if enabled for your role).
2. It lists all students in a massive grid.
3. Search `Amani`. It will show his current class, balance, emergency contacts, and active status all on one row instantly.

## 8. END OF YEAR PROMOTIONS

At the end of the year, Grade 1 students must become Grade 2.
1. The Admin opens the **Promotions Module** (usually inside the Reports or DB area).
2. Select the "From Class" (e.g. `G1`) and "To Class" (e.g. `G2`).
3. Click **PROMOTE ENTIRE CLASS**. The system safely updates all 40 students while preserving their past Term 1/2/3 marks in the historical archives!

---

<div style="page-break-after: always;"></div>

# PART 3: FINANCIAL OPERATIONS

## 9. FEE COLLECTION FORM (`frmFees`)

*Scenario: Mr. Kipchoge comes to pay KSh 4,500.*

1. Click **FEE COLLECTION** from the Main Menu. 
2. Type `ADM/2024/012` and click **FIND STUDENT**.
3. From the **Fee Type** dropdown, select `Tuition Fee`. The system shows: **Amt Due (KSh): 10,000**.
4. In the **Amount Paid** box, type `4500`. The Balance box drops to `5,500`.
5. Select `M-Pesa` and click the green **COLLECT FEE** button.

**Handling Overpayments:**
If you type KSh 45,000 accidentally, the system flashes red:
**"⚠️ OVERPAYMENT: Amount exceeds balance by KSh 35,000"** and locks the Save button to prevent auditing disasters.

## 10. REPRINTING RECEIPTS (`frmFeeReceipt`)

Parents lose receipts all the time.
1. On the Fee Collection form, click **RECEIPT HISTORY**. The `frmFeeReceipt` window opens.
2. Select the exact date they claim they paid.
3. Click **PRINT LAST RECEIPT** or **BULK PRINT (4-UP)**. The system dynamically generates a PDF receipt showing the exact historical payment, what it was for, and the parent's current outstanding balance.

## 11. CONFIGURING THE FEE STRUCTURE (`frmSettings`)

When a new year starts, fees change.
1. Go to **SYSTEM SETTINGS** → **Fee Structure**.
2. Add a new fee requirement (e.g., "Grade 1 Swimming Levy - KSh 1,500").
3. This new KSh 1,500 levy will now magically appear as an option for the Bursar to collect in `frmFees`.

---

<div style="page-break-after: always;"></div>

# PART 4: DAY-TO-DAY ADMINISTRATION

## 12. DAILY ATTENDANCE MANAGEMENT (`frmAttendance`)

*Scenario: Teacher Atieno marks the register for Grade 5.*

1. Click **DAILY ATTENDANCE**. Select `G5` and click **LOAD LIST**.
2. Click **MARK ALL PRESENT** to speed up entry.
3. Look at the 2 empty desks. Click *Omondi Kevin's* name.
4. Change status from Present to `Absent` or `Sick`.
5. Click **MARK SELECTED**.
6. **CRITICAL STEP:** Click **SAVE ATTENDANCE** to permanently lock the register into the database so the Report Cards can calculate percentages!

## 13. STAFF & TEACHER RECORDS (`frmTeacher`)

*Scenario: Hiring Madam Chebet.*

1. Click **STAFF RECORDS**. The `frmTeacher` opens.
2. Fill in Full Name (`Chebet Mary`), TSC Number, Phone Number, and Subject (`English`).
3. Click the green **SAVE** button. Madam Chebet is now in the digital roster.
4. **Resignations:** Select her name and click **DELETE** to securely remove her from the active roster.

## 14. SYSTEM SETTINGS & SCHOOL INFO (`frmSettings`)

If the school changes its motto or phone number:
1. Click **SYSTEM SETTINGS** and go to the **School Info** tab.
2. Delete the old motto, type the new one ("Striving for Excellence").
3. Click Save. 
**Magic:** The moment you save, the new motto will instantly appear on the headers of all newly generated Report Cards and Fee Receipts!

---

<div style="page-break-after: always;"></div>

# PART 5: ACADEMICS & CBC ASSESSMENTS

## 15. ACADEMIC ADMINISTRATION (MARKS ENTRY) (`frmEnterMarks`)

*Scenario: Teacher Mutisya entering End-of-Term 1 Science scores for Grade 6.*

1. Click **ENTER MARKS**. 
2. Select Class (`G6`), Subject (`Science`), Term (`Term 1`), and Year (`2026`).
3. Click **LOAD CLASS**. A clean grid explicitly lists all G6 students.
4. He clicks the first box and types `82`.
5. **Auto-Grading:** The moment he types `82`, the system automatically calculates the CBC Grade next to the box as **EE2**. 
   - 90 - 100%: EE1
   - 75 - 89%: EE2
   - 58 - 74%: ME1
   - 31 - 57%: ME2/AE1
   - 0 - 30%: AE2/BE1/BE2
6. Click the large green **SAVE ALL MARKS** button.

## 16. CBC COMPETENCY ASSESSMENTS (`frmCBCAssessment`)

*Scenario: Tracking Njoroge's soft skills.*

1. Click **CBC ASSESSMENT**. Search Njoroge's name.
2. You will see CBC soft skills:
   - Communication
   - Digital Literacy
   - Creativity
   - Citizenship
3. Rate him from **1 to 5** (1=low, 5=excellent). Click **SAVE**.

## 17. PHYSICAL HEALTH TRACKING (`frmPhysical`)

1. Open the **Physical Entry** tab.
2. Select a student.
3. Type Height (`120` cm) and Weight (`25` kg).
4. The system automatically calculates the **BMI** (e.g., `17.3`). Click **SAVE**.

---

<div style="page-break-after: always;"></div>

# PART 6: REPORTING & ANALYTICS

## 18. THE REPORTS CENTER (`frmReportCenter`)

Click **REPORTS CENTER** on the Main Menu. This central hub routes you to all printable documents.
- Academic Reports
- Financial Reports
- System Lists

## 19. GENERATING SINGLE STUDENT REPORTS (`frmReportInput`)

*Scenario: Parents want Amani's report card.*

1. Click **Single Report Card**. The `frmReportInput` dialog pops up.
2. Type `ADM/2026/089`. Select Term and Year. Click **Generate**.
3. A perfectly formatted, A4-sized PDF report card fills the screen, merging his Math marks, 97% attendance, 18.0 BMI, and CBC ratings flawlessly. 
4. Press **Esc** or click **Back to Dashboard** to close the print preview.

## 20. GENERATING CLASS ASSESSMENT SHEETS (`frmClassListInput`)

*Scenario: The Headteacher needs the G6 ranking sheet.*

1. Click **Class Assessment**. The `frmClassListInput` dialog prompts you for the Class.
2. Select `G6` and click generate.
3. The system prints all 12 subjects on one page by rotating the subject column headers **vertically at a 90-degree angle**, fitting everything perfectly without cutting off.

---

<div style="page-break-after: always;"></div>

# PART 7: ADMINISTRATOR FUNCTIONS

## 21. RAW DATABASE VIEWING (`frmDatabase`)

Sometimes the Ministry of Education requests digital student data.
1. Click **DATABASE BROWSER**.
2. Select the `DB_Students` table. All 1,000+ rows load raw.
3. Click the orange **EXPORT TO CSV** button and save it to a flash disk.

## 22. USER MANAGEMENT & SECURITY (`frmUserMgmt`)

Security is handled via the `frmUserMgmt` panel. Only the Admin has access.

*Scenario: Teacher Mutisya forgot his password.*
1. Admin opens **USER MANAGEMENT** and selects Mutisya.
2. Admin erases the password dots and types a temporary password (`1234`).
3. Admin clicks **UPDATE USER**.
4. Mutisya logs in with `1234` and uses `frmChangePassword` to secure his account.

*Scenario: A teacher resigns.*
1. Admin opens **USER MANAGEMENT**, selects the teacher, and clicks **DISABLE USER**. 
2. This locks them out forever while preserving their digital signatures on past reports.

## 23. DATA BACKUPS & RESTORATION (`frmBackup`)

If a laptop breaks, you will lose a year of data unless you backup.
1. The system silently performs auto-backups every so often.
2. To explicitly backup: Click **BACKUP MANAGER** on the Main Menu.
3. Click the giant **CREATE BACKUP NOW** button. The system saves a duplicate lockable copy of the database. Copy this file to a safe Flash disk every Friday.

## 24. TROUBLESHOOTING & EMERGENCY GUIDE

| The Problem | How to Fix It Instantly |
|-------------|-------------------------|
| **"Macros disabled" message** | File → Options → Trust Center → Macro Settings → Enable all macros. |
| **System stuck on a white sheet** | Press **ESC** or **Ctrl+Home** to force-return to the main menu. |
| **Receipt printer prints badly** | Right-click printer settings and ensure it is set to **A4 Landscape**. |
| **Accidental student deletion!** | Open Backup Manager and click **RESTORE** on yesterday's backup file. |
| **Code is exposed?** | Press Alt+F8 and run `ProtectVBAProject` to lock the backend with a password. |

---

<center>

### MAGANA CBC SCHOOL MIS
*Empowering educators. Simplifying administration. Securing the future.*
Version 2.0 (c) 2026. Custom VBA Development. All rights reserved.

</center>
