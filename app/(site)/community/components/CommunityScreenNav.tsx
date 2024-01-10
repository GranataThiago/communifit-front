"use client";

import React, { useState } from "react";

const CommunityScreenNav = () => {
	const [activeItem, setActiveItem] = useState(0);

	const menuItems = ["Posts", "Material"];

	const handleClick = (index: number) => {
		setActiveItem(index);
	};

	return (
		<nav className='bg-white'>
			<ul className='flex gap-4 font-medium text-xl border-b-2 tracking-tight'>
				{menuItems.map((item, index) => (
					<li
						key={index}
						className={`cursor-pointer ${
							index === activeItem && "border-b-2 border-primary"
						}`}
						onClick={() => handleClick(index)}
					>
						{item}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default CommunityScreenNav;
