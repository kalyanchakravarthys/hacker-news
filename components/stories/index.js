import moment from 'moment';
import Link from "next/Link";
import StoriesHeader from "./header"

export default ({ stories }) => {
    return (<div className="story-list">
        <StoriesHeader />
        {
            stories.map(({ num_comments, title, up_votes, author, created_at }) => (
                <div className="story">
                    <div className="story-num-comments">{num_comments}</div>
                    <div className="story-up-votes"><div>{up_votes || 0}</div><div className="votearrow" title="upvote"></div></div>
                    <div>{title}</div>
                    <div className="story-author"><span Style="color: #828282">by</span> {author}</div>
                    <div className="story-created-at">{moment(moment(created_at).format("MMDDYYYY"), "MMDDYYYY").fromNow()}</div>
                </div>))
        }
    </div>)
}

