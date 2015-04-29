var tinyLevelDesign = {};
(function () {
	GDT.addResearchItem({
		id : "Basic Bosses",
		name : "Basic Bosses".localize(),
		v : 2,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Level Design") >= 4;
		},
		category : "Level Design",
		categoryDisplayName : "Level Design".localize(),
		group : "bosses"
	});
	GDT.addResearchItem({
		id : "Advanced Bosses",
		name : "Advanced Bosses".localize(),
		v : 6,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Level Design") >= 9;
		},
		category : "Level Design",
		categoryDisplayName : "Level Design".localize(),
		group : "bosses"
	});
})();
