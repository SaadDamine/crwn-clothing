import React from "react";
import  MenuItem  from "../menu-item/menu-item.component";

import './directory.styles.scss'

import sections from "./directory.data";

class DirectoryMenu extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            sections: sections,
        };
    }
    render()
    {
        return (
            <div className='directory-menu'>
                {this.state.sections.map( ( { id, ...otherSectionProps } ) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ) )}
            </div>
        );
    }
}

export default DirectoryMenu;