var tinyGameplay = {};
(function () {
	GDT.addResearchItem({
		id : "Real world systems",
		name : "Real world systems".localize(),
		v : 10,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Gameplay") >= 10;
		},
		category : "Gameplay",
		categoryDisplayName : "Gameplay".localize(),
	});
})();
