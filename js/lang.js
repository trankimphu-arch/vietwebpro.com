// ========================================
// VietWebPro - Language Switcher (VI/EN)
// ========================================

const translations = {
    // === NAVBAR ===
    'nav.about': { vi: 'Giới Thiệu', en: 'About' },
    'nav.services': { vi: 'Dịch Vụ', en: 'Services' },
    'nav.portfolio': { vi: 'Dự Án', en: 'Portfolio' },
    'nav.blog': { vi: 'Blog', en: 'Blog' },
    'nav.faq': { vi: 'FAQ', en: 'FAQ' },
    'nav.contact': { vi: 'Liên Hệ', en: 'Contact' },

    // === FOOTER ===
    'footer.brand': { vi: 'Biến ý tưởng thành website chuyên nghiệp.', en: 'Transforming ideas into professional websites.' },
    'footer.pages': { vi: 'Trang', en: 'Pages' },
    'footer.about': { vi: 'Giới thiệu', en: 'About' },
    'footer.services': { vi: 'Dịch vụ', en: 'Services' },
    'footer.portfolio': { vi: 'Dự án', en: 'Portfolio' },
    'footer.demos': { vi: 'Mẫu Website', en: 'Demo Templates' },
    'footer.business': { vi: 'Doanh nghiệp', en: 'Business' },
    'footer.restaurant': { vi: 'Nhà hàng', en: 'Restaurant' },
    'footer.contactTitle': { vi: 'Liên Hệ', en: 'Contact' },
    'footer.request': { vi: 'Gửi yêu cầu', en: 'Send request' },
    'footer.rights': { vi: '© 2026 VietWebPro. All rights reserved.', en: '© 2026 VietWebPro. All rights reserved.' },

    // === INDEX PAGE ===
    'hero.badge': { vi: '🚀 Thiết kế website chuyên nghiệp', en: '🚀 Professional Web Design' },
    'hero.title1': { vi: 'Thiết Kế Website', en: 'Professional' },
    'hero.title2': { vi: 'Chuyên Nghiệp', en: 'Web Design' },
    'hero.title3': { vi: 'Cho Doanh Nghiệp Việt', en: 'For Your Business' },
    'hero.desc': { vi: 'Chúng tôi biến ý tưởng của bạn thành website đẹp, chuyên nghiệp, chuẩn SEO, tốc độ nhanh — giúp bạn nổi bật trên thị trường.', en: 'We transform your ideas into beautiful, professional, SEO-optimized, fast-loading websites — helping you stand out in the market.' },
    'hero.cta1': { vi: '📋 Xem Mẫu Website', en: '📋 View Templates' },
    'hero.cta2': { vi: '💬 Tư Vấn Miễn Phí', en: '💬 Free Consultation' },
    'hero.stat1.label': { vi: 'Mẫu website sẵn sàng', en: 'Templates ready' },
    'hero.stat2.label': { vi: 'Kinh nghiệm làm web', en: 'Years of experience' },
    'hero.stat3.label': { vi: 'Đội ngũ chuyên môn', en: 'Expert team members' },

    // Services section
    'services.title': { vi: 'Dịch Vụ Của Chúng Tôi', en: 'Our Services' },
    'services.subtitle': { vi: 'Giải pháp toàn diện từ thiết kế đến vận hành', en: 'Complete solutions from design to operation' },
    'svc1.title': { vi: 'Thiết Kế Website', en: 'Web Design' },
    'svc1.desc': { vi: 'Giao diện đẹp, hiện đại, responsive trên mọi thiết bị. Chúng tôi tạo website mang đậm bản sắc thương hiệu.', en: 'Beautiful, modern, responsive design on all devices. We create websites that reflect your brand identity.' },
    'svc2.title': { vi: 'Tối Ưu SEO', en: 'SEO Optimization' },
    'svc2.desc': { vi: 'Website chuẩn SEO từ cấu trúc đến nội dung, giúp bạn xuất hiện trên Google nhanh chóng.', en: 'SEO-standard websites from structure to content, helping you appear on Google quickly.' },
    'svc3.title': { vi: 'Tốc Độ & Hiệu Suất', en: 'Speed & Performance' },
    'svc3.desc': { vi: 'Code sạch, tải nhanh, đạt 90+ điểm Google PageSpeed. Trải nghiệm người dùng mượt mà.', en: 'Clean code, fast loading, 90+ Google PageSpeed score. Smooth user experience.' },
    'svc4.title': { vi: 'Bảo Trì & Hỗ Trợ', en: 'Maintenance & Support' },
    'svc4.desc': { vi: 'Hỗ trợ sau bàn giao, cập nhật nội dung, sửa lỗi — chúng tôi đồng hành cùng bạn lâu dài.', en: 'Post-delivery support, content updates, bug fixes — we partner with you long-term.' },

    // Demos
    'demos.title': { vi: 'Mẫu Website Demo', en: 'Website Templates' },
    'demos.subtitle': { vi: 'Xem trước các mẫu website chúng tôi đã xây dựng', en: 'Preview our pre-built website templates' },
    'demos.viewall': { vi: '🎯 Xem Tất Cả Mẫu →', en: '🎯 View All Templates →' },

    // Pricing
    'pricing.title': { vi: 'Bảng Giá Dịch Vụ', en: 'Pricing Plans' },
    'pricing.subtitle': { vi: 'Gói dịch vụ linh hoạt phù hợp mọi nhu cầu', en: 'Flexible plans for every need' },
    'pkg1.name': { vi: 'Cơ Bản', en: 'Basic' },
    'pkg1.desc': { vi: 'Phù hợp cá nhân, shop nhỏ', en: 'For individuals, small shops' },
    'pkg2.name': { vi: 'Chuyên Nghiệp', en: 'Professional' },
    'pkg2.desc': { vi: 'Doanh nghiệp, startup', en: 'Businesses, startups' },
    'pkg3.name': { vi: 'Premium', en: 'Premium' },
    'pkg3.desc': { vi: 'Giải pháp toàn diện', en: 'Complete solution' },
    'pkg.cta': { vi: 'Chọn Gói Này →', en: 'Choose This Plan →' },

    // Process
    'process.title': { vi: 'Quy Trình Làm Việc', en: 'Our Process' },
    'process.subtitle': { vi: '4 bước đơn giản để có website hoàn hảo', en: '4 simple steps to a perfect website' },
    'step1.title': { vi: 'Tư Vấn', en: 'Consultation' },
    'step1.desc': { vi: 'Trao đổi chi tiết yêu cầu', en: 'Discuss your requirements' },
    'step2.title': { vi: 'Thiết Kế', en: 'Design' },
    'step2.desc': { vi: 'Phác thảo giao diện', en: 'Create mockup design' },
    'step3.title': { vi: 'Phát Triển', en: 'Development' },
    'step3.desc': { vi: 'Code & tối ưu', en: 'Code & optimize' },
    'step4.title': { vi: 'Bàn Giao', en: 'Delivery' },
    'step4.desc': { vi: 'Test & hoàn thiện', en: 'Test & launch' },

    // Contact form
    'contact.title': { vi: 'Bắt Đầu Dự Án', en: 'Start Your Project' },
    'contact.subtitle': { vi: 'Điền thông tin bên dưới, chúng tôi sẽ liên hệ tư vấn miễn phí', en: 'Fill in the form below, we will contact you for a free consultation' },
    'contact.name': { vi: 'Họ và tên', en: 'Full name' },
    'contact.email': { vi: 'Email', en: 'Email' },
    'contact.phone': { vi: 'Số điện thoại', en: 'Phone number' },
    'contact.package': { vi: 'Gói dịch vụ quan tâm', en: 'Interested plan' },
    'contact.choosePackage': { vi: '-- Chọn gói --', en: '-- Select plan --' },
    'contact.message': { vi: 'Mô tả yêu cầu', en: 'Describe your needs' },
    'contact.submit': { vi: 'Gửi Yêu Cầu Tư Vấn →', en: 'Send Request →' },
};

// Initialize language
function initLang() {
    const saved = localStorage.getItem('vwp-lang') || 'vi';
    setLang(saved);
}

function setLang(lang) {
    localStorage.setItem('vwp-lang', lang);
    document.documentElement.lang = lang;

    // Update toggle button
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang === 'vi' ? 'EN' : 'VI';

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[key] && translations[key][lang]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[key][lang];
            } else if (el.tagName === 'OPTION' && el.value === '') {
                el.textContent = translations[key][lang];
            } else {
                el.innerHTML = translations[key][lang];
            }
        }
    });
}

function toggleLang() {
    const current = localStorage.getItem('vwp-lang') || 'vi';
    setLang(current === 'vi' ? 'en' : 'vi');
}

document.addEventListener('DOMContentLoaded', initLang);
