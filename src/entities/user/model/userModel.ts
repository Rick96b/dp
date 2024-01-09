export type User = {
    id: string,
    login: string,
    name: string,
    role: string
}

export type UserContextType = {
    user: User | null,
    setUser: (user: User | null) => void
  }
  
