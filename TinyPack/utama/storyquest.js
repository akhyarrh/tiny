var tinyStoryQuests = {};
(function () {
	GDT.addResearchItem({
		id : "Semi-realistic cutscenes",
		name : "Semi-realistic cutscenes".localize(),
		v : 6,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Story/Quests") >= 10;
		},
		category : "Story/Quests",
		categoryDisplayName : "Story/Quests".localize(),
		group : "cutscenes"
	});
	GDT.addResearchItem({
		id : "Improved storyline",
		name : "Improved storyline".localize(),
		v : 10,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Story/Quests") >= 11;
		},
		category : "Story/Quests",
		categoryDisplayName : "Story/Quests".localize(),
		group : "story"
	});
})();
