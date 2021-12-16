import React from 'react'

const Item = ({footMenu})=>{
    return <main>
        {footMenu.map((foot)=>{
            const {id,category,menu,price,img,explain} = foot
            return <div className="menuItem" key={id}>
                        <img src={img} alt={menu} />
                        <div className="contentBox">
                            <div className="titleBox">
                                <div className="title">{menu}</div>
                                <div className="priceBox">$ {price}</div>
                                <div className="priceLine"></div>
                            </div>
                            <p>{explain}</p>
                        </div>
                </div>
        })}
    </main>
}

export default Item