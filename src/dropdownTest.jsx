import React, { Component } from 'react'
import { Dropdown, Button } from 'semantic-ui-react';
// import styled from "styled-components";

const friendOptions = [
    {
        key: 'Jenny HessJenny Hess',
        title: 'Jenny HessJenny Hess',
        text: 'Jenny HessJenny Hess',
        value: 'Jenny HessJenny Hess',
    },
    {
        key: 'Elliot FuElliot Fu',
        title: 'Elliot FuElliot Fu',
        text: 'Elliot FuElliot Fu',
        value: 'Elliot FuElliot Fu',
    },
    {
        key: 'Stevie FelicianoStevie Feliciano',
        title: 'Stevie FelicianoStevie Feliciano',
        text: 'Stevie FelicianoStevie Feliciano',
        value: 'Stevie FelicianoStevie Feliciano',
    },
    {
        key: 'ChristianChristian',
        title: 'ChristianChristian',
        text: 'ChristianChristian',
        value: 'ChristianChristian',
    },
    {
        key: 'MattMatt',
        title: 'MattMatt',
        text: 'MattMatt',
        value: 'MattMatt',
    },
    {
        key: 'Justen KitsuneJusten Kitsune',
        title: 'Justen KitsuneJusten Kitsune',
        text: 'Justen KitsuneJusten Kitsune',
        value: 'Justen KitsuneJusten Kitsune',
    },
];

// const StyledDropdown = styled(Dropdown)`
//    &&&& {   
//         .item {
//             width: 100%;
//             white-space: nowrap;
//             overflow: hidden;
//             text-overflow: ellipsis;
//         }
//     }
// `;

class DropdownTest extends Component {

    constructor() {
        super();
        this.createRef = React.createRef();
    }
    handleClick = () => {
        this.createRef.current.open();
        console.log(this.createRef.current.ref);
    }


    render() {
        return (
            <div>
                <Dropdown
                    placeholder='I open on focus'
                    openOnFocus
                    selection
                    ref={this.createRef}
                    options={friendOptions}
                />
                <Button
                    primary
                    onClick={this.handleClick}
                >
                    Click</Button>
            </div>
        )
    }
}

export default DropdownTest
