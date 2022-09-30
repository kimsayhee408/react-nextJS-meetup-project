module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/new-meetup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// API routes:\n// locating this file (new-meetup.js) inside this special \"api\" folder inside \"pages\" -- can use Next JS API routes feature -- to create our own \"back-end\" API route.\n// i.e. in other parts of our app, we will be able to send requests to domain.com/api/new-meetup, and then Next will trigger the function inside this file (typically called 'handler').\n// because API routes will only run on the server\n// never on the client.\n// Decoding them will never be exposed to the client.\n// So we can also use credentials\n// in API routes without compromising them.\n\n\nasync function handler(req, res) {\n  if (req.method === \"POST\") {\n    const data = req.body;\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(\"mongodb+srv://sayhee:cHX2Z3egDUBh7EY8@cluster0.saffl6d.mongodb.net/ReactNextMeetups?retryWrites=true&w=majority\" // ReactNextMeetups is the name of the db I am establishing a connection to. If it doesn't exist yet, this will create a db of that name in my cluster.\n    );\n    const db = client.db();\n    const meetupsCollection = db.collection(\"meetups\");\n    const result = await meetupsCollection.insertOne(data); //asynv\n\n    console.log(result); //ex. output:\n    // {\n    //         acknowledged: true,\n    //         insertedId: new ObjectId(\"6336203a986a103d25995f19\")\n    //   }\n\n    client.close();\n    res.status(201).json({\n      message: \"Meetup inserted!\"\n    }); // adds a status code of 201 and message to the response object\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler); //   ultimately, we also need to send back a response then.\n// And we do this with this response object.\n// Now, this works similar to what you might be used to\n// from Node Express.\n// You have a status method,\n// which you can call on response\n// to set a HTTP status code\n// of the response which will be returned.\n// For example, a 201 status code\n// to indicate that something was inserted successfully.\n// You can then chain a JSON call here\n// to prepare the JSON data that will be added\n// to the outgoing response.\n// And here we could, for example, add a message key\n// where we say Meetup inserted!\n// // Max code\n// import { MongoClient } from \"mongodb\";\n// // /api/new-meetup\n// // POST /api/new-meetup\n// async function handler(req, res) {\n//   if (req.method === \"POST\") {\n//     const data = req.body;\n//     const client = await MongoClient.connect(\n//       \"mongodb+srv://sayhee:cHX2Z3egDUBh7EY8@cluster0.saffl6d.mongodb.net/ReactNextMeetups?retryWrites=true&w=majority\"\n//     );\n//     const db = client.db();\n//     const meetupsCollection = db.collection(\"meetups\");\n//     const result = await meetupsCollection.insertOne(data);\n//     console.log(result);\n//     client.close();\n//     res.status(201).json({ message: \"Meetup inserted!\" });\n//   }\n// }\n// export default handler;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz84Yjg2Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxlQUFlQSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDL0IsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsVUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQWpCO0FBRUEsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FDbkIsaUhBRG1CLENBQytGO0FBRC9GLEtBQXJCO0FBSUEsVUFBTUMsRUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQVAsRUFBWDtBQUVBLFVBQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQTFCO0FBRUEsVUFBTUMsTUFBTSxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxTQUFsQixDQUE0QlQsSUFBNUIsQ0FBckIsQ0FYeUIsQ0FXK0I7O0FBRXhEVSxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWixFQWJ5QixDQWN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBTixVQUFNLENBQUNVLEtBQVA7QUFFQWQsT0FBRyxDQUFDZSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckIsRUF0QnlCLENBc0I4QjtBQUN4RDtBQUNGOztBQUVjbkIsc0VBQWYsRSxDQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBUEkgcm91dGVzOlxuLy8gbG9jYXRpbmcgdGhpcyBmaWxlIChuZXctbWVldHVwLmpzKSBpbnNpZGUgdGhpcyBzcGVjaWFsIFwiYXBpXCIgZm9sZGVyIGluc2lkZSBcInBhZ2VzXCIgLS0gY2FuIHVzZSBOZXh0IEpTIEFQSSByb3V0ZXMgZmVhdHVyZSAtLSB0byBjcmVhdGUgb3VyIG93biBcImJhY2stZW5kXCIgQVBJIHJvdXRlLlxuXG4vLyBpLmUuIGluIG90aGVyIHBhcnRzIG9mIG91ciBhcHAsIHdlIHdpbGwgYmUgYWJsZSB0byBzZW5kIHJlcXVlc3RzIHRvIGRvbWFpbi5jb20vYXBpL25ldy1tZWV0dXAsIGFuZCB0aGVuIE5leHQgd2lsbCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBpbnNpZGUgdGhpcyBmaWxlICh0eXBpY2FsbHkgY2FsbGVkICdoYW5kbGVyJykuXG5cbi8vIGJlY2F1c2UgQVBJIHJvdXRlcyB3aWxsIG9ubHkgcnVuIG9uIHRoZSBzZXJ2ZXJcbi8vIG5ldmVyIG9uIHRoZSBjbGllbnQuXG4vLyBEZWNvZGluZyB0aGVtIHdpbGwgbmV2ZXIgYmUgZXhwb3NlZCB0byB0aGUgY2xpZW50LlxuLy8gU28gd2UgY2FuIGFsc28gdXNlIGNyZWRlbnRpYWxzXG4vLyBpbiBBUEkgcm91dGVzIHdpdGhvdXQgY29tcHJvbWlzaW5nIHRoZW0uXG5cbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgXCJtb25nb2RiK3NydjovL3NheWhlZTpjSFgyWjNlZ0RVQmg3RVk4QGNsdXN0ZXIwLnNhZmZsNmQubW9uZ29kYi5uZXQvUmVhY3ROZXh0TWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIiAvLyBSZWFjdE5leHRNZWV0dXBzIGlzIHRoZSBuYW1lIG9mIHRoZSBkYiBJIGFtIGVzdGFibGlzaGluZyBhIGNvbm5lY3Rpb24gdG8uIElmIGl0IGRvZXNuJ3QgZXhpc3QgeWV0LCB0aGlzIHdpbGwgY3JlYXRlIGEgZGIgb2YgdGhhdCBuYW1lIGluIG15IGNsdXN0ZXIuXG4gICAgKTtcblxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpOyAvL2FzeW52XG5cbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIC8vZXguIG91dHB1dDpcbiAgICAvLyB7XG4gICAgLy8gICAgICAgICBhY2tub3dsZWRnZWQ6IHRydWUsXG4gICAgLy8gICAgICAgICBpbnNlcnRlZElkOiBuZXcgT2JqZWN0SWQoXCI2MzM2MjAzYTk4NmExMDNkMjU5OTVmMTlcIilcbiAgICAvLyAgIH1cblxuICAgIGNsaWVudC5jbG9zZSgpO1xuXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIk1lZXR1cCBpbnNlcnRlZCFcIiB9KTsgLy8gYWRkcyBhIHN0YXR1cyBjb2RlIG9mIDIwMSBhbmQgbWVzc2FnZSB0byB0aGUgcmVzcG9uc2Ugb2JqZWN0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcblxuLy8gICB1bHRpbWF0ZWx5LCB3ZSBhbHNvIG5lZWQgdG8gc2VuZCBiYWNrIGEgcmVzcG9uc2UgdGhlbi5cblxuLy8gQW5kIHdlIGRvIHRoaXMgd2l0aCB0aGlzIHJlc3BvbnNlIG9iamVjdC5cblxuLy8gTm93LCB0aGlzIHdvcmtzIHNpbWlsYXIgdG8gd2hhdCB5b3UgbWlnaHQgYmUgdXNlZCB0b1xuXG4vLyBmcm9tIE5vZGUgRXhwcmVzcy5cblxuLy8gWW91IGhhdmUgYSBzdGF0dXMgbWV0aG9kLFxuXG4vLyB3aGljaCB5b3UgY2FuIGNhbGwgb24gcmVzcG9uc2VcblxuLy8gdG8gc2V0IGEgSFRUUCBzdGF0dXMgY29kZVxuXG4vLyBvZiB0aGUgcmVzcG9uc2Ugd2hpY2ggd2lsbCBiZSByZXR1cm5lZC5cblxuLy8gRm9yIGV4YW1wbGUsIGEgMjAxIHN0YXR1cyBjb2RlXG5cbi8vIHRvIGluZGljYXRlIHRoYXQgc29tZXRoaW5nIHdhcyBpbnNlcnRlZCBzdWNjZXNzZnVsbHkuXG5cbi8vIFlvdSBjYW4gdGhlbiBjaGFpbiBhIEpTT04gY2FsbCBoZXJlXG5cbi8vIHRvIHByZXBhcmUgdGhlIEpTT04gZGF0YSB0aGF0IHdpbGwgYmUgYWRkZWRcblxuLy8gdG8gdGhlIG91dGdvaW5nIHJlc3BvbnNlLlxuXG4vLyBBbmQgaGVyZSB3ZSBjb3VsZCwgZm9yIGV4YW1wbGUsIGFkZCBhIG1lc3NhZ2Uga2V5XG5cbi8vIHdoZXJlIHdlIHNheSBNZWV0dXAgaW5zZXJ0ZWQhXG5cbi8vIC8vIE1heCBjb2RlXG5cbi8vIGltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuLy8gLy8gL2FwaS9uZXctbWVldHVwXG4vLyAvLyBQT1NUIC9hcGkvbmV3LW1lZXR1cFxuXG4vLyBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4vLyAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuLy8gICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcblxuLy8gICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4vLyAgICAgICBcIm1vbmdvZGIrc3J2Oi8vc2F5aGVlOmNIWDJaM2VnRFVCaDdFWThAY2x1c3RlcjAuc2FmZmw2ZC5tb25nb2RiLm5ldC9SZWFjdE5leHRNZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXG4vLyAgICAgKTtcbi8vICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4vLyAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcblxuLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcblxuLy8gICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbi8vICAgICBjbGllbnQuY2xvc2UoKTtcblxuLy8gICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJNZWV0dXAgaW5zZXJ0ZWQhXCIgfSk7XG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/new-meetup.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });