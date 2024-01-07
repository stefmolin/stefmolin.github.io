import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Post from "../interfaces/post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  // faMediumM,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout preview>
        <Head>
          <title>Stefanie Molin</title>
        </Head>
        <Container>
          <div className="md:pr-8 mt-8 text-center">
            {" "}
            {/*dark mode turn this dark:text-white*/}
            <h1 className="text-5xl md:text-7xl">Stefanie Molin</h1>
            <h6 className="text-2xl md:text-xl">
              Software Engineer | Author | International Speaker
            </h6>
            <div className="py-3">
              <a
                // className="pr-2 text-orange-300 hover:text-orange-200" <- dark mode
                className="pr-2 text-blue-900 hover:text-blue-500"
                href="https://github.com/stefmolin"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithubSquare} size="2x" />
              </a>
              <a
                className="pr-2 text-blue-900 hover:text-blue-500"
                href="https://linkedin.com/in/stefanie-molin"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                className="text-blue-900 hover:text-blue-500"
                href="https://twitter.com/StefanieMolin"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
              </a>
              {/* <a
                className="ml-1"
                href="https://medium.com/@stefaniemolin"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon icon={faMediumM} size="2x" />
              </a> */}
              <br />
            </div>
            <hr />
          </div>
          <div>
            <h4 className="text-3xl md:text-2xl">Books</h4>
            <hr />
          </div>
        </Container>
      </Layout>
    </>
  );
}
