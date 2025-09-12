// Cache service with TTL support
class CacheService {
  private cache = new Map<string, { data: unknown; timestamp: number }>()
  
  constructor(private ttlMs = 5 * 60 * 1000) {} // 5 minutes default

  set(key: string, data: unknown): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    })
  }

  get(key: string): unknown | null {
    const item = this.cache.get(key)
    if (!item) return null

    const isExpired = Date.now() - item.timestamp > this.ttlMs
    if (isExpired) {
      this.cache.delete(key)
      return null
    }

    return item.data
  }

  clear(): void {
    this.cache.clear()
  }

  has(key: string): boolean {
    return this.cache.has(key) && this.get(key) !== null
  }
}

export const cacheService = new CacheService()

// LocalForage persister for React Query
import localforage from 'localforage'

export const localForagePersister = {
  persistClient: async (client: unknown) => {
    await localforage.setItem('react-query-cache', client)
  },
  restoreClient: async () => {
    return await localforage.getItem('react-query-cache')
  },
  removeClient: async () => {
    await localforage.removeItem('react-query-cache')
  },
}

