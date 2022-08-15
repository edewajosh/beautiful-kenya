import { collection, getDocs, query, orderBy, limit} from "firebase/firestore"
import { db } from "../firebase.config"
import { useEffect, useState } from "react"

const Packages = () => {

    const [listings, setListings] = useState(null)


    useEffect(() => {
        const fetchPackages = async () => {
            const docRef = collection(db, 'listings')

            const q = query(
                docRef,
                orderBy('timestamp', 'desc'),
                limit(10)
            )

            const querySnapshot = await getDocs(q)
            
            const currentPackages = []
            querySnapshot.forEach((doc) => {
                return currentPackages.push({
                    id: doc.id,
                    data: doc.data()
                })
            })
           console.log(currentPackages) 
            setListings(currentPackages)
        }
        fetchPackages()
    })
  return (
    <div>
        <ul>
            {
                listings && listings.map((listing) => (
                    <li 
                        key={listing.id}>
                        {listing.name}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Packages