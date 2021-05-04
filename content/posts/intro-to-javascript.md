---
title: An Intro To JavaScript
date: 2020-07-07
published: true
tags: ['Markdown', 'Cover Image']
series: false
cover_image: ./images/intro-to-js-img.jpg
canonical_url: false
description: "JavaScript is a client-side scripting language developed by Brendan Eich. JavaScript can be run on any operating systems and almost all web browsers. You need a text editor to write JavaScript code and a browser to display your web page."
---

### Why is it called JavaScript?
When JavaScript was created, it initially had another name: “LiveScript”. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.

But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all.

<!-- ![Image](./images/intro-to-js-img.jpg) -->
### What can in-browser JavaScript do?

Modern JavaScript is a “safe” programming language. It does not provide low-level access to memory or CPU, because it was initially created for browsers which do not require it.

JavaScript’s capabilities greatly depend on the environment it’s running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.

In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the webserver.

#
### Example

<!-- HTML generated using hilite.me --><div style="background: #202020; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #6ab825; font-weight: bold">let</span> <span style="color: #d0d0d0">map</span> <span style="color: #d0d0d0">=</span> <span style="color: #6ab825; font-weight: bold">new</span> <span style="color: #d0d0d0">Map();</span>

<span style="color: #d0d0d0">map.set(</span><span style="color: #ed9d13">&#39;1&#39;</span><span style="color: #d0d0d0">,</span> <span style="color: #ed9d13">&#39;str1&#39;</span><span style="color: #d0d0d0">);</span>   <span style="color: #999999; font-style: italic">// a string key</span>
<span style="color: #d0d0d0">map.set(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">,</span> <span style="color: #ed9d13">&#39;num1&#39;</span><span style="color: #d0d0d0">);</span>     <span style="color: #999999; font-style: italic">// a numeric key</span>
<span style="color: #d0d0d0">map.set(</span><span style="color: #6ab825; font-weight: bold">true</span><span style="color: #d0d0d0">,</span> <span style="color: #ed9d13">&#39;bool1&#39;</span><span style="color: #d0d0d0">);</span> <span style="color: #999999; font-style: italic">// a boolean key</span>

<span style="color: #999999; font-style: italic">// remember the regular Object? it would convert keys to string</span>
<span style="color: #999999; font-style: italic">// Map keeps the type, so these two are different:</span>
<span style="color: #d0d0d0">alert(</span> <span style="color: #d0d0d0">map.get(</span><span style="color: #3677a9">1</span><span style="color: #d0d0d0">)</span>   <span style="color: #d0d0d0">);</span> <span style="color: #999999; font-style: italic">// &#39;num1&#39;</span>
<span style="color: #d0d0d0">alert(</span> <span style="color: #d0d0d0">map.get(</span><span style="color: #ed9d13">&#39;1&#39;</span><span style="color: #d0d0d0">)</span> <span style="color: #d0d0d0">);</span> <span style="color: #999999; font-style: italic">// &#39;str1&#39;</span>

<span style="color: #d0d0d0">alert(</span> <span style="color: #d0d0d0">map.size</span> <span style="color: #d0d0d0">);</span> <span style="color: #999999; font-style: italic">// 3</span>
</pre></div>

#

### Another Example :

        function sumAll(...args) { // args is the name for the array
        let sum = 0;

         for (let arg of args) sum += arg;

        return sum;
        }

        alert( sumAll(1) ); // 1
        alert( sumAll(1, 2) ); // 3
        alert( sumAll(1, 2, 3) ); // 6


>Hope this helped