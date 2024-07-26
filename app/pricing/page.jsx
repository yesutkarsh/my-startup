import React from 'react'
export default function page() {
  return (
    <>
    


    <div class="relative overflow-x-auto my-20">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Item
                </th>
                <th scope="col" class="px-6 py-3">
                    Specs
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Normal Print
                </th>
                <td class="px-6 py-4">
                     A3 A4 A4 A6
                </td>
                <td class="px-6 py-4">
                    Paper Print
                </td>
                <td class="px-6 py-4">
                    ₹2 to ₹30
                </td>
            </tr>
            
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Hand Written Notes to Book
                </th>
                <td class="px-6 py-4">
                     A3 A4 A4 A6
                </td>
                <td class="px-6 py-4">
                    PDF NOTES TO BOOK
                </td>
                <td class="px-6 py-4">
                    ₹2 to ₹30 (+ Binding cost )
                </td>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    School Project File
                </th>
                <td class="px-6 py-4">
                     Print Only
                </td>
                <td class="px-6 py-4">
                    School File
                </td>
                <td class="px-6 py-4">
                    ₹7 to ₹30 (+ Binding cost )
                </td>
            </tr>
             
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    School Project File
                </th>
                <td class="px-6 py-4">
                     Design and Print
                </td>
                <td class="px-6 py-4">
                    School File
                </td>
                <td class="px-6 py-4">
                    ₹15 to ₹30 (+ Binding cost )
                </td>
            </tr>
        </tbody>
    </table>
</div>

<p>Above are Presets. Price may differ if you choose to custom printing options. </p>
    
    </>
  )
}
