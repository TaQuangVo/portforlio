import {FC, ReactNode} from "react"
import dynamic from 'next/dynamic'
import styles from "./styles.module.css"

const ThreeScreenNoSSR = dynamic(() => import("../threeScreen"), {ssr:false})

interface Props {
  children: ReactNode;
}

const Layout:FC<Props> = ({children}) => {
  return (
    <div id={"appContainer"} className={styles.appContainer}>
      <ThreeScreenNoSSR />
      {children}
    </div>
  )
}

export default Layout