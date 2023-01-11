import{_ as e,c as a,o as l,a as i}from"./app.f7d714e3.js";const m=JSON.parse('{"title":"知识深度","description":"","frontmatter":{},"headers":[{"level":2,"title":"JS内存泄露如何检测？场景有哪些？","slug":"js内存泄露如何检测-场景有哪些","link":"#js内存泄露如何检测-场景有哪些","children":[]},{"level":2,"title":"vdom真的很快吗？","slug":"vdom真的很快吗","link":"#vdom真的很快吗","children":[]},{"level":2,"title":"知识深度很重要","slug":"知识深度很重要","link":"#知识深度很重要","children":[{"level":3,"title":"面试评级","slug":"面试评级","link":"#面试评级","children":[]},{"level":3,"title":"难题攻坚","slug":"难题攻坚","link":"#难题攻坚","children":[]},{"level":3,"title":"同事之间的影响力","slug":"同事之间的影响力","link":"#同事之间的影响力","children":[]},{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"relativePath":"web/depth.md","lastUpdated":1673453797000}'),d={name:"web/depth.md"},t=i('<h1 id="知识深度" tabindex="-1">知识深度 <a class="header-anchor" href="#知识深度" aria-hidden="true">#</a></h1><p>大厂面试会通过各种难题来试探你的技术深度，评估你的技术发展潜力，这是入职后确定级别、薪资的重要参考。所以，技术深度将决定你的“钱途”。</p><p>为何要考察呢？</p><ul><li>深挖你的技术“天花板”，看未来潜力和可培养性 —— 特别是对于刚毕业不就的新人。</li><li>如果面试通过了，大公司要定级（P6 还是 P7），其中技术深度就是很重要的参考标准。一个没有技术深度的人，不可能给高级别职称。</li><li>希望和有技术深度的工程师共事。而且，那么多候选人，择优录取，肯定希望能招募到技术深度好的工程师。</li></ul><p>考察重点是我们日常使用的技术，的一些深入。没有什么特别出格的。</p><ul><li>非应用层面，深入到原理层面</li><li>JS相关原理</li><li>Vue React 相关原理</li></ul><p>技术深度，就有那么 1-2 个方面即可。深了，就不可能全面。技术深度的题目不过关，也不一定就面试不通过。</p><h2 id="js内存泄露如何检测-场景有哪些" tabindex="-1">JS内存泄露如何检测？场景有哪些？ <a class="header-anchor" href="#js内存泄露如何检测-场景有哪些" aria-hidden="true">#</a></h2><p>JS垃圾回收是指回收那些函数已经执行完成再也用不到的对象或数据，之前用的是引用计数，但是循环引用有缺陷，现在用的是标记清除，从js的根window向下遍历，找到就保留，找不到就清除。</p><p>内存泄露检测要看内存的变化，如果内存升高升高降下来，这是正常的情况，不算内存泄露。所以我们要看如何检测内存变化。内存变化可以使用chrome devtools中的Performance工具来进行检测。</p><p>内存泄露的场景(以Vue为例)</p><ul><li>被全局变量、函数引用，组件销毁时未清除</li><li>被全局事件、定时器引用，组件销毁时未清除</li><li>被自定义事件引用，组件销毁时未清除</li></ul><p>那么闭包是内存泄露吗？</p><p>严格意义上来说闭包不算内存泄露，内存泄露是非预期的情况，想让它回收但是它没回收。而闭包是符合预期的。</p><h2 id="vdom真的很快吗" tabindex="-1">vdom真的很快吗？ <a class="header-anchor" href="#vdom真的很快吗" aria-hidden="true">#</a></h2><p>vdom也就是Virtual DOM 虚拟dom，vue和react都使用vdom，它是用JS对象来模拟DOM节点数据，由React最先推广使用。</p><h2 id="知识深度很重要" tabindex="-1">知识深度很重要 <a class="header-anchor" href="#知识深度很重要" aria-hidden="true">#</a></h2><p>虽然我们日常干的都是“拧螺丝”“搬砖”的 CURD 工作，也体现不出什么难度，但自身的知识深度真的很重要。工作是公司的、老板的，而能力是自己的，要区分开来。</p><h3 id="面试评级" tabindex="-1">面试评级 <a class="header-anchor" href="#面试评级" aria-hidden="true">#</a></h3><p>面试通过了，到底给你评定 P6 还是 P7 ？依据什么标准呢？</p><ol><li>第一个因素不是你的技术，而是团队的预算，例如他们还有没有 P7 的名额。如果有，那可以考虑；如果没有，你能力再好也大不了 P7 。说这个因素是告诉你：如果你的平级不高，不一定是个人的因素。</li><li>第二个因素就是你的综合技术能力，而其中技术深度就是最关键的一个。如果你只是浮于表面，从未深入到原理或者源码层面，那就很难有说服力。</li><li>大厂不同级别的工资是不一样的，所以技术深度直接决定了你的“钱途”。</li></ol><h3 id="难题攻坚" tabindex="-1">难题攻坚 <a class="header-anchor" href="#难题攻坚" aria-hidden="true">#</a></h3><p>在实际工作中，项目遇到了难题，老板可能会直接指派给你，也可能开会时叫人主动认领（此时你要量力而行，不要随意“抢答”）。无论何种方式，你接到了这样一个难题，是否能解决将决定你在领导心目中的形象。</p><p>最后，要解决难题，最需要的就是技术深度。否则你都看不清楚问题的本质，何谈解决？</p><h3 id="同事之间的影响力" tabindex="-1">同事之间的影响力 <a class="header-anchor" href="#同事之间的影响力" aria-hidden="true">#</a></h3><p>同事之间除了聊工作，还有很多私下随性沟通的机会，特别是午饭、午休时间。聊技术，永远是技术人员的话题。</p><p>在聊天过程中，大家都会发表个人的评论和观点。如果你有技术深度，看问题更加透彻，解释问题更加清晰，在同事眼中你自然就是一个“厉害的人”。</p><p>得到同事的认可和尊重，会增加工作的幸福感。人都有本能的社交需求。</p><h3 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-hidden="true">#</a></h3><p>所谓技术深度，深了就不可能广。所以，找准某一个方面深入进去即可，不可贪多。而且，要找一个主流的技术栈，如 Vue React 相关的，要考虑技术的实际价值。</p>',30),r=[t];function h(n,p,s,c,o,u){return l(),a("div",null,r)}const v=e(d,[["render",h]]);export{m as __pageData,v as default};
