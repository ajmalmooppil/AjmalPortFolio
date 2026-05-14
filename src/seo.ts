import { projects } from '@/data/projects'

const siteUrl = 'https://ajmalmooppil.github.io/AjmalPortFolio/'
const siteTitle = 'Ajmal Sadiqe | MEAN Stack Developer Portfolio'
const siteDescription =
  'Ajmal Sadiqe is a freelance MEAN stack and full-stack developer building ERP dashboards, temple management systems, masjid administration platforms, and modern business web apps.'
const previewImage = `${siteUrl}favicon.svg`

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector)

  if (!element) {
    element = document.createElement(attributes.rel ? 'link' : 'meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value)
  })
}

function projectImageUrl(image: string) {
  return new URL(image, siteUrl).href
}

function buildPortfolioJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}#person`,
        name: 'Ajmal Sadiqe',
        url: siteUrl,
        jobTitle: 'MEAN Stack Developer',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Kerala',
          addressCountry: 'IN',
        },
        knowsAbout: [
          'MEAN Stack Development',
          'Vue.js',
          'Angular',
          'Node.js',
          'MongoDB',
          'PostgreSQL',
          'ERP Dashboards',
          'Business Web Applications',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}#service`,
        name: 'Ajmal Sadiqe Full-Stack Development',
        url: siteUrl,
        description: siteDescription,
        provider: { '@id': `${siteUrl}#person` },
        areaServed: 'Worldwide',
        serviceType: [
          'MEAN Stack Development',
          'Web Application Development',
          'Dashboard Development',
          'Backend API Development',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        name: siteTitle,
        url: siteUrl,
        description: siteDescription,
        publisher: { '@id': `${siteUrl}#person` },
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}#projects`,
        name: 'Ajmal Sadiqe Project Gallery',
        description: 'Featured portfolio projects by Ajmal Sadiqe.',
        itemListElement: projects.map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name: project.title.replace(/\s+/g, ' ').trim(),
            description: project.desc,
            image: projectImageUrl(project.image),
            url: `${siteUrl}#work`,
            creator: { '@id': `${siteUrl}#person` },
            keywords: project.stack.join(', '),
            genre: project.type,
          },
        })),
      },
    ],
  }
}

export function applyHomeSeo() {
  document.title = siteTitle

  upsertMeta('meta[name="description"]', {
    name: 'description',
    content: siteDescription,
  })
  upsertMeta('meta[name="robots"]', {
    name: 'robots',
    content: 'index, follow, max-image-preview:large',
  })
  upsertMeta('link[rel="canonical"]', {
    rel: 'canonical',
    href: siteUrl,
  })
  upsertMeta('meta[property="og:type"]', {
    property: 'og:type',
    content: 'website',
  })
  upsertMeta('meta[property="og:title"]', {
    property: 'og:title',
    content: siteTitle,
  })
  upsertMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: siteDescription,
  })
  upsertMeta('meta[property="og:url"]', {
    property: 'og:url',
    content: siteUrl,
  })
  upsertMeta('meta[property="og:image"]', {
    property: 'og:image',
    content: previewImage,
  })
  upsertMeta('meta[name="twitter:card"]', {
    name: 'twitter:card',
    content: 'summary_large_image',
  })
  upsertMeta('meta[name="twitter:title"]', {
    name: 'twitter:title',
    content: siteTitle,
  })
  upsertMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: siteDescription,
  })
  upsertMeta('meta[name="twitter:image"]', {
    name: 'twitter:image',
    content: previewImage,
  })

  let jsonLd = document.head.querySelector<HTMLScriptElement>('#portfolio-json-ld')
  if (!jsonLd) {
    jsonLd = document.createElement('script')
    jsonLd.id = 'portfolio-json-ld'
    jsonLd.type = 'application/ld+json'
    document.head.appendChild(jsonLd)
  }

  jsonLd.textContent = JSON.stringify(buildPortfolioJsonLd())
}
