## 关于

* 此程序基于[wiki-in-box](https://github.com/dmscode/Wiki-in-box),并进行了一些定制和修改。
    * 添加Header位置的导航栏；
    * 修改Wiki-in-box中Data目录下md文件不能使用中文问题；
    * Markdown样式使用：[github-markdown-css](https://github.com/sindresorhus/github-markdown-css)
    * 重新定义`TOC`目录位置和样式；
    * 添加回到顶端按钮。
    * 建议开启Markdown回车换行（index.html第109行中`breaks`设置为`true`，即`breaks: true,`）

* 说明
在`index.html`中`168`行左右修改导航链接。
```html
<div class="navlist">
     <ul>
         <li><a href="./index.html" title="My Wiki">主页</a></li>
         <li><a href="#" title="作品标题" target="_blank">作品</a></li>
         <li><a href="#" title="博客标题" target="_blank">博客</a></li>
         <li><a href="./index.html?name=about" title="关于标题">关于</a></li>
     </ul>
</div>
```


---

*By LIng.*
*2016.11.29*

*Power by [Wiki-in-box](https://github.com/dmscode/Wiki-in-box)*
*Customized by[LIng.](https://coding.net/u/Akanesola/p/Wiki)*




