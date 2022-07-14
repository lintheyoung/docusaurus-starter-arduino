const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "dedemaker documentation",
  tagline: "",
  url: "https://www.dedemaker.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "dedemaker",
  projectName: "dedemaker.com",
  trailingSlash: false,
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["en", "zh-CN"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
      },
      "zh-CN": {
        label: "中文",
        direction: "ltr",
      },
    },
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        docsRouteBasePath: "/",
        docsDir: "current_docs",
        indexBlog: false,
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: "star",
      content:
        '⭐️ If you like dedemaker, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/lintheyoung/dedemaker-projects">dedemaker-projects</a> and follow <a target="_blank" rel="noopener noreferrer" href="https://github.com/lintheyoung">me</a> ! ',
    },
    navbar: {
      title: "DeDeMaker",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          href: "/get-started",
          position: "right",
          label: "Get Started",
        },
        {
          type: "doc",
          docId: "overview/intro",
          position: "right",
          label: "Docs",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/lintheyoung/dedemaker-projects",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()}. Distributed by BSD 3-Clause License`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "current_docs",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/lintheyoung/docusaurus-starter-arduino/tree/main",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/lintheyoung/docusaurus-starter-arduino/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/scss/application.scss"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
  plugins: ["docusaurus-plugin-sass"],
};
