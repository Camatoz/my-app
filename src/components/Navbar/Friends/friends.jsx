import React from 'react';
import test from '../Navbar.module.css';

const Item = (props) => {
    return (
        <div className={test.itemFr}>
            <div className={test.circle}></div>
            <div className={test.name}>{props.name}</div>
        </div>
    )
}

const Friends = (props) => {

    let namesElement =
    props.name.map(n => <Item name={n.name} /> );
    
    return(
        <div className={test.back}>
            <div className={test.title}>
                <h1>Friends</h1>
            </div>
            <div className={test.itemsWrapper}>
                {namesElement}
            </div>
        </div>
    )
}

export default Friends;
