import React from 'react'
import cl from './GameSlider.module.scss'
import { Slider } from '@/src/shared/ui/Slider/Slider'
import WowIcon from '@/src/shared/assets/icon/MKAEFkjjnlTrj2k9.jpg'
import PubgIcon from '@/src/shared/assets/icon/2WAjx69jjaJqkciCUcvIyA.jpeg'
import WowPoster from '@/src/shared/assets/icon/i.webp'
import TLOUIcon from '@/src/shared/assets/icon/orig.webp'
import TheWitcherIcon from '@/src/shared/assets/icon/ss_5710298af2318afd9aa72449ef29ac4a2ef64d8e.1920x1080.jpg'
import Text from '@/src/shared/ui/Text/Text'
import Image from 'next/image'

interface GameSliderProps {
    className?: string
}

const SliderItems: Slider[] = [
    {
        icon: (
            <Image
                quality={75}
                width={500}
                height={300}
                src={WowIcon}
                placeholder='blur'
                alt='WowIcon'
            />
        ),
    },
    {
        icon: (
            <Image
                quality={75}
                width={500}
                height={300}
                src={PubgIcon}
                placeholder='blur'
                alt='PubgIcon'
            />
        ),
    },
    {
        icon: (
            <Image
                quality={75}
                width={500}
                height={300}
                src={WowPoster}
                placeholder='blur'
                alt='WowIcon'
            />
        ),
    },
    {
        icon: (
            <Image
                quality={75}
                width={500}
                height={300}
                src={TLOUIcon}
                placeholder='blur'
                alt='TheLastOfUs Icon'
            />
        ),
    },
    {
        icon: (
            <Image
                quality={55}
                width={500}
                height={300}
                src={TheWitcherIcon}
                placeholder='blur'
                alt='The Wither Icon'
            />
        ),
    },
]

const GameSlider = ({ className }: GameSliderProps) => {
    return (
        <>
            <Text className={cl.SliderTitle} title='Популярные игры' />
            <div className={cl.SliderWrapper}>
                <Slider className={cl.Slider} items={SliderItems} />
            </div>
        </>
    )
}

export default GameSlider
