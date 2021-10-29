import React from 'react'
import { OPERATOR } from '../../assets/options/operator';
import { OPERATORS } from '../../assets/options/enums';
import WineBarIcon from '@mui/icons-material/WineBar';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

export default function MenuItems() {
    return (
        //         <ul id="one">
        //   <li>Float left</li> 
        //   <li>In this example</li>
        // </ul>
        // <div style="clear:both"></div>
        // <ul id="two">
        //   <li>Display inline</li>
        //   <li>In this example</li>
        // </ul>
        // <div style="clear:both"></div>
        // <ul id="three">
        //   <li>Inline-block</li>
        //   <li>In this example</li>
        // </ul>
        <div style={{
            display: 'flex',
            justifyContent: 'start'
        }}>
            {OPERATORS[OPERATOR.MENU].map((item, index) => (
                < div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    paddingRight:'20px'
                }}>
                    {item.avatarIcon}
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    )





}
