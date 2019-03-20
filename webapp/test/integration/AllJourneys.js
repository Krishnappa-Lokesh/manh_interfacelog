jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"cscintlog/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"cscintlog/test/integration/pages/Worklist",
		"cscintlog/test/integration/pages/Object",
		"cscintlog/test/integration/pages/NotFound",
		"cscintlog/test/integration/pages/Browser",
		"cscintlog/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "cscintlog.view."
	});

	sap.ui.require([
		"cscintlog/test/integration/WorklistJourney",
		"cscintlog/test/integration/ObjectJourney",
		"cscintlog/test/integration/NavigationJourney",
		"cscintlog/test/integration/NotFoundJourney",
		"cscintlog/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});