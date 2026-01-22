// Create internal links
const links = [
    { url: 'https://jhazel.net', text: 'Home' },
    { url: 'https://jhazel.net/projects/derby-headlines', text: 'Derby Headlines' },
    { url: 'https://jhazel.net/projects/us-civics-test', text: 'US Civics Test' }
];

const internalLinksDiv = document.getElementById('internal-links');
const ul = document.createElement('ul');

links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.url;
    a.textContent = link.text;
    li.appendChild(a);
    ul.appendChild(li);
});

internalLinksDiv.appendChild(ul);

// Create breadcrumb structured data
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://jhazel.net"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://jhazel.net/projects"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "SEO Test",
            "item": "https://jhazel.net/projects/seo-test"
        }
    ]
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.textContent = JSON.stringify(breadcrumbSchema);
document.head.appendChild(script);
