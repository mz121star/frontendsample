/**
 * Created with JetBrains WebStorm.
 * User: C-Jarrick.Miao
 * Date: 11/1/12
 * Time: 12:19 PM
 * To change this template use File | Settings | File Templates.
 */(function(){var e=function(){return{extend:function(e,t){var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.superclass=t.prototype,t.prototype.constructor==Object.prototype.constructor&&(t.prototype.constructor=t)},clone:function(e){var t=function(){};return t.prototype=e,new t},augment:function(e,t,n){if(n){console.log("ä¼ è¿›æ¥çš„å‚æ•°ä¸º:"+n.join(","));for(var r=0,i=n.length;r<i;r++)e.prototype[n[r]]=t.prototype[n[r]]}else for(var s in t.prototype)e.prototype[s]||(e.prototype[s]=t.prototype[methodname])}}},t=new e;window.mCore=window.m$=t,typeof define=="function"&&define.amd&&define.amd.mCore&&define("mCore",[],function(){return t})})();