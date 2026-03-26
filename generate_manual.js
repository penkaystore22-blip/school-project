const fs = require('fs');

const content = `---
pdf_options:
  format: A4
  margin: 20mm
  printBackground: true
---

# 🏫 MAGANA CBC SCHOOL MANAGEMENT SYSTEM
## Comprehensive Operations Manual
### Version 2.0 | March 2026

*A detailed, step-by-step guide for school administrators, teachers, clerks, and support staff. Designed for ease of use with zero IT experience required.*

---

## 📑 TABLE OF CONTENTS

### PART 1: GETTING STARTED & SYSTEM BASICS
1. **[System Basics & Navigation](#1-system-basics--navigation)**
   - Starting the System 
   - Logging In (Roles & Permissions)
   - Understanding the Main Dashboard
   - Keyboard Shortcuts & Quick Navigation

### PART 2: STUDENT MANAGEMENT
2. **[Student Admission & Records](#2-student-admission--records)**
   - Registering a New Learner (Step-by-Step Scenario)
   - Searching for an Existing Learner
   - Uploading Student Photos
   - Editing and Updating Learner Details
   - Handling Student Transfers & Graduations

### PART 3: FINANCIAL OPERATIONS
3. **[Fee Collection & Receipts](#3-fee-collection--receipts)**
   - Understanding the Fee Module
   - Recording a Fee Payment via Cash or M-Pesa
   - Handling Overpayments & Balances
   - Printing Professional Receipts (Single & Bulk)
   - Viewing a Student's Fee History

### PART 4: DAY-TO-DAY ADMINISTRATION
4. **[Daily Attendance Management](#4-daily-attendance-management)**
   - The Importance of Digital Registers
   - Marking Morning Attendance
   - Correcting Attendance Mistakes
   - Generating Attendance Summaries

5. **[Staff & Teacher Records](#5-staff--teacher-records)**
   - Registering New Teachers
   - Updating Staff Details
   - Removing/Archiving Old Staff Members

### PART 5: ACADEMICS & CBC ASSESSMENTS
6. **[Academic Administration (Marks Entry)](#6-academic-administration-marks-entry)**
   - Preparing for Exam Entry
   - How to Enter Exam Scores
   - Auto-Grading Explained (EE, ME, AE, BE)
   - Quick Tips for Fast Data Entry

7. **[CBC Competency Assessments](#7-cbc-competency-assessments)**
   - Assessing Core Competencies (Values & Skills)
   - Understanding the 1-5 Rating Scale
   - Recording Physical Attributes (Height/Weight/BMI)

### PART 6: REPORTING & ANALYTICS
8. **[Generating Professional Reports](#8-generating-professional-reports)**
   - The Report Center Overview
   - Generating Individual Learner Report Cards
   - Generating Class Assessment Spreadsheets
   - Printing & Navigating Back to Dashboard
   - Exporting Reports to PDF

### PART 7: ADMINISTRATOR FUNCTIONS
9. **[System Settings & Database](#9-system-settings--database)**
   - Changing School Information & Mottos
   - Managing Classes, Streams, and Subjects
   - Configuring the Fee Structure
   - Exporting Data to CSV (Flash disks)

10. **[Data Security & Backups](#10-data-security--backups)**
    - The Importance of Backups
    - Manual and Automatic Backups
    - Managing Users & Passwords
    - Emergency Troubleshooting Guide

---

<div style="page-break-after: always;"></div>

# PART 1: GETTING STARTED & SYSTEM BASICS

## 1. SYSTEM BASICS & NAVIGATION

Welcome to the Magana CBC School Management System! This software was built specifically for the Kenyan Competency-Based Curriculum (CBC). It handles everything from admitting young learners, tracking their M-Pesa fee payments, to automatically generating beautiful report cards at the end of the term.

### Starting the System
The system runs universally on Microsoft Excel but behaves like a standalone secure application. You don't need to know how to use Excel formulas!

1. Locate and open the file named \`MAGANA_CBC_SchoolMIS_Professional.xlsm\` on your computer desktop.
2. A yellow warning bar might appear at the top of the screen saying **"SECURITY WARNING Macros have been disabled"**. You **MUST** click the **Enable Content** button to start the software. If you don't click it, the buttons won't work.
3. The system will automatically launch in **Fullscreen Mode**, hiding normal Excel grids and menus so you can focus purely on school operations.

### Logging In (Roles & Permissions)
When the system opens, you will see a secure Login Screen. The system uses roles to make sure staff only see what they are supposed to see.

**Example roles in a typical Kenyan Primary School:**
- **The Bursar (Madam Wanjiku):** Logs in to collect Activity Fees and print receipts for parents. *(Username: clerk | Password: clerk123)*
- **The Class Teacher (Mr. Odhiambo):** Logs in to enter end-of-term mathematics marks and mark Monday morning attendance. *(Username: teacher1 | Password: teach123)*
- **The Headteacher/Admin (Mr. Mutua):** Logs in to view all financial reports, manage user passwords, and change system settings. *(Username: admin | Password: admin123)*

> 🔒 **Security Tip**: Never share your password with colleagues. If a new teacher joins the school, ask the Admin to create a unique user account for them. Always change the default passwords immediately!

### The Main Dashboard (Navigation Hub)
After safely logging in, you will arrive at the **Main Menu**. Think of this as your school's control center. It is grouped logically into four colored sections so you can find things quickly:

- **STUDENT MANAGEMENT** (Blue Area): Admissions, Daily Attendance, and CBC Competency Assessments.
- **ACADEMIC** (Green Area): Marks Entry for exams, Report Center, and bulk Data Import.
- **FINANCE & STAFF** (Dark Green Area): Fee Collection, Teachers/Staff directory, and Database Browser.
- **ADMINISTRATION** (Brown/Purple Area): System Settings, Backups, and User Logins.

To open any form, simply click the button with the pointing arrow (e.g., \`▶ Fee Collection\`).

### Keyboard Shortcuts & Quick Navigation
To work faster, memorize these quick keys:
- Press **ESCAPE (Esc)** on your computer keyboard to close any popup form instantly.
- When viewing a generated fullscreen report, press **Ctrl + Home** or **Esc** to instantly return to the Main Dashboard.
- You can also **Right-click** your mouse anywhere on a white report paper and select **◀ Back to Dashboard**.

---

<div style="page-break-after: always;"></div>

# PART 2: STUDENT MANAGEMENT

## 2. STUDENT ADMISSION & RECORDS

The Student Admission module is your school's digital registry. Use this form when a new student joins the school, or when you need to update an existing student's details (like a new parent phone number).

### Example: Registering a New Learner
*Scenario: It is January, and a new student named **Amani Baraka** is joining Grade 1, Stream East today.*

1. Click **STUDENT ADMISSION** on the Main Menu. You will see the CBC Student Admission screen.
2. The **Learner ID** (e.g., S1042) is automatically created by the system. Do not touch it; it ensures no two students are ever confused.
3. In the **Adm No.** box, type the school's official registry number (e.g., \`ADM/2026/089\`).
4. Type \`Baraka\` in **Surname** and \`Amani\` in **Other Names**.
5. Click the **Birth Date** field and pick his birthdate from the popup calendar, then select \`Male\` for **Gender**.
6. Select \`G1\` for **Class Lvl** and \`East\` for **Stream** from the dropdown menus.
7. Fill in the **Guardian Name** (e.g., \`Mrs. Baraka Wanjiru\`) and **Phone** (e.g., \`0712345678\`). *Note: This is crucial for emergencies and SMS fee reminders!*
8. Optional: Fill in his NEMIS **UPI No.** and **Birth Cert** number if the parent brought them.
9. Click the green **✔️ SAVE** button at the bottom left. The system will alert you: "Student saved successfully."

### Searching for an Existing Learner
*Scenario: Amani's mother calls three months later and says her phone number has changed to Safaricom 0799887766.*

1. Open the **STUDENT ADMISSION** form.
2. Look at the top **Search Learner** box. Type Amani's admission number (\`ADM/2026/089\`) or just his name \`Amani\`.
3. Click the orange **FIND** button. 
4. Amani's full profile will instantly load onto the screen.
5. Delete the old phone number and type the new one: \`0799887766\`.
6. Click the blue **🔄 UPDATE** button. The new detail is safely stored.

### Uploading Student Photos
For a professional look, especially on report cards, you should upload student passport photos.

1. On the Admission Form, search for the student (e.g., Amani) so their details load.
2. Look at the right side of the screen where there is a grey empty box.
3. Click the **✏️ Upload Photo** button located right below the box.
4. A standard Windows folder will open. Find the picture of Amani on your computer and click Open.
5. The photo will instantly appear in the picture box on the screen.
6. **Very Important:** Click the blue **🔄 UPDATE** button to permanently link the picture to Amani's digital profile.

### Handling Student Transfers & Graduations
*Scenario: Amani is transferring to a school in Nakuru.*

You should **never** delete a student who has paid fees or done exams, because it ruins historical financial records. Instead, do this:
1. Search for Amani on the Admission form.
2. Find the **Status** dropdown menu (it usually says "Active").
3. Change it to **Left** or **Transferred**.
4. Click **UPDATE**. Amani is now safely archived. He won't appear on class registers or report cards, but his past fee payments are still mathematically intact!

---

<div style="page-break-after: always;"></div>

# PART 3: FINANCIAL OPERATIONS

## 3. FEE COLLECTION & RECEIPTS

The robust Fee Collection module ensures every single shilling is tracked accurately, receipted professionally, and mathematically flawless. It prevents human errors in calculation.

### Understanding the Fee Module
The module uses real-time math. If a student owes KSh 5,000 and pays KSh 2,000, it instantly calculates a KSh 3,000 balance. If they try to pay KSh 6,000, it will stop you and warn of an overpayment.

### Recording a Fee Payment via Cash or M-Pesa
*Scenario: It is opening day. A parent, Mr. Kipchoge, comes to the bursar to pay KSh 4,500 for his daughter's Term 1 Tuition Fee via M-Pesa (Paybill).*

1. Click **FEE COLLECTION** from the Main Menu. The green fee form opens.
2. Type the daughter's Admission No. (e.g., \`ADM/2024/012\`).
3. Click the orange **FIND STUDENT** button. Her full name (e.g., \`Kipchoge Faith S.\`) will automatically appear in the grey box.
4. From the **Fee Type** dropdown, select \`Tuition Fee\`. 
   *(Magic happens here: The system automatically consults the School Settings and shows the exact amount due for her specific grade's Tuition Fee. Let's say her total fee is KSh 10,000).*
5. The system shows: **Amt Due (KSh): 10,000**.
6. In the **Amount Paid** box, type \`4500\`.
   *(Notice the balance automatically drops as you type! The Balance box will instantly show \`5,500\`).*
7. Select \`M-Pesa\` under the **Payment Mode** dropdown.
8. Click the large green **✔️ COLLECT FEE** button. The payment is instantly recorded safely in the database.

### Handling Overpayments & Balances
What happens if you make a typing mistake?
*Scenario: You accidentally type KSh 45,000 instead of KSh 4,500 in the Amount Paid box.*

The system is smart. Because 45,000 is larger than the 10,000 due, the system will instantly highlight the balance in red text at the bottom: 
**"⚠️ OVERPAYMENT: Amount exceeds balance by KSh 35,000"**
It will **prevent** you from clicking the Collect Fee button until you fix the typing error. This ensures your accounting books are never messed up by fat-finger typos!

### Printing Professional Receipts (Single & Bulk)
Parents need proof of payment. The system generates beautiful PDF receipts.

**To print a single receipt immediately after payment:**
1. After collecting the fee, click the brown **🖨️ PRINT LAST RECEIPT** button.
2. A highly professional A4 receipt will be generated instantly as a PDF. It contains two copies per page:
   - **School Copy** (Top half - keep for school file records)
   - **Parent Copy** (Bottom half - cut with scissors and give to Mr. Kipchoge)
3. The receipt shows a complete financial breakdown of all fees Faith owes, what she just paid, the unique receipt number, and her current outstanding balances.

**To print receipts later / Bulk Printing:**
1. Click **RECEIPT HISTORY**.
2. From here, you can select multiple payments that happened that day and click **BULK PRINT (4-UP)**. The system will cleanly pack 4 small receipts onto a single A4 page to save printer ink and paper!

### Viewing a Student's Fee History
*Scenario: A parent argues they have zero balance, but your records say they owe KSh 2,000.*

1. On the Fee Collection form, type their Admission Number and click Find Student.
2. Click the blue **☰ VIEW HISTORY** button.
3. A clean list of every single payment they have ever made, the dates, the M-Pesa modes, and the receipt numbers will appear. You can quickly print this statement to show the parent exactly where the KSh 2,000 deficit is.

---

<div style="page-break-after: always;"></div>

# PART 4: DAY-TO-DAY ADMINISTRATION

## 4. DAILY ATTENDANCE MANAGEMENT

Attendance keeping is mandatory under Ministry of Education guidelines. Doing it digitally allows the system to calculate exact termly attendance percentages to print on the CBC Report Cards.

### The Importance of Digital Registers
Unlike a paper book that can be lost or stained with tea, the digital attendance module securely stores daily records. At the end of the term, the system automatically calculates that "Faith was present for 68 out of 70 days (97%)" without any teacher lifting a calculator.

### Marking Morning Attendance
*Scenario: It is Tuesday morning, 8:15 AM. Teacher Atieno needs to mark the register for Grade 5.*

1. Click **DAILY ATTENDANCE** on the Main Menu. A purple form opens.
2. Select **Class**: \`G5\` from the dropdown. Verify the **Date** is correct today.
3. Click the purple **▶ LOAD LIST** button. Every single student currently enrolled and active in Grade 5 will appear in the large white list box.
4. **The Fast Marking Method:** Assuming 95% of children are in class, simply click the green **✔️ MARK ALL PRESENT** button. Every student in the list will instantly get a "Present" status.
5. **Marking the Absentees:** Now, look at the 2 empty desks in the room. Find those specific students in the list (e.g., *Omondi Kevin*).
6. Click Omondi Kevin's name once to highlight it blue.
7. Go to the **Set Status** dropdown at the bottom, and change it from Present to `Absent` or `Sick` or `Excused`.
8. Click the purple **MARK SELECTED** button. Kevin's row in the list will update to show "Sick".
9. Do this for any other missing students.
10. **CRITICAL STEP:** When completely done, you MUST click the large green **SAVE ATTENDANCE** button at the very bottom to finalize the register into the database. If you don't click Save, the morning's work is lost!

### Correcting Attendance Mistakes
*Scenario: Kevin arrives at 10:00 AM. He wasn't sick; he just had a flat tire on his bicycle.*

1. Open the Attendance form again. Select Grade 5 and today's date.
2. Click **LOAD LIST**. The system will show you what you saved earlier (Kevin shows as Sick).
3. Click Kevin's name. Change status to \`Present\`, click **MARK SELECTED**.
4. Click **SAVE ATTENDANCE** to overwrite the old record.

---

## 5. STAFF & TEACHER RECORDS

The system keeps a secure digital database of all teaching personnel, making it easy to look up TSC numbers or emergency contact info.

### Registering New Teachers
*Scenario: The school just hired Madam Chebet to teach Junior Secondary English.*

1. Click **STAFF RECORDS** on the Main Menu.
2. The Teacher Management form will open. 
3. Fill in her Full Name (\`Chebet Mary\`), her 6-digit TSC Number, and her Phone Number.
4. Assign her primary teaching Subject area from the list (e.g., \`English\`).
5. Select her **Staff Type** (e.g., \`Permanent\`, \`Contract\`, or \`BOG\`).
6. Click the green **SAVE** button. Madam Chebet is now an official staff member in the system.

### Updating Staff Details
If Madam Chebet changes her Safaricom number, simply click her name from the large list on the right side of the screen. Her original details will populate on the left. Delete the old number, type the new one, and click **UPDATE**.

### Removing/Archiving Old Staff Members
When a teacher resigns or retires, select their name from the list and click the red **DELETE** button. This securely removes them from the active roster.

---

<div style="page-break-after: always;"></div>

# PART 5: ACADEMICS & CBC ASSESSMENTS

## 6. ACADEMIC ADMINISTRATION (MARKS ENTRY)

The biggest headache at the end of every school term is entering exam marks and dealing with CBC grading math. This module handles traditional exam scoring smoothly and cleanly.

### Preparing for Exam Entry
Before teachers start entering marks, the Admin should ensure all subjects for the term are correctly set up in the System Settings.

### How to Enter Exam Scores
*Scenario: It is Week 12. Teacher Mutisya is entering End-of-Term 1 Science scores for Grade 6.*

1. Click **ENTER MARKS** from the Main Menu. An extra-wide green form will open.
2. Select Class (`G6`), Subject (`Science/Environment`), Term (`Term 1`), and Year (`2026`).
3. Click the orange **LOAD CLASS** button. A clean grid will perfectly list all active Grade 6 students vertically.
4. With his marking scheme in hand, Teacher Mutisya looks at the first student, clicks the empty white box next to their name, and types the raw score out of 100 (e.g., `82`).
5. Then he clicks the next box and types the next score.

### Auto-Grading Explained (EE, ME, AE, BE)
The true magic of the system lies in what happens instantly as Teacher Mutisya types. The moment he types `82`, the system automatically calculates the CBC Grade next to the box: **EE2**. 

The system removes human calculation errors by grading strictly automatically based on CBC guidelines:
- **90 - 100%**: EE1 (Exceeding Expectations - Outstanding)
- **75 - 89%**: EE2 (Exceeding Expectations - Very Good)
- **58 - 74%**: ME1 (Meeting Expectations - Good)
- **41 - 57%**: ME2 (Meeting Expectations - Fair)
- **31 - 40%**: AE1 (Approaching Expectations - Below Average)
- **21 - 30%**: AE2 (Approaching Expectations - Poor)
- **11 - 20%**: BE1 (Below Expectations - Needs Help)
- **0 - 10%**: BE2 (Below Expectations - Critical Intervention)

If Mutisya makes a typo and enters `150`, the system will simply ignore it or warn him, keeping the data clean.

### Quick Tips for Fast Data Entry
- Use the **TAB key** on your keyboard to quickly jump from one student's textbox to the next without touching the mouse! Just type `82` -> Press TAB -> type `65` -> Press TAB -> type `91` -> Press TAB.
- When you reach the bottom, you MUST click the large green **💾 SAVE ALL MARKS** button. Do not close the window without saving!

---

## 7. CBC COMPETENCY ASSESSMENTS

In addition to academic numerical marks, the Kenyan CBC curriculum requires tracking a child's character, physical growth, and core values. This is not about maths or science; it is about the child as a human being.

### Assessing Core Competencies (Values & Skills)
*Scenario: Teacher Wangari wants to record how well her Grade 2 student, Njoroge, works with others and uses school tablets.*

1. Click **CBC ASSESSMENT** on the Main Menu. A blue form opens.
2. Search and select Njoroge's name, then select the current term.
3. Teacher Wangari will see a list of soft skills like:
   - *Communication & Collaboration* (How well he talks with peers)
   - *Digital Literacy* (How well he uses the CBC tablets)
   - *Creativity & Imagination* (Artistic ability)
   - *Citizenship* (Good behavior and respect)
4. Next to each skill is a dropdown. She must rate Njoroge from **1 to 5** based on her actual observable ability (1 being low struggle, 3 being average, 5 being excellent mastery).
5. Click **SAVE**. These ratings will visually appear as progress bars or remarks on his final Report Card.

### Recording Physical Attributes (Height/Weight/BMI)
The government requires tracking child nourishment. Run this module at the start or end of the term.

1. In the same CBC Assessment area, switch to the **Physical Entry** tab at the very top of the window.
2. Select a student.
3. Type the child's **Height** (in centimeters, e.g., `120`).
4. Type the child's **Weight** (in kilograms, e.g., `25`).
5. Notice the **BMI box automatically calculates!** (It will show something like 17.3). This Body Mass Index helps the school track healthy growth trajectories over the years.
6. Click **SAVE**. This info also elegantly prints onto the child's final report card.

---

<div style="page-break-after: always;"></div>

# PART 6: REPORTING & ANALYTICS

## 8. GENERATING PROFESSIONAL REPORTS

The system automatically designs breathtakingly beautiful reports ready for parent review. They are already formatted for A4 printing. You do not need to format any Excel cells manually, draw borders, or mess with alignments!

### The Report Center Overview
Click **REPORTS CENTER** on the Main Menu. The center is broken into sections:
- **Academic Reports:** Single Report Cards, Batch Report Cards, Class Assessments.
- **Financial Reports:** Fee Arrears lists.
- **System Reports:** Class Lists, Attendance Summaries.

### Generating Individual Learner Report Cards
*Scenario: It is Closing Day. Parents are coming, and you need to print Amani's report card.*

1. Click **Single Report Card** under the Academic section.
2. A small box prompts you to type the learner's Admission Number (e.g., `ADM/2026/089`).
3. Select the Term and Year. Click **Generate**.
4. The system works for 3 seconds, then suddenly a stunning digital report card fills the screen. 
5. It seamlessly merges Amani's mathematics and science marks, his termly attendance percentage (e.g. 97%), his physical BMI of 18, and Teacher Wangari's CBC skill assessments all into one unified, printable A4 document. The school motto and logo are perfectly centered at the top.

*Tip: If you have an entire class of 40 students, don't do this one-by-one! Click **Batch Report Cards** instead, select the whole class, and the system will automatically generate all 40 report cards as PDF files neatly into a folder on your computer while you go drink tea!*

### Generating Class Assessment Spreadsheets
*Scenario: The Headteacher wants an overview sheet to see how the whole Grade 6 class performed, to stick on the noticeboard.*

1. Go to **REPORTS CENTER** → **Class Assessment**.
2. Select the class (e.g., \`G6\`).
3. The system generates a wide landscape document showing every single student on the left.
4. **Professional Output Format:** Because a student takes up to 12 subjects, they won't normally fit on one paper. This system is smart: it prints the subject column names (English, Kiswahili, Maths, CRE) **vertically (sideways) at a 90-degree angle**, keeping the columns narrow! 
5. Result? All 12 subjects, plus Total Points, Average %, and Overall Class Rank fit perfectly on one A4 paper when printed, without cutting off!

### Printing & Exporting Reports to PDF
While viewing any generated report (like the Class Assessment):
- To print to a real printer: Press **Ctrl + P** on your keyboard, select your HP or Epson printer, and click Print.
- To save as a PDF to email to parents: Go to *File > Save As*, and change the format to PDF.

### Navigating Back to Dashboard
When viewing a generated report, the screen represents a printable A4 page in Fullscreen mode. All normal Excel buttons are hidden! **Do not panic.**
To go back to your familiar menus, you have four easy choices:
1. Click the dark **◀ BACK TO DASHBOARD** button situated in the top right corner of the paper.
2. Press **ESCAPE (Esc)** on your computer keyboard.
3. Press **Ctrl + Home** on your computer keyboard.
4. Right-click your mouse anywhere on the white paper and select **◀ Back to Dashboard**.

---

<div style="page-break-after: always;"></div>

# PART 7: ADMINISTRATOR FUNCTIONS

## 9. SYSTEM SETTINGS & DATABASE

This section is restricted to the Admin/Headteacher role. It allows the school to configure the software without calling a programmer.

### Changing School Information & Mottos
If the school changes its official phone number, email, or motto (e.g. from "Education is Key" to "Striving for Excellence"), do this:
1. Click **SYSTEM SETTINGS**.
2. Go to the **School Info** tab.
3. Delete the old motto or phone number text, type the new one.
4. Click Save. 
5. **Magic:** The moment you click save, these changes instantly update the headers and letterheads on all newly printed Report Cards and Fee Receipts system-wide!

### Managing Classes, Streams, and Subjects
- **Streams:** Go to the Streams tab. Add new streams like \`North\` or \`Blue\`. They instantly appear in all dropdowns when admitting new students.
- **Subjects:** Go to the Subjects tab. If the ministry adds a new subject like "Creative Arts", type it in, select if it applies to Lower Primary, Upper Primary or JSS, and set out of 100.

### Configuring the Fee Structure
When a new year starts, fees usually change because of inflation.
1. Go to **SYSTEM SETTINGS** → **Fee Structure**.
2. Add a new fee requirement (e.g., "Grade 1 Swimming Levy - KSh 1,500").
3. This new KSh 1,500 levy will now magically appear as an option for the Bursar during morning fee collection!

### Exporting Data to CSV (The Database Browser)
Sometimes the Ministry of Education (MOE) requests digital student data for NEMIS. You cannot send them the whole system.
1. Click **DATABASE BROWSER** on the Main Menu. A large black form opens.
2. Under "Select Table", pick the \`DB_Students\` table. All thousands of rows of your students will load.
3. Click the orange **EXPORT TO CSV** button.
4. A prompt will ask where to save. Choose your inserted Flash Disk or Desktop. 
5. You now have a clean, raw Excel file with only the student names and NEMIS numbers. You can email this directly to the MOE safely!

---

## 10. DATA SECURITY & BACKUPS

Data loss (like a broken laptop, a virus, or a stolen computer) can be catastrophic and destroy a whole year's worth of exams and fee finances. This system protects you with layered safety nets.

### The Importance of Backups
A backup is simply a secure copy of your data taken at a specific point in time. If disaster strikes, the Admin simply clicks "Restore Backup" and the school is back exactly how it was 24 hours ago.

### Automatic Backups
Whenever you use the system daily, it quietly saves itself. It automatically creates a hidden folder on your computer called \`Backups\` and safely stores locked, timestamped copies of all your student and financial data in case of emergency. 

### Manual Backups
If you are about to make massive changes (like using the batch importer to add 100 new students), or if school is closing for the entire term, you should force a manual backup to be totally secure:
1. Log in as an Admin. Click **BACKUP MANAGER** on the Main Menu.
2. Click the giant **CREATE BACKUP NOW** button.
3. A progress bar will fill up. It takes about 10 seconds.
4. **Best Practice:** We highly recommend plugging in an external hard drive or Flash Disk every Friday at 4 PM, copying the entire Magana folder to it, and taking it home. This guarantees extreme safety against fire or laptop theft.

### Managing Users & Passwords
People forget passwords. People transfer out. 
*Scenario: Teacher Mutisya forgot his password and is locked out.*

1. The Admin/Headteacher logs in and clicks **USER MANAGEMENT** (Purple button).
2. A list of all staff accounts appears. Select Teacher Mutisya's profile from the list.
3. Under the password section, the Admin types a new temporary password (e.g., \`1234\`).
4. Click **UPDATE USER**.
5. The Admin goes to Mutisya: "Your new temporary password is 1234. Log in immediately and click the 'Change Password' option to set a strong, secret one."
6. If a staff member leaves the school in bad faith, the Admin can click **DISABLE USER** so they can no longer log in.

### Emergency Troubleshooting Guide

| The Problem | How to Fix It Instantly |
|-------------|-------------------------|
| **"Macros disabled" message at start** | Click *File* → *Options* → *Trust Center* → *Trust Center Settings* → *Macro Settings* → Select **Enable all macros**. Restart the system. |
| **System is stuck on a white fullscreen sheet** | Press the **ESC** key or **Ctrl+Home** on your keyboard to force-return to the main menu. |
| **Receipt printer prints off the edge** | Right-click your Windows printer settings and ensure Paper Size is strictly set to **A4** (not Letter or Custom). |
| **The computer froze while entering marks!** | Press **Ctrl + Break** (or Pause/Break) on your keyboard to stop the system freeze. Only do this in extreme lag emergencies. |
| **I deleted a student by accident!** | Open the Backup Manager, find the backup from yesterday, and click **RESTORE**. Everything will rewind 24 hours. |

---

<center>

### MAGANA CBC SCHOOL MIS
*Empowering educators. Simplifying administration. Securing the future.*

Version 2.0 (c) 2026. Custom VBA Development. All rights reserved.

</center>
`

fs.writeFileSync('manual.md', content);
