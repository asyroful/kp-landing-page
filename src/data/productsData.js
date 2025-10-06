// src/data/productsData.js
// Data produk untuk kategori dan sub-produk

export const productCategories = [
  {
    key: 'pipefittings',
    name: 'Pipe Fittings',
    products: [
  { id: 'pf-3', name: 'Cap', description: 'Cap digunakan untuk menutup ujung pipa agar aliran fluida dapat dihentikan dengan aman. Material berkualitas memastikan daya tahan dan ketahanan terhadap tekanan tinggi.\n\nProduk ini cocok untuk berbagai aplikasi industri, mulai dari sistem air bersih hingga instalasi pabrik. Desain presisi memudahkan pemasangan dan perawatan.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
  { id: 'pf-1', name: 'Elbow 90°', description: 'Elbow 90° berfungsi untuk mengubah arah aliran pipa sebesar 90 derajat tanpa mengurangi kekuatan sambungan. Cocok untuk sistem perpipaan yang membutuhkan perubahan arah tajam.\n\nDibuat dari bahan tahan korosi, produk ini memberikan umur pakai yang panjang dan pemasangan yang mudah di berbagai lingkungan industri.', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
  { id: 'pf-4', name: 'Reducer', description: 'Reducer digunakan untuk menghubungkan dua pipa dengan diameter berbeda, menjaga kelancaran aliran fluida. Desainnya memastikan transisi yang mulus dan minim turbulensi.\n\nIdeal untuk sistem distribusi air, minyak, atau gas, produk ini menawarkan fleksibilitas dalam instalasi dan efisiensi operasional.', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
  { id: 'pf-2', name: 'Tee', description: 'Tee memungkinkan percabangan aliran dari satu pipa utama ke dua arah berbeda. Sangat berguna untuk sistem distribusi yang kompleks dan bercabang.\n\nDengan konstruksi kokoh, Tee ini dapat digunakan pada tekanan tinggi dan berbagai jenis cairan atau gas.', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { id: 'pf-5', name: 'Union', description: 'Union memudahkan penyambungan dan pelepasan pipa tanpa perlu memutar seluruh instalasi. Sangat ideal untuk perawatan rutin dan penggantian komponen.\n\nDilengkapi dengan ulir presisi, Union ini memastikan sambungan yang rapat dan tahan bocor di berbagai aplikasi industri.', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80' },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    key: 'drainage',
    name: 'Drainage',
    products: [
  { id: 'dr-2', name: 'Catch Basin', description: 'Catch basin berfungsi sebagai penampungan air sementara sebelum dialirkan ke saluran utama. Desainnya mencegah masuknya kotoran besar ke sistem drainase.\n\nProduk ini sangat penting untuk mencegah banjir dan menjaga kebersihan saluran air di area perkotaan maupun industri.', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80' },
  { id: 'dr-1', name: 'Grating', description: 'Grating digunakan untuk menutup saluran air agar tetap aman dan bebas dari sampah besar. Material besi cor memberikan kekuatan ekstra dan ketahanan terhadap beban berat.\n\nCocok untuk area parkir, jalan raya, dan kawasan industri yang membutuhkan sistem drainase handal.', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
  { id: 'dr-3', name: 'Manhole Cover', description: 'Manhole cover besi cor melindungi akses ke saluran bawah tanah dan memastikan keamanan pejalan kaki serta kendaraan. Permukaan anti-slip menambah faktor keselamatan.\n\nProduk ini tahan lama dan mudah dipasang, cocok untuk berbagai aplikasi infrastruktur perkotaan.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    key: 'construction',
    name: 'Construction',
    products: [
  { id: 'co-2', name: 'Base Plate', description: 'Base plate adalah pelat baja yang digunakan sebagai alas struktur bangunan, memberikan distribusi beban yang merata ke pondasi. Kualitas material sangat menentukan kekuatan struktur secara keseluruhan.\n\nProduk ini mudah dipasang dan tersedia dalam berbagai ukuran sesuai kebutuhan proyek konstruksi.', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
  { id: 'co-1', name: 'Anchor Bolt', description: 'Anchor bolt digunakan untuk mengikat struktur baja ke pondasi beton, memberikan kestabilan dan kekuatan ekstra. Cocok untuk berbagai aplikasi konstruksi berat.\n\nDesain ulir presisi memastikan pemasangan yang kuat dan tahan lama di lingkungan ekstrem.', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { id: 'co-3', name: 'Stud Bolt', description: 'Stud bolt adalah baut berulir penuh yang digunakan untuk sambungan struktur baja atau mesin. Memudahkan perakitan dan pembongkaran komponen.\n\nProduk ini tersedia dalam berbagai ukuran dan material, cocok untuk kebutuhan industri maupun konstruksi.', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80' },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    key: 'automotive',
    name: 'Automotive',
    products: [
  { id: 'au-2', name: 'Axle Shaft', description: 'Axle shaft adalah poros penggerak utama pada sistem transmisi kendaraan, mentransfer tenaga dari mesin ke roda. Material berkualitas tinggi menjamin daya tahan dan performa optimal.\n\nProduk ini cocok untuk berbagai jenis kendaraan, baik mobil penumpang maupun alat berat.', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80' },
  { id: 'au-1', name: 'Bracket', description: 'Bracket otomotif berfungsi sebagai penyangga atau pengikat komponen kendaraan, seperti mesin atau sistem suspensi. Desain presisi memastikan kestabilan dan keamanan.\n\nBracket ini mudah dipasang dan kompatibel dengan berbagai model kendaraan.', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
  { id: 'au-3', name: 'Engine Mount', description: 'Engine mount berfungsi meredam getaran mesin agar tidak diteruskan ke rangka kendaraan. Material elastomer berkualitas memberikan kenyamanan berkendara.\n\nProduk ini tahan panas dan cocok untuk berbagai tipe mesin otomotif.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    key: 'heavyequip',
    name: 'Heavy Equipment',
    products: [
  { id: 'he-2', name: 'Bucket Teeth', description: 'Bucket teeth adalah ujung gigi pada bucket excavator yang berfungsi untuk menggali dan memecah material keras. Material baja khusus memberikan ketahanan aus yang tinggi.\n\nProduk ini mudah diganti dan meningkatkan efisiensi kerja alat berat.', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
  { id: 'he-1', name: 'Bucket', description: 'Bucket merupakan wadah utama pada alat berat seperti excavator atau loader untuk mengangkut material. Desain ergonomis memudahkan proses penggalian dan pemindahan.\n\nTersedia dalam berbagai kapasitas sesuai kebutuhan proyek konstruksi atau pertambangan.', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { id: 'he-3', name: 'Track Roller', description: 'Track roller adalah komponen penting pada sistem undercarriage alat berat, berfungsi menopang dan mengarahkan track. Material berkualitas menjamin umur pakai yang panjang.\n\nProduk ini cocok untuk berbagai jenis alat berat dan mudah dalam perawatan.', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80' },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    key: 'mining',
    name: 'Mining',
    products: [
  { id: 'mi-2', name: 'Crusher Plate', description: 'Crusher plate adalah pelat baja yang digunakan pada mesin penghancur batu di industri pertambangan. Ketahanan terhadap benturan dan aus sangat diutamakan.\n\nProduk ini membantu meningkatkan efisiensi proses penghancuran material tambang.', image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80' },
  { id: 'mi-1', name: 'Screen', description: 'Screen digunakan untuk memisahkan material berdasarkan ukuran di industri pertambangan. Desain mesh yang presisi memastikan hasil sortir yang optimal.\n\nMaterial tahan aus membuat produk ini cocok untuk penggunaan jangka panjang di lingkungan berat.', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
  { id: 'mi-3', name: 'Vibrating Feeder', description: 'Vibrating feeder berfungsi mengalirkan material tambang secara teratur ke mesin pemroses berikutnya. Getaran yang dihasilkan memastikan distribusi material yang merata.\n\nCocok untuk berbagai aplikasi pertambangan dan pengolahan mineral.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    key: 'other',
    name: 'Other',
    products: [
  { id: 'ot-2', name: 'Bespoke Casting', description: 'Bespoke casting adalah layanan pengecoran logam custom sesuai kebutuhan klien, mulai dari desain hingga finishing. Proses presisi menghasilkan produk berkualitas tinggi.\n\nLayanan ini cocok untuk industri otomotif, konstruksi, maupun manufaktur yang membutuhkan komponen unik.', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
  { id: 'ot-1', name: 'Custom Part', description: 'Custom part adalah solusi untuk kebutuhan komponen yang tidak tersedia di pasaran. Dapat dibuat dari berbagai material sesuai spesifikasi teknis.\n\nLayanan ini memberikan fleksibilitas penuh bagi klien dalam pengembangan produk atau perbaikan mesin.', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { id: 'ot-3', name: 'Prototype', description: 'Prototype adalah tahap awal pengembangan produk untuk menguji desain dan fungsi sebelum produksi massal. Proses pembuatan cepat dan akurat.\n\nLayanan ini sangat membantu perusahaan dalam inovasi dan percepatan time-to-market.', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80' },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
];
