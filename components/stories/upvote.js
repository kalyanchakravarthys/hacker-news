import { useState, useEffect } from "react";

export default ({ id, vote }) => {
    console.log(vote, id)

    const [localVote, setLocalVote] = useState(vote ? Number(vote) : 0);

    useEffect(() => {
        if (localVote)
            localStorage.setItem(id, localVote || 0);
    }, [localVote])

    useEffect(() => {
        const storedVote = localStorage.getItem(id)
        setLocalVote(storedVote ? Number(storedVote): 0)
    }, [localVote, id])

    return (<div key={id} className="story-up-votes">
        <div>{localVote}</div>
        <div className="votearrow" title="upvote" onClick={() => setLocalVote(localVote + 1)}></div>
    </div>)
}