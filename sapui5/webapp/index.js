sap.ui.define([
    "sap/ui/core/mvc/XMLView"
],
    /**
    *
    * @param {typeof sap.ui.core.mvc.XMLView} XMLView
    */
    function (XMLView) {
        XMLView.create({
            viewName: "logaligroup.sapui5.view.App"
        }).then(function (oView) {
            oView.placeAt("content");
        });
    });