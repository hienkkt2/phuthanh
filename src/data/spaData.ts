import { Service, Branch, Specialist, PackageCombo, Review, Article } from '../types';

export const SPA_INFO = {
  name: 'PHÚ THÀNH - MASSAGE KHIẾM THỊ',
  shortName: 'Phú Thành Huế',
  tagline: 'Đôi Bàn Tay Kỳ Diệu — Trị Liệu Bằng Cả Trái Tim',
  hotline: '0905 700 923',
  phoneDirect: '0905 700 923',
  hotlineRaw: '0905700923',
  zaloUrl: 'https://zalo.me/0905700923',
  mapUrl: 'https://maps.app.goo.gl/VZXsBexqywQiCTWR7?g_st=ac',
  address: 'Nhà số 2 kiệt 186 Nguyễn Sinh Cung, phường Vỹ Dạ, TP. Huế',
  addressShort: 'Số 2 kiệt 186 Nguyễn Sinh Cung, Vỹ Dạ, Huế',
  email: 'phuthanhmassagehue@gmail.com',
  workingHours: '08:30 - 22:30 (Mở cửa tất cả các ngày trong tuần, kể cả ngày lễ tết)',
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'xoa-bop-bam-huyet',
    name: 'Xoa Bóp - Bấm Huyệt',
    category: 'body',
    durationMinutes: 60,
    price: 140000,
    price60: 140000,
    price90: 210000,
    image: '/images/phu_thanh_hero_1790648702096.jpg',
    shortDesc: 'Xoa bóp day ấn huyệt cổ truyền, đả thông kinh lạc, giải phóng điểm co cứng cơ cổ vai gáy và toàn thân.',
    description: 'Liệu trình xoa bóp day ấn huyệt Y học cổ truyền chuẩn xác của kỹ thuật viên khiếm thị. Bàn tay giàu cảm giác ấn sâu vào các huyệt then chốt (Phong Trì, Kiên Tỉnh, Đại Chùy, Thận Du), giải phóng chèn ép rễ thần kinh, dứt hẳn cơn đau mỏi cơ cổ vai gáy, lưng eo và phục hồi sự dẻo dai.',
    steps: [
      'Ngâm chân nước ấm muối hạt và gừng tươi giải độc khí huyết',
      'Thăm khám độ căng cứng của các bó cơ thang và cơ sống lưng',
      'Xoa bóp làm ấm cơ thể bằng dầu thảo dược thiên nhiên',
      'Day ấn huyệt đả thông các điểm xoắn cơ sâu (Trigger points)',
      'Miết cơ giải phóng chèn ép dây thần kinh chạy xuống bả vai và ngón tay',
      'Vận động kéo giãn nhẹ nhàng các khớp xương an toàn',
      'Thưởng thức tách trà gừng đường phèn ấm nóng sau buổi xoa bóp'
    ],
    benefits: [
      'Cắt cơn co cứng cơ cổ vai gáy và lưng eo ngay buổi đầu',
      'Tăng lưu lượng máu lên não, giảm nhức đầu chóng mặt',
      'Giảm tê bì cánh tay và các đầu ngón tay rõ rệt',
      'Giúp đêm về dễ ngủ, ngủ sâu và ngon giấc hơn'
    ],
    isHot: true,
  },
  {
    id: 'xoa-bop-bam-huyet-giac-hoi',
    name: 'Xoa Bóp - Bấm Huyệt - Giác Hơi',
    category: 'body',
    durationMinutes: 60,
    price: 170000,
    price60: 170000,
    price90: 240000,
    image: '/images/spa_interior_ambiance_1790586975263.jpg',
    shortDesc: 'Kết hợp xoa bóp bấm huyệt và giác hơi trục xuất hàn ẩm, phong hàn ứ trệ, giải cảm nhẹ người.',
    description: 'Sự kết hợp hoàn hảo giữa kỹ thuật xoa bóp bấm huyệt trị liệu và phương pháp giác hơi truyền thống. Lực hút giác hơi nhẹ nhàng dọc các đường kinh bàng quang giúp trục xuất phong hàn, giải cảm, hút sạch độc tố hàn ẩm tích tụ lâu ngày dưới da, hết hẳn ê ẩm sống lưng.',
    steps: [
      'Khởi động ấn huyệt mở thông các đường kinh lạc toàn thân',
      'Thoa tinh dầu thảo mộc làm trơn và làm ấm vùng lưng',
      'Massage miết cơ sâu giải tỏa đau mỏi cột sống thắt lưng',
      'Giác hơi an toàn dọc hai bên cột sống lưng',
      'Lau sạch và thoa dầu tràm ấm giữ nhiệt sau giác hơi',
      'Bấm huyệt đầu cổ gáy thư thái tinh thần',
      'Thưởng thức trà thảo mộc ấm nóng'
    ],
    benefits: [
      'Trục sạch khí lạnh, giải cảm hàn, cảm cúm, ớn lạnh sống lưng',
      'Giảm đau nhức cơ lưng tức thì sau những chuyến đi mưa gió',
      'Cơ thể thông thoáng nhẹ nhõm, da dẻ hồng hào trở lại'
    ],
    isHot: false,
  },
  {
    id: 'xoa-bop-bam-huyet-da-nong',
    name: 'Xoa Bóp - Bấm Huyệt - Đá Nóng',
    category: 'body',
    durationMinutes: 60,
    price: 170000,
    price60: 170000,
    price90: 240000,
    image: '/images/spa_service_massage_1790586932588.jpg',
    shortDesc: 'Ấn huyệt đầm tay kết hợp hơi ấm đá bazan núi lửa truyền nhiệt sâu xua tan căng cơ mệt mỏi.',
    description: 'Sự kết hợp giữa lực tay đầm chắc, tinh tế của người khiếm thị cùng sức nóng tự nhiên từ đá bazan ủ ấm. Năng lượng nhiệt len lỏi sâu vào các mô cơ dày ở lưng, eo, mông và bắp chân, giúp giãn cơ vân, trục hàn khí và phục hồi toàn bộ hệ cơ xương khớp.',
    steps: [
      'Khởi động ấn huyệt toàn thân qua khăn khô mở thông kinh mạch',
      'Thoa tinh dầu quế - sả chanh nguyên chất tự nhiên làm ấm cơ thể',
      'Massage miết cơ sâu vùng lưng, thắt lưng và vùng hông eo',
      'Trượt đá nóng bazan dọc sống lưng và đặt đá giữ nhiệt tại các huyệt vị',
      'Bấm huyệt chân, đùi, giải mỏi cơ bắp chân do đi lại nhiều',
      'Massage bấm huyệt đầu cổ gáy đánh thức năng lượng cơ thể',
      'Uống trà gừng ấm nóng điều hòa thân nhiệt'
    ],
    benefits: [
      'Đánh tan mọi ứ trệ, đau nhức toàn thân do lao động mệt mỏi',
      'Nhiệt đá bazan giúp giãn cơ sâu, tăng cường tuần hoàn máu',
      'Tinh thần sảng khoái, nhẹ nhõm như vừa trút bỏ gánh nặng'
    ],
    isHot: true,
  },
  {
    id: 'xoa-bop-bam-huyet-giac-hoi-da-nong',
    name: 'Xoa Bóp - Bấm Huyệt - Giác Hơi - Đá Nóng',
    category: 'body',
    durationMinutes: 60,
    price: 200000,
    price60: 200000,
    price90: 270000,
    image: '/images/phu_thanh_hero_1790648702096.jpg',
    shortDesc: 'Gói chăm sóc toàn diện nhất: Đủ bộ Bấm Huyệt + Giác Hơi + Đá Nóng phục hồi tối đa thể lực.',
    description: 'Liệu trình cao cấp nhất được yêu thích tại Phú Thành. Hội tụ đủ 3 phương pháp trị liệu tinh hoa Đông y: Xoa bóp bấm huyệt khai thông kinh lạc, Giác hơi giải cảm trục độc hàn ẩm, và Đá nóng bazan truyền nhiệt ấm sâu. Xua tan triệt để mọi mệt mỏi đau nhức toàn thân.',
    steps: [
      'Ngâm chân thảo dược nước ấm muối gừng kích hoạt huyệt Dũng Tuyền',
      'Xoa bóp bấm huyệt chuyên sâu toàn bộ vùng lưng, cổ vai gáy và chân tay',
      'Giác hơi truyền thống dọc hai bên dải kinh bàng quang',
      'Trượt đá nóng bazan và ủ ấm huyệt Thận Du, Mệnh Môn',
      'Massage bấm huyệt đầu và thái dương giảm đau đầu mất ngủ',
      'Uống trà thảo mộc gừng quế ấm nóng'
    ],
    benefits: [
      'Hiệu quả phục hồi toàn diện, người nhẹ bẫng và tràn đầy sinh lực',
      'Dứt sạch cơn đau thắt lưng, co cứng cổ vai gáy',
      'Ngủ sâu giấc liền mạch từ đêm tới sáng'
    ],
    isHot: true,
  },
  {
    id: 'massage-chan-ngam-chan-thao-duoc',
    name: 'Massage Chân - Ngâm Chân Thảo Dược',
    category: 'headspa',
    durationMinutes: 60,
    price: 170000,
    price60: 170000,
    price90: 240000,
    image: '/images/phu_thanh_real_footsoak_1790649584369.jpg',
    shortDesc: 'Thùng gỗ ngâm nước lá thảo mộc đun ấm, bấm huyệt Dũng Tuyền kích hoạt kinh mạch, bổ thận ấm chân.',
    description: 'Bàn chân được xem như "trái tim thứ hai" của cơ thể, nơi hội tụ hơn 60 huyệt đạo liên hệ mật thiết với các cơ quan nội tạng. Nước lá thơm ngâm chân kết hợp bấm huyệt chính xác giúp bạn ngủ sâu giấc, chân ấm áp và giảm nhức mỏi xương khớp sau ngày dài đi bộ tham quan cố đô.',
    steps: [
      'Ngâm chân thùng gỗ với nước lá thảo dược gừng quế đun ấm',
      'Rửa sạch và chà gót chân bằng đá tự nhiên',
      'Xoa bóp bàn chân bằng tinh dầu tràm quế ấm làm mềm gân cốt',
      'Day ấn huyệt Dũng Tuyền kích hoạt kinh Thận và giải độc cơ thể',
      'Tác động lên các vùng phản xạ: Dạ dày, Gan, Thận, Tim mạch, Mắt',
      'Bấm huyệt Tam Âm Giao, Túc Tam Lý bồi bổ nguyên khí',
      'Vỗ đập thư giãn cơ bắp chân và lau khô chân bằng khăn ấm sạch'
    ],
    benefits: [
      'Cải thiện tức thì chứng lạnh chân, tê buốt bàn chân',
      'Giúp ngủ sâu một mạch tới sáng, không còn trằn trọc',
      'Giảm mỏi gối, nhức xương khớp chân do đi bộ hoặc làm việc đứng lâu'
    ],
    isHot: true,
  },
  {
    id: 'xong-ngai-cuu',
    name: 'Xông Ngải Cứu',
    category: 'whitening',
    durationMinutes: 30,
    price: 40000,
    price60: 40000,
    price90: 40000,
    isAddon: true,
    image: '/images/spa_interior_ambiance_1790586975263.jpg',
    shortDesc: 'Dịch vụ thêm: Xông ấm ngải cứu tươi lên các huyệt vị lạnh, trục hàn khí, giảm đau nhức xương khớp.',
    description: 'Phương pháp xông hơ ngải cứu thuần túy Đông y. Hơi ấm thuần dương của ngải cứu thấm sâu vào kinh lạc, tán hàn trừ thấp, ôn thông khí huyết, đặc biệt hiệu quả cho người bị đau nhức xương khớp, lạnh bụng, đau bụng kinh hoặc cơ thể bị nhiễm lạnh.',
    steps: [
      'Chuẩn bị nồi thuốc ngải cứu tươi sao ấm hoặc điếu ngải chuyên dụng',
      'Thăm khám các vùng huyệt đạo bị hàn lạnh, co cứng',
      'Xông hơ ngải cứu giữ nhiệt đều đặn, không gây bỏng rát',
      'Lau khô mồ hôi và uống 1 cốc nước gừng ấm'
    ],
    benefits: [
      'Trục hàn ẩm tích tụ sâu trong kinh lạc và xương khớp',
      'Làm ấm cơ thể, tăng cường sinh khí và giảm nhức mỏi',
      'Giá bình dân chỉ 40.000đ, dễ dàng kết hợp cùng mọi gói xoa bóp'
    ],
  },
  {
    id: 'giac-hoi',
    name: 'Giác Hơi',
    category: 'whitening',
    durationMinutes: 30,
    price: 40000,
    price60: 40000,
    price90: 40000,
    isAddon: true,
    image: '/images/spa_service_headspa_1790586950795.jpg',
    shortDesc: 'Dịch vụ thêm: Giác hơi truyền thống hút độc tố, đả thông ứ trệ, giải cảm gió nhanh chóng.',
    description: 'Giác hơi khô truyền thống được thực hiện khéo léo bởi kỹ thuật viên khiếm thị. Áp suất âm vừa vặn giúp hút sạch các huyết ứ và khí trệ độc hại dưới da, kích thích lưu thông máu và giải tỏa cơn nhức mỏi ê ẩm lưng.',
    steps: [
      'Làm ấm và thoa dầu tràm thảo dược lên toàn bộ vùng lưng',
      'Đặt cốc giác hơi nhẹ nhàng dọc các huyệt đạo kinh Bàng quang',
      'Giữ cốc giác hơi trong thời gian tiêu chuẩn',
      'Tháo cốc nhẹ nhàng và thoa dầu tràm giữ ấm'
    ],
    benefits: [
      'Giải cảm phong hàn, hết ớn lạnh dọc sống lưng',
      'Hút độc tố và giải phóng co cơ lưng nhanh chóng',
      'Giá chỉ 40.000đ làm thêm tiện lợi'
    ],
  }
];

export const OFFICIAL_MENU_BOARD = {
  title: 'Phú Thành - Massage Khiếm Thị',
  subtitle: 'MENU BẢNG GIÁ NIÊM YẾT',
  packages: [
    {
      duration: 'GÓI 60 PHÚT',
      durationMinutes: 60,
      badge: 'Thư Giãn Tiêu Chuẩn',
      items: [
        { name: 'Xoa Bóp - Bấm Huyệt', price: 140000, serviceId: 'xoa-bop-bam-huyet' },
        { name: 'Xoa Bóp - Bấm Huyệt - Giác Hơi', price: 170000, serviceId: 'xoa-bop-bam-huyet-giac-hoi' },
        { name: 'Xoa Bóp - Bấm Huyệt - Đá Nóng', price: 170000, serviceId: 'xoa-bop-bam-huyet-da-nong' },
        { name: 'Xoa Bóp - Bấm Huyệt - Giác Hơi - Đá Nóng', price: 200000, serviceId: 'xoa-bop-bam-huyet-giac-hoi-da-nong', isHot: true },
        { name: 'Massage Chân - Ngâm Chân Thảo Dược', price: 170000, serviceId: 'massage-chan-ngam-chan-thao-duoc' },
        { name: 'Xông Ngải Cứu', price: 40000, isAddon: true, serviceId: 'xong-ngai-cuu' },
        { name: 'Giác Hơi', price: 40000, isAddon: true, serviceId: 'giac-hoi' },
      ]
    },
    {
      duration: 'GÓI 90 PHÚT',
      durationMinutes: 90,
      badge: 'Chuyên Sâu Phục Hồi (VIP)',
      items: [
        { name: 'Xoa Bóp - Bấm Huyệt', price: 210000, serviceId: 'xoa-bop-bam-huyet' },
        { name: 'Xoa Bóp - Bấm Huyệt - Giác Hơi', price: 240000, serviceId: 'xoa-bop-bam-huyet-giac-hoi' },
        { name: 'Xoa Bóp - Bấm Huyệt - Đá Nóng', price: 240000, serviceId: 'xoa-bop-bam-huyet-da-nong' },
        { name: 'Xoa Bóp - Bấm Huyệt - Giác Hơi - Đá Nóng', price: 270000, serviceId: 'xoa-bop-bam-huyet-giac-hoi-da-nong', isHot: true },
        { name: 'Massage Chân - Ngâm Chân Thảo Dược', price: 240000, serviceId: 'massage-chan-ngam-chan-thao-duoc' },
        { name: 'Xông Ngải Cứu', price: 40000, isAddon: true, serviceId: 'xong-ngai-cuu' },
        { name: 'Giác Hơi', price: 40000, isAddon: true, serviceId: 'giac-hoi' },
      ]
    }
  ]
};

export const PACKAGES_DATA: PackageCombo[] = [
  {
    id: 'pkg-goi-60-phut',
    title: 'Gói Trị Liệu 60 Phút Tiêu Chuẩn',
    subtitle: 'Lựa chọn nhanh chóng — Giải tỏa đau mỏi cổ vai gáy & phục hồi năng lượng',
    duration: '60 Phút',
    price: 140000,
    originalPrice: 180000,
    features: [
      'Xoa Bóp - Bấm Huyệt: 140.000đ',
      'Xoa Bóp - Bấm Huyệt - Giác Hơi: 170.000đ',
      'Xoa Bóp - Bấm Huyệt - Đá Nóng: 170.000đ',
      'Xoa Bóp - Bấm Huyệt - Giác Hơi - Đá Nóng: 200.000đ',
      'Massage Chân - Ngâm Chân Thảo Dược: 170.000đ',
      'Miễn phí nước ngâm chân gừng muối ấm & trà gừng',
      'Phòng máy lạnh sạch sẽ, khăn ga thay mới 100%'
    ],
    isPopular: false
  },
  {
    id: 'pkg-goi-90-phut',
    title: 'Gói Trị Liệu 90 Phút Chuyên Sâu (VIP)',
    subtitle: 'Được yêu thích nhất — Thời gian vàng đả thông toàn bộ kinh lạc, giãn sâu từng thớ cơ',
    duration: '90 Phút',
    price: 210000,
    originalPrice: 280000,
    features: [
      'Xoa Bóp - Bấm Huyệt chuyên sâu: 210.000đ',
      'Xoa Bóp - Bấm Huyệt - Giác Hơi: 240.000đ',
      'Xoa Bóp - Bấm Huyệt - Đá Nóng: 240.000đ',
      'Xoa Bóp - Bấm Huyệt - Giác Hơi - Đá Nóng: 270.000đ',
      'Massage Chân - Ngâm Chân Thảo Dược: 240.000đ',
      '90 phút chăm sóc toàn diện từ đầu tới ngón chân',
      'Tặng trà thảo mộc & phục vụ tận tâm chu đáo'
    ],
    isPopular: true
  },
  {
    id: 'pkg-dich-vu-them',
    title: 'Dịch Vụ Bổ Sung & Dưỡng Chân',
    subtitle: 'Gia tăng hiệu quả trục hàn ẩm, ấm chân bổ thận, nhẹ nhõm toàn thân',
    duration: 'Linh hoạt',
    price: 40000,
    originalPrice: 60000,
    features: [
      'Xông Ngải Cứu ấm kinh mạch: 40.000đ',
      'Giác Hơi trục độc tố, hút phong hàn: 40.000đ',
      'Massage Chân - Ngâm Chân Thảo Dược: 170.000đ (60p) | 240.000đ (90p)',
      'Thùng gỗ ngâm chân nước gừng ấm nóng gia truyền',
      'Dễ dàng kết hợp cùng mọi gói xoa bóp toàn thân'
    ],
    isPopular: false
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    customerName: 'Anh Nguyễn Văn Hùng (Cán bộ tại TP. Huế)',
    role: 'Khách hàng quen thuộc 2 năm',
    rating: 5,
    serviceUsed: 'Bấm Huyệt Trị Liệu Cổ Vai Gáy & Thắt Lưng',
    comment: 'Tôi hay bị đau thắt lưng và mỏi cổ gáy vì ngồi văn phòng nhiều. Tìm đến cơ sở Phú Thành ở kiệt 186 Nguyễn Sinh Cung thấy phòng ốc rất sạch, thơm mùi gừng sả. Các anh chị khiếm thị bấm đúng huyệt, lực rất đầm và nhiệt tình. Giá cả rất phải chăng, không hề có tình trạng vòi vĩnh tiền tip.',
    date: '3 ngày trước'
  },
  {
    id: 'rev-2',
    customerName: 'Chị Lê Thị Thanh Thảo (Du khách Hà Nội)',
    role: 'Khách du lịch ghé thăm Huế',
    rating: 5,
    serviceUsed: 'Combo Phục Hồi Sinh Lực Toàn Thân VIP',
    comment: 'Đi bộ tham quan Đại Nội và các lăng tẩm cả ngày chân mỏi rã rời, được bạn người Huế chỉ tới cơ sở Phú Thành ở Vỹ Dạ. Bấm huyệt chân và đá nóng xong người nhẹ bẫng, tối về ngủ một giấc ngon lành. Gọi điện 0905 700 923 trước 30 phút là các bạn chuẩn bị sẵn sàng rất chu đáo.',
    date: '1 tuần trước'
  },
  {
    id: 'rev-3',
    customerName: 'Bác Trần Hữu Đức (65 tuổi, Vỹ Dạ, Huế)',
    role: 'Người dân địa phương Vỹ Dạ',
    rating: 5,
    serviceUsed: 'Ngâm Chân Thảo Dược & Bấm Huyệt Dũng Tuyền',
    comment: 'Tuổi già chân hay bị lạnh và khó ngủ. Cứ cách 3 ngày tôi lại ghé Phú Thành ngâm chân và nhờ thầy Thành bấm huyệt. Người khiếm thị ở đây ăn nói nhỏ nhẹ, thật thà, làm việc có tâm. Chúc cơ sở luôn đông khách!',
    date: '2 tuần trước'
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    title: 'Tại Sao Bàn Tay Người Khiếm Thị Lại Bấm Huyệt Chuẩn Xác Đến Kỳ Lạ?',
    category: 'Góc Nhìn Chuyên Môn',
    date: '20 Tháng 9, 2026',
    readTime: '4 phút đọc',
    excerpt: 'Khi thị giác không còn là kênh tiếp nhận chính, xúc giác của người khiếm thị phát triển vượt bậc. Họ cảm nhận được từng bó cơ co rút và điểm huyệt đạo sâu dưới da bằng trực giác nhạy bén.',
    image: '/images/phu_thanh_hero_1790648702096.jpg',
    content: [
      'Nhiều nghiên cứu y học chỉ ra rằng ở người khiếm thị, vùng não xử lý xúc giác được tăng cường mạnh mẽ. Đôi bàn tay của họ giống như một máy quét sinh học cực kỳ tinh vi.',
      'Khi lướt nhẹ ngón tay trên sống lưng, kỹ thuật viên có thể phát hiện ngay vị trí bị bó cơ, nơi tắc nghẽn kinh lạc hay đốt sống bị chệch nhẹ mà mắt thường khó thấy.',
      'Kết hợp với quá trình học tập bài bản hàng ngàn giờ tại các trường Y học cổ truyền, kỹ thuật xoa bóp bấm huyệt của người khiếm thị đem lại hiệu quả trị liệu sâu và an toàn vượt trội.'
    ]
  },
  {
    id: 'art-2',
    title: 'Huyệt Dũng Tuyền Dưới Lòng Bàn Chân: "Suối Nguồn" Sinh Lực Của Cơ Thể',
    category: 'Cẩm Nang Đông Y',
    date: '12 Tháng 9, 2026',
    readTime: '5 phút đọc',
    excerpt: 'Bấm huyệt Dũng Tuyền kết hợp ngâm chân thảo dược mỗi tối giúp hạ hỏa, trị mất ngủ kinh niên và tăng cường chức năng thận khí.',
    image: '/images/phu_thanh_foot_herbal_1790588475271.jpg',
    content: [
      'Huyệt Dũng Tuyền nằm ở điểm lõm giữa 1/3 trước lòng bàn chân, là huyệt đầu tiên của kinh Thận. Chữ "Dũng" là vọt lên, "Tuyền" là suối nước, ngụ ý sinh khí từ đây tuôn trào đi khắp cơ thể.',
      'Ngâm chân bằng nước lá thuốc ấm kết hợp day ấn huyệt Dũng Tuyền 10 - 15 phút giúp kéo khí nóng từ trên đầu hạ xuống dưới (dẫn hỏa quy nguyên), giúp làm ấm cơ thể và đưa não bộ vào giấc ngủ êm đềm.',
      'Tại Phú Thành, kỹ thuật viên sẽ dùng gốc ngón tay cái kết hợp cao quế day tròn đều đặn theo chiều kim đồng hồ, giúp giải tỏa mỏi mệt tức thì.'
    ]
  },
  {
    id: 'art-3',
    title: 'Cách Nhận Biết Thoái Hóa Đốt Sống Cổ Và Phương Pháp Bấm Huyệt Đông Y',
    category: 'Sức Khỏe Cơ Xương Khớp',
    date: '02 Tháng 9, 2026',
    readTime: '5 phút đọc',
    excerpt: 'Dấu hiệu mỏi cổ lan ra bả vai, tê tay và cách xoa bóp bấm huyệt giúp đả thông khí huyết không cần dùng thuốc giảm đau.',
    image: '/images/spa_service_massage_1790586932588.jpg',
    content: [
      'Đau mỏi cổ gáy lâu ngày nếu không được giải tỏa sẽ dẫn đến vôi hóa đốt sống cổ C4-C5-C6 và chèn ép động mạch đốt sống thân nền, gây thiểu năng tuần hoàn não.',
      'Xoa bóp bấm huyệt các huyệt Phong Trì, Phong Phủ, Kiên Tỉnh giúp làm mềm cơ thang, giãn cơ ức đòn chũm và tăng tưới máu cho não bộ.',
      'Định kỳ mỗi tuần 1-2 lần bấm huyệt tại cơ sở Phú Thành sẽ giúp duy trì sự linh hoạt dẻo dai của cột sống cổ.'
    ]
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: 'case-1',
    title: 'Phục Hồi Cổ Vai Gáy Co Cứng & Hết Tê Bì Cánh Tay',
    customer: 'Anh Minh Tuấn (42 tuổi, Vỹ Dạ, Huế)',
    treatment: 'Phác đồ Bấm huyệt Cổ Vai Gáy + Đắp Ngải Cứu (3 buổi)',
    beforeDesc: 'Cổ quay sang hai bên bị đau nhói, bả vai căng cứng như khúc gỗ, đêm ngủ hay bị tê cứng các ngón tay.',
    afterDesc: 'Cơ vai mềm hẳn, quay cổ linh hoạt 180 độ không còn đau nhức, hết hoàn toàn cảm giác tê bàn tay khi ngủ.',
    beforeImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'case-2',
    title: 'Giải Tỏa Đau Thắt Lưng Cột Sống & Cải Thiện Giấc Ngủ',
    customer: 'Bác Quang Thắng (62 tuổi, TP. Huế)',
    treatment: 'Liệu trình Massage Bấm Huyệt Đá Nóng + Ngâm Chân Thuốc Bắc',
    beforeDesc: 'Đau ê ẩm thắt lưng dưới khó cúi xuống, mất ngủ nhiều năm liền, mỗi đêm chỉ ngủ chập chờn 2-3 tiếng.',
    afterDesc: 'Lưng nhẹ bẫng, đi lại cúi người thoải mái. Đặc biệt ngủ sâu giấc liền 6-7 tiếng, thức dậy người tỉnh táo khỏe khoắn.',
    beforeImg: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=80',
    afterImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80',
  }
];
