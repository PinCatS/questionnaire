(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sergejli/Desktop/finra/finquest2/src/main.ts */"zUnb");


/***/ }),

/***/ "6K4d":
/*!********************************************!*\
  !*** ./src/app/answers/answers.actions.ts ***!
  \********************************************/
/*! exports provided: ADD_ANSWER, addAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ANSWER", function() { return ADD_ANSWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAnswer", function() { return addAnswer; });
const ADD_ANSWER = 'ADD_ANSWER';
const addAnswer = (questionId, answer) => ({
    type: ADD_ANSWER,
    questionId,
    answer,
});


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Gt2A":
/*!********************************************************!*\
  !*** ./src/app/progress-bar/progress-bar.component.ts ***!
  \********************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProgressBarComponent {
    constructor(numberOfQuestions) {
        this.numberOfQuestions = numberOfQuestions;
    }
    ngOnInit() { }
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('NUMBER_OF_QUESTIONS')); };
ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["progress-bar"]], inputs: { count: "count" }, decls: 2, vars: 2, template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.count, " out of ", ctx.numberOfQuestions, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1iYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "J7Q4":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class WelcomeComponent {
    constructor(router) {
        this.router = router;
    }
    startQuest() {
        this.router.navigateByUrl('/questions');
    }
    ngOnInit() { }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 3, vars: 0, consts: [[1, "quest"], [1, "button", "quest__button", 3, "click"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_1_listener() { return ctx.startQuest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041D\u0430\u0447\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".quest[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 50px 0 0 0;\n}\n\n.button[_ngcontent-%COMP%] {\n  min-width: 80px;\n  min-height: 40px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 12px;\n  color: #212121;\n}\n\n.quest__button[_ngcontent-%COMP%] {\n  background-color: rgba(77, 181, 109, 1);\n  border: 2px solid #4caf50;\n  border-radius: 5px;\n  color: white;\n  transition: background-color 0.5s ease;\n}\n\n.quest__button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(77, 181, 109, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDIiwiZmlsZSI6IndlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVzdCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNTBweCAwIDAgMDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMyMTIxMjE7XG59XG5cbi5xdWVzdF9fYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NywgMTgxLCAxMDksIDEpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNGNhZjUwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XG59XG5cbi5xdWVzdF9fYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NywgMTgxLCAxMDksIDAuNik7XG59XG4iXX0= */"] });


/***/ }),

/***/ "MrFj":
/*!******************************************!*\
  !*** ./src/app/outro/outro.component.ts ***!
  \******************************************/
/*! exports provided: OutroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutroComponent", function() { return OutroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class OutroComponent {
    constructor(router) {
        this.router = router;
    }
    showResults() {
        this.router.navigateByUrl('/results');
    }
    ngOnInit() { }
}
OutroComponent.ɵfac = function OutroComponent_Factory(t) { return new (t || OutroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
OutroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutroComponent, selectors: [["app-outro"]], decls: 4, vars: 0, consts: [[3, "click"]], template: function OutroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0412\u0430\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutroComponent_Template_button_click_2_listener() { return ctx.showResults(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdXRyby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "NUXy":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.store */ "bTnO");
/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.data */ "VHXb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ResultsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", question_r1.getTitle(), " Answers: ", ctx_r0.getAnswer(question_r1.id), " ");
} }
class ResultsComponent {
    constructor(questions, store) {
        this.questions = questions;
        this.store = store;
        this.answers = this.getAnswers();
    }
    getAnswers() {
        const state = this.store.getState();
        console.log(state.answers);
        return state.answers;
    }
    getAnswer(id) {
        return this.answers[id];
    }
    ngOnInit() { }
}
ResultsComponent.ɵfac = function ResultsComponent_Factory(t) { return new (t || ResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_data__WEBPACK_IMPORTED_MODULE_1__["QUESTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_store__WEBPACK_IMPORTED_MODULE_0__["AppStore"])); };
ResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResultsComponent, selectors: [["app-results"]], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function ResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ResultsComponent_li_1_Template, 2, 2, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.questions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHRzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "R0Ki":
/*!**********************************************************!*\
  !*** ./src/app/questionnaire/questionnaire.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionnaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireComponent", function() { return QuestionnaireComponent; });
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.store */ "bTnO");
/* harmony import */ var _answers_answers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../answers/answers.actions */ "6K4d");
/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.data */ "VHXb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../progress-bar/progress-bar.component */ "Gt2A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function QuestionnaireComponent_fieldset_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u0414\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u041D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function QuestionnaireComponent_fieldset_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", answer_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](answer_r6);
} }
function QuestionnaireComponent_fieldset_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, QuestionnaireComponent_fieldset_8_div_1_Template, 4, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.question.answers);
} }
function QuestionnaireComponent_fieldset_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", answer_r9)("value", answer_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](answer_r9);
} }
function QuestionnaireComponent_fieldset_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, QuestionnaireComponent_fieldset_9_div_1_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.question.answers);
} }
function QuestionnaireComponent_fieldset_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Answer is something else");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class QuestionnaireComponent {
    constructor(router, route, questions, store) {
        this.router = router;
        this.route = route;
        this.questions = questions;
        this.store = store;
        this.currentQuestionIdx = 0;
        this.question = this.questions[this.currentQuestionIdx];
    }
    readState() {
        const state = this.store.getState();
    }
    onSubmit(value) {
        const answer = this.question.answerType == 'options'
            ? this.convertAnswerToString(value)
            : value['choice'];
        this.store.dispatch(_answers_answers_actions__WEBPACK_IMPORTED_MODULE_1__["addAnswer"](this.question.id, answer));
        this.nextQuestion();
    }
    convertAnswerToString(value) {
        let answers = [];
        for (let [option, isSelected] of Object.entries(value)) {
            if (isSelected)
                answers.push(option);
        }
        return answers.join();
    }
    nextQuestion() {
        if (this.currentQuestionIdx < this.questions.length - 1) {
            this.currentQuestionIdx++;
            this.question = this.questions[this.currentQuestionIdx];
        }
        else {
            this.router.navigateByUrl(`/outro`);
        }
    }
    isEnd() {
        return this.currentQuestionIdx >= this.questions.length;
    }
    ngOnInit() {
        this.store.subscribe(() => this.readState());
        this.readState();
    }
}
QuestionnaireComponent.ɵfac = function QuestionnaireComponent_Factory(t) { return new (t || QuestionnaireComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_data__WEBPACK_IMPORTED_MODULE_2__["QUESTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_store__WEBPACK_IMPORTED_MODULE_0__["AppStore"])); };
QuestionnaireComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: QuestionnaireComponent, selectors: [["app-questionnaire"]], decls: 13, vars: 7, consts: [[1, "questionnaire"], [3, "count"], [3, "hidden"], [3, "ngSwitch", "ngSubmit"], ["f", "ngForm"], [1, "form__heading"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["type", "submit"], ["type", "radio", "name", "choice", "id", "yes", "value", "\u0414\u0430", "ngModel", ""], ["for", "yes"], ["type", "radio", "name", "choice", "id", "no", "value", "\u041D\u0435\u0442", "ngModel", ""], ["for", "no"], [4, "ngFor", "ngForOf"], ["type", "radio", "name", "choice", "id", "idx", "ngModel", "", 3, "value"], ["for", "idx"], ["type", "checkbox", "id", "idx", "ngModel", "", 3, "name", "value"]], template: function QuestionnaireComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function QuestionnaireComponent_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); return ctx.onSubmit(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, QuestionnaireComponent_fieldset_7_Template, 7, 0, "fieldset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, QuestionnaireComponent_fieldset_8_Template, 2, 1, "fieldset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, QuestionnaireComponent_fieldset_9_Template, 2, 1, "fieldset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, QuestionnaireComponent_fieldset_10_Template, 2, 0, "fieldset", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u0414\u0430\u043B\u044C\u0448\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("count", ctx.question.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.isEnd());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.question.answerType);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.question.getTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "bool");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "options");
    } }, directives: [_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__["ProgressBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbm5haXJlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'Финансовый опросник';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "app"], [1, "app__header"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0439 \u043E\u043F\u0440\u043E\u0441\u043D\u0438\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".app[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding-top: 80px;\n}\n\n.app__header[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-bottom: 20px;\n  color: #212121;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOiA4MHB4O1xufVxuXG4uYXBwX19oZWFkZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICMyMTIxMjE7XG59XG4iXX0= */"] });


/***/ }),

/***/ "UQfM":
/*!************************************************!*\
  !*** ./src/app/question/question.component.ts ***!
  \************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function QuestionComponent_fieldset_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0414\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_fieldset_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](answer_r5);
} }
function QuestionComponent_fieldset_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuestionComponent_fieldset_4_div_1_Template, 4, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.question.answers);
} }
function QuestionComponent_fieldset_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](answer_r8);
} }
function QuestionComponent_fieldset_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuestionComponent_fieldset_5_div_1_Template, 4, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.question.answers);
} }
function QuestionComponent_fieldset_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Answer is something else");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class QuestionComponent {
    constructor() { }
    ngOnInit() { }
}
QuestionComponent.ɵfac = function QuestionComponent_Factory(t) { return new (t || QuestionComponent)(); };
QuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionComponent, selectors: [["question"]], inputs: { question: "question" }, decls: 7, vars: 5, consts: [[1, "form", 3, "ngSwitch"], [1, "form__heading"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["type", "radio", "name", "choice", "id", "yes", "value", "\u0414\u0430"], ["for", "yes"], ["type", "radio", "name", "choice", "id", "no", "value", "\u041D\u0435\u0442"], ["for", "no"], [4, "ngFor", "ngForOf"], ["type", "radio", "name", "choice", "id", "idx", "value", "answer"], ["for", "idx"], ["type", "checkbox", "name", "choice", "id", "idx", "value", "answer"]], template: function QuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuestionComponent_fieldset_3_Template, 7, 0, "fieldset", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuestionComponent_fieldset_4_Template, 2, 1, "fieldset", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuestionComponent_fieldset_5_Template, 2, 1, "fieldset", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuestionComponent_fieldset_6_Template, 2, 0, "fieldset", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.question.answerType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.question.getTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "bool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "options");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "VHXb":
/*!*****************************!*\
  !*** ./src/app/app.data.ts ***!
  \*****************************/
/*! exports provided: QUESTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTIONS", function() { return QUESTIONS; });
const QUESTIONS = [
    {
        id: 1,
        question: 'Есть ли у вас резервный фонд?',
        answer: {
            type: 'bool',
            options: null,
        },
    },
    {
        id: 2,
        question: 'Примерно через сколько лет вы планируете начать жить на пассивный доход?',
        answer: {
            type: 'choice',
            options: [
                'Через 4-6 лет',
                'Через 7-10 лет',
                'Через 11-16 лет',
                'Более чем через 16 лет',
            ],
        },
    },
    {
        id: 3,
        question: 'Какими инвестиционными инструментами вы пользуетесь?',
        answer: {
            type: 'options',
            options: ['Акции', 'Облигации', 'ETF', 'Недвижимость'],
        },
    },
];


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questionnaire/questionnaire.component */ "R0Ki");
/* harmony import */ var _outro_outro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outro/outro.component */ "MrFj");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question/question.component */ "UQfM");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./results/results.component */ "NUXy");
/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.data */ "VHXb");
/* harmony import */ var _question_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./question.model */ "iLzR");
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progress-bar/progress-bar.component */ "Gt2A");
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.store */ "bTnO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _app_data__WEBPACK_IMPORTED_MODULE_9__["QUESTIONS"],
            useFactory() {
                return _app_data__WEBPACK_IMPORTED_MODULE_9__["QUESTIONS"].map((item) => {
                    return new _question_model__WEBPACK_IMPORTED_MODULE_10__["Question"](item.id, item.question, item.answer.type, item.answer.options);
                });
            },
        },
        { provide: 'NUMBER_OF_QUESTIONS', useValue: _app_data__WEBPACK_IMPORTED_MODULE_9__["QUESTIONS"].length },
        _app_store__WEBPACK_IMPORTED_MODULE_12__["appStoreProviders"],
    ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
        _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_5__["QuestionnaireComponent"],
        _outro_outro_component__WEBPACK_IMPORTED_MODULE_6__["OutroComponent"],
        _question_question_component__WEBPACK_IMPORTED_MODULE_7__["QuestionComponent"],
        _results_results_component__WEBPACK_IMPORTED_MODULE_8__["ResultsComponent"],
        _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["ProgressBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();


/***/ }),

/***/ "bTnO":
/*!******************************!*\
  !*** ./src/app/app.store.ts ***!
  \******************************/
/*! exports provided: AppStore, createAppStore, appStoreProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStore", function() { return AppStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAppStore", function() { return createAppStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appStoreProviders", function() { return appStoreProviders; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "ANjH");
/* harmony import */ var _answers_answers_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./answers/answers.reducer */ "vZmJ");



const AppStore = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('App.store');
function createAppStore() {
    return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_answers_answers_reducer__WEBPACK_IMPORTED_MODULE_2__["answersReducer"]);
}
const appStoreProviders = [
    { provide: AppStore, useFactory: createAppStore },
];


/***/ }),

/***/ "iLzR":
/*!***********************************!*\
  !*** ./src/app/question.model.ts ***!
  \***********************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
class Question {
    constructor(id, question, answerType, answers) {
        this.id = id;
        this.question = question;
        this.answerType = answerType;
        this.answers = answers;
    }
    getTitle() {
        return `${this.id}. ${this.question}`;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questionnaire/questionnaire.component */ "R0Ki");
/* harmony import */ var _outro_outro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outro/outro.component */ "MrFj");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./results/results.component */ "NUXy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"] },
    { path: 'questions', component: _questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_2__["QuestionnaireComponent"] },
    { path: 'outro', component: _outro_outro_component__WEBPACK_IMPORTED_MODULE_3__["OutroComponent"] },
    { path: 'results', component: _results_results_component__WEBPACK_IMPORTED_MODULE_4__["ResultsComponent"] },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vZmJ":
/*!********************************************!*\
  !*** ./src/app/answers/answers.reducer.ts ***!
  \********************************************/
/*! exports provided: answersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "answersReducer", function() { return answersReducer; });
/* harmony import */ var _answers_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./answers.actions */ "6K4d");

const initialState = { answers: {} };
const answersReducer = (state = initialState, action) => {
    switch (action.type) {
        case _answers_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_ANSWER"]:
            const answer = action.answer;
            const questionId = action
                .questionId;
            return Object.assign({}, state, {
                answers: Object.assign(Object.assign({}, state.answers), { [questionId]: answer }),
            });
        default:
            return state;
    }
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map