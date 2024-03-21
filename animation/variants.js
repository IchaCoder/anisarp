export const slideLeft = {
	hidden: {
		opacity: 0,
		x: 50,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 140,
		},
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			stiffness: 80,
			delay: 0.5,
		},
	},
};

export const slideUp = {
	hidden: {
		opacity: 0,
		y: 100,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 140,
		},
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 80,
			delay: 0.8,
		},
	},
};
