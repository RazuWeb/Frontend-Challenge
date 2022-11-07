import React,{useState} from 'react'
import "../css/Navbar.css";



function Navbar({ items,menu }) {
    const [dropdown,setDropDown] = useState(0)

    const openDrop =(index)=>{
        const indexNew = index + 1
          
        setDropDown(indexNew == dropdown ? 0:indexNew)
    }

    return (
        <nav className={`${menu ?"navegation":"navegation-descativado"}`}>
            <ul className='options-navegation'>
                {items.map((item,index) => (
                    <li key={item.id} onClick={()=>{openDrop(index)}}>
                        <div className="option-principal">
                            <span>{item.name}</span>
                            <svg viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.05209 0.590027L6.64209 5.17003L11.2321 0.590027L12.6421 2.00003L6.64209 8.00003L0.64209 2.00003L2.05209 0.590027Z" fill="white" />
                            </svg>
                        </div>
                        {item.dropdownItems ? (<>
                            <ul className={` ${dropdown == index + 1? 'sub-menu':'desactivado'}`}>
                                {item.dropdownItems.map((itemD => (<li key={itemD.id} className="sub-menuItem">
                                    {itemD.nameDrop}
                                </li>)))}
                            </ul>
                        </>) : null}

                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar