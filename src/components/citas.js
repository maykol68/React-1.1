import {useEffect, useState} from "react";

function Citas() {
    const [quote, setQuote] = useState(null)
    useEffect(function getQuotes() {
        fetch('https://www.officeapi.dev/api/quotes/random')
        .then(response => response.json())
        .then(data => setQuote(data.data))
    },
     [])
    return (<div>{quote?.content}</div>)
}

export default Citas