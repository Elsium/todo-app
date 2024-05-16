import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className="px-4 py-8 md:px-16 lg:px-32 font-poppins">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="mb-4">Welcome to <span className="text-[#fed439]">TaskZen</span>, our note-taking app! We value your data protection and strive to be transparent about the data we collect and how we use it.</p>
            <h2 className="text-xl md:text-3xl font-bold mb-2">Information Collection and Use</h2>
            <p className="mb-4">While using TaskZen, we do not collect any personal information about you, such as your email, name, or avatar. We use <a href="#" className="text-blue-300">Google Drive API</a> for user authentication and for working with the app&apos;s files. This includes creating one folder and four JSON files on your Google Drive to store TaskZen&apos;s notes. We only use Google Drive API permissions necessary for TaskZen&apos;s operation (auth/drive.file), meaning TaskZen can only work with files it has created itself.</p>
            <h2 className="text-xl md:text-3xl font-bold mb-2">Security</h2>
            <p className="mb-4">We take measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, as with any technology, complete security cannot be guaranteed.</p>
            <h2 className="text-xl md:text-3xl font-bold mb-2">Privacy Policy Changes</h2>
            <p className="mb-4">We may update TaskZen&apos;s Privacy Policy from time to time. We encourage you to review this page periodically for any changes.</p>
            <h2 className="text-xl md:text-3xl font-bold mb-2">Contact Information</h2>
            <p>If you have any questions about TaskZen&apos;s Privacy Policy, please <a href="mailto:contact@example.com" className="text-blue-300">contact us</a>.</p>
        </div>
    )
}

export default PrivacyPolicy