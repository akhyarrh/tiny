var tinyEngine = {};
(function () {
	GDT.addResearchItem({
		id : "Resolution settings",
		name : "Resolution settings".localize(),
		v : 1,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Graphic") >= 1;
		},
		category : "Engine",
		categoryDisplayName : "Engine".localize()
	});
	GDT.addResearchItem({
		id : "Camera settings",
		name : "Camera settings".localize(),
		v : 1,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Engine") >= 1;
		},
		category : "Engine",
		categoryDisplayName : "Engine".localize()
	});
	GDT.addResearchItem({
		id : "Control settings",
		name : "Control settings".localize(),
		v : 1,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Engine") >= 1;
		},
		category : "Engine",
		categoryDisplayName : "Engine".localize()
	});
	GDT.addResearchItem({
		id : "Autosave to cloud",
		name : "Autosave to cloud".localize(),
		v : 6,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Engine") >= 8;
		},
		category : "Engine",
		categoryDisplayName : "Engine".localize(),
		group : "savegame"
	});
	GDT.addResearchItem({
		id : "Optimized online play",
		name : "Optimized online play".localize(),
		v : 8,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Engine") >= 10;
		},
		category : "Engine",
		categoryDisplayName : "Engine".localize(),
		group : "multiplayer"
	});
	GDT.addResearchItem({
		id : "Realistic physics",
		name : "Realistic physics".localize(),
		v : 10,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Engine") >= 11;
		},
		category : "Engine",
		categoryDisplayName : "Engine".localize()
	});
	GDT.addResearchItem({
		id : "Multiple multiplayer mode",
		name : "Multiple multiplayer mode".localize(),
		v : 10,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Engine") >= 12;
		},
		category : "Engine",
		categoryDisplayName : "Engine".localize(),
		group : "multiplayer"
	});
})();
