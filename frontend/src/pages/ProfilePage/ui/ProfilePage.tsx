'use client'

import { RequireAuthProvider } from '@/src/app/model/providers/RequireAuthProvider/RequireAuthProvider'
import EditableProfileCard from '@/src/features/EditableProfileCard/ui/EditableProfile/ui/EditableProfileCard'
import Text from '@/src/shared/ui/Text/Text'
import { useParams } from 'next/navigation'

interface ProfilePageProps {
    className?: string,
}

const ProfilePage = ({ className }: ProfilePageProps) => {

    const { profileID } = useParams<{ profileID: string }>() as { profileID: string }

    if (!profileID) {
        return <Text title='Профиль не найден' />
    }

    return (
        <RequireAuthProvider>
            <EditableProfileCard profileId={profileID} />
        </RequireAuthProvider>
    )
}

export default ProfilePage