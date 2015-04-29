var TinyPack = {
	modPath: '',
	data: {}
};
(function() {
	TinyPack.modPath = GDT.getRelativePath();
	var ready = function() {};
	var error = function() {};
	GDT.loadJs(['utama/ai.js', 'utama/dialogue.js', 'utama/engine.js', 'utama/gameplay.js', 'utama/graphic.js', 'utama/leveldesign.js', 'utama/sound.js', 'utama/storyquest.js', 'utama/worlddesign.js'], ready, error);
})();