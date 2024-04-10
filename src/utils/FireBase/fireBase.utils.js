import {initializeApp} from 'firebase/app'
import {getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,
onAuthStateChanged
} from 'firebase/auth'
import {getFirestore,
doc,
setDoc,
getDoc,
collection,
writeBatch,
query,
getDocs
} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAXCmR6l3pwCL2E6H9LOtjN75ceQFK08x4",
  authDomain: "crown-clothing-db-d6b74.firebaseapp.com",
  projectId: "crown-clothing-db-d6b74",
  storageBucket: "crown-clothing-db-d6b74.appspot.com",
  messagingSenderId: "451442749810",
  appId: "1:451442749810:web:c2398348bb1d0c18a66deb"
};
initializeApp(firebaseConfig)
const provider=new GoogleAuthProvider()
provider.setCustomParameters({
  prompt:'select_account' 
});


export const auth=getAuth()
export const signInWithGooglePopup=async()=>await signInWithPopup(auth,provider)
const db=getFirestore()
export const addCollectionAndDocument =async(collectionKey,objectsToAdd)=>{
  const collectionRef=collection(db,collectionKey);
  const batch=writeBatch(db);
  objectsToAdd.forEach(object => {
    const docRef=doc(collectionRef,object.title.toLowerCase());
    batch.set(docRef,object)
  
  });
  await batch.commit()


}

export const getCategaroiesAndReference=async()=>{
  const collectionRef=collection(db,"Collection")
  const que=query(collectionRef)
  const querySnapShot=await getDocs(que)
  const categoryMap=querySnapShot.docs.reduce((acc,docSnapshot)=>{
    const {title,items}=docSnapshot.data()
    acc[title.toLowerCase()]=items;
    return acc;
  },{})
  return categoryMap
}

export const createUserFromAuth=async(userAuth,additionalInformation={})=>{
  if( !userAuth)return
  const userDocRef=doc(db,'ourUsers',userAuth.uid)
  const userSnapShot=getDoc(userDocRef)
  if(!(userSnapShot).exists){
    const {displayName,email}=userAuth;
    const createdAt=new Date();
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    }
    catch(error){
    console.log(error)
    }
 }
  return userDocRef;
}

export const createUserWithEmailAndPAssword=async (email,password)=>{
 if(!email || !password)return
 return await createUserWithEmailAndPassword(auth,email,password)
 
}

export const SignInWithEmailAndPassword=async(email,password)=>{
  if(!email || !password)return

  return await signInWithEmailAndPassword(auth,email,password)
}
export const signOutUser=async()=> await signOut(auth)

export const onAuthStateChangeListener=(callback)=>{
 onAuthStateChanged(auth,callback)
}