import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => (
    <Layout>
        <h1>About {data.site.siteMetadata.siteTitle}</h1>
        <p>
            We're the only site running on your computer dedicated to showing the best
            photos and videos of pandas eating lots of food.
        </p>
    </Layout> 
)

// GraphQL babbby
/*
Page queries live outside of the component definition — 
by convention at the end of a page component file — 
and are only available on page components.
** StaticQuery allows non-page components like layout.js
to retrieve data from GraphQL queries
*/
export const query = graphql`
    query {
        site {
            siteMetadata {
                siteTitle
            }
        }
    }
`