import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleEvent, handleSubmit } from "./bookingSlice";
export default function BookBuffet() {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state);
  return (
    <div>
      <div className="mx-auto max-w-2xl">
        <div className="dark:bg-white-800   max-w-sm bg-white p-4 sm:p-6 lg:p-8 ">
          <form
            className="space-y-6"
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(handleSubmit(booking.bookBuffet))
              e.currentTarget.reset();
            }}
          >
            <div>
              <label
                htmlFor="platecount"
                className="text-black-900 dark:text-black-300 mb-2 block text-sm font-medium"
              >
                Buffet Name
              </label>
              <select
                name="meal"
                id="meal"
                placeholder="select meal type"
                className="bg-white-50 dark:bg-white-600 dark:border-black-500 dark:text-gray-black  block w-full border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400"
                required=""
                onChange={(e) =>
                  dispatch(
                    handleEvent({ value: e.target.value, key: e.target.name })
                  )
                }
              >
                <option
                  className="dark:bg-white-600 dark:border-black-500 dark:text-gray block  w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400"
                  value="north-indian-meal"
                >
                  North Indian Meal
                </option>
                <option
                  className="dark:bg-white-600 dark:border-black-500 dark:text-gray block  w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400"
                  value="south-indian-meal"
                >
                  South Indian Meal
                </option>
                <option
                  className="dark:bg-white-600 dark:border-black-500 dark:text-gray block  w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400"
                  value="italian-delicasies"
                >
                  Italian Delicasies
                </option>
                <option
                  className="dark:bg-white-600 dark:border-black-500 dark:text-gray block  w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400"
                  value="continental"
                >
                  Continental
                </option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-black-900 dark:text-black-900 mb-2 block text-sm font-medium"
              >
                Email Id
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white-50 border-black-900 text-black-900 dark:bg-white-900  dark:border-black-900 block w-full border p-2.5 focus:border-blue-500 focus:ring-blue-500 dark:text-black dark:placeholder-gray-400"
                placeholder="Enter your Email "
                required=""
                onChange={(shashi) =>
                  dispatch(
                    handleEvent({ value: shashi.target.value, key: "email" })
                  )
                }
              />
            </div>
            <div>
              <label
                htmlFor="platecount"
                className="text-black-900 dark:text-black-300 mb-2 block text-sm font-medium"
              >
                Plate Count
              </label>
              <input
                type="number"
                name="platecount"
                id="platecount"
                placeholder="Number of Plates"
                className="bg-white-50 dark:bg-white-600 dark:border-black-500 block  w-full border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:text-black dark:placeholder-gray-400"
                required=""
                onChange={(e) =>
                  dispatch(
                    handleEvent({ value: e.target.value, key: e.target.name })
                  )
                }
              />
            </div>
            <div>
              <label
                htmlFor="Bookingdate"
                className="text-black-900 dark:text-black-300 mb-2 block text-sm font-medium"
              >
                Booking Date
              </label>
              <input
                type="date"
                name="bookingDate"
                id="bookingDate"
                className="bg-white-50 dark:bg-white-600 dark:border-black-500 block  w-full border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:text-black dark:placeholder-gray-400"
                required=""
                onChange={(e) =>
                  dispatch(
                    handleEvent({ value: e.target.value, key: e.target.name })
                  )
                }
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-100 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:bg-gray-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={
                  booking.bookBuffet.name === "" ||
                  booking.bookBuffet.email === "" ||
                  booking.bookBuffet.platecount === "" ||
                  booking.bookBuffet.bookingDate === ""
                }
              >
                Book Buffet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
