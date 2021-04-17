import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

function Error() {

    let history = useHistory()

    useEffect(() => {
        history.push('/home')
    }, [])

    return (
        <div>
            <h1>Error Page</h1>
        </div>
    )
}

export default Error
