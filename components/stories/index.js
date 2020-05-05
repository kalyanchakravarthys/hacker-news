import StoriesHeader from './header'
import StoriesFooter from './footer'
import Story from './story'

export default ({ stories, page }) => {
  return (
    <div className="story-list">
      <StoriesHeader />
      {(stories || []).map((story) => (
        <Story story={story} key={story.objectID} />
      ))}
      <StoriesFooter page={page} />
    </div>
  )
}
