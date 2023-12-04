import React from 'react';
import '../footer/footer.css';

function Footer() {
  return (
    <footer className="relative w-full z-10 bg-[var(--green)] pt-10 text-[var(--white)] pb-10 lg:pb-20" id="CONTACT">
      <div className="mx-auto px-4 flex justify-center items-center">
        <div className="-mx-4 flex flex-wrap justify-center align-middle">
          <div className="w-full sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full text-center">
              <a href="#HOME" className="inline-block max-w-[160px]">
                {/* Replace the image source with the correct path */}
                <img src="../src/earth.png" alt="logo" className="max-w-full" />
              </a>
              <p className="text-body-color mb-7 text-base font-bold">
                ReWay Inc. <br />Delhi Technological University
              </p>
              <p className="text-dark flex items-center justify-center text-sm font-medium">
                <span className="text-primary mr-3">
                  <svg width="19" height="21" viewBox="0 0 19 21" className="fill-current">
                    {/* Replace this comment with the actual SVG path */}
                  </svg>
                </span>
                <span>+91 9315836383</span>
              </p>
            </div>
          </div>

          {/* Add code for other sections */}
          {/* ... */}
        </div>
      </div>

      {/* Decorative Elements */}
      <div>
        <span className="absolute left-0 bottom-0 z-[-1]">
          <svg width="217" height="229" viewBox="0 0 217 229" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Replace this comment with the actual SVG path */}
          </svg>
        </span>
        <span className="absolute top-10 right-10 z-[-1]">
          <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Replace this comment with the actual SVG path */}
          </svg>
        </span>
      </div>
    </footer>
  );
}

export default Footer;

