import * as Icons from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import '../index.css'
import MenuConfig from '../config/index'
import React from 'react';
const { Sider } = Layout;

const generateNode = (item) => {
    const IconComponent = Icons[item.icon]
    return IconComponent ? React.createElement(IconComponent) : null
}
const items=MenuConfig.map(item=>{
    console.log(item)
    const part={
        key:item.path,
        icon:generateNode(item),
        label:item.label
    }
    if(item.children){
        part.children=[]
        part.children=item.children.map(el=>{
            return {
                key:el.path,
                icon:generateNode(el),
                label:el.label,
            }
        })
    }
    return part
})
function CommonAside() {
    console.log(items)
    return (
        <>
            <Sider trigger={null} collapsible width={275} className='sidebar'>
                <div className="demo-logo-vertical logo">
                    通用后台管理系统
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                />
            </Sider>
        </>
    )
}
export default CommonAside
