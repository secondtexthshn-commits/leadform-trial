import Categories from "../../components/Categories/Categories";
import PostCard from "../../components/PostCard/PostCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getAllPosts } from "../lib/jsonPosts";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
  alternates: {
    canonical: "https://propertyechoes.com/",
  },
};

export default async function Home({ searchParams }) {
  const posts = getAllPosts();
  const query = (await searchParams)?.query || "";
  const page = parseInt((await searchParams)?.page) || 1;
  const postsPerPage = 10;

  // Filter posts based on the query
  const filteredPosts = query
    ? posts.filter((post) => {
        const titleMatch = post.node.title
          .toLowerCase()
          .includes(query.toLowerCase());
        const excerptMatch = post.node.excerpt
          .toLowerCase()
          .includes(query.toLowerCase());
        const contentMatch = post.node.content.html
          .toLowerCase()
          .includes(query.toLowerCase());

        return titleMatch || excerptMatch || contentMatch;
      })
    : null;

  // Determine which posts to display
  const postsToDisplay = query ? filteredPosts : posts;
  const totalPosts = postsToDisplay?.length || 0;
  const totalPages = Math.ceil(totalPosts / postsPerPage) || 1;

  if (page > totalPages || page < 1) {
    redirect("/");
  }

  // Calculate the posts for the current page
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const visiblePosts = postsToDisplay?.slice(startIndex, endIndex) || [];

  // Calculate the range of page numbers to display
  let startPage = Math.max(1, page - 1);
  let endPage = Math.min(totalPages, page + 1);

  if (page === 1) {
    endPage = Math.min(3, totalPages);
  } else if (page === totalPages) {
    startPage = Math.max(1, totalPages - 2);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Hero Section */}
      <section className="bg-[#002147] text-white py-12 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">The Property Echoes Editorial</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] serif">
              Intelligence for the modern <br className="hidden md:block" /> UK property market.
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed mb-8 font-medium">
              Professional analysis, expert guidance, and essential updates for homeowners, investors, and industry professionals.
            </p>
            <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c5a059]"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Market Trends</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c5a059]"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Legal Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c5a059]"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Expert Advice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <main>
            {query && filteredPosts && (
              <div className="flex flex-col">
                <div className="mb-12 border-b border-gray-200 pb-10">
                  <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Search Results</span>
                  <h2 className="text-[#002147] text-4xl font-bold mb-3 serif">Refining your search</h2>
                  <p className="text-gray-500 text-sm">Articles matching: <span className="text-[#002147] font-semibold">"{query}"</span></p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                  {visiblePosts.map((post, index) => (
                    <PostCard post={post.node} key={index} />
                  ))}
                </div>
                
                <div className="flex gap-2 mt-20 justify-center items-center pt-10 border-t border-gray-100">
                  <Link
                    href={`/?query=${query}&page=${page - 1}`}
                    className={`w-10 h-10 flex items-center justify-center transition-all border ${
                      page === 1
                        ? "border-gray-100 text-gray-300 cursor-not-allowed pointer-events-none"
                        : "border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white"
                    } text-[10px] font-bold`}
                    aria-disabled={page === 1}
                  >
                    &lt;
                  </Link>
                  {pageNumbers.map((num) => (
                    <Link
                      key={num}
                      href={`/?query=${query}&page=${num}`}
                      className={`w-10 h-10 flex items-center justify-center transition-all border ${
                        page === num
                          ? "bg-[#002147] text-white border-[#002147]"
                          : "border-gray-200 text-[#002147] hover:border-[#002147]"
                      } text-[10px] font-bold`}
                    >
                      {num}
                    </Link>
                  ))}
                  <Link
                    href={`/?query=${query}&page=${page + 1}`}
                    className={`w-10 h-10 flex items-center justify-center transition-all border ${
                      page === totalPages
                        ? "border-gray-100 text-gray-300 cursor-not-allowed pointer-events-none"
                        : "border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white"
                    } text-[10px] font-bold`}
                    aria-disabled={page === totalPages}
                  >
                    &gt;
                  </Link>
                </div>
              </div>
            )}

            {!query && (
              <div>
                <div className="mb-12 border-b border-gray-200 pb-10">
                  <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Latest Intelligence</span>
                  <h2 className="text-[#002147] text-4xl font-bold serif">Market Briefings & Advice</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                  {visiblePosts.map((post, index) => (
                    <PostCard post={post.node} key={index} />
                  ))}
                </div>
                
                <div className="flex gap-2 mt-20 justify-center items-center pt-10 border-t border-gray-100">
                  <Link
                    href={`/?page=${page - 1}`}
                    className={`w-10 h-10 flex items-center justify-center transition-all border ${
                      page === 1
                        ? "border-gray-100 text-gray-300 cursor-not-allowed pointer-events-none"
                        : "border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white"
                    } text-[10px] font-bold`}
                    aria-disabled={page === 1}
                  >
                    &lt;
                  </Link>
                  {pageNumbers.map((num) => (
                    <Link
                      key={num}
                      href={`/?page=${num}`}
                      className={`w-10 h-10 flex items-center justify-center transition-all border ${
                        page === num
                          ? "bg-[#002147] text-white border-[#002147]"
                          : "border-gray-200 text-[#002147] hover:border-[#002147]"
                      } text-[10px] font-bold`}
                    >
                      {num}
                    </Link>
                  ))}
                  <Link
                    href={`/?page=${page + 1}`}
                    className={`w-10 h-10 flex items-center justify-center transition-all border ${
                      page === totalPages
                        ? "border-gray-100 text-gray-300 cursor-not-allowed pointer-events-none"
                        : "border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white"
                    } text-[10px] font-bold`}
                    aria-disabled={page === totalPages}
                  >
                    &gt;
                  </Link>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
