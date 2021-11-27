import dynamic from "next/dynamic"
import React from "react"

const NoSsr = props =>{
	return(
		<>
			{props.children}
		</>
	)
}

export default dynamic(
	()=>Promise.resolve(NoSsr), 
	{
		ssr: false
	}
)