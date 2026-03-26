// ========================================
// VietWebPro - Language Switcher (VI/EN)
// ========================================

const T = {
    // === NAVBAR ===
    'nav.about': { vi: 'Giới Thiệu', en: 'About' },
    'nav.services': { vi: 'Dịch Vụ', en: 'Services' },
    'nav.portfolio': { vi: 'Dự Án', en: 'Portfolio' },
    'nav.blog': { vi: 'Blog', en: 'Blog' },
    'nav.faq': { vi: 'FAQ', en: 'FAQ' },
    'nav.contact': { vi: 'Liên Hệ', en: 'Contact' },

    // === FOOTER ===
    'ft.brand': { vi: 'Biến ý tưởng thành website chuyên nghiệp.', en: 'Transforming ideas into professional websites.' },
    'ft.pages': { vi: 'Trang', en: 'Pages' },
    'ft.about': { vi: 'Giới thiệu', en: 'About' },
    'ft.services': { vi: 'Dịch vụ', en: 'Services' },
    'ft.portfolio': { vi: 'Dự án', en: 'Portfolio' },
    'ft.demos': { vi: 'Mẫu Website', en: 'Templates' },
    'ft.biz': { vi: 'Doanh nghiệp', en: 'Business' },
    'ft.restaurant': { vi: 'Nhà hàng', en: 'Restaurant' },
    'ft.contactH': { vi: 'Liên Hệ', en: 'Contact' },
    'ft.request': { vi: 'Gửi yêu cầu', en: 'Send request' },

    // === INDEX — HERO ===
    'hero.badge': { vi: 'Đang nhận dự án mới', en: 'Now accepting new projects' },
    'hero.t1': { vi: 'Thiết Kế Website', en: 'Professional' },
    'hero.t2': { vi: 'Chuyên Nghiệp', en: 'Web Design' },
    'hero.desc': { vi: 'Chúng tôi tạo ra những website đẹp mắt, tốc độ nhanh, chuẩn SEO và tối ưu trải nghiệm người dùng. Từ landing page đến thương mại điện tử — tất cả đều hoàn hảo.', en: 'We create beautiful, fast-loading, SEO-optimized websites with excellent user experience. From landing pages to e-commerce — everything is pixel-perfect.' },
    'hero.cta1': { vi: '🎨 Xem Mẫu Website', en: '🎨 View Templates' },
    'hero.cta2': { vi: '💬 Tư Vấn Miễn Phí', en: '💬 Free Consultation' },
    'hero.s1': { vi: 'Mẫu website sẵn sàng', en: 'Templates ready' },
    'hero.s2': { vi: 'Kinh nghiệm làm web', en: 'Years of experience' },

    // === INDEX — SERVICES ===
    'idx.svcT': { vi: 'Dịch Vụ Của Chúng Tôi', en: 'Our Services' },
    'idx.svcS': { vi: 'Giải pháp website toàn diện cho mọi nhu cầu kinh doanh của bạn', en: 'Complete website solutions for all your business needs' },
    'idx.svc1t': { vi: 'Thiết Kế UI/UX', en: 'UI/UX Design' },
    'idx.svc1d': { vi: 'Giao diện đẹp mắt, hiện đại, tối ưu trải nghiệm người dùng trên mọi thiết bị', en: 'Beautiful, modern interfaces optimized for user experience on all devices' },
    'idx.svc2t': { vi: 'Phát Triển Web', en: 'Web Development' },
    'idx.svc2d': { vi: 'Code chuẩn, tốc độ nhanh, bảo mật cao với công nghệ mới nhất', en: 'Clean code, fast loading, high security with the latest technologies' },
    'idx.svc3t': { vi: 'Tối Ưu SEO', en: 'SEO Optimization' },
    'idx.svc3d': { vi: 'Website chuẩn SEO giúp bạn xuất hiện trên Google nhanh chóng', en: 'SEO-standard websites to help you rank on Google quickly' },
    'idx.svc4t': { vi: 'Responsive', en: 'Responsive' },
    'idx.svc4d': { vi: 'Hiển thị hoàn hảo trên desktop, tablet và điện thoại di động', en: 'Perfect display on desktop, tablet and mobile devices' },

    // === INDEX — DEMOS ===
    'idx.demoT': { vi: 'Mẫu Website Demo', en: 'Website Templates' },
    'idx.demoS': { vi: 'Xem trước các mẫu website chúng tôi đã xây dựng', en: 'Preview our pre-built website templates' },
    'idx.demoAll': { vi: '🎯 Xem Tất Cả Mẫu →', en: '🎯 View All Templates →' },

    // === INDEX — PRICING ===
    'idx.priceT': { vi: 'Bảng Giá Dịch Vụ', en: 'Pricing Plans' },
    'idx.priceS': { vi: 'Gói dịch vụ phù hợp mọi nhu cầu và ngân sách', en: 'Service packages for every need and budget' },
    'pkg1.n': { vi: 'Cơ Bản', en: 'Basic' },
    'pkg1.d': { vi: 'Phù hợp cá nhân, shop nhỏ', en: 'For individuals, small shops' },
    'pkg2.n': { vi: 'Chuyên Nghiệp', en: 'Professional' },
    'pkg2.d': { vi: 'Doanh nghiệp vừa & nhỏ', en: 'Small & medium businesses' },
    'pkg3.n': { vi: 'Premium', en: 'Premium' },
    'pkg3.d': { vi: 'Giải pháp toàn diện', en: 'Complete solution' },
    'pkg.cta': { vi: 'Chọn Gói Này →', en: 'Choose Plan →' },

    // === INDEX — PROCESS ===
    'idx.procT': { vi: 'Quy Trình Làm Việc', en: 'Our Process' },
    'idx.procS': { vi: '4 bước đơn giản để có website hoàn hảo', en: '4 simple steps to a perfect website' },
    'st1.t': { vi: 'Tư Vấn', en: 'Consult' },
    'st1.d': { vi: 'Trao đổi chi tiết yêu cầu', en: 'Discuss your requirements' },
    'st2.t': { vi: 'Thiết Kế', en: 'Design' },
    'st2.d': { vi: 'Phác thảo giao diện & UX', en: 'Create mockup & UX design' },
    'st3.t': { vi: 'Phát Triển', en: 'Develop' },
    'st3.d': { vi: 'Code & tối ưu hiệu suất', en: 'Code & optimize performance' },
    'st4.t': { vi: 'Bàn Giao', en: 'Deliver' },
    'st4.d': { vi: 'Test, deploy & hỗ trợ', en: 'Test, deploy & support' },

    // === INDEX — CONTACT FORM ===
    'idx.ctaT': { vi: 'Bắt Đầu Dự Án', en: 'Start Your Project' },
    'idx.ctaS': { vi: 'Điền thông tin bên dưới, chúng tôi sẽ liên hệ tư vấn miễn phí', en: 'Fill in below, we\'ll contact you for a free consultation' },
    'cf.name': { vi: 'Họ và tên', en: 'Full name' },
    'cf.email': { vi: 'Email', en: 'Email' },
    'cf.phone': { vi: 'Số điện thoại', en: 'Phone number' },
    'cf.pkg': { vi: 'Gói dịch vụ quan tâm', en: 'Interested package' },
    'cf.choose': { vi: '-- Chọn gói --', en: '-- Select plan --' },
    'cf.msg': { vi: 'Mô tả yêu cầu', en: 'Describe your needs' },
    'cf.submit': { vi: 'Gửi Yêu Cầu Tư Vấn →', en: 'Send Request →' },

    // === ABOUT PAGE ===
    'ab.title': { vi: 'Về Chúng Tôi', en: 'About Us' },
    'ab.sub': { vi: 'Đội ngũ đam mê công nghệ, tận tâm với từng sản phẩm', en: 'A passionate tech team, dedicated to every product' },
    'ab.storyT': { vi: 'Câu Chuyện Của Chúng Tôi', en: 'Our Story' },
    'ab.story1': { vi: 'VietWebPro là đội ngũ với <span class="highlight-text">hơn 10 năm kinh nghiệm</span> trong lĩnh vực thiết kế và phát triển website, với mong muốn giúp doanh nghiệp Việt có website đẹp, chuyên nghiệp mà không tốn quá nhiều chi phí.', en: 'VietWebPro is a team with <span class="highlight-text">10+ years of experience</span> in web design and development, helping businesses get beautiful, professional websites at affordable prices.' },
    'ab.story2': { vi: 'Chúng tôi tập trung vào chất lượng thay vì số lượng. Mỗi dự án đều được chăm chút từng pixel, tối ưu từng dòng code để mang lại kết quả tốt nhất.', en: 'We focus on quality over quantity. Every project is crafted pixel by pixel, every line of code optimized for the best results.' },
    'ab.story3': { vi: 'Với nhiều năm kinh nghiệm làm việc với các doanh nghiệp lớn nhỏ, chúng tôi hiểu rõ điều gì tạo nên một website thành công. VietWebPro sẵn sàng đồng hành cùng bạn.', en: 'With years of experience working with businesses of all sizes, we understand what makes a successful website. VietWebPro is ready to be your partner.' },
    'ab.s1': { vi: 'Năm kinh nghiệm', en: 'Years experience' },
    'ab.s3': { vi: 'Mẫu website sẵn sàng', en: 'Templates ready' },
    'ab.s4': { vi: 'Tận tâm với khách hàng', en: 'Client dedication' },
    'ab.valT': { vi: 'Giá Trị Cốt Lõi', en: 'Core Values' },
    'ab.valS': { vi: 'Những nguyên tắc định hướng mọi hoạt động của chúng tôi', en: 'Principles that guide everything we do' },
    'ab.v1t': { vi: 'Chất Lượng', en: 'Quality' },
    'ab.v1d': { vi: 'Mỗi pixel đều được chăm chút, mỗi dòng code đều được tối ưu hóa', en: 'Every pixel is carefully crafted, every line of code optimized' },
    'ab.v2t': { vi: 'Tận Tâm', en: 'Dedication' },
    'ab.v2d': { vi: 'Đặt lợi ích khách hàng lên hàng đầu, đồng hành từ A đến Z', en: 'Putting client interests first, partnering from A to Z' },
    'ab.v3t': { vi: 'Sáng Tạo', en: 'Creativity' },
    'ab.v3d': { vi: 'Không theo khuôn mẫu, mỗi website là một tác phẩm nghệ thuật riêng biệt', en: 'No templates, each website is a unique work of art' },
    'ab.v4t': { vi: 'Tốc Độ', en: 'Speed' },
    'ab.v4d': { vi: 'Bàn giao đúng hạn, website tải nhanh, quy trình làm việc hiệu quả', en: 'On-time delivery, fast loading, efficient workflow' },
    'ab.ctaT': { vi: 'Sẵn Sàng Hợp Tác?', en: 'Ready to Collaborate?' },
    'ab.ctaS': { vi: 'Hãy để chúng tôi biến ý tưởng của bạn thành hiện thực', en: 'Let us turn your ideas into reality' },
    'ab.ctaBtn': { vi: '💬 Liên Hệ Ngay', en: '💬 Contact Now' },

    // === SERVICES PAGE ===
    'sv.title': { vi: 'Dịch Vụ', en: 'Services' },
    'sv.sub': { vi: 'Giải pháp toàn diện cho sự hiện diện trực tuyến của bạn', en: 'Complete solutions for your online presence' },

    // === PORTFOLIO PAGE ===
    'pf.title': { vi: 'Dự Án & Portfolio', en: 'Projects & Portfolio' },
    'pf.sub': { vi: 'Những mẫu website chúng tôi đã xây dựng', en: 'Website templates we have built' },
    'pf.all': { vi: 'Tất cả', en: 'All' },

    // === CONTACT PAGE ===
    'ct.title': { vi: 'Liên Hệ', en: 'Contact Us' },
    'ct.sub': { vi: 'Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn', en: 'We are always ready to listen and help you' },
    'ct.emailT': { vi: 'Email', en: 'Email' },
    'ct.emailD': { vi: 'Phản hồi trong 2-4 giờ làm việc', en: 'Reply within 2-4 business hours' },
    'ct.phoneT': { vi: 'Hotline', en: 'Hotline' },
    'ct.phoneD': { vi: 'Thứ 2 - Thứ 7, 8:00 - 18:00', en: 'Mon - Sat, 8:00 AM - 6:00 PM' },
    'ct.zaloT': { vi: 'Zalo / Messenger', en: 'Zalo / Messenger' },
    'ct.zaloL': { vi: 'Chat ngay qua Zalo', en: 'Chat via Zalo' },
    'ct.zaloD': { vi: 'Online 8:00 - 22:00', en: 'Online 8:00 AM - 10:00 PM' },
    'ct.addrT': { vi: 'Địa Chỉ', en: 'Address' },
    'ct.formT': { vi: 'Gửi Yêu Cầu Tư Vấn', en: 'Send Consultation Request' },
    'ct.formS': { vi: 'Điền thông tin bên dưới, chúng tôi sẽ liên hệ tư vấn miễn phí', en: 'Fill in the form below — we\'ll contact you for a free consultation' },
    'ct.fname': { vi: 'Họ và tên *', en: 'Full name *' },
    'ct.femail': { vi: 'Email *', en: 'Email *' },
    'ct.fphone': { vi: 'Số điện thoại', en: 'Phone number' },
    'ct.fbudget': { vi: 'Ngân sách dự kiến', en: 'Estimated budget' },
    'ct.ftype': { vi: 'Loại website cần làm', en: 'Website type needed' },
    'ct.fmsg': { vi: 'Mô tả chi tiết yêu cầu', en: 'Describe your requirements' },
    'ct.fsource': { vi: 'Bạn biết đến chúng tôi qua đâu?', en: 'How did you find us?' },
    'ct.fsubmit': { vi: 'Gửi Yêu Cầu Tư Vấn →', en: 'Send Request →' },

    // === FAQ PAGE ===
    'fq.title': { vi: 'Câu Hỏi Thường Gặp', en: 'Frequently Asked Questions' },
    'fq.sub': { vi: 'Giải đáp những thắc mắc phổ biến nhất', en: 'Answers to the most common questions' },
    'fq.ctaT': { vi: 'Chưa Tìm Thấy Câu Trả Lời?', en: 'Didn\'t Find Your Answer?' },
    'fq.ctaS': { vi: 'Đừng ngại liên hệ, chúng tôi luôn sẵn sàng hỗ trợ bạn', en: 'Don\'t hesitate to reach out — we\'re always happy to help' },
    'fq.ctaBtn': { vi: '💬 Liên Hệ Ngay', en: '💬 Contact Now' },

    // === BLOG PAGE ===
    'bl.title': { vi: 'Blog & Kiến Thức', en: 'Blog & Knowledge' },
    'bl.sub': { vi: 'Chia sẻ kinh nghiệm thiết kế web, SEO & marketing online', en: 'Sharing web design, SEO & online marketing experience' },
    'bl.topics': { vi: '📂 Chủ Đề', en: '📂 Topics' },
    'bl.recent': { vi: '🔥 Bài Viết Mới', en: '🔥 Latest Posts' },
    'bl.cta': { vi: 'Cần Website Chuyên Nghiệp?', en: 'Need a Professional Website?' },
    'bl.ctaS': { vi: 'Tư vấn miễn phí, báo giá trong 24h', en: 'Free consultation, quote within 24h' },
    'bl.ctaBtn': { vi: 'Liên Hệ Ngay', en: 'Contact Now' },
};

function initLang() {
    const saved = localStorage.getItem('vwp-lang') || 'vi';
    setLang(saved);
}

function setLang(lang) {
    localStorage.setItem('vwp-lang', lang);
    document.documentElement.lang = lang;
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang === 'vi' ? 'EN' : 'VI';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (T[key] && T[key][lang]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = T[key][lang];
            } else {
                el.innerHTML = T[key][lang];
            }
        }
    });
}

function toggleLang() {
    const cur = localStorage.getItem('vwp-lang') || 'vi';
    setLang(cur === 'vi' ? 'en' : 'vi');
}

document.addEventListener('DOMContentLoaded', initLang);
