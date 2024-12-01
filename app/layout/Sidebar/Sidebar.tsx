import React from "react";
import styles from './Sidebar.module.css';
import { SidebarProps } from "./Sidebar.props";


export const Sidebar = ({ children, ...props}: SidebarProps): JSX.Element => {
    return (
        <>
            <div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}