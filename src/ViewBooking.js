import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ViewBooking() {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.bookBuffet);

  return (
    <div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-4 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <thead class="border-b bg-blue-900">
                  <tr>
                    
                    <th
                      scope="col"
                      class="px-6 py-4 text-sm font-medium text-white"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-4 text-sm font-medium text-white"
                    >
                      No Of Plates
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-4 text-sm font-medium text-white"
                    >
                      Meal
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-4 text-sm font-medium text-white"
                    >
                      Booking Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {booking.bookings.map((b) => {
                    return (
                      <tr class="border-b bg-white">
                        <td class="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          {b.email}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          {b.platecount}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          {b.meal}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          {b.bookingDate}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
