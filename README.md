# Dr. Kelly Saint Denny - Personal Website

This is the personal website for Dr. Kelly Saint Denny, PhD, hosted at [kellysaintdenny.com](https://kellysaintdenny.com).

## About

Dr. Kelly Saint Denny is a psychologist specializing in medical humanities, with a focus on neonatal and perinatal care and decision-making in medical contexts. Based at the University Hospital of Lille (CHU de Lille), she works in the neonatal medicine clinic and serves on the Ethics Commission of the French Society of Neonatology.

## Website Features

- Professional profile and biography
- Research areas and expertise
- Selected publications with links to DOI, HAL, and publisher pages
- Academic profiles (ORCID, Google Scholar, PubMed)
- Responsive design with light/dark theme toggle
- Privacy policy

## Technical Details

- Static HTML website
- CSS with CSS custom properties for theming
- Vanilla JavaScript for theme switching
- Responsive design optimized for all devices
- No external dependencies or frameworks

## Setup for GitHub Pages

1. Create a new repository on GitHub named `kellysaintdenny.github.io`
2. Push this code to the repository
3. Enable GitHub Pages in the repository settings
4. Set the source to "Deploy from a branch" and select the main branch
5. Your site will be available at `https://kellysaintdenny.github.io`

## Custom Domain Setup

To use the custom domain `kellysaintdenny.com`:

1. In your GitHub repository settings, go to "Pages"
2. Under "Custom domain", enter `kellysaintdenny.com`
3. Save the setting
4. Create a CNAME record in your Cloudflare DNS settings pointing to `kellysaintdenny.github.io`
5. Wait for DNS propagation (can take up to 24 hours)

## Local Development

To run the site locally:

1. Clone the repository
2. Open `index.html` in a web browser
3. Or use a local server: `python -m http.server` or `npx serve`

## File Structure

```
kellysaintdenny/
├── index.html              # Main page
├── privacy-policy.html     # Privacy policy
├── assets/
│   ├── styles.css         # Main stylesheet
│   ├── script.js          # JavaScript functionality
│   ├── logo.svg           # Site logo
│   └── dr-saint-denny.jpg # Profile photo
└── README.md              # This file
```

## Contact

For questions about this website or Dr. Saint Denny's work, please contact: contact@kellysaintdenny.com

## License

This website content is the property of Dr. Kelly Saint Denny. All rights reserved.
