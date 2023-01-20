import { useState } from "react"
import MenuMobile from "../MenuMobile/MenuMobile"
import MenuWeb from "../MenuWeb/MenuWeb"


function Nav() {
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    return (
        <>
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />

            <MenuWeb
                setMenuIsVisible={setMenuIsVisible}
            />

        </>
    )
}

export default Nav