import React from 'react';

export default function BookBuffet() {
  return (
    <div>
      <div class="max-w-2xl mx-auto">
        <div class="bg-white   max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-white-800 ">
          <form class="space-y-6" action="#">
            <div>
              <label
                for="platecount"
                class="text-sm font-medium text-black-900 block mb-2 dark:text-black-300"
              >
                Buffet Name
              </label>
              <select
                name="platecount"
                id="platecount"
                placeholder="Number of Plates"
                class="bg-white-50 border border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-black-500 dark:placeholder-gray-400 dark:text-gray-black"
                required=""
              >
                <option
                  class="bg-gray-50 border border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-black-500 dark:placeholder-gray-400 dark:text-gray"
                  value="volvo"
                >
                  Volvo
                </option>
                <option
                  class="bg-gray-50 border border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-black-500 dark:placeholder-gray-400 dark:text-gray"
                  value="saab"
                >
                  Saab
                </option>
                <option
                  class="bg-gray-50 border border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-black-500 dark:placeholder-gray-400 dark:text-gray"
                  value="fiat"
                >
                  Fiat
                </option>
                <option
                  class="bg-gray-50 border border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-black-500 dark:placeholder-gray-400 dark:text-gray"
                  value="audi"
                >
                  Audi
                </option>
              </select>
            </div>
            <div>
              <label
                for="email"
                class="text-sm font-medium text-black-900 block mb-2 dark:text-black-900"
              >
                Email Id
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-white-50 border border-black-900 text-black-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-900 dark:border-black-900 dark:placeholder-gray-400 dark:text-black"
                placeholder="Enter your Email "
                required=""
              />
            </div>
            <div>
              <label
                for="platecount"
                class="text-sm font-medium text-black-900 block mb-2 dark:text-black-300"
              >
                Plate Count
              </label>
              <input
                type="number"
                name="platecount"
                id="platecount"
                placeholder="Number of Plates"
                class="bg-white-50 border border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-black-500 dark:placeholder-gray-400 dark:text-black"
                required=""
              />
            </div>
            <div>
              <label
                for="Bookingdate"
                class="text-sm font-medium text-black-900 block mb-2 dark:text-black-300"
              >
                Booking Date
              </label>
              <input
                type="date"
                name="Bookingdate"
                id="Bookingdate"
                class="bg-white-50 border border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-600 dark:border-black-500 dark:placeholder-gray-400 dark:text-black"
                required=""
              />
            </div>
            <div class="flex items-end">
              <button
                type="submit"
                class="w-100 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
