import React from "react"
import "./Resource.css"

export const Resource = () => {
  return (
    <div style={{height:"100vh",overflow:"hidden"}}  id="webcrumbs">
      <div className="bg-gray-50  shadow-lg overflow-hidden font-sans">
        {/* Header Section */}
        <div style={{height:"15vh"}} className="bg-gradient-to-r from-primary-600 to-primary-800 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Resource Sharing</h1>
          <p className="text-primary-100">Upload and share academic resources with your campus community</p>
        </div>

        <div  className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          <div style={{height:"80vh", overflow:"hidden"}} className="lg:col-span-1 bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg max-h-96 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="material-symbols-outlined mr-2">upload_file</span>
              Upload Resource
            </h2>
            <div style={{height:"80vh",overflow:"scroll"}} >
              {/* Drag & Drop Area */}
            <div className="border-2 border-dashed border-primary-300 rounded-lg p-8 mb-4 text-center cursor-pointer hover:bg-primary-50 transition-colors duration-200">
              <span className="material-symbols-outlined text-5xl text-primary-400">cloud_upload</span>
              <p className="mt-2">
                Drag & drop files here or <span className="text-primary-600 font-medium">browse</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">Support PDF, DOCX, PPT, MP4 (Max 500MB)</p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full w-0"></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Ready to upload</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  placeholder="Enter resource title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  placeholder="Write a short description..."
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <div className="relative">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200 appearance-none">
                    <option value="">Select a category</option>
                    <option value="cs">Computer Science</option>
                    <option value="electronics">Electronics</option>
                    <option value="mechanical">Mechanical</option>
                    <option value="mathematics">Mathematics</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-2 pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Tags</label>
                <div className="flex flex-wrap gap-2 p-2 border border-gray-300 rounded-lg">
                  <div className="bg-primary-100 text-primary-800 px-2 py-1 rounded-md text-sm flex items-center">
                    Homework
                    <span className="material-symbols-outlined ml-1 text-sm cursor-pointer hover:text-primary-600">
                      close
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Add tags..."
                    className="flex-grow outline-none text-sm min-w-[100px]"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-sm font-medium mr-2">File Visibility:</span>
                <div className="relative inline-block w-12 h-6 mr-2">
                  <input type="checkbox" className="opacity-0 w-0 h-0" id="toggle" />
                  <label
                    htmlFor="toggle"
                    className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer before:absolute before:w-4 before:h-4 before:rounded-full before:bg-white before:left-1 before:bottom-1 before:transition-all checked:before:transform checked:before:translate-x-6 checked:bg-primary-500"
                  ></label>
                </div>
                <span className="text-sm">Public</span>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Storage Usage</span>
                  <span>120MB / 500MB</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full w-1/4"></div>
                </div>
              </div>

              <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
                Upload Resource
              </button>

              <div className="text-center">
                <button className="text-primary-600 text-sm font-medium flex items-center mx-auto hover:text-primary-800 transition-colors">
                  <span className="material-symbols-outlined text-sm mr-1">cloud</span>
                  Connect Google Drive
                </button>
              </div>
            </div>
            <div style={{height:"5vh"}}>
            </div>
            </div>
            
            
          </div>

          
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h2 className="text-xl font-bold flex items-center mb-3 sm:mb-0">
                <span className="material-symbols-outlined mr-2">folder_shared</span>
                Browse Resources
              </h2>

              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200"
                />
                <span className="material-symbols-outlined absolute left-3 top-2 text-gray-400">
                  search
                </span>
              </div>
            </div>

            {/* Filters and Sorting */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="relative">
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200 appearance-none pr-8 text-sm font-medium">
                  <option value="">All Categories</option>
                  <option value="cs">Computer Science</option>
                  <option value="electronics">Electronics</option>
                  <option value="mechanical">Mechanical</option>
                  <option value="mathematics">Mathematics</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-2 pointer-events-none text-sm">
                  expand_more
                </span>
              </div>

              <div className="relative">
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200 appearance-none pr-8 text-sm font-medium">
                  <option value="">All Formats</option>
                  <option value="pdf">PDF</option>
                  <option value="doc">DOCX</option>
                  <option value="ppt">PPT</option>
                  <option value="video">Video</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-2 pointer-events-none text-sm">
                  expand_more
                </span>
              </div>

              <div className="relative ml-auto">
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200 appearance-none pr-8 text-sm font-medium">
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Downloaded</option>
                  <option value="viewed">Most Viewed</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-2 pointer-events-none text-sm">
                  expand_more
                </span>
              </div>
            </div>

            {/* Resource Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 bg-white transform hover:-translate-y-1">
                <div className="border-l-4 border-primary-600 flex items-center p-4">
                  <span className="material-symbols-outlined text-4xl text-primary-600 mr-4">
                    picture_as_pdf
                  </span>
                  <div className="flex-1">
                    <h3 className="font-medium">Data Structures & Algorithms Notes</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <span className="material-symbols-outlined text-sm mr-1">person</span>
                      <span className="mr-3">Daniel Kim</span>
                      <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                      <span>2 days ago</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded mr-2">
                        CS
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        Algorithms
                      </span>
                    </div>
                  </div>
                  <button className="ml-2 bg-primary-50 p-2 rounded-full hover:bg-primary-100 transition-colors">
                    <span className="material-symbols-outlined text-primary-600">download</span>
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 bg-white transform hover:-translate-y-1">
                <div className="border-l-4 border-blue-600 flex items-center p-4">
                  <span className="material-symbols-outlined text-4xl text-blue-600 mr-4">draft</span>
                  <div className="flex-1">
                    <h3 className="font-medium">Electronics Circuit Design Report</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <span className="material-symbols-outlined text-sm mr-1">person</span>
                      <span className="mr-3">Sophia Lee</span>
                      <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                      <span>5 days ago</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                        Electronics
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        Circuits
                      </span>
                    </div>
                  </div>
                  <button className="ml-2 bg-blue-50 p-2 rounded-full hover:bg-blue-100 transition-colors">
                    <span className="material-symbols-outlined text-blue-600">download</span>
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 bg-white transform hover:-translate-y-1">
                <div className="border-l-4 border-green-600 flex items-center p-4">
                  <span className="material-symbols-outlined text-4xl text-green-600 mr-4">
                    slideshow
                  </span>
                  <div className="flex-1">
                    <h3 className="font-medium">Linear Algebra Presentation</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <span className="material-symbols-outlined text-sm mr-1">person</span>
                      <span className="mr-3">James Wilson</span>
                      <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                      <span>1 week ago</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2">
                        Mathematics
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        Algebra
                      </span>
                    </div>
                  </div>
                  <button className="ml-2 bg-green-50 p-2 rounded-full hover:bg-green-100 transition-colors">
                    <span className="material-symbols-outlined text-green-600">download</span>
                  </button>
                </div>
              </div>

              {/* Card 4 */}
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 bg-white transform hover:-translate-y-1">
                <div className="border-l-4 border-purple-600 flex items-center p-4">
                  <span className="material-symbols-outlined text-4xl text-purple-600 mr-4">
                    smart_display
                  </span>
                  <div className="flex-1">
                    <h3 className="font-medium">Thermodynamics Tutorial Video</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <span className="material-symbols-outlined text-sm mr-1">person</span>
                      <span className="mr-3">Emily Chen</span>
                      <span className="material-symbols-outlined text-sm mr-1">schedule</span>
                      <span>2 weeks ago</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded mr-2">
                        Mechanical
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        Video
                      </span>
                    </div>
                  </div>
                  <button className="ml-2 bg-purple-50 p-2 rounded-full hover:bg-purple-100 transition-colors">
                    <span className="material-symbols-outlined text-purple-600">play_arrow</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="px-3 py-1 border border-gray-300 rounded-l-lg hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="px-3 py-1 border-t border-b border-gray-300 bg-primary-100 text-primary-800">
                1
              </button>
              <button className="px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-100 transition-colors">
                2
              </button>
              <button className="px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-100 transition-colors">
                3
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-r-lg hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resource
