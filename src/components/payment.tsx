import {
  FaMoneyBillWave,
  FaMobileAlt,
  FaFileInvoice,
  FaCarAlt,
  FaUmbrella,
  FaExclamationCircle,
  FaHeart,
} from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";

import BottomNav from "../pages/stickyNav";

const payments = [
  { id: 1, name: "Money transfer", icon: <div className="text-xl text-green-600"><FaMoneyBillWave /></div> },
  { id: 2, name: "Mobile payment", icon: <div className="text-xl text-blue-600"><FaMobileAlt /></div> },
  { id: 3, name: "IBAN payment", icon: <div className="text-xl text-purple-600"><RiBankFill /></div> },
  { id: 4, name: "Utility bills", icon: <div className="text-xl text-orange-600"><FaFileInvoice /></div> },
  { id: 5, name: "Transport", icon: <div className="text-xl text-gray-600"><FaCarAlt /></div> },
  { id: 6, name: "Insurance", icon: <div className="text-xl text-indigo-600"><FaUmbrella /></div> },
  { id: 7, name: "Penalties", icon: <div className="text-xl text-red-600"><FaExclamationCircle /></div> },
  { id: 8, name: "Charity", icon: <div className="text-xl text-pink-600"><FaHeart /></div> },
];

const PaymentPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-6">
        {/* Header */}
        <header className="w-full flex items-center justify-between py-4 border-b lg:max-w-3xl">
          <button className="text-xl">←</button>
          <h1 className="text-lg font-semibold">Payments</h1>
          <div className="w-8"></div> {/* Empty spacer */}
        </header>

        {/* Payments List */}
        <div className="w-full max-w-lg lg:max-w-3xl mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {payments.map((payment) => (
            <div
              key={payment.id}
              className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full">
                  {payment.icon}
                </div>
                <span className="text-sm font-medium">{payment.name}</span>
              </div>
              <button className="text-blue-500">
                <div className="text-lg"><AiOutlineInfoCircle /></div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </>
  );
};

export default PaymentPage;
