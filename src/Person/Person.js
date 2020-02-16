import React from "react";
import {Button} from "semantic-ui-react"

const person = () => {
    return (
        <React.Fragment>
            <p>I'm a Person</p>
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
        </React.Fragment>
    )
}

export default person;