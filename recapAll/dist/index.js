/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*###########################################################
#                                                           #
#--------------------Les décorteurs         ----------------#
#                                                           #
#############################################################*/
function Constraint({ min, max }) {
    //si on veux rester générique
    // return function(target : Users, key : keyof Users){
    // }
    // return function (target : Users, key : 'age'){
    // }
    //ici c'est totalement utilisable uniquement sur une prop de age
    //ou alors avec des générique total
    return function (target, key) {
        let val = target[key];
        const getter = () => {
            return val;
        };
        const setter = (v) => {
            console.log(v);
            if (typeof v === 'number' &&
                v > min && v < max) {
                val = v;
                return;
            }
            throw new Error(`on attend un nombre entre ${min} et ${max}`);
        };
        Object.defineProperty(target, key, {
            set: setter,
            get: getter
        });
    };
}
class Userss {
    age;
}
__decorate([
    Constraint({ min: 0, max: 100 })
], Userss.prototype, "age", void 0);
const u = new Userss();
u.age = 150;


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7O0FDTkEsa0JBQWtCLFNBQUksSUFBSSxTQUFJO0FBQzlCO0FBQ0E7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELEtBQUssS0FBSyxJQUFJO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ1UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWNhcGFsbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWNhcGFsbC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlY2FwYWxsLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG4vKiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbiMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNcclxuIy0tLS0tLS0tLS0tLS0tLS0tLS0tTGVzIGTDqWNvcnRldXJzICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLSNcclxuIyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI1xyXG4jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjKi9cclxuZnVuY3Rpb24gQ29uc3RyYWludCh7IG1pbiwgbWF4IH0pIHtcclxuICAgIC8vc2kgb24gdmV1eCByZXN0ZXIgZ8OpbsOpcmlxdWVcclxuICAgIC8vIHJldHVybiBmdW5jdGlvbih0YXJnZXQgOiBVc2Vycywga2V5IDoga2V5b2YgVXNlcnMpe1xyXG4gICAgLy8gfVxyXG4gICAgLy8gcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQgOiBVc2Vycywga2V5IDogJ2FnZScpe1xyXG4gICAgLy8gfVxyXG4gICAgLy9pY2kgYydlc3QgdG90YWxlbWVudCB1dGlsaXNhYmxlIHVuaXF1ZW1lbnQgc3VyIHVuZSBwcm9wIGRlIGFnZVxyXG4gICAgLy9vdSBhbG9ycyBhdmVjIGRlcyBnw6luw6lyaXF1ZSB0b3RhbFxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xyXG4gICAgICAgIGxldCB2YWwgPSB0YXJnZXRba2V5XTtcclxuICAgICAgICBjb25zdCBnZXR0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBzZXR0ZXIgPSAodikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2KTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2ID09PSAnbnVtYmVyJyAmJlxyXG4gICAgICAgICAgICAgICAgdiA+IG1pbiAmJiB2IDwgbWF4KSB7XHJcbiAgICAgICAgICAgICAgICB2YWwgPSB2O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgb24gYXR0ZW5kIHVuIG5vbWJyZSBlbnRyZSAke21pbn0gZXQgJHttYXh9YCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcclxuICAgICAgICAgICAgc2V0OiBzZXR0ZXIsXHJcbiAgICAgICAgICAgIGdldDogZ2V0dGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcbmNsYXNzIFVzZXJzcyB7XHJcbiAgICBhZ2U7XHJcbn1cclxuX19kZWNvcmF0ZShbXHJcbiAgICBDb25zdHJhaW50KHsgbWluOiAwLCBtYXg6IDEwMCB9KVxyXG5dLCBVc2Vyc3MucHJvdG90eXBlLCBcImFnZVwiLCB2b2lkIDApO1xyXG5jb25zdCB1ID0gbmV3IFVzZXJzcygpO1xyXG51LmFnZSA9IDE1MDtcclxuZXhwb3J0IHt9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=