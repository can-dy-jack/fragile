"use strict";(self.webpackChunkkartjim=self.webpackChunkkartjim||[]).push([[836],{3691:(e,a,t)=>{t.r(a),t.d(a,{data:()=>l});const l={key:"v-49da567b",path:"/front-end/rgba2hsv.html",title:"rgb and hsv",lang:"zh",frontmatter:{title:"rgb and hsv"},excerpt:"",headers:[{level:2,title:"RGB",slug:"rgb",children:[{level:3,title:"RGB的局限性",slug:"rgb的局限性",children:[]}]},{level:2,title:"HSV and HSL",slug:"hsv-and-hsl",children:[{level:3,title:"HSV",slug:"hsv",children:[]},{level:3,title:"HSL",slug:"hsl",children:[]}]},{level:2,title:"HSV and RGB",slug:"hsv-and-rgb",children:[]}],filePathRelative:"front-end/rgba2hsv.md",git:{updatedTime:1638453045e3,contributors:[{name:"can-dy-jack",email:"jjack_chen3@163.com",commits:2}]}}},7501:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});const l=(0,t(6252).uE)('<h2 id="rgb" tabindex="-1"><a class="header-anchor" href="#rgb" aria-hidden="true">#</a> RGB</h2><blockquote><p>在图像处理中，最常用的颜色空间是RGB模型，常用于颜色显示和图像处理。</p></blockquote><p><img src="https://cdn.jsdelivr.net/gh/can-dy-jack/vuepress@master/images/rgb.jpeg" alt="HSV"></p><p>原点到白色顶点的中轴线是灰度线，r、g、b三分量相等，强度可以由三分量的向量表示。<br> 用RGB来理解色彩、深浅、明暗变化：</p><ul><li>色彩变化：三个坐标轴RGB最大分量顶点与黄紫青YMC色顶点的连线。</li><li>深浅变化：RGB顶点和CMY顶点到原点和白色顶点的中轴线的距离。</li><li>明暗变化：中轴线的点的位置，到原点，就偏暗，到白色顶点就偏亮。</li></ul><div class="custom-container tip"><p class="custom-container-title">三原色RGB混合能形成其他的颜色</p><p>并不是说物理上其他颜色的光是由三原色的光混合形成的， 每种单色光都有自己独特的光谱，如黄光是一种单色光，但红色与绿色混合能形成黄色，原因是人的感官系统所致，与人的生理系统有关。</p></div><h3 id="rgb的局限性" tabindex="-1"><a class="header-anchor" href="#rgb的局限性" aria-hidden="true">#</a> RGB的局限性</h3><p>在图像处理中使用较多的是 HSV 颜色空间，它比 RGB 更接近人们对彩色的感知经验。非常直观地表达颜色的色调、鲜艳程度和明暗程度，方便进行颜色的对比。</p><p>RGB颜色空间是图像处理中最基本、最常用、面向硬件的颜色空间,比较容易理解;却并不适合于图像处理。</p><h2 id="hsv-and-hsl" tabindex="-1"><a class="header-anchor" href="#hsv-and-hsl" aria-hidden="true">#</a> HSV and HSL</h2><h3 id="hsv" tabindex="-1"><a class="header-anchor" href="#hsv" aria-hidden="true">#</a> HSV</h3><blockquote><p>而HSV模型，是针对用户观感的一种颜色模型，侧重于色彩表示，什么颜色、深浅如何、明暗如何。</p></blockquote><p><img src="https://cdn.jsdelivr.net/gh/can-dy-jack/vuepress@master/images/HSV.jpg" alt="HSV"></p><p>这个模型就是按色彩、深浅、明暗来描述的。</p><ul><li>Hue（色调、色相）</li><li>Saturation（饱和度、色彩纯净度）</li><li>Value（明度）</li></ul><blockquote><p>在图像处理中使用较多的是 HSV 颜色空间，它比 RGB 更接近人们对彩色的感知经验。非常直观地表达颜色的色调、鲜艳程度和明暗程度，方便进行颜色的对比。</p></blockquote><h3 id="hsl" tabindex="-1"><a class="header-anchor" href="#hsl" aria-hidden="true">#</a> HSL</h3><p><img src="https://cdn.jsdelivr.net/gh/can-dy-jack/vuepress@master/images/HSL.jpg" alt="HSL"></p><blockquote><p>HLS 和 HSV 比较类似,HLS 也有三个分量，hue（色相）、saturation（饱和度）、lightness（亮度）。</p></blockquote><p>HLS 和 HSV 的区别就是最后一个分量不同，HLS 的是 light（亮度），HSV 的是 value（明度）。HLS 中的 L 分量为亮度，亮度为100，表示白色，亮度为0，表示黑色；HSV 中的 V 分量为明度，明度为100，表示光谱色，明度为0，表示黑色。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>提取白色物体时，使用 HLS 更方便，因为 HSV 中的Hue里没有白色，白色需要由S和V共同决定（S=0, V=100）。<br> 而在 HLS 中，白色仅由亮度L一个分量决定。所以检测白色时使用 HSL 颜色空间更准确。</p></div><h2 id="hsv-and-rgb" tabindex="-1"><a class="header-anchor" href="#hsv-and-rgb" aria-hidden="true">#</a> HSV and RGB</h2><div class="custom-container tip"><p class="custom-container-title">百度百科</p><p>HSV对用户来说是一种直观的颜色模型。我们可以从一种纯色彩开始，即指定色彩角H，并让V=S=1，然后我们可以通过向其中加入黑色和白色来得到我们需要的颜色。 增加黑色可以减小V而S不变，同样增加白色可以减小S而V不变。例如，要得到深蓝色，V=0.4 S=1 H=240度。要得到淡蓝色，V=1 S=0.4 H=240度。</p></div>',23),r={},i=(0,t(3744).Z)(r,[["render",function(e,a){return l}]])},3744:(e,a)=>{a.Z=(e,a)=>{const t=e.__vccOpts||e;for(const[e,l]of a)t[e]=l;return t}}}]);