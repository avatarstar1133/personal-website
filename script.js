const root = document.documentElement;
const header = document.querySelector('.site-header');
const langToggle = document.getElementById('langToggle');
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

// Korean Minimal is the single visual system for this site.
root.dataset.theme = 'korean';

menuButton.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  mobileMenu.setAttribute('aria-hidden', String(!open));
  menuButton.textContent = open ? 'Close' : 'Menu';
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  menuButton.textContent = 'Menu';
}));

const translations = {
  vi: {
    'nav.about': 'Về tôi', 'nav.life': 'Cuộc sống', 'nav.now': 'Hiện tại', 'nav.timeline': 'Dấu mốc', 'nav.contact': 'Liên hệ',
    'theme.label': 'Chế độ giao diện', 'theme.title': 'Chọn phong cách UI',
    'theme.minimal': 'Sạch, editorial, tinh gọn.', 'theme.dark': 'Kỹ thuật, tập trung, về đêm.', 'theme.korean': 'Trung tính, mềm và thời trang.', 'theme.cinematic': 'Ảnh mạnh, tương phản tối.',
    'hero.kicker': 'Không gian cá nhân / 2026',
    'hero.tagline': 'Sinh viên Kỹ thuật Phần mềm, người thích xây dựng sản phẩm, gym, xe máy, bóng rổ & bóng chuyền.',
    'hero.intro': 'Một không gian cá nhân thiên về hình ảnh cho những thứ tôi xây dựng, rèn luyện, quan tâm và đang dần trở thành.',
    'hero.explore': 'Khám phá cuộc sống', 'hero.status': 'Tại TP.HCM · Học, làm, tập luyện.',
    'about.kicker': 'Về tôi', 'about.title': 'Không chỉ là một CV.',
    'about.p1': 'Tôi là sinh viên năm 3 ngành Kỹ thuật Phần mềm tại FPT University, TP.HCM. Software Engineering là nền tảng chính; AI research, thể thao, phong cách, xe máy, hoạt động cộng đồng và kinh doanh tạo nên những phần còn lại.',
    'about.p2': 'Trang này chủ động mang tính cá nhân hơn: ít giống CV, giống một hồ sơ hình ảnh được tuyển chọn về những gì tôi đang làm, quan tâm và cách các sở thích đó kết nối với nhau.',
    'life.kicker': 'Nhật ký hình ảnh', 'life.title': 'Cuộc sống qua từng khung hình.', 'life.desc': 'Thay các ô này bằng ảnh lifestyle của bạn. Bố cục vẫn giữ được sự chuyên nghiệp ngay cả khi mỗi ảnh có phong cách khác nhau.',
    'gallery.city': 'Thành phố / thường ngày', 'gallery.training': 'Tập luyện', 'gallery.ride': 'Xe / chuyển động', 'gallery.style': 'Phong cách', 'gallery.people': 'Con người / cộng đồng', 'gallery.memory': 'Khoảnh khắc',
    'interests.kicker': 'Những mảnh ghép', 'interests.title': 'Những thứ tạo nên thế giới của tôi.',
    'interest.se': 'Nền tảng chính: xây dựng phần mềm, đóng góp trên codebase chung, tích hợp, kiểm thử và đưa sản phẩm tới trạng thái hoàn thiện.',
    'interest.ai': 'Visual retrieval, open-world object discovery, tracking và các hệ thống vision-language ứng dụng.',
    'interest.gym': 'Tập sức mạnh, bóng rổ và bóng chuyền — hiệu suất, sự đều đặn và vận động.',
    'interest.fashion': 'Clean minimal, Korean minimal và streetwear vừa phải, tập trung vào tỷ lệ và form.',
    'interest.motorbike': 'Hướng clean OEM+: chi tiết, cân bằng, chất cơ khí và sự tiết chế thị giác.',
    'interest.photo': 'Nhật ký hình ảnh về con người, chuyển động, ánh sáng thành phố, chi tiết và những khoảnh khắc thường ngày.',
    'interest.charity': 'Hoạt động gây quỹ cộng đồng và các dự án sinh viên, gồm dự án Gom Nắng.',
    'interest.business': 'Dùng công nghệ, vận hành số và branding để hiện đại hóa doanh nghiệp gia đình phân phối mỹ phẩm.',
    'interest.music': 'Âm nhạc cho lúc code, tập luyện và chạy xe về đêm — cùng những ghi chú cá nhân đáng giữ lại.',
    'now.kicker': 'Hiện tại', 'now.title': 'Những gì tôi đang tập trung.',
    'now.studyTitle': 'Học & xây dựng', 'now.study': 'Năm 3 Kỹ thuật Phần mềm tại FPT University, với các project thực hành về hệ thống phần mềm, dữ liệu, kiểm thử và kiến trúc.',
    'now.researchTitle': 'Nghiên cứu', 'now.lifeTitle': 'Ngoài code', 'now.life': 'Tập luyện đều, chơi bóng rổ và bóng chuyền, hoàn thiện phong cách cá nhân, build xe theo hướng clean và ghi lại đời sống bằng hình ảnh.',
    'now.communityTitle': 'Cộng đồng & kinh doanh', 'now.community': 'Tham gia các hoạt động thiện nguyện sinh viên và tìm cách dùng công nghệ để cải thiện hiện diện số và vận hành của HH Beauty.',
    'research.title': 'Tò mò kỹ thuật, nhưng không để nó chiếm toàn bộ con người.', 'research.desc': 'Personal website cho thấy bức tranh tổng thể; phần kỹ thuật sâu hơn nằm ở repository và portfolio nghề nghiệp.', 'research.repo': 'Repository nghiên cứu', 'research.github': 'Toàn bộ GitHub ↗',
    'timeline.kicker': 'Dấu mốc', 'timeline.title': 'Một vài điểm trên hành trình.',
    'timeline.2024title': 'Bắt đầu hành trình Software Engineering', 'timeline.2024desc': 'FPT University, TP.HCM. Đồng thời đạt Giải Nhì Olympic Tin học cấp tỉnh.',
    'timeline.2025title': 'Project, AIoT và các cuộc thi', 'timeline.2025desc': 'Tham gia các project software/AIoT, hoạt động nghiên cứu và vào Chung kết toàn quốc FPT University Hackathon.',
    'timeline.2026title': 'Nghiên cứu, cộng đồng và hệ thống cá nhân', 'timeline.2026desc': 'Tập trung vào hai hướng AI research, hoạt động cộng đồng sinh viên, số hóa HH Beauty, fitness, phong cách cá nhân và xây dựng online identity có chủ đích hơn.',
    'timeline.nextTitle': 'Tiếp tục tích lũy', 'timeline.nextDesc': 'Engineering tốt hơn, research mạnh hơn, sức khỏe tốt hơn, nhiều trải nghiệm hơn và một body of work ngày càng nhất quán.',
    'notes.kicker': 'Ghi chú cá nhân', 'notes.title': 'Những nguyên tắc tôi muốn giữ.', 'notes.one': 'Xây chiều sâu trước khi chạy theo tiếng ồn.', 'notes.two': 'Một kết quả sạch thường đến từ sự tiết chế, không phải nhồi thêm.', 'notes.three': 'Sự đều đặn thắng cường độ không thể duy trì.', 'notes.four': 'Giữ công việc, sức khỏe, các mối quan hệ và sự tò mò cùng tiến về phía trước.',
    'contact.kicker': 'Liên hệ / theo dõi', 'contact.title': 'Tìm tôi ở những nơi khác.', 'contact.desc': 'Website này là điểm trung tâm. Mỗi nền tảng bên dưới thể hiện một mặt khác nhau.', 'social.add': 'Thêm URL tài khoản',
    'footer.line': 'Được thiết kế như một không gian hình ảnh cá nhân — không phải một CV khác.'
  }
};

let currentLang = localStorage.getItem('hgh-lang') || 'en';
applyLanguage(currentLang);

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'vi' : 'en';
  localStorage.setItem('hgh-lang', currentLang);
  applyLanguage(currentLang);
});

function applyLanguage(lang) {
  root.dataset.lang = lang;
  root.lang = lang;
  langToggle.textContent = lang === 'en' ? 'VI' : 'EN';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (lang === 'vi' && translations.vi[key]) {
      if (!el.dataset.enText) el.dataset.enText = el.textContent;
      el.textContent = translations.vi[key];
    } else if (lang === 'en' && el.dataset.enText) {
      el.textContent = el.dataset.enText;
    }
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

document.getElementById('year').textContent = new Date().getFullYear();

// ============================================================
// QUICK PERSONALIZATION
// ============================================================
// 1) HERO IMAGE
//    Put your photo at: assets/images/hero.jpg
//    Recommended crop: portrait 4:5 (e.g. 1600×2000).
//
// 2) LIFESTYLE GALLERY
//    Replace these files with your photos:
//    Portrait slots: 4:5 or 3:4 work best. Wide slots life-03, 07, 11, 15: 16:9 works best.
//    assets/images/life-01.jpg ... life-15.jpg
//
// 3) INSTAGRAM / TIKTOK / THREADS
//    In index.html, search for "pending-social" and replace href="#"
//    with your real URLs, then remove class="pending-social".
//
// 4) 15 PHOTO SLOTS ARE READY
//    Add life-01.jpg through life-15.jpg to assets/images/.
//    No HTML/CSS editing is needed unless you want to change the layout.
// ============================================================
