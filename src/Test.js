import React from 'react';

function Welcome(props) {
    return <h1>Hello {props.surname}</h1>
}

const MyComponent = (props) => {
    return (
        <div>
            <h1><Welcome surname="Vergara"></Welcome></h1>
            <h1>Hi! I am {props.name}. This is MyComponent!</h1>
            <p>This is a simple {props.project} component.</p>
        </div>
    );
};

export default MyComponent;