import React, {useState} from 'react'

const Tabs = props => {
    const[inner, setInner] = useState(0)

    const {tabs} = props
    
    const handleClick = (idx) => {
        setInner(idx)
    }

    return(
        <div>
            <h1>Hello world</h1>
            {
                tabs.map((tab, i) => {
                    return <button onClick={ () => handleClick(i)} key={i}>{tab.title}</button>
                })
            }
            <div>
                <h1>{tabs[inner].content}</h1>
            </div>
        </div>
    )
}

export default Tabs