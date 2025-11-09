import React from "react";

export default function App() {
  return (
    <div className="font-sans scroll-smooth bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-3 md:mb-0">
            RAMM TECH
          </h1>
          <nav className="flex space-x-6 text-gray-600 font-medium">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#products" className="hover:text-blue-600">Products</a>
            <a href="#newsletter" className="hover:text-blue-600">Newsletter</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Elevate Your Laptop Experience
          </h2>
          <p className="text-gray-600 mb-6">
            Premium accessories designed for comfort, performance, and style.
            From desks to backpacks — Ramm Technologies has you covered.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>
        <div className="mt-10">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80"
            alt="Laptop workspace"
            className="mx-auto rounded-2xl shadow-lg w-full max-w-3xl"
          />
        </div>
      </section>

      {/* About Section (right-aligned text, left image) */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
          {/* Image on Left */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYs6umncWAt_JRltabQRlap1h5jMO39jp4UmHkfqcd3ecLFKnMBVtDDmJg6GHj2Zc2de2qoqgXifV9Ip_HodD-x1iZ_P90p7iK3oS0dW391MXffD5KDw_0zBsaHdCTxjduDAM-mHo&usqp=CAc"
              alt="About RAMM TECH"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Text on Right */}
          <div className="md:w-1/2 md:pl-12 text-right">
            <h3 className="text-3xl font-semibold mb-4 text-blue-600">
              We Power Your Laptop Lifestyle
            </h3>
            <p className="text-gray-600 mb-8">
              Our premium quality laptop accessories enhance workflow comfort,
              speed, and productivity. Every product is crafted for modern
              professionals and creators.
            </p>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-xl shadow text-right">
                <h4 className="font-bold mb-2 text-blue-600">Fast Delivery</h4>
                <p className="text-gray-600">
                  Get your accessories quickly with our 24hr delivery system.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl shadow text-right">
                <h4 className="font-bold mb-2 text-blue-600">Smart Designs</h4>
                <p className="text-gray-600">
                  Ergonomically built for performance, portability, and comfort.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl shadow text-right">
                <h4 className="font-bold mb-2 text-blue-600">Professional Quality</h4>
                <p className="text-gray-600">
                  Built with precision tools used by professional studios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h3 className="text-3xl font-semibold mb-6 text-blue-600">
            Our Products
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Laptop Stand", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8u4auiK9Tt50fhnDoGeA-B4I0IIQ9QFILy5ZJrkGKYFERiI3pCAWJcCZq0eu2pMzhm1tqm0ee968myPDS4cYvMiwP5Iwo_3JK64S1DRX5Npz2BfvAMXhAriZ1r88sga2dsYPHLA&usqp=CAc" },
              { name: "Wireless Keyboard", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQK5d2CPcHURmH0pK7IQuT6HBlDuZxDHHoGY4Bcfe9ggTVrKD73ta_b06WtxU1wmwDVv2HgJumtotnueWUIxbSWbldP7aGRIDATiMTj6IFiX5j3aDQnv83d1BqKYbt9YaVtZOEkvH4&usqp=CAc" },
              { name: "Wireless Mouse", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRHJnPZ7Co3vYtJd81huzY_hdmwp-tg3U0z_j2PkV1wFa0bridUS67yq3mg2WXTgckyA0knQPTdBSIOZ91gle_KCatwTsLGaOxYgAma9QRxAYdQt101H1Kt0jcLSbR_LnKorACqwQ&usqp=CAc" },
              { name: "Laptop Sleeve", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQgOIppL3qb2611O4rXpAoHai6a52eyXs54DcSNKBiWgchgTGRkRrb_boeu1wQX4PbiTojMcTc_R5aQF0EhuY2EWrSvduApaKqSRzooGhucejLcoJ_fjmuK-8rt5ZgZBQ1WCA&usqp=CAc" },
              { name: "USB-C Hub", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQx_W6AHiokN7HgkoA3Yd3KHM5upJczeEHGQYGBflCSsKSJsdWBKXqkweCI8xCcSSa7O-iv92RunVANEnXO2-48YEBC01cQJkerpOuFuMluBgJzDLK-UaSL&usqp=CAc" },
              { name: "LED Desk Lamp", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSUTwJd2KbyGIHqSpXYQC3soJPvd-uDxjPw&s" },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-lg">{p.name}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Premium laptop accessory.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Review */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">
            What Our Customers Say
          </h2>
          <div className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md">
            <p className="text-gray-700 italic mb-4">
              “RAMM TECH’s laptop stand completely changed how I work — comfortable,
              stylish, and built to last!”
            </p>
            <h4 className="font-semibold text-blue-600">— Alex M., Designer</h4>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="bg-blue-600 text-white py-16 text-center">
        <h3 className="text-3xl font-semibold mb-4">Get 10% Off Your First Order</h3>
        <p className="mb-6 text-blue-100">
          Join our newsletter for exclusive deals, updates, and offers.
        </p>
        <form className="flex justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-2/3 rounded-lg text-gray-900 focus:outline-none"
          />
          <button className="bg-gray-300 text-gray-800 font-semibold px-4 py-3 rounded-lg hover:bg-gray-400 transition">
            Shop Now
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-white text-2xl font-semibold mb-4">RAMM TECH</h4>
          <p className="mb-6">Accessories that power your laptop life.</p>
          <p className="text-sm text-gray-500">
            © 2025 RAMM TECH. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
