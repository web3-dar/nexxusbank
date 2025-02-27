import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../assets/person_1.jpg';
import BottomNav from './stickyNav';

const SettingsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      sessionStorage.clear(); // Clear session storage
      setIsLoading(false);
      navigate('/');
    }, 2000);
  };
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-orange-500 border-dotted rounded-full animate-spin"></div>
        <p className="mt-4 text-xl font-semibold text-black">Processing...</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6 px-4 md:px-8">
        <div className="bg-white shadow-xl rounded-xl w-full max-w-2xl lg:max-w-4xl overflow-hidden">
          {/* Header */}
          <header className="bg-orange-500 text-white text-center py-6 md:py-8">
            <h1 className="text-2xl md:text-3xl font-semibold">Account Settings</h1>
          </header>

          {/* Profile Section */}
          <div className="flex justify-center relative -mt-12">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-2 bg-orange-500 p-3 rounded-full text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 19.121A1.5 1.5 0 006.243 21h11.514a1.5 1.5 0 001.122-2.56l-5.757-5.757a1.5 1.5 0 00-2.12 0l-5.757 5.757z"
                />
              </svg>
            </button>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 space-y-8">
            {/* Profile Settings */}
            <div>
              <h2 className="text-sm font-bold text-gray-700 mb-4">Profile Settings</h2>
              <ul className="space-y-4">
                {[
                  { name: 'David Marin', sub: 'Profile Settings', action: 'Edit' },
                  { name: 'Account Limits', sub: 'View account limits', action: 'View' },
                  { name: 'Statements & Reports', sub: 'Download monthly statements.' },
                  { name: 'Referrals', sub: 'Earn money when your friends join.' },
                  { name: '24/7 Help Center', sub: 'Have an issue? Speak to our team.' },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.sub}</p>
                      </div>
                    </div>
                    {item.action && (
                      <button className="text-orange-500 text-sm font-semibold">{item.action}</button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Password & Security */}
            <div>
              <h2 className="text-sm font-bold text-gray-700 mb-4">Password & Security</h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                  <span className="text-sm font-medium text-gray-800">Update Password</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li
                  onClick={handleLogout}
                  className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <span className="text-sm font-medium text-gray-800">Log out</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <footer className="text-center text-gray-500 text-xs py-4 bg-gray-50">
            Version 9.8.0
          </footer>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default SettingsPage;
