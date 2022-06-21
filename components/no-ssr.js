import dynamic from "next/dynamic"

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