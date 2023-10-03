export const prerender = true

export const load = ({ params }) => {
    return {
        recipeId: params.slug
    }
}