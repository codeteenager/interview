import{_ as e,c as t,o as a,a as i}from"./app.fbfe15fc.js";const p=JSON.parse('{"title":"网络","description":"","frontmatter":{},"headers":[{"level":2,"title":"POST和GET的区别","slug":"post和get的区别","link":"#post和get的区别","children":[]}],"relativePath":"web/network.md","lastUpdated":1669951835000}'),l={name:"web/network.md"},r=i('<h1 id="网络" tabindex="-1">网络 <a class="header-anchor" href="#网络" aria-hidden="true">#</a></h1><h2 id="post和get的区别" tabindex="-1">POST和GET的区别 <a class="header-anchor" href="#post和get的区别" aria-hidden="true">#</a></h2><ul><li>GET在浏览器回退时是无害的，而POST会再次提交请求</li><li>GET产生的URL地址可以被收藏，而POST不可以</li><li>GET请求会被浏览器主动缓存，而POST不会，除非手动设置</li><li>GET请求只能进行url编码，而POST支持多种编码方式</li><li>GET请求参数会被完整的保留在浏览器历史记录里，而POST参数不会被保留</li><li>GET请求在URL中传送的参数是有长度限制里，而POST没有限制</li><li>对参数的数据类型，GET只接受ASCII字符，而POST没有限制</li><li>GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息</li><li>GET参数通过URL传递，POST放在Request body上</li></ul>',3),o=[r];function s(n,T,_,d,c,h){return a(),t("div",null,o)}const P=e(l,[["render",s]]);export{p as __pageData,P as default};