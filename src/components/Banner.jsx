const Banner = () => (
  <div className="h-[400px] bg-cover bg-center relative flex items-center justify-center text-white" style={{ backgroundImage: "url('/assets/banner.jpg')" }}>
    <div className="bg-black bg-opacity-60 p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Empowering Disabled Artists, Celebrating Art!</h2>
      <div className="space-x-4">
        <button className="bg-white text-black px-4 py-2 rounded">Join Us</button>
        <button className="bg-white text-black px-4 py-2 rounded">Donate</button>
        <button className="bg-white text-black px-4 py-2 rounded">Explore Artists</button>
      </div>
    </div>
  </div>
);

export default Banner;
