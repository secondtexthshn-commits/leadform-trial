import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const POSTS_FILE = path.join(process.cwd(), 'content/posts.json');

/**
 * Normalizes a post from JSON to the shape expected by the GraphQL-based frontend.
 */
function normalizePost(post) {
  let contentHtml = "";
  
  if (typeof post.content === 'object' && post.content !== null) {
    contentHtml = post.content.html || "";
  } else if (typeof post.content === 'string') {
    // If it's markdown (starts with # or contains [link](url)), parse it
    if (post.content.includes('#') || post.content.includes('](')) {
      contentHtml = marked.parse(post.content);
    } else {
      contentHtml = post.content;
    }
  }

  return {
    node: {
      author: {
        bio: "",
        name: "Admin",
        id: "placeholder-id",
        photo: { url: "/placeholder-author.png" }
      },
      createdAt: post.createdAt || new Date().toISOString(),
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt || "",
      featuredImage: post.featuredImage || { url: "/placeholder-image.png" },
      category: post.category || [],
      content: { html: contentHtml }
    }
  };
}

export function getAllPosts() {
  if (!fs.existsSync(POSTS_FILE)) {
    return [];
  }

  try {
    const fileContent = fs.readFileSync(POSTS_FILE, 'utf8');
    const postsData = JSON.parse(fileContent);
    const allPosts = postsData.map(postData => normalizePost(postData));

    // Sort by createdAt (newest first)
    return allPosts.sort((a, b) => {
      return new Date(b.node.createdAt) - new Date(a.node.createdAt);
    });
  } catch (error) {
    console.error("Error reading posts.json:", error);
    return [];
  }
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  const post = posts.find(p => p.node.slug === slug);
  return post || null;
}
