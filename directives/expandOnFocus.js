"use strict";

function expandOnFocus() {
    return {
    restrict: "A",
    scope: { 
        },
        link: function($scope, $element, $attrs) {
            $element.on("focus", () => {
                $element.css("height", "40px");
            });
            $element.on("blur", () => {
                $element.css("height", "10px");
            });
            }
        };
    }



 angular
 .module('MyApp')
 .directive('expandOnFocus', expandOnFocus);