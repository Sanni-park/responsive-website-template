'use strict';

/**
 * Main application 
 */
let App = {
    /**
     * Initializes the application
     */
    load: function() {
        App.loadTemplates();
    },

    /**
     * A simple custom-made template loader for testing purposes. 
     * Do not use in production.
     */
    loadTemplates: function() {
        let templateArr = ["center", "footer", "header"];
        let htmlCollection = document.getElementsByClassName("grid");
        let gridArray = [].slice.call(htmlCollection);
        document.querySelectorAll("*").forEach(function(node) {
            if(Utils.Compare(templateArr, node)) {
                Utils.loadElementClass(node.className);
            }
        });
    }

};

function dropDownMenu() {
  var x = document.getElementById("top-nav");
  if (x.className === "contents-top-navigation") {
    x.className += " responsive";
  } else {
    x.className = "contents-top-navigation";
  }
}