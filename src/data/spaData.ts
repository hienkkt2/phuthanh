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
    nameEn: 'Traditional Acupressure & Body Massage',
    category: 'body',
    durationMinutes: 60,
    price: 140000,
    price60: 140000,
    price90: 210000,
    image: '/images/phu_thanh_hero_1790648702096.jpg',
    shortDesc: 'Xoa bóp day ấn huyệt cổ truyền, đả thông kinh lạc, giải phóng điểm co cứng cơ cổ vai gáy và toàn thân.',
    shortDescEn: 'Traditional acupressure targeting deep trigger points, unblocking meridians, and relieving neck, shoulder and back stiffness.',
    description: 'Liệu trình xoa bóp day ấn huyệt Y học cổ truyền chuẩn xác của kỹ thuật viên khiếm thị. Bàn tay giàu cảm giác ấn sâu vào các huyệt then chốt (Phong Trì, Kiên Tỉnh, Đại Chùy, Thận Du), giải phóng chèn ép rễ thần kinh, dứt hẳn cơn đau mỏi cơ cổ vai gáy, lưng eo và phục hồi sự dẻo dai.',
    descriptionEn: 'Authentic Eastern acupressure treatment performed by visually impaired masters. With heightened tactile perception, their hands accurately locate and release trigger points (Fengchi, Jianjing, Dazhui, Shenshu), freeing nerve compression, eliminating chronic neck, shoulder, and back tension.',
    steps: [
      'Ngâm chân nước ấm muối hạt và gừng tươi giải độc khí huyết',
      'Thăm khám độ căng cứng của các bó cơ thang và cơ sống lưng',
      'Xoa bóp làm ấm cơ thể bằng dầu thảo dược thiên nhiên',
      'Day ấn huyệt đả thông các điểm xoắn cơ sâu (Trigger points)',
      'Miết cơ giải phóng chèn ép dây thần kinh chạy xuống bả vai và ngón tay',
      'Vận động kéo giãn nhẹ nhàng các khớp xương an toàn',
      'Thưởng thức tách trà gừng đường phèn ấm nóng sau buổi xoa bóp'
    ],
    stepsEn: [
      'Warm herbal foot soak with sea salt and fresh ginger to stimulate circulation',
      'Gentle palpation to assess muscle tightness and tension along spinal muscles',
      'Full body warm-up with pure natural therapeutic essential oils',
      'Deep acupressure targeting trigger points and unblocking energy channels',
      'Long gliding strokes to relieve nerve impingement radiating down shoulders and arms',
      'Gentle passive assisted stretching of joints and limbs',
      'Complimentary hot ginger tea and rest after treatment'
    ],
    benefits: [
      'Cắt cơn co cứng cơ cổ vai gáy và lưng eo ngay buổi đầu',
      'Tăng lưu lượng máu lên não, giảm nhức đầu chóng mặt',
      'Giảm tê bì cánh tay và các đầu ngón tay rõ rệt',
      'Giúp đêm về dễ ngủ, ngủ sâu và ngon giấc hơn'
    ],
    benefitsEn: [
      'Immediate relief from stiff neck, frozen shoulder, and lower back aches',
      'Increases blood circulation to the brain, relieving tension headaches and dizziness',
      'Significantly reduces numbness in arms, hands, and fingertips',
      'Promotes deep, restorative, uninterrupted night sleep'
    ],
    isHot: true,
  },
  {
    id: 'xoa-bop-bam-huyet-giac-hoi',
    name: 'Xoa Bóp - Bấm Huyệt - Giác Hơi',
    nameEn: 'Acupressure & Bamboo Cupping Therapy',
    category: 'body',
    durationMinutes: 60,
    price: 170000,
    price60: 170000,
    price90: 240000,
    image: '/images/spa_interior_ambiance_1790586975263.jpg',
    shortDesc: 'Kết hợp xoa bóp bấm huyệt và giác hơi bằng ống tre truyền thống trục xuất hàn ẩm, phong hàn ứ trệ, giải cảm nhẹ người.',
    shortDescEn: 'Synergy of full body acupressure and traditional natural bamboo cupping to dispel damp cold, relieve aches, and detoxify.',
    description: 'Sự kết hợp hoàn hảo giữa kỹ thuật xoa bóp bấm huyệt trị liệu và phương pháp giác hơi bằng ống tre thiên nhiên cổ truyền. Lực hút từ ống tre đun nước thảo mộc êm dịu bám dọc các đường kinh bàng quang giúp trục xuất phong hàn, giải cảm, hút sạch độc tố hàn ẩm tích tụ lâu ngày dưới da, hết hẳn ê ẩm sống lưng.',
    descriptionEn: 'The perfect combination of therapeutic acupressure and ancient natural bamboo cupping boiled in medicinal herbs. Gentle natural suction along the urinary bladder meridians expels deep chill, relieves cold symptoms, and eliminates accumulated stagnant toxins.',
    steps: [
      'Khởi động ấn huyệt mở thông các đường kinh lạc toàn thân',
      'Thoa tinh dầu thảo mộc làm trơn và làm ấm vùng lưng',
      'Massage miết cơ sâu giải tỏa đau mỏi cột sống thắt lưng',
      'Giác hơi bằng ống tre thiên nhiên an toàn dọc hai bên cột sống lưng',
      'Lau sạch và thoa dầu tràm ấm giữ nhiệt sau giác hơi',
      'Bấm huyệt đầu cổ gáy thư thái tinh thần',
      'Thưởng thức trà thảo mộc ấm nóng'
    ],
    stepsEn: [
      'Initial acupressure to awaken and open the body energy meridians',
      'Application of warm herbal oil to soothe and lubricate the back',
      'Deep tissue massage along spinal muscles and lumbar region',
      'Safe natural bamboo cupping placed along both sides of the spine',
      'Cleansing and warming cajuput oil massage to seal in warmth',
      'Relaxing head, neck and scalp acupressure',
      'Enjoy hot organic herbal tea'
    ],
    benefits: [
      'Giác hơi bằng ống tre thiên nhiên êm dịu, không gây bỏng rát hay đau da',
      'Trục sạch khí lạnh, giải cảm hàn, cảm cúm, ớn lạnh sống lưng',
      'Giảm đau nhức cơ lưng tức thì sau những chuyến đi mưa gió',
      'Cơ thể thông thoáng nhẹ nhõm, da dẻ hồng hào trở lại'
    ],
    benefitsEn: [
      'Natural bamboo suction is gentle, comfortable, and prevents skin burns',
      'Expels deep-seated chill, relieves fatigue, flu symptoms, and spinal chills',
      'Instant relief for sore back muscles after outdoor travel in Hue',
      'Leaves the body light, refreshed, and revitalized'
    ],
    isHot: false,
  },
  {
    id: 'xoa-bop-bam-huyet-da-nong',
    name: 'Xoa Bóp - Bấm Huyệt - Đá Nóng',
    nameEn: 'Acupressure & Volcanic Hot Stone Massage',
    category: 'body',
    durationMinutes: 60,
    price: 170000,
    price60: 170000,
    price90: 240000,
    image: '/images/spa_service_massage_1790586932588.jpg',
    shortDesc: 'Ấn huyệt đầm tay kết hợp hơi ấm đá bazan núi lửa truyền nhiệt sâu xua tan căng cơ mệt mỏi.',
    shortDescEn: 'Firm blind acupressure combined with deep-penetrating warmth from volcanic basalt stones to melt muscular tension.',
    description: 'Sự kết hợp giữa lực tay đầm chắc, tinh tế của người khiếm thị cùng sức nóng tự nhiên từ đá bazan ủ ấm. Năng lượng nhiệt len lỏi sâu vào các mô cơ dày ở lưng, eo, mông và bắp chân, giúp giãn cơ vân, trục hàn khí và phục hồi toàn bộ hệ cơ xương khớp.',
    descriptionEn: 'Unites the delicate, grounded pressure of visually impaired therapists with the therapeutic heat of volcanic basalt stones. Thermal energy penetrates deep into dense muscle tissues across the back, waist, hips, and calves, melting tension and improving vital circulation.',
    steps: [
      'Khởi động ấn huyệt toàn thân qua khăn khô mở thông kinh mạch',
      'Thoa tinh dầu quế - sả chanh nguyên chất tự nhiên làm ấm cơ thể',
      'Massage miết cơ sâu vùng lưng, thắt lưng và vùng hông eo',
      'Trượt đá nóng bazan dọc sống lưng và đặt đá giữ nhiệt tại các huyệt vị',
      'Bấm huyệt chân, đùi, giải mỏi cơ bắp chân do đi lại nhiều',
      'Massage bấm huyệt đầu cổ gáy đánh thức năng lượng cơ thể',
      'Uống trà gừng ấm nóng điều hòa thân nhiệt'
    ],
    stepsEn: [
      'Dry towel body acupressure to open meridians and release initial stiffness',
      'Warm application of pure natural cinnamon and lemongrass essential oils',
      'Deep gliding strokes along back, lower lumbar, and hips',
      'Gliding smooth volcanic basalt stones and placing stationary stones on key chakra points',
      'Leg and calf massage to ease fatigue from walking and sightseeing',
      'Head, neck, and crown acupressure to awaken body energy',
      'Hot ginger tea to harmonize internal body temperature'
    ],
    benefits: [
      'Đánh tan mọi ứ trệ, đau nhức toàn thân do lao động mệt mỏi',
      'Nhiệt đá bazan giúp giãn cơ sâu, tăng cường tuần hoàn máu',
      'Tinh thần sảng khoái, nhẹ nhõm như vừa trút bỏ gánh nặng'
    ],
    benefitsEn: [
      'Dissolves persistent stiffness, chronic aches, and body exhaustion',
      'Volcanic mineral heat promotes deep muscle relaxation and blood flow',
      'Leaves mind and spirit completely calm, refreshed, and restored'
    ],
    isHot: true,
  },
  {
    id: 'xoa-bop-bam-huyet-giac-hoi-da-nong',
    name: 'Xoa Bóp - Bấm Huyệt - Giác Hơi - Đá Nóng',
    nameEn: 'Full Body Acupressure + Bamboo Cupping + Hot Stone (VIP)',
    category: 'body',
    durationMinutes: 60,
    price: 200000,
    price60: 200000,
    price90: 270000,
    image: '/images/phu_thanh_hero_1790648702096.jpg',
    shortDesc: 'Gói chăm sóc toàn diện nhất: Đủ bộ Bấm Huyệt + Giác Hơi Ống Tre + Đá Nóng phục hồi tối đa thể lực.',
    shortDescEn: 'The ultimate restorative package: Complete Acupressure + Bamboo Cupping + Volcanic Hot Stone for maximum wellness.',
    description: 'Liệu trình cao cấp nhất được yêu thích tại Phú Thành. Hội tụ đủ 3 phương pháp trị liệu tinh hoa Đông y: Xoa bóp bấm huyệt khai thông kinh lạc, Giác hơi bằng ống tre giải cảm trục độc hàn ẩm, và Đá nóng bazan truyền nhiệt ấm sâu. Xua tan triệt để mọi mệt mỏi đau nhức toàn thân.',
    descriptionEn: 'The most popular premium treatment at Phu Thanh. Combines all 3 pinnacle Eastern therapies: restorative acupressure to open energy pathways, bamboo cupping to dispel wind-chill, and warm volcanic stones to deeply relax dense muscle layers.',
    steps: [
      'Ngâm chân thảo dược nước ấm muối gừng kích hoạt huyệt Dũng Tuyền',
      'Xoa bóp bấm huyệt chuyên sâu toàn bộ vùng lưng, cổ vai gáy và chân tay',
      'Giác hơi bằng ống tre thiên nhiên dọc hai bên dải kinh bàng quang',
      'Trượt đá nóng bazan và ủ ấm huyệt Thận Du, Mệnh Môn',
      'Massage bấm huyệt đầu và thái dương giảm đau đầu mất ngủ',
      'Uống trà thảo mộc gừng quế ấm nóng'
    ],
    stepsEn: [
      'Warm herbal foot soak with sea salt and fresh ginger to awaken Yongquan points',
      'Deep intensive acupressure for entire back, neck, shoulders, arms, and legs',
      'Natural bamboo cupping along the urinary bladder meridians',
      'Volcanic basalt hot stone gliding and warm placement on Mingmen and Shenshu points',
      'Head, temple, and scalp acupressure relieving tension and promoting restful sleep',
      'Restoration with hot cinnamon-ginger herbal tea'
    ],
    benefits: [
      'Hiệu quả phục hồi toàn diện, người nhẹ bẫng và tràn đầy sinh lực',
      'Dứt sạch cơn đau thắt lưng, co cứng cổ vai gáy',
      'Ngủ sâu giấc liền mạch từ đêm tới sáng'
    ],
    benefitsEn: [
      'Comprehensive full-body renewal, leaving you remarkably light and energized',
      'Relieves stubborn lower back stiffness and chronic shoulder knots',
      'Promotes uninterrupted, peaceful sleep through the night'
    ],
    isHot: true,
  },
  {
    id: 'massage-chan-ngam-chan-thao-duoc',
    name: 'Massage Chân - Ngâm Chân Thảo Dược',
    nameEn: 'Foot Reflexology & Herbal Foot Bath',
    category: 'headspa',
    durationMinutes: 60,
    price: 170000,
    price60: 170000,
    price90: 240000,
    image: '/images/phu_thanh_real_footsoak_1790649584369.jpg',
    shortDesc: 'Thùng gỗ ngâm nước lá thảo mộc đun ấm, bấm huyệt Dũng Tuyền kích hoạt kinh mạch, bổ thận ấm chân.',
    shortDescEn: 'Wooden bucket herbal foot soak, Yongquan acupoint massage, and deep reflexology to warm feet and relieve walking fatigue.',
    description: 'Bàn chân được xem như "trái tim thứ hai" của cơ thể, nơi hội tụ hơn 60 huyệt đạo liên hệ mật thiết với các cơ quan nội tạng. Nước lá thơm ngâm chân kết hợp bấm huyệt chính xác giúp bạn ngủ sâu giấc, chân ấm áp và giảm nhức mỏi xương khớp sau ngày dài đi bộ tham quan cố đô.',
    descriptionEn: 'The feet are revered as the body\'s "second heart", home to over 60 reflex zones connected to vital organs. Fresh boiled herbal foot baths combined with precise acupressure warm cold feet, relieve joint fatigue, and guarantee restful sleep after a day exploring Hue.',
    steps: [
      'Ngâm chân thùng gỗ với nước lá thảo dược gừng quế đun ấm',
      'Rửa sạch và chà gót chân bằng đá tự nhiên',
      'Xoa bóp bàn chân bằng tinh dầu tràm quế ấm làm mềm gân cốt',
      'Day ấn huyệt Dũng Tuyền kích hoạt kinh Thận và giải độc cơ thể',
      'Tác động lên các vùng phản xạ: Dạ dày, Gan, Thận, Tim mạch, Mắt',
      'Bấm huyệt Tam Âm Giao, Túc Tam Lý bồi bổ nguyên khí',
      'Vỗ đập thư giãn cơ bắp chân và lau khô chân bằng khăn ấm sạch'
    ],
    stepsEn: [
      'Warm herbal foot soak in a cedar bucket with boiled ginger and cinnamon leaves',
      'Cleansing and gentle heel smoothing with natural pumice stone',
      'Foot massage with warm aromatic cajuput oil to soften tendons',
      'Deep stimulation of Yongquan (Kidney 1) point to detoxify and ground energy',
      'Reflexology on key organ zones: stomach, liver, kidney, heart, and eye points',
      'Acupoint stimulation on Sanyinjiao and Zusanli to boost vitality',
      'Rhythmic calf relaxation pats and wrapping feet in warm sanitized towels'
    ],
    benefits: [
      'Cải thiện tức thì chứng lạnh chân, tê buốt bàn chân',
      'Giúp ngủ sâu một mạch tới sáng, không còn trằn trọc',
      'Giảm mỏi gối, nhức xương khớp chân do đi bộ hoặc làm việc đứng lâu'
    ],
    benefitsEn: [
      'Immediately warms cold feet and eliminates tingling numbness',
      'Helps you fall into a deep, peaceful sleep without tossing and turning',
      'Relieves knee, ankle, and calf fatigue from prolonged walking and standing'
    ],
    isHot: true,
  },
  {
    id: 'chuom-ngai-cuu',
    name: 'Chườm Ngải Cứu (Lưng & Mắt)',
    nameEn: 'Warm Mugwort Herbal Compress (Back & Eyes)',
    category: 'whitening',
    durationMinutes: 60,
    price: 0,
    price60: 0,
    price90: 0,
    isAddon: true,
    isGift: true,
    giftText: 'Tặng Miễn Phí',
    giftTextEn: 'Free Gift',
    image: '/images/spa_interior_ambiance_1790586975263.jpg',
    shortDesc: 'Tặng miễn phí gối ngải cứu chườm lưng và chườm mắt trong liệu trình xoa bóp bấm huyệt.',
    shortDescEn: 'Complimentary warm herbal mugwort pillow for lumbar spine and soothing eye compress during body acupressure.',
    description: 'Đặc quyền chăm sóc tận tâm tại Phú Thành: Quý khách được TẶNG MIỄN PHÍ gối thảo dược ngải cứu ấm chườm vùng thắt lưng và chườm thư giãn vùng mắt trong suốt liệu trình xoa bóp bấm huyệt. Tinh chất ngải cứu sao nóng truyền nhiệt sâu giúp ôn thông kinh lạc, dứt cơn đau mỏi lưng eo và xua tan căng thẳng mỏi mắt.',
    descriptionEn: 'Complimentary thoughtful gesture at Phu Thanh: Every guest receives a FREE warm herbal mugwort pillow placed on the lower back and a soothing herbal eye pillow throughout the massage session. Natural mugwort heat penetrates deeply to dispel cold, relieve lumbar tension, and rest tired eyes.',
    steps: [
      'Ủ ấm gối thảo dược ngải cứu tự nhiên đạt nhiệt độ êm dịu chuẩn y học cổ truyền',
      'Đặt gối ngải cứu ấm chườm vùng thắt lưng và cột sống trong suốt liệu trình',
      'Chườm gối thảo mộc ấm lên vùng mắt giúp thư giãn mắt, giảm nhức mỏi và dễ ngủ',
      'Thưởng thức tách trà gừng đường phèn ấm nóng sau buổi trị liệu'
    ],
    stepsEn: [
      'Gently warming natural dried mugwort pillows to the ideal therapeutic temperature',
      'Placing the warm mugwort pillow under the lower spine and lumbar region during massage',
      'Applying a soothing herbal compress over the eyes to relieve digital eye strain',
      'Enjoying hot Hue ginger tea after the treatment'
    ],
    benefits: [
      'TẶNG MIỄN PHÍ 100% trong tất cả liệu trình xoa bóp bấm huyệt tại Phú Thành',
      'Hơi ấm ngải cứu ôn thông kinh lạc, trục hàn khí, giảm đau nhức lưng eo và cột sống',
      'Thư giãn cơ mắt, giảm mỏi mắt cho người làm việc máy tính, điện thoại nhiều'
    ],
    benefitsEn: [
      '100% COMPLIMENTARY with all massage treatments at Phu Thanh',
      'Mugwort heat warms the meridians, expels damp chill, and soothes lower back fatigue',
      'Relaxes eye muscles and calms the nervous system for screen-fatigued eyes'
    ],
  },
  {
    id: 'giac-hoi',
    name: 'Giác Hơi (Ống Tre)',
    nameEn: 'Natural Bamboo Cupping Therapy',
    category: 'whitening',
    durationMinutes: 30,
    price: 40000,
    price60: 40000,
    price90: 40000,
    isAddon: true,
    image: '/images/spa_service_headspa_1790586950795.jpg',
    shortDesc: 'Dịch vụ thêm: Giác hơi bằng ống tre truyền thống hút độc tố, đả thông ứ trệ, giải cảm gió nhanh chóng.',
    shortDescEn: 'Add-on service: Authentic bamboo cupping to extract toxins, clear stagnation, and quickly relieve common cold symptoms.',
    description: 'Phương pháp giác hơi bằng ống tre thiên nhiên được kỹ thuật viên khiếm thị Phú Thành thực hiện tỉ mỉ và an toàn tuyệt đối. Ống tre được luộc qua nước thảo mộc tạo lực hút chân không tự nhiên, êm dịu, không gây rát da, hút sạch huyết ứ, phong hàn và giải tỏa cơn nhức mỏi ê ẩm lưng nhanh chóng.',
    descriptionEn: 'Authentic bamboo cupping therapy performed safely and meticulously by our blind practitioners. Bamboo tubes boiled in herbal infusion create gentle natural suction that draws out blood stagnation and wind-chill without burning the skin.',
    steps: [
      'Làm ấm và thoa dầu tràm thảo dược lên toàn bộ vùng lưng',
      'Đặt ống tre giác hơi nhẹ nhàng dọc các huyệt đạo kinh Bàng quang',
      'Giữ ống tre trong thời gian tiêu chuẩn để hút sạch phong hàn độc tố',
      'Tháo ống tre nhẹ nhàng và thoa dầu tràm giữ ấm'
    ],
    stepsEn: [
      'Warming and applying pure herbal cajuput oil over the back',
      'Placing herbal-steamed bamboo tubes gently along the urinary bladder meridian',
      'Maintaining vacuum suction for the optimal duration to draw out cold and toxins',
      'Gently releasing the tubes and soothing the area with warm medicinal oil'
    ],
    benefits: [
      'Giác hơi bằng ống tre thiên nhiên an toàn, êm dịu, không đau rát da',
      'Giải cảm phong hàn, hết ớn lạnh dọc sống lưng nhanh chóng',
      'Hút độc tố và giải phóng co cơ lưng hiệu quả',
      'Giá chỉ 40.000đ làm thêm tiện lợi'
    ],
    benefitsEn: [
      'Natural boiled bamboo cupping is safe, comfortable, and soothing',
      'Clears wind-chill and spinal shivers rapidly',
      'Draws out toxins and releases stubborn back muscle spasms',
      'Affordable add-on price of only 40,000 VND (~$1.6 USD)'
    ],
  }
];

export const OFFICIAL_MENU_BOARD = {
  title: 'Phú Thành - Massage Khiếm Thị',
  titleEn: 'Phu Thanh - Blind Massage Hue',
  subtitle: 'MENU BẢNG GIÁ NIÊM YẾT',
  subtitleEn: 'OFFICIAL SERVICE MENU & PRICES',
  packages: [
    {
      duration: 'GÓI 60 PHÚT',
      durationEn: '60-MINUTE PACKAGE',
      durationMinutes: 60,
      badge: 'Thư Giãn Tiêu Chuẩn',
      badgeEn: 'Standard Relaxation',
      items: [
        { name: 'Xoa Bóp - Bấm Huyệt', nameEn: 'Acupressure & Body Massage', price: 140000, serviceId: 'xoa-bop-bam-huyet' },
        { name: 'Xoa Bóp - Bấm Huyệt - Giác Hơi (Ống Tre)', nameEn: 'Body Massage & Bamboo Cupping', price: 170000, serviceId: 'xoa-bop-bam-huyet-giac-hoi' },
        { name: 'Xoa Bóp - Bấm Huyệt - Đá Nóng', nameEn: 'Body Massage & Volcanic Hot Stone', price: 170000, serviceId: 'xoa-bop-bam-huyet-da-nong' },
        { name: 'Xoa Bóp - Bấm Huyệt - Giác Hơi (Ống Tre) - Đá Nóng', nameEn: 'Full Body + Bamboo Cupping + Hot Stone', price: 200000, serviceId: 'xoa-bop-bam-huyet-giac-hoi-da-nong', isHot: true },
        { name: 'Massage Chân - Ngâm Chân Thảo Dược', nameEn: 'Foot Reflexology & Herbal Foot Soak', price: 170000, serviceId: 'massage-chan-ngam-chan-thao-duoc' },
        { name: 'Chườm Ngải Cứu (Lưng & Mắt)', nameEn: 'Warm Mugwort Pillow (Back & Eyes)', price: 0, isGift: true, giftText: 'Tặng Miễn Phí', giftTextEn: 'Free Gift', serviceId: 'chuom-ngai-cuu' },
        { name: 'Giác Hơi (Ống Tre)', nameEn: 'Natural Bamboo Cupping', price: 40000, isAddon: true, serviceId: 'giac-hoi' },
      ]
    },
    {
      duration: 'GÓI 90 PHÚT',
      durationEn: '90-MINUTE PACKAGE (VIP)',
      durationMinutes: 90,
      badge: 'Chuyên Sâu Phục Hồi (VIP)',
      badgeEn: 'Intensive Recovery (VIP)',
      items: [
        { name: 'Xoa Bóp - Bấm Huyệt', nameEn: 'Acupressure & Body Massage', price: 210000, serviceId: 'xoa-bop-bam-huyet' },
        { name: 'Xoa Bóp - Bấm Huyệt - Giác Hơi (Ống Tre)', nameEn: 'Body Massage & Bamboo Cupping', price: 240000, serviceId: 'xoa-bop-bam-huyet-giac-hoi' },
        { name: 'Xoa Bóp - Bấm Huyệt - Đá Nóng', nameEn: 'Body Massage & Volcanic Hot Stone', price: 240000, serviceId: 'xoa-bop-bam-huyet-da-nong' },
        { name: 'Xoa Bóp - Bấm Huyệt - Giác Hơi (Ống Tre) - Đá Nóng', nameEn: 'Full Body + Bamboo Cupping + Hot Stone', price: 270000, serviceId: 'xoa-bop-bam-huyet-giac-hoi-da-nong', isHot: true },
        { name: 'Massage Chân - Ngâm Chân Thảo Dược', nameEn: 'Foot Reflexology & Herbal Foot Soak', price: 240000, serviceId: 'massage-chan-ngam-chan-thao-duoc' },
        { name: 'Chườm Ngải Cứu (Lưng & Mắt)', nameEn: 'Warm Mugwort Pillow (Back & Eyes)', price: 0, isGift: true, giftText: 'Tặng Miễn Phí', giftTextEn: 'Free Gift', serviceId: 'chuom-ngai-cuu' },
        { name: 'Giác Hơi (Ống Tre)', nameEn: 'Natural Bamboo Cupping', price: 40000, isAddon: true, serviceId: 'giac-hoi' },
      ]
    }
  ]
};

export const PACKAGES_DATA: PackageCombo[] = [
  {
    id: 'pkg-goi-60-phut',
    title: 'Gói Trị Liệu 60 Phút Tiêu Chuẩn',
    titleEn: '60-Minute Standard Therapy Package',
    subtitle: 'Lựa chọn nhanh chóng — Giải tỏa đau mỏi cổ vai gáy & phục hồi năng lượng',
    subtitleEn: 'Quick relief — Soothe shoulder & neck tension and recharge vitality',
    duration: '60 Phút',
    durationEn: '60 Minutes',
    price: 140000,
    originalPrice: 180000,
    features: [
      'Xoa Bóp - Bấm Huyệt: 140.000đ',
      'Xoa Bóp - Bấm Huyệt - Giác Hơi (Ống Tre): 170.000đ',
      'Xoa Bóp - Bấm Huyệt - Đá Nóng: 170.000đ',
      'Xoa Bóp - Bấm Huyệt - Giác Hơi (Ống Tre) - Đá Nóng: 200.000đ',
      'Massage Chân - Ngâm Chân Thảo Dược: 170.000đ',
      'TẶNG MIỄN PHÍ: Gối ngải cứu chườm lưng & chườm mắt',
      'Miễn phí nước ngâm chân gừng muối ấm & trà gừng',
      'Phòng máy lạnh sạch sẽ, khăn ga thay mới 100%'
    ],
    featuresEn: [
      'Acupressure & Body Massage: 140,000đ (~$5.5)',
      'Massage & Bamboo Cupping: 170,000đ (~$6.8)',
      'Massage & Hot Stone: 170,000đ (~$6.8)',
      'Full Body + Bamboo Cupping + Hot Stone: 200,000đ (~$8)',
      'Foot Reflexology & Herbal Foot Soak: 170,000đ',
      'FREE GIFT: Warm mugwort compress for lumbar & eyes',
      'Complimentary herbal ginger foot soak & hot ginger tea',
      'Air-conditioned private room, 100% freshly sanitized linens'
    ],
    isPopular: false
  },
  {
    id: 'pkg-goi-90-phut',
    title: 'Gói Trị Liệu 90 Phút Chuyên Sâu (VIP)',
    titleEn: '90-Minute Intensive VIP Package',
    subtitle: 'Được yêu thích nhất — Thời gian vàng đả thông toàn bộ kinh lạc, giãn sâu từng thớ cơ',
    subtitleEn: 'Most popular — Golden duration to open all meridians and melt muscle knots',
    duration: '90 Phút',
    durationEn: '90 Minutes',
    price: 210000,
    originalPrice: 280000,
    features: [
      'Xoa Bóp - Bấm Huyệt chuyên sâu: 210.000đ',
      'Xoa Bóp - Bấm Huyệt - Giác Hơi (Ống Tre): 240.000đ',
      'Xoa Bóp - Bấm Huyệt - Đá Nóng: 240.000đ',
      'Xoa Bóp - Bấm Huyệt - Giác Hơi (Ống Tre) - Đá Nóng: 270.000đ',
      'Massage Chân - Ngâm Chân Thảo Dược: 240.000đ',
      'TẶNG MIỄN PHÍ: Gối ngải cứu chườm lưng & chườm mắt',
      '90 phút chăm sóc toàn diện từ đầu tới ngón chân',
      'Tặng trà thảo mộc & phục vụ tận tâm chu đáo'
    ],
    featuresEn: [
      'Deep Acupressure & Body Massage: 210,000đ (~$8.5)',
      'Massage & Bamboo Cupping: 240,000đ (~$9.6)',
      'Massage & Volcanic Hot Stone: 240,000đ (~$9.6)',
      'VIP Full Body + Bamboo Cupping + Hot Stone: 270,000đ (~$10.8)',
      'Foot Reflexology & Herbal Foot Soak: 240,000đ',
      'FREE GIFT: Warm mugwort compress for lumbar & eyes',
      '90 minutes of thorough head-to-toe therapeutic attention',
      'Complimentary aromatic herbal tea & attentive service'
    ],
    isPopular: true
  },
  {
    id: 'pkg-dich-vu-them',
    title: 'Dịch Vụ Bổ Sung & Dưỡng Chân',
    titleEn: 'Add-ons & Foot Reflexology',
    subtitle: 'Gia tăng hiệu quả trục hàn ẩm, ấm chân bổ thận, nhẹ nhõm toàn thân',
    subtitleEn: 'Enhance cold-dispelling, warm feet, and overall vitality',
    duration: 'Linh hoạt',
    durationEn: 'Flexible',
    price: 40000,
    originalPrice: 60000,
    features: [
      'TẶNG MIỄN PHÍ: Chườm gối ngải cứu ấm lưng & mắt',
      'Giác Hơi bằng ống tre trục độc tố, hút phong hàn: 40.000đ',
      'Massage Chân - Ngâm Chân Thảo Dược: 170.000đ (60p) | 240.000đ (90p)',
      'Thùng gỗ ngâm chân nước gừng ấm nóng gia truyền',
      'Dễ dàng kết hợp cùng mọi gói xoa bóp toàn thân'
    ],
    featuresEn: [
      'FREE GIFT: Warm mugwort back & eye compress',
      'Natural Bamboo Cupping to extract cold toxins: 40,000đ (~$1.6)',
      'Foot Reflexology & Herbal Foot Bath: 170,000đ (60m) | 240,000đ (90m)',
      'Authentic wooden bucket foot soak with boiled ginger broth',
      'Easily combinable with any full body massage package'
    ],
    isPopular: false
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    customerName: 'Anh Nguyễn Văn Hùng (Cán bộ tại TP. Huế)',
    role: 'Khách hàng quen thuộc 2 năm',
    roleEn: 'Regular client for 2 years',
    rating: 5,
    serviceUsed: 'Bấm Huyệt Trị Liệu Cổ Vai Gáy & Thắt Lưng',
    serviceUsedEn: 'Neck, Shoulder & Lumbar Acupressure',
    comment: 'Tôi hay bị đau thắt lưng và mỏi cổ gáy vì ngồi văn phòng nhiều. Tìm đến cơ sở Phú Thành ở kiệt 186 Nguyễn Sinh Cung thấy phòng ốc rất sạch, thơm mùi gừng sả. Các anh chị khiếm thị bấm đúng huyệt, lực rất đầm và nhiệt tình. Giá cả rất phải chăng, không hề có tình trạng vòi vĩnh tiền tip.',
    commentEn: 'I often suffer from lower backache and stiff neck from office work. At Phu Thanh (Alley 186 Nguyen Sinh Cung), the rooms are spotless and pleasantly scented with lemongrass. The blind therapists hit the exact trigger points with grounded, firm pressure. Very affordable with no tip pressure.',
    date: '3 ngày trước'
  },
  {
    id: 'rev-2',
    customerName: 'Marcus & Elena (Tourists from Germany)',
    role: 'Khách du lịch quốc tế ghé thăm Huế',
    roleEn: 'International travelers from Germany',
    rating: 5,
    serviceUsed: 'Combo Phục Hồi Sinh Lực Toàn Thân VIP (90 Phút)',
    serviceUsedEn: '90-min Full Body VIP + Bamboo Cupping + Hot Stone',
    comment: 'Sau cả ngày đi bộ khám phá Đại Nội Huế chân đau rã rời, chúng tôi tìm đến Phú Thành. Thật sự bất ngờ vì tay nghề của các bạn khiếm thị cực kỳ điêu luyện! Giác hơi ống tre rất êm, đá nóng ấm sâu, phòng máy lạnh riêng tư và bạn lễ tân nói tiếng Anh cơ bản rất nhiệt tình. Rất đáng giới thiệu cho bạn bè khi đến Huế!',
    commentEn: 'After walking all day around Hue Citadel, our legs and backs were exhausted. We were blown away by the incredible skill of the visually impaired therapists! The bamboo cupping was gentle and effective, hot stones were deeply comforting, and the private room was clean and air-conditioned. Highly recommended to anyone visiting Hue!',
    date: '1 tuần trước'
  },
  {
    id: 'rev-3',
    customerName: 'Bác Trần Hữu Đức (65 tuổi, Vỹ Dạ, Huế)',
    role: 'Người dân địa phương Vỹ Dạ',
    roleEn: 'Local resident in Vy Da, Hue',
    rating: 5,
    serviceUsed: 'Ngâm Chân Thảo Dược & Bấm Huyệt Dũng Tuyền',
    serviceUsedEn: 'Herbal Foot Soak & Yongquan Reflexology',
    comment: 'Tuổi già chân hay bị lạnh và khó ngủ. Cứ cách 3 ngày tôi lại ghé Phú Thành ngâm chân và nhờ thầy Thành bấm huyệt. Người khiếm thị ở đây ăn nói nhỏ nhẹ, thật thà, làm việc có tâm. Chúc cơ sở luôn đông khách!',
    commentEn: 'In old age, my feet easily get cold and I struggled with sleep. Every 3 days I stop by Phu Thanh for a warm herbal foot bath and foot reflexology. The blind practitioners are polite, honest, and truly care about helping people.',
    date: '2 tuần trước'
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    title: 'Tại Sao Bàn Tay Người Khiếm Thị Lại Bấm Huyệt Chuẩn Xác Đến Kỳ Lạ?',
    titleEn: 'Why Visually Impaired Therapists Excel at Precise Acupressure',
    category: 'Góc Nhìn Chuyên Môn',
    categoryEn: 'Expert Insights',
    date: '20 Tháng 9, 2026',
    readTime: '4 phút đọc',
    readTimeEn: '4 min read',
    excerpt: 'Khi thị giác không còn là kênh tiếp nhận chính, xúc giác của người khiếm thị phát triển vượt bậc. Họ cảm nhận được từng bó cơ co rút và điểm huyệt đạo sâu dưới da bằng trực giác nhạy bén.',
    excerptEn: 'When sight is absent, tactile perception develops extraordinarily. Blind practitioners feel every tense muscle knot and meridian trigger point beneath the skin with astounding sensitivity.',
    image: '/images/phu_thanh_hero_1790648702096.jpg',
    content: [
      'Nhiều nghiên cứu y học chỉ ra rằng ở người khiếm thị, vùng não xử lý xúc giác được tăng cường mạnh mẽ. Đôi bàn tay của họ giống như một máy quét sinh học cực kỳ tinh vi.',
      'Khi lướt nhẹ ngón tay trên sống lưng, kỹ thuật viên có thể phát hiện ngay vị trí bị bó cơ, nơi tắc nghẽn kinh lạc hay đốt sống bị chệch nhẹ mà mắt thường khó thấy.',
      'Kết hợp với quá trình học tập bài bản hàng ngàn giờ tại các trường Y học cổ truyền, kỹ thuật xoa bóp bấm huyệt của người khiếm thị đem lại hiệu quả trị liệu sâu và an toàn vượt trội.'
    ],
    contentEn: [
      'Clinical studies show that in visually impaired individuals, neuroplasticity substantially enhances the somatosensory cortex. Their fingertips function as delicate biological scanners.',
      'Gliding gently along the spine, therapists instantly spot locked muscle bands, stagnant Qi channels, or micro-misalignments undetectable by visual inspection alone.',
      'Combined with thousands of hours of formal training in Traditional Medicine institutions, their acupressure therapy delivers profoundly deeper and safer therapeutic results.'
    ]
  },
  {
    id: 'art-2',
    title: 'Huyệt Dũng Tuyền Dưới Lòng Bàn Chân: "Suối Nguồn" Sinh Lực Của Cơ Thể',
    titleEn: 'Yongquan Acupoint: The "Bubbling Spring" of Body Vitality',
    category: 'Cẩm Nang Đông Y',
    categoryEn: 'Eastern Medicine',
    date: '12 Tháng 9, 2026',
    readTime: '5 phút đọc',
    readTimeEn: '5 min read',
    excerpt: 'Bấm huyệt Dũng Tuyền kết hợp ngâm chân thảo dược mỗi tối giúp hạ hỏa, trị mất ngủ kinh niên và tăng cường chức năng thận khí.',
    excerptEn: 'Stimulating the Yongquan point combined with nightly warm herbal foot soaks grounds excess heat, cures chronic insomnia, and recharges kidney vitality.',
    image: '/images/phu_thanh_foot_herbal_1790588475271.jpg',
    content: [
      'Huyệt Dũng Tuyền nằm ở điểm lõm giữa 1/3 trước lòng bàn chân, là huyệt đầu tiên của kinh Thận. Chữ "Dũng" là vọt lên, "Tuyền" là suối nước, ngụ ý sinh khí từ đây tuôn trào đi khắp cơ thể.',
      'Ngâm chân bằng nước lá thuốc ấm kết hợp day ấn huyệt Dũng Tuyền 10 - 15 phút giúp kéo khí nóng từ trên đầu hạ xuống dưới (dẫn hỏa quy nguyên), giúp làm ấm cơ thể và đưa não bộ vào giấc ngủ êm đềm.',
      'Tại Phú Thành, kỹ thuật viên sẽ dùng gốc ngón tay cái kết hợp cao quế day tròn đều đặn theo chiều kim đồng hồ, giúp giải tỏa mỏi mệt tức thì.'
    ],
    contentEn: [
      'Located in the depression on the upper third of the sole, Yongquan (Kidney 1) is the primary starting point of the Kidney Meridian, symbolizing a life spring bubbling upward.',
      'A warm herbal foot soak followed by 10-15 minutes of firm acupressure draws scattered mental heat downward, warming cold extremities and inviting tranquil, uninterrupted sleep.',
      'At Phu Thanh, our therapists apply medicinal cinnamon balm with precise circular thumb strokes, melting away walking fatigue immediately.'
    ]
  },
  {
    id: 'art-3',
    title: 'Cách Nhận Biết Thoái Hóa Đốt Sống Cổ Và Phương Pháp Bấm Huyệt Đông Y',
    titleEn: 'Recognizing Cervical Spondylosis & Traditional Acupressure Solutions',
    category: 'Sức Khỏe Cơ Xương Khớp',
    categoryEn: 'Spine & Joint Health',
    date: '02 Tháng 9, 2026',
    readTime: '5 phút đọc',
    readTimeEn: '5 min read',
    excerpt: 'Dấu hiệu mỏi cổ lan ra bả vai, tê tay và cách xoa bóp bấm huyệt giúp đả thông khí huyết không cần dùng thuốc giảm đau.',
    excerptEn: 'Warning signs of neck tension spreading to the shoulder blades and fingertips, and how holistic acupressure restores blood flow without pain medication.',
    image: '/images/spa_service_massage_1790586932588.jpg',
    content: [
      'Đau mỏi cổ gáy lâu ngày nếu không được giải tỏa sẽ dẫn đến vôi hóa đốt sống cổ C4-C5-C6 và chèn ép động mạch đốt sống thân nền, gây thiểu năng tuần hoàn não.',
      'Xoa bóp bấm huyệt các huyệt Phong Trì, Phong Phủ, Kiên Tỉnh giúp làm mềm cơ thang, giãn cơ ức đòn chũm và tăng tưới máu cho não bộ.',
      'Định kỳ mỗi tuần 1-2 lần bấm huyệt tại cơ sở Phú Thành sẽ giúp duy trì sự linh hoạt dẻo dai của cột sống cổ.'
    ],
    contentEn: [
      'Prolonged neck stiffness often leads to disc compression around C4-C6, restricting vertebral artery blood flow and causing dizziness, brain fog, and chronic tension.',
      'Targeted pressure on Fengchi, Fengfu, and Jianjing points releases the trapezius and sternocleidomastoid muscles, significantly improving cranial blood supply.',
      'Receiving targeted acupressure 1-2 times weekly at Phu Thanh keeps the cervical spine supple, pain-free, and resilient.'
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
