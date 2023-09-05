'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/providers/Store/hooks";
import { Avatar, Divider, Drawer, Menu, Popover, Tooltip, Typography } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { BellOutlined, GiftOutlined, LogoutOutlined, MenuUnfoldOutlined, QuestionCircleOutlined, SettingOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import { getRoutes } from "./routes";
import { rxCloseSession } from "@/providers/Store/actions/session/services";
import logo from "public/assets/logo.png";
import "./index.scss";
import { blobStorageContainerName, blobStorageContainerPrefix, blobStorageUrl } from "@/utils/config";
import SearchGeneral from './SearchGeneral';
import { Cookies } from 'react-cookie';
import { encrypt } from '@/utils/helpers';

const { Paragraph } = Typography

// const minWidthScreenSmall = 992
const minWidthScreenSmall = 950

export default function NavigatorProtected() {
    //NAVIGATION URL
    const router = useRouter();
    const pathname = usePathname();

    //STATE OWN COMPONENT
    const [ screenSmall, setScreenSmall ] = useState<number>(1200)
    const [ showSidebar, setShowSidebar ] = useState<boolean>(false)
    const [ viewNav, setViewNav ] = useState<boolean>(false)

    //REDUX STATE
    const { user, token } = useAppSelector(({ auth }) => auth);
    
    const urlPublicAvatar= user?.avatar? blobStorageUrl+'/'+blobStorageContainerName+'/'+blobStorageContainerPrefix +'/'+ user?.avatar : ''

    //EXECUTOR OF ACTIONS REDUX
    const dispatch = useAppDispatch();

    /**
    * --------
    * METHODS
    * --------
    */
    const handleCloseSession = () => {
      user && dispatch(rxCloseSession({ userId: user?._id, token }, () => {
        router.push(`/sign-in`)
      }))
    }

    const handleShowSidebar = (view: boolean) => {
        setShowSidebar(view)
    }

    const userMenuOptions = <div>
                               <div onClick={handleCloseSession} className='gx-pointer gx-text-primary'><LogoutOutlined className='gx-mr-1'/>Salir</div> 
                            </div>

    const navConfig = <div className="gx-d-flex gx-justify-content-between gx-align-items-center">
                            <SearchGeneral/>
                            <Link href={`/configuration`} className={`${pathname.includes('configuration')? 'gx-text-primary':'gx-text-disabled'} gx-ml-2`}>
                                <Tooltip title='Configuración'>
                                    <SettingOutlined className="icon-link"/>
                                </Tooltip>
                            </Link>
                            <Divider type="vertical"/>
                            <Link href={`/questions`} className={`${pathname.includes('questions')? 'gx-text-primary':'gx-text-disabled'}`}>
                                <Tooltip title='Preguntas'>
                                    <QuestionCircleOutlined className="icon-link"/>
                                </Tooltip>
                            </Link>
                            <Divider type="vertical"/>
                            <Link href={`/promotions`} className={`${pathname.includes('promotions')? 'gx-text-primary':'gx-text-disabled'}`}>
                                <Tooltip title='Promociones'>
                                    <GiftOutlined className="icon-link"/>
                                </Tooltip>
                            </Link>
                            <Divider type="vertical"/>
                            <Link href={`/notifications`} className={`${pathname.includes('notifications')? 'gx-text-primary':'gx-text-disabled'}`}>
                                <Tooltip title='Notificaciones'>
                                    <BellOutlined className="icon-link"/>
                                </Tooltip>
                            </Link>
                            <Divider type="vertical"/>
                            <Popover placement="bottomRight" content={userMenuOptions} trigger="click">
                                <div className="gx-d-flex gx-justify-content-between gx-align-items-center gx-pointer">
                                    <Avatar shape='circle' size={40} className="icon-link" icon={<UserOutlined/>} src={urlPublicAvatar}/>
                                    <Paragraph className='gx-ml-1 gx-mb-0' style={{minWidth: '39.5px'}}>{user?.name.substring(0,5)??'U'}</Paragraph>
                                    <DownOutlined className='gx-ml-1'/>
                                </div>
                            </Popover>
                        </div>

    useEffect(() => {
        setScreenSmall(window.innerWidth)
        window.addEventListener("resize", () => {
            setScreenSmall(window.innerWidth)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      useEffect(() => {
        if(user){
            const cookies = new Cookies()
            if(!cookies.get('logged')){
                //IF NOT EXIST AND EXIST USER, SET COOKIE FOR REDIRECT PAGES WITH AUTH OR PUBLIC
                cookies.set("logged", encrypt(process?.env?.NEXT_PUBLIC_SECRET_LOGGED_COOKIE??''))
            }
            setViewNav(true)
        }
      }, [user])

    return (
        <>
            {
                viewNav &&
                <>
                    <nav className="container-navigation gx-box-shadow-nav">
                        {
                            minWidthScreenSmall >= screenSmall
                            ?   <MenuUnfoldOutlined className='gx-text-blue gx-ml-1 gx-mr-2' onClick={() => handleShowSidebar(true)}/>
                            :   <div className='gx-d-flex gx-justify-content-start gx-align-items-center gx-h-100'>
                                    <Link href={`/home`} className="navigation-logo">
                                        <Image src={logo} alt='Logo' priority={true}/>
                                    </Link>
                                    <Menu
                                        className='gx-ml-3'
                                        mode="horizontal" 
                                        items={getRoutes()}
                                        theme="light"
                                    />
                                </div>
                        }
                        {navConfig}
                    </nav>
                    {
                        showSidebar &&
                        <Drawer
                            width={240}
                            title={
                                <div className='gx-mt-2'>
                                <Image src={logo} alt='Logo' priority={true} width={130}/>
                                </div>
                            }
                            placement="left"
                            onClose={() => handleShowSidebar(false)}
                            open={showSidebar}
                        >
                            <Menu 
                                mode="vertical" 
                                items={getRoutes()}
                                theme="light"
                                style={{border: 0}}
                            />
                        </Drawer>
                    }
                </>
            }
        </>
    )
}