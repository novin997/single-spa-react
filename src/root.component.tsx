import { useEffect } from "react"

const Root = () => {
  useEffect(() => {
    console.log("mount");
  
    return () => {
      console.log("unmount");
    } 
  }, [])
  
  return (
    <div>
      test123
    </div>
  )
}

export default Root

