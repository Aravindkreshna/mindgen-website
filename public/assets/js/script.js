const carousel = document.getElementById("clientCarousel");
const toggleButton = document.getElementById("togglePlay");
const menuButton = document.querySelector(".menu-btn");
const themeToggleButton = document.getElementById("themeToggle");
const nav = document.querySelector(".main-nav");
const mainNavLinks = Array.from(document.querySelectorAll(".main-nav a"));
const megaNavPanels = Array.from(document.querySelectorAll(".mega-nav"));
const siteHeaderWrap = document.querySelector(".site-header-wrap");
const industryTabs = document.querySelectorAll(".industry-tab");
const industryTabsRow = document.querySelector(".industry-tabs");
const industrySection = document.getElementById("industries");
const tabArrowLeft = document.querySelector(".tab-arrow-left");
const tabArrowRight = document.querySelector(".tab-arrow-right");
const industryMainImage = document.getElementById("industryMainImage");
const industryMainSource = document.getElementById("industryMainSource");
const industryTitleDesktop = document.getElementById("industryTitleDesktop");
const industryTitleMobile = document.getElementById("industryTitleMobile");
const industryCopyDesktop = document.getElementById("industryCopyDesktop");
const industryCopyMobile = document.getElementById("industryCopyMobile");
const insightCards = Array.from(document.querySelectorAll(".insight-card"));
const serviceItems = Array.from(document.querySelectorAll(".service-item"));
const innovateSection = document.querySelector(".innovate-contact");
const innovateToggle = document.querySelector(".innovate-toggle");
const innovateBody = document.getElementById("innovateBody");
const themeLogos = Array.from(document.querySelectorAll(".brand-logo, .footer-logo"));
const THEME_STORAGE_KEY = "mindgen-theme";

const cards = carousel ? Array.from(carousel.children) : [];
if (carousel && cards.length > 0) {
  const cloneCards = cards.map((card) => card.cloneNode(true));
  cloneCards.forEach((card) => carousel.appendChild(card));
}

let isPlaying = true;
let speed = 0.6;
let progress = 0;
let cardWidth = cards.length > 0 ? cards[0].getBoundingClientRect().width + 16 : 0;
let loopWidth = cardWidth * cards.length;
let industryCycleProgress = 0;
let lastIndustryTick = performance.now();
const industryCycleDuration = 5000;

const industryContent = {
  financial: {
    mainDesktopImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    mainMobileImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    titleDesktop: "Balancing Innovation, Trust, and Performance Across Every Financial Interaction",
    titleMobile: "Balancing Innovation, Trust, and Performance Across Every Financial Interaction",
    copyDesktop: "Partnering with global BFSI leaders to modernize systems, improve customer engagement, and drive growth through AI, cloud, and data strategies.",
    copyMobile: "Partnering with global BFSI leaders to modernize systems, improve engagement, and accelerate growth with AI and data.",
    cards: [
      {
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80",
        tag: "ARTICLE",
        title: "Bounteous Named to 2025 IDC FinTech Rankings Top 100 for Third Consecutive Year",
        alt: "Financial article cover"
      },
      {
        image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
        tag: "GLOBAL FINANCIAL SERVICES COMPANY",
        title: "Accelerating Compliance Through AI-Powered Document Intelligence",
        alt: "Laptop with financial workflows"
      },
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        tag: "FINANCIAL SERVICES COMPANY",
        title: "Reducing Risk Through AI-Driven Document Reconciliation",
        alt: "Financial dashboard and desk setup"
      }
    ]
  },
  telecom: {
    mainDesktopImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80",
    mainMobileImage: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80",
    titleDesktop: "Enabling Seamless Customer Journeys and Unlocking New Revenue Through Modern Tech",
    titleMobile: "Blending Brand, Tech, and Insight to Deepen Consumer Connections",
    copyDesktop: "Partnering with telecom leaders to modernize digital systems, personalize customer touchpoints, and bring innovative services to market faster.",
    copyMobile: "Helping brands build deeper consumer relationships, adapt to evolving behaviors, and scale with efficiency.",
    cards: [
      {
        image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1200&q=80",
        tag: "LEADING TELECOM COMPANY",
        title: "Leading Telecom Company Reimagines Risk Analysis with Generative AI",
        alt: "Professional working on laptop"
      },
      {
        image: "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=1200&q=80",
        tag: "ARTICLE",
        title: "Taking Telcos to the Sky",
        alt: "Laptop near airplane window"
      },
      {
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
        tag: "TELECOM OPERATOR",
        title: "Resolving Inefficiencies in Call Logging for a leading Telco",
        alt: "Person using phone in city street"
      }
    ]
  },
  healthcare: {
    mainDesktopImage: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1600&q=80",
    mainMobileImage: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80",
    titleDesktop: "Reimagining Care Journeys with Intelligent Platforms",
    titleMobile: "Reimagining Care Journeys with Intelligent Platforms",
    copyDesktop: "Creating connected digital experiences that improve outcomes, lower costs, and streamline operations across healthcare ecosystems.",
    copyMobile: "Connecting digital care experiences to improve outcomes and efficiency.",
    cards: [
      { image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80", tag: "HEALTH SYSTEM", title: "Transforming Patient Access with AI-Powered Triage", alt: "Doctor and tablet" },
      { image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80", tag: "CASE STUDY", title: "Improving Clinical Workflows Through Automation", alt: "Stethoscope and desk" },
      { image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80", tag: "ARTICLE", title: "Designing Digital Trust in Modern Healthcare", alt: "Healthcare teamwork" }
    ]
  },
  retail: {
    mainDesktopImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    mainMobileImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    titleDesktop: "Personalizing Every Moment Across the Retail Experience",
    titleMobile: "Personalizing Every Moment Across Retail",
    copyDesktop: "From acquisition to loyalty, we help retailers use data and AI to increase conversion and customer lifetime value.",
    copyMobile: "Helping retailers use data and AI to grow conversion and loyalty.",
    cards: [
      { image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80", tag: "RETAILER", title: "Boosting Digital Sales with Predictive Personalization", alt: "Clothing rack in store" },
      { image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80", tag: "ARTICLE", title: "How Unified Commerce Unlocks Growth", alt: "Retail shopping scene" },
      { image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80", tag: "GLOBAL BRAND", title: "Optimizing Merchandising with Real-Time Insights", alt: "Retail analytics setup" }
    ]
  },
  restaurant: {
    mainDesktopImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80",
    mainMobileImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    titleDesktop: "Scaling Frictionless Experiences in Restaurant and Convenience",
    titleMobile: "Scaling Frictionless Dining Experiences",
    copyDesktop: "We modernize ordering, loyalty, and operations so brands can deliver speed, consistency, and margin growth.",
    copyMobile: "Modernizing ordering and loyalty to deliver faster, smarter service.",
    cards: [
      { image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80", tag: "QSR BRAND", title: "Improving Throughput with Smarter Order Orchestration", alt: "Restaurant table setting" },
      { image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80", tag: "ARTICLE", title: "Driving Loyalty in a Convenience-First Economy", alt: "Restaurant kitchen environment" },
      { image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80", tag: "CASE STUDY", title: "Reducing Wait Times with Predictive Operations", alt: "Coffee and counter scene" }
    ]
  },
  consumer: {
    mainDesktopImage: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1600&q=80",
    mainMobileImage: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80",
    titleDesktop: "Blending Brand, Tech, and Insight to Deepen Consumer Connections",
    titleMobile: "Blending Brand, Tech, and Insight to Deepen Consumer Connections",
    copyDesktop: "Helping brands build deeper consumer relationships, adapt to evolving behaviors, and scale with efficiency.",
    copyMobile: "Helping brands build deeper consumer relationships, adapt to evolving behaviors, and scale with efficiency.",
    cards: [
      { image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80", tag: "COCA-COLA", title: "Creating Lifestyle-Led Campaigns Across Channels", alt: "Coca-Cola style branded image" },
      { image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80", tag: "ARTICLE", title: "The Next Wave of Consumer Personalization", alt: "Consumer apparel and shopping scene" },
      { image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1200&q=80", tag: "GLOBAL CPG", title: "Using AI to Accelerate Product Decisions", alt: "Consumer products in market shelf" }
    ]
  },
  logistics: {
    mainDesktopImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    mainMobileImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    titleDesktop: "Building Resilient, Data-Driven Supply Chain Networks",
    titleMobile: "Building Resilient Supply Chains",
    copyDesktop: "Optimizing routing, visibility, and fulfillment with cloud-native operations and predictive intelligence.",
    copyMobile: "Improving visibility and fulfillment with predictive intelligence.",
    cards: [
      { image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80", tag: "LOGISTICS LEADER", title: "Rethinking Distribution with Real-Time Visibility", alt: "Warehouse and logistics operations" },
      { image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=1200&q=80", tag: "ARTICLE", title: "AI Planning for Volatile Demand Cycles", alt: "Freight transport scene" },
      { image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80", tag: "CASE STUDY", title: "Lowering Delivery Costs Through Intelligent Dispatch", alt: "Delivery driver with packages" }
    ]
  },
  travel: {
    mainDesktopImage: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=1600&q=80",
    mainMobileImage: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=1200&q=80",
    titleDesktop: "Designing Seamless Experiences Across Travel and Hospitality",
    titleMobile: "Designing Seamless Travel Experiences",
    copyDesktop: "Empowering travel brands to optimize booking journeys, personalize service, and elevate guest satisfaction.",
    copyMobile: "Helping travel brands personalize service and elevate guest satisfaction.",
    cards: [
      { image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80", tag: "AIRLINE", title: "Reinventing Digital Booking for Higher Conversion", alt: "Airplane wing view" },
      { image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", tag: "HOSPITALITY", title: "Modernizing Guest Experience with AI Concierge", alt: "Hotel lobby interior" },
      { image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80", tag: "ARTICLE", title: "Building Loyalty Beyond the Trip", alt: "Hotel room travel setting" }
    ]
  },
  industrial: {
    mainDesktopImage: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?auto=format&fit=crop&w=1600&q=80",
    mainMobileImage: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?auto=format&fit=crop&w=1200&q=80",
    titleDesktop: "Connecting Industry and Manufacturing with Smart Digital Systems",
    titleMobile: "Connecting Manufacturing with Smart Systems",
    copyDesktop: "Driving operational excellence through connected data, predictive maintenance, and AI-powered process optimization.",
    copyMobile: "Driving operational excellence with connected data and AI.",
    cards: [
      { image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80", tag: "MANUFACTURER", title: "Digitizing Plant Operations for Better Throughput", alt: "Industrial manufacturing lines" },
      { image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=80", tag: "ARTICLE", title: "How AI Improves Quality Control at Scale", alt: "Factory worker and machine" },
      { image: "https://images.unsplash.com/photo-1581091215367-59ab6dcef244?auto=format&fit=crop&w=1200&q=80", tag: "CASE STUDY", title: "Reducing Downtime with Predictive Insights", alt: "Industrial dashboard monitoring" }
    ]
  },
  media: {
    mainDesktopImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    mainMobileImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    titleDesktop: "Scaling Digital Products Across Media, Tech, and Entertainment",
    titleMobile: "Scaling Digital Products Across Media and Tech",
    copyDesktop: "Building modern platforms and experiences that accelerate growth, engagement, and monetization across audiences.",
    copyMobile: "Building modern platforms that drive audience engagement and growth.",
    cards: [
      { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80", tag: "MEDIA PLATFORM", title: "Improving Engagement with Adaptive Content Experiences", alt: "Team collaborating around screens" },
      { image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80", tag: "ARTICLE", title: "Future-Proofing Tech Stacks for Speed and Scale", alt: "Coding and development workspace" },
      { image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=1200&q=80", tag: "ENTERTAINMENT", title: "Launching New Revenue Models with AI-Driven Personalization", alt: "Media production scene" }
    ]
  }
};

const updateMetrics = () => {
  if (!cards.length) return;
  cardWidth = cards[0].getBoundingClientRect().width + 16;
  loopWidth = cardWidth * cards.length;
};

const fitLogoText = () => {
  if (!carousel) return;
  const logoTexts = carousel.querySelectorAll(".logo-card span");
  logoTexts.forEach((span) => {
    const card = span.closest(".logo-card");
    if (!card) return;

    const maxFromCss = parseFloat(getComputedStyle(card).getPropertyValue("--logo-font-max")) || 58;
    const minFont = 18;
    const availableWidth = card.clientWidth - 24;
    let size = maxFromCss;

    span.style.fontSize = `${size}px`;
    while (size > minFont && span.scrollWidth > availableWidth) {
      size -= 1;
      span.style.fontSize = `${size}px`;
    }
  });
};

const setTabProgress = (tab, value) => {
  if (!tab) return;
  const safeValue = Math.max(0, Math.min(100, value));
  tab.style.setProperty("--progress", `${safeValue}%`);
};

const clearAllTabProgress = () => {
  industryTabs.forEach((tab) => setTabProgress(tab, 0));
};

const renderIndustryContent = (industryKey) => {
  const content = industryContent[industryKey];
  if (!content) return;

  if (industryMainImage) {
    industryMainImage.src = content.mainDesktopImage;
    industryMainImage.alt = `${industryKey} featured visual`;
  }

  if (industryMainSource) {
    industryMainSource.srcset = content.mainMobileImage;
  }

  if (industryTitleDesktop) industryTitleDesktop.textContent = content.titleDesktop;
  if (industryTitleMobile) industryTitleMobile.textContent = content.titleMobile;
  if (industryCopyDesktop) industryCopyDesktop.textContent = content.copyDesktop;
  if (industryCopyMobile) industryCopyMobile.textContent = content.copyMobile;

  insightCards.forEach((card, idx) => {
    const data = content.cards[idx];
    if (!data) return;
    const image = card.querySelector("img");
    const tag = card.querySelector(".insight-tag");
    const title = card.querySelector("h4");
    if (image) {
      image.src = data.image;
      image.alt = data.alt;
    }
    if (tag) tag.textContent = data.tag;
    if (title) title.textContent = data.title;
  });
};

const activateIndustryTab = (tab) => {
  if (!tab) return;
  industryTabs.forEach((item) => {
    item.classList.remove("active");
    item.setAttribute("aria-selected", "false");
    setTabProgress(item, 0);
  });
  tab.classList.add("active");
  tab.setAttribute("aria-selected", "true");
  industryCycleProgress = 0;
  lastIndustryTick = performance.now();
  renderIndustryContent(tab.dataset.industry);
};

const activateNextIndustryTab = () => {
  const tabs = Array.from(industryTabs);
  const currentIndex = tabs.findIndex((tab) => tab.classList.contains("active"));
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % tabs.length : 0;
  activateIndustryTab(tabs[nextIndex]);
};

const isIndustrySectionInViewport = () => {
  if (!industrySection) return false;
  const rect = industrySection.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < viewportHeight && rect.bottom > 0;
};

const updateIndustryCycle = (now) => {
  const activeTab = document.querySelector(".industry-tab.active");
  if (!activeTab) return;
  if (!isIndustrySectionInViewport()) {
    lastIndustryTick = now;
    return;
  }
  if (document.hidden) {
    lastIndustryTick = now;
    return;
  }

  const delta = now - lastIndustryTick;
  lastIndustryTick = now;
  industryCycleProgress += (delta / industryCycleDuration) * 100;

  if (industryCycleProgress >= 100) {
    setTabProgress(activeTab, 100);
    activateNextIndustryTab();
    return;
  }

  setTabProgress(activeTab, industryCycleProgress);
};

const animate = (now = performance.now()) => {
  if (isPlaying && carousel && loopWidth > 0) {
    progress += speed;
    if (progress >= loopWidth) {
      progress = 0;
    }
    carousel.style.transform = `translateX(-${progress}px)`;
  }
  updateIndustryCycle(now);
  requestAnimationFrame(animate);
};

const togglePlay = () => {
  isPlaying = !isPlaying;
  if (!toggleButton) return;
  toggleButton.textContent = isPlaying ? "II" : ">";
  toggleButton.setAttribute("aria-label", isPlaying ? "Pause carousel" : "Play carousel");
};

const updateThemeToggleUi = (isDark) => {
  if (!themeToggleButton) return;
  themeToggleButton.textContent = isDark ? "Light" : "Dark";
  themeToggleButton.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  themeToggleButton.setAttribute("aria-pressed", String(isDark));
};

const updateThemeLogos = (isDark) => {
  if (!themeLogos.length) return;
  themeLogos.forEach((logo) => {
    const lightLogo = logo.dataset.lightLogo || logo.getAttribute("src");
    const darkLogo = logo.dataset.darkLogo || lightLogo;
    logo.setAttribute("src", isDark ? darkLogo : lightLogo);
  });
};

const applyTheme = (theme) => {
  const isDark = theme === "dark";
  document.body.classList.toggle("theme-dark", isDark);
  updateThemeLogos(isDark);
  updateThemeToggleUi(isDark);
};

const initTheme = () => {
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  } catch (_) {
    savedTheme = null;
  }

  if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
    return;
  }

  applyTheme("light");
};

if (toggleButton) {
  toggleButton.addEventListener("click", togglePlay);
}

if (themeToggleButton) {
  themeToggleButton.addEventListener("click", () => {
    const isDark = document.body.classList.contains("theme-dark");
    const nextTheme = isDark ? "light" : "dark";
    applyTheme(nextTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch (_) {
      // Ignore storage failures and keep in-memory toggle behavior.
    }
  });
}

window.addEventListener("resize", updateMetrics);
window.addEventListener("resize", fitLogoText);

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));

    if (!expanded) {
      const isDark = document.body.classList.contains("theme-dark");
      nav.style.display = "flex";
      nav.style.position = "absolute";
      nav.style.top = "68px";
      nav.style.right = "16px";
      nav.style.flexDirection = "column";
      nav.style.alignItems = "flex-start";
      nav.style.background = isDark ? "rgba(12, 30, 58, 0.95)" : "rgba(250, 253, 255, 0.97)";
      nav.style.padding = "14px";
      nav.style.border = isDark ? "1px solid rgba(255,255,255,0.22)" : "1px solid rgba(24,37,71,0.22)";
      nav.style.borderRadius = "8px";
      nav.style.gap = "12px";
    } else {
      nav.removeAttribute("style");
    }
  });
}

if (mainNavLinks.length && megaNavPanels.length && siteHeaderWrap) {
  let megaCloseTimer;

  const closeAllMegaPanels = () => {
    megaNavPanels.forEach((panel) => panel.classList.remove("is-open"));
    mainNavLinks.forEach((item) => item.classList.remove("is-active"));
  };

  const clearMegaTimer = () => {
    if (megaCloseTimer) {
      clearTimeout(megaCloseTimer);
      megaCloseTimer = null;
    }
  };

  const openMegaForLink = (link) => {
    if (window.innerWidth <= 1080) return;
    if (!link.classList.contains("has-mega")) return;

    clearMegaTimer();
    closeAllMegaPanels();
    link.classList.add("is-active");
    const panelKey = link.dataset.megaTarget;
    const targetPanel = megaNavPanels.find((panel) => panel.dataset.megaPanel === panelKey);
    if (targetPanel) targetPanel.classList.add("is-open");
  };

  const scheduleMegaClose = () => {
    if (window.innerWidth <= 1080) return;
    clearMegaTimer();
    megaCloseTimer = setTimeout(() => {
      closeAllMegaPanels();
    }, 90);
  };

  mainNavLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => openMegaForLink(link));
    link.addEventListener("focus", () => openMegaForLink(link));
    link.addEventListener("click", (event) => {
      if (link.classList.contains("has-mega")) {
        event.preventDefault();
      }
    });
  });

  siteHeaderWrap.addEventListener("mouseenter", clearMegaTimer);
  siteHeaderWrap.addEventListener("mouseleave", scheduleMegaClose);
}

const initIndustryByViewport = () => {
  if (!industryTabs.length) return;
  const defaultKey = window.innerWidth <= 720 ? "consumer" : "financial";
  const defaultTab = document.querySelector(`.industry-tab[data-industry="${defaultKey}"]`) || industryTabs[0];
  activateIndustryTab(defaultTab);
  clearAllTabProgress();
  if (window.innerWidth <= 720) {
    defaultTab?.scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });
  }
};

if (industryTabsRow && tabArrowLeft && tabArrowRight) {
  tabArrowLeft.addEventListener("click", () => {
    industryTabsRow.scrollBy({ left: -180, behavior: "smooth" });
  });
  tabArrowRight.addEventListener("click", () => {
    industryTabsRow.scrollBy({ left: 180, behavior: "smooth" });
  });
}

industryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateIndustryTab(tab);
    if (window.innerWidth <= 720 && isIndustrySectionInViewport()) {
      tab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  });
});

serviceItems.forEach((item) => {
  const toggle = item.querySelector(".service-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const isExpanded = item.classList.contains("expanded");
    serviceItems.forEach((entry) => {
      entry.classList.remove("expanded");
      const btn = entry.querySelector(".service-toggle");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });

    if (!isExpanded) {
      item.classList.add("expanded");
      toggle.setAttribute("aria-expanded", "true");
    }
  });
});

if (innovateSection && innovateToggle && innovateBody) {
  innovateToggle.addEventListener("click", () => {
    const isCollapsed = innovateSection.classList.toggle("is-collapsed");
    const isExpanded = !isCollapsed;
    innovateToggle.setAttribute("aria-expanded", String(isExpanded));
    innovateBody.hidden = !isExpanded;
  });
}

updateMetrics();
initTheme();
fitLogoText();
initIndustryByViewport();
animate();
