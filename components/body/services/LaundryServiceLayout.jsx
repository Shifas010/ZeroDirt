import Cart from '@/components/card'
import React from 'react'
import {LaundryCartDetails} from "../../hooks/DataProvider"

function LaundryServiceLayout() {




    return (
        <div className='h-full w-full' >
            <div className="w-full h-full ">
                <Cart CartDetails={LaundryCartDetails} Divcol={3} CardGap={2} />
            </div>

        </div>
    )
}

export default LaundryServiceLayout