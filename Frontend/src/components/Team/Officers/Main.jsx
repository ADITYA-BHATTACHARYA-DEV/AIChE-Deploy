import React from 'react'

function Main() {
  return (
    <div>
      <div>
        <div className="relative h-full mx-4 sm:mx-6 md:mx-8 lg:mx-12 my-2 shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl brightness-50"
            style={{
              backgroundImage: `url('../../group.JPG')`,
              height: "83vh",
            }}
          ></div>
          <div
            className="relative flex items-center justify-center flex-col bg-slate-900 bg-opacity-40 lg:px-20 md:px-16 sm:px-10 px-6 mt-24 rounded-2xl"
            style={{ height: "83vh" }}
          >
            <h1 className="text-amber-400 text-center font-extrabold my-2 dynamic-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Meet Our Inspiring Team
            </h1>
            <p className="text-slate-50 text-center font-semibold my-3 text-lg sm:text-xl lg:text-xl">
              Discover
              the talented individuals who drive our success. Our team combines
              diverse skills and passions, working together to innovate and
              excel. Get to know the faces behind our achievements and the
              unique contributions they bring to our vibrant community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main
