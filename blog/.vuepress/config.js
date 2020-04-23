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
      clientId: "Iv1.c17353483d65035e",
      clientSecret: "435cda143cdde0f6ae492630af1cac013070fea4",
    },
  },
  // plugins: {
  //   "@vssue/vuepress-plugin-vssue": {
  //     // 设置 `platform` 而不是 `api`
  //     platform: "github",
  //     // 其他的 Vssue 配置
  //     owner: "zhuguibiao",
  //     repo: "github-test",
  //     clientId: "Iv1.c17353483d65035e",
  //     clientSecret: "435cda143cdde0f6ae492630af1cac013070fea4",
  //   },
  // },
};
