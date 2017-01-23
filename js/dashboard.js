angular.module("party", ["ui.bootstrap", "ui.router", "ngCookies"]);
"use strict";
angular.module("party").config(["$stateProvider", "$urlRouterProvider", function(t, e) {
    e.otherwise("/"), t.state("index", {
        url: "/",
        templateUrl: "templates/dashboard.html"
    })
}]);


function MasterCtrl(t, e) {
    var g = 992;
    t.getWidth = function() {
        return window.innerWidth
    }, t.$watch(t.getWidth, function(o, n) {
        o >= g ? angular.isDefined(e.get("toggle")) ? t.toggle = !!e.get("toggle") : t.toggle = !0 : t.toggle = !1
    }), t.toggleSidebar = function() {
        t.toggle = !t.toggle, e.put("toggle", t.toggle)
    }, window.onresize = function() {
        t.$apply()
    }
}
angular.module("party").controller("MasterCtrl", ["$scope", "$cookieStore", MasterCtrl]);


function rdWidgetBody() {
    var d = {
        requires: "^rdWidget",
        scope: {
            loading: "=?",
            classes: "@?"
        },
        transclude: !0,
        template: '<div class="widget-body" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
        restrict: "E"
    };
    return d
}
angular.module("party").directive("rdWidgetBody", rdWidgetBody);

function rdWidgetFooter() {
    var e = {
        requires: "^rdWidget",
        transclude: !0,
        template: '<div class="widget-footer" ng-transclude></div>',
        restrict: "E"
    };
    return e
}
angular.module("party").directive("rdWidgetFooter", rdWidgetFooter);

function rdWidgetTitle() {
    var i = {
        requires: "^rdWidget",
        scope: {
            title: "@",
            icon: "@"
        },
        transclude: !0,
        template: '<div class="widget-header"><div class="row"><div class="pull-left"><i class="fa" ng-class="icon"></i> {{title}} </div><div class="pull-right col-xs-6 col-sm-4" ng-transclude></div></div></div>',
        restrict: "E"
    };
    return i
}
angular.module("party").directive("rdWidgetHeader", rdWidgetTitle);

function rdWidget() {
    var d = {
        transclude: !0,
        template: '<div class="widget" ng-transclude></div>',
        restrict: "EA"
    };
    return d
}
angular.module("party").directive("rdWidget", rdWidget);