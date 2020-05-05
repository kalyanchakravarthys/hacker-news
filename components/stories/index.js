import moment from 'moment';
import StoriesHeader from "./header"
import StoriesFooter from "./footer"
import Upvote from "./upvote"
import Story from "./story"

export default ({ stories, page }) => {
    return (<div className="story-list">
                <StoriesHeader />
                { (stories || []).map(story => (<Story story={story} />)) }
                <StoriesFooter page={page}/>
            </div>)
}

