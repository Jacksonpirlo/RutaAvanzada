import { StaticImageData } from 'next/image';
import { imgAndIcon } from '@/helpers/utils';
import Image from "next/image"
import Button from './Button';
import { JSX, useState } from 'react';
import Bagde from './Badge';

const imgAndIcons = imgAndIcon();
interface card {
    title: string;
    subtitle: string;
    icon: string | StaticImageData;
    img: string | StaticImageData;
    btnText: string;

    classNameBg: string;
    classNameBgTitle: string
    classNameBgSecondTitle: string;
    classBtnText?: string;

    BagdeProp?: JSX.Element
}

const Card = ({title, subtitle, icon, img, btnText, classNameBg, classNameBgTitle, classNameBgSecondTitle, classBtnText, BagdeProp }: card) => {
    const [load, setload] = useState(false);
    const [left, setLeft] = useState(false);
    const [rigth, setRigth] = useState(false);
    const loading = () => {
        setload(true)

        setTimeout(() => {
            setload(false)
        }, 3000);
    }

    const TurnLeft = () => {
    setLeft(left => !left)
    if (rigth) {
        setLeft(false)
    }
}

    const TurnRigth = () => {
    setRigth(rigth => !rigth)
    if (left) {
        setRigth(false)
    }
}

    return (
        <>

    <section className={`flex p-10 rounded-4xl mt-10 w-[600px] h-[310px] text-black justify-between border-b-6 border-2 ${classNameBg}`}>
        <article className='flex flex-col justify-between'>
            <div><h1 className={`${classNameBgTitle} p-1 rounded-xl`}>{ title}</h1> <h2 className={`${classNameBgSecondTitle} p-1 rounded-xl font-bold`}>{subtitle}</h2></div>
            <div className='flex gap-5 items-center'>
                {/* <span><Image src={icon} alt="" /> </span>
                <div className={`${classBtnText}`}>{btnText}</div> */}
                <div className='flex flex-col gap-1.5 text-center items-center'>
                <Button classsNameColor='text-white' Background={{type: "Warning"}} text='Learn more' Disable={load} loader={loading} leftIcon={imgAndIcons.icon1} rightIcon={imgAndIcons.icon1} left={left} rigth={rigth}/>
                <div className='flex gap-1.5 items-center'>
                <button className=' bg-amber-700 p-1 rounded-2xl text-[12px] text-black' onClick={TurnLeft}>Left Icon</button>
                <button className='bg-amber-700 p-1 rounded-2xl text-[12px] text-black' onClick={TurnRigth}>Rigth Icon</button>
                </div>
                </div>
                <span>{BagdeProp}</span>
            </div>
        </article>
        <article className='flex justify-center items-center'>
            <Image className='w-[210px] h-[170px]' src={img} alt="" />
        </article>
    </section>

        </>
    )
}

export default Card;