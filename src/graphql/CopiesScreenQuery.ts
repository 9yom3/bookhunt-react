import { graphql } from 'babel-plugin-relay/macro'

// We start by defining our mutation from above using `graphql`
export const copyScreenQuery = graphql`
    query CopiesScreenQuery ($user_id: String!) { 
        copiesByUserId(userId: $user_id) { 
            id
            coordinates
            coordinatesUpdatedAt
            book { 
                id 
                title
                authors
                thumbnailUrl
                smallThumbnailUrl
                description
                categories
                maturityRating
            }
            borrows {
                id
                comment
                rate
                user {
                    id
                    username
                }
            }
        }
    }
` ;

