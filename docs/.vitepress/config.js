module.exports = {
    title: '前端面试宝典',
    description: '前端面试宝典',
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
                text: '面试',
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
                    collapsible: true,
                    collapsed: false,
                    items: [
                        {
                            text: "介绍",
                            link: "/web/introduction",
                        },
                        {
                            text: "前端职业规划",
                            link: "/web/career-planning",
                        },
                        {
                            text: "数据结构与算法",
                            link: "/web/algorithm",
                        },
                        {
                            text: "分析和解决问题",
                            link: "/web/resolve",
                        },
                        {
                            text: "实际工作经验",
                            link: "/web/experience",
                        },
                        {
                            text: "项目设计",
                            link: "/web/project-design",
                        },
                        {
                            text: "软技能",
                            link: "/web/soft-skill",
                        },
                    ],
                },
                {
                    text: "面试题",
                    collapsible: true,
                    collapsed: false,
                    items: [
                        {
                            text: "手写题",
                            link: "/web/program",
                        },
                        {
                            text: "HTML面试题",
                            link: "/web/html",
                        },
                        {
                            text: "CSS面试题",
                            link: "/web/css",
                        },
                        {
                            text: "JavaScript面试题",
                            link: "/web/javascript",
                        },
                        {
                            text: "计算机网络",
                            link: "/web/network",
                        },
                        {
                            text: "Vue面试题",
                            link: "/web/vue",
                        },
                        {
                            text: "React面试题",
                            link: "/web/react",
                        },
                        {
                            text: "性能优化面试题",
                            link: "/web/performance",
                        },
                        {
                            text: "前端工程化面试题",
                            link: "/web/project",
                        },
                        {
                            text: "浏览器面试题",
                            link: "/web/browser",
                        },
                        {
                            text: "HR面试问题",
                            link: "/web/hr",
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