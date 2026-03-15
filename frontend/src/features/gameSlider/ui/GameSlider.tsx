import React from 'react'
import cl from './GameSlider.module.scss'
import { Slider } from '@/src/shared/ui/Slider/Slider'
import Icon from '@/src/shared/ui/Icon/Icon'
import WowIcon from '@/src/shared/assets/icon/MKAEFkjjnlTrj2k9.jpg'
import PubgIcon from '@/src/shared/assets/icon/2WAjx69jjaJqkciCUcvIyA.jpeg'
import WowPoster from '@/src/shared/assets/icon/i.webp'
import TLOUIcon from '@/src/shared/assets/icon/orig.webp'
import TheWitcherIcon from '@/src/shared/assets/icon/ss_5710298af2318afd9aa72449ef29ac4a2ef64d8e.1920x1080.jpg'
import Text from '@/src/shared/ui/Text/Text'

interface GameSliderProps {
    className?: string,
}

const SliderItems: Slider[] = [
    { icon: <Icon width={500} height={300} img={WowIcon} alt="WowIcon" /> },
    { icon: <Icon width={500} height={300} img={PubgIcon} alt="PubgIcon" /> },
    { icon: <Icon width={500} height={300} img={WowPoster} alt="WowIcon" /> },
    { icon: <Icon width={500} height={300} img={TLOUIcon} alt="TheLastOfUs Icon" /> },
    { icon: <Icon width={500} height={300} img={TheWitcherIcon} alt="TheLastOfUs Icon" /> },
]

const GameSlider = ({ className }: GameSliderProps) => {

    return (
        <>
            <Text className={cl.SliderTitle} title="Популярные игры" />
            <div className={cl.SliderWrapper}>
                <Slider className={cl.Slider} items={SliderItems} />
            </div>
        </>

    )
}

export default GameSlider