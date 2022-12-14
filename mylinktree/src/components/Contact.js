import React from 'react'

const Contact = () => {

    const myStyles = ({
        title: {
            fontFamily: "Monaco",
            fontWeight: "bold",
            margin: "20px 20px 0px 20px",
            fontSize: "19px",
            color: "white",
            // textShadow: "1px 1px 4px #000000"
        },
        headline: {
            fontFamily: "Monaco",
            margin: "5px 20px 20px 20px",
            fontSize: "30px",
            color: "white"
        },
        box: {
            marginBottom: "35px",
            // textShadow: "1px 1px 4px #000000"
        }
    })


    return (
        <div style={myStyles.box}>
            <p style={myStyles.title}>For business inquires:</p>
            <a style={myStyles.headline} href="https://twitter.com/MaiKhloe">Twitter</a>
            {/* <a id = 'slack'>Wadzanayi</a> */}
        </div>
    )
}

export default Contact