import Cart from '@/components/card'
import React from 'react'
import {CleaningCartDetails} from "../../hooks/DataProvider"

function CleaningServiceLayout() {





    return (
        <div className='h-full w-full'>
            <div className="w-full h-ful">
                <Cart CartDetails={CleaningCartDetails} Divcol={3} CardGap={2} />
            </div>

        </div>
    )

}

export default CleaningServiceLayout