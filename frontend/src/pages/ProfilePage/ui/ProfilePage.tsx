'use client'
import { EditableProfileCard } from '@/src/features/EditableProfileCard'
import Text from '@/src/shared/ui/Text/Text'
import { useParams } from 'next/navigation'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const params = useParams()
    const profileID = params?.profileID as string | undefined

    if (!profileID) {
        return <Text title='Профиль не найден' />
    }

    return <EditableProfileCard profileId={profileID} />
}

export default ProfilePage
