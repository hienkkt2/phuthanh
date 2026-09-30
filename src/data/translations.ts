export interface Translations {
  // Navigation
  nav_about: string;
  nav_services: string;
  nav_pricing: string;
  nav_reviews: string;
  nav_gallery: string;
  nav_location: string;
  nav_blog: string;

  // Header & TopBar
  topbar_title: string;
  topbar_hours: string;
  topbar_maps: string;
  topbar_call_advice: string;
  topbar_brand_tag: string;
  topbar_call_btn: string;
  topbar_call_now: string;
  topbar_branch_notice: string;

  // Hero Section
  hero_tag: string;
  hero_title_line1: string;
  hero_title_line2: string;
  hero_desc: string;
  hero_only_branch: string;
  hero_directions_btn: string;
  hero_call_book: string;
  hero_chat_zalo: string;
  hero_view_maps: string;
  hero_consult_btn: string;
  hero_feat1_title: string;
  hero_feat1_desc: string;
  hero_feat2_title: string;
  hero_feat2_desc: string;
  hero_feat3_title: string;
  hero_feat3_desc: string;

  // Quick Booking Bar
  quick_tag: string;
  quick_title: string;
  quick_desc: string;
  quick_zalo_btn: string;
  quick_call_btn: string;
  quick_address_label: string;
  quick_hours_label: string;

  // About Section
  about_tag: string;
  about_title_1: string;
  about_title_2: string;
  about_desc: string;
  about_photo_room: string;
  about_photo_room_short: string;
  about_photo_foot: string;
  about_photo_foot_short: string;
  about_photo_gate: string;
  about_photo_gate_short: string;
  about_badge_years: string;
  about_badge_customers: string;
  about_val1_title: string;
  about_val1_desc: string;
  about_val2_title: string;
  about_val2_desc: string;
  about_val3_title: string;
  about_val3_desc: string;
  about_val4_title: string;
  about_val4_desc: string;

  // Services Section
  services_tag: string;
  services_title: string;
  services_subtitle: string;
  services_menu_title: string;
  services_menu_badge_60: string;
  services_menu_badge_90: string;
  services_pkg_60_btn: string;
  services_pkg_90_btn: string;
  services_vip_badge: string;
  services_addon_tag: string;
  services_gift_tag: string;
  services_gift_label: string;
  services_card_section_title: string;
  services_card_section_desc: string;
  services_view_process: string;
  services_book_btn: string;
  services_price_label: string;
  services_60m_label: string;
  services_90m_label: string;
  services_full_pkg: string;
  services_recommended: string;

  // Detail Modal
  modal_steps_title: string;
  modal_benefits_title: string;
  modal_call_book: string;
  modal_close: string;
  modal_gift_badge: string;

  // Reviews Section
  reviews_tag: string;
  reviews_title: string;
  reviews_subtitle: string;
  reviews_rating_score: string;
  reviews_total_count: string;
  reviews_satisfaction: string;
  reviews_trained: string;

  // Gallery Section
  gallery_tag: string;
  gallery_title_1: string;
  gallery_title_2: string;
  gallery_desc: string;
  gallery_view_large: string;
  gallery_reassure_1: string;
  gallery_reassure_2: string;
  gallery_reassure_3: string;

  // Branch & Location Section
  branch_tag: string;
  branch_title: string;
  branch_desc: string;
  branch_single_location: string;
  branch_single_location_desc: string;
  branch_hotline_advice: string;
  branch_daily_hours: string;
  branch_call_reserve: string;
  branch_maps_btn: string;
  branch_open_maps: string;
  branch_gate_caption: string;
  branch_gate_subcaption: string;

  // Blog Section
  blog_tag: string;
  blog_title: string;
  blog_subtitle: string;
  blog_read_more: string;

  // Consultation Modal
  consult_title: string;
  consult_subtitle: string;
  consult_step1: string;
  consult_step2: string;
  consult_step3: string;
  consult_name: string;
  consult_phone: string;
  consult_submit: string;
  consult_call_direct: string;

  // Footer
  footer_brand_sub: string;
  footer_desc: string;
  footer_hotline_zalo: string;
  footer_hours: string;
  footer_single_addr_title: string;
  footer_call_directions: string;
  footer_view_maps: string;
  footer_services_title: string;
  footer_copyright: string;
  footer_branch_note: string;

  // Floating Actions
  floating_top: string;
  floating_maps: string;
  floating_zalo: string;
  floating_call: string;
}

export const translations: Record<'vi' | 'en', Translations> = {
  vi: {
    nav_about: 'Về Phú Thành',
    nav_services: 'Bảng Giá Menu',
    nav_pricing: 'Bảng Giá',
    nav_reviews: 'Khách Hàng Đánh Giá',
    nav_gallery: 'Không Gian Cơ Sở',
    nav_location: 'Địa Chỉ & Bản Đồ',
    nav_blog: 'Kiến Thức Trị Liệu',

    topbar_title: 'Cơ sở Massage Khiếm Thị Phú Thành Huế',
    topbar_hours: 'Giờ mở cửa: 08:30 - 23:00 hàng ngày',
    topbar_maps: 'Xem Bản Đồ Google Maps',
    topbar_call_advice: 'Gọi tư vấn: 0905 700 923',
    topbar_brand_tag: 'Massage Bấm Huyệt Khiếm Thị',
    topbar_call_btn: 'Gọi Ngay: ',
    topbar_call_now: 'Gọi 0905 700 923',
    topbar_branch_notice: 'Cơ sở duy nhất: Số 2 kiệt 186 Nguyễn Sinh Cung, Vỹ Dạ, Huế',

    hero_tag: 'Phú Thành — Massage Khiếm Thị TP. Huế',
    hero_title_line1: 'Đôi Bàn Tay Kỳ Diệu,',
    hero_title_line2: 'Trị Liệu Bằng Cả Trái Tim',
    hero_desc: 'Đội ngũ kỹ thuật viên khiếm thị tay nghề cao, được đào tạo chính quy từ Hội Người Mù & Viện Y Dược Học Dân Tộc. Đôi bàn tay bắt trúng huyệt đạo, gỡ sạch nút thắt co cơ cổ vai gáy, thoát vị đĩa đệm, đau lưng và mất ngủ.',
    hero_only_branch: 'Cơ sở duy nhất:',
    hero_directions_btn: 'Chỉ Đường',
    hero_call_book: 'Gọi Điện Đặt Chỗ: 0905 700 923',
    hero_chat_zalo: 'Nhắn Tin Zalo',
    hero_view_maps: 'Chỉ Đường Google Maps',
    hero_consult_btn: 'Tư Vấn Liệu Trình',
    hero_feat1_title: '100% KTV Khiếm Thị Lành Nghề',
    hero_feat1_desc: 'Cảm nhận huyệt vị tinh tế, lực tay đầm chắc, bắt đúng điểm đau',
    hero_feat2_title: 'Không Gian Sạch & Thảo Dược Ấm',
    hero_feat2_desc: 'Phòng máy lạnh, khăn trải thay mới 100%, nước ngâm chân gừng quế',
    hero_feat3_title: 'Giá Bình Dân Từ 140.000đ',
    hero_feat3_desc: 'Minh bạch niêm yết rõ ràng, không phụ thu ép giá, phục vụ chân thành',

    quick_tag: 'Liên Hệ Trực Tiếp Để Được Phục Vụ Chu Đáo Nhất',
    quick_title: 'Cần Tư Vấn Liệu Trình Hay Giữ Phòng?',
    quick_desc: 'Quý khách vui lòng gọi trực tiếp hotline hoặc nhắn Zalo trước 15-30 phút để chúng tôi chuẩn bị nước ngâm chân thảo dược và phòng riêng sạch sẽ đón tiếp.',
    quick_zalo_btn: 'Nhắn Zalo',
    quick_call_btn: 'Gọi: 0905 700 923',
    quick_address_label: 'Địa chỉ:',
    quick_hours_label: 'Giờ mở cửa: 08:30 - 23:00 (Cả tuần & ngày lễ)',

    about_tag: 'Nghị Lực & Chân Thành Xứ Huế',
    about_title_1: 'Nâng Cao Thể Lực,',
    about_title_2: 'Chắp Cánh Sinh Kế Từ Đôi Bàn Tay',
    about_desc: 'Cơ sở Phú Thành - Massage Khiếm Thị tại số 2 kiệt 186 Nguyễn Sinh Cung, Vỹ Dạ, Huế là mái nhà chung của những người khiếm thị yêu nghề. Chúng tôi mang đến dịch vụ xoa bóp bấm huyệt đàng hoàng, tử tế, trị liệu tận gốc cơn đau mỏi cho người dân địa phương và du khách.',
    about_photo_room: 'Phòng Trị Liệu Bấm Huyệt Máy Lạnh',
    about_photo_room_short: 'Phòng 3 Giường',
    about_photo_foot: 'Khu Vực Ngâm Chân Thảo Mộc Thùng Gỗ',
    about_photo_foot_short: 'Ngâm Chân',
    about_photo_gate: 'Cổng Vào & Biển Hiệu Số 2 Kiệt 186 Nguyễn Sinh Cung',
    about_photo_gate_short: 'Cổng Tiệm',
    about_badge_years: 'Năm Phụng Sự Tại Cố Đô Huế',
    about_badge_customers: 'Lượt Khách Hài Lòng & Khỏi Đau',
    about_val1_title: '01. Đôi Bàn Tay Cảm Thụ Tinh Nhạy',
    about_val1_desc: 'Mất đi ánh sáng, các giác quan xúc giác của kỹ thuật viên khiếm thị trở nên nhạy bén kỳ diệu. Từng ngón tay rà soát chuẩn xác từng bó cơ co rút, điểm tắc nghẽn kinh lạc và huyệt vị ẩn sâu dưới da.',
    about_val2_title: '02. Đào Tạo Chuẩn Y Học Dân Tộc',
    about_val2_desc: '100% kỹ thuật viên tại Phú Thành đều có chứng chỉ nghề được đào tạo bài bản từ Hội Người Mù và các viện đào tạo Y học cổ truyền uy tín, nắm vững giải phẫu cơ xương khớp.',
    about_val3_title: '03. Không Gian Sạch Sẽ, Lịch Sự & Riêng Tư',
    about_val3_desc: 'Phòng máy lạnh kín đáo, có phòng riêng nam/nữ, phòng cho gia đình hoặc cặp đôi. Ga giường và khăn trải giặt sấy thơm mùi sả chanh, thay mới 100% sau mỗi lượt khách.',
    about_val4_title: '04. Giá Bình Dân — Minh Bạch Niêm Yết Rõ Ràng',
    about_val4_desc: 'Phục vụ bằng cái tâm chân chất của người Huế. Bảng giá niêm yết công khai từ 140.000đ (dịch vụ thêm từ 40.000đ), tặng miễn phí gối ngải cứu chườm lưng & mắt và tách trà gừng thơm sau liệu trình.',

    services_tag: 'Bảng Giá Niêm Yết Rõ Ràng — Minh Bạch',
    services_title: 'Dịch Vụ & Bảng Giá Menu Phú Thành',
    services_subtitle: 'Cam kết 100% kỹ thuật viên khiếm thị tay nghề cao. Giá bình dân, phục vụ bằng cái tâm chân chất của người xứ Huế.',
    services_menu_title: 'MENU DỊCH VỤ',
    services_menu_badge_60: 'GÓI 60 PHÚT',
    services_menu_badge_90: 'GÓI 90 PHÚT (VIP)',
    services_pkg_60_btn: 'Đặt Gói 60 Phút',
    services_pkg_90_btn: 'Đặt Gói 90 Phút (VIP)',
    services_vip_badge: 'VIP Phục Hồi',
    services_addon_tag: 'Dịch vụ thêm',
    services_gift_tag: 'Quà tặng',
    services_gift_label: 'Tặng Miễn Phí',
    services_card_section_title: 'Chi Tiết Quy Trình Từng Liệu Trình',
    services_card_section_desc: 'Bấm vào từng dịch vụ để xem các bước trị liệu và lợi ích phục hồi sức khỏe',
    services_view_process: 'Xem Chi Tiết',
    services_book_btn: 'Gọi Giữ Chỗ',
    services_price_label: 'Mức Giá Niêm Yết:',
    services_60m_label: 'Gói 60 phút',
    services_90m_label: 'Gói 90 phút',
    services_full_pkg: 'Trọn gói dịch vụ:',
    services_recommended: 'Khuyên Dùng',

    modal_steps_title: 'Quy Trình Trị Liệu Các Bước',
    modal_benefits_title: 'Lợi Ích Sức Khỏe Vượt Trội',
    modal_call_book: 'Gọi Điện Đặt Chỗ Ngay: 0905 700 923',
    modal_close: 'Đóng',
    modal_gift_badge: 'Tặng Miễn Phí 100%',

    reviews_tag: 'Cảm Nhận Chân Thật Của Khách Hàng',
    reviews_title: 'Khách Hàng Nói Gì Về Phú Thành?',
    reviews_subtitle: 'Sự hài lòng và những lời cảm ơn của quý khách là động lực to lớn nhất cho đội ngũ khiếm thị Phú Thành',
    reviews_rating_score: 'Đánh giá trung bình từ khách hàng',
    reviews_total_count: 'Đánh giá chân thực tại Huế & Google',
    reviews_satisfaction: 'Khách hàng hài lòng & quay lại',
    reviews_trained: 'KTV đào tạo chuẩn Y học dân tộc',

    gallery_tag: 'Hình Ảnh Thực Tế Tại Cơ Sở',
    gallery_title_1: 'Không Gian',
    gallery_title_2: 'Thực Tế',
    gallery_desc: '100% hình ảnh thực tế ghi lại không gian nhà rường gỗ ấm cúng, phòng trị liệu máy lạnh riêng tư và góc ngâm chân thảo mộc thanh tịnh tại số 2 kiệt 186 Nguyễn Sinh Cung, Vỹ Dạ, Huế.',
    gallery_view_large: 'Xem ảnh lớn',
    gallery_reassure_1: 'Phòng máy lạnh, ga gối giặt sấy sả chanh thay mới 100%',
    gallery_reassure_2: 'Đón tiếp chu đáo, miễn phí nước ngâm chân & tách trà gừng Huế',
    gallery_reassure_3: 'Cơ sở số 2 kiệt 186 Nguyễn Sinh Cung, Vỹ Dạ, TP. Huế',

    branch_tag: 'Địa Chỉ Cơ Sở Duy Nhất',
    branch_title: 'Vị Trí Cơ Sở Phú Thành Tại Vỹ Dạ, Huế',
    branch_desc: 'Cơ sở Phú Thành toạ lạc tại khu vực Vỹ Dạ thanh bình, gần Cồn Hến và các điểm du lịch nổi tiếng của Cố Đô Huế. Ô tô và xe máy vào tận cổng cơ sở.',
    branch_single_location: 'Cơ Sở Duy Nhất Tại Vỹ Dạ, TP. Huế',
    branch_single_location_desc: 'Địa chỉ: Số 2 kiệt 186 Nguyễn Sinh Cung, phường Vỹ Dạ, TP. Huế',
    branch_hotline_advice: 'Hotline Chỉ Đường & Đặt Chỗ: 0905 700 923',
    branch_daily_hours: 'Mở cửa từ 08:30 đến 23:00 tất cả các ngày trong tuần (kể cả lễ tết)',
    branch_call_reserve: 'Gọi 0905 700 923 Giữ Phòng',
    branch_maps_btn: 'Xem Chỉ Đường Google Maps',
    branch_open_maps: 'Mở vị trí trên Google Maps',
    branch_gate_caption: 'Cổng vào số 2 kiệt 186 Nguyễn Sinh Cung',
    branch_gate_subcaption: 'Phường Vỹ Dạ, TP. Huế (Gần Cồn Hến)',

    blog_tag: 'Cẩm Nang Sức Khỏe & Trị Liệu Đông Y',
    blog_title: 'Kiến Thức Trị Liệu & Dưỡng Sinh',
    blog_subtitle: 'Những chia sẻ thực tế từ các chuyên gia khiếm thị giàu kinh nghiệm giúp bạn phòng ngừa và giải tỏa đau mỏi hàng ngày',
    blog_read_more: 'Đọc tiếp',

    consult_title: 'Tư Vấn Nhanh Liệu Trình Trị Liệu',
    consult_subtitle: 'Cho chúng tôi biết tình trạng đau nhức của bạn để được KTV tư vấn phương pháp phù hợp nhất',
    consult_step1: '1. Chọn triệu chứng đau mỏi của bạn:',
    consult_step2: '2. Thời gian đau nhức:',
    consult_step3: '3. Thông tin liên hệ:',
    consult_name: 'Họ và tên của bạn',
    consult_phone: 'Số điện thoại liên hệ',
    consult_submit: 'Gửi Yêu Cầu Tư Vấn',
    consult_call_direct: 'Hoặc gọi hotline tư vấn ngay: 0905 700 923',

    footer_brand_sub: 'Massage Bấm Huyệt Khiếm Thị — TP. Huế',
    footer_desc: 'Đôi bàn tay kỳ diệu — Trị liệu bằng cả trái tim. Cơ sở xoa bóp bấm huyệt gia truyền của người khiếm thị tại xứ Huế, chuyên phục hồi thoái hóa cột sống, cổ vai gáy, thoát vị đĩa đệm và mất ngủ.',
    footer_hotline_zalo: 'Hotline / Zalo:',
    footer_hours: 'Giờ mở cửa: 08:30 - 23:00 hàng ngày',
    footer_single_addr_title: 'Địa Chỉ Cơ Sở Duy Nhất',
    footer_call_directions: 'Gọi Chỉ Đường: 0905 700 923',
    footer_view_maps: 'Xem Google Maps',
    footer_services_title: 'Dịch Vụ Phục Vụ',
    footer_copyright: '© 2026 Phú Thành - Massage Khiếm Thị TP. Huế. Phục vụ tận tâm, uy tín.',
    footer_branch_note: 'Cơ sở Vỹ Dạ, Huế',

    floating_top: 'Lên đầu trang',
    floating_maps: 'Chỉ Đường Google Maps',
    floating_zalo: 'Nhắn Zalo',
    floating_call: 'Gọi Ngay: 0905 700 923'
  },
  en: {
    nav_about: 'About Us',
    nav_services: 'Menu & Prices',
    nav_pricing: 'Pricing',
    nav_reviews: 'Customer Reviews',
    nav_gallery: 'Spa Gallery',
    nav_location: 'Location & Map',
    nav_blog: 'Health Blog',

    topbar_title: 'Phu Thanh Blind Massage Spa Hue',
    topbar_hours: 'Daily: 8:30 AM - 11:00 PM',
    topbar_maps: 'View on Google Maps',
    topbar_call_advice: 'Hotline: 0905 700 923',
    topbar_brand_tag: 'Blind Massage & Acupressure',
    topbar_call_btn: 'Call Now: ',
    topbar_call_now: 'Call 0905 700 923',
    topbar_branch_notice: 'Only branch: No. 2, Alley 186 Nguyen Sinh Cung, Vy Da, Hue',

    hero_tag: 'Phu Thanh — Blind Massage & Acupressure in Hue',
    hero_title_line1: 'Miraculous Hands,',
    hero_title_line2: 'Healing From The Heart',
    hero_desc: 'Skilled visually impaired therapists certified by the Blind Association & Institute of Traditional Medicine. Gentle yet deep acupressure relieving neck, shoulder & back stiffness, sciatic pain, and fatigue after sightseeing in Hue.',
    hero_only_branch: 'Only location:',
    hero_directions_btn: 'Directions',
    hero_call_book: 'Call to Book: 0905 700 923',
    hero_chat_zalo: 'Chat on Zalo / WhatsApp',
    hero_view_maps: 'Google Maps Directions',
    hero_consult_btn: 'Treatment Advice',
    hero_feat1_title: '100% Certified Blind Therapists',
    hero_feat1_desc: 'Remarkable touch sensitivity, exact pressure point targeting',
    hero_feat2_title: 'Clean Private Rooms & Warm Herbs',
    hero_feat2_desc: 'Air-conditioned rooms, 100% fresh sanitized linens, ginger foot soak',
    hero_feat3_title: 'Affordable Rates from 140,000đ',
    hero_feat3_desc: 'Transparent public pricing, no hidden fees, genuine hospitality',

    quick_tag: 'Contact Us Directly For The Best Service',
    quick_title: 'Need Advice or Room Reservation?',
    quick_desc: 'Please call or message us 15-30 minutes ahead so we can prepare your private room and fresh warm herbal foot bath.',
    quick_zalo_btn: 'Message Zalo',
    quick_call_btn: 'Call: 0905 700 923',
    quick_address_label: 'Address:',
    quick_hours_label: 'Working Hours: 08:30 - 23:00 (Open all week & holidays)',

    about_tag: 'Hue Traditional Resilience & Warmth',
    about_title_1: 'Restoring Vitality,',
    about_title_2: 'Empowering Livelihoods Through Healing Touch',
    about_desc: 'Phu Thanh Blind Massage at No. 2, Alley 186 Nguyen Sinh Cung, Vy Da, Hue is a community home of dedicated visually impaired practitioners. We deliver honest, therapeutic, and deeply restorative traditional treatments for locals and international travelers.',
    about_photo_room: 'Air-conditioned 3-Bed Treatment Room',
    about_photo_room_short: '3-Bed Room',
    about_photo_foot: 'Wooden Herbal Foot Soak Lounge',
    about_photo_foot_short: 'Foot Soak',
    about_photo_gate: 'Entrance Gate at No. 2, Alley 186 Nguyen Sinh Cung',
    about_photo_gate_short: 'Spa Gate',
    about_badge_years: 'Years Serving in Ancient Hue Capital',
    about_badge_customers: 'Satisfied & Pain-Free Customers',
    about_val1_title: '01. Exceptionally Sensitive Healing Touch',
    about_val1_desc: 'Without visual distraction, our therapists possess an extraordinary tactile sensitivity. Their fingertips detect deep muscular tension, energy blockages, and precise acupuncture meridians beneath the skin.',
    about_val2_title: '02. Certified Traditional Medicine Training',
    about_val2_desc: '100% of therapists at Phu Thanh hold formal certifications from the Blind Association and prestigious Traditional Medicine institutes, mastering musculoskeletal anatomy and trigger points.',
    about_val3_title: '03. Clean, Respectful & Private Environment',
    about_val3_desc: 'Discreet air-conditioned rooms with private zones for men, women, couples, and families. Linens and towels are freshly laundered and scented with natural lemongrass after every guest.',
    about_val4_title: '04. Transparent & Affordable Local Pricing',
    about_val4_desc: 'We serve with the pure sincerity of Hue people. Clear listed prices starting at 140,000 VND (~$5.5 USD), with complimentary warm herbal foot baths, mugwort back pillows, and hot ginger tea.',

    services_tag: 'Clear & Transparent Official Price List',
    services_title: 'Treatments & Official Menu at Phu Thanh',
    services_subtitle: 'Guaranteed 100% highly skilled visually impaired therapists. Fair pricing, honest care, and authentic Hue hospitality.',
    services_menu_title: 'SERVICE MENU',
    services_menu_badge_60: '60-MINUTE PACKAGE',
    services_menu_badge_90: '90-MINUTE PACKAGE (VIP)',
    services_pkg_60_btn: 'Book 60-Minute Package',
    services_pkg_90_btn: 'Book 90-Minute Package (VIP)',
    services_vip_badge: 'VIP Recovery',
    services_addon_tag: 'Add-on service',
    services_gift_tag: 'Complimentary gift',
    services_gift_label: 'Free Gift',
    services_card_section_title: 'Detailed Treatment Protocols',
    services_card_section_desc: 'Click on each service to discover the treatment steps and therapeutic health benefits',
    services_view_process: 'View Details',
    services_book_btn: 'Call to Reserve',
    services_price_label: 'Official Listed Price:',
    services_60m_label: '60-min session',
    services_90m_label: '90-min session',
    services_full_pkg: 'All-inclusive price:',
    services_recommended: 'Highly Recommended',

    modal_steps_title: 'Step-by-Step Treatment Procedure',
    modal_benefits_title: 'Therapeutic Health Benefits',
    modal_call_book: 'Call to Reserve Now: 0905 700 923',
    modal_close: 'Close',
    modal_gift_badge: '100% Free Complimentary Gift',

    reviews_tag: 'Genuine Feedback From Our Guests',
    reviews_title: 'What Customers Say About Phu Thanh',
    reviews_subtitle: 'Your satisfaction and relief from pain are the greatest motivation for our visually impaired team at Phu Thanh',
    reviews_rating_score: 'Average Customer Rating',
    reviews_total_count: 'Verified reviews in Hue & Google Maps',
    reviews_satisfaction: 'Customer satisfaction & return rate',
    reviews_trained: 'Certified Traditional Medicine Therapists',

    gallery_tag: 'Authentic In-Store Photos',
    gallery_title_1: 'Real Atmosphere at',
    gallery_title_2: 'Phu Thanh Spa',
    gallery_desc: '100% genuine real photos capturing the warm wooden ambiance, cozy air-conditioned private rooms, and tranquil herbal foot soak lounge at No. 2, Alley 186 Nguyen Sinh Cung, Vy Da, Hue.',
    gallery_view_large: 'Enlarge photo',
    gallery_reassure_1: 'Air-conditioned rooms, 100% freshly sanitized lemongrass-scented linens',
    gallery_reassure_2: 'Attentive welcoming, free herbal foot bath & hot Hue ginger tea',
    gallery_reassure_3: 'Facility at No. 2, Alley 186 Nguyen Sinh Cung, Vy Da, Hue',

    branch_tag: 'Only Branch Location',
    branch_title: 'Phu Thanh Blind Massage Location in Vy Da, Hue',
    branch_desc: 'Located in peaceful Vy Da ward, near Hen Islet (Cồn Hến) and famous Hue cultural attractions. Cars and motorbikes can drive straight to our gate with easy parking.',
    branch_single_location: 'Only Location in Vy Da, Hue City',
    branch_single_location_desc: 'Address: No. 2, Alley 186 Nguyen Sinh Cung, Vy Da Ward, Hue City',
    branch_hotline_advice: 'Directions & Booking Hotline: 0905 700 923',
    branch_daily_hours: 'Open daily from 08:30 AM to 11:00 PM (Including weekends & holidays)',
    branch_call_reserve: 'Call 0905 700 923 to Book',
    branch_maps_btn: 'View on Google Maps',
    branch_open_maps: 'Open location in Google Maps',
    branch_gate_caption: 'Entrance at No. 2, Alley 186 Nguyen Sinh Cung',
    branch_gate_subcaption: 'Vy Da Ward, Hue City (Near Hen Islet)',

    blog_tag: 'Oriental Medicine & Wellness Guide',
    blog_title: 'Therapeutic Knowledge & Wellness',
    blog_subtitle: 'Practical insights from experienced visually impaired practitioners to help you relieve body ache and daily stress',
    blog_read_more: 'Read more',

    consult_title: 'Quick Treatment Consultation',
    consult_subtitle: 'Tell us where you feel sore or fatigued, and our therapists will recommend the optimal therapy',
    consult_step1: '1. Select your symptoms:',
    consult_step2: '2. Duration of discomfort:',
    consult_step3: '3. Contact details:',
    consult_name: 'Your full name',
    consult_phone: 'Phone number or WhatsApp',
    consult_submit: 'Send Consultation Request',
    consult_call_direct: 'Or call our direct hotline: 0905 700 923',

    footer_brand_sub: 'Blind Massage & Acupressure — Hue City',
    footer_desc: 'Miraculous hands — Healing from the heart. Authentic traditional blind massage & acupressure clinic in Hue, relieving cervical stiffness, herniated discs, backaches and insomnia.',
    footer_hotline_zalo: 'Hotline / WhatsApp / Zalo:',
    footer_hours: 'Hours: 08:30 AM - 11:00 PM daily',
    footer_single_addr_title: 'Only Branch Location',
    footer_call_directions: 'Call for Directions: 0905 700 923',
    footer_view_maps: 'View on Google Maps',
    footer_services_title: 'Therapeutic Services',
    footer_copyright: '© 2026 Phu Thanh - Blind Massage Hue. Dedicated & trusted care.',
    footer_branch_note: 'Vy Da Ward, Hue City',

    floating_top: 'Back to top',
    floating_maps: 'Google Maps Directions',
    floating_zalo: 'Message Zalo / WhatsApp',
    floating_call: 'Call: 0905 700 923'
  }
};
