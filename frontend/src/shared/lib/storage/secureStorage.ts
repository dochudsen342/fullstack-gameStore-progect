type StorageKey = 'user-id'

interface StoreData<T> {
    data: T
    timestamp: number
    expiry: number
}

const STORAGE_KEYS: Record<StorageKey, string> = {
    'user-id': 'user-id',
} as const

class SecureStorage {
    private prefix = 'app_'

    private isValidJson(str: string): boolean {
        try {
            JSON.parse(str)
            return true
        } catch {
            return false
        }
    }

    private isExpired(timestamp: number, expiry: number): boolean {
        if (!expiry) return false
        return Date.now() - timestamp > expiry
    }

    private sanitizeKey(key: string): string {
        return this.prefix + key.replace(/[^a-zA-Z0-9_-]/g, '')
    }

    set<T>(key: StorageKey, data: T, expiry: number): void {
        try {
            const stored: StoreData<T> = {
                data,
                timestamp: Date.now(),
                expiry,
            }

            const serializedData = JSON.stringify(stored)

            localStorage.setItem(this.sanitizeKey(STORAGE_KEYS[key]), serializedData)
        } catch (error) {
            throw new Error('Не удалось сохранить данные')
        }
    }

    get<T>(key: StorageKey): T | null {
        try {
            const serializedData = localStorage.getItem(this.sanitizeKey(key))

            if (!serializedData) return null

            if (!this.isValidJson(serializedData)) {
                this.clear(key)
                return null
            }

            const stored: StoreData<T> = JSON.parse(serializedData)

            if (this.isExpired(stored.timestamp, stored.expiry)) {
                console.log('isExpired')
                this.clear(key)
                return null
            }

            return stored.data
        } catch (error) {
            console.error('SecureStorage get error:', error)
            this.clear(key)
            return null
        }
    }

    clear(key: StorageKey): void {
        localStorage.removeItem(this.sanitizeKey(STORAGE_KEYS[key]))
    }

    clearAll(): void {
        Object.values(STORAGE_KEYS).forEach((key) => {
            localStorage.removeItem(this.sanitizeKey(key))
        })
    }

    has(key: StorageKey): boolean {
        return localStorage.getItem(this.sanitizeKey(STORAGE_KEYS[key])) !== null
    }
}

export const secureStorage = new SecureStorage()
