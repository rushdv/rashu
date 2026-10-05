# Rashu — Cybersecurity Portfolio

A minimal, professional cybersecurity portfolio built with Next.js 16, Tailwind CSS v4, and TypeScript.

---

## Project Structure 

```
rashu/
├── app/
│   ├── globals.css       # Base styles, design tokens, animations
│   ├── layout.tsx        # Root layout — SEO, OG metadata, fonts
│   └── page.tsx          # Composes all section components
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Typography-first hero section
│   ├── About.tsx         # About paragraphs
│   ├── Credentials.tsx   # Certifications + training courses
│   ├── Labs.tsx          # HTB / THM / CWL lab profiles
│   ├── Projects.tsx      # Security project cards
│   ├── Writeups.tsx      # Writeup list
│   ├── Skills.tsx        # Grouped skill blocks
│   ├── CurrentFocus.tsx  # Learning focus tags
│   ├── Contact.tsx       # Contact links
│   ├── Footer.tsx        # Footer
│   └── SectionHeader.tsx # Reusable numbered section header
├── data/
│   └── portfolio.ts      # ← All portfolio content lives here
└── public/
    └── favicon.ico
```

---

## Updating Content

**All content is managed in a single file: [`data/portfolio.ts`](./data/portfolio.ts)**

Search for `[` to find all placeholder values that need updating.

| Section | Key |
|---------|-----|
| Name, tagline, education | `personal` |
| About paragraphs | `about` |
| Certifications | `certifications` |
| Courses / training | `courses` |
| Lab profiles (HTB, THM, CWL) | `labs` |
| Projects | `projects` |
| Writeups | `writeups` |
| Skill groups | `skills` |
| Learning focus | `currentFocus` |
| Email, LinkedIn, GitHub, etc. | `contact` |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
# Build for production
npm run build

# Run production build locally
npm start

# Lint
npm run lint
```

---

## Deploying to Vercel

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the repository — Vercel auto-detects Next.js
4. Click **Deploy**

### Environment Variables

Set this in the Vercel dashboard for correct canonical URL and OG metadata:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Custom Domain

Vercel dashboard → Project → **Settings** → **Domains** → add your domain. SSL is automatic.

---

## Pre-launch Checklist

Update `data/portfolio.ts` before publishing:

- [ ] Certification years and credential URLs / IDs
- [ ] Exact AWS course name
- [ ] HTB profile URL, rank, machine count, challenge count
- [ ] TryHackMe profile URL, rank, room count
- [ ] CyberWarFare Labs profile URL and lab count
- [ ] Project GitHub URLs and descriptions
- [ ] Writeup titles, dates, and URLs
- [ ] Email address
- [ ] LinkedIn URL
- [ ] Replace `[YOUR-DOMAIN]` in `app/layout.tsx` with actual domain
- [ ] Add a real `favicon.ico` to `/public/`
