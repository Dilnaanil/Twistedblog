import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiSearch, FiSun, FiMoon } from 'react-icons/fi';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <header className="p-5 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
        <h1 className="text-2xl font-bold">Viner Blog</h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded border dark:bg-gray-800 dark:text-white"
          />
          <button onClick={toggleDarkMode} className="p-2">
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </header>
      <div className="flex">
        <main className="w-3/4 p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3].map((post) => (
              <Link key={post} href={`/post/${post}`} className="block p-4 border rounded shadow-sm dark:border-gray-700">
                <h3 className="text-lg font-semibold">Blog Post {post}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Short description of the blog post...</p>
              </Link>
            ))}
          </div>
        </main>
        <aside className="w-1/4 p-6 border-l dark:border-gray-700">
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul>
            <li>Tech</li>
            <li>Design</li>
            <li>Lifestyle</li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2">Recent Posts</h3>
          <ul>
            <li>Post 1</li>
            <li>Post 2</li>
          </ul>
          <h3 className="font-semibold mt-4 mb-2">Follow Us</h3>
          <p>Social Media Links Here</p>
        </aside>
      </div>
    </div>
  );
}
