import fetch from "isomorphic-fetch";
import Error from "next/error";
import StoryList from "../components/stories"
import Link from "next/link"

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

        return (
            <div>
                <StoryList stories={stories ? stories.hits : []} />
                <div>
                    <Link href={`/?page=${page + 1}`}><a>More</a></Link>
                    <div className="stories-page-no" Style="float:right;">Page No: {page}</div>
                </div>

            </div>
        )

    }
}

export default index;