const speedLookup = {
	'0.5': 0.75,
	'0.75': 1,
	'1': 1.25,
	'1.25': 1.5,
	'1.5': 1.75,
	'1.75': 2,
	'2': 0.5,
};
function playbackTime(e) {
	if (e.shiftKey) {
		e.stopPropagation();
		const allVideoElements = [...document.querySelectorAll('video')];
		allVideoElements.forEach(video => {
			if (!video.paused) video.playbackRate = speedLookup[video.playbackRate];
		});
	}
	return;
}
window.addEventListener('contextmenu', playbackTime);
