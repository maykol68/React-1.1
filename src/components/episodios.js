import { useState, useEffect } from "react"

function Episodios() {
    const [episode, setEpisode] =useState(null)
    const [shouldRefresh, setShouldRefresh] = useState(true)
    useEffect(function getEpisodes() {
        if (!shouldRefresh) {
            return
        }
        fetch('https://www.officeapi.dev/api/episodes/random')
        .then(response => response.json())
        .then(data => {
            setShouldRefresh(false)
            setEpisode(data.data)
        });
    }, [shouldRefresh])

    function onRefresh() {
        console.log('ejecuto el on refresh')
        setShouldRefresh(true)

    }
    if (!episode) {
         return null
    }
    
    return (
    <div>
        <button onClick={onRefresh}>Refresh</button>
        <h1>{episode.title}</h1> - <h2>{episode.description}</h2>
    </div>
    )
}

export default Episodios