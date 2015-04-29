var tinySound = {};
(function () {
	GDT.addResearchItem({
		id : "Sound Settings",
		name : "Sound Settings".localize(),
		v : 1,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Sound") >= 2;
		},
		category : "Sound",
		categoryDisplayName : "Sound".localize()
	});
	GDT.addResearchItem({
		id : "Semi-realistic surround sound",
		name : "Semi-realistic surround sound".localize(),
		v : 8,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Sound") >= 8;
		},
		category : "Sound",
		categoryDisplayName : "Sound".localize(),
		group : "Sound",
		consolePart : 1
	});
	GDT.addResearchItem({
		id : "Remixed orchestral soundtrack",
		name : "Remixed orchestral soundtrack".localize(),
		v : 10,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Sound") >= 9;
		},
		category : "Sound",
		categoryDisplayName : "Sound".localize(),
		group : "soundtrack"
	});
	GDT.addResearchItem({
		id : "Realistic surround sound",
		name : "Realistic surround sound".localize(),
		v : 10,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Sound") >= 10;
		},
		category : "Sound",
		categoryDisplayName : "Sound".localize(),
		group : "Sound",
		consolePart : 1
	});
})();
