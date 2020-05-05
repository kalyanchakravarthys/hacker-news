import moment from 'moment';
import Upvote from "./upvote"
import { useState, useEffect } from "react";

export default ({story}) => {
    const { num_comments, title, up_votes, author, created_at, objectID } = story;
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        if (isHidden)
            localStorage.setItem(`$IS_${objectID}_HIDDEN`, Boolean(isHidden) || 0);
    }, [isHidden])

    useEffect(() => {
        const isHidden = localStorage.getItem(`$IS_${objectID}_HIDDEN`)
        setIsHidden(isHidden ? Boolean(isHidden): false)
    }, [objectID, isHidden])

    return ((
        <div key={objectID} className="story" Style={`display: ${isHidden ? 'none': 'flex'}`}>
            <div className="story-num-comments">{num_comments}</div>
            <Upvote id={objectID} votes={up_votes} />
            <div>{title}</div>
            <div className="story-author"><span Style="color: #828282">by</span> {author}</div>
            <div className="story-created-at">{moment(moment(created_at).format("MMDDYYYY"), "MMDDYYYY").fromNow()}</div>
            <div className="story-hide" onClick={() => setIsHidden(!isHidden)}>
                <span Style="color: #828282">[</span> hide <span Style="color: #828282">]</span>
            </div>
        </div>))
}

