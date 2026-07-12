import { useEffect, useState } from 'react'
import api from '../service/api'

export default function Home() {
  const [item, setItem] = useState<any>(null)

  useEffect(() => {
    let mounted = true
    // example request (public placeholder API)
    api
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => {
        if (mounted) setItem(res.data)
      })
      .catch(() => {
        if (mounted) setItem({ error: 'Request failed' })
      })
    return () => {
      mounted = false
    }
  }, [])

  return (
    <main>
      <h1>Home</h1>
      <p>This page shows a simple `axios` request example.</p>
      <pre>{item ? JSON.stringify(item, null, 2) : 'Loading...'}</pre>
    </main>
  )
}
