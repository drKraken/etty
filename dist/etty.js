!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){if(!(this instanceof n))return new n(t);if(t=t||{},!o.checkObj(t))throw new TypeError("Should be an object");this.evtHash={},this.config={maxListeners:t.maxListeners||10}}var o=r(1);n.prototype.on=function(t,e){var r=this,n=r.evtHash,o=r.config;if(n.hasOwnProperty(t)){if(!(n[t].length<o.maxListeners))throw new Error("Can not add more than "+o.maxListeners+" handlers");n[t].push(e)}else n[t]=[e];return r},n.prototype.addListener=n.prototype.on,n.prototype.once=function(t,e){var r=this,n=r.evtHash,s=function i(n){e(n),r.removeListener(t,i)};return o.hasProperty(n,t)?n[t].push(s):n[t]=[s],r},n.prototype.emit=function(t,e){if(e&&!o.checkObj(e))throw new TypeError("Should be an object");e=e||{};var r=this.evtHash;if(!o.hasProperty(r,t))throw new Error("There is now such event handler");return r[t].forEach(function(t){t(e)}),this},n.prototype.getMaxListeners=function(){return this.config.maxListeners},n.prototype.setMaxListeners=function(t){return"number"==typeof t&&t&&(this.config.maxListeners=t),this},n.prototype.removeListener=function(t,e){var r=this.evtHash;if(o.hasProperty(r,t)){var n=r[t].indexOf(e);if(0>n)return;r[t].splice(n,1)}return this},n.prototype.removeAllListeners=function(t){var e=this.evtHash;return o.hasProperty(e,t)&&e[t].length?(this.evtHash[t].length=0,this):void 0},n.prototype.listenerCount=function(t){var e=this.evtHash;if(o.hasProperty(e,t))return e[t].length;throw new Error("There is no such event")},n.prototype.listeners=function(t){var e=this.evtHash;if(o.hasProperty(e,t))return e[t];throw new Error("There is no such event")},"undefined"!=typeof t&&t.exports?t.exports=n:window.Etty=n},function(t,e){"use strict";t.exports={hasProperty:function(t,e){if(!this.checkObj(t))throw new TypeError("Should be an Object");return{}.hasOwnProperty.call(t,e)},trim:function(t){return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/,"")},checkObj:function(t){return t instanceof Object&&"[object Object]"===t.toString()},checkStr:function(t){var e=this.trim(t);return"string"==typeof e&&e.length>0}}}]);