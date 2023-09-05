'use client'
import { ChangeEvent, useRef, useState } from "react";
import NextButton from "@/components/NextButton";
import { useAppDispatch } from "@/providers/Store/hooks";
import { SearchOutlined } from "@ant-design/icons";
import { Input, InputRef, Popover } from "antd";
import { ITranslate } from "@/interfaces/ITranslate";

interface IPropsSearchGeneral extends ITranslate {}

export default function SearchGeneral(): JSX.Element {
    //STATE OWN COMPONENT
    const [ loading, setLoading ] = useState<boolean>(false)

    //EXECUTOR OF ACTIONS REDUX
    const dispatch = useAppDispatch()

    //NODE REFERENCES TO GIVE YOU INTERACTIVITY
    const searchRef = useRef<InputRef | null>(null)

    /**
     *---------------
     * METHODS
     * --------------
     */

    const handleOpenSearch = () => {
        setTimeout(() => {
            searchRef?.current?.focus()
        }, 100)
    }

    const handleChangeSearch = (value: string, event?: ChangeEvent<HTMLInputElement>) => {
        if(value?.length >= 2){
        }
    }

    return (
        <Input
            ref={searchRef} 
            allowClear
            placeholder='Buscar...'
            prefix={<SearchOutlined/>}
            className="gx-w-100"
            style={{ height: '30px'}}
            // onSearch={handleChangeSearch}
            maxLength={50} 
        />
    )
}