module.exports = {
    title: '前端面试八股文',
    description: '前端面试八股文',
    base: '/interview/',
    themeConfig: {
        // siteTitle: false,
        // logo: "/logo.svg",
        nav: [
            {
                text: '前端面试题',
                items: [
                    { text: "手写JS", link: "/js/program" }
                ]
            }
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/codeteenager/interview" }],
        sidebar: {
            "/js/": [

                {
                    text: "基础",
                    items: [
                        {
                            text: "手写题",
                            link: "/js/program",
                        }
                    ],
                }
            ],
        }
    }
}