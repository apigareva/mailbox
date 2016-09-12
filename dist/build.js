webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _components = __webpack_require__(4);
	
	var _components2 = _interopRequireDefault(_components);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_angular2.default.module('myApp', [_angularUiRouter2.default, _components2.default.name]);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _users = __webpack_require__(5);
	
	var _users2 = _interopRequireDefault(_users);
	
	var _mails = __webpack_require__(22);
	
	var _mails2 = _interopRequireDefault(_mails);
	
	var _main = __webpack_require__(33);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.components', [_main2.default.name, _mails2.default.name, _users2.default.name]);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _restangular = __webpack_require__(6);
	
	var _restangular2 = _interopRequireDefault(_restangular);
	
	__webpack_require__(9);
	
	var _angularMaterial = __webpack_require__(10);
	
	var _angularMaterial2 = _interopRequireDefault(_angularMaterial);
	
	var _usersService = __webpack_require__(16);
	
	var _usersService2 = _interopRequireDefault(_usersService);
	
	var _userComponent = __webpack_require__(17);
	
	var _userComponent2 = _interopRequireDefault(_userComponent);
	
	var _usersComponent = __webpack_require__(20);
	
	var _usersComponent2 = _interopRequireDefault(_usersComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('users', [_angularUiRouter2.default, _angularMaterial2.default, _restangular2.default]).config(function ($stateProvider, RestangularProvider, $mdThemingProvider) {
	    RestangularProvider.setBaseUrl("http://test-api.javascript.ru/v1/apigareva");
	
	    $mdThemingProvider.theme('default').primaryPalette('indigo', {
	        'default': '400',
	        'hue-1': '100',
	        'hue-2': '600',
	        'hue-3': 'A100'
	    }).accentPalette('blue-grey', {
	        'default': '400'
	    });
	
	    $stateProvider.state('users', {
	        url: "/users",
	        template: "<users-component></users-component>"
	    }).state('user', {
	        url: "/user/:userId",
	        template: "<user-component user='user'></user-component>",
	        resolve: {
	            users: function users(usersService) {
	                return usersService.getList();
	            }
	        },
	        controller: function controller($scope, $stateParams, users) {
	            $scope.user = users.find(function (user) {
	                return user._id === $stateParams.userId;
	            });
	        }
	    });
	}).factory('usersService', _usersService2.default).component('usersComponent', _usersComponent2.default).component('userComponent', _userComponent2.default);

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var userService = function userService(Restangular) {
	    return Restangular.service('users');
	};
	
	exports.default = userService;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _userTemplate = __webpack_require__(18);
	
	var _userTemplate2 = _interopRequireDefault(_userTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var userComponent = {
	    bindings: {
	        user: "<"
	    },
	    template: _userTemplate2.default,
	    controller: function controller($state, usersService) {
	        var _this = this;
	
	        this.birthdate = this.user.birthdate ? new Date(this.user.birthdate) : '';
	        this.avatarUrl = this.user.avatarUrl || __webpack_require__(19);
	
	        this.isEditing = false;
	        this.toggleIsEditing = function () {
	            return _this.isEditing = !_this.isEditing;
	        };
	
	        this.update = function () {
	            _this.toggleIsEditing();
	            _this.user.birthdate = _this.birthdate || "";
	            usersService.one(_this.user._id).patch(_this.user);
	        };
	
	        this.remove = function () {
	            usersService.one(_this.user._id).remove();
	            $state.go('users');
	        };
	    }
	};
	
	exports.default = userComponent;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div flex-offset=\"20\">\n    <div flex-xs flex-gt-xs=\"70\">\n        <md-card>\n            <md-card-title>\n                <md-card-title-media flex=\"20\">\n                    <img class=\"md-media-md card-media\" ng-src={{$ctrl.avatarUrl}} />\n                </md-card-title-media>\n                <md-card-title-text flex=\"80\">\n                    <div layout=\"row\">\n                        <md-input-container flex=\"50\" class=\"md-icon-float md-block\">\n                            <label>Full name</label><input name=\"fullName\" ng-model=\"$ctrl.user.fullName\" type=\"text\" ng-disabled=\"!$ctrl.isEditing\" required>\n                        </md-input-container>\n                        <md-input-container flex=\"40\" class=\"md-icon-float md-block\">\n                            <label>Birthdate</label><md-datepicker ng-model=\"$ctrl.birthdate\" ng-disabled=\"!$ctrl.isEditing\"/>\n                        </md-input-container>\n                    </div>\n                    <div layout=\"row\">\n                        <md-input-container flex=\"50\" class=\"md-icon-float md-block\">\n                            <label>Email</label><input ng-model=\"$ctrl.user.email\" type=\"text\" ng-disabled=\"!$ctrl.isEditing\" required>\n                        </md-input-container>\n                        <div flex=\"5\" hide-xs hide-sm>\n                            <!-- Spacer //-->\n                        </div>\n                        <md-input-container flex=\"25\">\n                            <label>Gender</label>\n                            <md-select name=\"type\" ng-model=\"$ctrl.user.gender\" ng-disabled=\"!$ctrl.isEditing\">\n                                <md-option value=\"M\">Male</md-option>\n                                <md-option value=\"F\">Female</md-option>\n                            </md-select>\n                        </md-input-container>\n                    </div>\n                    <md-input-container class=\"md-icon-float md-block\">\n                        <label>Address</label><input ng-model=\"$ctrl.user.address\" type=\"text\" ng-disabled=\"!$ctrl.isEditing\">\n                    </md-input-container>\n                    <md-input-container class=\"md-icon-float md-block\" ng-if=\"$ctrl.isEditing\">\n                        <label>Avatar (url)</label><input ng-model=\"$ctrl.user.avatarUrl\" type=\"text\">\n                    </md-input-container>\n                </md-card-title-text>\n            </md-card-title>\n\n            <md-card-actions layout=\"row\" layout-align=\"end center\">\n                <div ng-if=\"!$ctrl.isEditing\">\n                    <button class=\"md-button md-ink-ripple\" ng-click=\"$ctrl.toggleIsEditing()\">Edit</button>\n                </div>\n                <div ng-if=\"$ctrl.isEditing\">\n                    <button class=\"md-button md-ink-ripple\" ng-click=\"$ctrl.update()\">Save</button>\n                    <button class=\"md-button md-ink-ripple\" ng-click=\"$ctrl.toggleIsEditing()\">Cancel</button>\n                </div>\n                <button class=\"md-button md-ink-ripple\" ng-click=\"$ctrl.remove()\">Remove</button>\n            </md-card-actions>\n        </md-card>\n    </div>\n</div>"

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _usersTemplate = __webpack_require__(21);
	
	var _usersTemplate2 = _interopRequireDefault(_usersTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var usersComponent = {
	    template: _usersTemplate2.default,
	    controller: function controller(usersService) {
	        var _this = this;
	
	        usersService.getList().then(function (users) {
	            _this.users = users;
	        });
	
	        this.newUser = {};
	        this.isAdding = false;
	        this.toggleIsAdditing = function () {
	            return _this.isAdding = !_this.isAdding;
	        };
	
	        this.addUser = function () {
	            _this.toggleIsAdditing();
	            usersService.post(_this.newUser).then(function (res) {
	                return _this.users.push(res);
	            });
	            _this.newUser = {};
	        };
	
	        this.update = function (user) {
	            return usersService.one(user._id).patch(user).then(function (res) {
	                return _this.users.splice(index, 1, res);
	            });
	        };
	
	        this.remove = function (id, index) {
	            return usersService.one(id).remove().then(function () {
	                return _this.users.splice(index, 1);
	            });
	        };
	
	        this.name = 'users';
	    }
	};
	
	exports.default = usersComponent;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <main-component></main-component>\n\n    <div flex-offset=\"20\" style=\"text-align: center;\">\n        <div flex-xs flex-gt-xs=\"70\">\n            <md-button flex=\"100\" class=\"md-raised md-primary md-button md-ink-ripple\"\n                       ng-disabled=\"$ctrl.isAdding\"\n                       ng-click=\"$ctrl.toggleIsAdditing()\"\n                       >\n                Add contact\n            </md-button>\n            <md-card ng-if=\"$ctrl.isAdding\" >\n                <md-card-title>\n                    <md-card-title-text>\n                        <div layout=\"row\">\n                            <md-input-container flex=\"50\" class=\"md-icon-float md-block\">\n                                <label>Full name</label><input ng-model=\"$ctrl.newUser.fullName\" type=\"text\" required>\n                            </md-input-container>\n                            <md-input-container flex=\"50\" class=\"md-icon-float md-block\">\n                                <label>Birthday</label><md-datepicker ng-model=\"$ctrl.newUser.birthdate\"/>\n                            </md-input-container>\n                        </div>\n                        <div layout=\"row\">\n                            <md-input-container flex=\"50\" class=\"md-icon-float md-block\">\n                                <label>Email</label><input ng-model=\"$ctrl.newUser.email\" type=\"text\" required>\n                            </md-input-container>\n                            <div flex=\"5\" hide-xs hide-sm>\n                                <!-- Spacer //-->\n                            </div>\n                            <md-input-container flex=\"25\">\n                                <label>Gender</label>\n                                <md-select name=\"type\" ng-model=\"$ctrl.newUser.gender\">\n                                    <md-option value=\"M\">Male</md-option>\n                                    <md-option value=\"F\">Female</md-option>\n                                </md-select>\n                            </md-input-container>\n                        </div>\n                        <md-input-container class=\"md-icon-float md-block\">\n                            <label>Address</label><input ng-model=\"$ctrl.newUser.address\" type=\"text\">\n                        </md-input-container>\n                        <md-input-container class=\"md-icon-float md-block\">\n                            <label>Avatar (url)</label><input ng-model=\"$ctrl.newUser.avatarUrl\" type=\"text\">\n                        </md-input-container>\n                    </md-card-title-text>\n                </md-card-title>\n\n                <md-card-actions layout=\"row\" layout-align=\"end center\">\n                    <button class=\"md-button md-ink-ripple\" ng-click=\"$ctrl.addUser()\">Save</button>\n                    <button class=\"md-button md-ink-ripple\" ng-click=\"$ctrl.toggleIsAdditing()\">Cancel</button>\n                </md-card-actions>\n            </md-card>\n        </div>\n    </div>\n\n    <div ng-repeat=\"user in $ctrl.users\">\n        <user-component\n                user=\"user\"\n                index=\"$index\"\n                remove=\"$ctrl.remove(user._id, $index)\"\n                update=\"$ctrl.update(user)\">\n        </user-component>\n    </div>\n\n    <div>\n        <ui-view></ui-view>\n    </div>\n</div>"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _restangular = __webpack_require__(6);
	
	var _restangular2 = _interopRequireDefault(_restangular);
	
	__webpack_require__(9);
	
	var _angularMaterial = __webpack_require__(10);
	
	var _angularMaterial2 = _interopRequireDefault(_angularMaterial);
	
	var _usersService = __webpack_require__(16);
	
	var _usersService2 = _interopRequireDefault(_usersService);
	
	var _mailboxService = __webpack_require__(23);
	
	var _mailboxService2 = _interopRequireDefault(_mailboxService);
	
	var _mailboxComponent = __webpack_require__(24);
	
	var _mailboxComponent2 = _interopRequireDefault(_mailboxComponent);
	
	var _lettersService = __webpack_require__(26);
	
	var _lettersService2 = _interopRequireDefault(_lettersService);
	
	var _lettersComponent = __webpack_require__(27);
	
	var _lettersComponent2 = _interopRequireDefault(_lettersComponent);
	
	var _letterComponent = __webpack_require__(29);
	
	var _letterComponent2 = _interopRequireDefault(_letterComponent);
	
	var _newLetterComponent = __webpack_require__(31);
	
	var _newLetterComponent2 = _interopRequireDefault(_newLetterComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('main.mails', [_angularUiRouter2.default, _angularMaterial2.default, _restangular2.default]).config(function ($stateProvider, RestangularProvider) {
	    RestangularProvider.setBaseUrl("http://test-api.javascript.ru/v1/apigareva");
	
	    $stateProvider.state("mailboxes", {
	        url: "/mailboxes",
	        template: '<mailbox-component></mailbox-component>'
	    }).state("mailboxes.newLetter", {
	        url: "/newLetter",
	        template: '<new-letter-component mailbox="mailbox" users="users"></new-letter-component>',
	        resolve: {
	            mailboxes: function mailboxes(mailboxService) {
	                return mailboxService.getList();
	            },
	            users: function users(usersService) {
	                return usersService.getList();
	            }
	        },
	        controller: function controller($scope, mailboxes, users) {
	            $scope.mailbox = mailboxes.find(function (mailbox) {
	                return mailbox.title === 'Outbox';
	            })._id;
	            $scope.users = users;
	        }
	    }).state("mailboxes.letters", {
	        url: "/:mailboxId/letters",
	        template: '<letters-component mailbox-id="mailboxId" users="users"></letters-component>',
	        resolve: {
	            users: function users(usersService) {
	                return usersService.getList();
	            }
	        },
	        controller: function controller($scope, $stateParams, users) {
	            $scope.mailboxId = $stateParams.mailboxId;
	            $scope.users = users;
	        }
	    }).state("mailboxes.letter", {
	        url: "/letter/:letterId",
	        template: '<letter-component letter="letter" user="user" remove="remove"></letter-component>',
	        resolve: {
	            letters: function letters(lettersService) {
	                return lettersService.getList();
	            },
	            users: function users(usersService) {
	                return usersService.getList();
	            }
	        },
	        controller: function controller($scope, $stateParams, lettersService, letters, users) {
	            $scope.letter = letters.find(function (letter) {
	                return letter._id === $stateParams.letterId;
	            });
	            $scope.user = users.find(function (user) {
	                return user.email === $scope.letter.to;
	            }) || {};
	        }
	    });
	}).service('usersService', _usersService2.default).service('mailboxService', _mailboxService2.default).component('mailboxComponent', _mailboxComponent2.default).service('lettersService', _lettersService2.default).component('lettersComponent', _lettersComponent2.default).component('letterComponent', _letterComponent2.default).component('newLetterComponent', _newLetterComponent2.default);

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var mailboxService = function mailboxService(Restangular) {
	    return Restangular.service('mailboxes');
	};
	
	exports.default = mailboxService;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mailboxTemplate = __webpack_require__(25);
	
	var _mailboxTemplate2 = _interopRequireDefault(_mailboxTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mailboxComponent = {
	    template: _mailboxTemplate2.default,
	    controller: function controller($state, mailboxService) {
	        var _this = this;
	
	        mailboxService.getList().then(function (mailboxes) {
	            _this.mailboxes = mailboxes;
	        });
	
	        this.redirect = function (url, param) {
	            return $state.go(url, param);
	        };
	
	        this.name = 'mails';
	    }
	};
	
	exports.default = mailboxComponent;

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <main-component></main-component>\n    <div style=\"margin: 15px 10px\">\n        <div layout-gt-sm=\"row\" layout=\"column\">\n            <div flex-gt-sm=\"10\" flex>\n                <md-button class=\"md-raised md-primary md-button md-ink-ripple\"\n                           ng-click=\"$ctrl.redirect('mailboxes.newLetter')\">\n                    Compose\n                </md-button>\n                <md-content>\n                    <md-list class=\"md-dense\" flex>\n                        <md-list-item class=\"md-1-line\" ng-repeat=\"mailbox in $ctrl.mailboxes\"\n                                      ng-click=\"$ctrl.redirect('mailboxes.letters', {mailboxId: mailbox._id})\">\n                            <span>{{mailbox.title}}</span>\n                        </md-list-item>\n                    </md-list>\n                </md-content>\n            </div>\n            <div flex=\"5\">\n                <!-- Spacer //-->\n            </div>\n            <div flex-gt-sm=\"85\" flex>\n                <ui-view></ui-view>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var lettersService = function lettersService(Restangular) {
	    return Restangular.service('letters');
	};
	
	exports.default = lettersService;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _lettersTemplate = __webpack_require__(28);
	
	var _lettersTemplate2 = _interopRequireDefault(_lettersTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var lettersComponent = {
	    bindings: {
	        mailboxId: "<",
	        users: "<"
	    },
	    template: _lettersTemplate2.default,
	    controller: function controller($state, lettersService) {
	        var _this = this;
	
	        lettersService.getList().then(function (letters) {
	            _this.letters = letters.filter(function (letter) {
	                return letter.mailbox === _this.mailboxId;
	            });
	        });
	
	        this.getAvatar = function (email) {
	            var user = _this.users.find(function (user) {
	                return user.email === email;
	            }) || {};
	            if (!!user.avatarUrl) return user.avatarUrl;else return __webpack_require__(19);
	        };
	
	        this.redirect = function (url, param) {
	            return $state.go(url, param);
	        };
	
	        this.name = 'letters';
	    }
	};
	exports.default = lettersComponent;

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <md-card flex=\"90\">\n        <md-list>\n            <md-list-item class=\"md-3-line\" ng-repeat=\"letter in $ctrl.letters\" ng-click=\"$ctrl.redirect('mailboxes.letter', {letterId: letter._id})\">\n                <img ng-src=\"{{$ctrl.getAvatar(letter.to)}}\" class=\"md-avatar\" alt=\"{{letter.to}}\" />\n                <div class=\"md-list-item-text\" layout=\"row\">\n                    <h3 flex=\"20\" >{{ letter.to }}</h3>\n                    <div flex=\"5\">\n                        <!-- Spacer //-->\n                    </div>\n                    <h4 flex=\"80\" >{{ letter.subject}}</h4>\n                </div>\n                <md-divider ng-if=\"$index !== $ctrl.letters.length - 1\"></md-divider>\n            </md-list-item>\n        </md-list>\n    </md-card>\n\n    <div>\n        <ui-view></ui-view>\n    </div>\n</div>"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _letterTemplate = __webpack_require__(30);
	
	var _letterTemplate2 = _interopRequireDefault(_letterTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var userComponent = {
	    bindings: {
	        letter: "<",
	        user: "<"
	    },
	    template: _letterTemplate2.default,
	    controller: function controller($state, lettersService) {
	        var _this = this;
	
	        this.avatarUrl = this.user.avatarUrl || __webpack_require__(19);
	
	        this.redirect = function (url, param) {
	            $state.go(url, param);
	        };
	
	        this.openUserCard = function () {
	            if (!!_this.user.email) _this.redirect('user', { userId: _this.user._id });
	        };
	
	        this.remove = function () {
	            lettersService.one(_this.letter._id).remove();
	            $state.go('mailboxes.letters', { mailboxId: _this.letter.mailbox });
	        };
	
	        this.name = 'letter';
	    }
	};
	
	exports.default = userComponent;

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div flex=\"90\">\n    <md-card>\n        <md-card-title layout=\"column\">\n            <md-card-title-text>\n                <span class=\"md-headline\">{{$ctrl.letter.subject}}</span>\n            </md-card-title-text>\n            <div layout=\"row\" style=\"margin: 30px 0; cursor: pointer\" ng-click=\"$ctrl.openUserCard()\">\n                <md-card-title-media>\n                    <img ng-src={{$ctrl.avatarUrl}} alt=\"{{$ctrl.letter.to}}\" height=\"40px\" width=\"40px\"/>\n                </md-card-title-media>\n                <md-card-title-text style=\"margin: 0 10px\">\n                    <span class=\"md-subhead\">\n                        {{$ctrl.letter.to}}\n                    </span>\n                </md-card-title-text>\n            </div>\n        </md-card-title>\n        <md-card-content>\n            <p>{{$ctrl.letter.body}}</p>\n        </md-card-content>\n    </md-card>\n    <md-card-actions layout=\"row\" layout-align=\"end center\">\n        <button class=\"md-button md-ink-ripple\" ng-click=\"$ctrl.remove()\">Remove</button>\n    </md-card-actions>\n</div>"

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _newLetterTemplate = __webpack_require__(32);
	
	var _newLetterTemplate2 = _interopRequireDefault(_newLetterTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var newLetterComponent = {
	    bindings: {
	        mailbox: "<",
	        users: "<"
	    },
	    template: _newLetterTemplate2.default,
	    controller: function controller($state, lettersService) {
	        var _this = this;
	
	        this.newLetter = {};
	
	        this.redirect = function (url, param) {
	            return $state.go(url, param);
	        };
	
	        this.querySearch = function (searchText) {
	            return _this.users.filter(function (user) {
	                return user.email.indexOf(searchText) > -1;
	            });
	        };
	
	        this.send = function () {
	            lettersService.post(Object.assign({}, _this.newLetter, { mailbox: _this.mailbox }));
	            _this.newLetter = {};
	            _this.redirect('mailboxes.letters', { mailboxId: _this.mailbox });
	        };
	
	        this.name = 'newLetter';
	    }
	};
	
	exports.default = newLetterComponent;

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div flex=\"90\">\n    <md-card>\n        <md-card-title>\n            <md-card-title-text>\n                <md-autocomplete\n                        required\n                    md-floating-label=\"To\"\n                    md-items=\"user in $ctrl.querySearch($ctrl.newLetter.to)\"\n                    md-item-text=\"user.email\"\n                    md-search-text=\"$ctrl.newLetter.to\">\n                    <md-item-template>\n                        <span md-highlight-text=\"$ctrl.newLetter.to\">{{user.email}}</span>\n                    </md-item-template>\n                    <div ng-message=\"required\">This field is required</div>\n                </md-autocomplete>\n                <md-input-container class=\"md-icon-float md-block\">\n                    <label>Subject</label><input ng-model=\"$ctrl.newLetter.subject\" type=\"text\" required>\n                </md-input-container>\n                <md-input-container class=\"md-icon-float md-block\">\n                    <label>Body</label><textarea ng-model=\"$ctrl.newLetter.body\" rows=\"10\" required></textarea>\n                </md-input-container>\n            </md-card-title-text>\n        </md-card-title>\n\n        <md-card-actions layout=\"row\">\n            <md-button class=\"md-button md-ink-ripple\" ng-click=\"$ctrl.redirect('mailboxes.letters', {mailboxId: $ctrl.mailbox})\">\n                Cancel\n            </md-button>\n            <md-button class=\"md-button md-ink-ripple\" ng-click=\"$ctrl.send({newLetter: $ctrl.newLetter})\">\n                Send\n            </md-button>\n        </md-card-actions>\n    </md-card>\n</div>"

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _angular = __webpack_require__(1);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(3);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	__webpack_require__(9);
	
	var _angularMaterial = __webpack_require__(10);
	
	var _angularMaterial2 = _interopRequireDefault(_angularMaterial);
	
	var _mainComponent = __webpack_require__(34);
	
	var _mainComponent2 = _interopRequireDefault(_mainComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('main', [_angularUiRouter2.default, _angularMaterial2.default]).config(function ($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/mailboxes');
	    $stateProvider.state('main', {
	        url: "/",
	        template: "<main-component></main-component>"
	    });
	}).component('mainComponent', _mainComponent2.default);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mainTemplate = __webpack_require__(35);
	
	var _mainTemplate2 = _interopRequireDefault(_mainTemplate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mainComponent = {
	    template: _mainTemplate2.default,
	    controller: function controller($state) {
	        var _this = this;
	
	        this.currentNavItem = $state.current.name;
	
	        this.redirect = function (url) {
	            $state.go(url);
	            _this.currentNavItem = url;
	        };
	        this.name = 'main';
	    }
	};
	
	exports.default = mainComponent;

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <md-nav-bar md-selected-nav-item=\"$ctrl.currentNavItem\">\n        <md-nav-item md-nav-click=\"$ctrl.redirect('mailboxes')\" name=\"mailboxes\">\n            Mails\n        </md-nav-item>\n        <md-nav-item md-nav-click=\"$ctrl.redirect('users')\" name=\"users\">\n            Contacts\n        </md-nav-item>\n    </md-nav-bar>\n</div>\n"

/***/ }
]);
//# sourceMappingURL=build.js.map