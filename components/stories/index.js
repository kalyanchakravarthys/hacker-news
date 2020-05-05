import moment from 'moment';
import StoriesHeader from "./header"
import Upvote from "./upvote"

export default ({ stories }) => {
    return (<div className="story-list">
        <StoriesHeader />
        {
            stories.map(({ num_comments, title, up_votes, author, created_at, objectID }) => (
                <div className="story">
                    <div className="story-num-comments">{num_comments}</div>
                    <Upvote id={objectID} votes={up_votes} />
                    <div>{title}</div>
                    <div className="story-author"><span Style="color: #828282">by</span> {author}</div>
                    <div className="story-created-at">{moment(moment(created_at).format("MMDDYYYY"), "MMDDYYYY").fromNow()}</div>
                </div>))
        }
    </div>)
}

