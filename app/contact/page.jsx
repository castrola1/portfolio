import React from 'react'

const page = () => {
    return (
        <div className="">
            <h1 className="mb-10 text-4xl font-bold text-left text-gray-800">Contact Information</h1>

            <div className="space-y-4 w-full flex flex-col items-center">
                <div className='w-[80vw]'>

                    <div>
                        <label htmlFor="name" className="block text-lg font-semibold mb-2">Enter Your Full Name</label>
                        <input type="text" id="name" className="w-full p-3 border rounded-lg" placeholder="Example: John Doe" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-semibold mb-2">Please Enter Your Email Address</label>
                        <input type="email" id="email" className="w-full p-3 border rounded-lg" placeholder="name@example.com" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-lg font-semibold mb-2">Please Enter Your Phone Number</label>
                        <input type="tel" id="phone" className="w-full p-3 border rounded-lg" placeholder="Example: 551-389-5890" />
                    </div>
                    <div>
                        <label htmlFor="comments" className="block text-lg font-semibold mb-2">Please Type Any Comment or Question You Have</label>
                        <textarea id="comments" className="w-full p-3 border rounded-lg" rows="3"></textarea>
                    </div>
                    <div>
                        <label htmlFor="contact-method" className="block text-lg font-semibold mb-2">Would You Like to Be Contacted By:</label>
                        <select id="contact-method" className="w-full p-3 border rounded-lg">
                            <option>Choose an Option</option>
                            <option value="phone">Phone</option>
                            <option value="email">Email</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mt-6">
                        <button type="button" className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page