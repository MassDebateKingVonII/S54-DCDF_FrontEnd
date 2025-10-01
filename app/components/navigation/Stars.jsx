"use client";
import { Fragment } from "react";

export default function Stars({ rating }) {
	const stars = [];

	for (let i = 1; i <= 5; i++) {
		if (i <= Math.floor(rating)) {
			stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
		} else if (i === Math.ceil(rating) && rating % 1 !== 0) {
			stars.push(<i key={i} className="bi bi-star-half text-warning"></i>);
		} else {
			stars.push(<i key={i} className="bi bi-star text-warning"></i>);
		}
	}

	return <Fragment>{stars}</Fragment>;
}
