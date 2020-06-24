import React from 'react';
import './grid.sass';

import GridCard from './../../../components/grid-card/grid-card.jsx';

export default function Grid() {
	return (
		<div className="grid-section">
			<div className="grid-section__wrap">
				<div className="grid-section__content">
					<div className="big-cell">
						<GridCard large />
					</div>
					<div className="small-cell-1">
						<GridCard />
					</div>
					<div className="small-cell-2">
						<GridCard />
					</div>
					<div className="small-cell-3">
						<GridCard />
					</div>
					<div className="small-cell-4">
						<GridCard />
					</div>
				</div>
			</div>
		</div>
	);
}
