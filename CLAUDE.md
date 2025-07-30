# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with SvelteKit 5, TypeScript, and Tailwind CSS. The portfolio showcases work experience, projects, and skills through a single-page application with dynamic content served from Sanity CMS. It's deployed on Vercel and includes a contact form powered by SendGrid.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run Svelte type checking
- `npm run check:watch` - Run Svelte type checking in watch mode
- `npm run format` - Format code with Prettier
- `npm run lint` - Check formatting and run ESLint

## Architecture

### Core Structure
- **SvelteKit 5**: Uses new runes syntax (`$props()`, `$state()`) instead of legacy stores
- **Section-based Layout**: Main page composed of modular sections (Hero, About, Work, Skills, Contact)
- **Component Organization**: Components exported through `$lib/components/index.ts` barrel export
- **Sanity CMS Integration**: Content managed through Sanity with custom processing functions

### Key Patterns
- **Data Loading**: Page data loaded in `+page.ts` using Sanity queries
- **Content Processing**: Raw Sanity data transformed via `processProjectEntries()` in `src/lib/utils/sanity.ts:15`
- **Component Props**: Section components receive data as props from main page
- **API Routes**: Contact form handled by `src/routes/api/send-mail/+server.ts`

### Import Aliases
- `$components` → `src/lib/components`
- `$assets` → `src/assets`

### Content Management
- **Sanity Project ID**: `g6qhz6g8` (production dataset)
- **Content Types**: `devExperience`, `project`, `skills`
- **Image Processing**: Uses `@sanity/image-url` for optimized image URLs

### Email Integration
- **SendGrid**: Contact form sends emails via SendGrid API
- **Validation**: Email format validation and required field checks
- **Environment**: Uses `SENDGRID_API_KEY` from private environment variables

## Configuration
- **Vercel Adapter**: Configured for Vercel deployment
- **TypeScript**: Strict type checking enabled
- **ESLint**: Flat config with Svelte and TypeScript support
- **Prettier**: Integrated with Tailwind plugin for class sorting