import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const BookingGuidePage = () => {
  return (
    <div>
      <Header activeHeading={7} />
      <BookingGuide />
      <Footer />
    </div>
  );
};

const BookingGuide = () => {
  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Book a Barber</h2>

      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
            1
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Sign Up or Log In</h3>
            <p className="text-base text-gray-500 mt-2">
              First, sign up or log in to your account to book a barber. If you are a new user, create an account with your email and a password.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
            2
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Browse Available Barbers</h3>
            <p className="text-base text-gray-500 mt-2">
              Once you're logged in, browse through our list of barbers available in your area. You can filter by specialties, ratings, and location.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
            3
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Select a Barber and Service</h3>
            <p className="text-base text-gray-500 mt-2">
              Choose a barber that suits your needs, and select the service you'd like to book. The services will be listed along with their prices and estimated time.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
            4
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Pick a Time Slot</h3>
            <p className="text-base text-gray-500 mt-2">
              After selecting your service, pick a time slot that works best for you. Barbers will have a calendar with available times for booking.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
            5
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Confirm and Pay</h3>
            <p className="text-base text-gray-500 mt-2">
              After selecting a time, confirm your booking and proceed with payment. We offer multiple payment methods including credit card, PayPal, and cash on delivery.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
            6
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Receive Confirmation</h3>
            <p className="text-base text-gray-500 mt-2">
              Once your payment is processed, you will receive a confirmation email with your appointment details. You’ll also get a reminder before your scheduled appointment.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center">
            7
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Enjoy Your Service</h3>
            <p className="text-base text-gray-500 mt-2">
              Finally, show up for your appointment at the barber's location. Enjoy your haircut or grooming service, and don’t forget to leave feedback!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-base text-gray-500">
          If you have any questions or need help with the booking process, feel free to contact us. We're here to assist you!
        </p>
      </div>
    </div>
  );
};

export default BookingGuidePage;
