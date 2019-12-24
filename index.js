function playbackTime(e) {
	if (e.shiftKey) {
		e.preventDefault();
	}
	return;
}
window.addEventListener('contextmenu', playbackTime);
