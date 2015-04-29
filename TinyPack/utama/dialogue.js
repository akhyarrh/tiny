var tinyDialog = {};
(function () {
	GDT.addResearchItem({
		id : "Advanced voice capturing",
		name : "Advanced voice capturing".localize(),
		v : 8,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Dialogs") >= 10;
		},
		category : "Dialogs",
		categoryDisplayName : "Dialogues".localize(),
		group : "Voice acting"
	});
	GDT.addResearchItem({
		id : "Improved dialogues",
		name : "Improved dialogues".localize(),
		v : 6,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Dialogs") >= 11;
		},
		category : "Dialogs",
		categoryDisplayName : "Dialogues".localize(),
	});
})();
