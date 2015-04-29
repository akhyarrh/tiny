var tinyWorldDesign = {};
(function () {
	GDT.addResearchItem({
		id : "Realistic world details",
		name : "Realistic world details".localize(),
		v : 10,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("World Design") >= 9;
		},
		category : "World Design",
		categoryDisplayName : "World Design".localize(),
	});
	GDT.addResearchItem({
		id : "Multi universe",
		name : "Multi universe".localize(),
		v : 12,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("World Design") >= 10;
		},
		category : "World Design",
		categoryDisplayName : "World Design".localize(),
	});
})();
