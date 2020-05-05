import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import StoryList from '../components/stories'
import { HACKER_NEWS_BASE_URL, HACKER_NEWS_ACTION } from '../config'

class index extends React.Component {
  static async getInitialProps({ query }) {
    let stories
    let statusCode
    let page
    try {
      page = Number(query.page) || 1
      const data = await fetch(
        `${HACKER_NEWS_BASE_URL}${HACKER_NEWS_ACTION}?page=${page}`
      )
      stories = await data.json()
      // statusCode = data.status;
    } catch (e) {
      console.log(`Error while fetching stories: ${e}`)
      statusCode = '500'
    }
    return { stories, statusCode, page }
  }

  render() {
    const { stories, statusCode, page } = this.props
    if (statusCode) {
      return <Error statusCode={statusCode} />
    }

    return <StoryList stories={stories ? stories.hits : []} page={page} />
  }
}

export default index
