import React from 'react'
import ComponentDidMount from './Lifecycles/Mounting/4_ComponentDidMount.js'

import Header from './Lifecycles/Mounting/1_Constroctor.js'
import SentProps from './Lifecycles/Mounting/2_GetDerivedStateFromProps.js'
import GetDerivedStateFromProps from './Lifecycles/Mounting/2_GetDerivedStateFromProps.js'
import SendProps from './Lifecycles/UpDateing/1_GetDerivedStateFromProps2.js'
import ShouldComponentUpDate2 from './Lifecycles/UpDateing/2_ShouldComponentUpdate.js'
import Header3 from './Lifecycles/UpDateing/3_Render.js'
import Header4 from './Lifecycles/UpDateing/4_GetSnapshotBeforeUpdate.js'
import Header5 from './Lifecycles/UpDateing/5_ComponentDidUpdate.js'
import Container from './Lifecycles/UnMounting/ComponentWillUnmount.js'


export default function App() {
    return (
        <div>
            {/* 1. For Mounting */}
            {/* <Header/> */}
            {/* <GetDerivedStateFromProps/> */}
            {/* <SentProps/> */}
            {/* <ComponentDidMount /> */}

            {/* 2. For UpDateing */}
            {/* <SendProps /> */}
            {/* <ShouldComponentUpDate2/> */}
            {/* <Header3/> */}
            {/* <Header4/> */}
            {/* <Header5/> */}
            <Container/>

        </div>
    )
}
