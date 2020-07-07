/**
 * react component that displays hello world
 * we want to run it with node
 * we want to make html string from a react component
 */

import React, { useEffect } from 'react';
import { renderToString } from 'react-dom/server';

class Hello1 extends React.Component {
    constructor(props) {
        super(props);

        console.log('contructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');   
    }

    render() {
        console.log('render');
        return (
            <h1>
                Hello world from class
            </h1>
        )
    }
}

// React.createElement
function Hello() {
    console.log('hello function');

    useEffect(() => {
        console.log('useEffect');
    })

    return (
        <h1>
            Hello world
        </h1>
    )
}

const html = renderToString(<Hello1 />);
console.log(html);