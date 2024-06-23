const header = document.getElementById("header");
const footer = document.getElementById("footer");
const insertHeader = () => {
  header.innerHTML = `
        <nav id="navbar">
          <div class="nav_container">
            <a class="nav_icon" href="./index.html"
              ><img
                src="https://nhahangvian.com/wp-content/themes/vian/images/nhahangvian-logo.png"
                alt="logo"
            /></a>
            <div class="item_container">
              <ul>
                <li class="nav_items"> <a href="#">GIỚI THIỆU</a></li>
                <li class="nav_items"> <a href="./menu.html">THỰC ĐƠN</a></li>
                <li class="nav_items"> <a href="">ĐẶT BÀN</a></li>
                <li class="nav_items"> <a href="">ALBUM ẢNH</a></li>
                <li class="nav_items"> <a href="./contactPage.html">LIÊN HỆ</a></li>
              </ul>
            </div>
            <div class="nav_lang">
              <input type="text" class="nav_search" placeholder="Tìm kiếm" />
              <a href=""><span>EN</span></a>
            </div>
          </div>
          <div class="wrapped_nav">
            <div class="wrapped_container">
              <i id="menu" class="fa-solid fa-bars"></i>
              <a class="nav_icon" href=""
                ><img
                  src="https://nhahangvian.com/wp-content/themes/vian/images/nhahangvian-logo.png"
                  alt=""
              /></a>
              <a href=""><span>EN</span></a>
            </div>
            <div class="nav_link">
              <ul>
                <li class="nav_items"> <a href="">GIỚI THIỆU</a></li>
                <li class="nav_items"> <a href="">THỰC ĐƠN</a></li>
                <li class="nav_items"> <a href="">ĐẶT BÀN</a></li>
                <li class="nav_items"> <a href="">ALBUM ẢNH</a></li>
                <li class="nav_items"> <a href="../src/contactPage.html">LIÊN HỆ</a></li>
                <li class="nav_items">
                  <input type="text" placeholder="Tìm kiếm" />
                </li>
              </ul>
            </div>
          </div>
        </nav> `;
};

const insertFooter = () => {
  footer.innerHTML = `<div class="footer_container">
        <div class="footer_top">
          <div class="footer_content">
            <h2>VỊ AN – CƠM NGON TRÒN VỊ</h2>
            <span>Hotline: 0904 816 145</span>
            <span>Email: nhahangvian@gmail.com</span>
            <span>Địa chỉ: 145 Hoàng Cầu, Q. Đống Đa, Hà Nội</span>
            <span>(Có chỗ để xe ô tô)</span>
          </div>
          <div class="footer_content">
            <h3>Giờ mở cửa</h3>
            <span>Sáng: 10h - 14h</span>
            <span>Chiều: 18h - 22h</span>
            <span>Tất cả các ngày trong tuần</span>
          </div>
          <div class="footer_content">
            <h3>Mạng xã hội</h3>
            <div class="social-icons">
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-youtube"></i></a>
              <a href="#"><i class="fa-brands fa-instagram"></i></a>
              <a href="#"><i class="fa-brands fa-tiktok"></i></a>
            </div>
          </div>
        </div>
        <div class="footer_bottom">
          <div class="footer_content">
            <span
              >Copyright © 2024<a href="">
                <strong>Vị An – Cơm ngon tròn vị</strong></a
              >. All rights reserved.</span
            >
          </div>
          <div class="footer_content">
            <span
              ><a href="#">Bảo mật thông tin</a> | <a href="#">Liên hệ</a></span
            >
          </div>
        </div>
      </div>`;
};

insertHeader();
insertFooter();
