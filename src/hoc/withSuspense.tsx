import React, { ComponentType, Suspense } from 'react';



export function withSuspense <WCP>(Component: ComponentType<WCP>){
    return (props: WCP) => {
     return <Suspense fallback={<div>Loading...</div>}>
         <Component {...props}/>
     </Suspense>
    }


}

