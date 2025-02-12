import React, { ChangeEvent, useState } from 'react';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFileSelect: (file: File) => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, onClose, onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handlePreview = () => {
    if (selectedFile) {
      onFileSelect(selectedFile);
      onClose(); // Close the file selection modal
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>

        <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
          <div className="sm:flex sm:items-start">
            <div className="w-full">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Upload Document
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Select a file to upload. Supported formats: PDF, DOCX, XLSX
                </p>
              </div>
              <div className="mt-4">
                <label className="block">
                  <span className="sr-only">Choose file</span>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="block w-full rounded-lg border border-gray-200 text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-indigo-700 hover:file:bg-indigo-100"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              onClick={handlePreview}
              disabled={!selectedFile}
              className="inline-flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Preview Document
            </button>
            <button
              onClick={onClose}
              className="mt-3 inline-flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
