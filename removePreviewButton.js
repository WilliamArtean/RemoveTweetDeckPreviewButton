// Select the node that will be observed for mutations
const appNode = document.getElementsByClassName('js-app')[0];

const isPreviewButtonAdded = () => {
	return appNode.getElementsByClassName('gryphon-beta-btn-container').length !== 0;
};

function removePreviewButton() {
	const previewButton = appNode.getElementsByClassName('gryphon-beta-btn-container')[0];
	previewButton.parentNode.removeChild(previewButton);
}

// Callback function to execute when mutations are observed
const callback = (mutationList) => {
	for (const mutation of mutationList) {
		if (mutation.type === 'childList' && isPreviewButtonAdded()) {
			removePreviewButton();
			observer.disconnect();
		}
	}
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Start observing the target node for configured mutations
observer.observe(document.getRootNode(), config);

