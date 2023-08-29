{
	"_Name": "KNPL_TSS",
	"Version": "/KNPL_TSS/Globals/AppDefinition_Version.global",
	"MainPage": "/KNPL_TSS/Pages/Main.page",
	"OnLaunch": [
		"/KNPL_TSS/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/KNPL_TSS/Rules/OnWillUpdate.js",
	"OnDidUpdate": "/KNPL_TSS/Actions/Service/InitializeOnline.action",
	"Styles": "/KNPL_TSS/Styles/Styles.less",
	"Localization": "/KNPL_TSS/i18n/i18n.properties",
	"_SchemaVersion": "6.1"
}