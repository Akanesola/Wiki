[TOC]
# 环境搭建
### Node.js和Git
* 到[Node.js](http://nodejs.org)官网下载相应平台的[最新版本](http://nodejs.org/download)，一路安装即可。
* Git客户端推荐[cmder](http://cmder.net/),有关cmder的介绍和安装教程可以看这篇文章：[Win下必备神器之Cmder](https://segmentfault.com/a/1190000004408436)

### GitHub账号
GitHub账号请到[GitHub](https://github.com/)官网注册。

### Markdown编辑器
* 学习Markdown语法知识：[Markdown 语法说明](http://www.appinn.com/markdown/)
* 如果你使用[Sublime Text](http://www.sublimetext.com/)作为编辑器，推荐安装MarkdownEditing和Markdown Preview两款插件（直接搜索安装），另外推荐安装Theme-Spacegray主题（直接搜索安装）。
* Window平台的Markdown编辑器推荐[Typora](http://www.typora.io/)和[MarkdownPad](http://markdownpad.com/)，Mac平台的用[Mou](http://25.io/mou/)。另外，还有很多在线编辑器也都挺好用的，可自行[Google](https://www.google.com)。


# 本地工作区建立及连接GitHub
创建XXXX.github.io名称的仓库并创建两个分支：master和hexo，和设置hexo为默认分支。（GitHub使用方法自行学习）

**配置Git账号:**

只需要做一次这个设置。每次Git提交都会使用该信息。它被永远的嵌入到了你的提交中。
`--global` 所有的Git仓库都会使用这个配置。要在特定的项目中使用不同的账号，可在该项目中运行该命令而不要`--global`选项。

```
git config --global user.name "userName"    //GitHub用户名
git config --global user.email "yourEmail"  //GitHub注册邮箱
```

**连接GitHub**

>Git是分布式的代码管理工具,远程的代码管理是基于SSH的.

1. 本机是否有SSH Key
`cd ~/.ssh 或cd .ssh   //检查本机是否有ssh key设置`
如果没有则提示： No such file or directory
如果有则进入~/.ssh路径下（ls查看当前路径文件，rm * 删除所有文件）

2. 开始创建SSH Key
```
cd ~     保证当前路径在”~”下
ssh-keygen -t rsa -C "youremail@example.com"    //Github注册邮件，一般不用设密码。
```
可以在用户主目录里找到.ssh目录，里面有id_rsa和id_rsa.pub两个文件，这两个就是SSH Key的秘钥对，id_rsa是**私钥，不能泄露出去**，id_rsa.pub是**公钥，可以放心地告诉任何人**。

3. Github添加SSH Key
登陆GitHub，打开“Account settings”，“SSH Keys”页面，然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容。
测试ssh keys是否设置成功
```
ssh -T git@github.com     //测试
```
显示如下：
```
The authenticity of host 'github.com (192.30.252.129)' can't be established.
RSA key fingerprint is 16:27:xx:xx:xx:xx:xx:4d:eb:df:a6:48.
Are you sure you want to continue connecting (yes/no)? yes     //确认你是否继续联系，输入yes
Hi xxx! You've successfully authenticated, but GitHub does not provide shell access.     //出现词句话，说明设置成功。
```
参考资料：[Generating SSH keys](https://help.github.com/articles/generating-ssh-keys/)


# Hexo

**安装Hexo**
在安装之前，必须检查电脑中是否已经安装下列应用程序：

- [Node.js](http://nodejs.org/)

- [Git](http://git-scm.com/)
  如果您的电脑中已经安装上述必备程序，接下来只需要使用 npm 即可完成 Hexo 的安装。

  `$ npm install -g hexo-cli`

**Hexo建站**

安装完后，在你喜欢的文件夹内（例如D：\Hexo），点击鼠标右键选择Git bash，输入以下指令：
```
$ hexo init

```
该命令会在目标文件夹内建立网站所需要的所有文件。接下来是安装依赖包：
```
$ npm install

```
这样，我们就已经搭建起本地的Hexo博客了。可以先执行以下命令（在对应文件夹下），然后再浏览器输入localhost:4000查看。
```
$ hexo generate
$ hexo server

```
这个博客只是本地的，别人是浏览不了的，之后需要部署到GitHub上。
参考资料：[Hexo官方文档](https://hexo.io/zh-cn/docs/)

**安装插件**

建议安装

```
npm install hexo-generator-index --save
npm install hexo-generator-archive --save
npm install hexo-generator-category --save
npm install hexo-generator-tag --save
npm install hexo-server --save
npm install hexo-deployer-git --save
npm install hexo-deployer-heroku --save
npm install hexo-deployer-rsync --save
npm install hexo-deployer-openshift --save
npm install hexo-renderer-marked@0.2 --save
npm install hexo-renderer-stylus@0.2 --save
npm install hexo-generator-feed@1 --save
npm install hexo-generator-sitemap@1 --save
```

**安装主题**

安装iissnan的[NexT](http://theme-next.iissnan.com/)主题：

```
cd your-hexo-site
git clone https://github.com/iissnan/hexo-theme-next themes/next
```

修改站点配置文件_config.yml：

```
theme: next
```

详细的安装教程请看：[NexT](http://theme-next.iissnan.com/)


**配置网站**

* 添加页面

$ hexo new page <页面名称>

> categories: /categories
>   archives: /archives
>   tags: /tags
>   about: /about
> schedule: /schedule

这样后，会在source目录下生成对应的文件夹及一个index.md文件。archives和about目录下文件不用修改，需要写about可以直接在index.md文件中进行。
而categories和tags文件则不同，需要修改index.md文件。
Categories:
```
title: categories
date: 2016-11-05 16:10:04
type: "categories"
```
Tags:
```
title: tags
date: 2016-11-05 16:10:18
type: "tags"
```
这样，在刷新分类和标签页面就不会是空白的了。

修改网站配置文件（根目录下_config.yml）
修改主题配置文件（主题目录下_config.yml）


配置参考：[HEXO建站](http://www.joryhe.com/2016-05-17-hexoxo-series-for-site-build-basic.html#)


* SEO优化

更改index.swig文件，文件路径是your-hexo-site\themes\next\layout，将下面代码：
{% block title %} {{ config.title }} {% endblock %}
改成:
{% block title %} {{ config.title }} - {{ theme.description }} {% endblock %}
按照Next进阶设定使用cdn加速js和css，还有google font。
在百度站长提交网站和网站地图。

更多优化参考文章：[Hexo优化](http://www.joryhe.com/categories/ittech/%E7%BD%91%E7%AB%99%E6%8A%80%E6%9C%AF/hexo/HEXO%E4%BC%98%E5%8C%96/)


# 部署网站到GitHub
确定配置好网站后，把Hexo生成代码的源程序部署到GitHub上，便于以后环境变化进行方便再配置。

1. 切换本地分支到hexo上
```
git branch   //查看当前分支，之前要用git init创建.git文件夹
git checkout -b <name>  //创建并切换分支
git branch -d <name>   //删除分支
```

2. 把目录文件提交到本地
```
git init
git add .   //加载全部文件
git commit -m "这里填注释"
git remote add origin 粘贴复制Github库的ssh路径   //连接远程库，更换库时要git remote remove origin
git push -u origin hexo //将本地项目更新到github项目上去(之后直接使用git push origin hexo推送)
```
刷新GitHub仓库可以看到新文件。

## 这里的坑：

如果输入`git remote add origin git@github.com:djqiang（github帐号名）/gitdemo（项目名）.git`
提示出错信息：`fatal: remote origin already exists`.

**解决方法是：**
先输入`git remote remove origin`再输入`git remote add origin git@github.com:djqiang/gitdemo.git`


git commit 这里会出现**index.lock**的问题，在谷歌上找到了解决方法：
```
From a powershell console opened as admin, try
> rm -f ./.git/index.lock
If that does not work, you must kill all git.exe processes
> taskkill /F /IM git.exe
SUCCESS: The process "git.exe" with PID 20448 has been terminated.
SUCCESS: The process "git.exe" with PID 11312 has been terminated.
SUCCESS: The process "git.exe" with PID 23868 has been terminated.
SUCCESS: The process "git.exe" with PID 27496 has been terminated.
SUCCESS: The process "git.exe" with PID 33480 has been terminated.
SUCCESS: The process "git.exe" with PID 28036 has been terminated.
> rm -f ./.git/index.lock
```
**解决方法是：**
如果还是无法删除index.lock，可以多运行几次`taskkill /F /IM git.exe`
如果`rm -f ./.git/index.lock`没反应的话，请手动删除index.lock


git push这里会出现下面的错误：
```
error: failed to push some refs to 'git@github.com:XXXX/XXXX.github.io.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```
**解决方法是：**
这是你会用`git pull origin hexo`如果还是出错，可以使用`git pull origin hexo --allow-unrelated-histories`
成功后，再使用`git push -u origin hexo`就能成功了。


如果出现下面的情况
```
Automatic merge failed; fix conflicts and then commit the result.
```
在发生冲突的地方，Git生成了内容的差异。
修改冲突的部分，重新提交。
```
git add <file name>
git commit -m "合并分支"
git push -u origin master  //提交到分支
```
问题解决参考：
[stackoverflow](http://stackoverflow.com/questions/9282632/git-index-lock-file-exists-when-i-try-to-commit-but-cannot-delete-the-file)
[git无法pull仓库refusing to merge unrelated histories](http://blog.csdn.net/lindexi_gd/article/details/52554159)

## 更新

**更新hexo：**
`npm update -g hexo`
**更新主题：**
```
cd themes/你的主题
git pull
```
**更新插件：**
`npm update`

## 网站静态化并部署GitHub
首先在本地确认网站正常运行
```
hexo g
hexo s (如果4000端口占用可以换个端口hexo s -p 5000)
```
本地运行正常后，需要把静态页面推送到GitHub
```
hexo d -g
```
注意：
首先网站配置文件中要设置好deploy的branch为master；
最好推送到GitHub前用`hexo clean`清理下数据（防止提交上去的不是最终效果）。

# 写博客
执行new命令，生成指定名称的文章至`hexo\source\_posts\postName.md`。
`hexo new [layout] "postName" #新建文章`
其中layout是可选参数，默认值为post。有哪些layout呢，请到scaffolds目录下查看，这些文件名称就是layout名称。当然你可以添加自己的layout，方法就是添加一个文件即可，同时你也可以编辑现有的layout，比如post的layout默认是hexo\scaffolds\post.md
```
title: { { title } }
date: { { date } }
tags:
---
```
*\* 请注意，大括号与大括号之间我多加了个空格，否则会被转义，不能正常显示。*

我想添加categories，以免每次手工输入，只需要修改这个文件添加一行，如下：
```
title: { { title } }
date: { { date } }
categories: 
tags: 
---
```
postName是md文件的名字，同时也出现在你文章的URL中，postName如果包含空格，必须用”将其包围，postName可以为中文。

*\* 注意，所有文件：后面都必须有个空格，不然会报错。*

看一下刚才生成的文件hexo\source\_posts\postName.md，内容如下：
```
title: postName #文章页面上的显示名称，可以任意修改，不会出现在URL中
date: 2013-12-02 15:30:16 #文章生成时间，一般不改，当然也可以任意修改
categories: #文章分类目录，可以为空，注意:后面有个空格
tags: #文章标签，可空，多标签请用格式[tag1,tag2,tag3]，注意:后面有个空格
---
```
这里开始使用markdown格式输入你的正文。
接下来，你就可以用喜爱的编辑器尽情书写你的文章。关于markdown语法，可以参考我的文章[Markdown简明语法](http://bruce-sha.github.io/2013/11/26/markdown/)。

**fancybox**
可能有人对这个Reading页面中图片的fancybox效果感兴趣，这个是怎么做的呢。
很简单，只需要在你的文章*.md文件的头上添加photos项即可，然后一行行添加你要展示的照片：
```
title: 我的阅历
date: 2085-01-16 07:33:44
tags: [hexo]
photos:
- http://bruce.u.qiniudn.com/2013/11/27/reading/photos-0.jpg
- http://bruce.u.qiniudn.com/2013/11/27/reading/photos-1.jpg
```

不想每次都手动添加怎么办？同样的，打开您的hexo\scaffolds\photo.md
```
layout: { { layout } }
title: { { title } }
date: { { date } }
tags: 
photos: 
- 
---
```
然后每次可以执行带layout的new命令生成照片文章：

hexo new photo "photoPostName" #新建照片文章
description
markdown文件头中也可以添加description，以覆盖全局配置文件中的description内容，请参考下文_config.yml的介绍。
```
title: hexo你的博客
date: 2013-11-22 17:11:54
categories: default
tags: [hexo]
description: 你对本页的描述
---
```
hexo默认会处理全部markdown和html文件，如果不想让hexo处理你的文件，可以在文件头中加入layout: false。

**文章摘要**
在需要显示摘要的地方添加如下代码即可：
```
以上是摘要
<!--more-->
以下是余下全文
```
more以上内容即是文章摘要，在主页显示，more以下内容点击『> Read More』链接打开全文才显示。

*\* hexo中所有文件的编码格式均是UTF-8。*

**写完文章用`hexo d -g`刷新下，就能看到博文了。**

*\* 以上内容摘于：[hexo你的博客](http://ibruce.info/2013/11/22/hexo-your-blog/)*


**扩展：关于图床**
图床推荐使用[七牛云存储](http://www.qiniu.com/)（免费版有1G空间），另外配合[MPic](http://mpic.lzhaofu.cn/)图床工具（免费）使用,得到近乎完美体验！


# 关于日常的改动流程

在本地对博客进行修改（添加新博文、修改样式等等）后，通过下面的流程进行管理。

1. 依次执行
```
git add .
git commit -m "..."
git push origin hexo
```
指令将改动推送 到GitHub（**此时当前分支应为hexo**）；
2. 然后才执行hexo g -d发布网站到master分支上。

*虽然两个过程顺序调转一般不会有问题，不过逻辑上这样的顺序是绝对没问题的。*

**本地资料丢失后(更换工作环境)的流程**

当重装电脑或换了新的环境之后，或者想在其他电脑上修改博客，可以使用下列步骤：
1. 使用git clone git@github.com:XXXX/XXXX.github.io.git拷贝仓库（**默认分支为hexo**）；
2. 在本地新拷贝的http://XXXX.github.io文件夹下通过Git bash依次执行下列指令：
```
npm install hexo
npm install
npm install hexo-deployer-git
```
**记得，不需要hexo init这条指令**



参考目录：
[GitHub Pages + Hexo搭建博客](http://crazymilk.github.io/2015/12/28/GitHub-Pages-Hexo%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/#more)

[HEXO建站-基本设置](http://www.joryhe.com/2016-05-17-hexoxo-series-for-site-build-basic.html#)

[Hexo升级之坑](http://www.tuicool.com/articles/IfIRVv2)


# 扩展阅读

## 目录介绍

默认目录结构：
```
.
├── .deploy
├── public
├── scaffolds
├── scripts
├── source
|   ├── _drafts
|   └── _posts
├── themes
├── _config.yml
└── package.json
```
* .deploy：执行hexo deploy命令部署到GitHub上的内容目录
* public：执行hexo generate命令，输出的静态网页内容目录
* scaffolds：layout模板文件目录，其中的md文件可以添加编辑
* scripts：扩展脚本目录，这里可以自定义一些javascript脚本
* source：文章源码目录，该目录下的markdown和html文件均会被hexo处理。该页面对应repo的根目录，404文件、favicon.
* ico文件，CNAME文件等都应该放这里，该目录下可新建页面目录。
    _drafts：草稿文章
    _posts：发布文章
* themes：主题文件目录
* _config.yml：全局配置文件，大多数的设置都在这里
* package.json：应用程序数据，指明hexo的版本等信息，类似于一般软件中的关于按钮

## 关于_config.yml
```
# Hexo Configuration
## Docs: http://zespia.tw/hexo/docs/configure.html
## Source: https://github.com/tommy351/hexo/

# Site #整站的基本信息
title: 不如 #网站标题
subtitle: 码农，程序猿，未来的昏析师 #网站副标题
description: bruce sha's blog | java | scala | bi #网站描述，给搜索引擎用的，在生成html中的head->meta中可看到
author: bruce #网站作者，在下方显示
email: bu.ru@qq.com #联系邮箱
language: zh-CN #语言

# URL #域名和文件结构
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://ibruce.info #你的域名
root: /
permalink: :year/:month/:day/:title/
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code

# Writing #写文章选项
new_post_name: :title.md # File name of new posts
default_layout: post #默认layout方式
auto_spacing: false # Add spaces between asian characters and western characters
titlecase: false # Transform title into titlecase
external_link: true # Open external links in new tab
max_open_file: 100
multi_thread: true
filename_case: 0
render_drafts: false
highlight: #代码高亮
  enable: true #是否启用
  line_number: false #是否显示行号
  tab_replace:

# Category & Tag #分类与标签
default_category: uncategorized # default
category_map:
tag_map:

# Archives #存档，这里的说明好像不对。全部选择1，这个选项与主题中的选项有时候会有冲突
## 2: Enable pagination
## 1: Disable pagination
## 0: Fully Disable
archive: 1
category: 1
tag: 1

# Server #本地服务参数
## Hexo uses Connect as a server
## You can customize the logger format as defined in
## http://www.senchalabs.org/connect/logger.html
port: 4000
logger: true
logger_format:

# Date / Time format #日期显示格式
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: MMM D YYYY
time_format: H:mm:ss

# Pagination #分页设置
## Set per_page to 0 to disable pagination
per_page: 10 #每页10篇文章
pagination_dir: page

# Disqus #社会化评论disqus，我使用多说，在主题中配置
disqus_shortname:

# Extensions #插件，暂时未安装插件
## Plugins: https://github.com/tommy351/hexo/wiki/Plugins
## Themes: https://github.com/tommy351/hexo/wiki/Themes
## 主题
theme: modernist # raytaylorism # pacman # modernist # light
exclude_generator:

# Deployment #部署
## Docs: http://zespia.tw/hexo/docs/deploy.html
deploy:
  type: github
  repository: git@github.com:bruce-sha/bruce-sha.github.com.git #你的GitHub Pages仓库
修改局部页面
```
页面展现的全部逻辑都在每个主题中控制，源代码在hexo\themes\你使用的主题\中，以modernist主题为例：
```
.
├── languages          #多语言
|   ├── default.yml    #默认语言
|   └── zh-CN.yml      #中文语言
├── layout             #布局，根目录下的*.ejs文件是对主页，分页，存档等的控制
|   ├── _partial       #局部的布局，此目录下的*.ejs是对头尾等局部的控制
|   └── _widget        #小挂件的布局，页面下方小挂件的控制
├── source             #源码
|   ├── css            #css源码 
|   |   ├── _base      #*.styl基础css
|   |   ├── _partial   #*.styl局部css
|   |   ├── fonts      #字体
|   |   ├── images     #图片
|   |   └── style.styl #*.styl引入需要的css源码
|   ├── fancybox       #fancybox效果源码
|   └── js             #javascript源代码
├── _config.yml        #主题配置文件
└── README.md          #用GitHub的都知道
```
如果你需要修改头部，直接修改hexo\themes\modernist\layout\_partial\header.ejs，比如头上加个搜索框：
```
<div>
<form class="search" action="//google.com/search" method="get" accept-charset="utf-8">
 <input type="search" name="q" id="search" autocomplete="off" autocorrect="off" autocapitalize="off" maxlength="20" placeholder="Search" />
 <input type="hidden" name="q" value="site:<%- config.url.replace(/^https?:\/\//, '') %>">
</form>
</div>
```
将如上代码加入即可，您需要修改css以便这个搜索框比较美观。

再如，你要修改页脚版权信息，直接编辑hexo\themes\modernist\layout\_partial\footer.ejs。同理，你需要修改css，直接去修改对应位置的styl文件。

*\* 以上内容摘于：[hexo你的博客](http://ibruce.info/2013/11/22/hexo-your-blog/)*