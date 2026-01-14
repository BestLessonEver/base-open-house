# PRD.md

## Product: BASE Open House Landing Page

### Overview
A single-page marketing website for the Bay Area String Ensembles (BASE) open house event on January 31st. Must inspire parents, showcase the program director, and convert visitors into registered attendees.

### Event Details
- **Program**: Bay Area String Ensembles (BASE)
- **Date**: Saturday, January 31st, 2025
- **Time**: 10am - 12pm
- **Location**: BLE Studios, 3222 FM 528, Friendswood, TX 77546
- **Director**: Lyndon Wang
- **Instruments**: Violin, Viola, Cello
- **Note**: Rental and purchase information available at event

### Technical Stack
- Next.js 14+ (App Router)
- Resend (email confirmations with BCC to team)
- Optional: n8n webhook integration
- Tailwind CSS
- Deploy to Netlify

### Core Features

#### 1. Hero Section
- Inspiring string instrument imagery
- Clear event title and date
- "Register Now" CTA button

#### 2. Director Profile
- Photo of Lyndon Wang
- Brief bio and credentials
- Why choose BASE

#### 3. Event Details
- Date, time, location clearly displayed
- Google Maps integration
- Instruments offered
- Rental information notice

#### 4. Registration Form
**Required Fields:**
- Parent Name
- Email
- Phone
- Student Name
- Student Age
- Instrument Interest (dropdown: Violin, Viola, Cello, Not Sure)
- Questions/Comments (optional)

**Behavior:**
- Send confirmation email via Resend (BCC to bestlessoninfo@gmail.com and lwang9480@gmail.com)
- Optional webhook to n8n for additional processing
- Show success message
- Handle errors gracefully

#### 5. Email Confirmation
**Subject**: "You're Registered for BASE Open House - Jan 31st"
**Content**: Thank you + event details recap + directions

### Design Requirements
- Elegant, inspiring aesthetic (concert hall quality)
- Rich colors: deep blues, burgundy, warm golds
- Mobile-first, fully responsive
- Fast performance
- High-quality imagery throughout

### Data Flow
- Registration data sent via confirmation email (BCC to team)
- Optional webhook integration to n8n for CRM/workflow automation
- No direct database storage required

### Success Criteria
- Beautiful, professional appearance
- < 3 second load time
- 100% mobile responsive
- Working registration + email confirmation
- Zero friction user experience
