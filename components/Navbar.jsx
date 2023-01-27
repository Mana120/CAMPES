import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import {useSelector} from "react-redux";
import Link from "next/link";
const Navbar = ()=>{
    const quantity = useSelector(state=>state.cart.quantity)
    return(
        <div className={styles.container}>
            <div className={styles.item}>  
                <div className={styles.callButton}>  
                    <Image src="/img/telephone.png" alt="" width="32" height="32"/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>+91 12345 78910</div>
                </div>
            </div>
            <div className={styles.item}> 
               <ul className={styles.list}>
               <Link href="/" passHref>
                <li className={styles.listItem}>Homepage</li></Link>
                <Link href="/cart" passHref>
                <li className={styles.listItem}>My Cart</li></Link>
                <Image src="/img/logo.png" alt=" " width="160" height="69"/>
                <Link href="/admin" passHref>
                <li className={styles.listItem}>Admin Login</li></Link>
                <Link href="/Menu" passHref>
                <li className={styles.listItem}>Menu</li></Link>
               </ul>
            
             </div>
            <Link href="/cart" passHref>
            <div className={styles.item}> 
                <div className={styles.cart}>
                    <Image src="/img/cart.png" alt=" " width="30" height="30"/>
                    <div className={styles.counter}>{quantity}</div>
                </div>
            </div>
            </Link>
        </div>
    )
}
export default Navbar