const products = [
  // --- CLASSIC (5 Sản phẩm) ---
  {
    id: 1,
    name: "Áo Sơ Mi Oxford",
    category: "Áo",
    style: "Classic",
    gender: "Nam",
    price: 350000,
    oldPrice: 450000,
    image:"anh/3.jpg",
    badge: "Hot",
    desc: "Áo sơ mi Oxford nam tính, form dáng chuẩn mực, mang lại vẻ ngoài thanh lịch vượt thời gian.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    name: "Quần Tây Âu Nữ",
    category: "Quần",
    style: "Classic",
    gender: "Nữ",
    price: 290000,
    oldPrice: 380000,
    image:"anh/5.webp",
    badge: "Hot",
    desc: "Quần tây ống đứng tôn dáng, thanh lịch, thích hợp môi trường công sở.",
    sizes: ["S", "M", "L"]
  },
  {
    id: 9,
    name: "Áo Vest Blazer",
    category: "Áo",
    style: "Classic",
    gender: "Unisex",
    price: 850000,
    oldPrice: 1200000,
    image :"anh/6.jpg",
    badge: "New",
    desc: "Áo khoác Blazer form rộng vừa phải, dễ phối đồ, nâng tầm phong cách sang trọng.",
    sizes: ["M", "L", "XL"]
  },
  {
    id: 10,
    name: "Giày Da Nam Cao Cấp",
    category: "Giày",
    style: "Classic",
    gender: "Nam",
    price: 1250000,
    oldPrice: 1500000,
    image:"anh/7.webp",
    badge: "Best",
    desc: "Giày da thật thiết kế theo kiểu dáng Oxford truyền thống, êm chân và bền bỉ.",
    sizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: 11,
    name: "Cà Vạt Lụa Trơn",
    category: "Phụ kiện",
    style: "Classic",
    gender: "Nam",
    price: 150000,
    oldPrice: 200000,
    image:"anh/8.webp",
    badge: "Sale",
    desc: "Cà vạt chất liệu lụa bóng nhẹ, màu sắc trung tính dễ kết hợp với nhiều loại sơ mi.",
    sizes: ["Free size"]
  },

  // --- CASUAL (5 Sản phẩm) ---
  {
    id: 2,
    name: "Quần Kaki Chino",
    category: "Quần",
    style: "Casual",
    gender: "Nam",
    price: 320000,
    oldPrice: 400000,
    image: "anh/9.webp",
    badge: "Sale",
    desc: "Quần Chino vải kaki mềm mại, dáng suông thoải mái phù hợp đi làm lẫn đi chơi.",
    sizes: ["29", "30", "31", "32"]
  },
  {
    id: 6,
    name: "Áo Hoodie Oversize",
    category: "Áo",
    style: "Casual",
    gender: "Unisex",
    price: 350000,
    oldPrice: 480000,
    image: "anh/10.jpg",
    badge: "Drop",
    desc: "Áo hoodie nỉ bông ấm áp, form rộng rãi thoải mái đậm chất đường phố.",
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 12,
    name: "Áo Polo Basic",
    category: "Áo",
    style: "Casual",
    gender: "Nam",
    price: 220000,
    oldPrice: 300000,
    image: "anh/11.webp",
    badge: "Hot",
    desc: "Áo thun có cổ chất vải cá sấu thoáng mát, phong cách trẻ trung năng động.",
    sizes: ["M", "L", "XL"]
  },
  {
    id: 13,
    name: "Quần Jeans Ống Suông",
    category: "Quần",
    style: "Casual",
    gender: "Unisex",
    price: 450000,
    oldPrice: 550000,
    image: "anh/12.jpg",
    badge: "Best",
    desc: "Quần jeans denim màu xanh nhạt retro, ống suông che khuyết điểm chân hoàn hảo.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 14,
    name: "Mũ Lưỡi Trai Logo",
    category: "Phụ kiện",
    style: "Casual",
    gender: "Unisex",
    price: 120000,
    oldPrice: 150000,
    image: "anh/13.webp",
    badge: "New",
    desc: "Mũ lưỡi trai cotton thêu logo đơn giản, điểm nhấn hoàn hảo cho ngày dạo phố.",
    sizes: ["Free size"]
  },

  // --- MINIMALISM (5 Sản phẩm) ---
  {
    id: 3,
    name: "Áo Thun Trơn Basic",
    category: "Áo",
    style: "Minimalism",
    gender: "Unisex",
    price: 150000,
    oldPrice: 200000,
    image:"anh/4.webp",
    badge: "Best",
    desc: "Áo thun 100% cotton trơn màu, thiết kế tối giản dễ dàng phối với mọi loại trang phục.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    name: "Túi Tote Canvas",
    category: "Phụ kiện",
    style: "Minimalism",
    gender: "Unisex",
    price: 120000,
    oldPrice: 180000,
    image: "anh/14.webp",
    badge: "Sale",
    desc: "Túi vải Canvas màu be trơn tối giản, bảo vệ môi trường, đựng được laptop 14 inch.",
    sizes: ["Free size"]
  },
  {
    id: 15,
    name: "Áo Len Cổ Lọ Trơn",
    category: "Áo",
    style: "Minimalism",
    gender: "Unisex",
    price: 320000,
    oldPrice: 450000,
    image: "anh/15.jpg",
    badge: "Hot",
    desc: "Áo len mỏng dáng ôm vừa vặn, màu sắc trung tính đen/trắng cực dễ phối đồ mùa đông.",
    sizes: ["S", "M", "L"]
  },
  {
    id: 16,
    name: "Quần Đũi Rộng Nữ",
    category: "Quần",
    style: "Minimalism",
    gender: "Nữ",
    price: 250000,
    oldPrice: 350000,
    image: "anh/16.jpg",
    badge: "New",
    desc: "Quần vải đũi (linen) cạp chun, ống rộng lơi bay bổng, thoáng mát cho mùa hè.",
    sizes: ["S", "M", "L"]
  },
  {
    id: 17,
    name: "Giày Slip-on Trắng",
    category: "Giày",
    style: "Minimalism",
    gender: "Unisex",
    price: 350000,
    oldPrice: 420000,
    image: "anh/17.jpg",
    badge: "Drop",
    desc: "Giày lười vải canvas trắng tinh khôi, thiết kế liền mạch không dây rườm rà.",
    sizes: ["36", "37", "38", "39", "40", "41"]
  },

  // --- SPORT (5 Sản phẩm) ---
  {
    id: 4,
    name: "Giày Sneaker Chunky",
    category: "Giày",
    style: "Sport",
    gender: "Unisex",
    price: 650000,
    oldPrice: 850000,
    image: "anh/18.jpg",
    badge: "New",
    desc: "Giày form chunky khỏe khoắn, đế đôn tôn dáng cực chất cho phong cách năng động.",
    sizes: ["39", "40", "41", "42", "43"]
  },
  {
    id: 8,
    name: "Áo Khoác Gió Phản Quang",
    category: "Áo",
    style: "Sport",
    gender: "Unisex",
    price: 420000,
    oldPrice: 550000,
    image: "anh/19.jpg",
    badge: "New",
    desc: "Áo khoác gió có chi tiết phản quang, thiết kế thể thao, chống thấm nước nhẹ.",
    sizes: ["M", "L", "XL"]
  },
  {
    id: 18,
    name: "Quần Short Chạy Bộ",
    category: "Quần",
    style: "Sport",
    gender: "Nam",
    price: 180000,
    oldPrice: 250000,
    image: "anh/20.jpg",
    badge: "Hot",
    desc: "Quần đùi thể thao cạp chun, vải dù siêu nhẹ và thoát mồ hôi cực nhanh.",
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 19,
    name: "Áo Bra Tập Gym",
    category: "Áo",
    style: "Sport",
    gender: "Nữ",
    price: 200000,
    oldPrice: 280000,
    image: "anh/21.webp",
    badge: "Best",
    desc: "Áo bra thể thao nâng đỡ vòng 1 tốt, độ co giãn cao, phù hợp tập yoga, gym.",
    sizes: ["S", "M", "L"]
  },
  {
    id: 20,
    name: "Túi Trống Thể Thao",
    category: "Phụ kiện",
    style: "Sport",
    gender: "Unisex",
    price: 250000,
    oldPrice: 350000,
    image: "anh/22.webp",
    badge: "Sale",
    desc: "Túi trống đựng đồ tập gym rộng rãi, có ngăn đựng giày riêng biệt chống mùi.",
    sizes: ["Free size"]
  }
];

let cart = JSON.parse(localStorage.getItem("sportzone_street_cart")) || [];
let selectedSize = "M";

function formatMoney(value) {
  return value.toLocaleString("vi-VN") + "đ";
}

function saveCart() {
  localStorage.setItem("sportzone_street_cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartCount").innerText = count;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function toggleMobileMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

function showPage(pageName) {
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  document.getElementById(pageName + "Page").classList.add("active");

  document.getElementById("navMenu").classList.remove("show");
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (pageName === "products") renderProducts();
  if (pageName === "cart") renderCart();
  if (pageName === "checkout") renderCheckout();
}

function productCard(product) {
  // Kiểm tra: nếu có product.image thì hiện thẻ img, không thì hiện icon cũ
  const mediaContent = product.image 
    ? `<img src="${product.image}" alt="${product.name}" class="product-img">`
    : `<span style="font-size: 80px;">${product.icon}</span>`;

  return `
    <article class="product-card">
      <div class="product-media">
        <span class="badge">${product.badge}</span>
        ${mediaContent}
      </div>
      <div class="product-body">
        <div class="product-meta">
          <span>${product.style}</span>
          <span>${product.gender}</span>
        </div>
        <h3>${product.name}</h3>
        <div class="rating">★★★★★ <span style="color:#6b7280">4.9</span></div>
        <div class="price-line">
          <strong>${formatMoney(product.price)}</strong>
          <span>${formatMoney(product.oldPrice)}</span>
        </div>
        <div class="card-actions">
          <button onclick="showProductDetail(${product.id})">Chi tiết</button>
          <button onclick="addToCart(${product.id})">Thêm giỏ</button>
        </div>
      </div>
    </article>
  `;
}

function renderHomeProducts() {
  const homeProducts = products.slice(0, 4);
  document.getElementById("homeProducts").innerHTML = homeProducts.map(productCard).join("");
}

function renderProducts() {
  const searchValue = document.getElementById("searchInput")?.value.toLowerCase() || "";
  const style = document.getElementById("styleFilter")?.value || "Tất cả";
  const category = document.getElementById("categoryFilter")?.value || "Tất cả";
  const gender = document.getElementById("genderFilter")?.value || "Tất cả";
  const sort = document.getElementById("sortFilter")?.value || "default";

  let list = products.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(searchValue);
    const matchStyle = style === "Tất cả" || product.style === style;
    const matchCategory = category === "Tất cả" || product.category === category;
    const matchGender = gender === "Tất cả" || product.gender === gender;

    return matchSearch && matchStyle && matchCategory && matchGender;
  });

  if (sort === "priceAsc") list.sort((a, b) => a.price - b.price);
  if (sort === "priceDesc") list.sort((a, b) => b.price - a.price);
  if (sort === "nameAsc") list.sort((a, b) => a.name.localeCompare(b.name));

  document.getElementById("resultCount").innerText = `${list.length} sản phẩm`;

  if (list.length === 0) {
    document.getElementById("productList").innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1">
        <div>🔍</div>
        <h3>Không tìm thấy sản phẩm</h3>
        <p>Hãy thử đổi từ khóa hoặc bộ lọc khác.</p>
      </div>
    `;
    return;
  }

  document.getElementById("productList").innerHTML = list.map(productCard).join("");
}
function filterByStyle(style) {
  showPage("products");

  setTimeout(() => {
    document.getElementById("styleFilter").value = style;
    renderProducts();
  }, 60);
}

function resetFilters() {
  document.getElementById("searchInput").value = "";
  document.getElementById("styleFilter").value = "Tất cả";
  document.getElementById("categoryFilter").value = "Tất cả";
  document.getElementById("genderFilter").value = "Tất cả";
  document.getElementById("sortFilter").value = "default";
  renderProducts();
}

function showProductDetail(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  
  selectedSize = product.sizes[0];

  // Kiểm tra nếu có đường dẫn ảnh thì dùng thẻ img, không thì dùng icon
  const mediaHtml = product.image 
    ? `<img src="${product.image}" alt="${product.name}" class="detail-img-render">`
    : `<div class="detail-icon-fallback">${product.icon}</div>`;

  document.getElementById("productDetail").innerHTML = `
    <div class="detail-layout">
      <div class="detail-media-box">
        ${mediaHtml}
      </div>

      <div class="detail-info">
        <p class="eyebrow dark">${product.style} / ${product.category}</p>
        <h1>${product.name}</h1>
        
        <div class="rating" style="margin-bottom: 20px;">
          <span style="color: #f59e0b; font-size: 20px;">★★★★★</span>
          <span style="color: var(--muted); margin-left: 8px;">4.9 / 5 (120 đánh giá)</span>
        </div>

        <div class="price-line" style="margin-bottom: 30px;">
          <strong style="font-size: 36px; color: var(--text);">${formatMoney(product.price)}</strong>
          <span style="text-decoration: line-through; color: var(--muted); font-size: 20px; margin-left: 15px;">
            ${formatMoney(product.oldPrice)}
          </span>
        </div>

        <p class="detail-desc" style="font-size: 17px; line-height: 1.8; margin-bottom: 30px;">
          ${product.desc}
        </p>

        <h3 style="margin-bottom: 15px;">Chọn size</h3>
        <div class="size-list" style="margin-bottom: 35px;">
          ${product.sizes.map((size, index) => `
            <button class="size-btn ${index === 0 ? "active" : ""}" 
                    onclick="chooseSize(this, '${size}')">${size}</button>
          `).join("")}
        </div>

        <div style="display: flex; gap: 15px;">
          <button class="btn btn-primary" style="flex: 2; padding: 18px;" onclick="addToCart(${product.id}, selectedSize)">
            THÊM VÀO GIỎ HÀNG
          </button>
          <button class="btn" style="flex: 1; background: #eee;" onclick="showPage('products')">
            QUAY LẠI
          </button>
        </div>
      </div>
    </div>
  `;

  showPage("detail");
  window.scrollTo(0, 0);
}


function chooseSize(button, size) {
  selectedSize = size;
  document.querySelectorAll(".size-btn").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
}

function addToCart(id, size = "M") {
  const product = products.find(item => item.id === id);
  const existing = cart.find(item => item.id === id && item.size === size);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      icon: product.icon,
      size,
      quantity: 1
    });
  }

  saveCart();
  showToast("Đã thêm sản phẩm vào giỏ hàng");
}

function getCartTotal() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 30000 : 0;
  const discount = subtotal >= 1000000 ? 50000 : 0;
  const total = subtotal + shipping - discount;

  return { subtotal, shipping, discount, total };
}

function renderCart() {
  const cartList = document.getElementById("cartList");
  const { subtotal, shipping, discount, total } = getCartTotal();

  document.getElementById("subtotalText").innerText = formatMoney(subtotal);
  document.getElementById("shippingText").innerText = formatMoney(shipping);
  document.getElementById("discountText").innerText = "-" + formatMoney(discount);
  document.getElementById("totalText").innerText = formatMoney(total);

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="empty-state">
        <div>🛒</div>
        <h3>Giỏ hàng đang trống</h3>
        <p>Hãy chọn sản phẩm trước khi thanh toán.</p>
        <br>
        <button class="btn btn-primary" onclick="showPage('products')">Mua sắm ngay</button>
      </div>
    `;
    return;
  }

  cartList.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-thumb">${item.icon}</div>
      <div>
        <h3>${item.name}</h3>
        <p>Size: ${item.size} | Giá: ${formatMoney(item.price)}</p>
        <div class="qty-box">
          <button onclick="changeQty(${index}, -1)">-</button>
          <strong>${item.quantity}</strong>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>
      </div>
      <button class="remove-btn" onclick="removeCartItem(${index})">Xóa</button>
    </div>
  `).join("");
}

function changeQty(index, amount) {
  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  renderCart();
}

function removeCartItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
  showToast("Đã xóa sản phẩm khỏi giỏ hàng");
}

function goCheckout() {
  if (cart.length === 0) {
    showToast("Giỏ hàng đang trống");
    return;
  }

  showPage("checkout");
}

function renderCheckout() {
  const checkoutItems = document.getElementById("checkoutItems");
  const { shipping, discount, total } = getCartTotal();

  if (cart.length === 0) {
    checkoutItems.innerHTML = `<p style="color:#6b7280">Chưa có sản phẩm trong đơn hàng.</p>`;
    document.getElementById("checkoutTotal").innerText = formatMoney(0);
    return;
  }

  checkoutItems.innerHTML = cart.map(item => `
    <div class="summary-line">
      <span>${item.name} x ${item.quantity}</span>
      <strong>${formatMoney(item.price * item.quantity)}</strong>
    </div>
  `).join("") + `
    <div class="summary-line">
      <span>Phí giao hàng</span>
      <strong>${formatMoney(shipping)}</strong>
    </div>
    <div class="summary-line">
      <span>Giảm giá</span>
      <strong>-${formatMoney(discount)}</strong>
    </div>
  `;

  document.getElementById("checkoutTotal").innerText = formatMoney(total);
}

function loginSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  showToast("Đăng nhập thành công: " + email);
  event.target.reset();
}

function registerSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("registerName").value;
  showToast("Đăng ký thành công: " + name);
  event.target.reset();
}

function checkoutSubmit(event) {
  event.preventDefault();

  if (cart.length === 0) {
    showToast("Không thể đặt hàng vì giỏ hàng trống");
    return;
  }

  const name = document.getElementById("customerName").value;
  showToast("Đặt hàng thành công. Cảm ơn " + name + "!");

  cart = [];
  saveCart();
  event.target.reset();

  setTimeout(() => showPage("home"), 1200);
}

renderHomeProducts();
renderProducts();
updateCartCount();
