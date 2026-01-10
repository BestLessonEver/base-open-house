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
- Supabase (registration storage)
- Resend (email confirmations)
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
- Save to Supabase `base_registrations` table
- Send confirmation email via Resend
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

### Database Schema
```sql
Table: base_registrations
- id (uuid, primary key)
- created_at (timestamp)
- parent_name (text)
- email (text, unique)
- phone (text)
- student_name (text)
- student_age (integer)
- instrument_interest (text)
- comments (text, nullable)
```

### Success Criteria
- Beautiful, professional appearance
- < 3 second load time
- 100% mobile responsive
- Working registration + email confirmation
- Zero friction user experience
