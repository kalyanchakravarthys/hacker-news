import moment from 'moment';
import StoriesHeader from "./header"
import Upvote from "./upvote"
import Story from "./story"

export default ({ stories }) => {
    return (<div className="story-list">
                <StoriesHeader />
                { (stories || []).map(story => (<Story story={story} />)) }
            </div>)
}

