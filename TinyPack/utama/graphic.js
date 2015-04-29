var tinyGraphic = {};
(function () {
	GDT.addResearchItem({
		id : "144p resolution",
		name : "144p resolution".localize(),
		v : 1,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Graphic") >= 2;
		},
		category : "Graphic",
		categoryDisplayName : "Graphic".localize(),
		group : "resolution"
	});
	GDT.addResearchItem({
		id : "240p resolution",
		name : "240p resolution".localize(),
		v : 2,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Graphic") >= 3;
		},
		category : "Graphic",
		categoryDisplayName : "Graphic".localize(),
		group : "resolution"
	});
	GDT.addResearchItem({
		id : "360p resolution",
		name : "360p resolution".localize(),
		v : 4,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Graphic") >= 4;
		},
		category : "Graphic",
		categoryDisplayName : "Graphic".localize(),
		group : "resolution"
	});
	GDT.addResearchItem({
		id : "480p resolution",
		name : "480p resolution".localize(),
		v : 6,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Graphic") >= 5;
		},
		category : "Graphic",
		categoryDisplayName : "Graphic".localize(),
		group : "resolution"
	});
	GDT.addResearchItem({
		id : "720p resolution",
		name : "720p resolution".localize(),
		v : 8,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Graphic") >= 6;
		},
		category : "Graphic",
		categoryDisplayName : "Graphic".localize(),
		group : "resolution"
	});
	GDT.addResearchItem({
		id : "1080p resolution",
		name : "1080p resolution".localize(),
		v : 10,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Graphic") >= 7;
		},
		category : "Graphic",
		categoryDisplayName : "Graphic".localize(),
		group : "resolution"
	});
	GDT.addResearchItem({
		id : "Bilinear filtering",
		name : "Bilinear filtering".localize(),
		v : 4,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Graphic") >= 5;
		},
		category : "Graphic",
		categoryDisplayName : "Graphic".localize(),
		group : "texture-filtering"
	});
	GDT.addResearchItem({
		id : "Trilinear filtering",
		name : "Trilinear filtering".localize(),
		v : 8,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Graphic") >= 10;
		},
		category : "Graphic",
		categoryDisplayName : "Graphic".localize(),
		group : "texture-filtering"
	});
	GDT.addResearchItem({
		id : "Anisotropic filtering",
		name : "Anisotropic filtering".localize(),
		v : 12,
		canResearch : function () {
			return LevelCalculator.getMissionLevel("Graphic") >= 15;
		},
		category : "Graphic",
		categoryDisplayName : "Graphic".localize(),
		group : "texture-filtering"
	});
})();
