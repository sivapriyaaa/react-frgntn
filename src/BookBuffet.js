import React from "react";

export default function BookBuffet() {
  return (
    <div>
      <div class="mx-auto max-w-2xl">
        <div class="dark:bg-white-800   max-w-sm bg-white p-4 sm:p-6 lg:p-8 ">
          <form class="space-y-6" action="#">
            <div>
              <label
                for="platecount"
                class="text-black-900 dark:text-black-300 mb-2 block text-sm font-medium"
              >
                Buffet Name
              </label>
              <select
                name="platecount"
                id="platecount"
                placeholder="Number of Plates"
                class="bg-white-50 dark:bg-white-600 dark:border-black-500 dark:text-gray-black  block w-full border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400"
                required=""
              >
                <option
                  class="dark:bg-white-600 dark:border-black-500 dark:text-gray block  w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400"
                  value="volvo"
                >
                  Volvo
                </option>
                <option
                  class="dark:bg-white-600 dark:border-black-500 dark:text-gray block  w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400"
                  value="saab"
                >
                  Saab
                </option>
                <option
                  class="dark:bg-white-600 dark:border-black-500 dark:text-gray block  w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400"
                  value="fiat"
                >
                  Fiat
                </option>
                <option
                  class="dark:bg-white-600 dark:border-black-500 dark:text-gray block  w-full border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400"
                  value="audi"
                >
                  Audi
                </option>
              </select>
            </div>
            <div>
              <label
                for="email"
                class="text-black-900 dark:text-black-900 mb-2 block text-sm font-medium"
              >
                Email Id
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-white-50 border-black-900 text-black-900 dark:bg-white-900  dark:border-black-900 block w-full border p-2.5 focus:border-blue-500 focus:ring-blue-500 dark:text-black dark:placeholder-gray-400"
                placeholder="Enter your Email "
                required=""
              />
            </div>
            <div>
              <label
                for="platecount"
                class="text-black-900 dark:text-black-300 mb-2 block text-sm font-medium"
              >
                Plate Count
              </label>
              <input
                type="number"
                name="platecount"
                id="platecount"
                placeholder="Number of Plates"
                class="bg-white-50 dark:bg-white-600 dark:border-black-500 block  w-full border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:text-black dark:placeholder-gray-400"
                required=""
              />
            </div>
            <div>
              <label
                for="Bookingdate"
                class="text-black-900 dark:text-black-300 mb-2 block text-sm font-medium"
              >
                Booking Date
              </label>
              <input
                type="date"
                name="Bookingdate"
                id="Bookingdate"
                class="bg-white-50 dark:bg-white-600 dark:border-black-500 block  w-full border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:text-black dark:placeholder-gray-400"
                required=""
              />
            </div>
            <div class="flex items-end">
              <button
                type="submit"
                class="w-100 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
