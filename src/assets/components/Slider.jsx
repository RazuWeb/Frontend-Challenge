import React, { useEffect, useRef, useState } from 'react'
import '../css/Slider.css'


function Slider({ options, initialChecked = 0 }) {
    const [labelOpt, setLabelOpt] = useState(initialChecked)
    const [positionCard, setPositionCard] = useState(initialChecked)
    const cards = useRef();
    const [inputRadio, setInputRadio] = useState(initialChecked)


    const onHandler = (e, ind) => {
        /* const cardAll = e.currentTarget.parentElement.childNodes;
        cardAll.forEach((x, index, array) => {
            
            let flagUnder = true;

            if (ind == index) {
                const classlist = x.classList[1];
                x.classList.replace(classlist, "center");
                flagUnder = false;
            }


            if (index == ind + 1 || index == 0 && ind + 1 == array.length) {
                const classlist = x.classList[1];
                x.classList.replace(classlist, "rigth");
                flagUnder = false;
            }

            if (index == ind - 1 || index == array.length - 1 && ind == 0) {
                const classlist = x.classList[1];
                x.classList.replace(classlist, "left");
                flagUnder = false;
            }

            if (flagUnder) {
                const classlist = x.classList[1];
                x.classList.replace(classlist, "under");
            }

        }) */

    }

    const clickCard = (e, ind) => {
        /*const cardAll = cards.current.childNodes;
        const index = e.target.dataset.info;
        setLabelOpt(+index);


         console.log((inputRadio)); //EN EL QUE ESTAMOS
        console.log(ind);   //AL QUE SE QUIERE LLEGAR 
        setInputRadio(ind)

        cardAll.forEach((x,index,array)=>{
            let flagUnder = true;

            if()


            /* if(inputRadio - 1 == index || inputRadio == 0){
                const classlist = x.classList[1];
                x.classList.replace(classlist, "left");
                flagUnder = false;
            } 


        }) */

        const cardAll = cards.current.childNodes;
        const index = e.target.dataset.info;
        setLabelOpt(+index);

        cardAll.forEach((x, index, array) => {
            
            let flagUnder = true;

            if (ind == index) {
                const classlist = x.classList[1];
                x.classList.replace(classlist, "center");
                flagUnder = false;
            }


            if (index == ind + 1 || index == 0 && ind + 1 == array.length) {
                const classlist = x.classList[1];
                x.classList.replace(classlist, "rigth");
                flagUnder = false;
            }

            if (index == ind - 1 || index == array.length - 1 && ind == 0) {
                const classlist = x.classList[1];
                x.classList.replace(classlist, "left");
                flagUnder = false;
            }

            if(index == ind + 2  || ind  == array.length - 2  && index == 0 || ind  == array.length - 1  && index == 1){
                const classlist = x.classList[1];
                x.classList.replace(classlist, "under-rigth");
                flagUnder = false;
            }

            if(flagUnder){
                const classlist = x.classList[1];
                x.classList.replace(classlist, "under-left");
            }

        })

    }

    useEffect(()=>{

        options.forEach((x,index,array)=>{
            const label = document.getElementById(`selector-${index}`)
            let flagUnder = true;

            if (index == initialChecked) {
                label.classList.add("center")
                flagUnder = false;
            }

            if (index == initialChecked + 1 || index == 0 && initialChecked + 1 == array.length) {
                label.classList.add("rigth")
                flagUnder = false;
            }

            if (index == initialChecked - 1 || index == array.length - 1 && initialChecked == 0) {
                label.classList.add("left")
                flagUnder = false;
            }

            if(index == initialChecked + 2  || initialChecked  == array.length - 2  && index == 0 || initialChecked  == array.length - 1  && index == 1){
                label.classList.add("under-rigth")
                flagUnder = false;
            }

            if(flagUnder){
                label.classList.add("under-left");
            }

        })
    },[])

    return (
        <div className='slider'>
            <div className='opt-radio' >
                {options.map((opt, index) => (<div key={opt.id} className="label-radio-opt">
                    <input  onChange={(e) => { clickCard(e, index) }} type="radio" name="slider" id={`item-${index}`} data-info={index} defaultChecked={initialChecked == index ? true : false} />
                    <label htmlFor={`item-${index}`} className={`${labelOpt == index ? 'radio-opt-check' : 'radio-opt'}`}></label>

                </div>))}

            </div>

            <div className='cards' ref={cards}>

                {options.map((opt, index, array) => (<label key={opt.id} className={"card"} id={`selector-${index}`} htmlFor={`item-${index}`} onClick={(e) => { onHandler(e, index) }} >
                    <div className='card-center'>
                        <div className='header-card'>
                            <img src={opt.src} alt="" />
                            <h6>{opt.name}</h6>
                        </div>
                        <p>{opt.text}</p>
                    </div>
                </label>))}

            </div>
        </div>
    )
}

export default Slider