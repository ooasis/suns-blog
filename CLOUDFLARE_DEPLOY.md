# Cloudflare Pages Deployment Guide

This guide will help you deploy your Next.js blog to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account (sign up at https://dash.cloudflare.com)
2. Your project connected to a Git repository (GitHub, GitLab, or Bitbucket)
3. Node.js 18.18.0 or higher installed locally (for testing)

## Deployment Methods

### Method 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Connect your repository:**

   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
   - Select your Git provider and authorize Cloudflare
   - Choose your repository (`suns-blog`)

2. **Configure build settings:**

   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build:cloudflare`
   - **Build output directory:** `.vercel/output/static`
   - **Root directory:** `/` (leave as default)
   - **Node version:** 18.18.0 or higher

3. **Environment variables (if needed):**

   - Add any required environment variables in the **Environment variables** section
   - For example, if you use any API keys or configuration:
     - `NODE_ENV=production`
     - `CF_PAGES=1`

4. **Deploy:**
   - Click **Save and Deploy**
   - Cloudflare will build and deploy your site
   - You'll get a preview URL and can set up a custom domain

### Method 2: Deploy via Wrangler CLI

1. **Install Wrangler CLI:**

   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**

   ```bash
   wrangler login
   ```

3. **Build your project:**

   ```bash
   npm run build:cloudflare
   ```

4. **Deploy to Cloudflare Pages:**

   ```bash
   wrangler pages deploy .vercel/output/static
   ```

   Or use the Pages-specific command:

   ```bash
   wrangler pages publish .vercel/output/static --project-name=suns-blog
   ```

## Build Configuration

The project includes a Cloudflare-specific build script:

- **Local build:** `npm run build` (standard Next.js build)
- **Cloudflare build:** `npm run build:cloudflare` (includes Cloudflare adapter conversion)

The `build:cloudflare` script:

1. Builds Next.js with `CF_PAGES=1` environment variable
2. Runs post-build scripts (RSS generation)
3. Converts the output using `@cloudflare/next-on-pages`

## Important Notes

### Image Optimization

- Images are set to `unoptimized: true` for Cloudflare Pages builds
- This is required because Cloudflare Pages doesn't support Next.js Image Optimization API

### API Routes

- API routes (like `/api/newsletter`) will work on Cloudflare Pages
- They run as Cloudflare Workers/Pages Functions

### Contentlayer

- Contentlayer processes MDX files during build time
- Generated content is included in the static output

### Environment Variables

If you need to set environment variables:

1. Go to your Cloudflare Pages project settings
2. Navigate to **Settings** → **Environment variables**
3. Add variables for Production, Preview, or both

## Custom Domain Setup

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain name
4. Follow the DNS configuration instructions
5. Cloudflare will automatically configure SSL/TLS

## Troubleshooting

### Build Failures

- Ensure Node.js version is 18.18.0 or higher
- Check that all dependencies are installed (`npm install`)
- Review build logs in Cloudflare Dashboard

### API Routes Not Working

- Verify that API routes are in the `app/api` directory
- Check that routes export handlers correctly
- Review Cloudflare Pages Functions logs

### Images Not Loading

- Ensure images are set to unoptimized (already configured)
- Check image paths are correct
- Verify static assets are in the `public` directory

### Content Not Updating

- Clear Cloudflare cache if needed
- Verify Contentlayer is generating content correctly
- Check that `.contentlayer` directory is not in `.gitignore` (it should be ignored, content is generated during build)

## Local Testing

To test the Cloudflare build locally:

```bash
# Build for Cloudflare
npm run build:cloudflare

# Preview locally (if you have wrangler installed)
wrangler pages dev .vercel/output/static
```

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [@cloudflare/next-on-pages Documentation](https://github.com/cloudflare/next-on-pages)
