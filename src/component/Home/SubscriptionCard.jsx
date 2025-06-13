import cuponImg from '../../assets/smiling-female-receptionist-hand-presenting-something-side-view-isolate-on-transparency-background-png.webp'
const SubscriptionCard = () => {
    return (
        <div className="bg-[#E7F8F7] rounded-lg p-4 md:p-8 flex items-center justify-between my-12 container mx-auto max-w-9xl ">
            {/* Left Section */}
            <div className='md:w-3/5'>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Get The Latest & Best Coupon/Offer Alerts
                </h3>
                <p className="text-gray-600">
                    55,00,000+ Subscriptions Across India & Counting! Subscribe to have new
                    coupon lists delivered directly to your inbox.
                </p>
                {/* Subscription Form */}
                <div className="mt-4 flex">
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        className="p-3 border border-gray-300 bg-white rounded-l-md flex-1"
                    />
                    <button
                        className="bg-[#19BC9B] text-white font-semibold px-6 rounded-r-md hover:bg-[#17A889] transition"
                    >
                        SUBSCRIBE
                    </button>
                </div>
            </div>
            {/* Right Section */}
            <div className="hidden sm:block">
                <img
                    src={cuponImg}
                    alt="Best Coupons Illustration"
                />
            </div>
        </div>
    );
};

export default SubscriptionCard;