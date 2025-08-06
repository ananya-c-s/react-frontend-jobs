// components/DialogMessage.jsx
import React from 'react';

const DialogMessage = ({ onClose, onConfirm }) => {
  return (
<div className="fixed inset-0 bg-purple-600 !bg-opacity-60 text-black flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
        <p className="mb-6">This action cannot be undone.</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 !bg-gray-300 rounded !hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 !bg-red-500 text-white rounded !hover:bg-red-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogMessage;
