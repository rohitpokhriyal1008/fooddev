import { useEffect, useState } from "react"
import { MENU_API} from "./constants"


const useRestaurentmenu = (resid) => {
    const [menudata, setmenudata] = useState(null)

    useEffect(() => {
          fetchdata()
    },[])

const fetchdata = async () => {
    const data = await fetch(MENU_API + resid)
    const json = await data.json()
        setmenudata(json.data)
}
        console.log(menudata)

return menudata
}
export default useRestaurentmenu