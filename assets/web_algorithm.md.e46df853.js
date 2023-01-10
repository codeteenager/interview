import{_ as s,c as n,o as a,a as l}from"./app.06bf573d.js";const b=JSON.parse('{"title":"数据结构与算法","description":"","frontmatter":{},"headers":[{"level":3,"title":"什么是复杂度","slug":"什么是复杂度","link":"#什么是复杂度","children":[]},{"level":2,"title":"为什么要学习数据结构与算法","slug":"为什么要学习数据结构与算法","link":"#为什么要学习数据结构与算法","children":[]},{"level":2,"title":"栈","slug":"栈","link":"#栈","children":[{"level":3,"title":"LeetCode精选题目","slug":"leetcode精选题目","link":"#leetcode精选题目","children":[]}]},{"level":2,"title":"排序算法复杂度","slug":"排序算法复杂度","link":"#排序算法复杂度","children":[]}],"relativePath":"web/algorithm.md","lastUpdated":1672547505000}'),p={name:"web/algorithm.md"},t=l(`<h1 id="数据结构与算法" tabindex="-1">数据结构与算法 <a class="header-anchor" href="#数据结构与算法" aria-hidden="true">#</a></h1><p>数据结构和算法，是大厂前端面试的“拦路虎”。为何要考察呢？如果在短时间之内快速判断一个工程师是否优秀？辨别优秀工程师从鉴别成本和成功率的方面考虑，它的算法不一定是很厉害的，但是是过关的，所以考察算法是最合理的方式 —— 这是业界多年的经验积累。</p><p>另外现在前端的工作范围越来越广，前端可以做服务端、客户端、PC端大型业务系统等，越来越广那么要求越来越高。</p><p>考察的重点：</p><ul><li>算法的时间复杂度和空间复杂度</li><li>三大算法思维：贪心，二分，动态规划</li><li>常见数据结构</li></ul><h3 id="什么是复杂度" tabindex="-1">什么是复杂度 <a class="header-anchor" href="#什么是复杂度" aria-hidden="true">#</a></h3><p>复杂度是程序执行时的计算量和内存空间(和代码是否简介无关)，它是一个数量级(方便记忆、推广)，不是数字。复杂度一般是针对一个具体的算法，这个算法可能是一个函数，而非一个完整的系统。</p><p>数量级用O()来表示，比如：O(1)一次就够(数量级)，O(n)和传输的数据量一样(数量级)，O(n^2)数据量的平方(数量级)，O(logn)数据量的对数(数量级)，O(n<em>logn)数据量</em>数据量的对数(数量级)，其中logn可以理解为一个二分的循环算法。</p><h2 id="为什么要学习数据结构与算法" tabindex="-1">为什么要学习数据结构与算法 <a class="header-anchor" href="#为什么要学习数据结构与算法" aria-hidden="true">#</a></h2><p>当我们通过框架或工具来开发的时候，其实我们对框架或工具的影响度较低，就算我们可以通过配置进行内部的处理，但是核心还是由库和框架决定的。那么我们希望优化我们的程序，那么从哪方面入手呢？这时候我们可以利用数据处理操作优化功能，这里就需要使用数据结构和算法的相关内容。</p><p>那么我们常说数据结构+算法=程序，数据结构我们在开发中比较常用，例如数组，算法常用的像排序算法。利用特定的数据结构和算法对我们的程序书写的复杂度会有一个简化，让代码化繁为简，其次也能提升代码程序的性能，另外也能提升面试通过率。</p><h2 id="栈" tabindex="-1">栈 <a class="header-anchor" href="#栈" aria-hidden="true">#</a></h2><p>栈是一种遵从后进先出原则的有序集合，添加新元素的一端称为栈顶，另一端称为栈底。操作栈的元素时，只能从栈顶操作(添加、移除或取值)。</p><p>栈需要实现以下功能：</p><ul><li>push()入栈方法</li><li>pop()出栈方法</li><li>top()获取栈顶值</li><li>size()获取栈的元素个数</li><li>clear()清空栈</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Stach</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//存储栈的数据</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//记录栈的数据个数(相当于数组的Length)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//push()入栈方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//方式1：数组方法push添加</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//this.data.push(item)</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//方式2：利用数组长度</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//this.data[this.data.length] = item</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//方式3：计数方式</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//入栈后，count自增</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//pop()出栈方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pop</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//出栈的前提是栈中存在元素，应先行检测</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">栈为空!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//移除栈顶数据</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//方式1：数组方法pop移除</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//return this.data.pop();</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//方式2：计数方式</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">delete</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">--this.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//检测栈是否为空</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">isEmpty</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//top()用来获取栈顶值</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">top</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">isEmpty</span><span style="color:#F07178;">())</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">栈为空</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//size()获取元素个数</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//clear()清空栈</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">clear</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><h3 id="leetcode精选题目" tabindex="-1">LeetCode精选题目 <a class="header-anchor" href="#leetcode精选题目" aria-hidden="true">#</a></h3><p>包含min函数的栈</p><h2 id="排序算法复杂度" tabindex="-1">排序算法复杂度 <a class="header-anchor" href="#排序算法复杂度" aria-hidden="true">#</a></h2><table><thead><tr><th>排序算法</th><th>平均时间复杂度</th><th>最好情况</th><th>最坏情况</th><th>空闲复杂度</th><th>排序方式</th><th>稳定性</th></tr></thead><tbody><tr><td>冒泡排序</td><td>O(n^2)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>In-place</td><td>稳定</td></tr><tr><td>选择排序</td><td>O(n^2)</td><td>O(n^2)</td><td>O(n^2)</td><td>O(1)</td><td>In-place</td><td>不稳定</td></tr><tr><td>插入排序</td><td>O(n^2)</td><td>O(n)</td><td>O(n^2)</td><td>O(1)</td><td>In-place</td><td>稳定</td></tr><tr><td>希尔排序</td><td>O(n log n)</td><td>O(n log^2 n)</td><td>O(n log^2 n)</td><td>O(1)</td><td>In-place</td><td>不稳定</td></tr><tr><td>归并排序</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n)</td><td>Out-place</td><td>稳定</td></tr><tr><td>快速排序</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n^2)</td><td>O(logn)</td><td>In-place</td><td>不稳定</td></tr><tr><td>堆排序</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(1)</td><td>In-place</td><td>不稳定</td></tr><tr><td>计数排序</td><td>O(n + K)</td><td>O(n + K)</td><td>O(n + K)</td><td>O(k)</td><td>Out-place</td><td>稳定</td></tr><tr><td>桶排序</td><td>O(n + k)</td><td>O(n + K)</td><td>O(n^2)</td><td>O(n + K)</td><td>Out-place</td><td>稳定</td></tr><tr><td>基数排序</td><td>O(n x k)</td><td>O(n x k)</td><td>O(n x k)</td><td>O(n + K)</td><td>Out-place</td><td>稳定</td></tr></tbody></table>`,20),e=[t];function o(c,r,i,F,y,D){return a(),n("div",null,e)}const u=s(p,[["render",o]]);export{b as __pageData,u as default};