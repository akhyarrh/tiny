var tinyAI = {};
(function () {
	GDT.addResearchItem({
		id : "Semi-realistic A.I.",
		name : "Semi-realistic A.I.".localize(),
		v : 12,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("AI") >= 11;
		},
		category : "AI",
		categoryDisplayName : "A.I.".localize(),
		group : "ai"
	});
	GDT.addResearchItem({
		id : "Realistic A.I.",
		name : "Realistic A.I.".localize(),
		v : 14,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("AI") >= 14;
			
		},
		category : "AI",
		categoryDisplayName : "A.I.".localize(),
		group : "ai"
	});
})();
