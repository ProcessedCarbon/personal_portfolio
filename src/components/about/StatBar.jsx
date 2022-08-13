import React, {useEffect, useState} from 'react'
import './statbar.css'

const StatBar = ({done, text}) => {
	const [style, setStyle] = useState({});
	let colorVar ='';

	if(done <= 30){
		colorVar ='var(--red-statbar-bg)';
	}
	else if(done > 30 && done <= 70){
		colorVar ='var(--yellow-statbar-bg)';

	}
	else if(done > 70){
		colorVar ='var(--green-statbar-bg)';
	}

	// ========== Styles ============= //
	const newStyle = {
		opacity: 1,
		width: `${done}%`,
	};

	const hoverStyle = {
		opacity: 1,
		background: `${colorVar}`,
		width: `${done}%`,
	};

	useEffect(() => {
		setStyle(newStyle);
	}, [done]);

	return (
		<div className="stat"
		onMouseEnter={()=> setStyle(hoverStyle)}
		onMouseLeave={()=> setStyle(newStyle)}>
			<div className="stat-bar" style={style}>
				 {/* <h5>{done}%</h5> */}
				 <h5>{text}</h5>
			</div>
		</div>
	)
}

export default StatBar