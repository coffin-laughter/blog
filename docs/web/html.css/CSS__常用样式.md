---
title: CSS Public Style
date: 2020-04-22 09:09:34
publish: true
categories:
  - 前端开发
tags:
 - LESS
---

<Boxx/>

## less
```less
// 水平
.margin(x, @left: 5px, @right: @left) {
  margin-left: @left;
  margin-right: @right;
}

.padding(x, @left: 5px, @right: @left) {
  padding-left: @left;
  padding-right: @right;
}

// 垂直
.margin(y, @top: 5px, @bottom: @top) {
  margin-top: @top;
  margin-bottom: @bottom;
}

.padding(y, @top: 5px, @bottom: @top) {
  padding-top: @top;
  padding-bottom: @bottom;
}

// input提示文字颜色
.placeholder(@color: #CCC) {
  &::-webkit-input-placeholder,
  &::-moz-placeholder, 
  &:-ms-input-placeholder,
  &:-moz-placeholder {
    color: @color;
  }
}

// box-sizing
.box-sizing(@box: border-box) {
  box-sizing: @box;
  -webkit-box-sizing: @box;
  -moz-box-sizing: @box;
}

// 圆角
.radius(@size: 5px) {
  border-radius: @size;
  -webkit-border-radius: @size;
  -moz-border-radius: @size;
}

// 三角箭头
.border_sin(){
  width: 0;
    height: 0;
  .border_sin_mod(top);
}
// @_指代任意值
.border_sin_mod(@_){
  overflow: hidden; //IE6 div黑框兼容处理
}
.border_sin_mod(top,@w:5px,@c:black){
    border-width: @w;
    border-style: dashed dashed solid dashed; // IE6 黑色背景颜色兼容处理
    border-color: transparent transparent @c transparent;
}
.border_sin_mod(bottom,@w:5px,@c:black){
    border-width: @w;
    border-style: solid dashed dashed dashed;
    border-color: @c transparent transparent transparent;
}
.border_sin_mod(left,@w:5px,@c:black){
    border-width: @w;
    border-style: dashed solid dashed dashed;
    border-color: transparent @c transparent transparent;
}
.border_sin_mod(right,@w:5px,@c:black){
    border-width: @w;
    border-style: dashed dashed dashed solid;
    border-color: transparent transparent transparent @c;
}

// 图片响应式
.img-response(@width: 100%, @height: auto, @block: inline-block) {
  display: @block;
  width: @width;
  height: @height;
}

// 单行溢出...
.line-omit() {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

// 多行溢出
.lines-omit(@row: 2) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: @row;
  overflow: hidden;
}

// 多行，低版本兼容，需内置一个div标签
.lines-omit-css(@row: 2, @line-height: 25px) {
  line-height: @line-height;
  overflow: hidden;
  > :first-child {
      float: right;
    margin-left: -5px;
    width: 100%;
    word-break: break-all;
  }
  &:before {
    content: '';
    float: left;
    width: 5px;
      height: @line-height * @row;
    }
  &:after {
      content: '... ';
      float: right;
      box-sizing: content-box;
      position: relative;
      top: -@line-height;
      left: 100%;
      margin-left: -50px;
      padding-right: 5px;
      width: 50px;
      height: @line-height;
    text-align: right;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #FFF 40px);
  }
}

// 轮廓/内框(样式, 间距: 负数在内部)
.outline(@style: 1px solid #0FF, @space: -10px) {
  outline: @style;
  outline-offset: @space;
}

// 透明度(show: 0 ~ 1, cp: 0 ~ 100)
.opacity(@show: .4, @cp: @show * 100) {
  filter: alpha(opacity=@cp);
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=@{cp})";
  opacity: @show;
}

// 阴影(水平偏移、垂直偏移、偏移距离、阴影颜色)
.box-shadow(@x: 0, @y: @x, @blur: 0, @color: #000) {
  box-shadow: @arguments;
  -moz-box-shadow: @arguments;
  -webkit-box-shadow: @arguments;
}

// 背景渐变(开始颜色, 结束颜色)
.bg-gradients(@start: #0FF, @end: #9FF) {
  background: -webkit-gradient(linear,0 0, 0 100%,from(@start),to(@end));
  background: -moz-linear-gradient(top, @start, @end);
  filter: ~"progid:DXImageTransform.Microsoft.gradient(startColorstr=@{start}, endColorstr=@{end}, grandientType=0)";
}

// 旋转(角度)
.rotate(@angle: 30deg) {
  transform: rotate(@angle);
  -webkit-transform: rotate(@angle);
  -moz-transform: rotate(@angle);
  -o-transform: rotate(@angle);
  filter: ~"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
}

// 菱形旋转(x缩放比, y缩放比)
.skew(@x: 30deg, @y: @x) {
  transform: skew(@x, @y);
  -webkit-transform: skew(@x, @y);
  -moz-transform: skew(@x, @y);
  -o-transform: skew(@x, @y);
  -ms-transform: skew(@x, @y);
}

// 缩放
.scale(@x: 1.2 ,@y: @x) {
  transform: scale(@x, @y);
  -webkit-transform: scale(@x, @y);
  -moz-transform: scale(@x, @y);
  -o-transform: scale(@x, @y);
  -ms-transform: scale(@x, @y);
}

// 偏移
.translate(@x: 50px, @y: @x){
  transform: translate(@x, @y);
  -webkit-transform: translate(@x, @y);
  -moz-transform: translate(@x, @y);
  -o-transform: translate(@x, @y);
  -ms-transform: translate(@x, @y);
}

// 变形动画(旋转, 缩放, 菱形, 偏移)
.transform(@rotate: 360deg, @scaleX: 1, @scaleY: 1, @skewX: 0, @skewY: 0, @translateX:100px, @translateY: 0px) {
  transform: rotate(@rotate) scale(@scaleX, @scaleY) skew(@skewX, @skewY) translate(@translateX, @translateY);
  -webkit-transform: rotate(@rotate) scale(@scaleX, @scaleY) skew(@skewX, @skewY) translate(@translateX, @translateY);
  -moz-transform: rotate(@rotate) scale(@scaleX, @scaleY) skew(@skewX, @skewY) translate(@translateX, @translateY);
  -o-transform: rotate(@rotate) scale(@scaleX, @scaleY) skew(@skewX, @skewY) translate(@translateX, @translateY);
  -ms-transform: rotate(@rotate) scale(@scaleX, @scaleY) skew(@skewX, @skewY) translate(@translateX, @translateY);
  filter: ~"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
}

// 过渡(CSS属性,过渡时间 延迟 开始时间 )
.transition(@css: all, @time: 2s, @delay: ease, @start: 0) {
  transition: @arguments;
  -webkit-transition: @arguments;
  -moz-transition: @arguments;
  -o-transition: @arguments;
  -ms-transition: @arguments;
}

```
