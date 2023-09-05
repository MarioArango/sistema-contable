'use client'
import { ITranslate } from '@/interfaces/ITranslate'
import { BellOutlined, FileTextOutlined, GiftOutlined, HomeOutlined, LayoutOutlined, QuestionCircleOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons'
import Link from 'next/link'

export const getRoutes = () => {
  return (
    [
      {
        key: 'home',
        label: <Link href={`/home`}>Inicio</Link>,
        icon: <HomeOutlined />,
        permission: 'home'
      },
      {
        key: 'clients',
        label: <Link href={`/clients`}>Clientes</Link>,
        icon: <TeamOutlined/>,
        permission: 'clients'
      },
      {
        key: 'projects',
        label: <Link href={`/projects`}>Proyectos</Link>,
        icon: <LayoutOutlined/>,
        permission: 'projects'
      },
      {
        key: 'quotes',
        label: <Link href={`/quotes`}>Cotizaciones</Link>,
        icon: <FileTextOutlined/>,
        permission: 'quotes'
      },
      // {
      //   key: 'configuration',
      //   label: <Link href={`/configuration`}>{t('configuration')}</Link>,
      //   icon: <SettingOutlined/>,
      //   permission: 'configuration'
      // },
      // {
      //   key: 'questions',
      //   label: <Link href={`/questions`}>{t('questions')}</Link>,
      //   icon: <QuestionCircleOutlined/>,
      //   permission: 'questions'
      // },
      // {
      //   key: 'promotions',
      //   label: <Link href={`/promotions`}>{t('promotions')}</Link>,
      //   icon: <GiftOutlined/>,
      //   permission: 'promotions'
      // },
      // {
      //   key: 'notifications',
      //   label: <Link href={`/notifications`}>{t('notifications')}</Link>,
      //   icon: <BellOutlined/>,
      //   permission: 'notifications'
      // },                 
    ]
  )
}