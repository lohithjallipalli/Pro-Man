import React from 'react';

const Notifications = () => {
  const notifications = [
    { id: 1, message: "New project added!" },
    { id: 2, message: "Your project has been updated." },
    { id: 3, message: "You have a new message." },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 max-w-sm">
      <h2 className="text-lg font-semibold mb-2">Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id} className="border-b border-gray-200 py-2">
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
