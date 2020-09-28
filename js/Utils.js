"use strict";

/**
 * Utility methods
 */
let Utils = {
    /**
     * Checks if the given element matches a value inside the array
     * 
     * @param {*} arr Array, which the given element is compared to
     * @param {*} el Element, which is being compared
     */
    Compare: function(arr, el) {
        let flag = false;
        if(Utils.ArrayIsNotEmpty(arr) && Utils.ValueIsNotNull(el)) {
            for(let i = 0; i < arr.length; i++) {
                if(arr[i] === el.className) {
                    flag = true;
                    break;
                }
            }
        }
        return flag;
    },

    loadElementId: function(content) {
        let fileLocation = "./html/templates/"+content+".html";
        let elementId = "#"+content;
        $(elementId).load(fileLocation, elementId);
    },

    loadElementClass: function(content) {
        let fileLocation = "./html/templates/"+content+".html";
        let elementId = "."+content;
        $(elementId).load(fileLocation, elementId);
    },

    ArrayIsNotEmpty: function(array) {
        return Array.isArray(array) && array.length;
    },

    ValueIsNotNull: function(val) {
        return val !== null;
    }

}
