---
title: 基本markdown语法测试
---
## markdown测试文件

```markdown
## 标题2
### 标题3
#### 标题4
##### 标题5
```

### 文本样式

```markdown
**加粗**  __斜体__  _斜体_  *斜体*  ~~划线~~
> 引用文本
```

**加粗**  __斜体__  _斜体_  *斜体*  ~~划线~~
> 引用文本

### 列表样式

```markdown
* 列表
* 列表
* 列表

- 列表
- 列表
- 列表
 
+ 列表
+ 列表
+ 列表
```

* 列表
* 列表
* 列表
- 列表
- 列表
- 列表
+ 列表
+ 列表
+ 列表

```markdown
- 项目
  * 项目
    + 项目

1. 项目1
2. 项目2
3. 项目3

- [ ] 计划任务
- [x] 完成任务
```

- 项目
  * 项目
    + 项目

1. 项目1
2. 项目2
3. 项目3

- [ ] 计划任务
- [x] 完成任务

### 链接和图片

[link-delicate](http://localhost:4000/delicate)

![测试-付款码](https://z3.ax1x.com/2021/11/15/IgcqH0.jpg)

### 代码块

内联代码块:`code`


```
var foo = 'bar';
```

```javascript
// An highlighted block
var foo = 'bar';
```

### 表格

> 表格与上下文字需要隔一行。

| Column 1 | Column 2      |
|:--------:| -------------:|
| centered 文本居中 | right-aligned 文本居右 |
| centered 文本居中 | right-aligned 文本居右 |
| centered 文本居中 | right-aligned 文本居右 |
| centered 文本居中 | right-aligned 文本居右 |
---
### 代码里的code颜色
> 常用于记录代码或文字的更替

```diff
+ this will be highlighted in green
- this will be highlighted in red
```
