"use strict";class AllErrorHandler{constructor(r){this.callback=r,this._setupEvents()}startListening(){this._setupEvents()}stopListening(){this._setupEvents(!1)}dispose(){this._setupEvents(!1),this.callback=null}_setupEvents(r=!0){r?"undefined"!=typeof window?window.addEventListener("error",this.callback):process.on("uncaughtException",this.callback):"undefined"!=typeof window?window.removeEventListener("error",this.callback,!0):process.off("uncaughtException",this.callback)}}(function(){var r=this,e=r.AllErrorHandler;AllErrorHandler.noConflict=function(){return r.AllErrorHandler=e,AllErrorHandler},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=AllErrorHandler),exports.AllErrorHandler=AllErrorHandler):r.AllErrorHandler=AllErrorHandler}).call(this);