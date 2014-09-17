meteor-bxslider [![Build Status](https://travis-ci.org/zhouzhuojie/meteor-bxslider.svg?branch=master)](https://travis-ci.org/zhouzhuojie/meteor-bxslider)
================

bxSlider-4 for Meteor

```
meteor add rexzh0u:bxslider
```

Current version: 0.4.0

Basic usage
-------------

HTML Markup

```html
<ul class="bxslider">
  <li><img src="/images/pic1.jpg" /></li>
  <li><img src="/images/pic2.jpg" /></li>
  <li><img src="/images/pic3.jpg" /></li>
  <li><img src="/images/pic4.jpg" /></li>
</ul>
```

```javascript
Template.foo.rendered = function() {
    $('.bxslider').bxSlider();
}
```


More
-----------
Official Documentation for [bxSlider](http://bxslider.com/).
