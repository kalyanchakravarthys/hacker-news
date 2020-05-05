import fetch from "isomorphic-fetch";
import Error from "next/error";
import Link from "next/link";
import StoryList from "../components/stories";

class index extends React.Component {
    static async getInitialProps({ req, res, query }) {
        let stories;
        let statusCode;
        let page;
        try {
            page = Number(query.page) || 1;
            const data = await fetch(`https://hn.algolia.com/api/v1/search?page=${page}`);
            stories = await data.json();
            // statusCode = data.status;
        } catch (e) {
            console.log(`Error while fetching stories: ${e}`);
            statusCode = "500";
        }
        return { stories, statusCode, page };
    }

    render() {
        const { stories, statusCode, page } = this.props;
        if (statusCode) {
            return <Error statusCode={statusCode} /> 
        }

        return (<StoryList stories={stories ? stories.hits : []} page={page} />)

    }
}

export default index;