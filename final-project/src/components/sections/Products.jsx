import React from "react";

export default function Products() {
  const products = [
    { name: "Laptop Stand", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR8u4auiK9Tt50fhnDoGeA-B4I0IIQ9QFILy5ZJrkGKYFERiI3pCAWJcCZq0eu2pMzhm1tqm0ee968myPDS4cYvMiwP5Iwo_3JK64S1DRX5Npz2BfvAMXhAriZ1r88sga2dsYPHLA&usqp=CAc" },
    { name: "Wireless Keyboard", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQK5d2CPcHURmH0pK7IQuT6HBlDuZxDHHoGY4Bcfe9ggTVrKD73ta_b06WtxU1wmwDVv2HgJumtotnueWUIxbSWbldP7aGRIDATiMTj6IFiX5j3aDQnv83d1BqKYbt9YaVtZOEkvH4&usqp=CAc" },
    { name: "Wireless Mouse", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRHJnPZ7Co3vYtJd81huzY_hdmwp-tg3U0z_j2PkV1wFa0bridUS67yq3mg2WXTgckyA0knQPTdBSIOZ91gle_KCatwTsLGaOxYgAma9QRxAYdQt101H1Kt0jcLSbR_LnKorACqwQ&usqp=CAc" },
    { name: "Laptop Sleeve", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQgOIppL3qb2611O4rXpAoHai6a52eyXs54DcSNKBiWgchgTGRkRrb_boeu1wQX4PbiTojMcTc_R5aQF0EhuY2EWrSvduApaKqSRzooGhucejLcoJ_fjmuK-8rt5ZgZBQ1WCA&usqp=CAc" },
    { name: "USB-C Hub", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQx_W6AHiokN7HgkoA3Yd3KHM5upJczeEHGQYGBflCSsKSJsdWBKXqkweCI8xCcSSa7O-iv92RunVANEnXO2-48YEBC01cQJkerpOuFuMluBgJzDLK-UaSL&usqp=CAc" },
    { name: "LED Desk Lamp", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSUTwJd2KbyGIHqSpXYQC3soJPvd-uDxjPw&s" },
  ];

  return (
    <section id="products" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h3 className="text-3xl font-semibold mb-6 text-blue-600">
          Our Products
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg">{p.name}</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Premium laptop accessory. from Ramm tech 
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
