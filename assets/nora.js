/* Nora AI — Shaheen VP's assistant.
   Self-contained chat widget: include with <script src="assets/nora.js" defer></script>.
   Answers come from the knowledge base below (no server or API key needed). */
(function () {
  'use strict'

  /* ---------------- contact details ---------------- */
  const PHONE = '+919544453993'
  const PHONE_PRETTY = '+91 95444 53993'
  const WA = 'https://wa.me/919544453993?text=' + encodeURIComponent("Hi Shaheen, I found you through your website and I'd like to talk.")
  const EMAIL = 'shaheen@adnora.in'
  const LINKEDIN = 'https://in.linkedin.com/in/mohammed-shaheen-879188249'
  const INSTAGRAM = 'https://www.instagram.com/adnora.in/'
  const SITES = {
    adnora: 'https://www.adnora.in/',
    solutions: 'https://adnorasolutions.com/',
    productions: 'https://adnoraproductions.in/'
  }

  /* ---------------- icons ---------------- */
  const I = {
    call: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3 .78.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.17.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.75 2.75 0 0 0-.86 2.04 4.8 4.8 0 0 0 1 2.53 10.9 10.9 0 0 0 4.2 3.7c1.56.68 2.17.73 2.95.62.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4 7.4V17h16V7.4z"/></svg>',
    in: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.55h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.3-1.92 2.63V21h-4z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zM17.1 5.8a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 2c-2.7 0-3.05.01-4.1.06C4.3 2.22 2.22 4.3 2.06 7.9 2.01 8.95 2 9.3 2 12s.01 3.05.06 4.1c.16 3.6 2.24 5.68 5.84 5.84 1.05.05 1.4.06 4.1.06s3.05-.01 4.1-.06c3.6-.16 5.68-2.24 5.84-5.84.05-1.05.06-1.4.06-4.1s-.01-3.05-.06-4.1C21.78 4.3 19.7 2.22 16.1 2.06 15.05 2.01 14.7 2 12 2zm0 1.8c2.67 0 2.98.01 4.03.06 2.7.12 3.97 1.41 4.1 4.1.05 1.05.06 1.37.06 4.04s-.01 2.98-.06 4.03c-.13 2.69-1.4 3.98-4.1 4.1-1.05.05-1.36.06-4.03.06s-2.99-.01-4.04-.06c-2.7-.12-3.97-1.42-4.1-4.1C3.81 14.98 3.8 14.67 3.8 12s.01-2.99.06-4.04c.13-2.69 1.4-3.98 4.1-4.1C9.01 3.81 9.33 3.8 12 3.8z"/></svg>',
    web: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.9 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82A13.6 13.6 0 0 1 12 4.04zM4.26 14a8.2 8.2 0 0 1 0-4h3.38a16.5 16.5 0 0 0 0 4zm.84 2h2.95c.32 1.25.78 2.45 1.38 3.56A8 8 0 0 1 5.1 16zm2.95-8H5.1a8 8 0 0 1 4.33-3.56A15.7 15.7 0 0 0 8.05 8zM12 19.96A13.6 13.6 0 0 1 10.09 16h3.82A13.6 13.6 0 0 1 12 19.96zM14.34 14H9.66a14.7 14.7 0 0 1 0-4h4.68a14.7 14.7 0 0 1 0 4zm.25 5.56A15.7 15.7 0 0 0 15.95 16h2.95a8.03 8.03 0 0 1-4.31 3.56zM16.36 14a16.5 16.5 0 0 0 0-4h3.38a8.2 8.2 0 0 1 0 4z"/></svg>',
    send: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.4 20.4 21 12 3.4 3.6 3.4 10l12.6 2-12.6 2z"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7l-1.4-1.4L9.2 12 2.9 5.7l1.4-1.4 6.3 6.3 6.3-6.3z" transform="translate(1 0)"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3C6.5 3 2 6.8 2 11.5c0 2.4 1.2 4.6 3.1 6.1L4.3 21l4.1-2c1.1.33 2.3.5 3.6.5 5.5 0 10-3.8 10-8.5S17.5 3 12 3zm-4 9.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm4 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/></svg>'
  }

  /* ---------------- helpers for answers ---------------- */
  const ext = (href, label) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`
  const list = items => '<ul>' + items.map(i => `<li>${i}</li>`).join('') + '</ul>'
  const ACT = {
    call:      { k: 'call',  icon: I.call, label: 'Call',      href: 'tel:' + PHONE },
    whatsapp:  { k: 'wa',    icon: I.wa,   label: 'WhatsApp',  href: WA, ext: true },
    email:     { k: 'mail',  icon: I.mail, label: 'Email',     href: 'mailto:' + EMAIL },
    linkedin:  { k: 'in',    icon: I.in,   label: 'LinkedIn',  href: LINKEDIN, ext: true },
    instagram: { k: 'ig',    icon: I.ig,   label: 'Instagram', href: INSTAGRAM, ext: true },
    adnora:      { k: 'web', icon: I.web, label: 'adnora.in',            href: SITES.adnora, ext: true },
    solutions:   { k: 'web', icon: I.web, label: 'adnorasolutions.com',  href: SITES.solutions, ext: true },
    productions: { k: 'web', icon: I.web, label: 'adnoraproductions.in', href: SITES.productions, ext: true }
  }

  const GBP = 'https://share.google/PRcGO0kX7OZvNBLuE'
  ACT.google = { k: 'web', icon: I.web, label: 'Google profile', href: GBP, ext: true }
  ACT.maps = { k: 'web', icon: I.web, label: 'Open in Maps', href: GBP, ext: true }

  const COUNTRIES = ['India', 'Saudi Arabia', 'UAE', 'Qatar', 'Bahrain', 'Uzbekistan', 'Georgia']
  const CLIENTS = ['Qasr Laban', 'Madreena Kitchen', 'Mellow Interiors', 'Hajimakan', 'Blueprint Media', 'Vaganza Vacations',
    'Rosabella Makeover Studio', 'Roxx Broasted', 'Edufy Overseas', 'Beatbox', 'Chillunuoru Kulfi', 'Hot Deals Kochi',
    'Beezy Solutions', 'Hotel Explora (4-star luxury hotel)', 'Malger Entertainments', 'Rentzo', 'Medure Edu', 'Vista Learners',
    "Let's Eat Bakers", 'Aegon Longevity &amp; Recovery', 'Al Abdali', 'Asaas Accounting']
  const CLIENT_KEYS = ['qasr laban', 'qasr', 'laban', 'madreena', 'madheena', 'mellow', 'mellow interiors', 'hajimakan', 'blueprint', 'blueprint media',
    'vaganza', 'rosabella', 'roxx', 'broasted', 'edufy', 'beatbox', 'kulfi', 'chillunuoru', 'hot deals', 'hotdeals', 'beezy', 'explora', 'hotel explora',
    'malger', 'medure', 'vista', 'vista learners', 'lets eat', 'bakers', 'aegon', 'ageon', 'longevity', 'al abdali', 'abdali', 'asaas']

  const SERVICES = [
    { id: 'branding', t: 'Branding &amp; Design', items: ['Brand identity creation &amp; positioning', 'Logo creation &amp; design', 'Social media poster design', 'Trending-moment creatives and promotions', 'Packaging design &amp; ideas', 'Printing &amp; collateral design'],
      keys: ['branding', 'brand', 'brand identity', 'identity', 'logo', 'design', 'designing', 'poster', 'posters', 'creative', 'creatives', 'packaging', 'printing', 'print', 'brochure', 'collateral', 'graphic', 'graphics', 'positioning'] },
    { id: 'consult', t: 'Growth Consultation', items: ['Business consulting', 'Social media consulting', 'Website or product audit &amp; consultation', 'Google Business Profile (GMB) consultation'],
      keys: ['consulting', 'consultation', 'consultant', 'consult', 'business consulting', 'audit', 'strategy', 'advice', 'growth'] },
    { id: 'social', t: 'Social Media', items: ['Social media management', 'Social media marketing'],
      keys: ['social media', 'social media management', 'social media marketing', 'smm', 'page management', 'handling', 'facebook', 'posting'] },
    { id: 'video', t: 'Video Production', items: ['Social media videos', 'Brand advertisements', 'Creative video production', 'Product videos', 'Brand event or campaign videos', 'AI video production'],
      keys: ['video', 'videos', 'video production', 'film', 'films', 'shoot', 'shooting', 'reel', 'reels', 'ad film', 'advertisement', 'product video', 'ai video', 'event video', 'editing', 'brand film'] },
    { id: 'marketing', t: 'Marketing', items: ['Lead generation &amp; performance marketing', 'Offline creative marketing strategies', 'Brand promotion &amp; events', 'Product promotion &amp; events', 'Brand- or product-level launches &amp; events'],
      keys: ['marketing', 'digital marketing', 'lead', 'leads', 'lead generation', 'performance marketing', 'meta ads', 'facebook ads', 'instagram ads', 'offline', 'promotion', 'promotions', 'event', 'events', 'launch', 'launches', 'campaign', 'campaigns'] },
    { id: 'seo', t: 'SEO &amp; GEO', items: ['Google Business Profile (GMB) optimisation', 'Google Business Profile (GMB) management', 'Website SEO', 'Google Ads', 'Generative Engine Optimisation (GEO)', 'Local SEO'],
      keys: ['seo', 'website seo', 'geo', 'gmb', 'google business', 'google my business', 'google profile', 'google ads', 'ppc', 'ranking', 'rank', 'local seo', 'search', 'ai search', 'chatgpt', 'generative engine'] },
    { id: 'dev', t: 'Website &amp; Software Development', items: ['Static &amp; dynamic website creation', 'E-commerce website creation &amp; setup', 'Custom software &amp; application development', 'Mobile application development'],
      keys: ['website', 'websites', 'web', 'web development', 'app', 'apps', 'mobile app', 'application', 'software', 'development', 'developer', 'ecommerce', 'e-commerce', 'online store', 'shopify', 'crm', 'erp'] },
    { id: 'influencer', t: 'Influencer &amp; Celebrity Marketing', items: ['Influencer marketing (paid &amp; barter collaborations)', 'Celebrity management'],
      keys: ['influencer', 'influencers', 'influencer marketing', 'celebrity', 'celebrities', 'barter', 'collab', 'collaboration', 'creator', 'creators', 'blogger', 'vlogger'] },
    { id: 'tvradio', t: 'TV &amp; Radio Ads', items: ['TV commercial (TVC) ad production', 'Radio ad creation &amp; publishing'],
      keys: ['tv', 'tvc', 'television', 'radio', 'tv ad', 'radio ad', 'commercial', 'fm'] }
  ]

  /* ---------------- knowledge base ---------------- */
  // Each intent: keywords (weighted by match), answer html, optional actions + follow-up suggestions.
  const KB = [
    { id: 'greet', keys: ['hi', 'hello', 'hey', 'hai', 'hola', 'namaste', 'salam', 'assalamu', 'good morning', 'good evening', 'yo'],
      a: () => `Hi! I'm <b>Nora</b>, Shaheen's assistant. Ask me about Shaheen, the Adnora Group, our services, clients and countries we work in, or how to get in touch.`,
      next: ['Who is Shaheen?', 'Services', 'Clients', 'Contact Shaheen'] },

    { id: 'nora', keys: ['who are you', 'what are you', 'nora', 'your name', 'are you ai', 'bot', 'robot'],
      a: () => `I'm <b>Nora AI</b>, the assistant on Shaheen VP's website. I can tell you about Shaheen, the Adnora companies, our services, clients, countries, reviews and office hours, and connect you with him by call, WhatsApp or email.`,
      next: ['Who is Shaheen?', 'Services', 'Contact Shaheen'] },

    { id: 'about', keys: ['who is shaheen', 'about shaheen', 'shaheen', 'shaheen vp', 'founder', 'md', 'managing director', 'ceo', 'profile', 'bio', 'background', 'owner', 'mohammed', 'who is he', 'his role', 'experience'],
      a: () => `<b>Shaheen VP</b> (Mohammed Shaheen) is the <b>Founder &amp; Managing Director of the Adnora Group of Companies</b>, based in Kochi, Kerala.` +
        list([
          '<b>Adnora Group</b>: Founder &amp; MD',
          '<b>Adnora Productions</b>: Founder &amp; CEO (marketing, branding and video production)',
          '<b>Adnora Solutions</b>: web, software and app development, part of the group',
          '<b>Rentzo</b>: Co-founder (real-estate platform for Kerala)'
        ]) +
        `Under his lead, Adnora has delivered marketing, video production and software projects for clients in <b>${COUNTRIES.length} countries</b>: ${COUNTRIES.join(', ')}.`,
      actions: ['linkedin', 'whatsapp'],
      next: ['Adnora Group', 'Countries', 'Contact Shaheen'] },

    { id: 'group', keys: ['adnora group', 'group', 'companies', 'company', 'business', 'businesses', 'ventures', 'venture', 'adnora', 'firms', 'what does he do'],
      a: () => `The <b>Adnora Group of Companies</b> brings marketing, film and software together under one roof, with one team and one plan for every client.` +
        list([
          '<b>Adnora Productions</b>: marketing agency for branding, social media, video production, SEO, influencer and TV/radio ads',
          '<b>Adnora Solutions</b>: websites, e-commerce, custom software and mobile apps',
          '<b>Adnora</b> (adnora.in): one studio for brand films, identity, campaigns, websites, software and online stores',
          '<b>Rentzo</b>: real-estate platform for Kerala (co-founded)'
        ]) + `Which one would you like to know more about?`,
      actions: ['adnora', 'productions', 'solutions'],
      next: ['Adnora Productions', 'Adnora Solutions', 'Rentzo'] },

    { id: 'productions', keys: ['production', 'productions', 'adnora productions', 'agency', 'marketing agency'],
      a: () => `<b>Adnora Productions</b>: <i>"Crafting Digital Legacies, Not Just Campaigns."</i> A marketing agency in Kadavanthra, Kochi, led by Shaheen as Founder &amp; CEO. It's rated <b>5.0 ★ from 32 Google reviews</b>.<br><br>It covers branding &amp; design, growth consultation, social media, video production, marketing, SEO &amp; GEO, influencer &amp; celebrity marketing, and TV &amp; radio ads.<br><br><b>Selected work</b>` +
        list(['Qasr Laban: Google and AI search ranking (SEO)', 'Meta Ads campaign for a new fashion e-commerce brand: 5X ROAS', 'Viral blog content series: over 1 million readers', 'Award-winning brand documentary short for a cause']) +
        `Email: <a href="mailto:info@adnoraproductions.in">info@adnoraproductions.in</a>`,
      actions: ['productions', 'whatsapp', 'google'],
      next: ['Services', 'Clients', 'Reviews'] },

    { id: 'solutions', keys: ['solution', 'solutions', 'adnora solutions', 'tech company', 'it company', 'software company'],
      a: () => `<b>Adnora Solutions</b>: <i>"Engineering Innovation. Accelerating Growth."</i> A web and app development company in Kochi that designs and builds modern web platforms and native mobile apps.` +
        list(['Static &amp; dynamic websites', 'E-commerce websites and setup', 'Custom software &amp; applications', 'Mobile app development']) +
        `It sits next to Adnora Productions, so the product behind the marketing is as strong as the story.`,
      actions: ['solutions', 'whatsapp', 'call'],
      next: ['Adnora Productions', 'Get a quote', 'Contact Shaheen'] },

    { id: 'studio', keys: ['adnora.in', 'studio', 'one studio', 'designed built'],
      a: () => `<b>Adnora</b> (adnora.in): <i>"Designed, built, and taken to market."</i> Brand film, identity, campaigns, websites, software and online stores, made by one studio. The people who shoot, write and build share one floor.`,
      actions: ['adnora', 'email'],
      next: ['Services', 'Office address', 'Contact Shaheen'] },

    { id: 'rentzo', keys: ['rentzo', 'real estate', 'realestate', 'property', 'properties', 'rent', 'rental', 'house', 'home', 'flat', 'apartment', 'listing', 'listings'],
      a: () => `<b>Rentzo</b> is a real-estate platform based in Kerala, co-founded by Shaheen. It makes it simpler to <b>find, list and rent property</b> across Kerala, built by people who live here. Rentzo is also an Adnora marketing client.`,
      actions: ['whatsapp', 'call'],
      next: ['Adnora Group', 'Contact Shaheen'] },

    ...SERVICES.map((s, i) => ({
      id: s.id, keys: s.keys,
      a: () => `<b>${s.t}</b> at Adnora:` + list(s.items) + `Want this for your brand? Message Shaheen with a line about your business.`,
      actions: ['whatsapp', 'call'],
      next: [SERVICES[(i + 1) % SERVICES.length].t.replace(/&amp;/g, '&'), 'All services', 'Get a quote']
    })),

    { id: 'services', keys: ['services', 'service', 'all services', 'what do you do', 'what do they do', 'offer', 'offerings', 'help me', 'can you do', 'provide', 'portfolio of services', 'service list'],
      a: () => `Adnora's services, across <b>Creative</b> (branding &amp; content), <b>Growth</b> (marketing &amp; consultation) and <b>Technology</b> (web &amp; software):` +
        list(SERVICES.map(s => `<b>${s.t}</b>: ${s.items.length} services`)) +
        `Tap a category below for the full list, or tell me what you need.`,
      actions: ['whatsapp', 'call'],
      next: SERVICES.map(s => s.t.replace(/&amp;/g, '&')) },

    { id: 'clients', keys: ['client', 'clients', 'customers', 'brands', 'worked with', 'portfolio', 'case study', 'case studies', 'projects', 'work done', ...CLIENT_KEYS],
      a: () => `Adnora has worked with brands across food, hospitality, education, travel, interiors, beauty, health and finance, including:` +
        list(CLIENTS) +
        `Clients come from <b>${COUNTRIES.join(', ')}</b>.`,
      actions: ['google', 'whatsapp'],
      next: ['Countries', 'Reviews', 'Services'] },

    { id: 'countries', keys: ['country', 'countries', 'international', 'global', 'abroad', 'overseas', 'outside india', 'gulf', 'gcc', 'middle east', 'saudi', 'saudi arabia', 'ksa', 'riyadh', 'jeddah', 'uae', 'dubai', 'abu dhabi', 'sharjah', 'qatar', 'doha', 'bahrain', 'manama', 'uzbekistan', 'tashkent', 'georgia', 'tbilisi', 'india', 'remote'],
      a: () => `Adnora has delivered <b>marketing, video production and software development</b> for clients in ${COUNTRIES.length} countries:` +
        list(COUNTRIES.map(c => `<b>${c}</b>`)) +
        `The team works from Kochi and runs projects remotely for clients abroad, so wherever you are, you can start with a WhatsApp message or a call.`,
      actions: ['whatsapp', 'call', 'email'],
      next: ['Clients', 'Services', 'Get a quote'] },

    { id: 'reviews', keys: ['review', 'reviews', 'rating', 'ratings', 'rated', 'stars', 'feedback', 'trust', 'reliable', 'recommend', 'google rating'],
      a: () => `Adnora Productions is rated <b>5.0 ★ from 32 reviews</b> on Google. Reviewers mention:` +
        list(['Clear communication and smooth coordination on collaborations, including Qasr Laban\'s Palakkad outlet', 'A supportive, professional influencer marketing team', 'A friendly, creative team that is strong at digital marketing and brand promotion', 'Recommended for social media marketing in Kerala']),
      actions: ['google', 'whatsapp'],
      next: ['Clients', 'Services'] },

    { id: 'hours', keys: ['hours', 'timing', 'timings', 'open', 'opening', 'closed', 'working hours', 'office hours', 'sunday', 'saturday', 'what time'],
      a: () => `Office hours:` + list(['<b>Monday to Saturday</b>: 9 AM to 8 PM', '<b>Sunday</b>: closed']) + `WhatsApp messages are welcome anytime; Shaheen will reply during working hours.`,
      actions: ['whatsapp', 'call', 'maps'],
      next: ['Office address', 'Contact Shaheen'] },

    { id: 'quote', keys: ['quote', 'price', 'pricing', 'cost', 'charge', 'rate', 'rates', 'budget', 'package', 'packages', 'hire', 'proposal', 'estimate', 'how much', 'start a project', 'project', 'partnership', 'partner', 'invest', 'investment'],
      a: () => `Pricing depends on the scope, so the quickest way is to speak to Shaheen directly. Send a WhatsApp with a line about your brand and what you need (branding, marketing, video, SEO, website, app or property) and he'll get back to you.`,
      actions: ['whatsapp', 'call', 'email'],
      next: ['Services', 'Office hours'] },

    { id: 'contact', keys: ['contact', 'call', 'phone', 'number', 'mobile', 'whatsapp', 'reach', 'talk', 'speak', 'meet', 'meeting', 'message', 'connect', 'touch', 'email', 'mail', 'appointment', 'book'],
      a: () => `You can reach Shaheen directly:` +
        list([`Phone and WhatsApp: <a href="tel:${PHONE}">${PHONE_PRETTY}</a>`, `Email: <a href="mailto:${EMAIL}">${EMAIL}</a>`, `LinkedIn: ${ext(LINKEDIN, 'Mohammed Shaheen')}`, 'Office hours: Mon to Sat, 9 AM to 8 PM']) +
        `Tap a button below to start.`,
      actions: ['call', 'whatsapp', 'email', 'linkedin'],
      next: ['Office address', 'Get a quote'] },

    { id: 'address', keys: ['address', 'office', 'location', 'located', 'where', 'kochi', 'cochin', 'kerala', 'kadavanthra', 'ernakulam', 'visit', 'map', 'maps', 'directions'],
      a: () => `Adnora's office is in <b>Kadavanthra, Kochi</b>:<br>Room No. 318, Fourth Floor, DD Vyapar Bhavan, KP Vallon Road, Giri Nagar Housing Colony, Kadavanthra, Kochi, Ernakulam, Kerala 682020.<br><br>Open Monday to Saturday, 9 AM to 8 PM. Please call or WhatsApp before you visit.`,
      actions: ['maps', 'call', 'whatsapp'],
      next: ['Office hours', 'Contact Shaheen'] },

    { id: 'social', keys: ['instagram', 'insta', 'linkedin', 'follow', 'profiles', 'handle', 'socials'],
      a: () => `Follow along:` + list([`LinkedIn: ${ext(LINKEDIN, 'Mohammed Shaheen')}`, `Instagram: ${ext(INSTAGRAM, '@adnora.in')}`, `Google: ${ext(GBP, 'Adnora Productions')}`]),
      actions: ['linkedin', 'instagram', 'google'],
      next: ['Adnora Group', 'Contact Shaheen'] },

    { id: 'sites', keys: ['site', 'sites', 'link', 'links', 'url', 'websites of'],
      a: () => `The group's websites:` + list([ext(SITES.adnora, 'adnora.in'), ext(SITES.solutions, 'adnorasolutions.com'), ext(SITES.productions, 'adnoraproductions.in')]),
      actions: ['adnora', 'solutions', 'productions'],
      next: ['Adnora Group', 'Contact Shaheen'] },

    { id: 'thanks', keys: ['thanks', 'thank you', 'thank', 'great', 'awesome', 'cool', 'nice', 'ok', 'okay', 'bye', 'goodbye', 'perfect'],
      a: () => `Happy to help! If you'd like to talk to Shaheen, he's one tap away.`,
      actions: ['whatsapp', 'call'],
      next: ['Adnora Group', 'Services'] }
  ]

  // Suggestion chip text -> intent
  const CHIP = {
    'who is shaheen?': 'about', 'adnora companies': 'group', 'adnora group': 'group',
    'adnora productions': 'productions', 'adnora solutions': 'solutions', 'rentzo': 'rentzo',
    'services': 'services', 'all services': 'services', 'clients': 'clients', 'countries': 'countries', 'reviews': 'reviews',
    'get a quote': 'quote', 'contact shaheen': 'contact', 'office address': 'address', 'office hours': 'hours'
  }
  SERVICES.forEach(s => { CHIP[s.t.replace(/&amp;/g, '&').toLowerCase()] = s.id })

  const norm = s => ' ' + s.toLowerCase().replace(/[^a-z0-9.\s-]/g, ' ').replace(/\s+/g, ' ').trim() + ' '
  function match (text) {
    let t = norm(text)
    // also match singular forms ("logos" -> "logo")
    t += t.trim().split(' ').filter(w => w.length > 3 && w.endsWith('s') && !w.endsWith('ss')).map(w => w.slice(0, -1)).join(' ') + ' '
    const direct = CHIP[text.trim().toLowerCase()]
    if (direct) return KB.find(k => k.id === direct)
    let best = null, score = 0
    for (const intent of KB) {
      let s = 0
      for (const key of intent.keys) {
        const k = ' ' + key + ' '
        if (t.includes(k)) s += key.split(' ').length * 2 + key.length / 10
        else if (key.length > 4 && t.includes(key)) s += 1
      }
      // "contact"/"call" words should win over company names in mixed questions like "call adnora"
      if (s > score) { score = s; best = intent }
    }
    return score > 0 ? best : null
  }

  const FALLBACK = {
    a: () => `I'm not sure about that one yet. I can tell you about <b>Shaheen</b>, the <b>Adnora Group</b>, our services, clients, countries, reviews, office hours and contact details. For anything else, Shaheen can answer you directly.`,
    actions: ['whatsapp', 'call'],
    next: ['Who is Shaheen?', 'Adnora companies', 'Services']
  }

  /* ---------------- styles ---------------- */
  const css = `
.nora,.nora *{box-sizing:border-box}
.nora{--n-bg:#0b0f09;--n-surface:#121810;--n-surface-2:#192113;--n-fg:#f2f5ee;--n-muted:#9aa192;--n-line:rgba(242,245,238,.1);--n-accent:#6db526;--n-accent-2:#9fd05f;--n-on-accent:#060805;
  font-family:"Onest",system-ui,-apple-system,"Segoe UI",sans-serif;font-size:15px;line-height:1.5;color:var(--n-fg);-webkit-font-smoothing:antialiased}
.nora-launch{position:fixed;right:max(16px,env(safe-area-inset-right,0px));bottom:max(16px,calc(env(safe-area-inset-bottom,0px) + 10px));z-index:60;
  width:58px;height:58px;border-radius:50%;border:0;cursor:pointer;background:var(--n-accent);color:var(--n-on-accent);display:grid;place-items:center;
  box-shadow:0 14px 30px -12px rgba(0,0,0,.75),0 0 0 0 rgba(109,181,38,.5);transition:transform .35s cubic-bezier(.16,1,.3,1),background .2s;animation:nora-pulse 2.8s ease-out 2.5s 3}
.nora-launch:hover{transform:scale(1.06);background:var(--n-accent-2)}
.nora-launch svg{width:26px;height:26px;fill:currentColor}
.nora-launch:focus-visible,.nora button:focus-visible,.nora a:focus-visible,.nora input:focus-visible{outline:2px solid var(--n-accent-2);outline-offset:2px}
.nora-launch[aria-expanded="true"]{transform:scale(.9)}
@keyframes nora-pulse{0%{box-shadow:0 14px 30px -12px rgba(0,0,0,.75),0 0 0 0 rgba(109,181,38,.55)}70%{box-shadow:0 14px 30px -12px rgba(0,0,0,.75),0 0 0 16px rgba(109,181,38,0)}100%{box-shadow:0 14px 30px -12px rgba(0,0,0,.75),0 0 0 0 rgba(109,181,38,0)}}
.nora-teaser{position:fixed;right:calc(max(16px,env(safe-area-inset-right,0px)) + 70px);bottom:max(24px,calc(env(safe-area-inset-bottom,0px) + 18px));z-index:60;
  max-width:230px;padding:.65rem .9rem;border-radius:14px 14px 4px 14px;background:var(--n-fg);color:#060805;font-size:13.5px;line-height:1.35;font-weight:500;cursor:pointer;
  box-shadow:0 12px 28px -12px rgba(0,0,0,.6);opacity:0;transform:translateY(8px);pointer-events:none;transition:opacity .4s,transform .4s cubic-bezier(.16,1,.3,1)}
.nora-teaser.show{opacity:1;transform:none;pointer-events:auto}
.nora-panel{position:fixed;right:max(16px,env(safe-area-inset-right,0px));bottom:calc(max(16px,calc(env(safe-area-inset-bottom,0px) + 10px)) + 70px);z-index:61;
  width:min(390px,calc(100vw - 32px));height:min(620px,calc(100dvh - 120px));display:flex;flex-direction:column;overflow:hidden;
  background:var(--n-bg);border:1px solid var(--n-line);border-radius:20px;box-shadow:0 30px 70px -20px rgba(0,0,0,.85);
  opacity:0;transform:translateY(16px) scale(.98);transform-origin:bottom right;pointer-events:none;visibility:hidden;
  transition:opacity .3s ease,transform .4s cubic-bezier(.16,1,.3,1),visibility 0s .4s}
.nora-panel.open{opacity:1;transform:none;pointer-events:auto;visibility:visible;transition:opacity .3s ease,transform .4s cubic-bezier(.16,1,.3,1),visibility 0s}
.nora-head{display:flex;align-items:center;gap:.75rem;padding:14px 14px 14px 16px;border-bottom:1px solid var(--n-line);background:linear-gradient(180deg,rgba(109,181,38,.12),transparent)}
.nora-av{position:relative;flex:none;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:var(--n-accent);color:var(--n-on-accent);
  font-family:"Anton","Arial Narrow",Impact,sans-serif;font-size:20px;letter-spacing:.02em}
.nora-av::after{content:"";position:absolute;right:0;bottom:0;width:10px;height:10px;border-radius:50%;background:#3ee07a;border:2px solid var(--n-bg)}
.nora-ttl{flex:1;min-width:0}
.nora-ttl b{display:block;font-size:16px;font-weight:600;letter-spacing:.01em}
.nora-ttl span{display:block;font-size:12.5px;color:var(--n-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.nora-x{flex:none;width:36px;height:36px;border-radius:50%;border:0;background:transparent;color:var(--n-muted);cursor:pointer;display:grid;place-items:center}
.nora-x:hover{background:var(--n-surface-2);color:var(--n-fg)}
.nora-x svg{width:18px;height:18px;fill:currentColor}
.nora-quick{display:flex;gap:8px;padding:12px 14px;border-bottom:1px solid var(--n-line);overflow-x:auto;scrollbar-width:none}
.nora-quick::-webkit-scrollbar{display:none}
.nora-btn{flex:none;display:inline-flex;align-items:center;gap:7px;padding:8px 12px;border-radius:999px;border:1px solid var(--n-line);background:var(--n-surface);
  color:var(--n-fg);font:inherit;font-size:13px;font-weight:500;text-decoration:none;cursor:pointer;transition:background .2s,border-color .2s,transform .2s}
.nora-btn:hover{background:var(--n-surface-2);border-color:rgba(242,245,238,.25);transform:translateY(-1px)}
.nora-btn svg{width:16px;height:16px;fill:currentColor;flex:none}
.nora-btn[data-k="call"] svg{fill:var(--n-accent-2)}
.nora-btn[data-k="wa"]{background:#1f9d55;border-color:#1f9d55;color:#fff}
.nora-btn[data-k="wa"]:hover{background:#25b863;border-color:#25b863}
.nora-btn[data-k="wa"] svg{fill:#fff}
.nora-log{flex:1;overflow-y:auto;padding:16px 14px 8px;display:flex;flex-direction:column;gap:10px;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:var(--n-line) transparent}
.nora-msg{max-width:88%;padding:10px 13px;border-radius:16px;word-wrap:break-word;animation:nora-in .35s cubic-bezier(.16,1,.3,1)}
.nora-msg.bot{align-self:flex-start;background:var(--n-surface);border:1px solid var(--n-line);border-bottom-left-radius:5px}
.nora-msg.me{align-self:flex-end;background:var(--n-accent);color:var(--n-on-accent);border-bottom-right-radius:5px;font-weight:500}
.nora-msg b{font-weight:600}
.nora-msg ul{margin:.45rem 0 .5rem;padding-left:1.1rem;list-style:disc}
.nora-msg li{margin:.18rem 0}
.nora-msg li::marker{color:var(--n-accent)}
.nora-msg a{color:var(--n-accent-2);text-decoration:underline;text-underline-offset:2px}
.nora-msg.me a{color:inherit}
.nora-acts{display:flex;flex-wrap:wrap;gap:6px;align-self:flex-start;max-width:92%;animation:nora-in .35s cubic-bezier(.16,1,.3,1)}
.nora-sugg{display:flex;flex-wrap:wrap;gap:6px;align-self:flex-start;max-width:96%;margin-top:2px;animation:nora-in .35s cubic-bezier(.16,1,.3,1)}
.nora-chip{padding:6px 11px;border-radius:999px;border:1px dashed rgba(109,181,38,.55);background:transparent;color:var(--n-accent-2);font:inherit;font-size:12.5px;cursor:pointer;transition:background .2s}
.nora-chip:hover{background:rgba(109,181,38,.12)}
.nora-typing{align-self:flex-start;display:flex;gap:4px;padding:13px 14px;border-radius:16px;border-bottom-left-radius:5px;background:var(--n-surface);border:1px solid var(--n-line)}
.nora-typing i{width:6px;height:6px;border-radius:50%;background:var(--n-muted);animation:nora-dot 1s infinite ease-in-out}
.nora-typing i:nth-child(2){animation-delay:.15s}.nora-typing i:nth-child(3){animation-delay:.3s}
@keyframes nora-dot{0%,80%,100%{opacity:.3;transform:translateY(0)}40%{opacity:1;transform:translateY(-3px)}}
@keyframes nora-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.nora-form{display:flex;gap:8px;padding:10px 12px calc(10px + env(safe-area-inset-bottom,0px));border-top:1px solid var(--n-line);background:var(--n-bg)}
.nora-form input{flex:1;min-width:0;height:44px;padding:0 14px;border-radius:999px;border:1px solid var(--n-line);background:var(--n-surface);color:var(--n-fg);font:inherit;font-size:16px}
.nora-form input::placeholder{color:var(--n-muted)}
.nora-form input:focus{outline:none;border-color:rgba(109,181,38,.6)}
.nora-send{flex:none;width:44px;height:44px;border-radius:50%;border:0;background:var(--n-accent);color:var(--n-on-accent);cursor:pointer;display:grid;place-items:center;transition:background .2s,opacity .2s}
.nora-send:hover{background:var(--n-accent-2)}
.nora-send:disabled{opacity:.4;cursor:default}
.nora-send svg{width:20px;height:20px;fill:currentColor}
.nora-foot{padding:0 12px 8px;text-align:center;font-size:11px;color:var(--n-muted);background:var(--n-bg)}
/* make room for the page's own "Let's talk" button */
body.has-nora .fab{right:calc(max(16px,env(safe-area-inset-right,0px)) + 70px)}
@media (max-width:639px){
  .nora-panel{right:0;left:0;bottom:0;width:100%;height:100dvh;border-radius:0;border:0;transform-origin:bottom center}
  .nora-panel.open ~ .nora-launch,.nora-launch[aria-expanded="true"]{opacity:0;pointer-events:none}
  .nora-head{padding-top:calc(14px + env(safe-area-inset-top,0px))}
  .nora-teaser{max-width:190px}
}
@media (prefers-reduced-motion:reduce){
  .nora *,.nora-launch,.nora-panel{animation:none!important;transition:none!important}
}`

  /* ---------------- DOM ---------------- */
  function el (tag, attrs, html) {
    const n = document.createElement(tag)
    if (attrs) for (const k in attrs) n.setAttribute(k, attrs[k])
    if (html != null) n.innerHTML = html
    return n
  }
  const actionEl = a => {
    const d = typeof a === 'string' ? ACT[a] : a
    const link = el('a', { class: 'nora-btn', 'data-k': d.k, href: d.href }, d.icon + `<span>${d.label}</span>`)
    if (d.ext) { link.target = '_blank'; link.rel = 'noopener noreferrer' }
    return link
  }

  function init () {
    if (document.querySelector('.nora')) return
    document.head.appendChild(el('style', { id: 'nora-css' }, css))
    document.body.classList.add('has-nora')

    const root = el('div', { class: 'nora' })
    const panel = el('section', { class: 'nora-panel', id: 'nora-panel', role: 'dialog', 'aria-modal': 'false', 'aria-labelledby': 'nora-title', 'aria-hidden': 'true' })
    panel.innerHTML = `
      <header class="nora-head">
        <div class="nora-av" aria-hidden="true">N</div>
        <div class="nora-ttl"><b id="nora-title">Nora AI</b><span>Shaheen VP's assistant · Online</span></div>
        <button type="button" class="nora-x" aria-label="Close chat">${I.close}</button>
      </header>
      <div class="nora-quick" role="group" aria-label="Quick actions"></div>
      <div class="nora-log" role="log" aria-live="polite" aria-relevant="additions"></div>
      <form class="nora-form" autocomplete="off">
        <input type="text" name="q" placeholder="Ask about Shaheen or Adnora…" aria-label="Your message" maxlength="300">
        <button type="submit" class="nora-send" aria-label="Send" disabled>${I.send}</button>
      </form>
      <div class="nora-foot">Nora answers from Shaheen's public profile and Adnora's websites.</div>`
    const launch = el('button', { type: 'button', class: 'nora-launch', 'aria-label': 'Chat with Nora AI', 'aria-expanded': 'false', 'aria-controls': 'nora-panel' }, I.chat)
    const teaser = el('div', { class: 'nora-teaser', role: 'button', tabindex: '-1', 'aria-hidden': 'true' }, "Hi, I'm Nora 👋 Ask me anything about Shaheen &amp; Adnora.")
    root.append(panel, teaser, launch)
    document.body.appendChild(root)

    const quick = panel.querySelector('.nora-quick')
    ;['call', 'whatsapp', 'email', 'linkedin', 'instagram'].forEach(k => quick.appendChild(actionEl(k)))
    const log = panel.querySelector('.nora-log')
    const form = panel.querySelector('.nora-form')
    const input = form.querySelector('input')
    const send = form.querySelector('.nora-send')
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobile = () => matchMedia('(max-width: 639px)').matches
    let started = false, busy = false

    const scroll = () => { log.scrollTop = log.scrollHeight }
    function addMsg (who, html, isText) {
      const m = el('div', { class: 'nora-msg ' + who })
      if (isText) m.textContent = html; else m.innerHTML = html
      log.appendChild(m); scroll(); return m
    }
    function addBot (r) {
      addMsg('bot', r.a())
      if (r.actions && r.actions.length) {
        const row = el('div', { class: 'nora-acts' })
        r.actions.forEach(a => row.appendChild(actionEl(a)))
        log.appendChild(row)
      }
      if (r.next && r.next.length) {
        log.querySelectorAll('.nora-sugg').forEach(s => s.remove())
        const row = el('div', { class: 'nora-sugg', role: 'group', 'aria-label': 'Suggested questions' })
        r.next.forEach(t => {
          const c = el('button', { type: 'button', class: 'nora-chip' })
          c.textContent = t
          c.addEventListener('click', () => ask(t))
          row.appendChild(c)
        })
        log.appendChild(row)
      }
      scroll()
    }
    function reply (r) {
      busy = true
      const t = el('div', { class: 'nora-typing', 'aria-label': 'Nora is typing' }, '<i></i><i></i><i></i>')
      log.appendChild(t); scroll()
      setTimeout(() => { t.remove(); addBot(r); busy = false }, reduce ? 0 : 450 + Math.random() * 350)
    }
    function ask (text) {
      text = text.trim()
      if (!text || busy) return
      log.querySelectorAll('.nora-sugg').forEach(s => s.remove())
      addMsg('me', text, true)
      reply(match(text) || FALLBACK)
    }

    function open () {
      teaser.classList.remove('show')
      panel.classList.add('open'); panel.setAttribute('aria-hidden', 'false')
      launch.setAttribute('aria-expanded', 'true'); launch.setAttribute('aria-label', 'Close chat')
      if (mobile()) document.documentElement.style.overflow = 'hidden'
      if (!started) {
        started = true
        addBot({
          a: () => `Hi, I'm <b>Nora</b> 👋 Shaheen VP's AI assistant.<br>Ask me about Shaheen, the <b>Adnora Group</b>, our services, clients and the countries we work in, or reach him straight away with the buttons above.`,
          next: ['Who is Shaheen?', 'Services', 'Clients', 'Countries', 'Contact Shaheen']
        })
      }
      if (!mobile()) setTimeout(() => input.focus(), 50)
      try { sessionStorage.setItem('nora-seen', '1') } catch (e) {}
    }
    function close () {
      panel.classList.remove('open'); panel.setAttribute('aria-hidden', 'true')
      launch.setAttribute('aria-expanded', 'false'); launch.setAttribute('aria-label', 'Chat with Nora AI')
      document.documentElement.style.overflow = ''
      launch.focus({ preventScroll: true })
    }
    const isOpen = () => panel.classList.contains('open')

    launch.addEventListener('click', () => isOpen() ? close() : open())
    teaser.addEventListener('click', open)
    panel.querySelector('.nora-x').addEventListener('click', close)
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen()) close() })
    input.addEventListener('input', () => { send.disabled = !input.value.trim() })
    form.addEventListener('submit', e => { e.preventDefault(); const v = input.value; input.value = ''; send.disabled = true; ask(v) })
    // stop the page's smooth-scroll library from hijacking wheel events inside the chat
    panel.setAttribute('data-lenis-prevent', '')

    let seen = false
    try { seen = sessionStorage.getItem('nora-seen') === '1' } catch (e) {}
    if (!seen) {
      setTimeout(() => { if (!isOpen()) teaser.classList.add('show') }, 6000)
      setTimeout(() => teaser.classList.remove('show'), 16000)
    }
    window.Nora = { open, close, ask: t => { if (!isOpen()) open(); ask(t) } }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init)
  else init()
})()
