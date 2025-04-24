import React from "react";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
const Blogs = () => {
  return (
    <div>
      Blogs
      <div className="my-30">
        <div className="my-10">
          <div className="text-center ">
            <p className="text-4xl font-bold pb-5">Developer's Blogs</p>
            <p className=" text-xl font-semibold pb-5">
              Let's explore some basic concept that will make you a good
              developer
            </p>
          </div>
          <div className="  border-2 rounded-2xl">
            <div className=" mt-10">
              <h2 className=" text-left text-2xl mx-20">
                What is useState and how does it work in React?
              </h2>
              <div className="  mx-20 my-5 py-5 border-2 border-dotted border-b-gray-300 border-t-gray-300 border-l-transparent border-r-transparent">
                <div className="text-xl text-green-600 font-semibold mb-2">
                  Answer:
                </div>
                <div>
                  <p className="text-xl font-light ">
                    The `useState` hook is a feature in React that allows you to
                    add state to functional components. It returns an array
                    containing two elements: the current state value and a
                    function to update that state. When you call the update
                    function, React re-renders the component with the new state
                    value.
                  </p>
                </div>
              </div>

              <div className=" flex justify-start items-center mx-20  text-xl font-light my-3 rounded-full ">
                <div className=" mr-5">
                  <HiOutlineCalendarDateRange />
                </div>
                <div>Added at 2025-04-23</div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------2-------------------------------------------------------------- */}

        <div className="  border-2 rounded-2xl">
          <div className=" mt-10">
            <h2 className=" text-left text-2xl mx-20">
              What is the purpose of useEffect in React?
            </h2>
            <div className="  mx-20 my-5 py-5 border-2 border-dotted border-b-transparent border-t-gray-300 border-l-transparent border-r-transparent">
              <div className="text-xl text-green-600 font-semibold mb-2">
                Answer:
              </div>
              <div>
                <p className="text-xl font-light ">
                  The useEffect Hook in React manages side effects, such as data
                  fetching and DOM updates, in functional components. It
                  requires a callback function and optional dependencies to
                  control when it runs. You can also return a cleanup function
                  for tasks like unsubscribing. It runs after the component
                  renders or when dependencies change.
                </p>
              </div>
            </div>

            <div className=" flex justify-start items-center mx-20  text-xl font-light my-3 rounded-full ">
              <div className=" mr-5">
                <HiOutlineCalendarDateRange />
              </div>
              <div>Added at 2025-04-23</div>
            </div>
          </div>
        </div>
        {/* ------------------3-----------------------------------  */}
        <div className="  border-2 rounded-2xl mt-10">
          <div className=" mt-10">
            <h2 className=" text-left text-2xl mx-20">
              What is useState and how does it work in React?
            </h2>
            <div className="  mx-20 my-5 py-5 border-2 border-dotted border-b-transparent border-t-gray-300 border-l-transparent border-r-transparent">
              <div className="text-xl text-green-600 font-semibold mb-2">
                Answer:
              </div>
              <div>
                <p className="text-xl font-light ">
                  A custom Hook in React is a reusable function that begins with
                  "use" and encapsulates logic using React Hooks. This enables
                  you to share stateful or side-effect logic across multiple
                  components. <br /> <br />
                  You should consider using a custom Hook when:
                  <li>
                    You have logic that is repeated across multiple components.
                  </li>
                  <li>
                    Your components contain complex logic that could be
                    simplified.
                  </li>
                  <li>
                    You need logic that is reusable and can be tested easily.
                  </li>
                </p>
              </div>
            </div>

            <div className=" flex justify-start items-center mx-20  text-xl font-light my-3 rounded-full ">
              <div className=" mr-5">
                <HiOutlineCalendarDateRange />
              </div>
              <div>Added at 2025-04-23</div>
            </div>
          </div>
        </div>
        {/* ---------------------------4---------------------------------------- */}
        <div className="  border-2 rounded-2xl mt-10">
          <div className=" mt-10">
            <h2 className=" text-left text-2xl mx-20">
              Difference between controlled and uncontrolled components. Which
              one is better?
            </h2>
            <div className="  mx-20 my-5 py-5 border-2 border-dotted border-b-transparent border-t-gray-300 border-l-transparent border-r-transparent">
              <div className="text-xl text-green-600 font-semibold mb-2">
                Answer:
              </div>
              <div>
                <p className="text-xl font-light ">
                  Controlled components are form inputs that are controlled by
                  React state, meaning their value is managed through useState
                  or other state management. Uncontrolled components manage
                  their own state using the DOM (e.g., refs). Controlled
                  components offer better control and are easier to test and
                  debug, so they are generally preferred for most applications.
                </p>
              </div>
            </div>

            <div className=" flex justify-start items-center mx-20  text-xl font-light my-3 rounded-full ">
              <div className=" mr-5">
                <HiOutlineCalendarDateRange />
              </div>
              <div>Added at 2025-04-23</div>
            </div>
          </div>
        </div>
        {/* -------------------5-----------------------------------------------  */}
        <div className="  border-2 rounded-2xl mt-10">
          <div className=" mt-10">
            <h2 className=" text-left text-2xl mx-20">
              Tell us something about useFormStatus() in React
            </h2>
            <div className="  mx-20 my-5 py-5 border-2 border-dotted border-b-transparent border-t-gray-300 border-l-transparent border-r-transparent">
              <div className="text-xl text-green-600 font-semibold mb-2">
                Answer:
              </div>
              <div>
                <p className="text-xl font-light ">
                  useFormStatus is a React Hook provided by React DOM in newer
                  versions, used within a form context to get the status of the
                  form submission. It helps in managing UI feedback like loading
                  spinners or disabling inputs while the form is submitting.
                </p>
              </div>
            </div>

            <div className=" flex justify-start items-center mx-20  text-xl font-light my-3 rounded-full ">
              <div className=" mr-5">
                <HiOutlineCalendarDateRange />
              </div>
              <div>Added at 2025-04-23</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
