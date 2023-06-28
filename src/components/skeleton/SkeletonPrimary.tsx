import React from "react";
import { Skeleton } from "@mui/material"

interface Props {
	variant: "text" | "rounded" | "rectangular";
	width: number;
	height: number
}

const SkeletonPrimary = ( props : Props ) => {
	
	const { variant, width, height } = props;

  return(
		<Skeleton variant={variant} width={width} height={height}></Skeleton>
	);
};

export default SkeletonPrimary;