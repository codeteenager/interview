import{_ as e,c as l,o as a,a as s}from"./app.fbdb0829.js";const n="/interview/images/6.png",i="/interview/images/7.png",m=JSON.parse('{"title":"前端工程化面试题","description":"","frontmatter":{},"headers":[{"level":2,"title":"webpack 与 grunt、gulp 的不同","slug":"webpack-与-grunt、gulp-的不同","link":"#webpack-与-grunt、gulp-的不同","children":[]},{"level":2,"title":"webpack、rollup、parcel 优劣？","slug":"webpack、rollup、parcel-优劣","link":"#webpack、rollup、parcel-优劣","children":[]},{"level":2,"title":"有哪些常⻅的 Loader?","slug":"有哪些常⻅的-loader","link":"#有哪些常⻅的-loader","children":[]},{"level":2,"title":"有哪些常⻅的 Plugin?","slug":"有哪些常⻅的-plugin","link":"#有哪些常⻅的-plugin","children":[]},{"level":2,"title":"bundle，chunk，module 是什么？","slug":"bundle-chunk-module-是什么","link":"#bundle-chunk-module-是什么","children":[]},{"level":2,"title":"Loader 和 Plugin 的不同？","slug":"loader-和-plugin-的不同","link":"#loader-和-plugin-的不同","children":[]},{"level":2,"title":"webpack 热更新的实现原理","slug":"webpack-热更新的实现原理","link":"#webpack-热更新的实现原理","children":[]},{"level":2,"title":"Babel 的原理是什么？","slug":"babel-的原理是什么","link":"#babel-的原理是什么","children":[]},{"level":2,"title":"git 和 svn 的区别","slug":"git-和-svn-的区别","link":"#git-和-svn-的区别","children":[]},{"level":2,"title":"经常使用的 git 命令？","slug":"经常使用的-git-命令","link":"#经常使用的-git-命令","children":[]},{"level":2,"title":"git pull 和 git fetch 的区别","slug":"git-pull-和-git-fetch-的区别","link":"#git-pull-和-git-fetch-的区别","children":[]},{"level":2,"title":"git rebase 和 git merge 的区别","slug":"git-rebase-和-git-merge-的区别","link":"#git-rebase-和-git-merge-的区别","children":[]}],"relativePath":"web/project.md","lastUpdated":1672363233000}'),p={name:"web/project.md"},r=s('<h1 id="前端工程化面试题" tabindex="-1">前端工程化面试题 <a class="header-anchor" href="#前端工程化面试题" aria-hidden="true">#</a></h1><h2 id="webpack-与-grunt、gulp-的不同" tabindex="-1">webpack 与 grunt、gulp 的不同 <a class="header-anchor" href="#webpack-与-grunt、gulp-的不同" aria-hidden="true">#</a></h2><p>Grunt、Gulp 是基于任务运⾏的⼯具： 它们会⾃动执⾏指定的任务，就像流⽔线，把资源放上去然后通过不同插件进⾏加⼯，它们包含活跃的社区，丰富的插件，能⽅便的打造各种⼯作流。</p><p>Webpack 是基于模块化打包的⼯具: ⾃动化处理模块，webpack 把⼀切当成模块，当 webpack 处理应⽤程序时，它会递归地构建⼀个依赖关系图 (dependency graph)，其中包含应⽤程序需要的每个模块，然后将所有这些模块打包成⼀个或多个 bundle。</p><p>因此这是完全不同的两类⼯具,⽽现在主流的⽅式是⽤npm script 代替 Grunt、Gulp，npm script 同样可以打造任务流。</p><h2 id="webpack、rollup、parcel-优劣" tabindex="-1">webpack、rollup、parcel 优劣？ <a class="header-anchor" href="#webpack、rollup、parcel-优劣" aria-hidden="true">#</a></h2><p>webpack 适⽤于⼤型复杂的前端站点构建: webpack 有强⼤的 loader和插件⽣态,打包后的⽂件实际上就是⼀个⽴即执⾏函数，这个⽴即执⾏函数接收⼀个参数，这个参数是模块对象，键为各个模块的路径，值为模块内容。⽴即执⾏函数内部则处理模块之间的引⽤，执⾏模块等,这种情况更适合⽂件依赖复杂的应⽤开发。</p><p>rollup 适⽤于基础库的打包，如 vue、d3 等: Rollup 就是将各个模块打包进⼀个⽂件中，并且通过 Tree-shaking 来删除⽆⽤的代码, 可以最⼤程度上降低代码体积,但是rollup没有webpack如此多的的如代码分割、按需加载等⾼级功能，其更聚焦于库的打包，因此更适合库的开发。</p><p>parcel 适⽤于简单的实验性项⽬: 他可以满⾜低⻔槛的快速看到效果,但是⽣态差、报错信息不够全⾯都是他的硬伤，除了⼀些玩具项⽬或者实验项⽬不建议使⽤。</p><h2 id="有哪些常⻅的-loader" tabindex="-1">有哪些常⻅的 Loader? <a class="header-anchor" href="#有哪些常⻅的-loader" aria-hidden="true">#</a></h2><ul><li>file-loader：把⽂件输出到⼀个⽂件夹中，在代码中通过相对 URL去引⽤输出的⽂件</li><li>url-loader：和 file-loader 类似，但是能在⽂件很⼩的情况下以base64 的⽅式把⽂件内容注⼊到代码中去</li><li>source-map-loader：加载额外的 Source Map ⽂件，以⽅便断点调试</li><li>image-loader：加载并且压缩图⽚⽂件</li><li>babel-loader：把 ES6 转换成 ES5</li><li>css-loader：加载 CSS，⽀持模块化、压缩、⽂件导⼊等特性</li><li>style-loader：把 CSS 代码注⼊到 JavaScript 中，通过 DOM 操作去加载 CSS。</li><li>eslint-loader：通过 ESLint 检查 JavaScript 代码</li></ul><p>注意：在 Webpack 中，loader 的执行顺序是从右向左执行的。因为webpack 选择了 compose 这样的函数式编程方式，这种方式的表达式执行是从右向左的。</p><h2 id="有哪些常⻅的-plugin" tabindex="-1">有哪些常⻅的 Plugin? <a class="header-anchor" href="#有哪些常⻅的-plugin" aria-hidden="true">#</a></h2><ul><li>define-plugin：定义环境变量</li><li>html-webpack-plugin：简化 html⽂件创建</li><li>uglifyjs-webpack-plugin：通过 UglifyES 压缩 ES6 代码</li><li>webpack-parallel-uglify-plugin: 多核压缩，提⾼压缩速度</li><li>webpack-bundle-analyzer: 可视化 webpack 输出⽂件的体积</li><li>mini-css-extract-plugin: CSS 提取到单独的⽂件中，⽀持按需加载</li></ul><h2 id="bundle-chunk-module-是什么" tabindex="-1">bundle，chunk，module 是什么？ <a class="header-anchor" href="#bundle-chunk-module-是什么" aria-hidden="true">#</a></h2><ul><li>bundle：是由 webpack 打包出来的⽂件；</li><li>chunk：代码块，⼀个 chunk 由多个模块组合⽽成，⽤于代码的合并和分割；</li><li>module：是开发中的单个模块，在 webpack 的世界，⼀切皆模块，⼀个模块对应⼀个⽂件，webpack 会从配置的 entry 中递归开始找出所有依赖的模块。</li></ul><h2 id="loader-和-plugin-的不同" tabindex="-1">Loader 和 Plugin 的不同？ <a class="header-anchor" href="#loader-和-plugin-的不同" aria-hidden="true">#</a></h2><p>不同的作⽤:</p><ul><li>Loader 直译为&quot;加载器&quot;。Webpack 将⼀切⽂件视为模块，但是 webpack原⽣是只能解析 js⽂件，如果想将其他⽂件也打包的话，就会⽤到 loader 。 所以 Loader 的作⽤是让 webpack 拥有了加载和解析⾮JavaScript⽂件的能⼒。</li><li>Plugin 直译为&quot;插件&quot;。Plugin 可以扩展 webpack 的功能，让 webpack具有更多的灵活性。在 Webpack 运⾏的⽣命周期中会⼴播出许多事 件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的API 改变输出结果。</li></ul><p>不同的⽤法:</p><ul><li>Loader 在 module.rules 中配置，也就是说他作为模块的解析规则⽽存在。 类型为数组，每⼀项都是⼀个 Object ，⾥⾯描述了对于什么类型的⽂件（ test ），使⽤什么加载( loader )和使⽤的参数（ options ）</li><li>Plugin在 plugins 中单独配置。类型为数组，每⼀项是⼀个 plugin的实例，参数都通过构造函数传⼊。</li></ul><h2 id="webpack-热更新的实现原理" tabindex="-1">webpack 热更新的实现原理 <a class="header-anchor" href="#webpack-热更新的实现原理" aria-hidden="true">#</a></h2><p>webpack 的热更新⼜称热替换（Hot Module Replacement），缩写为HMR。这个机制可以做到不⽤刷新浏览器⽽将新变更的模块替换掉旧的模块。 <img src="'+n+'" alt=""></p><p>⾸先要知道 server 端和 client 端都做了处理⼯作：</p><p>第⼀步，在 webpack 的 watch 模式下，⽂件系统中某⼀个⽂件发⽣修改，webpack 监听到⽂件变化，根据配置⽂件对模块重新编译打包，并将打包后的代码通过简单的 JavaScript对象保存在内存中。</p><p>第⼆步是 webpack-dev-server 和 webpack 之间的接⼝交互，⽽在这⼀步，主要是 dev-server 的中间件 webpack- dev-middleware和 webpack 之间的交互，webpack-dev-middleware 调⽤ webpack暴露的 API 对代码变化进⾏监 控，并且告诉 webpack，将代码打包到内存中。</p><p>第三步是 webpack-dev-server 对⽂件变化的⼀个监控，这⼀步不同于第⼀步，并不是监控代码变化重新打包。当我们在配置⽂件中配置了 devServer.watchContentBase 为 true 的时候，Server 会监听这些配置⽂件夹中静态⽂件的变化，变化后会通知浏览器端对应⽤进⾏ live reload。注意，这⼉是浏览器刷新，和 HMR 是两个概念。</p><p>第四步也是 webpack-dev-server 代码的⼯作，该步骤主要是通过sockjs（webpack-dev-server 的依赖）在浏览器端和服务端之间建⽴⼀个 websocket ⻓连接，将 webpack 编译打包的各个阶段的状态信息告知浏览器端，同时也包括第三步中 Server 监听静态⽂件变化的信息。浏览器端根据这些 socket 消息进⾏不同的操作。当然服务端传递的最主要信息还是新模块的 hash 值，后⾯的步骤根据这⼀hash 值来进⾏模块热替换。</p><p>webpack-dev-server/client 端并不能够请求更新的代码，也不会执⾏热更模块操作，⽽webpack/hot/dev-server的⼯作就是根据webpack-dev-server/client 传给它的信息以及 dev-server 的配置决定是刷新浏览器呢还是进⾏模块热更新。当然如果仅仅是刷新浏览器，也就没有后⾯那些步骤了。</p><p>HotModuleReplacement.runtime 是客户端 HMR 的中枢，它接收到上⼀步传递给他的新模块的 hash 值，它通过JsonpMainTemplate.runtime 向 server端发送Ajax请求，服务端返回⼀个 json，该 json 包含了所有要更新的模块的 hash 值，获取到更新列表后，该模块再次通过 jsonp 请求，获取到最新的模块代码。这就是上图中 7、8、9 步骤。⽽第 10 步是决定 HMR 成功与否的关键步骤，在该步骤中，HotModulePlugin 将会对新旧模块进⾏对⽐，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引⽤。</p><p>最后⼀步，当 HMR 失败后，回退到 live reload 操作，也就是进⾏浏览器刷新来获取最新打包代码。</p><h2 id="babel-的原理是什么" tabindex="-1">Babel 的原理是什么？ <a class="header-anchor" href="#babel-的原理是什么" aria-hidden="true">#</a></h2><p>babel 的转译过程也分为三个阶段，这三步具体是：</p><ul><li>解析 Parse: 将代码解析⽣成抽象语法树（AST），即词法分析与语法分析的过程；</li><li>转换 Transform: 对于 AST 进⾏变换⼀系列的操作，babel 接受得到 AST 并通过 babel-traverse 对其进⾏遍历，在此过程中进⾏添加、更新及移除等操作</li><li>⽣成 Generate: 将变换后的 AST 再转换为 JS 代码, 使⽤到的模块是 babel-generator。 <img src="'+i+`" alt=""></li></ul><h2 id="git-和-svn-的区别" tabindex="-1">git 和 svn 的区别 <a class="header-anchor" href="#git-和-svn-的区别" aria-hidden="true">#</a></h2><ul><li>git 和 svn 最大的区别在于 git 是分布式的，而 svn 是集中式的。因此我们不能再离线的情况下使用 svn。如果服务器出现问题，就没有办法使用 svn 来提交代码。</li><li>svn 中的分支是整个版本库的复制的一份完整目录，而 git 的分支是指针指向某次提交，因此 git 的分支创建更加开销更小并且分支上的变化不会影响到其他人。svn 的分支变化会影响到所有的人。</li><li>svn 的指令相对于 git 来说要简单一些，比 git 更容易上手。</li><li>GIT 把内容按元数据方式存储，而 SVN 是按文件：因为 git 目录是处于个人机器上的一个克隆版的版本库，它拥有中心版本库上所有的东西，例如标签，分支，版本记录等。</li><li>GIT 分支和 SVN 的分支不同：svn 会发生分支遗漏的情况，而 git 可以同一个工作目录下快速的在几个分支间切换，很容易发现未被合并的分支，简单而快捷的合并这些文件。</li><li>GIT 没有一个全局的版本号，而 SVN 有</li><li>GIT 的内容完整性要优于 SVN：GIT 的内容存储使用的是 SHA-1 哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏</li></ul><h2 id="经常使用的-git-命令" tabindex="-1">经常使用的 git 命令？ <a class="header-anchor" href="#经常使用的-git-命令" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;">                     </span><span style="color:#C3E88D;">//新建git代码库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;">                      </span><span style="color:#C3E88D;">//添加指定文件到暂存区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;">                       </span><span style="color:#C3E88D;">//删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">message</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">//提交暂存区到仓库区</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;">                   </span><span style="color:#C3E88D;">//列出所有分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">     </span><span style="color:#C3E88D;">//新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;">                   </span><span style="color:#C3E88D;">//显示有变更文件的状态</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="git-pull-和-git-fetch-的区别" tabindex="-1">git pull 和 git fetch 的区别 <a class="header-anchor" href="#git-pull-和-git-fetch-的区别" aria-hidden="true">#</a></h2><ul><li>git fetch 只是将远程仓库的变化下载下来，并没有和本地分支合并。</li><li>git pull 会将远程仓库的变化下载下来，并和当前分支合并。</li></ul><h2 id="git-rebase-和-git-merge-的区别" tabindex="-1">git rebase 和 git merge 的区别 <a class="header-anchor" href="#git-rebase-和-git-merge-的区别" aria-hidden="true">#</a></h2><ul><li>git merge 和 git rebase 都是用于分支合并，关键在 commit 记录的处理上不同：</li><li>git merge 会新建一个新的 commit 对象，然后两个分支以前的commit 记录都指向这个新 commit 记录。这种方法会保留之前每个分支的 commit 历史。</li><li>git rebase 会先找到两个分支的第一个共同的 commit 祖先记录，然后将提取当前分支这之后的所有 commit 记录，然后将这个commit 记录添加到目标分支的最新提交后面。经过这个合并后，两个分支合并后的 commit 记录就变为了线性的记录了</li></ul>`,42),t=[r];function c(o,d,u,b,g,h){return a(),l("div",null,t)}const C=e(p,[["render",c]]);export{m as __pageData,C as default};
