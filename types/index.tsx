import React from "react"
import {IconType} from 'react-icons'
export interface MenuLink {
    href: string,
    Icon: IconType,
    label: string,
    visible: string[]
}

export interface Menu {
    icon: React.ReactNode,
    title: string,
    linkItems: MenuLink[]
}
