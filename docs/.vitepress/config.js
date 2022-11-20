module.exports = {
    title: '前端面试八股文',
    description: '前端面试八股文',
    base: '/interview/',
    markdown: {
        lineNumbers: true, //显示代码行数
    },
    lastUpdated: true,
    head: [
        ['link', { rel: 'icon', href: '/interview/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            {
                text: '前端面试题',
                link: "/web/algorithm"
            }
        ],
        outlineTitle: '在本页面',
        lastUpdatedText: '最近更新时间',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present codeteenager'
        },
        socialLinks: [{ icon: "github", link: "https://github.com/codeteenager/interview" }],
        sidebar: {
            "/web/": [

                {
                    text: "基础",
                    items: [
                        {
                            text: "介绍",
                            link: "/web/introduction",
                        },
                        {
                            text: "数据结构与算法",
                            link: "/web/algorithm",
                        },
                        {
                            text: "手写题",
                            link: "/web/program",
                        },
                        {
                            text: "JavaScript",
                            link: "/web/javascript",
                        },
                        {
                            text: "Vue面试题",
                            link: "/web/vue",
                        },
                        {
                            text: "面试套路",
                            link: "/web/skills",
                        },
                        {
                            text: "其他面经",
                            link: "/web/other",
                        }
                    ],
                }
            ],
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    }
}