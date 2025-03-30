import { useEffect, useState , useRef } from 'react'
import { projectAuth , projectFirestore} from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  
  const logout = async () => {
    setError(null)
    setIsPending(true)

    try {
      // update online status
      const { uid } = projectAuth.currentUser
      await projectFirestore.collection('users').doc(uid).update({ online: false })

      // sign the user out
      await projectAuth.signOut()
      
      // dispatch logout action
      dispatch({ type: 'LOGOUT' })

      // update state
      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      } 
    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }



  // Use a ref to track the cancellation state
  const isCancelledRef = useRef(false)

  useEffect(() => {
    // Set the ref to true on component unmount
    return () => {
      isCancelledRef.current = true
    }
  }, [])

  return { logout, error, isPending }
}