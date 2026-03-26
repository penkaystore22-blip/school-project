# 🏫 MAGANA CBC SCHOOL MANAGEMENT SYSTEM
## Comprehensive Operations Manual
### Version 2.0 | February 2026

*This manual is designed for school administrators, teachers, clerks, and support staff. It assumes no prior IT knowledge and provides step-by-step practical examples for every daily school task.*

---

## 📑 TABLE OF CONTENTS

1. **[System Basics & Navigation](#1-system-basics--navigation)**
   - Starting the System
   - Logging In (Examples and Roles)
   - The Main Dashboard
2. **[Student Admission & Records](#2-student-admission--records)**
   - Registering a New Learner (Step-by-Step)
   - Searching for an Existing Learner
   - Uploading Student Photos
3. **[Fee Collection & Receipts](#3-fee-collection--receipts)**
   - Recording a Fee Payment
   - Handling Overpayments & Balances
   - Printing Professional Receipts
4. **[Daily Attendance Management](#4-daily-attendance-management)**
   - Marking Morning Attendance
5. **[Staff & Teacher Records](#5-staff--teacher-records)**
   - Registering New Teachers
6. **[Academic Administration (Marks Entry)](#6-academic-administration-marks-entry)**
   - How to Enter Exam Scores
   - Auto-Grading Explained (EE, ME, AE, BE)
7. **[CBC Competency Assessments](#7-cbc-competency-assessments)**
   - Assessing Core Competencies (Values & Skills)
   - Recording Physical Attributes (Height/Weight/BMI)
8. **[Generating Professional Reports](#8-generating-professional-reports)**
   - Individual Learner Report Cards
   - Class Assessment Spreadsheets
   - Printing & Navigating Back to Dashboard
9. **[System Settings & Database](#9-system-settings--database)**
   - Changing School Information & Mottos
   - Exporting Data to CSV (Flash disks)
10. **[Data Security & Backups](#10-data-security--backups)**
    - Manual and Automatic Backups
    - Managing Users & Passwords

---

## 1. SYSTEM BASICS & NAVIGATION

### Starting the System
The system runs universally on Microsoft Excel but behaves like a standalone secure application.
1. Open the file named `MAGANA_CBC_SchoolMIS_Professional.xlsm`.
2. A yellow warning bar might appear at the top saying **"SECURITY WARNING Macros have been disabled"**. You MUST click the **Enable Content** button to start the software.
3. The system will automatically launch in **Fullscreen Mode**, hiding normal Excel grids and menus so you can focus purely on school operations.

### Logging In
When the system opens, you will see a Login Screen.

**Example roles:**
- **Clerk/Bursar**: Logs in to collect fees and print receipts. *(Username: clerk | Password: clerk123)*
- **Teacher**: Logs in to enter marks and attendance. *(Username: teacher1 | Password: teach123)*
- **Principal/Admin**: Logs in to view all financial/academic reports, manage users, and change settings. *(Username: admin | Password: admin123)*

> 🔒 **Security Tip**: Never share your password. If a new teacher joins, ask the Admin to create a unique user account for them. Change default passwords immediately!

### Main Dashboard (Navigation Hub)
After logging in, you will see the **Main Menu**. This is your control center. It is grouped logically into four colored sections:
- **STUDENT MANAGEMENT** (Blue): Admissions, Attendance, CBC Assessments.
- **ACADEMIC** (Green): Marks Entry, Report Center, Data Import.
- **FINANCE & STAFF** (Dark Green): Fee Collection, Teachers/Staff, Database Browser.
- **ADMINISTRATION** (Brown/Purple): System Settings, Backups, User Logins.

Simply click any button with a pointing arrow (e.g., `▶ Fee Collection`) to open that specific form.

---

## 2. STUDENT ADMISSION & RECORDS

Use this form when a new student joins the school, or to update an existing student's details (like a new phone number).

### Example: Registering a New Learner
*Scenario: A new student named John Doe is joining Grade 1 Stream A today.*

1. Click **STUDENT ADMISSION** on the Main Menu.
2. The **Learner ID** (e.g., S005) is automatically created by the system to ensure no duplicates.
3. In **Adm No.**, type the school's official registry number (e.g., `ADM/2026/015`).
4. Type `Doe` in **Surname** and `John` in **Other Names**.
5. Pick his **Birth Date** from the calendar and select `Male` for **Gender**.
6. Select `G1` for **Class Lvl** and `A` for **Stream**.
7. Fill in the **Guardian Name** and **Phone** (This is crucial for emergencies and fee reminders).
8. Click the green **✔️ SAVE** button at the bottom. The system will alert you: "Student saved successfully."

### Uploading a Photo
1. On the Admission Form, search for the student or fill in their new details.
2. Click the **✏️ Upload Photo** button on the right side.
3. Choose the student's passport-style picture from your computer. The photo will instantly appear in the picture box on the screen.
4. Click **UPDATE** to permanently save the picture to their digital profile.

---

## 3. FEE COLLECTION & RECEIPTS

The system ensures fee collection is accurate, receipted automatically, and mathematically flawless.

### Example: Recording a Fee Payment
*Scenario: John's guardian pays KSh 2,500 for the Activity Fee via M-Pesa.*

1. Click **FEE COLLECTION** from the Main Menu.
2. Type John's Admission No. (`ADM/2026/015`).
3. Click the orange **FIND STUDENT** button. John's full name will automatically appear.
4. From the **Fee Type** dropdown, select `Activity Fee`. 
   *(The system will automatically consult the Settings and show the exact amount due for Grade 1 Activity Fee).*
5. In **Amount Paid**, type `2500`.
   *(Notice the balance automatically drops as you type! If you accidentally type 3500 instead of 2500, the system will highlight the balance in red, warn you of an "OVERPAYMENT," and prevent errors).*
6. Select `M-Pesa` under **Payment Mode**.
7. Click the large green **✔️ COLLECT FEE** button. The payment is instantly recorded safely in the database.

### Printing Professional Receipts
After paying, click the brown **🖨️ PRINT LAST RECEIPT** button.
A highly professional A4 receipt will be generated instantly as a PDF. It contains two copies per page:
- **School Copy** (Top half - keep for records)
- **Parent Copy** (Bottom half - cut and give to guardian)
The receipt shows a complete financial breakdown of all fees the student owes, what they just paid, the receipt number, and their current outstanding balances.

---

## 4. DAILY ATTENDANCE MANAGEMENT

Attendance is tracked digitally to monitor school drop-out rates, health patterns, and Ministry of Education compliance.

### Marking Morning Attendance
*Scenario: It is Monday morning, and you need to mark attendance for Grade 3.*

1. Click **DAILY ATTENDANCE** on the Main Menu.
2. Select **Class**: `G3` and confirm the current **Date**.
3. Click the purple **▶ LOAD LIST** button. Every student currently enrolled in Grade 3 will appear in the large white box.
4. **Fast method:** If everyone is present, simply click the green **✔️ MARK ALL PRESENT** button. 
5. **Marking absentees:** Find the specific student who is missing. Click their name in the list. Select `Absent` or `Sick` from the **Set Status** dropdown at the bottom, then click the purple **MARK SELECTED** button.
6. When completely done, you MUST click the large green **SAVE ATTENDANCE** button at the very bottom to finalize the register.

---

## 5. STAFF & TEACHER RECORDS

Keep a secure digital database of all teaching personnel.

1. Click **STAFF RECORDS** on the Main Menu.
2. To add a newly hired teacher, fill in their Full Name, TSC Number, Phone Number, and assign them an Email and primary Subject area.
3. Select their **Staff Type** (e.g., Permanent, Contract, or BOG).
4. Click **SAVE**. You can update their details anytime if their phone number changes.

---

## 6. ACADEMIC ADMINISTRATION (MARKS ENTRY)

This module handles traditional exam scoring smoothly.

### How to Enter Exam Scores
*Scenario: Entering Mathematics scores for Grade 4 at the end of Term 1.*

1. Click **ENTER MARKS** from the Main Menu.
2. Select Class (`G4`), Subject (`Mathematics`), Term (`Term 1`), and Year (`2026`).
3. Click **LOAD CLASS**. A grid will perfectly list all Grade 4 students.
4. Type the raw score (out of 100) in the box next to each student's name.
5. As you type a number, the system **instantly calculates the CBC Grade** (e.g., EE1, ME2) based on the Ministry of Education's strict CBC guidelines.
6. Click **💾 SAVE ALL MARKS**.

### The Grading Scale Explained
The system removes human calculation errors by grading automatically:
- **90 - 100%**: EE1 (Exceeding Expectations - Outstanding)
- **75 - 89%**: EE2 (Exceeding Expectations)
- **58 - 74%**: ME1 (Meeting Expectations - Good)
- **41 - 57%**: ME2 (Meeting Expectations)
- **31 - 40%**: AE1 (Approaching Expectations - Average)
- **21 - 30%**: AE2 (Approaching Expectations)
- **11 - 20%**: BE1 (Below Expectations - Needs Help)
- **0 - 10%**: BE2 (Below Expectations - Critical)

---

## 7. CBC COMPETENCY ASSESSMENTS

In addition to academic marks, the CBC curriculum requires tracking a child's character, physical growth, and core values.

### Assessing Core Competencies
1. Click **CBC ASSESSMENT** on the Main Menu.
2. Select a student and the current term.
3. You will see skills like *Digital Literacy*, *Creativity & Imagination*, and *Citizenship*.
4. Rate the child from 1 to 5 based on their actual observable ability (1 being low struggle, 5 being excellent mastery).

### Recording Physical Health
1. In the same CBC Assessment area, switch to the **Physical Entry** tab at the top.
2. Type the child's **Height** (in cm) and **Weight** (in kg).
3. The system instantly calculates their **BMI (Body Mass Index)**. This helps the school track child nourishment and healthy growth trajectories over the years!

---

## 8. GENERATING PROFESSIONAL REPORTS

The system automatically designs beautiful reports ready for parent review. You do not need to format any Excel cells manually!

### Individual Learner Report Cards
1. Click **REPORTS CENTER** on the Main Menu.
2. Click **Single Report Card** under the blue Academic section.
3. Type the learner's Admission Number.
4. Click **Generate**.
5. The system will create a stunning digital report card. It seamlessly merges their academic marks, attendance percentage, physical BMI, and teacher's CBC skill assessments into one unified, printable document. 

### Class Assessment Spreadsheets
If a teacher wants to see how the whole class performed at a glance:
1. Go to **REPORTS CENTER** → **Class Assessment**.
2. Select the class (e.g., G6).
3. The system generates a wide landscape document showing every single student's score in every subject, their Total Points, Average %, and Class Rank.
4. **Professional Output:** The subject column names are printed vertically (sideways) so that all 10+ subjects fit perfectly on one A4 paper when printed, without cutting off!

### Returning to the Dashboard from a Generated Report
When viewing a generated report, the screen represents a printable A4 page in Fullscreen. 
To go back to the menus, do one of the following:
- Click the dark **◀ BACK TO DASHBOARD** button situated in the top right corner.
- Press **ESCAPE (Esc)** on your computer keyboard.
- Press **Ctrl + Home** on your computer keyboard.
- Right-click your mouse anywhere on the white paper and select **◀ Back to Dashboard**.

---

## 9. SYSTEM SETTINGS & DATABASE

### Changing School Information
If the school changes its phone number or motto, you don't need to call an IT expert to change the code:
1. Click **SYSTEM SETTINGS** (Admin Only).
2. Go to the **School Info** tab.
3. Update the School Name, Motto, Postal Address, or Phone Number here.
4. Click Save. These changes will instantly update the letterheads on all newly printed Report Cards and Fee Receipts!

### Exporting Data to CSV (Flash Disks)
Sometimes the Ministry of Education requests student data.
1. Click **DATABASE BROWSER** on the Main Menu.
2. Load the `DB_Students` table.
3. Click the orange **EXPORT TO CSV** button.
4. Choose to save it to your Flash Disk or Desktop. You now have a clean file you can email or print externally!

---

## 10. DATA SECURITY & BACKUPS

Data loss (like a broken laptop) can be catastrophic for a school. This system protects you automatically.

### Automatic Backups
Whenever you use the system, it quietly saves itself. It automatically creates a `Backups` folder on your computer and safely stores locked copies of all your student and financial data in case of emergency.

### Manual Backups
If you are about to make big changes (like importing 100 new students) or closing the system for the term, force a manual backup:
1. Click **BACKUP MANAGER** on the Main Menu (Admin Only).
2. Click **CREATE BACKUP NOW**.
3. We highly recommend copying the `Backups` folder to a Flash Disk (USB Drive) every Friday for extreme safety against laptop theft.

### Managing Passwords
If a teacher forgets their login password:
1. The Admin logs in and clicks **USER MANAGEMENT**.
2. Select the teacher's profile from the list.
3. Type a new temporary password (e.g., `1234`) and give it to the teacher. They can log in and change it to a secret password later.

---
*End of Manual. Designed for the MAGANA CBC School Management System.*
