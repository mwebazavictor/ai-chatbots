import React, { useState } from 'react';
import PopupModal from './PopupModal';
import FilePreviewModal from './FilePreview';

const UploadComponent: React.FC = () => {
  const [isFileSelectOpen, setIsFileSelectOpen] = useState<boolean>(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const openFileSelectModal = () => {
    setIsFileSelectOpen(true);
  };

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setIsPreviewOpen(true);
  };

  const handlePreviewClose = () => {
    setIsPreviewOpen(false);
    setSelectedFile(null);
  };

  const handleConfirmPreview = (pdfFile: File) => {
    setUploadedFiles(prev => [...prev, pdfFile]);
    setIsPreviewOpen(false);
    setSelectedFile(null);
  };


  return (
    <div className="max-h min-w-full bg-gray-50 p-6 dark:bg-gray-900">
      <div className="mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <button
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-200 hover:bg-indigo-700 hover:shadow-xl focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:transform active:scale-95"
            onClick={openFileSelectModal}
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Upload Documents
          </button>
        </div>

        {uploadedFiles.length > 0 && (
          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Uploaded Files
            </h3>
            <ul className="space-y-2">
              {uploadedFiles.map((file, index) => (
                <li 
                  key={index}
                  className="flex items-center rounded-lg bg-gray-50 p-3 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                >
                  <svg className="mr-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <PopupModal
          isOpen={isFileSelectOpen}
          onClose={() => setIsFileSelectOpen(false)}
          onFileSelect={handleFileSelect}
        />

        <FilePreviewModal
          isOpen={isPreviewOpen}
          file={selectedFile}
          onClose={handlePreviewClose}
          onConfirm={handleConfirmPreview}
        />
      </div>
    </div>
      );
};

export default UploadComponent;
