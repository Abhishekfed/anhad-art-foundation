const Contact = () => (
<section className="bg-indigo-300 py-10 px-4">
  <div className="max-w-4xl mx-auto text-center space-y-6">
    <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>

    <div className="text-gray-700 space-y-2">
      <p>
        <span className="font-medium">Email:</span>{' '}
        <a href="mailto:contact@anhadartsfoundation.org" className="text-blue-600 hover:underline">
          contact@anhadartsfoundation.org
        </a>
      </p>
      <p>
        <span className="font-medium">Phone:</span>{' '}
        <a href="tel:+91XXXXXXXXXX" className="text-blue-600 hover:underline">
          +91-XXXXXXXXXX
        </a>
      </p>
    </div>

    <div className="flex justify-center gap-6 text-gray-600 text-xl">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
        Facebook
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
        Instagram
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
        LinkedIn
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
        YouTube
      </a>
    </div>
  </div>
</section>

);

export default Contact;
