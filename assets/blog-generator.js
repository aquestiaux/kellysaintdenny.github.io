// Blog Post Generator
// This script generates static HTML blog posts from the admin panel data

class BlogPostGenerator {
  constructor() {
    this.template = this.getBlogPostTemplate();
  }

  getBlogPostTemplate() {
    return `
<!DOCTYPE html>
<html lang="{{LANGUAGE}}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{TITLE}} – Dr. Kelly Saint Denny, PhD, MSc</title>
  <meta name="description" content="{{EXCERPT}}" />
  <link rel="canonical" href="https://kellysaintdenny.com{{CANONICAL_URL}}" />
  <meta property="og:title" content="{{TITLE}} – Dr. Kelly Saint Denny, PhD, MSc" />
  <meta property="og:description" content="{{EXCERPT}}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kellysaintdenny.com{{CANONICAL_URL}}" />
  <meta property="article:published_time" content="{{PUBLISH_DATE}}" />
  <meta property="article:author" content="Dr. Kelly Saint Denny" />
  <meta property="article:section" content="Blog" />
  {{TAGS_META}}
  <meta name="theme-color" content="#4f46e5" />
  <link rel="stylesheet" href="/assets/styles.css" />
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "{{TITLE}}",
    "description": "{{EXCERPT}}",
    "author": {
      "@type": "Person",
      "name": "Dr. Kelly Saint Denny",
      "honorificSuffix": "PhD, MSc"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dr. Kelly Saint Denny",
      "url": "https://kellysaintdenny.com"
    },
    "datePublished": "{{PUBLISH_DATE}}",
    "dateModified": "{{PUBLISH_DATE}}",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://kellysaintdenny.com{{CANONICAL_URL}}"
    },
    "articleSection": "Blog",
    "keywords": "{{KEYWORDS}}"
  }
  </script>
</head>
<body>
  <header class="site-header">
    <div class="container nav">
      <a class="brand" href="{{HOME_URL}}" aria-label="Dr. Kelly Saint Denny home">
        <img src="/assets/logo.svg" alt="" width="28" height="28" />
        <span>Dr. Kelly Saint Denny</span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a href="{{HOME_URL}}">Home</a>
        <a href="{{BLOG_URL}}">Blog</a>
        <a href="{{ADMIN_URL}}">Admin</a>
        <a href="{{PRIVACY_URL}}">Privacy</a>
        <a href="mailto:contact@kellysaintdenny.com">Contact</a>
        <div class="language-switcher">
          <button class="language-btn" aria-label="Select language">
            <span class="flag">{{FLAG}}</span>
            <span>{{LANGUAGE_TEXT}}</span>
          </button>
          <div class="language-dropdown">
            <a href="{{OTHER_LANGUAGE_URL}}" class="language-option">
              <span class="flag">{{OTHER_FLAG}}</span>
              <span>{{OTHER_LANGUAGE_TEXT}}</span>
            </a>
            <a href="{{CURRENT_LANGUAGE_URL}}" class="language-option active">
              <span class="flag">{{FLAG}}</span>
              <span>{{LANGUAGE_TEXT}}</span>
            </a>
          </div>
        </div>
        <button id="theme-toggle" class="theme-toggle" aria-pressed="false" aria-label="Toggle theme">🌓</button>
      </nav>
    </div>
  </header>

  <main class="blog-post">
    <div class="wrap">
      <article>
        <header class="post-header">
          <h1>{{TITLE}}</h1>
          <div class="post-meta">
            <time datetime="{{PUBLISH_DATE}}">{{FORMATTED_DATE}}</time>
            <span class="read-time">{{READ_TIME}} min read</span>
            {{TAGS_HTML}}
          </div>
        </header>
        
        <div class="post-content">
          {{CONTENT}}
        </div>
        
        <footer class="post-footer">
          <div class="post-navigation">
            <a href="{{BLOG_URL}}" class="back-to-blog">← Back to Blog</a>
          </div>
        </footer>
      </article>
    </div>
  </main>

  <footer class="site-footer">
    <div class="container wrap">
      <p>&copy; <span id="year"></span> Dr. Kelly Saint Denny</p>
      <nav class="nav-links" aria-label="Footer">
        <a href="{{HOME_URL}}">Home</a>
        <a href="{{BLOG_URL}}">Blog</a>
        <a href="{{ADMIN_URL}}">Admin</a>
        <a href="{{PRIVACY_URL}}">Privacy</a>
        <a href="mailto:contact@kellysaintdenny.com">Email</a>
      </nav>
    </div>
  </footer>

  <script src="/assets/script.js" defer></script>
</body>
</html>`;
  }

  generateBlogPost(post) {
    const isFrench = post.language === 'fr';
    const baseUrl = isFrench ? '/fr' : '';
    
    // Generate slug from title
    const slug = this.generateSlug(post.title);
    const canonicalUrl = `${baseUrl}/blog/${slug}.html`;
    
    // Language-specific URLs
    const homeUrl = baseUrl + '/';
    const blogUrl = baseUrl + '/blog.html';
    const adminUrl = '/admin.html';
    const privacyUrl = baseUrl + '/privacy-policy.html';
    
    // Language switcher URLs
    const otherLanguageUrl = isFrench ? '/blog/' + slug + '.html' : '/fr/blog/' + slug + '.html';
    const currentLanguageUrl = canonicalUrl;
    
    // Language-specific text
    const languageText = isFrench ? 'Français' : 'English';
    const otherLanguageText = isFrench ? 'English' : 'Français';
    const flag = isFrench ? '🇫🇷' : '🇺🇸';
    const otherFlag = isFrench ? '🇺🇸' : '🇫🇷';
    
    // Format date
    const publishDate = new Date(post.date).toISOString();
    const formattedDate = new Date(post.date).toLocaleDateString(
      isFrench ? 'fr-FR' : 'en-US',
      { year: 'numeric', month: 'long', day: 'numeric' }
    );
    
    // Generate tags HTML
    const tagsHtml = post.tags.length > 0 
      ? `<div class="post-tags">${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>`
      : '';
    
    // Generate tags meta
    const tagsMeta = post.tags.length > 0 
      ? post.tags.map(tag => `<meta property="article:tag" content="${tag}" />`).join('\n  ')
      : '';
    
    // Keywords for schema
    const keywords = post.tags.join(', ');
    
    // Replace template variables
    let html = this.template
      .replace(/{{TITLE}}/g, post.title)
      .replace(/{{EXCERPT}}/g, post.excerpt)
      .replace(/{{LANGUAGE}}/g, post.language)
      .replace(/{{CANONICAL_URL}}/g, canonicalUrl)
      .replace(/{{PUBLISH_DATE}}/g, publishDate)
      .replace(/{{FORMATTED_DATE}}/g, formattedDate)
      .replace(/{{READ_TIME}}/g, post.readTime)
      .replace(/{{CONTENT}}/g, this.formatContent(post.content))
      .replace(/{{TAGS_HTML}}/g, tagsHtml)
      .replace(/{{TAGS_META}}/g, tagsMeta)
      .replace(/{{KEYWORDS}}/g, keywords)
      .replace(/{{HOME_URL}}/g, homeUrl)
      .replace(/{{BLOG_URL}}/g, blogUrl)
      .replace(/{{ADMIN_URL}}/g, adminUrl)
      .replace(/{{PRIVACY_URL}}/g, privacyUrl)
      .replace(/{{FLAG}}/g, flag)
      .replace(/{{LANGUAGE_TEXT}}/g, languageText)
      .replace(/{{OTHER_FLAG}}/g, otherFlag)
      .replace(/{{OTHER_LANGUAGE_TEXT}}/g, otherLanguageText)
      .replace(/{{OTHER_LANGUAGE_URL}}/g, otherLanguageUrl)
      .replace(/{{CURRENT_LANGUAGE_URL}}/g, currentLanguageUrl);
    
    return {
      html: html,
      filename: `${slug}.html`,
      path: isFrench ? `fr/blog/${slug}.html` : `blog/${slug}.html`
    };
  }

  generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  formatContent(content) {
    // Convert plain text to HTML with basic formatting
    return content
      .split('\n\n')
      .map(paragraph => {
        if (paragraph.trim() === '') return '';
        
        // Check if it's a heading (starts with #)
        if (paragraph.startsWith('# ')) {
          return `<h2>${paragraph.substring(2)}</h2>`;
        }
        if (paragraph.startsWith('## ')) {
          return `<h3>${paragraph.substring(3)}</h3>`;
        }
        if (paragraph.startsWith('### ')) {
          return `<h4>${paragraph.substring(4)}</h4>`;
        }
        
        // Regular paragraph
        return `<p>${paragraph}</p>`;
      })
      .filter(p => p !== '')
      .join('\n\n');
  }

  // Generate download link for the HTML file
  generateDownloadLink(post) {
    const generated = this.generateBlogPost(post);
    const blob = new Blob([generated.html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = generated.filename;
    link.textContent = `Download ${generated.filename}`;
    link.className = 'btn btn-primary';
    
    return link;
  }

  // Update the blog listing pages
  updateBlogListing(posts) {
    // This would need to be integrated with the admin panel
    // to actually update the static HTML files
    console.log('Blog listing update would happen here');
  }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BlogPostGenerator;
}
