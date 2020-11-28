import React from 'react';
import {StoreType} from './types/entities';


const StoreContext = React.createContext({} as StoreType);


export const Provider: React.FC<{store: StoreType}> = (props) => {
   return <StoreContext.Provider value = {props.store}>
           {props.children}
       </StoreContext.Provider>
}

export default StoreContext;