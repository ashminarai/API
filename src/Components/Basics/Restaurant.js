import React, {useState} from 'react'


const Restaurant = () => {
    const [menuData, setMenuData]= useState(Menu);
    return (
        <>
       <MenuCard menuData = {menuData}/>
        </>
    );
};


export default Restaurant;
