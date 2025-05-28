import Banner from '../components/Banner';
//  import logo from '../assets/musicone.jpg';

const Home = () => (
  <>

    <section className="bg-gradient-to-br from-sky-100 to-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Welcome to <span className="text-blue-600">Anhad Arts Foundation</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          We empower <span className="font-semibold text-black">disabled artists</span> by creating opportunities, visibility,
          and equity through inclusive programs, events, and partnerships.
        </p>
        <a
          href="/programs"
          className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Explore Our Programs
        </a>
      </div>
    

    </section>


    <Banner />
  </>
);

export default Home;
