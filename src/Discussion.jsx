import React from "react"

import "./Discussion.css"

const Discussion = () => {
    return (
        <div id="webcrumbs">
            {/* <div className="w-[1200px] bg-white font-sans"> */}
                <header className="bg-primary-600 text-white py-6 px-8 shadow-lg">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="white" />
                                <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="white" />
                            </svg>
                            <h1 className="text-2xl font-bold">Campus Companion</h1>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search discussions..."
                                className="w-96 px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all duration-300"
                            />
                            <span className="material-symbols-outlined absolute right-3 top-2 text-gray-500">
                                search
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="hover:bg-primary-500 p-2 rounded-full transition-all duration-300">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <button className="hover:bg-primary-500 p-2 rounded-full transition-all duration-300">
                                <span className="material-symbols-outlined">bookmark</span>
                            </button>
                            <div className="flex items-center space-x-2">
                                <img
                                    src="https://i.pravatar.cc/40?img=12"
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full border-2 border-white hover:scale-105 transition-transform duration-300"
                                />
                                <span>Emily S.</span>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="p-6 flex gap-6">
                    <aside className="w-64 bg-gray-50 rounded-lg p-4 shadow-sm h-fit sticky top-4">
                        <h2 className="font-bold text-xl mb-4 text-primary-700">Categories</h2>
                        <ul className="space-y-2">
                            <li className="bg-primary-100 p-2 rounded-md text-primary-700 font-medium hover:bg-primary-200 transition-colors duration-200 cursor-pointer flex items-center">
                                <span className="material-symbols-outlined mr-2">public</span>
                                All Topics
                            </li>
                            <li className="p-2 rounded-md hover:bg-gray-200 transition-colors duration-200 cursor-pointer flex items-center">
                                <span className="material-symbols-outlined mr-2">code</span>
                                Programming
                            </li>
                            <li className="p-2 rounded-md hover:bg-gray-200 transition-colors duration-200 cursor-pointer flex items-center">
                                <span className="material-symbols-outlined mr-2">functions</span>
                                Mathematics
                            </li>
                            <li className="p-2 rounded-md hover:bg-gray-200 transition-colors duration-200 cursor-pointer flex items-center">
                                <span className="material-symbols-outlined mr-2">work</span>
                                Placement
                            </li>
                            <li className="p-2 rounded-md hover:bg-gray-200 transition-colors duration-200 cursor-pointer flex items-center">
                                <span className="material-symbols-outlined mr-2">science</span>
                                Science
                            </li>
                            <li className="p-2 rounded-md hover:bg-gray-200 transition-colors duration-200 cursor-pointer flex items-center">
                                <span className="material-symbols-outlined mr-2">history_edu</span>
                                Humanities
                            </li>
                            {/* Next: "Add/Change more categories specific to university departments" */}
                        </ul>

                        <h2 className="font-bold text-xl mt-6 mb-4 text-primary-700">Popular Tags</h2>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm hover:bg-blue-200 transition-colors duration-200 cursor-pointer">
                                #React
                            </span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm hover:bg-green-200 transition-colors duration-200 cursor-pointer">
                                #Calculus
                            </span>
                            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-md text-sm hover:bg-purple-200 transition-colors duration-200 cursor-pointer">
                                #AI
                            </span>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md text-sm hover:bg-yellow-200 transition-colors duration-200 cursor-pointer">
                                #Java
                            </span>
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm hover:bg-red-200 transition-colors duration-200 cursor-pointer">
                                #Internships
                            </span>
                            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md text-sm hover:bg-indigo-200 transition-colors duration-200 cursor-pointer">
                                #Python
                            </span>
                            <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-md text-sm hover:bg-pink-200 transition-colors duration-200 cursor-pointer">
                                #Economics
                            </span>
                            {/* Next: "Add/Change tags based on trending topics in the university" */}
                        </div>
                    </aside>

                    <div className="flex-1">
                        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 mb-6 shadow-sm">
                            <h1 className="text-2xl font-bold text-primary-800 mb-2">Discussion Forum</h1>
                            <p className="text-gray-600 mb-4">
                                Join the conversation with fellow students and share your knowledge.
                            </p>
                            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium shadow-sm flex items-center transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
                                <span className="material-symbols-outlined mr-2">add_circle</span>
                                Create New Post
                            </button>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm mb-6">
                            <div className="border-b p-4 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <h2 className="font-bold text-xl">Posts</h2>
                                    <div className="flex border rounded-md overflow-hidden">
                                        <button className="px-3 py-1 bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200">
                                            All
                                        </button>
                                        <button className="px-3 py-1 hover:bg-gray-100 transition-colors duration-200">
                                            Following
                                        </button>
                                        <button className="px-3 py-1 hover:bg-gray-100 transition-colors duration-200">
                                            My Posts
                                        </button>
                                    </div>
                                </div>
                                <details className="relative">
                                    <summary className="list-none flex items-center gap-2 px-3 py-1 border rounded-md hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                                        <span>Sort by: Newest</span>
                                        <span className="material-symbols-outlined">expand_more</span>
                                    </summary>
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border">
                                        <ul className="py-1">
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-primary-700 font-medium">
                                                Newest
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Most Upvoted</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Most Active</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Trending</li>
                                        </ul>
                                    </div>
                                </details>
                            </div>

                            <div className="p-4 space-y-4">
                                <article className="border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:border-primary-200 cursor-pointer">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="font-bold text-lg hover:text-primary-600 transition-colors duration-200">
                                                Need help with React hooks and state management
                                            </h3>
                                            <div className="flex items-center mt-2 space-x-2 text-sm text-gray-600">
                                                <img
                                                    src="https://i.pravatar.cc/30?img=67"
                                                    alt="User"
                                                    className="w-6 h-6 rounded-full"
                                                />
                                                <span>Michael T.</span>
                                                <span>•</span>
                                                <span className="bg-blue-100 text-blue-800 px-2 rounded">
                                                    Programming
                                                </span>
                                                <span>•</span>
                                                <span>2 hours ago</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="flex flex-col items-center">
                                                <button className="text-gray-500 hover:text-primary-600 transition-colors">
                                                    <span className="material-symbols-outlined">thumb_up</span>
                                                </button>
                                                <span className="text-sm font-bold">24</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <span className="material-symbols-outlined text-gray-500">
                                                    chat_bubble_outline
                                                </span>
                                                <span className="text-sm font-bold">8</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-gray-700 line-clamp-2">
                                        I'm working on a project and struggling with understanding how to properly
                                        implement useEffect with dependencies. Sometimes my components re-render too
                                        many times and I'm not sure why...
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md text-xs">
                                            #React
                                        </span>
                                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md text-xs">
                                            #Frontend
                                        </span>
                                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md text-xs">
                                            #JavaScript
                                        </span>
                                    </div>
                                </article>

                                <article className="border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:border-primary-200 cursor-pointer">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="font-bold text-lg hover:text-primary-600 transition-colors duration-200">
                                                Tips for preparing for Google Summer Internship interviews?
                                            </h3>
                                            <div className="flex items-center mt-2 space-x-2 text-sm text-gray-600">
                                                <img
                                                    src="https://i.pravatar.cc/30?img=33"
                                                    alt="User"
                                                    className="w-6 h-6 rounded-full"
                                                />
                                                <span>Priya K.</span>
                                                <span>•</span>
                                                <span className="bg-yellow-100 text-yellow-800 px-2 rounded">
                                                    Placement
                                                </span>
                                                <span>•</span>
                                                <span>Yesterday</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="flex flex-col items-center">
                                                <button className="text-gray-500 hover:text-primary-600 transition-colors">
                                                    <span className="material-symbols-outlined">thumb_up</span>
                                                </button>
                                                <span className="text-sm font-bold">52</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <span className="material-symbols-outlined text-gray-500">
                                                    chat_bubble_outline
                                                </span>
                                                <span className="text-sm font-bold">17</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-gray-700 line-clamp-2">
                                        I've got an interview coming up for Google's summer internship program next
                                        month. Has anyone been through their interview process recently? I'm wondering
                                        what kind of algorithm questions to expect and how to prepare...
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-md text-xs">
                                            #Internship
                                        </span>
                                        <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-md text-xs">
                                            #Google
                                        </span>
                                        <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-md text-xs">
                                            #Interviews
                                        </span>
                                    </div>
                                </article>

                                <article className="border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:border-primary-200 cursor-pointer">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="font-bold text-lg hover:text-primary-600 transition-colors duration-200">
                                                Understanding eigenvalues and eigenvectors in Linear Algebra
                                            </h3>
                                            <div className="flex items-center mt-2 space-x-2 text-sm text-gray-600">
                                                <img
                                                    src="https://i.pravatar.cc/30?img=28"
                                                    alt="User"
                                                    className="w-6 h-6 rounded-full"
                                                />
                                                <span>David W.</span>
                                                <span>•</span>
                                                <span className="bg-green-100 text-green-800 px-2 rounded">
                                                    Mathematics
                                                </span>
                                                <span>•</span>
                                                <span>2 days ago</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="flex flex-col items-center">
                                                <button className="text-gray-500 hover:text-primary-600 transition-colors">
                                                    <span className="material-symbols-outlined">thumb_up</span>
                                                </button>
                                                <span className="text-sm font-bold">36</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <span className="material-symbols-outlined text-gray-500">
                                                    chat_bubble_outline
                                                </span>
                                                <span className="text-sm font-bold">21</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-gray-700 line-clamp-2">
                                        I'm struggling to conceptually understand eigenvalues and eigenvectors. I can
                                        follow the mathematical definitions and calculations, but I don't grasp what
                                        they represent geometrically or why they're so important...
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-xs">
                                            #LinearAlgebra
                                        </span>
                                        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-xs">
                                            #Mathematics
                                        </span>
                                        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-xs">
                                            #Vectors
                                        </span>
                                    </div>
                                </article>

                                <article className="border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:border-primary-200 cursor-pointer">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="font-bold text-lg hover:text-primary-600 transition-colors duration-200">
                                                Implementing a basic neural network from scratch
                                            </h3>
                                            <div className="flex items-center mt-2 space-x-2 text-sm text-gray-600">
                                                <img
                                                    src="https://i.pravatar.cc/30?img=50"
                                                    alt="User"
                                                    className="w-6 h-6 rounded-full"
                                                />
                                                <span>Alex J.</span>
                                                <span>•</span>
                                                <span className="bg-purple-100 text-purple-800 px-2 rounded">AI</span>
                                                <span>•</span>
                                                <span>3 days ago</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="flex flex-col items-center">
                                                <button className="text-gray-500 hover:text-primary-600 transition-colors">
                                                    <span className="material-symbols-outlined">thumb_up</span>
                                                </button>
                                                <span className="text-sm font-bold">42</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <span className="material-symbols-outlined text-gray-500">
                                                    chat_bubble_outline
                                                </span>
                                                <span className="text-sm font-bold">14</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-gray-700 line-clamp-2">
                                        I'm trying to build a simple neural network without using any libraries to
                                        better understand how backpropagation works. I've implemented the forward pass,
                                        but I'm having trouble with the gradient calculations...
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-md text-xs">
                                            #AI
                                        </span>
                                        <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-md text-xs">
                                            #MachineLearning
                                        </span>
                                        <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-md text-xs">
                                            #Python
                                        </span>
                                    </div>
                                </article>
                                {/* Next: "Add/Change pagination or infinite scroll functionality" */}
                            </div>
                        </div>
                    </div>

                    <aside className="w-72 space-y-6">
                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <h2 className="font-bold text-xl mb-4 text-primary-700">Create a Post</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Title</label>
                                    <input
                                        type="text"
                                        placeholder="Enter post title"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Category</label>
                                    <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all duration-300">
                                        <option>Select a category</option>
                                        <option>Programming</option>
                                        <option>Mathematics</option>
                                        <option>Placement</option>
                                        <option>Science</option>
                                        <option>Humanities</option>
                                    </select>
                                </div>
                                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
                                    Start Writing
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <h2 className="font-bold text-xl mb-4 text-primary-700">Trending Topics</h2>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-all duration-200">
                                    <span className="text-2xl font-bold text-primary-700">1</span>
                                    <div>
                                        <p className="font-medium">Final exam preparation strategies</p>
                                        <p className="text-sm text-gray-500">35 posts today</p>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-all duration-200">
                                    <span className="text-2xl font-bold text-primary-700">2</span>
                                    <div>
                                        <p className="font-medium">Summer internship opportunities</p>
                                        <p className="text-sm text-gray-500">28 posts today</p>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-all duration-200">
                                    <span className="text-2xl font-bold text-primary-700">3</span>
                                    <div>
                                        <p className="font-medium">Machine learning projects</p>
                                        <p className="text-sm text-gray-500">24 posts today</p>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-all duration-200">
                                    <span className="text-2xl font-bold text-primary-700">4</span>
                                    <div>
                                        <p className="font-medium">Research paper writing tips</p>
                                        <p className="text-sm text-gray-500">19 posts today</p>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-all duration-200">
                                    <span className="text-2xl font-bold text-primary-700">5</span>
                                    <div>
                                        <p className="font-medium">Campus events this week</p>
                                        <p className="text-sm text-gray-500">15 posts today</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <h2 className="font-bold text-xl mb-4 text-primary-700">Top Contributors</h2>
                            <ul className="space-y-4">
                                <li className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src="https://i.pravatar.cc/40?img=12"
                                            alt="User"
                                            className="w-10 h-10 rounded-full border-2 border-primary-200 hover:scale-105 transition-transform duration-300"
                                        />
                                        <div>
                                            <p className="font-medium">Emily S.</p>
                                            <p className="text-xs text-gray-500">Computer Science</p>
                                        </div>
                                    </div>
                                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm">
                                        152 posts
                                    </span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src="https://i.pravatar.cc/40?img=67"
                                            alt="User"
                                            className="w-10 h-10 rounded-full border-2 border-primary-200 hover:scale-105 transition-transform duration-300"
                                        />
                                        <div>
                                            <p className="font-medium">Michael T.</p>
                                            <p className="text-xs text-gray-500">Software Engineering</p>
                                        </div>
                                    </div>
                                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm">
                                        128 posts
                                    </span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src="https://i.pravatar.cc/40?img=33"
                                            alt="User"
                                            className="w-10 h-10 rounded-full border-2 border-primary-200 hover:scale-105 transition-transform duration-300"
                                        />
                                        <div>
                                            <p className="font-medium">Priya K.</p>
                                            <p className="text-xs text-gray-500">Data Science</p>
                                        </div>
                                    </div>
                                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm">
                                        97 posts
                                    </span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src="https://i.pravatar.cc/40?img=28"
                                            alt="User"
                                            className="w-10 h-10 rounded-full border-2 border-primary-200 hover:scale-105 transition-transform duration-300"
                                        />
                                        <div>
                                            <p className="font-medium">David W.</p>
                                            <p className="text-xs text-gray-500">Mathematics</p>
                                        </div>
                                    </div>
                                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm">
                                        85 posts
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </main>
            {/* </div> */}
        </div>
    )
}



export default Discussion;