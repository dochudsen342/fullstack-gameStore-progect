import Image, { StaticImageData } from 'next/image'
import cl from './Icon.module.scss'

interface IconProps {
    className?: string
    img: StaticImageData
    alt: string
    width?: number
    height?: number
} // ICON точь в точь как Image from next,пока не использую Icon,но и не удаляю

const Icon = ({ className, img, alt, width = 150, height = 150 }: IconProps) => {
    return <Image className={cl.Icon} alt={alt} src={img} width={width} height={height} />
}

export default Icon
