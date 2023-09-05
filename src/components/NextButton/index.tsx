'use client'

import { MouseEventHandler } from 'react'
import { Button } from 'antd'

interface IPropsNextButton {
  text: string,
  type?: 'text' | 'link' | 'default' | 'primary' | 'dashed',
  size?: 'small' | 'middle' | 'large',
  block?: boolean,
  danger?: boolean,
  disabled?: boolean,
  ghost?: boolean,
  htmlType?: 'button' | 'submit' | 'reset',
  icon?: string | React.ReactNode,
  loading?: boolean,
  shape?: 'default' | 'circle' | 'round',
  className?: string,
  onClick?: MouseEventHandler<HTMLElement>,
  style?: {}
}

export default function NextButton(props : IPropsNextButton): JSX.Element{
  const { 
    text, 
    type = 'default',
    size,
    block,
    danger,
    disabled,
    ghost,
    htmlType,
    icon,
    loading,
    shape,
    className,
    onClick,
    style
  } = props
  return (
    <Button 
      type={type} 
      size={size}
      block={block}
      danger={danger}
      disabled={disabled}
      ghost={ghost}
      htmlType={htmlType}
      icon={typeof icon !== 'string' && icon}
      loading={loading}
      shape={shape}
      className={`next-button ${className??''}`}
      onClick={onClick} 
      style={style}
    >
      <>
        { typeof icon === 'string' && <i className={`${icon} gx-mr-2`}/>}
        {text}
      </>
    </Button>
  )
}