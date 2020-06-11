/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"	"===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){A[b]=!1,ba()},d.onload=function(){A[b]=1===d.width,ba()},d.src=c,"pending"}function f(){M=!1,P=a.devicePixelRatio,N={},O={},s.DPR=P||1,Q.width=Math.max(a.innerWidth||0,z.clientWidth),Q.height=Math.max(a.innerHeight||0,z.clientHeight),Q.vw=Q.width/100,Q.vh=Q.height/100,r=[Q.height,Q.width,P].join("-"),Q.em=s.getEmValue(),Q.rem=Q.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===B.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||aa(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),X.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):Y.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):X.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(T),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(U),m>=l)return n;g=c(V),h=[],","===g.slice(-1)?(g=g.replace(W,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=!1,u=function(){},v=b.createElement("img"),w=v.getAttribute,x=v.setAttribute,y=v.removeAttribute,z=b.documentElement,A={},B={algorithm:""},C="data-pfsrc",D=C+"set",E=navigator.userAgent,F=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,G="currentSrc",H=/\s+\+?\d+(e\d+)?w/,I=/(\([^)]+\))?\s*(.+)/,J=a.picturefillCFG,K="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",L="font-size:100%!important;",M=!0,N={},O={},P=a.devicePixelRatio,Q={px:1,"in":96},R=b.createElement("a"),S=!1,T=/^[ \t\n\r\u000c]+/,U=/^[, \t\n\r\u000c]+/,V=/^[^ \t\n\r\u000c]+/,W=/[,]+$/,X=/^\d+$/,Y=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Z=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},$=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},_=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=$(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in N))if(N[b]=!1,d&&(e=b.match(a)))N[b]=e[1]*Q[e[2]];else try{N[b]=new Function("e",c(b))(Q)}catch(f){}return N[b]}}(),aa=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},ba=function(a){if(t){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),S=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}}};o=a.console&&console.warn?function(a){console.warn(a)}:u,G in v||(G="src"),A["image/jpeg"]=!0,A["image/gif"]=!0,A["image/png"]=!0,A["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in v,s.supSizes="sizes"in v,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){v.srcset="data:,a",a.src="data:,a",s.supSrcset=v.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.supSrcset&&!s.supSizes?!function(){var a="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",c="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",d=b.createElement("img"),e=function(){var a=d.width;2===a&&(s.supSizes=!0),q=s.supSrcset&&!s.supSizes,t=!0,setTimeout(ba)};d.onload=e,d.onerror=e,d.setAttribute("sizes","9px"),d.srcset=c+" 1w,"+a+" 9w",d.src=c}():t=!0,s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=B,s.DPR=P||1,s.u=Q,s.types=A,s.setSize=u,s.makeUrl=$(function(a){return R.href=a,R.href}),s.qsa=function(a,b){return"querySelector"in a?a.querySelectorAll(b):[]},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?_(a):!0},s.calcLength=function(a){var b=_(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?A[a]:!0},s.parseSize=$(function(a){var b=(a||"").match(I);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=z.style.cssText,e=a.style.cssText;c.style.cssText=K,z.style.cssText=L,a.style.cssText=L,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),z.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in O)||B.uT){var b=s.calcLength(n(a));O[a]=b?b:Q.width}return O[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)aa(b[c],a.sizes)}return b},s.setRes.res=aa,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[G],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=F&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=w.call(a,"src"),j.src?x.call(a,C,j.src):y.call(a,C)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=w.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:w.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&H.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g&&!s.supSizes),h&&s.supSrcset&&!j.supported&&(e?(x.call(a,D,e),a.srcset=""):y.call(a,D)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!S||M||P!==a.devicePixelRatio)&&f()},s.supPicture?(ba=u,s.fillImg=u):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=z.clientHeight,i=function(){M=Math.max(a.innerWidth||0,z.clientWidth)!==Q.width||z.clientHeight!==h,h=z.clientHeight,M&&s.fillImgs()};Z(a,"resize",g(i,99)),Z(b,"readystatechange",e)}(),s.picturefill=ba,s.fillImgs=ba,s.teardownRun=u,ba._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(B[b]=a[0],S&&s.fillImgs({reselect:!0}))}};for(;J&&J.length;)a.picturefillCFG.push(J.shift());a.picturefill=ba,"object"==typeof module&&"object"==typeof module.exports?module.exports=ba:"function"==typeof define&&define.amd&&define("picturefill",function(){return ba}),s.supPicture||(A["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);

/*!
 * GSAP 3.2.6
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function _inheritsLoose(t, e) {
    (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
  }
  function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function n(t) {
    return "string" == typeof t;
  }
  function o(t) {
    return "function" == typeof t;
  }
  function p(t) {
    return "number" == typeof t;
  }
  function q(t) {
    return void 0 === t;
  }
  function r(t) {
    return "object" == typeof t;
  }
  function s(t) {
    return !1 !== t;
  }
  function t() {
    return "undefined" != typeof window;
  }
  function u(t) {
    return o(t) || n(t);
  }
  function K(t) {
    return (l = pt(t, at)) && ie;
  }
  function L(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  }
  function M(t, e) {
    return !e && console.warn(t);
  }
  function N(t, e) {
    return (t && (at[t] = e) && l && (l[t] = e)) || at;
  }
  function O() {
    return 0;
  }
  function Y(t) {
    var e,
      i,
      n = t[0];
    if ((r(n) || o(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
      for (i = dt.length; i-- && !dt[i].targetTest(n); );
      e = dt[i];
    }
    for (i = t.length; i--; ) (t[i] && (t[i]._gsap || (t[i]._gsap = new Ft(t[i], e)))) || t.splice(i, 1);
    return t;
  }
  function Z(t) {
    return t._gsap || Y(yt(t))[0]._gsap;
  }
  function $(t, e) {
    var r = t[e];
    return o(r) ? t[e]() : (q(r) && t.getAttribute(e)) || r;
  }
  function _(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function aa(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function ba(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
    return i < r;
  }
  function ca(t, e, r) {
    var i,
      n = p(t[1]),
      a = (n ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[a];
    if ((n && (o.duration = t[1]), (o.parent = r), e)) {
      for (i = o; r && !("immediateRender" in i); ) (i = r.vars.defaults || {}), (r = s(r.vars.inherit) && r.parent);
      (o.immediateRender = s(i.immediateRender)), e < 2 ? (o.runBackwards = 1) : (o.startAt = t[a - 1]);
    }
    return o;
  }
  function da() {
    var t,
      e,
      r = ot.length,
      i = ot.slice(0);
    for (ut = {}, t = ot.length = 0; t < r; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function ea(t, e, r, i) {
    ot.length && da(), t.render(e, r, i), ot.length && da();
  }
  function fa(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(nt).length < 2 ? e : t;
  }
  function ga(t) {
    return t;
  }
  function ha(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function ia(t, e) {
    for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
  }
  function ka(t, e) {
    for (var i in e) t[i] = r(e[i]) ? ka(t[i] || (t[i] = {}), e[i]) : e[i];
    return t;
  }
  function la(t, e) {
    var r,
      i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  }
  function ma(t) {
    var e = t.parent || F,
      r = t.keyframes ? ia : ha;
    if (s(t.inherit)) for (; e; ) r(t, e.vars.defaults), (e = e.parent);
    return t;
  }
  function pa(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      a = e._next;
    n ? (n._next = a) : t[r] === e && (t[r] = a), a ? (a._prev = n) : t[i] === e && (t[i] = n), (e._next = e._prev = e.parent = null);
  }
  function qa(t, e) {
    !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t), (t._act = 0);
  }
  function ra(t) {
    for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
    return t;
  }
  function ua(t) {
    return t._repeat ? _t(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function wa(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  }
  function xa(t) {
    return (t._end = aa(t._start + (t._tDur / Math.abs(t._ts || t._rts || B) || 0)));
  }
  function ya(t, e) {
    var r;
    if (((e._time || (e._initted && !e._dur)) && ((r = wa(t.rawTime(), e)), (!e._dur || gt(0, e.totalDuration(), r) - e._tTime > B) && e.render(r, !0)), ra(t)._dp && t._initted && t._time >= t._dur && t._ts)) {
      if (t._dur < t.duration()) for (r = t; r._dp; ) 0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -B;
    }
  }
  function za(t, e, r, i) {
    return (
      e.parent && qa(e),
      (e._start = aa(r + e._delay)),
      (e._end = aa(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
      (function _addLinkedListItem(t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var a,
          s = t[i];
        if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
        s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[r]), (t[r] = e)), e._next ? (e._next._prev = e) : (t[i] = e), (e._prev = s), (e.parent = e._dp = t);
      })(t, e, "_first", "_last", t._sort ? "_start" : 0),
      (t._recent = e),
      i || ya(t, e),
      t
    );
  }
  function Aa(t, e, r, i) {
    return qt(t, e), t._initted ? (!r && t._pt && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && d !== Ot.frame ? (ot.push(t), (t._lazy = [e, i]), 1) : void 0) : 1;
  }
  function Da(t, e, r) {
    var i = t._repeat,
      n = aa(e) || 0;
    return (t._dur = n), (t._tDur = i ? (i < 0 ? 1e12 : aa(n * (i + 1) + t._rDelay * i)) : n), t._time > n && ((t._time = n), (t._tTime = Math.min(t._tTime, t._tDur))), r || ra(t.parent), t.parent && xa(t), t;
  }
  function Ea(t) {
    return t instanceof Bt ? ra(t) : Da(t, t._dur);
  }
  function Ga(t, e) {
    var r,
      i,
      a = t.labels,
      s = t._recent || mt,
      o = t.duration() >= R ? s.endTime(!1) : t._dur;
    return n(e) && (isNaN(e) || e in a) ? ("<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in a || (a[e] = o), a[e]) : ((i = +(e.charAt(r - 1) + e.substr(r + 1))), 1 < r ? Ga(t, e.substr(0, r - 1)) + i : o + i)) : null == e ? o : +e;
  }
  function Ha(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Ja(t) {
    return (t + "").substr((parseFloat(t) + "").length);
  }
  function Ma(t, e) {
    return t && r(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && r(t[0]))) && !t.nodeType && t !== i;
  }
  function Pa(t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function Qa(t) {
    if (o(t)) return t;
    var p = r(t) ? t : { each: t },
      _ = Dt(p.ease),
      m = p.from || 0,
      g = parseFloat(p.base) || 0,
      v = {},
      e = 0 < m && m < 1,
      y = isNaN(m) || e,
      T = p.axis,
      b = m,
      w = m;
    return (
      n(m) ? (b = w = { center: 0.5, edges: 0.5, end: 1 }[m] || 0) : !e && y && ((b = m[0]), (w = m[1])),
      function (t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = (r || p).length,
          c = v[d];
        if (!c) {
          if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, R])[1])) {
            for (h = -R; h < (h = r[f++].getBoundingClientRect().left) && f < d; );
            f--;
          }
          for (c = v[d] = [], i = y ? Math.min(f, d) * b - 0.5 : m % f, n = y ? (d * w) / f - 0.5 : (m / f) | 0, l = R, u = h = 0; u < d; u++) (a = (u % f) - i), (s = n - ((u / f) | 0)), (c[u] = o = T ? Math.abs("y" === T ? s : a) : j(a * a + s * s)), h < o && (h = o), o < l && (l = o);
          "random" === m && Pa(c), (c.max = h - l), (c.min = l), (c.v = d = (parseFloat(p.amount) || parseFloat(p.each) * (d < f ? d - 1 : T ? ("y" === T ? d / f : f) : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1)), (c.b = d < 0 ? g - d : g), (c.u = Ja(p.amount || p.each) || 0), (_ = _ && d < 0 ? zt(_) : _);
        }
        return (d = (c[t] - c.min) / c.max || 0), aa(c.b + (_ ? _(d) : d) * c.v) + c.u;
      }
    );
  }
  function Ra(e) {
    var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
    return function (t) {
      return ~~(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : Ja(t));
    };
  }
  function Sa(u, t) {
    var h,
      l,
      e = H(u);
    return (
      !e && r(u) && ((h = e = u.radius || R), u.values ? ((u = yt(u.values)), (l = !p(u[0])) && (h *= h)) : (u = Ra(u.increment))),
      Ha(
        t,
        e
          ? o(u)
            ? function (t) {
                return (l = u(t)), Math.abs(l - t) <= h ? l : t;
              }
            : function (t) {
                for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = R, s = 0, o = u.length; o--; ) (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && ((a = e), (s = o));
                return (s = !h || a <= h ? u[s] : t), l || s === t || p(t) ? s : s + Ja(t);
              }
          : Ra(u)
      )
    );
  }
  function Ta(t, e, r, i) {
    return Ha(H(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return H(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && ~~(Math.round((t + Math.random() * (e - t)) / r) * r * i) / i;
    });
  }
  function Xa(e, r, t) {
    return Ha(t, function (t) {
      return e[~~r(t)];
    });
  }
  function $a(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); ) (i = t.indexOf(")", e)), (n = "[" === t.charAt(e + 7)), (r = t.substr(e + 7, i - e - 7).match(n ? nt : Q)), (s += t.substr(a, e - a) + Ta(n ? r : +r[0], +r[1], +r[2] || 1e-5)), (a = i + 1);
    return s + t.substr(a, t.length - a);
  }
  function bb(t, e, r) {
    var i,
      n,
      a,
      s = t.labels,
      o = R;
    for (i in s) (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && ((a = i), (o = n));
    return a;
  }
  function db(t) {
    return qa(t), t.progress() < 1 && bt(t, "onInterrupt"), t;
  }
  function ib(t, e, r) {
    return ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * wt + 0.5) | 0;
  }
  function jb(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      d,
      c = t ? (p(t) ? [t >> 16, (t >> 8) & wt, t & wt] : 0) : xt.black;
    if (!c) {
      if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), xt[t])) c = xt[t];
      else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a), (c = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & wt, t & wt]);
      else if ("hsl" === t.substr(0, 3))
        if (((c = d = t.match(Q)), e)) {
          if (~t.indexOf("=")) return (c = t.match(W)), r && c.length < 4 && (c[3] = 1), c;
        } else (s = (+c[0] % 360) / 360), (o = c[1] / 100), (i = 2 * (u = c[2] / 100) - (n = u <= 0.5 ? u * (o + 1) : u + o - u * o)), 3 < c.length && (c[3] *= 1), (c[0] = ib(s + 1 / 3, i, n)), (c[1] = ib(s, i, n)), (c[2] = ib(s - 1 / 3, i, n));
      else c = t.match(Q) || xt.transparent;
      c = c.map(Number);
    }
    return e && !d && ((i = c[0] / wt), (n = c[1] / wt), (a = c[2] / wt), (u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2), h === l ? (s = o = 0) : ((f = h - l), (o = 0.5 < u ? f / (2 - h - l) : f / (h + l)), (s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4), (s *= 60)), (c[0] = ~~(s + 0.5)), (c[1] = ~~(100 * o + 0.5)), (c[2] = ~~(100 * u + 0.5))), r && c.length < 4 && (c[3] = 1), c;
  }
  function kb(t) {
    var r = [],
      i = [],
      n = -1;
    return (
      t.split(kt).forEach(function (t) {
        var e = t.match(tt) || [];
        r.push.apply(r, e), i.push((n += e.length + 1));
      }),
      (r.c = i),
      r
    );
  }
  function lb(t, e, r) {
    var i,
      n,
      a,
      s,
      o = "",
      u = (t + o).match(kt),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (t = jb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
      })),
      r && ((a = kb(t)), (i = r.c).join(o) !== a.c.join(o)))
    )
      for (s = (n = t.replace(kt, "1").split(tt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
    if (!n) for (s = (n = t.split(kt)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s];
  }
  function ob(t) {
    var e,
      r = t.join(" ");
    if (((kt.lastIndex = 0), kt.test(r))) return (e = Mt.test(r)), (t[1] = lb(t[1], e)), (t[0] = lb(t[0], e, kb(t[1]))), !0;
  }
  function wb(t) {
    var e = (t + "").split("("),
      r = Pt[e[0]];
    return r && 1 < e.length && r.config
      ? r.config.apply(
          null,
          ~t.indexOf("{")
            ? [
                (function _parseObjectInString(t) {
                  for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) (r = a[o]), (e = o !== u - 1 ? r.lastIndexOf(",") : r.length), (i = r.substr(0, e)), (n[s] = isNaN(i) ? i.replace(St, "").trim() : +i), (s = r.substr(e + 1).trim());
                  return n;
                })(e[1]),
              ]
            : rt.exec(t)[1].split(",").map(fa)
        )
      : Pt._CE && At.test(t)
      ? Pt._CE("", t)
      : r;
  }
  function zb(t, e, r, i) {
    void 0 === r &&
      (r = function easeOut(t) {
        return 1 - e(1 - t);
      }),
      void 0 === i &&
        (i = function easeInOut(t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var n,
      a = { easeIn: e, easeOut: r, easeInOut: i };
    return (
      _(t, function (t) {
        for (var e in ((Pt[t] = at[t] = a), (Pt[(n = t.toLowerCase())] = r), a)) Pt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Pt[t + "." + e] = a[e];
      }),
      a
    );
  }
  function Ab(e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  }
  function Bb(r, t, e) {
    function Yk(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * J((t - a) * n) + 1;
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (n / I) * (Math.asin(1 / i) || 0),
      s =
        "out" === r
          ? Yk
          : "in" === r
          ? function (t) {
              return 1 - Yk(1 - t);
            }
          : Ab(Yk);
    return (
      (n = I / n),
      (s.config = function (t, e) {
        return Bb(r, t, e);
      }),
      s
    );
  }
  function Cb(e, r) {
    function el(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }
    void 0 === r && (r = 1.70158);
    var t =
      "out" === e
        ? el
        : "in" === e
        ? function (t) {
            return 1 - el(1 - t);
          }
        : Ab(el);
    return (
      (t.config = function (t) {
        return Cb(e, t);
      }),
      t
    );
  }
  var F,
    i,
    a,
    h,
    l,
    f,
    d,
    c,
    m,
    g,
    v,
    y,
    T,
    b,
    w,
    x,
    k,
    C,
    P,
    A,
    S,
    z,
    D,
    G = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    E = { duration: 0.5, overwrite: !1, delay: 0 },
    R = 1e8,
    B = 1 / R,
    I = 2 * Math.PI,
    U = I / 4,
    X = 0,
    j = Math.sqrt,
    V = Math.cos,
    J = Math.sin,
    H = Array.isArray,
    Q = /(?:-?\.?\d|\.)+/gi,
    W = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
    tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    et = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
    rt = /\(([^()]+)\)/i,
    it = /[+-]=-?[\.\d]+/,
    nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
    at = {},
    st = {},
    ot = [],
    ut = {},
    ht = {},
    lt = {},
    ft = 30,
    dt = [],
    ct = "",
    pt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    _t = function _animationCycle(t, e) {
      return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
    },
    mt = { _start: 0, endTime: O },
    gt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    vt = [].slice,
    yt = function toArray(t, e) {
      return !n(t) || e || (!a && Ct())
        ? H(t)
          ? (function _flatten(t, e, r) {
              return (
                void 0 === r && (r = []),
                t.forEach(function (t) {
                  return (n(t) && !e) || Ma(t, 1) ? r.push.apply(r, yt(t)) : r.push(t);
                }) || r
              );
            })(t, e)
          : Ma(t)
          ? vt.call(t, 0)
          : t
          ? [t]
          : []
        : vt.call(h.querySelectorAll(t), 0);
    },
    Tt = function mapRange(e, t, r, i, n) {
      var a = t - e,
        s = i - r;
      return Ha(n, function (t) {
        return r + ((t - e) / a) * s;
      });
    },
    bt = function _callback(t, e, r) {
      var i,
        n,
        a = t.vars,
        s = a[e];
      if (s) return (i = a[e + "Params"]), (n = a.callbackScope || t), r && ot.length && da(), i ? s.apply(n, i) : s.call(n);
    },
    wt = 255,
    xt = {
      aqua: [0, wt, wt],
      lime: [0, wt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, wt],
      navy: [0, 0, 128],
      white: [wt, wt, wt],
      olive: [128, 128, 0],
      yellow: [wt, wt, 0],
      orange: [wt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [wt, 0, 0],
      pink: [wt, 192, 203],
      cyan: [0, wt, wt],
      transparent: [wt, wt, wt, 0],
    },
    kt = (function () {
      var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (t in xt) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Mt = /hsl[a]?\(/,
    Ot =
      ((b = Date.now),
      (w = 500),
      (x = 33),
      (k = b()),
      (C = k),
      (A = P = 1 / 240),
      (T = {
        time: 0,
        frame: 0,
        tick: function tick() {
          ck(!0);
        },
        wake: function wake() {
          f &&
            (!a && t() && ((i = a = window), (h = i.document || {}), (at.gsap = ie), (i.gsapVersions || (i.gsapVersions = [])).push(ie.version), K(l || i.GreenSockGlobals || (!i.gsap && i) || {}), (y = i.requestAnimationFrame)),
            g && T.sleep(),
            (v =
              y ||
              function (t) {
                return setTimeout(t, (1e3 * (A - T.time) + 1) | 0);
              }),
            (m = 1),
            ck(2));
        },
        sleep: function sleep() {
          (y ? i.cancelAnimationFrame : clearTimeout)(g), (m = 0), (v = O);
        },
        lagSmoothing: function lagSmoothing(t, e) {
          (w = t || 1e8), (x = Math.min(e, w, 0));
        },
        fps: function fps(t) {
          (P = 1 / (t || 240)), (A = T.time + P);
        },
        add: function add(t) {
          S.indexOf(t) < 0 && S.push(t), Ct();
        },
        remove: function remove(t) {
          var e;
          ~(e = S.indexOf(t)) && S.splice(e, 1);
        },
        _listeners: (S = []),
      })),
    Ct = function _wake() {
      return !m && Ot.wake();
    },
    Pt = {},
    At = /^[\d.\-M][\d.\-,\s]/,
    St = /["']/g,
    zt = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Dt = function _parseEase(t, e) {
      return (t && (o(t) ? t : Pt[t] || wb(t))) || e;
    };
  function ck(e) {
    var t,
      r,
      i = b() - C,
      n = !0 === e;
    w < i && (k += i - x),
      (C += i),
      (T.time = (C - k) / 1e3),
      (0 < (t = T.time - A) || n) && (T.frame++, (A += t + (P <= t ? 0.004 : P - t)), (r = 1)),
      n || (g = v(ck)),
      r &&
        S.forEach(function (t) {
          return t(T.time, i, T.frame, e);
        });
  }
  function vl(t) {
    return t < D ? z * t * t : t < 0.7272727272727273 ? z * Math.pow(t - 1.5 / 2.75, 2) + 0.75 : t < 0.9090909090909092 ? z * (t -= 2.25 / 2.75) * t + 0.9375 : z * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  _("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    zb(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Pt.Linear.easeNone = Pt.none = Pt.Linear.easeIn),
    zb("Elastic", Bb("in"), Bb("out"), Bb()),
    (z = 7.5625),
    (D = 1 / 2.75),
    zb(
      "Bounce",
      function (t) {
        return 1 - vl(1 - t);
      },
      vl
    ),
    zb("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    zb("Circ", function (t) {
      return -(j(1 - t * t) - 1);
    }),
    zb("Sine", function (t) {
      return 1 - V(t * U);
    }),
    zb("Back", Cb("in"), Cb("out"), Cb()),
    (Pt.SteppedEase = Pt.steps = at.SteppedEase = {
      config: function config(t, e) {
        void 0 === t && (t = 1);
        var r = 1 / t,
          i = t + (e ? 0 : 1),
          n = e ? 1 : 0;
        return function (t) {
          return (((i * gt(0, 0.99999999, t)) | 0) + n) * r;
        };
      },
    }),
    (E.ease = Pt["quad.out"]),
    _("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
      return (ct += t + "," + t + "Params,");
    });
  var Rt,
    Ft = function GSCache(t, e) {
      (this.id = X++), ((t._gsap = this).target = t), (this.harness = e), (this.get = e ? e.get : $), (this.set = e ? e.getSetter : Zt);
    },
    Et =
      (((Rt = Animation.prototype).delay = function delay(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
      }),
      (Rt.duration = function duration(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
      }),
      (Rt.totalDuration = function totalDuration(t) {
        return arguments.length ? ((this._dirty = 0), Da(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
      }),
      (Rt.totalTime = function totalTime(t, e) {
        if ((Ct(), !arguments.length)) return this._tTime;
        var r = this.parent || this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (this._start = aa(r._time - (0 < this._ts ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)), xa(this), r._dirty || ra(r); r.parent; ) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), (r = r.parent);
          !this.parent && this._dp.autoRemoveChildren && za(this._dp, this, this._start - this._delay);
        }
        return (this._tTime !== t || (!this._dur && !e) || (this._initted && Math.abs(this._zTime) === B)) && (this._ts || (this._pTime = t), ea(this, t, e)), this;
      }),
      (Rt.time = function time(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ua(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
      }),
      (Rt.totalProgress = function totalProgress(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
      }),
      (Rt.progress = function progress(t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ua(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
      }),
      (Rt.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? _t(this._tTime, r) + 1 : 1;
      }),
      (Rt.timeScale = function timeScale(t) {
        if (!arguments.length) return this._rts === -B ? 0 : this._rts;
        if (this._rts === t) return this;
        var e = this.parent && this._ts ? wa(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -B ? 0 : this._rts),
          (function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          })(this.totalTime(gt(0, this._tDur, e), !0))
        );
      }),
      (Rt.paused = function paused(t) {
        return arguments.length ? (this._ps !== t && ((this._ps = t) ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0)) : (Ct(), (this._ts = this._rts), this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= B) && Math.abs(this._zTime) !== B))), this) : this._ps;
      }),
      (Rt.startTime = function startTime(t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return !e || (!e._sort && this.parent) || za(e, this, t - this._delay), this;
        }
        return this._start;
      }),
      (Rt.endTime = function endTime(t) {
        return this._start + (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
      }),
      (Rt.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wa(e.rawTime(t), this) : this._tTime) : this._tTime;
      }),
      (Rt.repeat = function repeat(t) {
        return arguments.length ? ((this._repeat = t), Ea(this)) : this._repeat;
      }),
      (Rt.repeatDelay = function repeatDelay(t) {
        return arguments.length ? ((this._rDelay = t), Ea(this)) : this._rDelay;
      }),
      (Rt.yoyo = function yoyo(t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (Rt.seek = function seek(t, e) {
        return this.totalTime(Ga(this, t), s(e));
      }),
      (Rt.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, s(e));
      }),
      (Rt.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (Rt.reverse = function reverse(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
      }),
      (Rt.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (Rt.resume = function resume() {
        return this.paused(!1);
      }),
      (Rt.reversed = function reversed(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -B : 0)), this) : this._rts < 0;
      }),
      (Rt.invalidate = function invalidate() {
        return (this._initted = 0), (this._zTime = -B), this;
      }),
      (Rt.isActive = function isActive(t) {
        var e,
          r = this.parent || this._dp,
          i = this._start;
        return !(r && !(this._ts && (this._initted || !t) && r.isActive(t) && (e = r.rawTime(!0)) >= i && e < this.endTime(!0) - B));
      }),
      (Rt.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length ? (e ? ((i[t] = e), r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
      }),
      (Rt.then = function then(t) {
        var i = this;
        return new Promise(function (e) {
          function Km() {
            var t = i.then;
            (i.then = null), o(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), (i.then = t);
          }
          var r = o(t) ? t : ga;
          (i._initted && 1 === i.totalProgress() && 0 <= i._ts) || (!i._tTime && i._ts < 0) ? Km() : (i._prom = Km);
        });
      }),
      (Rt.kill = function kill() {
        db(this);
      }),
      Animation);
  function Animation(t, e) {
    var r = t.parent || F;
    (this.vars = t), (this._delay = +t.delay || 0), (this._repeat = t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)), (this._ts = 1), Da(this, +t.duration, 1), (this.data = t.data), m || Ot.wake(), r && za(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0);
  }
  ha(Et.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -B,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Bt = (function (i) {
    function Timeline(t, e) {
      var r;
      return void 0 === t && (t = {}), ((r = i.call(this, t, e) || this).labels = {}), (r.smoothChildTiming = !!t.smoothChildTiming), (r.autoRemoveChildren = !!t.autoRemoveChildren), (r._sort = s(t.sortChildren)), r.parent && ya(r.parent, _assertThisInitialized(r)), r;
    }
    _inheritsLoose(Timeline, i);
    var t = Timeline.prototype;
    return (
      (t.to = function to(t, e, r, i) {
        return new Ut(t, ca(arguments, 0, this), Ga(this, p(e) ? i : r)), this;
      }),
      (t.from = function from(t, e, r, i) {
        return new Ut(t, ca(arguments, 1, this), Ga(this, p(e) ? i : r)), this;
      }),
      (t.fromTo = function fromTo(t, e, r, i, n) {
        return new Ut(t, ca(arguments, 2, this), Ga(this, p(e) ? n : i)), this;
      }),
      (t.set = function set(t, e, r) {
        return (e.duration = 0), (e.parent = this), ma(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new Ut(t, e, Ga(this, r), 1), this;
      }),
      (t.call = function call(t, e, r) {
        return za(this, Ut.delayedCall(0, t, e), Ga(this, r));
      }),
      (t.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
        return (r.duration = e), (r.stagger = r.stagger || i), (r.onComplete = a), (r.onCompleteParams = s), (r.parent = this), new Ut(t, r, Ga(this, n)), this;
      }),
      (t.staggerFrom = function staggerFrom(t, e, r, i, n, a, o) {
        return (r.runBackwards = 1), (ma(r).immediateRender = s(r.immediateRender)), this.staggerTo(t, e, r, i, n, a, o);
      }),
      (t.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, o, u) {
        return (i.startAt = r), (ma(i).immediateRender = s(i.immediateRender)), this.staggerTo(t, e, i, n, a, o, u);
      }),
      (t.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _ = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = this !== F && m - B < t && 0 <= t ? m : t < B ? 0 : t,
          y = this._zTime < 0 != t < 0 && (this._initted || !g);
        if (v !== this._tTime || r || y) {
          if ((_ !== this._time && g && ((v += this._time - _), (t += this._time - _)), (i = v), (f = this._start), (u = !(l = this._ts)), y && (g || (_ = this._zTime), (!t && e) || (this._zTime = t)), this._repeat && ((c = this._yoyo), (o = g + this._rDelay), (g < (i = aa(v % o)) || m === v) && (i = g), (s = ~~(v / o)) && s === v / o && ((i = g), s--), c && 1 & s && ((i = g - i), (p = 1)), s !== (d = _t(this._tTime, o)) && !this._lock))) {
            var T = c && 1 & d,
              b = T === (c && 1 & s);
            if ((s < d && (T = !T), (_ = T ? 0 : g), (this._lock = 1), (this.render(_, e, !g)._lock = 0), !e && this.parent && bt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ !== this._time || u != !this._ts)) return this;
            if ((b && ((this._lock = 2), (_ = T ? g + 1e-4 : -1e-4), this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), (this._lock = 0), !this._ts && !u)) return this;
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function _findNextPauseTween(t, e, r) {
                var i;
                if (e < r)
                  for (i = t._first; i && i._start <= r; ) {
                    if (!i._dur && "isPause" === i.data && i._start > e) return i;
                    i = i._next;
                  }
                else
                  for (i = t._last; i && i._start >= r; ) {
                    if (!i._dur && "isPause" === i.data && i._start < e) return i;
                    i = i._prev;
                  }
              })(this, aa(_), aa(i))) &&
              (v -= i - (i = h._start)),
            (this._tTime = v),
            (this._time = i),
            (this._act = !l),
            this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t)),
            _ || !i || e || bt(this, "onStart"),
            _ <= i && 0 <= t)
          )
            for (n = this._first; n; ) {
              if (((a = n._next), (n._act || i >= n._start) && n._ts && h !== n)) {
                if (n.parent !== this) return this.render(t, e, r);
                if ((n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || (!this._ts && !u))) {
                  (h = 0), a && (v += this._zTime = -B);
                  break;
                }
              }
              n = a;
            }
          else {
            n = this._last;
            for (var w = t < 0 ? t : i; n; ) {
              if (((a = n._prev), (n._act || w <= n._end) && n._ts && h !== n)) {
                if (n.parent !== this) return this.render(t, e, r);
                if ((n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || (!this._ts && !u))) {
                  (h = 0), a && (v += this._zTime = w ? -B : B);
                  break;
                }
              }
              n = a;
            }
          }
          if (h && !e && (this.pause(), (h.render(_ <= i ? 0 : -B)._zTime = _ <= i ? 1 : -1), this._ts)) return (this._start = f), xa(this), this.render(t, e, r);
          this._onUpdate && !e && bt(this, "onUpdate", !0), ((v === m && m >= this.totalDuration()) || (!v && this._ts < 0)) && ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) || this._lock || ((!t && g) || !((t && 0 < this._ts) || (!v && this._ts < 0)) || qa(this, 1), e || (t < 0 && !_) || (bt(this, v === m ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom())));
        }
        return this;
      }),
      (t.add = function add(t, e) {
        var r = this;
        if ((p(e) || (e = Ga(this, e)), !(t instanceof Et))) {
          if (H(t))
            return (
              t.forEach(function (t) {
                return r.add(t, e);
              }),
              ra(this)
            );
          if (n(t)) return this.addLabel(t, e);
          if (!o(t)) return this;
          t = Ut.delayedCall(0, t);
        }
        return this !== t ? za(this, t, e) : this;
      }),
      (t.getChildren = function getChildren(t, e, r, i) {
        void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -R);
        for (var n = [], a = this._first; a; ) a._start >= i && (a instanceof Ut ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), (a = a._next);
        return n;
      }),
      (t.getById = function getById(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; ) if (e[r].vars.id === t) return e[r];
      }),
      (t.remove = function remove(t) {
        return n(t) ? this.removeLabel(t) : o(t) ? this.killTweensOf(t) : (pa(this, t), t === this._recent && (this._recent = this._last), ra(this));
      }),
      (t.totalTime = function totalTime(t, e) {
        return arguments.length ? ((this._forcing = 1), this.parent || this._dp || !this._ts || (this._start = aa(Ot.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), (this._forcing = 0), this) : this._tTime;
      }),
      (t.addLabel = function addLabel(t, e) {
        return (this.labels[t] = Ga(this, e)), this;
      }),
      (t.removeLabel = function removeLabel(t) {
        return delete this.labels[t], this;
      }),
      (t.addPause = function addPause(t, e, r) {
        var i = Ut.delayedCall(0, e || O, r);
        return (i.data = "isPause"), (this._hasPause = 1), za(this, i, Ga(this, t));
      }),
      (t.removePause = function removePause(t) {
        var e = this._first;
        for (t = Ga(this, t); e; ) e._start === t && "isPause" === e.data && qa(e), (e = e._next);
      }),
      (t.killTweensOf = function killTweensOf(t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; ) Lt !== i[n] && i[n].kill(t, e);
        return this;
      }),
      (t.getTweensOf = function getTweensOf(t, e) {
        for (var r, i = [], n = yt(t), a = this._first; a; ) a instanceof Ut ? !ba(a._targets, n) || (e && !a.isActive("started" === e)) || i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), (a = a._next);
        return i;
      }),
      (t.tweenTo = function tweenTo(t, e) {
        e = e || {};
        var r = this,
          i = Ga(r, t),
          n = e.startAt,
          a = e.onStart,
          s = e.onStartParams,
          o = Ut.to(
            r,
            ha(e, {
              ease: "none",
              lazy: !1,
              time: i,
              duration: e.duration || Math.abs((i - (n && "time" in n ? n.time : r._time)) / r.timeScale()) || B,
              onStart: function onStart() {
                r.pause();
                var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                o._dur !== t && Da(o, t).render(o._time, !0, !0), a && a.apply(o, s || []);
              },
            })
          );
        return o;
      }),
      (t.tweenFromTo = function tweenFromTo(t, e, r) {
        return this.tweenTo(e, ha({ startAt: { time: Ga(this, t) } }, r));
      }),
      (t.recent = function recent() {
        return this._recent;
      }),
      (t.nextLabel = function nextLabel(t) {
        return void 0 === t && (t = this._time), bb(this, Ga(this, t));
      }),
      (t.previousLabel = function previousLabel(t) {
        return void 0 === t && (t = this._time), bb(this, Ga(this, t), 1);
      }),
      (t.currentLabel = function currentLabel(t) {
        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + B);
      }),
      (t.shiftChildren = function shiftChildren(t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, a = this.labels; n; ) n._start >= r && (n._start += t), (n = n._next);
        if (e) for (i in a) a[i] >= r && (a[i] += t);
        return ra(this);
      }),
      (t.invalidate = function invalidate() {
        var t = this._first;
        for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
        return i.prototype.invalidate.call(this);
      }),
      (t.clear = function clear(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; ) (e = r._next), this.remove(r), (r = e);
        return (this._time = this._tTime = 0), t && (this.labels = {}), ra(this);
      }),
      (t.totalDuration = function totalDuration(t) {
        var e,
          r,
          i,
          n,
          a = 0,
          s = this,
          o = s._last,
          u = R;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
        if (s._dirty) {
          for (n = s.parent; o; ) (e = o._prev), o._dirty && o.totalDuration(), u < (i = o._start) && s._sort && o._ts && !s._lock ? ((s._lock = 1), (za(s, o, i - o._delay, 1)._lock = 0)) : (u = i), i < 0 && o._ts && ((a -= i), ((!n && !s._dp) || (n && n.smoothChildTiming)) && ((s._start += i / s._ts), (s._time -= i), (s._tTime -= i)), s.shiftChildren(-i, !1, -1e20), (u = 0)), a < (r = xa(o)) && o._ts && (a = r), (o = e);
          Da(s, s === F && s._time > a ? s._time : Math.min(R, a), 1), (s._dirty = 0);
        }
        return s._tDur;
      }),
      (Timeline.updateRoot = function updateRoot(t) {
        if ((F._ts && (ea(F, wa(t, F)), (d = Ot.frame)), Ot.frame >= ft)) {
          ft += G.autoSleep || 120;
          var e = F._first;
          if ((!e || !e._ts) && G.autoSleep && Ot._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || Ot.sleep();
          }
        }
      }),
      Timeline
    );
  })(Et);
  ha(Bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  function Jb(t, e, i, a, s, u) {
    var h, l, f, d;
    if (
      ht[t] &&
      !1 !==
        (h = new ht[t]()).init(
          s,
          h.rawVars
            ? e[t]
            : (function _processVars(t, e, i, a, s) {
                if ((o(t) && (t = Yt(t, s, e, i, a)), !r(t) || (t.style && t.nodeType) || H(t))) return n(t) ? Yt(t, s, e, i, a) : t;
                var u,
                  h = {};
                for (u in t) h[u] = Yt(t[u], s, e, i, a);
                return h;
              })(e[t], a, s, u, i),
          i,
          a,
          u
        ) &&
      ((i._pt = l = new ee(i._pt, s, t, 0, 1, h.render, h, 0, h.priority)), i !== c)
    )
      for (f = i._ptLookup[i._targets.indexOf(s)], d = h._props.length; d--; ) f[h._props[d]] = l;
    return h;
  }
  var Lt,
    It = function _addPropTween(t, e, r, i, a, s, u, h, l) {
      o(i) && (i = i(a || 0, t, s));
      var f,
        d = t[e],
        c = "get" !== r ? r : o(d) ? (l ? t[e.indexOf("set") || !o(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]()) : d,
        p = o(d) ? (l ? Vt : jt) : Xt;
      if ((n(i) && (~i.indexOf("random(") && (i = $a(i)), "=" === i.charAt(1) && (i = parseFloat(c) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Ja(c) || 0))), c !== i))
        return isNaN(c + i)
          ? (d || e in t || L(e, i),
            function _addComplexStringPropTween(t, e, r, i, n, a, s) {
              var o,
                u,
                h,
                l,
                f,
                d,
                c,
                p,
                _ = new ee(this._pt, t, e, 0, 1, Qt, null, n),
                m = 0,
                g = 0;
              for (_.b = r, _.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = $a(i)), a && (a((p = [r, i]), t, e), (r = p[0]), (i = p[1])), u = r.match(et) || []; (o = et.exec(i)); )
                (l = o[0]),
                  (f = i.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
                  l !== u[g++] &&
                    ((d = parseFloat(u[g - 1]) || 0),
                    (_._pt = {
                      _next: _._pt,
                      p: f || 1 === g ? f : ",",
                      s: d,
                      c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
                      m: h && h < 4 ? Math.round : 0,
                    }),
                    (m = et.lastIndex));
              return (_.c = m < i.length ? i.substring(m, i.length) : ""), (_.fp = s), (it.test(i) || c) && (_.e = 0), (this._pt = _);
            }.call(this, t, e, c, i, p, h || G.stringFilter, l))
          : ((f = new ee(this._pt, t, e, +c || 0, i - (c || 0), "boolean" == typeof d ? Ht : Jt, 0, p)), l && (f.fp = l), u && f.modifier(u, this, t), (this._pt = f));
    },
    qt = function _initTween(t, e) {
      var r,
        i,
        n,
        a,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _ = t.vars,
        m = _.ease,
        g = _.startAt,
        v = _.immediateRender,
        y = _.lazy,
        T = _.onUpdate,
        b = _.onUpdateParams,
        w = _.callbackScope,
        x = _.runBackwards,
        k = _.yoyoEase,
        M = _.keyframes,
        O = _.autoRevert,
        C = t._dur,
        P = t._startAt,
        A = t._targets,
        S = t.parent,
        z = S && "nested" === S.data ? S.parent._targets : A,
        D = "auto" === t._overwrite,
        R = t.timeline;
      if ((!R || (M && m) || (m = "none"), (t._ease = Dt(m, E.ease)), (t._yEase = k ? zt(Dt(!0 === k ? m : k, E.ease)) : 0), k && t._yoyo && !t._repeat && ((k = t._yEase), (t._yEase = t._ease), (t._ease = k)), !R)) {
        if ((P && P.render(-1, !0).kill(), g)) {
          if (
            (qa(
              (t._startAt = Ut.set(
                A,
                ha(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: S,
                    immediateRender: !0,
                    lazy: s(y),
                    startAt: null,
                    delay: 0,
                    onUpdate: T,
                    onUpdateParams: b,
                    callbackScope: w,
                    stagger: 0,
                  },
                  g
                )
              ))
            ),
            v)
          )
            if (0 < e) O || (t._startAt = 0);
            else if (C) return;
        } else if (x && C)
          if (P) O || (t._startAt = 0);
          else if (
            (e && (v = !1),
            qa(
              (t._startAt = Ut.set(
                A,
                pt(la(_, st), {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: v && s(y),
                  immediateRender: v,
                  stagger: 0,
                  parent: S,
                })
              ))
            ),
            v)
          ) {
            if (!e) return;
          } else _initTween(t._startAt, B);
        for (r = la(_, st), p = (l = A[(t._pt = 0)] ? Z(A[0]).harness : 0) && _[l.prop], y = (C && s(y)) || (y && !C), i = 0; i < A.length; i++) {
          if (
            ((h = (o = A[i])._gsap || Y(A)[i]._gsap),
            (t._ptLookup[i] = d = {}),
            ut[h.id] && da(),
            (c = z === A ? i : z.indexOf(o)),
            l &&
              !1 !== (f = new l()).init(o, p || r, t, c, z) &&
              ((t._pt = a = new ee(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (t) {
                d[t] = a;
              }),
              f.priority && (u = 1)),
            !l || p)
          )
            for (n in r) ht[n] && (f = Jb(n, r, t, c, o, z)) ? f.priority && (u = 1) : (d[n] = a = It.call(t, o, n, "get", r[n], c, z, 0, _.stringFilter));
          t._op && t._op[i] && t.kill(o, t._op[i]), D && t._pt && ((Lt = t), F.killTweensOf(o, d, "started"), (Lt = 0)), t._pt && y && (ut[h.id] = 1);
        }
        u && te(t), t._onInit && t._onInit(t);
      }
      (t._from = !R && !!_.runBackwards), (t._onUpdate = T), (t._initted = 1);
    },
    Yt = function _parseFuncOrString(t, e, r, i, a) {
      return o(t) ? t.call(e, r, i, a) : n(t) && ~t.indexOf("random(") ? $a(t) : t;
    },
    Nt = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    Gt = (Nt + ",id,stagger,delay,duration,paused").split(","),
    Ut = (function (A) {
      function Tween(t, e, i, n) {
        var a;
        "number" == typeof e && ((i.duration = e), (e = i), (i = null));
        var o,
          h,
          l,
          f,
          d,
          c,
          _,
          m,
          g = (a = A.call(this, n ? e : ma(e), i) || this).vars,
          v = g.duration,
          y = g.delay,
          T = g.immediateRender,
          b = g.stagger,
          w = g.overwrite,
          x = g.keyframes,
          k = g.defaults,
          C = a.parent,
          P = (H(t) ? p(t[0]) : "length" in e) ? [t] : yt(t);
        if (((a._targets = P.length ? Y(P) : M("GSAP target " + t + " not found. https://greensock.com", !G.nullTargetWarn) || []), (a._ptLookup = []), (a._overwrite = w), x || b || u(v) || u(y))) {
          if (
            ((e = a.vars),
            (o = a.timeline = new Bt({
              data: "nested",
              defaults: k || {},
            })).kill(),
            (o.parent = _assertThisInitialized(a)),
            x)
          )
            ha(o.vars.defaults, { ease: "none" }),
              x.forEach(function (t) {
                return o.to(P, t, ">");
              });
          else {
            if (((f = P.length), (_ = b ? Qa(b) : O), r(b))) for (d in b) ~Nt.indexOf(d) && ((m = m || {})[d] = b[d]);
            for (h = 0; h < f; h++) {
              for (d in ((l = {}), e)) Gt.indexOf(d) < 0 && (l[d] = e[d]);
              (l.stagger = 0), m && pt(l, m), e.yoyoEase && !e.repeat && (l.yoyoEase = e.yoyoEase), (c = P[h]), (l.duration = +Yt(v, _assertThisInitialized(a), h, c, P)), (l.delay = (+Yt(y, _assertThisInitialized(a), h, c, P) || 0) - a._delay), !b && 1 === f && l.delay && ((a._delay = y = l.delay), (a._start += y), (l.delay = 0)), o.to(c, l, _(h, c, P));
            }
            v = y = 0;
          }
          v || a.duration((v = o.duration()));
        } else a.timeline = 0;
        return (
          !0 === w && ((Lt = _assertThisInitialized(a)), F.killTweensOf(P), (Lt = 0)),
          C && ya(C, _assertThisInitialized(a)),
          (T ||
            (!v &&
              !x &&
              a._start === C._time &&
              s(T) &&
              (function _hasNoPausedAncestors(t) {
                return !t || (t._ts && _hasNoPausedAncestors(t.parent));
              })(_assertThisInitialized(a)) &&
              "nested" !== C.data)) &&
            ((a._tTime = -B), a.render(Math.max(0, -y))),
          a
        );
      }
      _inheritsLoose(Tween, A);
      var t = Tween.prototype;
      return (
        (t.render = function render(t, e, r) {
          var i,
            n,
            a,
            s,
            o,
            u,
            h,
            l,
            f,
            d = this._time,
            c = this._tDur,
            p = this._dur,
            _ = c - B < t && 0 <= t ? c : t < B ? 0 : t;
          if (p) {
            if (_ !== this._tTime || !t || r || (this._startAt && this._zTime < 0 != t < 0)) {
              if (((i = _), (l = this.timeline), this._repeat)) {
                if (((s = p + this._rDelay), (p < (i = aa(_ % s)) || c === _) && (i = p), (a = ~~(_ / s)) && a === _ / s && ((i = p), a--), (u = this._yoyo && 1 & a) && ((f = this._yEase), (i = p - i)), (o = _t(this._tTime, s)), i === d && !r && this._initted)) return this;
                a !== o && (!this.vars.repeatRefresh || u || this._lock || ((this._lock = r = 1), (this.render(s * a, !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (Aa(this, i, r, e)) return (this._tTime = 0), this;
                if (p !== this._dur) return this.render(t, e, r);
              }
              for (this._tTime = _, this._time = i, !this._act && this._ts && ((this._act = 1), (this._lazy = 0)), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), d || !i || e || bt(this, "onStart"), n = this._pt; n; ) n.r(h, n.d), (n = n._next);
              (l && l.render(t < 0 ? t : !i && u ? -B : l._dur * h, e, r)) || (this._startAt && (this._zTime = t)), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), bt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && bt(this, "onRepeat"), (_ !== this._tDur && _) || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, r), (!t && p) || !((t && 0 < this._ts) || (!_ && this._ts < 0)) || qa(this, 1), e || (t < 0 && !d) || (_ < c && 0 < this.timeScale()) || (bt(this, _ === c ? "onComplete" : "onReverseComplete", !0), this._prom && this._prom()));
            }
          } else
            !(function _renderZeroDurationTween(t, e, r, i) {
              var n,
                a = t._zTime < 0 ? 0 : 1,
                s = e < 0 ? 0 : 1,
                o = t._rDelay,
                u = 0;
              if ((o && t._repeat && ((u = gt(0, t._tDur, e)), _t(u, o) !== _t(t._tTime, o) && ((a = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())), (t._initted || !Aa(t, e, i, r)) && (s !== a || i || t._zTime === B || (!e && t._zTime)))) {
                for (t._zTime = e || (r ? B : 0), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = u, r || bt(t, "onStart"), n = t._pt; n; ) n.r(s, n.d), (n = n._next);
                !s && t._startAt && !t._onUpdate && t._start && t._startAt.render(e, !0, i), t._onUpdate && (r || bt(t, "onUpdate")), u && t._repeat && !r && t.parent && bt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (t.ratio && qa(t, 1), r || (bt(t, t.ratio ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
              }
            })(this, t, e, r);
          return this;
        }),
        (t.targets = function targets() {
          return this._targets;
        }),
        (t.invalidate = function invalidate() {
          return (this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(), A.prototype.invalidate.call(this);
        }),
        (t.kill = function kill(t, e) {
          if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))) return db(this);
          if (this.timeline) return this.timeline.killTweensOf(t, e, Lt && !0 !== Lt.vars.overwrite), this;
          var r,
            i,
            a,
            s,
            o,
            u,
            h,
            l = this._targets,
            f = t ? yt(t) : l,
            d = this._ptLookup,
            c = this._pt;
          if (
            (!e || "all" === e) &&
            (function _arraysMatch(t, e) {
              for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; );
              return r < 0;
            })(l, f)
          )
            return db(this);
          for (
            r = this._op = this._op || [],
              "all" !== e &&
                (n(e) &&
                  ((o = {}),
                  _(e, function (t) {
                    return (o[t] = 1);
                  }),
                  (e = o)),
                (e = (function _addAliasesToVars(t, e) {
                  var r,
                    i,
                    n,
                    a,
                    s = t[0] ? Z(t[0]).harness : 0,
                    o = s && s.aliases;
                  if (!o) return e;
                  for (i in ((r = pt({}, e)), o)) if ((i in r)) for (n = (a = o[i].split(",")).length; n--; ) r[a[n]] = r[i];
                  return r;
                })(l, e))),
              h = l.length;
            h--;

          )
            if (~f.indexOf(l[h])) for (o in ((i = d[h]), "all" === e ? ((r[h] = e), (s = i), (a = {})) : ((a = r[h] = r[h] || {}), (s = e)), s)) (u = i && i[o]) && (("kill" in u.d && !0 !== u.d.kill(o)) || pa(this, u, "_pt"), delete i[o]), "all" !== a && (a[o] = 1);
          return this._initted && !this._pt && c && db(this), this;
        }),
        (Tween.to = function to(t, e, r) {
          return new Tween(t, e, r);
        }),
        (Tween.from = function from(t, e) {
          return new Tween(t, ca(arguments, 1));
        }),
        (Tween.delayedCall = function delayedCall(t, e, r, i) {
          return new Tween(e, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i,
          });
        }),
        (Tween.fromTo = function fromTo(t, e, r) {
          return new Tween(t, ca(arguments, 2));
        }),
        (Tween.set = function set(t, e) {
          return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new Tween(t, e);
        }),
        (Tween.killTweensOf = function killTweensOf(t, e, r) {
          return F.killTweensOf(t, e, r);
        }),
        Tween
      );
    })(Et);
  ha(Ut.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    _("staggerTo,staggerFrom,staggerFromTo", function (r) {
      Ut[r] = function () {
        var t = new Bt(),
          e = vt.call(arguments, 0);
        return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
      };
    });
  function Ub(t, e, r) {
    return t.setAttribute(e, r);
  }
  function ac(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }
  var Xt = function _setterPlain(t, e, r) {
      return (t[e] = r);
    },
    jt = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    Vt = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r);
    },
    Zt = function _getSetter(t, e) {
      return o(t[e]) ? jt : q(t[e]) && t.setAttribute ? Ub : Xt;
    },
    Jt = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    },
    Ht = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    Qt = function _renderComplexString(t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r; ) (i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i), (r = r._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    $t = function _renderPropTweens(t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    Wt = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a; ) (n = a._next), a.p === i && a.modifier(t, e, r), (a = n);
    },
    Kt = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i; ) (r = i._next), (i.p === t && !i.op) || i.op === t ? pa(this, i, "_pt") : i.dep || (e = 1), (i = r);
      return !e;
    },
    te = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a; ) {
        for (e = a._next, r = i; r && r.pr > a.pr; ) r = r._next;
        (a._prev = r ? r._prev : n) ? (a._prev._next = a) : (i = a), (a._next = r) ? (r._prev = a) : (n = a), (a = e);
      }
      t._pt = i;
    },
    ee =
      ((PropTween.prototype.modifier = function modifier(t, e, r) {
        (this.mSet = this.mSet || this.set), (this.set = ac), (this.m = t), (this.mt = r), (this.tween = e);
      }),
      PropTween);
  function PropTween(t, e, r, i, n, a, s, o, u) {
    (this.t = e), (this.s = i), (this.c = n), (this.p = r), (this.r = a || Jt), (this.d = s || this), (this.set = o || Xt), (this.pr = u || 0), (this._next = t) && (t._prev = this);
  }
  _(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert", function (t) {
    return (st[t] = 1);
  }),
    (at.TweenMax = at.TweenLite = Ut),
    (at.TimelineLite = at.TimelineMax = Bt),
    (F = new Bt({
      sortChildren: !1,
      defaults: E,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (G.stringFilter = ob);
  var re = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      e.forEach(function (t) {
        return (function _createPlugin(t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = o(t),
            i =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            n = {
              init: O,
              render: $t,
              add: It,
              kill: Kt,
              modifier: Wt,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Zt,
              aliases: {},
              register: 0,
            };
          if ((Ct(), t !== i)) {
            if (ht[e]) return;
            ha(i, ha(la(t, n), a)), pt(i.prototype, pt(n, la(t, a))), (ht[(i.prop = e)] = i), t.targetTest && (dt.push(i), (st[e] = 1)), (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          N(e, i), t.register && t.register(ie, i, ee);
        })(t);
      });
    },
    timeline: function timeline(t) {
      return new Bt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return F.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, r) {
      n(i) && (i = yt(i)[0]);
      var a = Z(i || {}).get,
        s = e ? ga : fa;
      return (
        "native" === e && (e = ""),
        i
          ? t
            ? s(((ht[t] && ht[t].get) || a)(i, t, e, r))
            : function (t, e, r) {
                return s(((ht[t] && ht[t].get) || a)(i, t, e, r));
              }
          : i
      );
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = yt(r)).length) {
        var n = r.map(function (t) {
            return ie.quickSetter(t, e, i);
          }),
          a = n.length;
        return function (t) {
          for (var e = a; e--; ) n[e](t);
        };
      }
      r = r[0] || {};
      var s = ht[e],
        o = Z(r),
        u = s
          ? function (t) {
              var e = new s();
              (c._pt = 0), e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && $t(1, c);
            }
          : o.set(r, e);
      return s
        ? u
        : function (t) {
            return u(r, e, i ? t + i : t, o, 1);
          };
    },
    isTweening: function isTweening(t) {
      return 0 < F.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Dt(t.ease, E.ease)), ka(E, t || {});
    },
    config: function config(t) {
      return ka(G, t || {});
    },
    registerEffect: function registerEffect(t) {
      var n = t.name,
        i = t.effect,
        e = t.plugins,
        a = t.defaults,
        s = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return t && !ht[t] && !at[t] && M(n + " effect requires " + t + " plugin.");
      }),
        (lt[n] = function (t, e, r) {
          return i(yt(t), ha(e || {}, a), r);
        }),
        s &&
          (Bt.prototype[n] = function (t, e, i) {
            return this.add(lt[n](t, r(e) ? e : (i = e) && {}, this), i);
          });
    },
    registerEase: function registerEase(t, e) {
      Pt[t] = Dt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Dt(t, e) : Pt;
    },
    getById: function getById(t) {
      return F.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
        i,
        n = new Bt(t);
      for (n.smoothChildTiming = s(t.smoothChildTiming), F.remove(n), n._dp = 0, n._time = n._tTime = F._time, r = F._first; r; ) (i = r._next), (!e && !r._dur && r instanceof Ut && r.vars.onComplete === r._targets[0]) || za(n, r, r._start - r._delay), (r = i);
      return za(F, n, 0), n;
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return H(e)
          ? Xa(e, wrap(0, e.length), t)
          : Ha(r, function (t) {
              return ((i + ((t - e) % i)) % i) + e;
            });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
          n = 2 * i;
        return H(e)
          ? Xa(e, wrapYoyo(0, e.length - 1), t)
          : Ha(r, function (t) {
              return e + (i < (t = (n + ((t - e) % n)) % n) ? n - t : t);
            });
      },
      distribute: Qa,
      random: Ta,
      snap: Sa,
      normalize: function normalize(t, e, r) {
        return Tt(t, e, 0, 1, r);
      },
      getUnit: Ja,
      clamp: function clamp(e, r, t) {
        return Ha(t, function (t) {
          return gt(e, r, t);
        });
      },
      splitColor: jb,
      toArray: yt,
      mapRange: Tt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Ja(t));
        };
      },
      interpolate: function interpolate(e, r, t, i) {
        var a = isNaN(e + r)
          ? 0
          : function (t) {
              return (1 - t) * e + t * r;
            };
        if (!a) {
          var s,
            o,
            u,
            h,
            l,
            f = n(e),
            d = {};
          if ((!0 === t && (i = 1) && (t = null), f)) (e = { p: e }), (r = { p: r });
          else if (H(e) && !H(r)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
            h--,
              (a = function func(t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }),
              (t = r);
          } else i || (e = pt(H(e) ? [] : {}, e));
          if (!u) {
            for (s in r) It.call(d, e, s, "get", r[s]);
            a = function func(t) {
              return $t(t, d) || (f ? e.p : e);
            };
          }
        }
        return Ha(t, a);
      },
      shuffle: Pa,
    },
    install: K,
    effects: lt,
    ticker: Ot,
    updateRoot: Bt.updateRoot,
    plugins: ht,
    globalTimeline: F,
    core: {
      PropTween: ee,
      globals: N,
      Tween: Ut,
      Timeline: Bt,
      Animation: Et,
      getCache: Z,
      _removeLinkedListItem: pa,
    },
  };
  _("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (re[t] = Ut[t]);
  }),
    Ot.add(Bt.updateRoot),
    (c = re.to({}, { duration: 0 }));
  function ec(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; ) r = r._next;
    return r;
  }
  function gc(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, e) {
        e._onInit = function (t) {
          var e, r;
          if (
            (n(i) &&
              ((e = {}),
              _(i, function (t) {
                return (e[t] = 1);
              }),
              (i = e)),
            a)
          ) {
            for (r in ((e = {}), i)) e[r] = a(i[r]);
            i = e;
          }
          !(function _addModifiers(t, e) {
            var r,
              i,
              n,
              a = t._targets;
            for (r in e) for (i = a.length; i--; ) (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = ec(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
          })(t, i);
        };
      },
    };
  }
  var ie =
    re.registerPlugin(
      {
        name: "attr",
        init: function init(t, e, r, i, n) {
          for (var a in e) this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a), this._props.push(a);
        },
      },
      {
        name: "endArray",
        init: function init(t, e) {
          for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
        },
      },
      gc("roundProps", Ra),
      gc("modifiers"),
      gc("snap", Sa)
    ) || re;
  (Ut.version = Bt.version = ie.version = "3.2.6"), (f = 1), t() && Ct();
  function Rc(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function Sc(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function Tc(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  }
  function Uc(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function Vc(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function Wc(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function Xc(t, e, r) {
    return (t.style[e] = r);
  }
  function Yc(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function Zc(t, e, r) {
    return (t._gsap[e] = r);
  }
  function $c(t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  }
  function _c(t, e, r, i, n) {
    var a = t._gsap;
    (a.scaleX = a.scaleY = r), a.renderTransform(n, a);
  }
  function ad(t, e, r, i, n) {
    var a = t._gsap;
    (a[e] = r), a.renderTransform(n, a);
  }
  function ed(t, e) {
    var r = ae.createElementNS ? ae.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ae.createElement(t);
    return r.style ? r : ae.createElement(t);
  }
  function fd(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(Fe, "-$1").toLowerCase()) || i.getPropertyValue(e) || (!r && fd(t, Ne(e) || e, 1)) || "";
  }
  function id() {
    !(function _windowExists() {
      return "undefined" != typeof window;
    })() || ((ne = window), (ae = ne.document), (se = ae.documentElement), (ue = ed("div") || { style: {} }), (he = ed("div")), (Ie = Ne(Ie)), (qe = Ne(qe)), (ue.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"), (fe = !!Ne("perspective")), (oe = 1));
  }
  function jd(t) {
    var e,
      r = ed("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText;
    if ((se.appendChild(r), r.appendChild(this), (this.style.display = "block"), t))
      try {
        (e = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = jd);
      } catch (t) {}
    else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), se.removeChild(r), (this.style.cssText = a), e;
  }
  function kd(t, e) {
    for (var r = e.length; r--; ) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function ld(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = jd.call(e, !0);
    }
    return (
      (r && (r.width || r.height)) || e.getBBox === jd || (r = jd.call(e, !0)),
      !r || r.width || r.x || r.y
        ? r
        : {
            x: +kd(e, ["x", "cx", "x1"]) || 0,
            y: +kd(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  }
  function md(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !ld(t));
  }
  function nd(t, e) {
    if (e) {
      var r = t.style;
      e in Se && (e = Ie), r.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), r.removeProperty(e.replace(Fe, "-$1").toLowerCase())) : r.removeAttribute(e);
    }
  }
  function od(t, e, r, i, n, a) {
    var s = new ee(t._pt, e, r, 0, 1, a ? Wc : Vc);
    return ((t._pt = s).b = i), (s.e = n), t._props.push(r), s;
  }
  function qd(t, e, r, i) {
    var n,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = ue.style,
      f = Ee.test(e),
      d = "svg" === t.tagName.toLowerCase(),
      c = (d ? "client" : "offset") + (f ? "Width" : "Height"),
      p = "px" === i,
      _ = "%" === i;
    return i === h || !u || Ge[i] || Ge[h] ? u : ("px" === h || p || (u = qd(t, e, r, "px")), (o = t.getCTM && md(t)), _ && (Se[e] || ~e.indexOf("adius")) ? aa((u / (o ? t.getBBox()[f ? "width" : "height"] : t[c])) * 100) : ((l[f ? "width" : "height"] = 100 + (p ? h : i)), (a = ~e.indexOf("adius") || ("em" === i && t.appendChild && !d) ? t : t.parentNode), o && (a = (t.ownerSVGElement || {}).parentNode), (a && a !== ae && a.appendChild) || (a = ae.body), (s = a._gsap) && _ && s.width && f && s.time === Ot.time ? aa((u / s.width) * 100) : ((!_ && "%" !== h) || (l.position = fd(t, "position")), a === t && (l.position = "static"), a.appendChild(ue), (n = ue[c]), a.removeChild(ue), (l.position = "absolute"), f && _ && (((s = Z(a)).time = Ot.time), (s.width = a[c])), aa(p ? (n * u) / 100 : n && u ? (100 / n) * u : 0))));
  }
  function rd(t, e, r, i) {
    var n;
    return oe || id(), e in Le && "transform" !== e && ~(e = Le[e]).indexOf(",") && (e = e.split(",")[0]), Se[e] && "transform" !== e ? ((n = Ze(t, i)), (n = "transformOrigin" !== e ? n[e] : Je(fd(t, qe)) + " " + n.zOrigin + "px")) : ((n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(")) || (n = (Xe[e] && Xe[e](t, e, r)) || fd(t, e) || $(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").indexOf(" ") ? qd(t, e, n, r) + r : n;
  }
  function sd(t, e, r, i) {
    if (!r || "none" === r) {
      var n = Ne(e, t, 1),
        a = n && fd(t, n, 1);
      a && a !== r && ((e = n), (r = a));
    }
    var s,
      o,
      u,
      h,
      l,
      f,
      d,
      c,
      p,
      _,
      m,
      g,
      v = new ee(this._pt, t.style, e, 0, 1, Qt),
      y = 0,
      T = 0;
    if (((v.b = r), (v.e = i), (r += ""), "auto" === (i += "") && ((t.style[e] = i), (i = fd(t, e) || i), (t.style[e] = r)), ob((s = [r, i])), (i = s[1]), (u = (r = s[0]).match(tt) || []), (i.match(tt) || []).length)) {
      for (; (o = tt.exec(i)); )
        (d = o[0]),
          (p = i.substring(y, o.index)),
          l ? (l = (l + 1) % 5) : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (l = 1),
          d !== (f = u[T++] || "") &&
            ((h = parseFloat(f) || 0),
            (m = f.substr((h + "").length)),
            (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)),
            (c = parseFloat(d)),
            (_ = d.substr((c + "").length)),
            (y = tt.lastIndex - _.length),
            _ || ((_ = _ || G.units[e] || m), y === i.length && ((i += _), (v.e += _))),
            m !== _ && (h = qd(t, e, f, _) || 0),
            (v._pt = {
              _next: v._pt,
              p: p || 1 === T ? p : ",",
              s: h,
              c: g ? g * c : c - h,
              m: l && l < 4 ? Math.round : 0,
            }));
      v.c = y < i.length ? i.substring(y, i.length) : "";
    } else v.r = "display" === e && "none" === i ? Wc : Vc;
    return it.test(i) && (v.e = 0), (this._pt = v);
  }
  function ud(t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return ("top" !== r && "bottom" !== r && "left" !== i && "right" !== i) || ((t = r), (r = i), (i = t)), (e[0] = Ue[r] || r), (e[1] = Ue[i] || i), e.join(" ");
  }
  function vd(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap;
      if ("all" === o || !0 === o) (s.cssText = ""), (i = 1);
      else for (n = (o = o.split(",")).length; -1 < --n; ) (r = o[n]), Se[r] && ((i = 1), (r = "transformOrigin" === r ? qe : Ie)), nd(a, r);
      i && (nd(a, Ie), u && (u.svg && a.removeAttribute("transform"), Ze(a, 1), (u.uncache = 1)));
    }
  }
  function zd(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function Ad(t) {
    var e = fd(t, Ie);
    return zd(e) ? je : e.substr(7).match(W).map(aa);
  }
  function Bd(t, e) {
    var r,
      i,
      n,
      a,
      s = t._gsap || Z(t),
      o = t.style,
      u = Ad(t);
    return s.svg && t.getAttribute("transform") ? ("1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? je : u) : (u !== je || t.offsetParent || t === se || s.svg || ((n = o.display), (o.display = "block"), ((r = t.parentNode) && t.offsetParent) || ((a = 1), (i = t.nextSibling), se.appendChild(t)), (u = Ad(t)), n ? (o.display = n) : nd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : se.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function Cd(t, e, r, i, n, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = n || Bd(t, !0),
      f = h.xOrigin || 0,
      d = h.yOrigin || 0,
      c = h.xOffset || 0,
      p = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      T = l[5],
      b = e.split(" "),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0;
    r ? l !== je && (o = _ * v - m * g) && ((u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o), (w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o), (x = u)) : ((w = (s = ld(t)).x + (~b[0].indexOf("%") ? (w / 100) * s.width : w)), (x = s.y + (~(b[1] || b[0]).indexOf("%") ? (x / 100) * s.height : x))), i || (!1 !== i && h.smooth) ? ((y = w - f), (T = x - d), (h.xOffset = c + (y * _ + T * g) - y), (h.yOffset = p + (y * m + T * v) - T)) : (h.xOffset = h.yOffset = 0), (h.xOrigin = w), (h.yOrigin = x), (h.smooth = !!i), (h.origin = e), (h.originIsAbsolute = !!r), (t.style[qe] = "0px 0px"), a && (od(a, h, "xOrigin", f, w), od(a, h, "yOrigin", d, x), od(a, h, "xOffset", c, h.xOffset), od(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);
  }
  function Fd(t, e, r) {
    var i = Ja(e);
    return aa(parseFloat(e) + parseFloat(qd(t, "x", r + "px", i))) + i;
  }
  function Md(t, e, r, i, a, s) {
    var o,
      u,
      h = 360,
      l = n(a),
      f = parseFloat(a) * (l && ~a.indexOf("rad") ? ze : 1),
      d = s ? f * s : f - i,
      c = i + d + "deg";
    return l && ("short" === (o = a.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), "cw" === o && d < 0 ? (d = ((d + 36e9) % h) - ~~(d / h) * h) : "ccw" === o && 0 < d && (d = ((d - 36e9) % h) - ~~(d / h) * h)), (t._pt = u = new ee(t._pt, e, r, i, d, Sc)), (u.e = c), (u.u = "deg"), t._props.push(r), u;
  }
  function Nd(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l = he.style,
      f = r._gsap;
    for (n in ((l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;"), (l[Ie] = e), ae.body.appendChild(he), (i = Ze(he, 1)), Se)) (a = f[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && ((o = Ja(a) !== (h = Ja(s)) ? qd(r, n, a, h) : parseFloat(a)), (u = parseFloat(s)), (t._pt = new ee(t._pt, f, n, o, u - o, Rc)), (t._pt.u = h || 0), t._props.push(n));
    ae.body.removeChild(he);
  }
  var ne,
    ae,
    se,
    oe,
    ue,
    he,
    le,
    fe,
    de = Pt.Power0,
    ce = Pt.Power1,
    pe = Pt.Power2,
    _e = Pt.Power3,
    me = Pt.Power4,
    ge = Pt.Linear,
    ve = Pt.Quad,
    ye = Pt.Cubic,
    Te = Pt.Quart,
    be = Pt.Quint,
    we = Pt.Strong,
    xe = Pt.Elastic,
    ke = Pt.Back,
    Me = Pt.SteppedEase,
    Oe = Pt.Bounce,
    Ce = Pt.Sine,
    Pe = Pt.Expo,
    Ae = Pt.Circ,
    Se = {},
    ze = 180 / Math.PI,
    De = Math.PI / 180,
    Re = Math.atan2,
    Fe = /([A-Z])/g,
    Ee = /(?:left|right|width|margin|padding|x)/i,
    Be = /[\s,\(]\S/,
    Le = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Ie = "transform",
    qe = Ie + "Origin",
    Ye = "O,Moz,ms,Ms,Webkit".split(","),
    Ne = function _checkPropPrefix(t, e, r) {
      var i = (e || ue).style,
        n = 5;
      if (t in i && !r) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Ye[n] + t in i); );
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ye[n] : "") + t;
    },
    Ge = { deg: 1, rad: 1, turn: 1 },
    Ue = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Xe = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var a = (t._pt = new ee(t._pt, e, r, 0, 0, vd));
          return (a.u = i), (a.pr = -10), (a.tween = n), t._props.push(r), 1;
        }
      },
    },
    je = [1, 0, 0, 1, 0, 0],
    Ve = {},
    Ze = function _parseTransform(t, e) {
      var r = t._gsap || new Ft(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        k,
        M,
        O,
        C,
        P,
        A,
        S,
        z,
        D,
        R,
        F,
        E = t.style,
        B = r.scaleX < 0,
        L = "deg",
        I = fd(t, qe) || "0";
      return (i = n = a = u = h = l = f = d = c = 0), (s = o = 1), (r.svg = !(!t.getCTM || !md(t))), (m = Bd(t, r.svg)), r.svg && ((O = !r.uncache && t.getAttribute("data-svg-origin")), Cd(t, O || I, !!O || r.originIsAbsolute, !1 !== r.smooth, m)), (p = r.xOrigin || 0), (_ = r.yOrigin || 0), m !== je && ((T = m[0]), (b = m[1]), (w = m[2]), (x = m[3]), (i = k = m[4]), (n = M = m[5]), 6 === m.length ? ((s = Math.sqrt(T * T + b * b)), (o = Math.sqrt(x * x + w * w)), (u = T || b ? Re(b, T) * ze : 0), (f = w || x ? Re(w, x) * ze + u : 0) && (o *= Math.cos(f * De)), r.svg && ((i -= p - (p * T + _ * w)), (n -= _ - (p * b + _ * x)))) : ((F = m[6]), (D = m[7]), (A = m[8]), (S = m[9]), (z = m[10]), (R = m[11]), (i = m[12]), (n = m[13]), (a = m[14]), (h = (g = Re(F, z)) * ze), g && ((O = k * (v = Math.cos(-g)) + A * (y = Math.sin(-g))), (C = M * v + S * y), (P = F * v + z * y), (A = k * -y + A * v), (S = M * -y + S * v), (z = F * -y + z * v), (R = D * -y + R * v), (k = O), (M = C), (F = P)), (l = (g = Re(-w, z)) * ze), g && ((v = Math.cos(-g)), (R = x * (y = Math.sin(-g)) + R * v), (T = O = T * v - A * y), (b = C = b * v - S * y), (w = P = w * v - z * y)), (u = (g = Re(b, T)) * ze), g && ((O = T * (v = Math.cos(g)) + b * (y = Math.sin(g))), (C = k * v + M * y), (b = b * v - T * y), (M = M * v - k * y), (T = O), (k = C)), h && 359.9 < Math.abs(h) + Math.abs(u) && ((h = u = 0), (l = 180 - l)), (s = aa(Math.sqrt(T * T + b * b + w * w))), (o = aa(Math.sqrt(M * M + F * F))), (g = Re(k, M)), (f = 2e-4 < Math.abs(g) ? g * ze : 0), (c = R ? 1 / (R < 0 ? -R : R) : 0)), r.svg && ((m = t.getAttribute("transform")), (r.forceCSS = t.setAttribute("transform", "") || !zd(fd(t, Ie))), m && t.setAttribute("transform", m))), 90 < Math.abs(f) && Math.abs(f) < 270 && (B ? ((s *= -1), (f += u <= 0 ? 180 : -180), (u += u <= 0 ? 180 : -180)) : ((o *= -1), (f += f <= 0 ? 180 : -180))), (r.x = ((r.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px"), (r.y = ((r.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px"), (r.z = a + "px"), (r.scaleX = aa(s)), (r.scaleY = aa(o)), (r.rotation = aa(u) + L), (r.rotationX = aa(h) + L), (r.rotationY = aa(l) + L), (r.skewX = f + L), (r.skewY = d + L), (r.transformPerspective = c + "px"), (r.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (E[qe] = Je(I)), (r.xOffset = r.yOffset = 0), (r.force3D = G.force3D), (r.renderTransform = r.svg ? tr : fe ? Ke : He), (r.uncache = 0), r;
    },
    Je = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    He = function _renderNon3DTransforms(t, e) {
      (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), Ke(t, e);
    },
    Qe = "0deg",
    $e = "0px",
    We = ") ",
    Ke = function _renderCSSTransforms(t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        c = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (l !== Qe || h !== Qe)) {
        var b,
          w = parseFloat(h) * De,
          x = Math.sin(w),
          k = Math.cos(w);
        (w = parseFloat(l) * De), (b = Math.cos(w)), (a = Fd(g, a, x * b * -v)), (s = Fd(g, s, -Math.sin(w) * -v)), (o = Fd(g, o, k * b * -v + v));
      }
      _ !== $e && (y += "perspective(" + _ + We), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), (!T && a === $e && s === $e && o === $e) || (y += o !== $e || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + We), u !== Qe && (y += "rotate(" + u + We), h !== Qe && (y += "rotateY(" + h + We), l !== Qe && (y += "rotateX(" + l + We), (f === Qe && d === Qe) || (y += "skew(" + f + ", " + d + We), (1 === c && 1 === p) || (y += "scale(" + c + ", " + p + We), (g.style[Ie] = y || "translate(0, 0)");
    },
    tr = function _renderSVGTransforms(t, e) {
      var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        c = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        k = parseFloat(f);
      (d = parseFloat(d)), (c = parseFloat(c)), (p = parseFloat(p)) && ((c += p = parseFloat(p)), (d += p)), d || c ? ((d *= De), (c *= De), (r = Math.cos(d) * _), (i = Math.sin(d) * _), (n = Math.sin(d - c) * -m), (a = Math.cos(d - c) * m), c && ((p *= De), (s = Math.tan(c - p)), (n *= s = Math.sqrt(1 + s * s)), (a *= s), p && ((s = Math.tan(p)), (r *= s = Math.sqrt(1 + s * s)), (i *= s))), (r = aa(r)), (i = aa(i)), (n = aa(n)), (a = aa(a))) : ((r = _), (a = m), (i = n = 0)), ((x && !~(l + "").indexOf("px")) || (k && !~(f + "").indexOf("px"))) && ((x = qd(g, "x", l, "px")), (k = qd(g, "y", f, "px"))), (v || y || T || b) && ((x = aa(x + v - (v * r + y * n) + T)), (k = aa(k + y - (v * i + y * a) + b))), (u || h) && ((s = g.getBBox()), (x = aa(x + (u / 100) * s.width)), (k = aa(k + (h / 100) * s.height))), (s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")"), g.setAttribute("transform", s), w && (g.style[Ie] = s);
    };
  _("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
      i = "Bottom",
      n = "Left",
      o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
        return r < 2 ? e + t : "border" + t + e;
      });
    Xe[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4)
        return (
          (a = o.map(function (t) {
            return rd(e, t, r);
          })),
          5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s
        );
      (a = (i + "").split(" ")),
        (s = {}),
        o.forEach(function (t, e) {
          return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        e.init(t, s, n);
    };
  });
  var er,
    rr,
    ir,
    nr = {
      name: "css",
      register: id,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, r, i, n) {
        var a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _,
          m,
          g,
          v,
          y,
          T = this._props,
          b = t.style;
        for (f in (oe || id(), e))
          if ("autoRound" !== f && ((s = e[f]), !ht[f] || !Jb(f, e, r, i, t, n)))
            if (((h = typeof s), (l = Xe[f]), "function" === h && (h = typeof (s = s.call(r, i, t, n))), "string" === h && ~s.indexOf("random(") && (s = $a(s)), l)) l(this, t, f, s, r) && (y = 1);
            else if ("--" === f.substr(0, 2)) this.add(b, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", i, n, 0, 0, f);
            else {
              if (((a = rd(t, f)), (u = parseFloat(a)), (p = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), (o = parseFloat(s)), f in Le && ("autoAlpha" === f && (1 === u && "hidden" === rd(t, "visibility") && o && (u = 0), od(this, b, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Le[f]).indexOf(",") && (f = f.split(",")[0])), (_ = f in Se)))
                if ((m || ((g = t._gsap).renderTransform || Ze(t), (v = !1 !== e.smoothOrigin && g.smooth), ((m = this._pt = new ee(this._pt, b, Ie, 0, 1, g.renderTransform, g, 0, -1)).dep = 1)), "scale" === f)) (this._pt = new ee(this._pt, g, "scaleY", g.scaleY, p ? p * o : o - g.scaleY)), T.push("scaleY", f), (f += "X");
                else {
                  if ("transformOrigin" === f) {
                    (s = ud(s)), g.svg ? Cd(t, s, 0, v, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && od(this, g, "zOrigin", g.zOrigin, c), od(this, b, f, Je(a), Je(s)));
                    continue;
                  }
                  if ("svgOrigin" === f) {
                    Cd(t, s, 1, v, 0, this);
                    continue;
                  }
                  if (f in Ve) {
                    Md(this, g, f, u, s, p);
                    continue;
                  }
                  if ("smoothOrigin" === f) {
                    od(this, g, "smooth", g.smooth, s);
                    continue;
                  }
                  if ("force3D" === f) {
                    g[f] = s;
                    continue;
                  }
                  if ("transform" === f) {
                    Nd(this, s, t);
                    continue;
                  }
                }
              else f in b || (f = Ne(f) || f);
              if (_ || ((o || 0 === o) && (u || 0 === u) && !Be.test(s) && f in b)) (d = (a + "").substr((u + "").length)) !== (c = (s + "").substr(((o = o || 0) + "").length) || (f in G.units ? G.units[f] : d)) && (u = qd(t, f, a, c)), (this._pt = new ee(this._pt, _ ? g : b, f, u, p ? p * o : o - u, "px" !== c || !1 === e.autoRound || _ ? Rc : Uc)), (this._pt.u = c || 0), d !== c && ((this._pt.b = a), (this._pt.r = Tc));
              else if (f in b) sd.call(this, t, f, a, s);
              else {
                if (!(f in t)) {
                  L(f, s);
                  continue;
                }
                this.add(t, f, t[f], s, i, n);
              }
              T.push(f);
            }
        y && te(this);
      },
      get: rd,
      aliases: Le,
      getSetter: function getSetter(t, e, r) {
        var i = Le[e];
        return i && i.indexOf(",") < 0 && (e = i), e in Se && e !== qe && (t._gsap.x || rd(t, "x")) ? (r && le === r ? ("scale" === e ? $c : Zc) : (le = r || {}) && ("scale" === e ? _c : ad)) : t.style && !q(t.style[e]) ? Xc : ~e.indexOf("-") ? Yc : Zt(t, e);
      },
      core: { _removeProperty: nd, _getMatrix: Bd },
    };
  (ie.utils.checkPrefix = Ne),
    (ir = _((er = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (rr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
      Se[t] = 1;
    })),
    _(rr, function (t) {
      (G.units[t] = "deg"), (Ve[t] = 1);
    }),
    (Le[ir[13]] = er + "," + rr),
    _("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
      var e = t.split(":");
      Le[e[1]] = ir[e[0]];
    }),
    _("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
      G.units[t] = "px";
    }),
    ie.registerPlugin(nr);
  var ar = ie.registerPlugin(nr) || ie,
    sr = ar.core.Tween;
  (e.Back = ke), (e.Bounce = Oe), (e.CSSPlugin = nr), (e.Circ = Ae), (e.Cubic = ye), (e.Elastic = xe), (e.Expo = Pe), (e.Linear = ge), (e.Power0 = de), (e.Power1 = ce), (e.Power2 = pe), (e.Power3 = _e), (e.Power4 = me), (e.Quad = ve), (e.Quart = Te), (e.Quint = be), (e.Sine = Ce), (e.SteppedEase = Me), (e.Strong = we), (e.TimelineLite = Bt), (e.TimelineMax = Bt), (e.TweenLite = Ut), (e.TweenMax = sr), (e.default = ar), (e.gsap = ar);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

/**
 * Tini Slider
 */
var tns = (function (){
  // Object.keys
  if (!Object.keys) {
    Object.keys = function(object) {
      var keys = [];
      for (var name in object) {
        if (Object.prototype.hasOwnProperty.call(object, name)) {
          keys.push(name);
        }
      }
      return keys;
    };
  }
  
  // ChildNode.remove
  if(!("remove" in Element.prototype)){
    Element.prototype.remove = function(){
      if(this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }
  
  var win = window;
  
  var raf = win.requestAnimationFrame
    || win.webkitRequestAnimationFrame
    || win.mozRequestAnimationFrame
    || win.msRequestAnimationFrame
    || function(cb) { return setTimeout(cb, 16); };
  
  var win$1 = window;
  
  var caf = win$1.cancelAnimationFrame
    || win$1.mozCancelAnimationFrame
    || function(id){ clearTimeout(id); };
  
  function extend() {
    var obj, name, copy,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length;
  
    for (; i < length; i++) {
      if ((obj = arguments[i]) !== null) {
        for (name in obj) {
          copy = obj[name];
  
          if (target === copy) {
            continue;
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  }
  
  function checkStorageValue (value) {
    return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
  }
  
  function setLocalStorage(storage, key, value, access) {
    if (access) {
      try { storage.setItem(key, value); } catch (e) {}
    }
    return value;
  }
  
  function getSlideId() {
    var id = window.tnsId;
    window.tnsId = !id ? 1 : id + 1;
    
    return 'tns' + window.tnsId;
  }
  
  function getBody () {
    var doc = document,
        body = doc.body;
  
    if (!body) {
      body = doc.createElement('body');
      body.fake = true;
    }
  
    return body;
  }
  
  var docElement = document.documentElement;
  
  function setFakeBody (body) {
    var docOverflow = '';
    if (body.fake) {
      docOverflow = docElement.style.overflow;
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }
  
    return docOverflow;
  }
  
  function resetFakeBody (body, docOverflow) {
    if (body.fake) {
      body.remove();
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      // eslint-disable-next-line
      docElement.offsetHeight;
    }
  }
  
  // get css-calc 
  
  function calc() {
    var doc = document, 
        body = getBody(),
        docOverflow = setFakeBody(body),
        div = doc.createElement('div'), 
        result = false;
  
    body.appendChild(div);
    try {
      var str = '(10px * 10)',
          vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
          val;
      for (var i = 0; i < 3; i++) {
        val = vals[i];
        div.style.width = val;
        if (div.offsetWidth === 100) { 
          result = val.replace(str, ''); 
          break;
        }
      }
    } catch (e) {}
    
    body.fake ? resetFakeBody(body, docOverflow) : div.remove();
  
    return result;
  }
  
  // get subpixel support value
  
  function percentageLayout() {
    // check subpixel layout supporting
    var doc = document,
        body = getBody(),
        docOverflow = setFakeBody(body),
        wrapper = doc.createElement('div'),
        outer = doc.createElement('div'),
        str = '',
        count = 70,
        perPage = 3,
        supported = false;
  
    wrapper.className = "tns-t-subp2";
    outer.className = "tns-t-ct";
  
    for (var i = 0; i < count; i++) {
      str += '<div></div>';
    }
  
    outer.innerHTML = str;
    wrapper.appendChild(outer);
    body.appendChild(wrapper);
  
    supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;
  
    body.fake ? resetFakeBody(body, docOverflow) : wrapper.remove();
  
    return supported;
  }
  
  function mediaquerySupport () {
    var doc = document,
        body = getBody(),
        docOverflow = setFakeBody(body),
        div = doc.createElement('div'),
        style = doc.createElement('style'),
        rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
        position;
  
    style.type = 'text/css';
    div.className = 'tns-mq-test';
  
    body.appendChild(style);
    body.appendChild(div);
  
    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(doc.createTextNode(rule));
    }
  
    position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];
  
    body.fake ? resetFakeBody(body, docOverflow) : div.remove();
  
    return position === "absolute";
  }
  
  // create and append style sheet
  function createStyleSheet (media) {
    // Create the <style> tag
    var style = document.createElement("style");
    // style.setAttribute("type", "text/css");
  
    // Add a media (and/or media query) here if you'd like!
    // style.setAttribute("media", "screen")
    // style.setAttribute("media", "only screen and (max-width : 1024px)")
    if (media) { style.setAttribute("media", media); }
  
    // WebKit hack :(
    // style.appendChild(document.createTextNode(""));
  
    // Add the <style> element to the page
    document.querySelector('head').appendChild(style);
  
    return style.sheet ? style.sheet : style.styleSheet;
  }
  
  // cross browsers addRule method
  function addCSSRule(sheet, selector, rules, index) {
    // return raf(function() {
      'insertRule' in sheet ?
        sheet.insertRule(selector + '{' + rules + '}', index) :
        sheet.addRule(selector, rules, index);
    // });
  }
  
  // cross browsers addRule method
  function removeCSSRule(sheet, index) {
    // return raf(function() {
      'deleteRule' in sheet ?
        sheet.deleteRule(index) :
        sheet.removeRule(index);
    // });
  }
  
  function getCssRulesLength(sheet) {
    var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
    return rule.length;
  }
  
  function toDegree (y, x) {
    return Math.atan2(y, x) * (180 / Math.PI);
  }
  
  function getTouchDirection(angle, range) {
    var direction = false,
        gap = Math.abs(90 - Math.abs(angle));
        
    if (gap >= 90 - range) {
      direction = 'horizontal';
    } else if (gap <= range) {
      direction = 'vertical';
    }
  
    return direction;
  }
  
  // https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
  function forEach (arr, callback, scope) {
    for (var i = 0, l = arr.length; i < l; i++) {
      callback.call(scope, arr[i], i);
    }
  }
  
  var classListSupport = 'classList' in document.createElement('_');
  
  var hasClass = classListSupport ?
      function (el, str) { return el.classList.contains(str); } :
      function (el, str) { return el.className.indexOf(str) >= 0; };
  
  var addClass = classListSupport ?
      function (el, str) {
        if (!hasClass(el,  str)) { el.classList.add(str); }
      } :
      function (el, str) {
        if (!hasClass(el,  str)) { el.className += ' ' + str; }
      };
  
  var removeClass = classListSupport ?
      function (el, str) {
        if (hasClass(el,  str)) { el.classList.remove(str); }
      } :
      function (el, str) {
        if (hasClass(el, str)) { el.className = el.className.replace(str, ''); }
      };
  
  function hasAttr(el, attr) {
    return el.hasAttribute(attr);
  }
  
  function getAttr(el, attr) {
    return el.getAttribute(attr);
  }
  
  function isNodeList(el) {
    // Only NodeList has the "item()" function
    return typeof el.item !== "undefined"; 
  }
  
  function setAttrs(els, attrs) {
    els = (isNodeList(els) || els instanceof Array) ? els : [els];
    if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }
  
    for (var i = els.length; i--;) {
      for(var key in attrs) {
        els[i].setAttribute(key, attrs[key]);
      }
    }
  }
  
  function removeAttrs(els, attrs) {
    els = (isNodeList(els) || els instanceof Array) ? els : [els];
    attrs = (attrs instanceof Array) ? attrs : [attrs];
  
    var attrLength = attrs.length;
    for (var i = els.length; i--;) {
      for (var j = attrLength; j--;) {
        els[i].removeAttribute(attrs[j]);
      }
    }
  }
  
  function arrayFromNodeList (nl) {
    var arr = [];
    for (var i = 0, l = nl.length; i < l; i++) {
      arr.push(nl[i]);
    }
    return arr;
  }
  
  function hideElement(el, forceHide) {
    if (el.style.display !== 'none') { el.style.display = 'none'; }
  }
  
  function showElement(el, forceHide) {
    if (el.style.display === 'none') { el.style.display = ''; }
  }
  
  function isVisible(el) {
    return window.getComputedStyle(el).display !== 'none';
  }
  
  function whichProperty(props){
    if (typeof props === 'string') {
      var arr = [props],
          Props = props.charAt(0).toUpperCase() + props.substr(1),
          prefixes = ['Webkit', 'Moz', 'ms', 'O'];
          
      prefixes.forEach(function(prefix) {
        if (prefix !== 'ms' || props === 'transform') {
          arr.push(prefix + Props);
        }
      });
  
      props = arr;
    }
  
    var el = document.createElement('fakeelement'),
        len = props.length;
    for(var i = 0; i < props.length; i++){
      var prop = props[i];
      if( el.style[prop] !== undefined ){ return prop; }
    }
  
    return false; // explicit for ie9-
  }
  
  function has3DTransforms(tf){
    if (!tf) { return false; }
    if (!window.getComputedStyle) { return false; }
    
    var doc = document,
        body = getBody(),
        docOverflow = setFakeBody(body),
        el = doc.createElement('p'),
        has3d,
        cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';
  
    cssTF += 'transform';
  
    // Add it to the body to get the computed style
    body.insertBefore(el, null);
  
    el.style[tf] = 'translate3d(1px,1px,1px)';
    has3d = window.getComputedStyle(el).getPropertyValue(cssTF);
  
    body.fake ? resetFakeBody(body, docOverflow) : el.remove();
  
    return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
  }
  
  // get transitionend, animationend based on transitionDuration
  // @propin: string
  // @propOut: string, first-letter uppercase
  // Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
  function getEndProperty(propIn, propOut) {
    var endProp = false;
    if (/^Webkit/.test(propIn)) {
      endProp = 'webkit' + propOut + 'End';
    } else if (/^O/.test(propIn)) {
      endProp = 'o' + propOut + 'End';
    } else if (propIn) {
      endProp = propOut.toLowerCase() + 'end';
    }
    return endProp;
  }
  
  // Test via a getter in the options object to see if the passive property is accessed
  var supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassive = true;
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e) {}
  var passiveOption = supportsPassive ? { passive: true } : false;
  
  function addEvents(el, obj, preventScrolling) {
    for (var prop in obj) {
      var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
      el.addEventListener(prop, obj[prop], option);
    }
  }
  
  function removeEvents(el, obj) {
    for (var prop in obj) {
      var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? passiveOption : false;
      el.removeEventListener(prop, obj[prop], option);
    }
  }
  
  function Events() {
    return {
      topics: {},
      on: function (eventName, fn) {
        this.topics[eventName] = this.topics[eventName] || [];
        this.topics[eventName].push(fn);
      },
      off: function(eventName, fn) {
        if (this.topics[eventName]) {
          for (var i = 0; i < this.topics[eventName].length; i++) {
            if (this.topics[eventName][i] === fn) {
              this.topics[eventName].splice(i, 1);
              break;
            }
          }
        }
      },
      emit: function (eventName, data) {
        data.type = eventName;
        if (this.topics[eventName]) {
          this.topics[eventName].forEach(function(fn) {
            fn(data, eventName);
          });
        }
      }
    };
  }
  
  function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
    var tick = Math.min(duration, 10),
        unit = (to.indexOf('%') >= 0) ? '%' : 'px',
        to = to.replace(unit, ''),
        from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
        positionTick = (to - from) / duration * tick,
        running;
  
    setTimeout(moveElement, tick);
    function moveElement() {
      duration -= tick;
      from += positionTick;
      element.style[attr] = prefix + from + unit + postfix;
      if (duration > 0) { 
        setTimeout(moveElement, tick); 
      } else {
        callback();
      }
    }
  }
  
  var tns = function(options) {
    options = extend({
      container: '.slider',
      mode: 'carousel',
      axis: 'horizontal',
      items: 1,
      gutter: 0,
      edgePadding: 0,
      fixedWidth: false,
      autoWidth: false,
      viewportMax: false,
      slideBy: 1,
      center: false,
      controls: true,
      controlsPosition: 'top',
      controlsText: ['prev', 'next'],
      controlsContainer: false,
      prevButton: false,
      nextButton: false,
      nav: true,
      navPosition: 'top',
      navContainer: false,
      navAsThumbnails: false,
      arrowKeys: false,
      speed: 300,
      autoplay: false,
      autoplayPosition: 'top',
      autoplayTimeout: 5000,
      autoplayDirection: 'forward',
      autoplayText: ['start', 'stop'],
      autoplayHoverPause: false,
      autoplayButton: false,
      autoplayButtonOutput: true,
      autoplayResetOnVisibility: true,
      animateIn: 'tns-fadeIn',
      animateOut: 'tns-fadeOut',
      animateNormal: 'tns-normal',
      animateDelay: false,
      loop: true,
      rewind: false,
      autoHeight: false,
      responsive: false,
      lazyload: false,
      lazyloadSelector: '.tns-lazy-img',
      touch: true,
      mouseDrag: false,
      swipeAngle: 15,
      nested: false,
      preventActionWhenRunning: false,
      preventScrollOnTouch: false,
      freezable: true,
      onInit: false,
      useLocalStorage: true
    }, options || {});
    
    var doc = document,
        win = window,
        KEYS = {
          ENTER: 13,
          SPACE: 32,
          LEFT: 37,
          RIGHT: 39
        },
        tnsStorage = {},
        localStorageAccess = options.useLocalStorage;
  
    if (localStorageAccess) {
      // check browser version and local storage access
      var browserInfo = navigator.userAgent;
      var uid = new Date;
  
      try {
        tnsStorage = win.localStorage;
        if (tnsStorage) {
          tnsStorage.setItem(uid, uid);
          localStorageAccess = tnsStorage.getItem(uid) == uid;
          tnsStorage.removeItem(uid);
        } else {
          localStorageAccess = false;
        }
        if (!localStorageAccess) { tnsStorage = {}; }
      } catch(e) {
        localStorageAccess = false;
      }
  
      if (localStorageAccess) {
        // remove storage when browser version changes
        if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
          ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
        }
        // update browserInfo
        localStorage['tnsApp'] = browserInfo;
      }
    }
  
    var CALC = tnsStorage['tC'] ? checkStorageValue(tnsStorage['tC']) : setLocalStorage(tnsStorage, 'tC', calc(), localStorageAccess),
        PERCENTAGELAYOUT = tnsStorage['tPL'] ? checkStorageValue(tnsStorage['tPL']) : setLocalStorage(tnsStorage, 'tPL', percentageLayout(), localStorageAccess),
        CSSMQ = tnsStorage['tMQ'] ? checkStorageValue(tnsStorage['tMQ']) : setLocalStorage(tnsStorage, 'tMQ', mediaquerySupport(), localStorageAccess),
        TRANSFORM = tnsStorage['tTf'] ? checkStorageValue(tnsStorage['tTf']) : setLocalStorage(tnsStorage, 'tTf', whichProperty('transform'), localStorageAccess),
        HAS3DTRANSFORMS = tnsStorage['t3D'] ? checkStorageValue(tnsStorage['t3D']) : setLocalStorage(tnsStorage, 't3D', has3DTransforms(TRANSFORM), localStorageAccess),
        TRANSITIONDURATION = tnsStorage['tTDu'] ? checkStorageValue(tnsStorage['tTDu']) : setLocalStorage(tnsStorage, 'tTDu', whichProperty('transitionDuration'), localStorageAccess),
        TRANSITIONDELAY = tnsStorage['tTDe'] ? checkStorageValue(tnsStorage['tTDe']) : setLocalStorage(tnsStorage, 'tTDe', whichProperty('transitionDelay'), localStorageAccess),
        ANIMATIONDURATION = tnsStorage['tADu'] ? checkStorageValue(tnsStorage['tADu']) : setLocalStorage(tnsStorage, 'tADu', whichProperty('animationDuration'), localStorageAccess),
        ANIMATIONDELAY = tnsStorage['tADe'] ? checkStorageValue(tnsStorage['tADe']) : setLocalStorage(tnsStorage, 'tADe', whichProperty('animationDelay'), localStorageAccess),
        TRANSITIONEND = tnsStorage['tTE'] ? checkStorageValue(tnsStorage['tTE']) : setLocalStorage(tnsStorage, 'tTE', getEndProperty(TRANSITIONDURATION, 'Transition'), localStorageAccess),
        ANIMATIONEND = tnsStorage['tAE'] ? checkStorageValue(tnsStorage['tAE']) : setLocalStorage(tnsStorage, 'tAE', getEndProperty(ANIMATIONDURATION, 'Animation'), localStorageAccess);
  
    // get element nodes from selectors
    var supportConsoleWarn = win.console && typeof win.console.warn === "function",
        tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'], 
        optionsElements = {};
        
    tnsList.forEach(function(item) {
      if (typeof options[item] === 'string') {
        var str = options[item],
            el = doc.querySelector(str);
        optionsElements[item] = str;
  
        if (el && el.nodeName) {
          options[item] = el;
        } else {
          if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
          return;
        }
      }
    });
  
    // make sure at least 1 slide
    if (options.container.children.length < 1) {
      if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
      return;
     }
  
    // update options
    var responsive = options.responsive,
        nested = options.nested,
        carousel = options.mode === 'carousel' ? true : false;
  
    if (responsive) {
      // apply responsive[0] to options and remove it
      if (0 in responsive) {
        options = extend(options, responsive[0]);
        delete responsive[0];
      }
  
      var responsiveTem = {};
      for (var key in responsive) {
        var val = responsive[key];
        // update responsive
        // from: 300: 2
        // to: 
        //   300: { 
        //     items: 2 
        //   } 
        val = typeof val === 'number' ? {items: val} : val;
        responsiveTem[key] = val;
      }
      responsive = responsiveTem;
      responsiveTem = null;
    }
  
    // update options
    function updateOptions (obj) {
      for (var key in obj) {
        if (!carousel) {
          if (key === 'slideBy') { obj[key] = 'page'; }
          if (key === 'edgePadding') { obj[key] = false; }
          if (key === 'autoHeight') { obj[key] = false; }
        }
  
        // update responsive options
        if (key === 'responsive') { updateOptions(obj[key]); }
      }
    }
    if (!carousel) { updateOptions(options); }
  
  
    // === define and set variables ===
    if (!carousel) {
      options.axis = 'horizontal';
      options.slideBy = 'page';
      options.edgePadding = false;
  
      var animateIn = options.animateIn,
          animateOut = options.animateOut,
          animateDelay = options.animateDelay,
          animateNormal = options.animateNormal;
    }
  
    var horizontal = options.axis === 'horizontal' ? true : false,
        outerWrapper = doc.createElement('div'),
        innerWrapper = doc.createElement('div'),
        middleWrapper,
        container = options.container,
        containerParent = container.parentNode,
        containerHTML = container.outerHTML,
        slideItems = container.children,
        slideCount = slideItems.length,
        breakpointZone,
        windowWidth = getWindowWidth(),
        isOn = false;
    if (responsive) { setBreakpointZone(); }
    if (carousel) { container.className += ' tns-vpfix'; }
  
    // fixedWidth: viewport > rightBoundary > indexMax
    var autoWidth = options.autoWidth,
        fixedWidth = getOption('fixedWidth'),
        edgePadding = getOption('edgePadding'),
        gutter = getOption('gutter'),
        viewport = getViewportWidth(),
        center = getOption('center'),
        items = !autoWidth ? Math.floor(getOption('items')) : 1,
        slideBy = getOption('slideBy'),
        viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
        arrowKeys = getOption('arrowKeys'),
        speed = getOption('speed'),
        rewind = options.rewind,
        loop = rewind ? false : options.loop,
        autoHeight = getOption('autoHeight'),
        controls = getOption('controls'),
        controlsText = getOption('controlsText'),
        nav = getOption('nav'),
        touch = getOption('touch'),
        mouseDrag = getOption('mouseDrag'),
        autoplay = getOption('autoplay'),
        autoplayTimeout = getOption('autoplayTimeout'),
        autoplayText = getOption('autoplayText'),
        autoplayHoverPause = getOption('autoplayHoverPause'),
        autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
        sheet = createStyleSheet(),
        lazyload = options.lazyload,
        lazyloadSelector = options.lazyloadSelector,
        slidePositions, // collection of slide positions
        slideItemsOut = [],
        cloneCount = loop ? getCloneCountForLoop() : 0,
        slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
        hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
        rightBoundary = fixedWidth ? getRightBoundary() : null,
        updateIndexBeforeTransform = (!carousel || !loop) ? true : false,
        // transform
        transformAttr = horizontal ? 'left' : 'top',
        transformPrefix = '',
        transformPostfix = '',
        // index
        getIndexMax = (function () {
          if (fixedWidth) {
            return function() { return center && !loop ? slideCount - 1 : Math.ceil(- rightBoundary / (fixedWidth + gutter)); };
          } else if (autoWidth) {
            return function() {
              for (var i = slideCountNew; i--;) {
                if (slidePositions[i] >= - rightBoundary) { return i; }
              }
            };
          } else {
            return function() {
              if (center && carousel && !loop) {
                return slideCount - 1;
              } else {
                return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
              }
            };
          }
        })(),
        index = getStartIndex(getOption('startIndex')),
        indexCached = index,
        displayIndex = getCurrentSlide(),
        indexMin = 0,
        indexMax = !autoWidth ? getIndexMax() : null,
        // resize
        resizeTimer,
        preventActionWhenRunning = options.preventActionWhenRunning,
        swipeAngle = options.swipeAngle,
        moveDirectionExpected = swipeAngle ? '?' : true,
        running = false,
        onInit = options.onInit,
        events = new Events(),
        // id, class
        newContainerClasses = ' tns-slider tns-' + options.mode,
        slideId = container.id || getSlideId(),
        disable = getOption('disable'),
        disabled = false,
        freezable = options.freezable,
        freeze = freezable && !autoWidth ? getFreeze() : false,
        frozen = false,
        controlsEvents = {
          'click': onControlsClick,
          'keydown': onControlsKeydown
        },
        navEvents = {
          'click': onNavClick,
          'keydown': onNavKeydown
        },
        hoverEvents = {
          'mouseover': mouseoverPause,
          'mouseout': mouseoutRestart
        },
        visibilityEvent = {'visibilitychange': onVisibilityChange},
        docmentKeydownEvent = {'keydown': onDocumentKeydown},
        touchEvents = {
          'touchstart': onPanStart,
          'touchmove': onPanMove,
          'touchend': onPanEnd,
          'touchcancel': onPanEnd
        }, dragEvents = {
          'mousedown': onPanStart,
          'mousemove': onPanMove,
          'mouseup': onPanEnd,
          'mouseleave': onPanEnd
        },
        hasControls = hasOption('controls'),
        hasNav = hasOption('nav'),
        navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
        hasAutoplay = hasOption('autoplay'),
        hasTouch = hasOption('touch'),
        hasMouseDrag = hasOption('mouseDrag'),
        slideActiveClass = 'tns-slide-active',
        imgCompleteClass = 'tns-complete',
        imgEvents = {
          'load': onImgLoaded,
          'error': onImgFailed
        },
        imgsComplete,
        liveregionCurrent,
        preventScroll = options.preventScrollOnTouch === 'force' ? true : false;
  
    // controls
    if (hasControls) {
      var controlsContainer = options.controlsContainer,
          controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
          prevButton = options.prevButton,
          nextButton = options.nextButton,
          prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
          nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
          prevIsButton,
          nextIsButton;
    }
  
    // nav
    if (hasNav) {
      var navContainer = options.navContainer,
          navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
          navItems,
          pages = autoWidth ? slideCount : getPages(),
          pagesCached = 0,
          navClicked = -1,
          navCurrentIndex = getCurrentNavIndex(),
          navCurrentIndexCached = navCurrentIndex,
          navActiveClass = 'tns-nav-active',
          navStr = 'Carousel Page ',
          navStrCurrent = ' (Current Slide)';
    }
  
    // autoplay
    if (hasAutoplay) {
      var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
          autoplayButton = options.autoplayButton,
          autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
          autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
          autoplayTimer,
          animating,
          autoplayHoverPaused,
          autoplayUserPaused,
          autoplayVisibilityPaused;
    }
  
    if (hasTouch || hasMouseDrag) {
      var initPosition = {},
          lastPosition = {},
          translateInit,
          disX,
          disY,
          panStart = false,
          rafIndex,
          getDist = horizontal ? 
            function(a, b) { return a.x - b.x; } :
            function(a, b) { return a.y - b.y; };
    }
    
    // disable slider when slidecount <= items
    if (!autoWidth) { resetVariblesWhenDisable(disable || freeze); }
  
    if (TRANSFORM) {
      transformAttr = TRANSFORM;
      transformPrefix = 'translate';
  
      if (HAS3DTRANSFORMS) {
        transformPrefix += horizontal ? '3d(' : '3d(0px, ';
        transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
      } else {
        transformPrefix += horizontal ? 'X(' : 'Y(';
        transformPostfix = ')';
      }
  
    }
  
    if (carousel) { container.className = container.className.replace('tns-vpfix', ''); }
    initStructure();
    initSheet();
    initSliderTransform();
  
    // === COMMON FUNCTIONS === //
    function resetVariblesWhenDisable (condition) {
      if (condition) {
        controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
      }
    }
  
    function getCurrentSlide () {
      var tem = carousel ? index - cloneCount : index;
      while (tem < 0) { tem += slideCount; }
      return tem%slideCount + 1;
    }
  
    function getStartIndex (ind) {
      ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
      return carousel ? ind + cloneCount : ind;
    }
  
    function getAbsIndex (i) {
      if (i == null) { i = index; }
  
      if (carousel) { i -= cloneCount; }
      while (i < 0) { i += slideCount; }
  
      return Math.floor(i%slideCount);
    }
  
    function getCurrentNavIndex () {
      var absIndex = getAbsIndex(),
          result;
  
      result = navAsThumbnails ? absIndex : 
        fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : 
            Math.floor(absIndex / items);
  
      // set active nav to the last one when reaches the right edge
      if (!loop && carousel && index === indexMax) { result = pages - 1; }
  
      return result;
    }
  
    function getItemsMax () {
      // fixedWidth or autoWidth while viewportMax is not available
      if (autoWidth || (fixedWidth && !viewportMax)) {
        return slideCount - 1;
      // most cases
      } else {
        var str = fixedWidth ? 'fixedWidth' : 'items',
            arr = [];
  
        if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }
  
        if (responsive) {
          for (var bp in responsive) {
            var tem = responsive[bp][str];
            if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
          }
        }
  
        if (!arr.length) { arr.push(0); }
  
        return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
      }
    }
  
    function getCloneCountForLoop () {
      var itemsMax = getItemsMax(),
          result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
      result = Math.max(itemsMax, result);
  
      return hasOption('edgePadding') ? result + 1 : result;
    }
  
    function getWindowWidth () {
      return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
    }
  
    function getInsertPosition (pos) {
      return pos === 'top' ? 'afterbegin' : 'beforeend';
    }
  
    function getClientWidth (el) {
      var div = doc.createElement('div'), rect, width;
      el.appendChild(div);
      rect = div.getBoundingClientRect();
      width = rect.right - rect.left;
      div.remove();
      return width || getClientWidth(el.parentNode);
    }
  
    function getViewportWidth () {
      var gap = edgePadding ? edgePadding * 2 - gutter : 0;
      return getClientWidth(containerParent) - gap;
    }
  
    function hasOption (item) {
      if (options[item]) {
        return true;
      } else {
        if (responsive) {
          for (var bp in responsive) {
            if (responsive[bp][item]) { return true; }
          }
        }
        return false;
      }
    }
  
    // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    function getOption (item, ww) {
      if (ww == null) { ww = windowWidth; }
  
      if (item === 'items' && fixedWidth) {
        return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;
  
      } else {
        var result = options[item];
  
        if (responsive) {
          for (var bp in responsive) {
            // bp: convert string to number
            if (ww >= parseInt(bp)) {
              if (item in responsive[bp]) { result = responsive[bp][item]; }
            }
          }
        }
  
        if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
        if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }
  
        return result;
      }
    }
  
    function getSlideMarginLeft (i) {
      return CALC ? 
        CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : 
        i * 100 / slideCountNew + '%';
    }
  
    function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
      var str = '';
  
      if (edgePaddingTem !== undefined) {
        var gap = edgePaddingTem;
        if (gutterTem) { gap -= gutterTem; }
        str = horizontal ?
          'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :
          'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
      } else if (gutterTem && !fixedWidthTem) {
        var gutterTemUnit = '-' + gutterTem + 'px',
            dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
        str = 'margin: 0 ' + dir + ';';
      }
  
      if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) { str += getTransitionDurationStyle(speedTem); }
      return str;
    }
  
    function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
      if (fixedWidthTem) {
        return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
      } else {
        return CALC ?
          CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :
          slideCountNew * 100 / itemsTem + '%';
      }
    }
  
    function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
      var width;
  
      if (fixedWidthTem) {
        width = (fixedWidthTem + gutterTem) + 'px';
      } else {
        if (!carousel) { itemsTem = Math.floor(itemsTem); }
        var dividend = carousel ? slideCountNew : itemsTem;
        width = CALC ? 
          CALC + '(100% / ' + dividend + ')' : 
          100 / dividend + '%';
      }
  
      width = 'width:' + width;
  
      // inner slider: overwrite outer slider styles
      return nested !== 'inner' ? width + ';' : width + ' !important;';
    }
  
    function getSlideGutterStyle (gutterTem) {
      var str = '';
  
      // gutter maybe interger || 0
      // so can't use 'if (gutter)'
      if (gutterTem !== false) {
        var prop = horizontal ? 'padding-' : 'margin-',
            dir = horizontal ? 'right' : 'bottom';
        str = prop +  dir + ': ' + gutterTem + 'px;';
      }
  
      return str;
    }
  
    function getCSSPrefix (name, num) {
      var prefix = name.substring(0, name.length - num).toLowerCase();
      if (prefix) { prefix = '-' + prefix + '-'; }
  
      return prefix;
    }
  
    function getTransitionDurationStyle (speed) {
      return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
    }
  
    function getAnimationDurationStyle (speed) {
      return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
    }
  
    function initStructure () {
      var classOuter = 'tns-outer',
          classInner = 'tns-inner',
          hasGutter = hasOption('gutter');
  
      outerWrapper.className = classOuter;
      innerWrapper.className = classInner;
      outerWrapper.id = slideId + '-ow';
      innerWrapper.id = slideId + '-iw';
  
      // set container properties
      if (container.id === '') { container.id = slideId; }
      newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
      newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
      if (autoWidth) { newContainerClasses += ' tns-autowidth'; }
      newContainerClasses += ' tns-' + options.axis;
      container.className += newContainerClasses;
  
      // add constrain layer for carousel
      if (carousel) {
        middleWrapper = doc.createElement('div');
        middleWrapper.id = slideId + '-mw';
        middleWrapper.className = 'tns-ovh';
  
        outerWrapper.appendChild(middleWrapper);
        middleWrapper.appendChild(innerWrapper);
      } else {
        outerWrapper.appendChild(innerWrapper);
      }
  
      if (autoHeight) {
        var wp = middleWrapper ? middleWrapper : innerWrapper;
        wp.className += ' tns-ah';
      }
  
      containerParent.insertBefore(outerWrapper, container);
      innerWrapper.appendChild(container);
  
      // add id, class, aria attributes 
      // before clone slides
      forEach(slideItems, function(item, i) {
        addClass(item, 'tns-item');
        if (!item.id) { item.id = slideId + '-item' + i; }
        if (!carousel && animateNormal) { addClass(item, animateNormal); }
        setAttrs(item, {
          'aria-hidden': 'true',
          'tabindex': '-1'
        });
      });
  
      // ## clone slides
      // carousel: n + slides + n
      // gallery:      slides + n
      if (cloneCount) {
        var fragmentBefore = doc.createDocumentFragment(), 
            fragmentAfter = doc.createDocumentFragment();
  
        for (var j = cloneCount; j--;) {
          var num = j%slideCount,
              cloneFirst = slideItems[num].cloneNode(true);
          removeAttrs(cloneFirst, 'id');
          fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);
  
          if (carousel) {
            var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
            removeAttrs(cloneLast, 'id');
            fragmentBefore.appendChild(cloneLast);
          }
        }
  
        container.insertBefore(fragmentBefore, container.firstChild);
        container.appendChild(fragmentAfter);
        slideItems = container.children;
      }
  
    }
  
    function initSliderTransform () {
      // ## images loaded/failed
      if (hasOption('autoHeight') || autoWidth || !horizontal) {
        var imgs = container.querySelectorAll('img');
  
        // add complete class if all images are loaded/failed
        forEach(imgs, function(img) {
          var src = img.src;
          
          if (src && src.indexOf('data:image') < 0) {
            addEvents(img, imgEvents);
            img.src = '';
            img.src = src;
            addClass(img, 'loading');
          } else if (!lazyload) {
            imgLoaded(img);
          }
        });
  
        // All imgs are completed
        raf(function(){ imgsLoadedCheck(arrayFromNodeList(imgs), function() { imgsComplete = true; }); });
  
        // Check imgs in window only for auto height
        if (!autoWidth && horizontal) { imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1)); }
  
        lazyload ? initSliderTransformStyleCheck() : raf(function(){ imgsLoadedCheck(arrayFromNodeList(imgs), initSliderTransformStyleCheck); });
  
      } else {
        // set container transform property
        if (carousel) { doContainerTransformSilent(); }
  
        // update slider tools and events
        initTools();
        initEvents();
      }
    }
  
    function initSliderTransformStyleCheck () {
      if (autoWidth) {
        // check styles application
        var num = loop ? index : slideCount - 1;
        (function stylesApplicationCheck() {
          slideItems[num - 1].getBoundingClientRect().right.toFixed(2) === slideItems[num].getBoundingClientRect().left.toFixed(2) ?
          initSliderTransformCore() :
          setTimeout(function(){ stylesApplicationCheck(); }, 16);
        })();
      } else {
        initSliderTransformCore();
      }
    }
  
  
    function initSliderTransformCore () {
      // run Fn()s which are rely on image loading
      if (!horizontal || autoWidth) {
        setSlidePositions();
  
        if (autoWidth) {
          rightBoundary = getRightBoundary();
          if (freezable) { freeze = getFreeze(); }
          indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
          resetVariblesWhenDisable(disable || freeze);
        } else {
          updateContentWrapperHeight();
        }
      }
  
      // set container transform property
      if (carousel) { doContainerTransformSilent(); }
  
      // update slider tools and events
      initTools();
      initEvents();
    }
  
    function initSheet () {
      // gallery:
      // set animation classes and left value for gallery slider
      if (!carousel) { 
        for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
          var item = slideItems[i];
          item.style.left = (i - index) * 100 / items + '%';
          addClass(item, animateIn);
          removeClass(item, animateNormal);
        }
      }
  
      // #### LAYOUT
  
      // ## INLINE-BLOCK VS FLOAT
  
      // ## PercentageLayout:
      // slides: inline-block
      // remove blank space between slides by set font-size: 0
  
      // ## Non PercentageLayout:
      // slides: float
      //         margin-right: -100%
      //         margin-left: ~
  
      // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
      if (horizontal) {
        if (PERCENTAGELAYOUT || autoWidth) {
          addCSSRule(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', getCssRulesLength(sheet));
          addCSSRule(sheet, '#' + slideId, 'font-size:0;', getCssRulesLength(sheet));
        } else if (carousel) {
          forEach(slideItems, function (slide, i) {
            slide.style.marginLeft = getSlideMarginLeft(i);
          });
        }
      }
  
  
      // ## BASIC STYLES
      if (CSSMQ) {
        // middle wrapper style
        if (TRANSITIONDURATION) {
          var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
          addCSSRule(sheet, '#' + slideId + '-mw', str, getCssRulesLength(sheet));
        }
  
        // inner wrapper styles
        str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
        addCSSRule(sheet, '#' + slideId + '-iw', str, getCssRulesLength(sheet));
  
        // container styles
        if (carousel) {
          str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
          if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
          addCSSRule(sheet, '#' + slideId, str, getCssRulesLength(sheet));
        }
  
        // slide styles
        str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
        if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
        // set gallery items transition-duration
        if (!carousel) {
          if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
          if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
        }
        if (str) { addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet)); }
  
      // non CSS mediaqueries: IE8
      // ## update inner wrapper, container, slides if needed
      // set inline styles for inner wrapper & container
      // insert stylesheet (one line) for slides only (since slides are many)
      } else {
        // middle wrapper styles
        update_carousel_transition_duration();
  
        // inner wrapper styles
        innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);
  
        // container styles
        if (carousel && horizontal && !autoWidth) {
          container.style.width = getContainerWidth(fixedWidth, gutter, items);
        }
  
        // slide styles
        var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
        if (gutter) { str += getSlideGutterStyle(gutter); }
  
        // append to the last line
        if (str) { addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet)); }
      }
  
      // ## MEDIAQUERIES
      if (responsive && CSSMQ) {
        for (var bp in responsive) {
          // bp: convert string to number
          bp = parseInt(bp);
  
          var opts = responsive[bp],
              str = '',
              middleWrapperStr = '',
              innerWrapperStr = '',
              containerStr = '',
              slideStr = '',
              itemsBP = !autoWidth ? getOption('items', bp) : null,
              fixedWidthBP = getOption('fixedWidth', bp),
              speedBP = getOption('speed', bp),
              edgePaddingBP = getOption('edgePadding', bp),
              autoHeightBP = getOption('autoHeight', bp),
              gutterBP = getOption('gutter', bp);
  
          // middle wrapper string
          if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
            middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
          }
  
          // inner wrapper string
          if ('edgePadding' in opts || 'gutter' in opts) {
            innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
          }
  
          // container string
          if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
            containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
          }
          if (TRANSITIONDURATION && 'speed' in opts) {
            containerStr += getTransitionDurationStyle(speedBP);
          }
          if (containerStr) {
            containerStr = '#' + slideId + '{' + containerStr + '}';
          }
  
          // slide string
          if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {
            slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
          }
          if ('gutter' in opts) {
            slideStr += getSlideGutterStyle(gutterBP);
          }
          // set gallery items transition-duration
          if (!carousel && 'speed' in opts) {
            if (TRANSITIONDURATION) { slideStr += getTransitionDurationStyle(speedBP); }
            if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
          }
          if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }
  
          // add up
          str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;
  
          if (str) {
            sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
          }
        }
      }
    }
  
    function initTools () {
      // == slides ==
      updateSlideStatus();
  
      // == live region ==
      outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
      liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');
  
      // == autoplayInit ==
      if (hasAutoplay) {
        var txt = autoplay ? 'stop' : 'start';
        if (autoplayButton) {
          setAttrs(autoplayButton, {'data-action': txt});
        } else if (options.autoplayButtonOutput) {
          outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
          autoplayButton = outerWrapper.querySelector('[data-action]');
        }
  
        // add event
        if (autoplayButton) {
          addEvents(autoplayButton, {'click': toggleAutoplay});
        }
  
        if (autoplay) {
          startAutoplay();
          if (autoplayHoverPause) { addEvents(container, hoverEvents); }
          if (autoplayResetOnVisibility) { addEvents(container, visibilityEvent); }
        }
      }
   
      // == navInit ==
      if (hasNav) {
        var initIndex = !carousel ? 0 : cloneCount;
        // customized nav
        // will not hide the navs in case they're thumbnails
        if (navContainer) {
          setAttrs(navContainer, {'aria-label': 'Carousel Pagination'});
          navItems = navContainer.children;
          forEach(navItems, function(item, i) {
            setAttrs(item, {
              'data-nav': i,
              'tabindex': '-1',
              'aria-label': navStr + (i + 1),
              'aria-controls': slideId,
            });
          });
  
        // generated nav 
        } else {
          var navHtml = '',
              hiddenStr = navAsThumbnails ? '' : 'style="display:none"';
          for (var i = 0; i < slideCount; i++) {
            // hide nav items by default
            navHtml += '<button data-nav="' + i +'" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) +'"></button>';
          }
          navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
          outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);
  
          navContainer = outerWrapper.querySelector('.tns-nav');
          navItems = navContainer.children;
        }
  
        updateNavVisibility();
  
        // add transition
        if (TRANSITIONDURATION) {
          var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
              str = 'transition: all ' + speed / 1000 + 's';
  
          if (prefix) {
            str = '-' + prefix + '-' + str;
          }
  
          addCSSRule(sheet, '[aria-controls^=' + slideId + '-item]', str, getCssRulesLength(sheet));
        }
  
        setAttrs(navItems[navCurrentIndex], {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
        removeAttrs(navItems[navCurrentIndex], 'tabindex');
        addClass(navItems[navCurrentIndex], navActiveClass);
  
        // add events
        addEvents(navContainer, navEvents);
      }
  
  
  
      // == controlsInit ==
      if (hasControls) {
        if (!controlsContainer && (!prevButton || !nextButton)) {
          outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[1] + '</button></div>');
  
          controlsContainer = outerWrapper.querySelector('.tns-controls');
        }
  
        if (!prevButton || !nextButton) {
          prevButton = controlsContainer.children[0];
          nextButton = controlsContainer.children[1];
        }
  
        if (options.controlsContainer) {
          setAttrs(controlsContainer, {
            'aria-label': 'Carousel Navigation',
            'tabindex': '0'
          });
        }
  
        if (options.controlsContainer || (options.prevButton && options.nextButton)) {
          setAttrs([prevButton, nextButton], {
            'aria-controls': slideId,
            'tabindex': '-1',
          });
        }
        
        if (options.controlsContainer || (options.prevButton && options.nextButton)) {
          setAttrs(prevButton, {'data-controls' : 'prev'});
          setAttrs(nextButton, {'data-controls' : 'next'});
        }
  
        prevIsButton = isButton(prevButton);
        nextIsButton = isButton(nextButton);
  
        updateControlsStatus();
  
        // add events
        if (controlsContainer) {
          addEvents(controlsContainer, controlsEvents);
        } else {
          addEvents(prevButton, controlsEvents);
          addEvents(nextButton, controlsEvents);
        }
      }
  
      // hide tools if needed
      disableUI();
    }
  
    function initEvents () {
      // add events
      if (carousel && TRANSITIONEND) {
        var eve = {};
        eve[TRANSITIONEND] = onTransitionEnd;
        addEvents(container, eve);
      }
  
      if (touch) { addEvents(container, touchEvents, options.preventScrollOnTouch); }
      if (mouseDrag) { addEvents(container, dragEvents); }
      if (arrowKeys) { addEvents(doc, docmentKeydownEvent); }
  
      if (nested === 'inner') {
        events.on('outerResized', function () {
          resizeTasks();
          events.emit('innerLoaded', info());
        });
      } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
        addEvents(win, {'resize': onResize});
      }
  
      if (autoHeight) {
        if (nested === 'outer') {
          events.on('innerLoaded', doAutoHeight);
        } else if (!disable) { doAutoHeight(); }
      }
  
      doLazyLoad();
      if (disable) { disableSlider(); } else if (freeze) { freezeSlider(); }
  
      events.on('indexChanged', additionalUpdates);
      if (nested === 'inner') { events.emit('innerLoaded', info()); }
      if (typeof onInit === 'function') { onInit(info()); }
      isOn = true;
    }
  
    function destroy () {
      // sheet
      sheet.disabled = true;
      if (sheet.ownerNode) { sheet.ownerNode.remove(); }
  
      // remove win event listeners
      removeEvents(win, {'resize': onResize});
  
      // arrowKeys, controls, nav
      if (arrowKeys) { removeEvents(doc, docmentKeydownEvent); }
      if (controlsContainer) { removeEvents(controlsContainer, controlsEvents); }
      if (navContainer) { removeEvents(navContainer, navEvents); }
  
      // autoplay
      removeEvents(container, hoverEvents);
      removeEvents(container, visibilityEvent);
      if (autoplayButton) { removeEvents(autoplayButton, {'click': toggleAutoplay}); }
      if (autoplay) { clearInterval(autoplayTimer); }
  
      // container
      if (carousel && TRANSITIONEND) {
        var eve = {};
        eve[TRANSITIONEND] = onTransitionEnd;
        removeEvents(container, eve);
      }
      if (touch) { removeEvents(container, touchEvents); }
      if (mouseDrag) { removeEvents(container, dragEvents); }
  
      // cache Object values in options && reset HTML
      var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];
  
      tnsList.forEach(function(item, i) {
        var el = item === 'container' ? outerWrapper : options[item];
  
        if (typeof el === 'object') {
          var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
              parentEl = el.parentNode;
          el.outerHTML = htmlList[i];
          options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
        }
      });
  
  
      // reset variables
      tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
      // check variables
      // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });
  
      for (var a in this) {
        if (a !== 'rebuild') { this[a] = null; }
      }
      isOn = false;
    }
  
  // === ON RESIZE ===
    // responsive || fixedWidth || autoWidth || !horizontal
    function onResize (e) {
      raf(function(){ resizeTasks(getEvent(e)); });
    }
  
    function resizeTasks (e) {
      if (!isOn) { return; }
      if (nested === 'outer') { events.emit('outerResized', info(e)); }
      windowWidth = getWindowWidth();
      var bpChanged,
          breakpointZoneTem = breakpointZone,
          needContainerTransform = false;
  
      if (responsive) {
        setBreakpointZone();
        bpChanged = breakpointZoneTem !== breakpointZone;
        // if (hasRightDeadZone) { needContainerTransform = true; } // *?
        if (bpChanged) { events.emit('newBreakpointStart', info(e)); }
      }
  
      var indChanged,
          itemsChanged,
          itemsTem = items,
          disableTem = disable,
          freezeTem = freeze,
          arrowKeysTem = arrowKeys,
          controlsTem = controls,
          navTem = nav,
          touchTem = touch,
          mouseDragTem = mouseDrag,
          autoplayTem = autoplay,
          autoplayHoverPauseTem = autoplayHoverPause,
          autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
          indexTem = index;
  
      if (bpChanged) {
        var fixedWidthTem = fixedWidth,
            autoHeightTem = autoHeight,
            controlsTextTem = controlsText,
            centerTem = center,
            autoplayTextTem = autoplayText;
  
        if (!CSSMQ) {
          var gutterTem = gutter,
              edgePaddingTem = edgePadding;
        }
      }
  
      // get option:
      // fixed width: viewport, fixedWidth, gutter => items
      // others: window width => all variables
      // all: items => slideBy
      arrowKeys = getOption('arrowKeys');
      controls = getOption('controls');
      nav = getOption('nav');
      touch = getOption('touch');
      center = getOption('center');
      mouseDrag = getOption('mouseDrag');
      autoplay = getOption('autoplay');
      autoplayHoverPause = getOption('autoplayHoverPause');
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');
  
      if (bpChanged) {
        disable = getOption('disable');
        fixedWidth = getOption('fixedWidth');
        speed = getOption('speed');
        autoHeight = getOption('autoHeight');
        controlsText = getOption('controlsText');
        autoplayText = getOption('autoplayText');
        autoplayTimeout = getOption('autoplayTimeout');
  
        if (!CSSMQ) {
          edgePadding = getOption('edgePadding');
          gutter = getOption('gutter');
        }
      }
      // update options
      resetVariblesWhenDisable(disable);
  
      viewport = getViewportWidth(); // <= edgePadding, gutter
      if ((!horizontal || autoWidth) && !disable) {
        setSlidePositions();
        if (!horizontal) {
          updateContentWrapperHeight(); // <= setSlidePositions
          needContainerTransform = true;
        }
      }
      if (fixedWidth || autoWidth) {
        rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
                                            // fixedWidth: <= viewport, fixedWidth, gutter
        indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
                                  // fixedWidth: <= rightBoundary, fixedWidth, gutter
      }
  
      if (bpChanged || fixedWidth) {
        items = getOption('items');
        slideBy = getOption('slideBy');
        itemsChanged = items !== itemsTem;
  
        if (itemsChanged) {
          if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items
          // check index before transform in case
          // slider reach the right edge then items become bigger
          updateIndex();
        }
      }
      
      if (bpChanged) {
        if (disable !== disableTem) {
          if (disable) {
            disableSlider();
          } else {
            enableSlider(); // <= slidePositions, rightBoundary, indexMax
          }
        }
      }
  
      if (freezable && (bpChanged || fixedWidth || autoWidth)) {
        freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
                              // <= fixedWidth: fixedWidth, gutter, rightBoundary
                              // <= others: items
  
        if (freeze !== freezeTem) {
          if (freeze) {
            doContainerTransform(getContainerTransformValue(getStartIndex(0)));
            freezeSlider();
          } else {
            unfreezeSlider();
            needContainerTransform = true;
          }
        }
      }
  
      resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
      if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }
  
      if (arrowKeys !== arrowKeysTem) {
        arrowKeys ?
          addEvents(doc, docmentKeydownEvent) :
          removeEvents(doc, docmentKeydownEvent);
      }
      if (controls !== controlsTem) {
        if (controls) {
          if (controlsContainer) {
            showElement(controlsContainer);
          } else {
            if (prevButton) { showElement(prevButton); }
            if (nextButton) { showElement(nextButton); }
          }
        } else {
          if (controlsContainer) {
            hideElement(controlsContainer);
          } else {
            if (prevButton) { hideElement(prevButton); }
            if (nextButton) { hideElement(nextButton); }
          }
        }
      }
      if (nav !== navTem) {
        nav ?
          showElement(navContainer) :
          hideElement(navContainer);
      }
      if (touch !== touchTem) {
        touch ?
          addEvents(container, touchEvents, options.preventScrollOnTouch) :
          removeEvents(container, touchEvents);
      }
      if (mouseDrag !== mouseDragTem) {
        mouseDrag ?
          addEvents(container, dragEvents) :
          removeEvents(container, dragEvents);
      }
      if (autoplay !== autoplayTem) {
        if (autoplay) {
          if (autoplayButton) { showElement(autoplayButton); }
          if (!animating && !autoplayUserPaused) { startAutoplay(); }
        } else {
          if (autoplayButton) { hideElement(autoplayButton); }
          if (animating) { stopAutoplay(); }
        }
      }
      if (autoplayHoverPause !== autoplayHoverPauseTem) {
        autoplayHoverPause ?
          addEvents(container, hoverEvents) :
          removeEvents(container, hoverEvents);
      }
      if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
        autoplayResetOnVisibility ?
          addEvents(doc, visibilityEvent) :
          removeEvents(doc, visibilityEvent);
      }
  
      if (bpChanged) {
        if (fixedWidth !== fixedWidthTem || center !== centerTem) { needContainerTransform = true; }
  
        if (autoHeight !== autoHeightTem) {
          if (!autoHeight) { innerWrapper.style.height = ''; }
        }
  
        if (controls && controlsText !== controlsTextTem) {
          prevButton.innerHTML = controlsText[0];
          nextButton.innerHTML = controlsText[1];
        }
  
        if (autoplayButton && autoplayText !== autoplayTextTem) {
          var i = autoplay ? 1 : 0,
              html = autoplayButton.innerHTML,
              len = html.length - autoplayTextTem[i].length;
          if (html.substring(len) === autoplayTextTem[i]) {
            autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
          }
        }
      } else {
        if (center && (fixedWidth || autoWidth)) { needContainerTransform = true; }
      }
  
      if (itemsChanged || fixedWidth && !autoWidth) {
        pages = getPages();
        updateNavVisibility();
      }
  
      indChanged = index !== indexTem;
      if (indChanged) { 
        events.emit('indexChanged', info());
        needContainerTransform = true;
      } else if (itemsChanged) {
        if (!indChanged) { additionalUpdates(); }
      } else if (fixedWidth || autoWidth) {
        doLazyLoad(); 
        updateSlideStatus();
        updateLiveRegion();
      }
  
      if (itemsChanged && !carousel) { updateGallerySlidePositions(); }
  
      if (!disable && !freeze) {
        // non-meduaqueries: IE8
        if (bpChanged && !CSSMQ) {
          // middle wrapper styles
          if (autoHeight !== autoheightTem || speed !== speedTem) {
            update_carousel_transition_duration();
          }
  
          // inner wrapper styles
          if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
            innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
          }
  
          if (horizontal) {
            // container styles
            if (carousel) {
              container.style.width = getContainerWidth(fixedWidth, gutter, items);
            }
  
            // slide styles
            var str = getSlideWidthStyle(fixedWidth, gutter, items) + 
                      getSlideGutterStyle(gutter);
  
            // remove the last line and
            // add new styles
            removeCSSRule(sheet, getCssRulesLength(sheet) - 1);
            addCSSRule(sheet, '#' + slideId + ' > .tns-item', str, getCssRulesLength(sheet));
          }
        }
  
        // auto height
        if (autoHeight) { doAutoHeight(); }
  
        if (needContainerTransform) {
          doContainerTransformSilent();
          indexCached = index;
        }
      }
  
      if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }
    }
  
  
  
  
  
    // === INITIALIZATION FUNCTIONS === //
    function getFreeze () {
      if (!fixedWidth && !autoWidth) {
        var a = center ? items - (items - 1) / 2 : items;
        return  slideCount <= a;
      }
  
      var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
          vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;
  
      if (center) {
        vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
      }
  
      return width <= vp;
    }
  
    function setBreakpointZone () {
      breakpointZone = 0;
      for (var bp in responsive) {
        bp = parseInt(bp); // convert string to number
        if (windowWidth >= bp) { breakpointZone = bp; }
      }
    }
  
    // (slideBy, indexMin, indexMax) => index
    var updateIndex = (function () {
      return loop ? 
        carousel ?
          // loop + carousel
          function () {
            var leftEdge = indexMin,
                rightEdge = indexMax;
  
            leftEdge += slideBy;
            rightEdge -= slideBy;
  
            // adjust edges when has edge paddings
            // or fixed-width slider with extra space on the right side
            if (edgePadding) {
              leftEdge += 1;
              rightEdge -= 1;
            } else if (fixedWidth) {
              if ((viewport + gutter)%(fixedWidth + gutter)) { rightEdge -= 1; }
            }
  
            if (cloneCount) {
              if (index > rightEdge) {
                index -= slideCount;
              } else if (index < leftEdge) {
                index += slideCount;
              }
            }
          } :
          // loop + gallery
          function() {
            if (index > indexMax) {
              while (index >= indexMin + slideCount) { index -= slideCount; }
            } else if (index < indexMin) {
              while (index <= indexMax - slideCount) { index += slideCount; }
            }
          } :
        // non-loop
        function() {
          index = Math.max(indexMin, Math.min(indexMax, index));
        };
    })();
  
    function disableUI () {
      if (!autoplay && autoplayButton) { hideElement(autoplayButton); }
      if (!nav && navContainer) { hideElement(navContainer); }
      if (!controls) {
        if (controlsContainer) {
          hideElement(controlsContainer);
        } else {
          if (prevButton) { hideElement(prevButton); }
          if (nextButton) { hideElement(nextButton); }
        }
      }
    }
  
    function enableUI () {
      if (autoplay && autoplayButton) { showElement(autoplayButton); }
      if (nav && navContainer) { showElement(navContainer); }
      if (controls) {
        if (controlsContainer) {
          showElement(controlsContainer);
        } else {
          if (prevButton) { showElement(prevButton); }
          if (nextButton) { showElement(nextButton); }
        }
      }
    }
  
    function freezeSlider () {
      if (frozen) { return; }
  
      // remove edge padding from inner wrapper
      if (edgePadding) { innerWrapper.style.margin = '0px'; }
  
      // add class tns-transparent to cloned slides
      if (cloneCount) {
        var str = 'tns-transparent';
        for (var i = cloneCount; i--;) {
          if (carousel) { addClass(slideItems[i], str); }
          addClass(slideItems[slideCountNew - i - 1], str);
        }
      }
  
      // update tools
      disableUI();
  
      frozen = true;
    }
  
    function unfreezeSlider () {
      if (!frozen) { return; }
  
      // restore edge padding for inner wrapper
      // for mordern browsers
      if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }
  
      // remove class tns-transparent to cloned slides
      if (cloneCount) {
        var str = 'tns-transparent';
        for (var i = cloneCount; i--;) {
          if (carousel) { removeClass(slideItems[i], str); }
          removeClass(slideItems[slideCountNew - i - 1], str);
        }
      }
  
      // update tools
      enableUI();
  
      frozen = false;
    }
  
    function disableSlider () {
      if (disabled) { return; }
  
      sheet.disabled = true;
      container.className = container.className.replace(newContainerClasses.substring(1), '');
      removeAttrs(container, ['style']);
      if (loop) {
        for (var j = cloneCount; j--;) {
          if (carousel) { hideElement(slideItems[j]); }
          hideElement(slideItems[slideCountNew - j - 1]);
        }
      }
  
      // vertical slider
      if (!horizontal || !carousel) { removeAttrs(innerWrapper, ['style']); }
  
      // gallery
      if (!carousel) { 
        for (var i = index, l = index + slideCount; i < l; i++) {
          var item = slideItems[i];
          removeAttrs(item, ['style']);
          removeClass(item, animateIn);
          removeClass(item, animateNormal);
        }
      }
  
      // update tools
      disableUI();
  
      disabled = true;
    }
  
    function enableSlider () {
      if (!disabled) { return; }
  
      sheet.disabled = false;
      container.className += newContainerClasses;
      doContainerTransformSilent();
  
      if (loop) {
        for (var j = cloneCount; j--;) {
          if (carousel) { showElement(slideItems[j]); }
          showElement(slideItems[slideCountNew - j - 1]);
        }
      }
  
      // gallery
      if (!carousel) { 
        for (var i = index, l = index + slideCount; i < l; i++) {
          var item = slideItems[i],
              classN = i < index + items ? animateIn : animateNormal;
          item.style.left = (i - index) * 100 / items + '%';
          addClass(item, classN);
        }
      }
  
      // update tools
      enableUI();
  
      disabled = false;
    }
  
    function updateLiveRegion () {
      var str = getLiveRegionStr();
      if (liveregionCurrent.innerHTML !== str) { liveregionCurrent.innerHTML = str; }
    }
  
    function getLiveRegionStr () {
      var arr = getVisibleSlideRange(),
          start = arr[0] + 1,
          end = arr[1] + 1;
      return start === end ? start + '' : start + ' to ' + end; 
    }
  
    function getVisibleSlideRange (val) {
      if (val == null) { val = getContainerTransformValue(); }
      var start = index, end, rangestart, rangeend;
  
      // get range start, range end for autoWidth and fixedWidth
      if (center || edgePadding) {
        if (autoWidth || fixedWidth) {
          rangestart = - (parseFloat(val) + edgePadding);
          rangeend = rangestart + viewport + edgePadding * 2;
        }
      } else {
        if (autoWidth) {
          rangestart = slidePositions[index];
          rangeend = rangestart + viewport;
        }
      }
  
      // get start, end
      // - check auto width
      if (autoWidth) {
        slidePositions.forEach(function(point, i) {
          if (i < slideCountNew) {
            if ((center || edgePadding) && point <= rangestart + 0.5) { start = i; }
            if (rangeend - point >= 0.5) { end = i; }
          }
        });
  
      // - check percentage width, fixed width
      } else {
  
        if (fixedWidth) {
          var cell = fixedWidth + gutter;
          if (center || edgePadding) {
            start = Math.floor(rangestart/cell);
            end = Math.ceil(rangeend/cell - 1);
          } else {
            end = start + Math.ceil(viewport/cell) - 1;
          }
  
        } else {
          if (center || edgePadding) {
            var a = items - 1;
            if (center) {
              start -= a / 2;
              end = index + a / 2;
            } else {
              end = index + a;
            }
  
            if (edgePadding) {
              var b = edgePadding * items / viewport;
              start -= b;
              end += b;
            }
  
            start = Math.floor(start);
            end = Math.ceil(end);
          } else {
            end = start + items - 1;
          }
        }
  
        start = Math.max(start, 0);
        end = Math.min(end, slideCountNew - 1);
      }
  
      return [start, end];
    }
  
    function doLazyLoad () {
      if (lazyload && !disable) {
        getImageArray.apply(null, getVisibleSlideRange()).forEach(function (img) {
          if (!hasClass(img, imgCompleteClass)) {
            // stop propagation transitionend event to container
            var eve = {};
            eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
            addEvents(img, eve);
  
            addEvents(img, imgEvents);
  
            // update src
            img.src = getAttr(img, 'data-src');
  
            // update srcset
            var srcset = getAttr(img, 'data-srcset');
            if (srcset) { img.srcset = srcset; }
  
            addClass(img, 'loading');
          }
        });
      }
    }
  
    function onImgLoaded (e) {
      imgLoaded(getTarget(e));
    }
  
    function onImgFailed (e) {
      imgFailed(getTarget(e));
    }
  
    function imgLoaded (img) {
      addClass(img, 'loaded');
      imgCompleted(img);
    }
  
    function imgFailed (img) {
      addClass(img, 'failed');
      imgCompleted(img);
    }
  
    function imgCompleted (img) {
      addClass(img, 'tns-complete');
      removeClass(img, 'loading');
      removeEvents(img, imgEvents);
    }
  
    function getImageArray (start, end) {
      var imgs = [];
      while (start <= end) {
        forEach(slideItems[start].querySelectorAll('img'), function (img) { imgs.push(img); });
        start++;
      }
  
      return imgs;
    }
  
    // check if all visible images are loaded
    // and update container height if it's done
    function doAutoHeight () {
      var imgs = getImageArray.apply(null, getVisibleSlideRange());
      raf(function(){ imgsLoadedCheck(imgs, updateInnerWrapperHeight); });
    }
  
    function imgsLoadedCheck (imgs, cb) {
      // directly execute callback function if all images are complete
      if (imgsComplete) { return cb(); }
  
      // check selected image classes otherwise
      imgs.forEach(function (img, index) {
        if (hasClass(img, imgCompleteClass)) { imgs.splice(index, 1); }
      });
  
      // execute callback function if selected images are all complete
      if (!imgs.length) { return cb(); }
  
      // otherwise execute this functiona again
      raf(function(){ imgsLoadedCheck(imgs, cb); });
    } 
  
    function additionalUpdates () {
      doLazyLoad(); 
      updateSlideStatus();
      updateLiveRegion();
      updateControlsStatus();
      updateNavStatus();
    }
  
  
    function update_carousel_transition_duration () {
      if (carousel && autoHeight) {
        middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
      }
    }
  
    function getMaxSlideHeight (slideStart, slideRange) {
      var heights = [];
      for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
        heights.push(slideItems[i].offsetHeight);
      }
  
      return Math.max.apply(null, heights);
    }
  
    // update inner wrapper height
    // 1. get the max-height of the visible slides
    // 2. set transitionDuration to speed
    // 3. update inner wrapper height to max-height
    // 4. set transitionDuration to 0s after transition done
    function updateInnerWrapperHeight () {
      var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
          wp = middleWrapper ? middleWrapper : innerWrapper;
  
      if (wp.style.height !== maxHeight) { wp.style.height = maxHeight + 'px'; }
    }
  
    // get the distance from the top edge of the first slide to each slide
    // (init) => slidePositions
    function setSlidePositions () {
      slidePositions = [0];
      var attr = horizontal ? 'left' : 'top',
          attr2 = horizontal ? 'right' : 'bottom',
          base = slideItems[0].getBoundingClientRect()[attr];
  
      forEach(slideItems, function(item, i) {
        // skip the first slide
        if (i) { slidePositions.push(item.getBoundingClientRect()[attr] - base); }
        // add the end edge
        if (i === slideCountNew - 1) { slidePositions.push(item.getBoundingClientRect()[attr2] - base); }
      });
    }
  
    // update slide
    function updateSlideStatus () {
      var range = getVisibleSlideRange(),
          start = range[0],
          end = range[1];
  
      forEach(slideItems, function(item, i) {
        // show slides
        if (i >= start && i <= end) {
          if (hasAttr(item, 'aria-hidden')) {
            removeAttrs(item, ['aria-hidden', 'tabindex']);
            addClass(item, slideActiveClass);
          }
        // hide slides
        } else {
          if (!hasAttr(item, 'aria-hidden')) {
            setAttrs(item, {
              'aria-hidden': 'true',
              'tabindex': '-1'
            });
            removeClass(item, slideActiveClass);
          }
        }
      });
    }
  
    // gallery: update slide position
    function updateGallerySlidePositions () {
      var l = index + Math.min(slideCount, items);
      for (var i = slideCountNew; i--;) {
        var item = slideItems[i];
  
        if (i >= index && i < l) {
          // add transitions to visible slides when adjusting their positions
          addClass(item, 'tns-moving');
  
          item.style.left = (i - index) * 100 / items + '%';
          addClass(item, animateIn);
          removeClass(item, animateNormal);
        } else if (item.style.left) {
          item.style.left = '';
          addClass(item, animateNormal);
          removeClass(item, animateIn);
        }
  
        // remove outlet animation
        removeClass(item, animateOut);
      }
  
      // removing '.tns-moving'
      setTimeout(function() {
        forEach(slideItems, function(el) {
          removeClass(el, 'tns-moving');
        });
      }, 300);
    }
  
    // set tabindex on Nav
    function updateNavStatus () {
      // get current nav
      if (nav) {
        navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
        navClicked = -1;
  
        if (navCurrentIndex !== navCurrentIndexCached) {
          var navPrev = navItems[navCurrentIndexCached],
              navCurrent = navItems[navCurrentIndex];
  
          setAttrs(navPrev, {
            'tabindex': '-1',
            'aria-label': navStr + (navCurrentIndexCached + 1)
          });
          removeClass(navPrev, navActiveClass);
          
          setAttrs(navCurrent, {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
          removeAttrs(navCurrent, 'tabindex');
          addClass(navCurrent, navActiveClass);
  
          navCurrentIndexCached = navCurrentIndex;
        }
      }
    }
  
    function getLowerCaseNodeName (el) {
      return el.nodeName.toLowerCase();
    }
  
    function isButton (el) {
      return getLowerCaseNodeName(el) === 'button';
    }
  
    function isAriaDisabled (el) {
      return el.getAttribute('aria-disabled') === 'true';
    }
  
    function disEnableElement (isButton, el, val) {
      if (isButton) {
        el.disabled = val;
      } else {
        el.setAttribute('aria-disabled', val.toString());
      }
    }
  
    // set 'disabled' to true on controls when reach the edges
    function updateControlsStatus () {
      if (!controls || rewind || loop) { return; }
  
      var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
          nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
          disablePrev = (index <= indexMin) ? true : false,
          disableNext = (!rewind && index >= indexMax) ? true : false;
  
      if (disablePrev && !prevDisabled) {
        disEnableElement(prevIsButton, prevButton, true);
      }
      if (!disablePrev && prevDisabled) {
        disEnableElement(prevIsButton, prevButton, false);
      }
      if (disableNext && !nextDisabled) {
        disEnableElement(nextIsButton, nextButton, true);
      }
      if (!disableNext && nextDisabled) {
        disEnableElement(nextIsButton, nextButton, false);
      }
    }
  
    // set duration
    function resetDuration (el, str) {
      if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }
    }
  
    function getSliderWidth () {
      return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
    }
  
    function getCenterGap (num) {
      if (num == null) { num = index; }
  
      var gap = edgePadding ? gutter : 0;
      return autoWidth ? ((viewport - gap) - (slidePositions[num + 1] - slidePositions[num] - gutter))/2 :
        fixedWidth ? (viewport - fixedWidth) / 2 :
          (items - 1) / 2;
    }
  
    function getRightBoundary () {
      var gap = edgePadding ? gutter : 0,
          result = (viewport + gap) - getSliderWidth();
  
      if (center && !loop) {
        result = fixedWidth ? - (fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() :
          getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
      }
      if (result > 0) { result = 0; }
  
      return result;
    }
  
    function getContainerTransformValue (num) {
      if (num == null) { num = index; }
  
      var val;
      if (horizontal && !autoWidth) {
        if (fixedWidth) {
          val = - (fixedWidth + gutter) * num;
          if (center) { val += getCenterGap(); }
        } else {
          var denominator = TRANSFORM ? slideCountNew : items;
          if (center) { num -= getCenterGap(); }
          val = - num * 100 / denominator;
        }
      } else {
        val = - slidePositions[num];
        if (center && autoWidth) {
          val += getCenterGap();
        }
      }
  
      if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }
  
      val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';
  
      return val;
    }
  
    function doContainerTransformSilent (val) {
      resetDuration(container, '0s');
      doContainerTransform(val);
    }
  
    function doContainerTransform (val) {
      if (val == null) { val = getContainerTransformValue(); }
      container.style[transformAttr] = transformPrefix + val + transformPostfix;
    }
  
    function animateSlide (number, classOut, classIn, isOut) {
      var l = number + items;
      if (!loop) { l = Math.min(l, slideCountNew); }
  
      for (var i = number; i < l; i++) {
          var item = slideItems[i];
  
        // set item positions
        if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }
  
        if (animateDelay && TRANSITIONDELAY) {
          item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
        }
        removeClass(item, classOut);
        addClass(item, classIn);
        
        if (isOut) { slideItemsOut.push(item); }
      }
    }
  
    // make transfer after click/drag:
    // 1. change 'transform' property for mordern browsers
    // 2. change 'left' property for legacy browsers
    var transformCore = (function () {
      return carousel ?
        function () {
          resetDuration(container, '');
          if (TRANSITIONDURATION || !speed) {
            // for morden browsers with non-zero duration or 
            // zero duration for all browsers
            doContainerTransform();
            // run fallback function manually 
            // when duration is 0 / container is hidden
            if (!speed || !isVisible(container)) { onTransitionEnd(); }
  
          } else {
            // for old browser with non-zero duration
            jsTransform(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
          }
  
          if (!horizontal) { updateContentWrapperHeight(); }
        } :
        function () {
          slideItemsOut = [];
  
          var eve = {};
          eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
          removeEvents(slideItems[indexCached], eve);
          addEvents(slideItems[index], eve);
  
          animateSlide(indexCached, animateIn, animateOut, true);
          animateSlide(index, animateNormal, animateIn);
  
          // run fallback function manually 
          // when transition or animation not supported / duration is 0
          if (!TRANSITIONEND || !ANIMATIONEND || !speed || !isVisible(container)) { onTransitionEnd(); }
        };
    })();
  
    function render (e, sliderMoved) {
      if (updateIndexBeforeTransform) { updateIndex(); }
  
      // render when slider was moved (touch or drag) even though index may not change
      if (index !== indexCached || sliderMoved) {
        // events
        events.emit('indexChanged', info());
        events.emit('transitionStart', info());
        if (autoHeight) { doAutoHeight(); }
  
        // pause autoplay when click or keydown from user
        if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }
  
        running = true;
        transformCore();
      }
    }
  
    /*
     * Transfer prefixed properties to the same format
     * CSS: -Webkit-Transform => webkittransform
     * JS: WebkitTransform => webkittransform
     * @param {string} str - property
     *
     */
    function strTrans (str) {
      return str.toLowerCase().replace(/-/g, '');
    }
  
    // AFTER TRANSFORM
    // Things need to be done after a transfer:
    // 1. check index
    // 2. add classes to visible slide
    // 3. disable controls buttons when reach the first/last slide in non-loop slider
    // 4. update nav status
    // 5. lazyload images
    // 6. update container height
    function onTransitionEnd (event) {
      // check running on gallery mode
      // make sure trantionend/animationend events run only once
      if (carousel || running) {
        events.emit('transitionEnd', info(event));
  
        if (!carousel && slideItemsOut.length > 0) {
          for (var i = 0; i < slideItemsOut.length; i++) {
            var item = slideItemsOut[i];
            // set item positions
            item.style.left = '';
  
            if (ANIMATIONDELAY && TRANSITIONDELAY) { 
              item.style[ANIMATIONDELAY] = '';
              item.style[TRANSITIONDELAY] = '';
            }
            removeClass(item, animateOut);
            addClass(item, animateNormal);
          }
        }
  
        /* update slides, nav, controls after checking ...
         * => legacy browsers who don't support 'event' 
         *    have to check event first, otherwise event.target will cause an error 
         * => or 'gallery' mode: 
         *   + event target is slide item
         * => or 'carousel' mode: 
         *   + event target is container, 
         *   + event.property is the same with transform attribute
         */
        if (!event || 
            !carousel && event.target.parentNode === container || 
            event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {
  
          if (!updateIndexBeforeTransform) { 
            var indexTem = index;
            updateIndex();
            if (index !== indexTem) { 
              events.emit('indexChanged', info());
  
              doContainerTransformSilent();
            }
          } 
  
          if (nested === 'inner') { events.emit('innerLoaded', info()); }
          running = false;
          indexCached = index;
        }
      }
  
    }
  
    // # ACTIONS
    function goTo (targetIndex, e) {
      if (freeze) { return; }
  
      // prev slideBy
      if (targetIndex === 'prev') {
        onControlsClick(e, -1);
  
      // next slideBy
      } else if (targetIndex === 'next') {
        onControlsClick(e, 1);
  
      // go to exact slide
      } else {
        if (running) {
          if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
        }
  
        var absIndex = getAbsIndex(), 
            indexGap = 0;
  
        if (targetIndex === 'first') {
          indexGap = - absIndex;
        } else if (targetIndex === 'last') {
          indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
        } else {
          if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }
  
          if (!isNaN(targetIndex)) {
            // from directly called goTo function
            if (!e) { targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex)); }
  
            indexGap = targetIndex - absIndex;
          }
        }
  
        // gallery: make sure new page won't overlap with current page
        if (!carousel && indexGap && Math.abs(indexGap) < items) {
          var factor = indexGap > 0 ? 1 : -1;
          indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
        }
  
        index += indexGap;
  
        // make sure index is in range
        if (carousel && loop) {
          if (index < indexMin) { index += slideCount; }
          if (index > indexMax) { index -= slideCount; }
        }
  
        // if index is changed, start rendering
        if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
          render(e);
        }
  
      }
    }
  
    // on controls click
    function onControlsClick (e, dir) {
      if (running) {
        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
      }
      var passEventObject;
  
      if (!dir) {
        e = getEvent(e);
        var target = getTarget(e);
  
        while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }
  
        var targetIn = [prevButton, nextButton].indexOf(target);
        if (targetIn >= 0) {
          passEventObject = true;
          dir = targetIn === 0 ? -1 : 1;
        }
      }
  
      if (rewind) {
        if (index === indexMin && dir === -1) {
          goTo('last', e);
          return;
        } else if (index === indexMax && dir === 1) {
          goTo('first', e);
          return;
        }
      }
  
      if (dir) {
        index += slideBy * dir;
        if (autoWidth) { index = Math.floor(index); }
        // pass e when click control buttons or keydown
        render((passEventObject || (e && e.type === 'keydown')) ? e : null);
      }
    }
  
    // on nav click
    function onNavClick (e) {
      if (running) {
        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
      }
      
      e = getEvent(e);
      var target = getTarget(e), navIndex;
  
      // find the clicked nav item
      while (target !== navContainer && !hasAttr(target, 'data-nav')) { target = target.parentNode; }
      if (hasAttr(target, 'data-nav')) {
        var navIndex = navClicked = Number(getAttr(target, 'data-nav')),
            targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
            targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
        goTo(targetIndex, e);
  
        if (navCurrentIndex === navIndex) {
          if (animating) { stopAutoplay(); }
          navClicked = -1; // reset navClicked
        }
      }
    }
  
    // autoplay functions
    function setAutoplayTimer () {
      autoplayTimer = setInterval(function () {
        onControlsClick(null, autoplayDirection);
      }, autoplayTimeout);
  
      animating = true;
    }
  
    function stopAutoplayTimer () {
      clearInterval(autoplayTimer);
      animating = false;
    }
  
    function updateAutoplayButton (action, txt) {
      setAttrs(autoplayButton, {'data-action': action});
      autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
    }
  
    function startAutoplay () {
      setAutoplayTimer();
      if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
    }
  
    function stopAutoplay () {
      stopAutoplayTimer();
      if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
    }
  
    // programaitcally play/pause the slider
    function play () {
      if (autoplay && !animating) {
        startAutoplay();
        autoplayUserPaused = false;
      }
    }
    function pause () {
      if (animating) {
        stopAutoplay();
        autoplayUserPaused = true;
      }
    }
  
    function toggleAutoplay () {
      if (animating) {
        stopAutoplay();
        autoplayUserPaused = true;
      } else {
        startAutoplay();
        autoplayUserPaused = false;
      }
    }
  
    function onVisibilityChange () {
      if (doc.hidden) {
        if (animating) {
          stopAutoplayTimer();
          autoplayVisibilityPaused = true;
        }
      } else if (autoplayVisibilityPaused) {
        setAutoplayTimer();
        autoplayVisibilityPaused = false;
      }
    }
  
    function mouseoverPause () {
      if (animating) { 
        stopAutoplayTimer();
        autoplayHoverPaused = true;
      }
    }
  
    function mouseoutRestart () {
      if (autoplayHoverPaused) { 
        setAutoplayTimer();
        autoplayHoverPaused = false;
      }
    }
  
    // keydown events on document 
    function onDocumentKeydown (e) {
      e = getEvent(e);
      var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);
  
      if (keyIndex >= 0) {
        onControlsClick(e, keyIndex === 0 ? -1 : 1);
      }
    }
  
    // on key control
    function onControlsKeydown (e) {
      e = getEvent(e);
      var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);
  
      if (keyIndex >= 0) {
        if (keyIndex === 0) {
          if (!prevButton.disabled) { onControlsClick(e, -1); }
        } else if (!nextButton.disabled) {
          onControlsClick(e, 1);
        }
      }
    }
  
    // set focus
    function setFocus (el) {
      el.focus();
    }
  
    // on key nav
    function onNavKeydown (e) {
      e = getEvent(e);
      var curElement = doc.activeElement;
      if (!hasAttr(curElement, 'data-nav')) { return; }
  
      // var code = e.keyCode,
      var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
          navIndex = Number(getAttr(curElement, 'data-nav'));
  
      if (keyIndex >= 0) {
        if (keyIndex === 0) {
          if (navIndex > 0) { setFocus(navItems[navIndex - 1]); }
        } else if (keyIndex === 1) {
          if (navIndex < pages - 1) { setFocus(navItems[navIndex + 1]); }
        } else {
          navClicked = navIndex;
          goTo(navIndex, e);
        }
      }
    }
  
    function getEvent (e) {
      e = e || win.event;
      return isTouchEvent(e) ? e.changedTouches[0] : e;
    }
    function getTarget (e) {
      return e.target || win.event.srcElement;
    }
  
    function isTouchEvent (e) {
      return e.type.indexOf('touch') >= 0;
    }
  
    function preventDefaultBehavior (e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = false;
    }
  
    function getMoveDirectionExpected () {
      return getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
    }
  
    function onPanStart (e) {
      if (running) {
        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
      }
  
      if (autoplay && animating) { stopAutoplayTimer(); }
      
      panStart = true;
      if (rafIndex) {
        caf(rafIndex);
        rafIndex = null;
      }
  
      var $ = getEvent(e);
      events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));
  
      if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
        preventDefaultBehavior(e);
      }
  
      lastPosition.x = initPosition.x = $.clientX;
      lastPosition.y = initPosition.y = $.clientY;
      if (carousel) {
        translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
        resetDuration(container, '0s');
      }
    }
  
    function onPanMove (e) {
      if (panStart) {
        var $ = getEvent(e);
        lastPosition.x = $.clientX;
        lastPosition.y = $.clientY;
  
        if (carousel) {
          if (!rafIndex) { rafIndex = raf(function(){ panUpdate(e); }); }
        } else {
          if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
          if (moveDirectionExpected) { preventScroll = true; }
        }
  
        if (preventScroll) { e.preventDefault(); }
      }
    }
  
    function panUpdate (e) {
      if (!moveDirectionExpected) {
        panStart = false;
        return;
      }
      caf(rafIndex);
      if (panStart) { rafIndex = raf(function(){ panUpdate(e); }); }
  
      if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
      if (moveDirectionExpected) {
        if (!preventScroll && isTouchEvent(e)) { preventScroll = true; }
  
        try {
          if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
        } catch(err) {}
  
        var x = translateInit,
            dist = getDist(lastPosition, initPosition);
        if (!horizontal || fixedWidth || autoWidth) {
          x += dist;
          x += 'px';
        } else {
          var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew): dist * 100 / (viewport + gutter);
          x += percentageX;
          x += '%';
        }
  
        container.style[transformAttr] = transformPrefix + x + transformPostfix;
      }
    }
  
    function onPanEnd (e) {
      if (panStart) {
        if (rafIndex) {
          caf(rafIndex);
          rafIndex = null;
        }
        if (carousel) { resetDuration(container, ''); }
        panStart = false;
  
        var $ = getEvent(e);
        lastPosition.x = $.clientX;
        lastPosition.y = $.clientY;
        var dist = getDist(lastPosition, initPosition);
  
        if (Math.abs(dist)) {
          // drag vs click
          if (!isTouchEvent(e)) {
            // prevent "click"
            var target = getTarget(e);
            addEvents(target, {'click': function preventClick (e) {
              preventDefaultBehavior(e);
              removeEvents(target, {'click': preventClick});
            }}); 
          }
  
          if (carousel) {
            rafIndex = raf(function() {
              if (horizontal && !autoWidth) {
                var indexMoved = - dist * items / (viewport + gutter);
                indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
                index += indexMoved;
              } else {
                var moved = - (translateInit + dist);
                if (moved <= 0) {
                  index = indexMin;
                } else if (moved >= slidePositions[slideCountNew - 1]) {
                  index = indexMax;
                } else {
                  var i = 0;
                  while (i < slideCountNew && moved >= slidePositions[i]) {
                    index = i;
                    if (moved > slidePositions[i] && dist < 0) { index += 1; }
                    i++;
                  }
                }
              }
  
              render(e, dist);
              events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
            });
          } else {
            if (moveDirectionExpected) {
              onControlsClick(e, dist > 0 ? -1 : 1);
            }
          }
        }
      }
  
      // reset
      if (options.preventScrollOnTouch === 'auto') { preventScroll = false; }
      if (swipeAngle) { moveDirectionExpected = '?'; } 
      if (autoplay && !animating) { setAutoplayTimer(); }
    }
  
    // === RESIZE FUNCTIONS === //
    // (slidePositions, index, items) => vertical_conentWrapper.height
    function updateContentWrapperHeight () {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
    }
  
    function getPages () {
      var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
      return Math.min(Math.ceil(rough), slideCount);
    }
  
    /*
     * 1. update visible nav items list
     * 2. add "hidden" attributes to previous visible nav items
     * 3. remove "hidden" attrubutes to new visible nav items
     */
    function updateNavVisibility () {
      if (!nav || navAsThumbnails) { return; }
  
      if (pages !== pagesCached) {
        var min = pagesCached,
            max = pages,
            fn = showElement;
  
        if (pagesCached > pages) {
          min = pages;
          max = pagesCached;
          fn = hideElement;
        }
  
        while (min < max) {
          fn(navItems[min]);
          min++;
        }
  
        // cache pages
        pagesCached = pages;
      }
    }
  
    function info (e) {
      return {
        container: container,
        slideItems: slideItems,
        navContainer: navContainer,
        navItems: navItems,
        controlsContainer: controlsContainer,
        hasControls: hasControls,
        prevButton: prevButton,
        nextButton: nextButton,
        items: items,
        slideBy: slideBy,
        cloneCount: cloneCount,
        slideCount: slideCount,
        slideCountNew: slideCountNew,
        index: index,
        indexCached: indexCached,
        displayIndex: getCurrentSlide(),
        navCurrentIndex: navCurrentIndex,
        navCurrentIndexCached: navCurrentIndexCached,
        pages: pages,
        pagesCached: pagesCached,
        sheet: sheet,
        isOn: isOn,
        event: e || {},
      };
    }
  
    return {
      version: '2.9.2',
      getInfo: info,
      events: events,
      goTo: goTo,
      play: play,
      pause: pause,
      isOn: isOn,
      updateSliderHeight: updateInnerWrapperHeight,
      refresh: initSliderTransform,
      destroy: destroy,
      rebuild: function() {
        return tns(extend(options, optionsElements));
      }
    };
  };
  
  return tns;
  })();