import{_ as s,c as n,o as a,a as l}from"./app.427087a9.js";const i=JSON.parse('{"title":"vbenComponent","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u539F\u7406","slug":"\u539F\u7406","link":"#\u539F\u7406","children":[]},{"level":3,"title":"\u4F7F\u7528\u65B9\u6CD5","slug":"\u4F7F\u7528\u65B9\u6CD5","link":"#\u4F7F\u7528\u65B9\u6CD5","children":[]}],"relativePath":"component/introduction.md","lastUpdated":1667575040000}'),p={name:"component/introduction.md"},o=l(`<h1 id="vbencomponent" tabindex="-1">vbenComponent <a class="header-anchor" href="#vbencomponent" aria-hidden="true">#</a></h1><blockquote><p>\u7531\u4E8E\u7EC4\u4EF6\u5E93\u8D8A\u6765\u8D8A\u591A\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u4EBA\u5E0C\u671B\u4F7F\u7528\u7684\u7EC4\u4EF6\u5E93\u4E0D\u540C\uFF0C\u6240\u4EE5\u63A8\u51FAVbenComponent<br> Table\u7EC4\u4EF6\u4F7F\u7528vxe-table<br> \u4E0D\u540C\u7EC4\u4EF6\u5E93\u7684\u7EC4\u4EF6\u53C2\u6570\uFF0C\u5904\u7406\u903B\u8F91\uFF0C\u4E8B\u4EF6\u53EF\u80FD\u4E0D\u540C\uFF0C\u4F1A\u6709\u517C\u5BB9\u95EE\u9898\uFF0C\u4F46\u662F\u5904\u7406\u8D77\u6765\u5E76\u4E0D\u96BE</p></blockquote><h3 id="\u539F\u7406" tabindex="-1">\u539F\u7406 <a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a></h3><p>\u5728\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u5E93\u7EC4\u4EF6\u4E0A\u8FDB\u884C\u5C01\u88C5\uFF0C\u5E76\u505A\u529F\u80FD\u6269\u5C55\u3002</p><blockquote><p>vbenComponent\u7EC4\u4EF6\u9ED8\u8BA4\u5168\u5C40\u6CE8\u518C<br> vbenComponent\u7EC4\u4EF6\u5E95\u5C42\u4F9D\u7136\u662F\u7B2C\u4E09\u65B9\u7EC4\u4EF6\uFF0C\u652F\u6301\u539F\u7EC4\u4EF6\u7684\u53C2\u6570\uFF0Capi\u7B49</p></blockquote><h3 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1">\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>\u7EC4\u4EF6\u5F15\u5165\u53CA\u6CE8\u518C</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// apps/admin/init-components.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5F15\u5165naive button</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">NButton</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">naive-ui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;">// \u5F15\u5165antdv Card</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">Card</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ant-design-vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5C06\u7EC4\u4EF6\u6CE8\u518C\u5230vbenComponent</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">initVbenComponent</span><span style="color:#A6ACCD;">(app</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">Button</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> NButton</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">Card</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Card</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>VbenButton\u7EC4\u4EF6\u4EE3\u7801</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">name</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">VbenButton</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;">// packages/vbenComponent/src/button/src/Button.vue</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">maps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;">//\u83B7\u53D6Button\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Button </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> maps</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!--  \u4F7F\u7528v-bind\u63A5\u53D7\u7EC4\u4EF6\u53C2\u6570 \u5E76\u904D\u5386slot--&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!-- VbenButton\u7EC4\u4EF6\u6CA1\u6709\u505A\u529F\u80FD\u6269\u5C55\uFF0C\u6240\u4EE5\u63A5\u53D7\u539F\u7EC4\u4EF6\u53C2\u6570--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$attrs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #[</span><span style="color:#C792EA;">item</span><span style="color:#89DDFF;">]=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;"> in </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$slots</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">slot</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-bind</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;"> || {}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">slot</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u7EC4\u4EF6\u4F7F\u7528</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!--  naive\u7684button--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VbenButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">naive\u7684button</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">VbenButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;">&lt;!--  antdv\u7684card--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VbenCard</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">antdv\u7684\u5361\u7247</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#FFCB6B;">VbenCard</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,12),t=[o];function e(c,r,D,F,y,C){return a(),n("div",null,t)}const u=s(p,[["render",e]]);export{i as __pageData,u as default};
