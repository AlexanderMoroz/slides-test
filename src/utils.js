export function calculateVerticalPercentage(
	ref,
	threshold = 0,
	root= window,
) {
	if (!root || !ref) return 0
	const bounds = ref.getBoundingClientRect();
	const vh =
		(root instanceof Element ? root.clientHeight : root.innerHeight) || 0
	const offset = threshold * bounds.height
	const percentage =
		(bounds.bottom - offset) / (vh + bounds.height - offset * 2)

	return 1 - Math.max(0, Math.min(1, percentage))
}

export function calculateWindowScroll() {
	return document.documentElement.scrollTop /
		(document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
}

export function lowerCaseFirstLetter(str) {
	return str.charAt(0).toLowerCase() + str.slice(1);
}
