---
pdf_options:
  format: A4
  margin: 20mm
  printBackground: true
---

# 🏫 MAGANA CBC SCHOOL MANAGEMENT SYSTEM
## The Ultimate Comprehensive Operations & Technical Manual (30-Page Edition)
### Version 2.0 | March 2026 | Document Control Ref: M-CBC-2026

*A 100% complete, exhaustive 30-page reference guide for Headteachers, Board of Management (BOM), Bursars, and Teaching Staff. This manual details every single click, dropdown, and technical workflow across all twenty-two (22) system forms within the Magana CBC School MIS. ZERO IT experience is required to follow these practical, real-world Kenyan school scenarios.*

---

## 📑 TABLE OF CONTENTS

### PART 1: INITIAL SYSTEM CONFIGURATION & ENTRY
*(Must be completed by Admin on the first day)*
1. **[Form 1: The Secure Login Gateway (frmLogin)](#form-1-the-secure-login-gateway-frmlogin)**
2. **[Form 2: The Master Dashboard Hub (frmMainMenu)](#form-2-the-master-dashboard-hub-frmmainmenu)**
3. **[Form 3: Core Administration Info Setup (frmSettings - Core)](#form-3-core-administration-info-setup-frmsettings---core)**
4. **[Form 4: System Fees & Structure Configuration (frmSettings - Finance)](#form-4-system-fees--structure-configuration-frmsettings---finance)**
5. **[Form 5: Administrator Account Control Panel (frmUserMgmt)](#form-5-administrator-account-control-panel-frmusermgmt)**
6. **[Form 6: Security & Credential Management (frmChangePassword)](#form-6-security--credential-management-frmchangepassword)**

### PART 2: STUDENT REGISTRY & ENROLLMENT
*(Must be completed after School Settings are defined)*
7. **[Form 7: The Learner Registration Portal (frmAdmission)](#form-7-the-learner-registration-portal-frmadmission)**
8. **[Form 8: The Bulk Enrollment Utility (frmImportRoll)](#form-8-the-bulk-enrollment-utility-frmimportroll)**
9. **[Form 9: Real-Time Student Database Browser (frmStudentDB)](#form-9-real-time-student-database-browser-frmstudentdb)**

### PART 3: STAFF & DAILY OPERATIONS
10. **[Form 10: Staff & HR Management (frmTeacher)](#form-10-staff--hr-management-frmteacher)**
11. **[Form 11: The Daily Digital Register (frmAttendance)](#form-11-the-daily-digital-register-frmattendance)**

### PART 4: FINANCE & BURSAR OPERATIONS
12. **[Form 12: The Financial Collection Center (frmFees)](#form-12-the-financial-collection-center-frmfees)**
13. **[Form 13: The Professional Receipt Generator (frmFeeReceipt)](#form-13-the-professional-receipt-generator-frmfeereceipt)**

### PART 5: ACADEMICS & CBC CURRICULUM
14. **[Form 14: The Batch Academic Entry Grid (frmEnterMarks)](#form-14-the-batch-academic-entry-grid-frmentermarks)**
15. **[Form 15: Soft Skills & Competency Tracker (frmCBCAssessment)](#form-15-soft-skills--competency-tracker-frmcbcassessment)**
16. **[Form 16: Comprehensive Health Monitoring (frmPhysical)](#form-16-comprehensive-health-monitoring-frmphysical)**

### PART 6: THE REPORTING TERMINAL
17. **[Form 17: The Master Reporting Terminal (frmReportCenter)](#form-17-the-master-reporting-terminal-frmreportcenter)**
18. **[Form 18: Individual Learner Output Engine (frmReportInput)](#form-18-individual-learner-output-engine-frmreportinput)**
19. **[Form 19: Class Assessment Ranking Generator (frmClassListInput)](#form-19-class-assessment-ranking-generator-frmclasslistinput)**

### PART 7: END-OF-YEAR & SYSTEM ARCHIVAL
20. **[Form 20: End of Year Promotions Engine](#form-20-end-of-year-promotions-engine)**
21. **[Form 21: The Raw Data Extraction Utility (frmDatabase)](#form-21-the-raw-data-extraction-utility-frmdatabase)**
22. **[Form 22: Disaster Recovery & Archival System (frmBackup)](#form-22-disaster-recovery--archival-system-frmbackup)**

<div style="page-break-after: always;"></div>

# PART 1: INITIAL SYSTEM CONFIGURATION & ENTRY
*(The Headteacher/Admin must complete this part before any staff member enrolls a student or collects fees.)*

## Form 1: The Secure Login Gateway (frmLogin)

### Purpose & Legal Requirement
The Ministry of Education mandates that student data must be kept confidential. Form 1 (The Login Gateway) is the absolute first barrier. It prevents unauthorized persons (like students or visitors) from viewing sensitive financial and academic records.

### Step-by-step Usage Scenario
*Context: The Headteacher turns on the computer for the first time.*

1. **Initial Boot**: Double-click the `MAGANA_CBC_SchoolMIS_Professional.xlsm` icon.
2. **Security Prompt Warning**: Excel will show a yellow warning: "Macros have been disabled". Before doing anything else, click the **ENABLE CONTENT** button.
3. **The Gateway Appears**: A branded login window pops up exactly in the middle of the screen. The system hides the grid automatically.
4. **Inputting Credentials**:
   - Username: `admin` (Default)
   - Password: `admin123` (Default). As you type, black dots (`********`) appear.
5. **Execution**: Click the large orange **LOGIN** button.

<div style="page-break-after: always;"></div>

## Form 2: The Master Dashboard Hub (frmMainMenu)

### Purpose & Layout
Once through the gateway, you arrive at the Main Menu. This is not a spreadsheet; it is a full-screen, vibrant Graphical User Interface (GUI) holding main routing buttons, replacing messy Excel tabs.

### Understanding the 4 Color-Coded Zones
1. **Zone A: ADMINISTRATION (Brown/Purple area)** - Used the first day to Setup the school.
2. **Zone B: STUDENT MANAGEMENT (Blue area)** - Admissions and daily tracking.
3. **Zone C: FINANCE & STAFF (Dark Green area)** - Money and Staff data.
4. **Zone D: ACADEMIC (Green area)** - Marks and Reporting.

<div style="page-break-after: always;"></div>

## Form 3: Core Administration Info Setup (frmSettings - Core)
**STARTING POINT: This is the very first module you MUST configure before admitting students.**

### Dynamic Branding 
The `frmSettings` form dictates how school reports and receipts look. If you don't configure this, your receipts will print with blank headers.

### Walkthrough: Setting up the School Profile
1. The Admin opens **SYSTEM SETTINGS** from the Dashboard.
2. Navigate to the **School Info** tab.
3. You will see textboxes for: 
   - **School Name**: Type exactly what should appear on certificates, e.g., `MAGANA CBC ACADEMY`
   - **PO Box/Address**: E.g., `P.O Box 1234 - 00100 Nairobi`
   - **Motto**: E.g., `"Striving for Excellence"`
   - **Contact Phone**: E.g., `0722000000`
4. **Live Updates**: Click **SAVE INFO**.
5. **The Global Ripple Effect**: The moment you click save, these changes instantly update the letterheads on all newly printed Report Cards and Fee Receipts system-wide!

<div style="page-break-after: always;"></div>

## Form 4: System Fees & Structure Configuration (frmSettings - Finance)

### Why this is critical
Before admitting students, you must define the school's fee structure. Without this, the Bursar cannot collect fees on Form 12.

### Configuration Workflow 
1. The Admin remains in **SYSTEM SETTINGS**.
2. Navigate to the **Fee Structure** tab.
3. **Adding a New Liability**:
   - The school has a 'Tuition Fee' for Junior Secondary (JSS).
   - In the **Fee Item** box, type `Tuition Levy`.
   - Amount: Type `5000`.
   - Target Cluster: Select `JSS` (or applies to `All Classes`).
   - Frequency: Select `Per Term`.
   - Click **ADD FEE REQUIREMENT**.
4. **The Ripple Effect**: This fee is now legally active. When a JSS student is admitted later, the system will invoice them exactly KSh 5,000 for Tuition.

<div style="page-break-after: always;"></div>

## Form 5: Administrator Account Control Panel (frmUserMgmt)

### The Authority Hub
Now that the school data is setup, the Admin must create logins for the Bursar and Teachers.

### Creating Accounts for Staff
1. Admin clicks **USER MANAGEMENT** on the Dashboard.
2. A list of default staff accounts populates.
3. **New Account Creation**:
   - Username: `wanjiku_bursar`
   - Password: `1234` (Temporary password)
   - Role: `Clerk` (Restricts her from deleting academic marks)
   - Click **Save User**.
4. **Account Lockdown Protocol**: If a staff member is fired, select them and click **DISABLE USER**. They are permanently locked out of the software.

<div style="page-break-after: always;"></div>

## Form 6: Security & Credential Management (frmChangePassword)

### Personal Accountability
Under the Data Protection Act of Kenya, every staff member is responsible for data changes made under their login. Temporary passwords (like `1234`) MUST be changed on Day 1.

### Step-by-step Usage Scenario
1. Teacher logs in with `1234`.
2. CLicks **CHANGE PASSWORD** on the dashboard.
3. **Current Authentication**: Type `1234` into the "Current Password" box.
4. **New Input**: Type a secret password into the "New Password" box.
5. **Execution**: Click **UPDATE PASSWORD**.
6. **Forced Eviction**: The system instantly logs the user out. They must re-login with the new secret password.

<div style="page-break-after: always;"></div>

# PART 2: STUDENT REGISTRY & ENROLLMENT

## Form 7: The Learner Registration Portal (frmAdmission)

### The Concept
Now that the school info and fee structures are configured, you can begin admitting students. Form 7 is a massive 17-field portal designed for NEMIS (National Education Management Information System) compliance.

### Step-by-step Walkthrough: Admitting a New Child
*Scenario: A parent walks in with their son, Kevin Omondi, to join Grade 4.*

1. The Admission Clerk clicks **STUDENT ADMISSION**.
2. **Auto-ID Mechanism**: The system generates an un-editable core tag: `Learner ID: S-0084`.
3. **Registry Number (Adm No)**: Type the official school registry number: `ADM/2026/045`.
4. **Demographics**:
   - Surname: `Omondi` | Other Names: `Kevin Ochieng`
   - Gender: Select `Male`.
   - DOB: Click the calendar icon. Select `14/May/2016`.
5. **Placement Setup**:
   - Class Level: Select `G4`. | Stream: Select `Blue`.
6. **Parental Link & Emergencies**:
   - Guardian Name: `Mrs. Omondi`
   - Phone No: `0722112233` (Critical requirement for the SMS gateway / Fee printing).
7. **Medical Safety (Optional but Highly Recommended)**:
   - Allergies: `Peanuts, Dust` | Blood Group: `O+`
8. **NEMIS Integration**: Enter the 8-digit UPI code from the child's birth certificate.
9. **Execution**: Click the massive green **✔️ SAVE NEW LEARNER** button. Kevin is inserted into `DB_Students` and immediately billed the fees configured back in Form 4.

### The Photo Upload Engine
Report cards look terrible without faces. Click **Upload Photo**, locate Kevin's image, and click **🔄 UPDATE** to attach it.

### Lifecycle Management (Transfers)
If Kevin leaves the school, DO NOT DELETE HIM. Doing so breaks financial audit trails. Change his Status dropdown to **Transferred** and click Update.

<div style="page-break-after: always;"></div>

## Form 8: The Bulk Enrollment Utility (frmImportRoll)

### Purpose
Typing 400 students by hand takes a week. `frmImportRoll` imports them all in 12 seconds.

### Step-by-step Batch Import
1. Prepare an Excel CSV file perfectly holding: `AdmNo`, `Surname`, `OtherNames`, `Gender`, `Class`, `Guardian`, `Phone`.
2. Click **IMPORT DATA** on the dashboard.
3. Click **BROWSE FILE**, select your CSV.
4. Click the red **VALIDATE & IMPORT** button.
5. The system automatically screens out duplicate `AdmNo` entries, assigns `S-XXXX` ID strings, and pushes hundreds of rows directly into `DB_Students` safely.

<div style="page-break-after: always;"></div>

## Form 9: Real-Time Student Database Browser (frmStudentDB)

### Purpose
When a parent calls the switchboard and simply asks "What is the balance for Mercy?", the secretary has 5 seconds to answer.

### Workflow
1. Click **STUDENT DB VIEWER** from the dashboard.
2. A raw grid representation of the `DB_Students` sheet loads.
3. It has a Search Box at the top. The secretary types `Mercy`.
4. As she types "M...e...r...", the grid automatically filters out hundreds of students, dropping to exactly the 2 Mercys in the school.
5. She reads the row for class and phone numbers. If she double-clicks Mercy's row, she is miraculously transported straight to Form 7 for deep editing!

<div style="page-break-after: always;"></div>

# PART 3: STAFF & DAILY OPERATIONS

## Form 10: Staff & HR Management (frmTeacher)

### Structure & Rationale
Kenyan schools face heavy scrutiny regarding TSC (Teachers Service Commission) compliance. Form 10 is a digital HR cabinet that tracks the precise credentials of every adult interacting with the kids.

### Workflow: Onboarding a New Teacher
1. Click **STAFF RECORDS** on the Main Dashboard.
2. The form is split horizontally. The left handles data entry, the right lists current staff.
3. **Data Logging**:
   - Full Name: `Oburu Peter`
   - TSC No: `654321` (A critical 6-digit identifier).
   - Phone No: `0733999888`
   - Primary Subject: Selects `Mathematics` from the dropdown.
   - Staff Classification: Select `TSC Permanent`, `TSC Contract`, or `BOM Hired`.
4. Click **SAVE**. Mr. Oburu is injected into the database securely.

### Archiving and Resignations
If Mr. Oburu is transferred, select his name and click **DELETE**. Note: The system preserves his name on old exam marks permanently, but removes him from active teaching rosters.

<div style="page-break-after: always;"></div>

## Form 11: The Daily Digital Register (frmAttendance)

### Context in the CBC Framework
Under CBC, attendance tracking is directly tied to the final evaluation of the learner.

### The Fast-Track Morning Workflow
1. Class Teacher opens **DAILY ATTENDANCE**.
2. **Setup**: Select Class `G2` and Stream `North`.
3. Click **▶ LOAD LIST**. The massive white window fills with all 40 kids in G2 North.
4. **The Bulk Check**: Since 38 kids are present, click the massive green **✔️ MARK ALL PRESENT** button. 
5. **The Exception Protocol**: 
   - Ndungu is absent today. Click Ndungu's name.
   - At the bottom dropdown, change 'Status' from Present to `Absent`.
   - Click **MARK SELECTED**.
6. **The Final Commit**: 
   - **WARNING:** Nothing is saved yet! Click the giant green **SAVE ATTENDANCE** button at the very bottom.
   - The system connects to `DB_Attendance`, and writes 40 individual timestamped rows.

<div style="page-break-after: always;"></div>

# PART 4: FINANCE & BURSAR OPERATIONS

## Form 12: The Financial Collection Center (frmFees)

### Legal Warning & Auditor Triggers
This form handles real money. Every click inside `frmFees` stamps the computer time, the exact date, and the Bursar's Username irreversibly into the `DB_SystemLogs` database sheet. 

### The Live Collection Workflow
*Scenario: Parent Mr. Mwangi brings KSh 2,000 in cash for Term 1 Lunch Levy for his daughter.*

1. The Bursar clicks **FEE COLLECTION**.
2. Type `ADM/2026/011` and click the orange **FIND STUDENT** button.
3. **Selecting the Liability**: 
   - Drop down the **Fee Type** box. Select `Lunch/Feeding Levy`.
   - The system checks `DB_FeeStructure` and calculates remaining sums. The grey box **Amt Due (KSh)** lights up and displays: `4,000`.
4. **The Transaction**:
   - Type `2000` into the **Amount Paid** box. The **Balance** box auto-calculates to `2,000`.
   - Payment Mode: Dropdown selection -> `Cash`.
5. **Execution**: Click the giant green **✔️ COLLECT FEE** button. 

### The "Overpayment" Lockdown Mechanism
If you accidentally type `20000` instead of `2000`, the payment exceeds the 4,000 liability.
1. The Balance text immediately turns bright red.
2. A warning dynamically appears at the bottom: **"⚠️ OVERPAYMENT: Amount exceeds balance by KSh 16,000"**.
3. The **COLLECT FEE** button completely disables itself! This guarantees that negative auditing balances can never be accidentally entered into the system.

<div style="page-break-after: always;"></div>

## Form 13: The Professional Receipt Generator (frmFeeReceipt)

### Contextual Requirement
Every Kenyan parent demands a receipt. The system generates a professional corporate-grade PDF that perfectly mirrors banking receipts using School Info configured in Form 3.

### How to Print Immediately After Payment
1. The Bursar finishes collecting the KSh 2,000 on Form 12.
2. Immediately click the brown **🖨️ PRINT LAST RECEIPT** button on the right edge of the form.
3. An A4 document is generated. The paper splits perfectly in half:
   - **School Copy** (Top half - keep for school file records)
   - **Parent Copy** (Bottom half - give to parent)
4. The ledger section shows exactly what Jane owes overall, what she paid today, the receipt number, and her new balance.

### How to Retrieve an Old Receipt
1. On the Fee form, with Jane loaded, click the blue **☰ VIEW HISTORY** button.
2. Highlight a historical payment from 3 months ago.
3. Click **REPRINT SELECTED**. The identical PDF receipt is regenerated with a "DUPLICATE" watermark.

<div style="page-break-after: always;"></div>

# PART 5: ACADEMICS & CBC CURRICULUM

## Form 14: The Batch Academic Entry Grid (frmEnterMarks)

### High-Speed Entry Workflow
Entering marks manually is a nightmare. Form 14 uses a grid-based Win32 architecture to make this lightning fast.

1. Open **ENTER MARKS**. 
2. **Parameters Setup**: 
   - Class: `G5` | Subject: `English Activities` | Term: `Term 1` | Year: `2026`
3. Click the orange **LOAD CLASS** button. 30 rows of textboxes perfectly align with 30 names.
4. **The Lightning Run**:
   - Click the white box next to the first student. Type their raw score: `78`.
   - **AUTOMATIC GRADING**: The exact microsecond you finish typing, the system triggers the grading algorithm. A bold **EE2** appearing instantly beside the box! 
   - Hit **TAB Key** to drop to the next student.
5. **The Final Commit**: Click the massive green **💾 SAVE ALL MARKS** button. The system generates 30 unique Mark IDs and pushes them to `DB_Marks`.

### Grade Reference Table 
- **90-100**: EE1 (Exceeding Expectations) - Rank 8
- **75-89**: EE2 (Exceeding Expectations) - Rank 7
- **58-74**: ME1 (Meeting Expectations) - Rank 6
- **41-57**: ME2 (Meeting Expectations) - Rank 5
- **31-40**: AE1 (Approaching Expectations) - Rank 4
- **21-30**: AE2 (Approaching Expectations) - Rank 3
- **11-20**: BE1 (Below Expectations) - Rank 2
- **0-10**: BE2 (Below Expectations) - Rank 1

<div style="page-break-after: always;"></div>

## Form 15: Soft Skills & Competency Tracker (frmCBCAssessment)

### Context inside CBC
Marks are not enough. The CBC mandates rating a child's character using Form 15's discrete 5-point scale.

### Workflow
1. Click **CBC ASSESSMENT** on the dashboard.
2. Search a learner and select the Term/Year.
3. Rate the child across MOE pillars (Communication, Problem Solving, Creativity, Citizenship).
4. Dropdowns range between **1 and 5** (1 = Critical struggle, 3 = Meeting average, 5 = Exceeding superbly).
5. Click **SAVE**. When the end-of-term Report Card prints, it pulls these numbers and visually renders them as a beautiful 5-star layout!

<div style="page-break-after: always;"></div>

## Form 16: Comprehensive Health Monitoring (frmPhysical)

### The Workflow (End of Term)
1. In the CBC Assessment zone, switch to the **Physical Entry** tab.
2. Search for the student.
3. **Data Fields**:
   - Height: Type `130` (in cm).
   - Weight: Type `30` (in kg).
4. **The Math Engine**: The system instantaneously calculates the **BMI (Body Mass Index)**: `17.75`. 
5. Click **SAVE**. This metric is printed cleanly alongside marks on the child's final report card.

<div style="page-break-after: always;"></div>

# PART 6: THE REPORTING TERMINAL

## Form 17: The Master Reporting Terminal (frmReportCenter)

### The Concept
Data is useless if it cannot be synthesized. Form 17 is the ultimate command center where every single piece of data merges into a printable A4 masterpiece.

### The 3 Core Navigation Zones
1. **ACADEMIC REPORTS (Blue Buttons)** - Generates Report Cards & Class Rank Sheets.
2. **SYSTEM/LOGISTIC REPORTS (Orange Buttons)** - Generates basic Class Lists and Attendance Summaries.
3. **FINANCE REPORTS (Green Buttons)** - Extracts individual Fee Statements and global Fee Arrears spreadsheets.

<div style="page-break-after: always;"></div>

## Form 18: Individual Learner Output Engine (frmReportInput)

### The Single Greatest Technical Feat
This form replaces 4 hours of teacher hand-writing with 2 seconds of code compilation.

### The Closing Day Scenario
1. The Admin clicks **Single Report Card** inside the Report Center. 
2. `frmReportInput` opens. Admin types Omondi's `ADM/No`, `Term 1`, and `2026`.
3. Admin clicks **GENERATE REPORT**.
4. **Behind the scenes (The 2-second miracle):**
   - The system queries `DB_Marks` and converts into EE2/ME1 codes.
   - It pulls 70 days of attendance to generate an exact 95% metric.
   - It pulls soft-skills and BMI values.
   - It stamps the School Motto on top.
5. **The Output**: An absolute masterpiece of a report card fills the screen, locked in Fullscreen PDF representation mode. Press **CTRL + P** to print.

### The Batch Generator 
Click **Batch Report Cards**, select Grade 4, and the system executes the 2-second miracle 40 times in a row, stacking them into a single massively perfect PDF file ready for bulk printing.

<div style="page-break-after: always;"></div>

## Form 19: Class Assessment Ranking Generator (frmClassListInput)

### The Staff Room Noticeboard Document
Teachers are competitive and need wide-scale assessment documentation.

### Generation Workflow
1. Click **Class Assessment**. 
2. Select `G6`, `Term 1`, `2026`. Click Generate.
3. The system maps 40 student names vertically and 12 subjects across the top.
4. **The Formatting Solution**: The system is brilliantly coded inside `modClassReport` to automatically take the subject headings and rotate the text 90-degrees vertically upwards!
5. This physical shrink allows all 12 subjects, plus the Total Score, Average Percentage, and Overall Rank column to print perfectly onto a single standard landscape sheet of paper.

<div style="page-break-after: always;"></div>

# PART 7: END-OF-YEAR & SYSTEM ARCHIVAL

## Form 20: End of Year Promotions Engine

### The Problem it Solves
On December 1st, Grade 4 students must become Grade 5. If you change them one by one, you will make a mistake.

### Promotion Workflow (Run by Admin only)
1. Go to the Admin Zone and initialize the **Promotions Module**.
2. Set parameters: Current Class: `G4` -> Target Class: `G5`.
3. Check the safety box: **"I understand this permanently moves students."**
4. Click **PROMOTE ENTIRE CLASS**.
5. In 2 seconds, every active child in Grade 4 is transferred to Grade 5 safely.

<div style="page-break-after: always;"></div>

## Form 21: The Raw Data Extraction Utility (frmDatabase)

### Purpose
You must always own your data. `frmDatabase` guarantees direct MOE extraction without a software lock-in wall.

### CSV Export Scenario
1. Admin clicks **DATABASE BROWSER** on the dashboard.
2. A hacker-style grid interface loads. 
3. Under "Select Table", the Admin can pick any sheet: `DB_Students`. All raw columns load instantly.
4. Click the orange **EXPORT TO CSV** button and save to Desktop. This pure `.csv` format can be uploaded right into the NEMIS platform.

<div style="page-break-after: always;"></div>

## Form 22: Disaster Recovery & Archival System (frmBackup)

### The Doomsday Protocol
What happens if the Headteacher's laptop is stolen at a bus stop? If there are no backups, the school closes down.

### The Manual Backup (Friday Protocol)
Every competent Bursar must do this before shutting the office on Friday at 5:00 PM.
1. Admin clicks **BACKUP MANAGER**.
2. Click the huge **CREATE BACKUP NOW** button.
3. The system locks down, preventing anyone else from entering marks.
4. A progress bar tracks the compression of all `DB_` sheets into a singular, date-stamped file stored in the `Backups/` folder.
5. **CRITICAL INSTRUCTION**: The Bursar MUST copy this created file onto a USB Flash Drive and take it home over the weekend!

### The Restoration Procedure
*Scenario: A stressed teacher accidentally deleted an entire class list during exam markings.*
1. Do not panic. Open Backup Manager.
2. Highlight yesterday's date in the Backup List.
3. Click the blue **RESTORE** button.
4. In 15 seconds, the entire system rewinds time. The deleted data miraculously reappears perfectly intact!

<div style="page-break-after: always;"></div>

---

<center>

### 🎓 MAGANA CBC SCHOOL MIS
**The End of The Comprehensive Operations Manual.**

*Designed specifically for the rigorous dynamics of Kenyan Primary School Administration and KNEC Curriculum requirements. Document created systematically for maximum operational efficiency.*

*(C) 2026 Systems Architecture Documentation. All Rights Reserved.*

</center>
