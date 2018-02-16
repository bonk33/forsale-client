import gql from 'graphql-tag'

export const getItem = gql`
    query getItem($id: Int!) {
        listing: item(id: $id) {
            id
            title
            owner {
                username
            }
            imageVersion
            imageId
            description
            price
        }
    }
`

export const getItems = gql`
    query getItems {
        listings: allItems {
            id
            title
            owner {
                username
            }
            imageVersion
            imageId
            description
            price
        }
    }
`

export const getItemsWithCategoryNames = gql`
    query getItemsWithCategoryNames {
        listings: allItems {
            id
            title
            owner {
                username
            }
            image_version
            image_id
            description
            price
            category {
                name
            }
        }
    }
`

export const getCategories = gql`
    query getCategories {
        categories: allCategories {
            id
            name
            slug
        }
    }
`

export const getCategoryWithItems = gql`
    query getCategoryWithItems($id: Int!) {
        category: category(id: $id) {
            id
            name
            items {
                id
                title
                owner {
                    username
                }
                imageId
                imageVersion
                description
                price
            }
        }
    }
`
