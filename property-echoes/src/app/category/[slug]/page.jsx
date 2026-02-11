import Categories from "../../../../components/Categories/Categories";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import SearchResults from "../../../../components/SearchResults/SearchResults";
import { getAllPosts } from "../../../lib/jsonPosts";
import { getCategoryContent } from "../../../../content/categoryContent";
import { redirect } from "next/navigation";
import Link from "next/link";

async function fetchCategoryNameBySlug(slug) {
  const posts = getAllPosts();
  const category = posts
    .flatMap((p) => p.node.category)
    .find((c) => c.slug === slug);
  return category?.name || "Property Echoes";
}

function getFeaturedPostsForCategory(slug, allPosts, limit = 5) {
  const categoryPosts = allPosts.filter((post) =>
    post.node.category.some((c) => c.slug === slug)
  );
  return categoryPosts.slice(0, limit);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const categoryContent = getCategoryContent(slug);
  const categoryName = await fetchCategoryNameBySlug(slug);

  if (categoryContent?.seo) {
    return {
      title: categoryContent.seo.title,
      description: categoryContent.seo.description,
      alternates: {
        canonical: `https://propertyechoes.com/category/${slug}`,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  return {
    title: categoryName || "Property Echoes",
    description: `Explore the latest ${categoryName} tips, trends, and insights on Property Echoes. Whether you're a buyer, seller, or investor, find expert advice to guide your real estate journey.`,
    alternates: {
      canonical: `https://propertyechoes.com/category/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CategoryPage({ params, searchParams }) {
  const { slug } = await params;
  const { name } = await searchParams;
  const page = parseInt((await searchParams)?.page) || 1;
  const postsPerPage = 10;

  if (slug === "author" && !name) {
    redirect("/");
  }

  const categoryName = await fetchCategoryNameBySlug(slug);
  const categoryContent = getCategoryContent(slug);
  const posts = getAllPosts();
  
  const filteredPosts = posts.filter((post) => {
    if (slug === "author") {
      return post.node.author.name === name;
    }
    return post.node.category.some((c) => c.slug === slug);
  });

  const featuredPosts = getFeaturedPostsForCategory(slug, posts, 5);

  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage) || 1;

  if (page > totalPages && totalPages > 0) {
    redirect(`/category/${slug}${name ? `?name=${name}` : ""}`);
  }

  const startIndex = (page - 1) * postsPerPage;
  const visiblePosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const authorName = (await searchParams)?.name;

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#002147] text-white py-12 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">The Property Echoes Editorial</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] serif">
              {categoryName}
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed mb-8 font-medium">
              Professional analysis, expert guidance, and essential updates for homeowners, investors, and industry professionals.
            </p>
          </div>
        </div>
      </section>

      {categoryContent?.intro && (
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="container-custom py-12 lg:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-gray max-w-none">
                <div 
                  className="category-intro text-gray-700 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: categoryContent.intro }}
                />
              </div>
              
              {featuredPosts.length > 0 && (
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Articles in {categoryName}</h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {featuredPosts.slice(0, 4).map((post) => (
                      <li key={post.node.slug}>
                        <Link 
                          href={`/category/${slug}/${post.node.slug}`}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                        >
                          <span className="text-[#c5a059] mt-1">&#8226;</span>
                          <span className="text-gray-700 group-hover:text-[#002147] transition-colors font-medium">
                            {post.node.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <main className="flex flex-col">
            <SearchResults 
              visiblePosts={visiblePosts} 
              categoryName={categoryName}
              authorName={authorName}
              page={page}
              totalPages={totalPages}
              baseUrl={`/category/${slug}${name ? `?name=${name}` : ""}`}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
