'use client'
import NextButton from "@/components/NextButton";
import { useAppSelector } from "@/providers/Store/hooks";
import { Space } from "antd";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/logo.png";
import "./index.scss";
import { useEffect, useState } from 'react';

export default function NavigatorReleased() {

    const [ viewNav, setViewNav ] = useState<boolean>(false)

    //NAVIGATION URL
    const router = useRouter();
    const pathname = usePathname();

    //REDUX STATE
    const { user, token } = useAppSelector(({ auth }) => auth);

    /**
    * --------
    * METHODS
    * --------
    */

    const handleSignUp = () => {
        router.push(`/sign-up`);
    }

    const handleSignIn = () => {
        router.push(`sign-in`);
    }

    useEffect(() => {
      if(!user){
          setViewNav(true)
      }
    }, [user])

    return (
        <>
            {
                viewNav && !user && pathname && ![`/sign-in`, `/sign-up`, `/forgot-password`].includes(pathname) && 
                <nav className="container-navigation gx-box-shadow-nav">
                    <Link href={`sign-in`} className="navigation-logo">
                        <Image src={logo} alt='Logo' priority={true}/>
                    </Link>
                    <Space>
                      <NextButton
                        text='Registrate'
                        danger={true}
                        className="button"
                        onClick={handleSignUp}
                      />
                      <NextButton
                        text='Iniciar Sesión'
                        type="primary"
                        className="button"
                        onClick={handleSignIn}
                      />
                    </Space>
                </nav>
            }
        </>
    )
}