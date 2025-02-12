import React, { useEffect, useState } from 'react';

interface FilePreviewModalProps {
  isOpen: boolean;
  file: File | null;
  onClose: () => void;
  onConfirm: (pdfFile: File) => void;
}

const FilePreviewModal: React.FC<FilePreviewModalProps> = ({ isOpen, file, onClose, onConfirm }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [convertedFile, setConvertedFile] = useState<File | null>(null);

  /**
   * Simulated conversion function.
   * If the file is already a PDF, return it immediately.
   * Otherwise, simulate a conversion delay and return a new File object
   * with a PDF mime type.
   */
  const convertFileToPDF = async (file: File): Promise<File> => {
    if (file.type === 'application/pdf') {
      return file;
    }
    return new Promise((resolve) => {
      // Simulate a conversion delay (e.g., 2 seconds)
      setTimeout(() => {
        // In a real scenario, perform actual conversion here.
        const pdfBlob = new Blob([file], { type: 'application/pdf' });
        const pdfFile = new File(
          [pdfBlob],
          file.name.replace(/\.[^/.]+$/, "") + ".pdf",
          { type: 'application/pdf' }
        );
        resolve(pdfFile);
      }, 2000);
    });
  };

  useEffect(() => {
    if (isOpen && file) {
      setLoading(true);
      convertFileToPDF(file).then((pdfFile) => {
        setConvertedFile(pdfFile);
        const url = URL.createObjectURL(pdfFile);
        setPreviewUrl(url);
        setLoading(false);
      });
    }

    // Cleanup: revoke URL and reset state when the modal closes or file changes.
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
      }
      setConvertedFile(null);
    };
  }, [isOpen, file]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>

        <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6 sm:align-middle">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              onClick={onClose}
              className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="w-full">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Preview Document
              </h3>
              <div className="mt-4">
                {loading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
                    <span className="ml-3 text-gray-600">Converting file...</span>
                  </div>
                ) : previewUrl ? (
                  <div className="h-[600px] w-full rounded-lg border border-gray-200">
                    <embed
                      src={previewUrl}
                      type="application/pdf"
                      width="100%"
                      height="100%"
                      className="rounded-lg"
                    />
                  </div>
                ) : (
                  <p className="text-gray-500">No file selected.</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              onClick={() => convertedFile && onConfirm(convertedFile)}
              disabled={!convertedFile || loading}
              className="inline-flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Confirm Upload
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

export default FilePreviewModal;
