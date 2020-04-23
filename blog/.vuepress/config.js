console.log(require.resolve("./theme/"));
module.exports = {
  title: "朱先生博客",
  dest: "docs/",
  base: "/github-test/",
  description: "学习记录 代码分享 经验总结",
  theme: require.resolve("./theme/"),
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    dateFormat: "YYYY-MM-DD",
    smoothScroll: true, // allows you to enable smooth scrolling
    // Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions;
    },
    // Ref: https://vuepress-theme-blog.ulivz.com/#nav
    nav: [
      {
        text: "博客",
        link: "/posts/",
      },
      {
        text: "简历",
        link: "/resume/",
      },
      {
        text: "标签",
        link: "/tag/",
      },
    ],
    directories: [
      {
        id: "home",
        dirname: "_posts",
        path: "/",
        layout: "IndexHome",
      },
      {
        id: "resume",
        dirname: "_posts",
        path: "/resume/", // Entry page for current classifier
        title: "简历", // Entry, scope and pagination page titles for current classifier.
        layout: "Resume", // Layout component name for entry page.
      },
      {
        id: "post",
        dirname: "_posts",
        path: "/posts/",
        itemPermalink: "/posts/:year/:month/:day/:slug",
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/zhuguibiao",
        },
        {
          type: "twitter",
          link: "https://twitter.com/zhuguibiao",
        },
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US",
        },
        {
          text: "MIT Licensed | Copyright © 2020-present Vue.js",
          link: "",
        },
      ],
    },
    comment: {
      service: "vssue",
      owner: "zhuguibiao",
      repo: "github-test",
      clientId: "182e2d75ebc24a7a4ea8",
      clientSecret: "06ce846a6647ec4c5688d2f0735ea834873ff339",
    },
  },
};
