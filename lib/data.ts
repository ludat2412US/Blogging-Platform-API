

export let posts = [
   {
        id: 1,
        title: "My First Blog Post",
        content: "This is the content of my first blog post.",
        category: "Technology",
        tags: ["Tech", "Programming"]
   },

   {
        id: 2,
        title: "My Second Blog Post",
        content: "This is the content of my second blog post.",
        category: "Math",
        tags: ["Caculus", "Math"]
   },

   {
        id: 3,
        title: "My Third Blog Post",
        content: "This is the content of my third blog post.",
        category: "English",
        tags: ["Language", "English"]
   },
]

export type blogPost = {
    id: number,
    title: string,
    content: string,
    category: string,
    tags: [],
    createAt: string,
    updateAt: string
}

const now = new Date();
export const createAt = now.toISOString();