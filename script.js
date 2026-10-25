/* ============================================================
   TELOSAA MENU - Final Integration with Telegram
   ============================================================ */

const BOT_TOKEN = "8998768907:AAGMBnd2R9SbAtZDt5HmyIAEdNNORLhBqL4";
const CHAT_ID = "861741866";

const MENU = [
  {
    id: "pizza-italian", title: "البيتزا الإيطالي", emoji: "🍕",
    items: [
      { name: "تشيكن BBQ", desc: "صوص باربيكيو - فراخ متبلة - مشروم - موزاريلا", price: 180, featured: true },
      { name: "بانيه كرسبي", desc: "بانيه - خضار - موزاريلا", price: 170 },
      { name: "زنجر", desc: "زنجر - خضار - موزاريلا", price: 170, spicy: true },
      { name: "سوبر كرانشي", desc: "بانيه - رومي مدخن - ستريس - خضار - موزاريلا", price: 200 },
      { name: "سوبر تشيكن", desc: "فراخ رومي مدخن - مشروم - باربكيو - خضار - موزاريلا", price: 210 },
      { name: "سموك تركي", desc: "لحم دجاج رومي مدخن - خضار - موزاريلا", price: 195 },
      { name: "تشكن رانش", desc: "بانيه كرسبي - ديك رومي - خضار - موزاريلا - صوص رانش", price: 190 },
      { name: "بيتزا شاورما فراخ", desc: "شاورما فراخ - خضار - موزاريلا", price: 175 },
      { name: "بيتزا كرسبي بافلو", desc: "بانيه كرسبي - بيبروني - موزاريلا - صوص بافلو", price: 195 },
      { name: "بيتزا ميكس تشيز", desc: "بانيه كرسبي - خضار - انواع جبن - موزاريلا - صوص رانش", price: 200 },
      { name: "بيتزا كوردن بلو", desc: "كوردن بلو - خضار - موزاريلا - صوص رانش", price: 200 },
      { name: "بيبروني", desc: "بيبروني جاف - خضار - موزاريلا", price: 165 },
      { name: "سلامي", desc: "سلامي مجفف - خضار - موزاريلا", price: 165 },
      { name: "مشكل جبن", desc: "4 أنواع جبن - خضار - موزاريلا", price: 155 },
      { name: "مارجريتا", desc: "خضار - موزاريلا", price: 120 },
      { name: "تونة", desc: "تونة - خضار - موزاريلا", price: 170 },
      { name: "سوبر سوبريم", desc: "سلامي - بسطرمة - روزبيف - مشروم - خضار - موزاريلا", price: 210 },
      { name: "كواترو ستاسيوني", desc: "مفروم - بسطرمة - روزبيف - فلفل - طماطم - زيتون - موزاريلا", price: 210 }
    ]
  },
  {
    id: "pizza-sharky", title: "البيتزا الشرقي", emoji: "🥘",
    items: [
      { name: "فراخ", desc: "قطع فراخ، خضار، بيض، رومي", price: 180 },
      { name: "بانيه كريسبي", desc: "بانيه، خضار، رومي، بيض، موتزاريللا", price: 180 },
      { name: "زنجر", desc: "زنجر، خضار، رومي، بيض، موتزاريللا", price: 180, spicy: true },
      { name: "سوبر كرانشي", desc: "بانيه، رومي مدخن، ستريبس، خضار، رومي، بيض، موتزاريللا", price: 210 },
      { name: "بيتزا فولكانا", desc: "سوسيس، فراخ، جبنة رومي، خضار، بيض، موتزاريللا", price: 195 },
      { name: "بيتزا تشيكن ماستر", desc: "بانيه كريسبي، ديك رومي، روز بيف، سلامي، رومي، خضار، موتزاريللا", price: 220 },
      { name: "بيتزا تشيكن أوريجينال", desc: "بانيه كريسبي، ديك رومي، مفروم، جبنة رومي، خضار، موتزاريللا", price: 200, featured: true },
      { name: "بيتزا تشيكن مكس تشيز", desc: "بانيه كريسبي، 4 أنواع جبن، جبنة رومي، خضار، بيض، موتزاريللا", price: 205 },
      { name: "بيتزا تشيكن باربيكيو", desc: "فراخ، مشروم، باربيكيو، رومي، بيض، موتزاريللا", price: 190 },
      { name: "بسطرمة", desc: "بسطرمة، خضار، رومي، بيض، موتزاريللا", price: 175 },
      { name: "سجق بلدي", desc: "سجق بلدي، خضار، رومي، بيض، موتزاريللا", price: 175 },
      { name: "لحم مفروم", desc: "لحم مفروم، خضار، جبنة، بيض", price: 180 },
      { name: "سوسيس", desc: "سوسيس، جبنة رومي، خضار، بيض، موتزاريللا", price: 170 },
      { name: "سوبر سوبريم", desc: "سلامي، سوسيس، بسطرمة، خضار", price: 205 },
      { name: "سبايسي", desc: "مشكل لحوم، بيض، جبنة رومي، خضار، موتزاريللا", price: 200, spicy: true },
      { name: "بيتزا كفتة", desc: "كفتة، رومي، خضار، بيض", price: 195 },
      { name: "جمبري", desc: "جمبري، جبنة رومي، خضار", price: 220 },
      { name: "مشكل جبنة", desc: "شيدر، كيري، ريكفورد، خضار، جبنة موزاريلا", price: 165 }
    ]
  },
  {
    id: "feteer-savory", title: "الفطير الحادق", emoji: "🥧",
    items: [
      { name: "فراخ", desc: "قطع فراخ، جبنة رومي، خضار، موزاريلا", price: 160 },
      { name: "بانيه كرسبي", desc: "بانيه حار، جبنة رومي، خضار، موزاريلا", price: 160 },
      { name: "زنجر", desc: "زنجر، جبنة رومي، خضار، موزاريلا", price: 160 },
      { name: "سوبر كرانش", desc: "بانيه حار، هوت دوج، ستربس، خضار، رومي، موزاريلا", price: 190 },
      { name: "فطيرة كوردن بلو", desc: "كوردن بلو، جبنة رومي، خضار، موزاريلا، صوص رانش", price: 180 },
      { name: "فطيرة ماستر", desc: "بانيه كرسبي، ديك رومي مدخن، جبنة رومي، خضار، موزاريلا، صوص رانش", price: 195 },
      { name: "فطيرة اورجينال", desc: "بانيه كرسبي، ديك رومي، مشروم، جبنة رومي، خضار، موزاريلا، صوص رانش", price: 185, featured: true },
      { name: "فطيرة تشكن رانش", desc: "بانيه كرسبي، ديك رومي، جبنة رومي، خضار، موزاريلا، صوص رانش", price: 180 },
      { name: "فطيرة فولكانا", desc: "سوسيس، فراخ، جبنة رومي، خضار، موزاريلا، صوص رانش", price: 175 },
      { name: "فطيرة شاورما فراخ", desc: "شاورما فراخ، جبنة رومي، خضار، موزاريلا", price: 170 },
      { name: "بسطرمة", desc: "بسطرمة، خضار، رومي، موزاريلا", price: 160 },
      { name: "سجق بلدي", desc: "سجق، خضار، رومي، موزاريلا", price: 160 },
      { name: "مشكل لحوم", desc: "لحم مفروم، سجق، بسطرمة، خضار، موزاريلا", price: 180 },
      { name: "سبايسي", desc: "مشكل لحوم، سوسيس، فلفل، طماطم، زيتون، جبنة رومي، موزاريلا", price: 190, spicy: true },
      { name: "فطيرة كفته", desc: "كفته، جبنة رومي، خضار، موزاريلا، صوص تكساس برجر", price: 185 },
      { name: "فطيرة دولوكس", desc: "برجر، سلامي، جبنة رومي، خضار، موزاريلا، صوص بافلو", price: 190 },
      { name: "فطيرة شاورما لحم", desc: "شاورما لحم، جبنة رومي، خضار، موزاريلا", price: 185 },
      { name: "تونة", desc: "تونة، خضار، رومي، موزاريلا", price: 165 },
      { name: "جمبري", desc: "جمبري، خضار، رومي، موزاريلا", price: 200 },
      { name: "مشكل جبنة", desc: "شيدر، كيري، ريكفورد، خضار، موزاريلا", price: 150 },
      { name: "خضروات", desc: "خضار، رومي، موزاريلا", price: 130 }
    ]
  },
  {
    id: "feteer-sweet", title: "الفطير الحلو", emoji: "🍯",
    items: [
      { name: "سكر", desc: "سمنة، سكر، لبن", price: 90 },
      { name: "كاسترد", desc: "كاستر، سكر، لبن", price: 100 },
      { name: "ملوكي", desc: "زبيب، جوز هند، كاستر، سكر، لبن", price: 120 },
      { name: "قشطة", desc: "قشطة، كاستر، سكر، لبن", price: 120 },
      { name: "اسكندرية", desc: "قشطة، عسل، كريز، كاستر، سكر، لبن", price: 130 },
      { name: "عسل", desc: "عسل، سمنة، كاستر، لبن", price: 110 },
      { name: "موز", desc: "موز، كاستر، سكر، لبن", price: 110 },
      { name: "مشكل فواكة", desc: "تفاح، اناناس، خوخ، موز، كاستر، سكر، لبن", price: 130 },
      { name: "شوكلاتة كندر", desc: "بندق، شيكولاتة، كندر، كاستر، لبن", price: 140 },
      { name: "شيكولاتة بالموز", desc: "بندق، شيكولاتة، عسل، موز، كاستر، لبن", price: 130 },
      { name: "بلاك فورست", desc: "1/2 شيكولاتة، 1/2 فواكة، عسل، سمنة، سكر، لبن", price: 140 },
      { name: "شيكولاتة لوتس", desc: "شيكولاتة، لوتس، كاسترد، لبن، بندق", price: 140 },
      { name: "بسبوسة المكسرات", desc: "بسبوسة، كاستر، سكر، بندق", price: 130 },
      { name: "كنافة بالمكسرات", desc: "كنافة، كاستر، سكر، بندق", price: 130 },
      { name: "لوتس", desc: "كريمة لوتس، كاستر، لبن، بندق", price: 130 }
    ]
  },
  {
    id: "pasta", title: "المكرونات", emoji: "🍝",
    items: [
      { name: "نجرسكو فراخ", desc: "فراخ، خضار، صوص كريمة، موتزاريللا", price: 150 },
      { name: "نجرسكو فراخ بالشيدر", desc: "فراخ، شيدر، خضار، صوص كريمة، موتزاريللا", price: 160 },
      { name: "نجرسكو فراخ كاري", desc: "فراخ كاري، خضار، صوص كاري، موتزاريللا", price: 160 },
      { name: "نجرسكو مشكل جبن بالفراخ", desc: "4 أنواع جبن، فراخ، صوص كريمة، موتزاريللا", price: 165 },
      { name: "نجرسكو ميكس فراخ", desc: "فراخ، رومي مدخن، خضار، صوص كريمة، موتزاريللا", price: 170 },
      { name: "نجرسكو كوردن بلو", desc: "كوردن بلو، صوص أبيض، زيتون، خضار، موتزاريللا", price: 170 },
      { name: "نجرسكو زنجر", desc: "زنجر، صوص أبيض، خضار، موتزاريللا", price: 160, spicy: true },
      { name: "نجرسكو فيجا", desc: "بانيه كريسبي، سلامي، صوص أبيض، زيتون، خضار، موتزاريللا", price: 170 },
      { name: "نجرسكو اوريجينال", desc: "بانيه كريسبي، روزبيف، صوص أبيض، زيتون، خضار، موتزاريللا", price: 175 },
      { name: "لازانيا فراخ", desc: "فراخ، خضار، صوص أحمر، رومي، موتزاريللا", price: 165 },
      { name: "مكرونة فراخ", desc: "فراخ، خضار، ثوم، صوص كريمة", price: 140 },
      { name: "نجرسكو لحم مفروم", desc: "مفروم، خضار، صوص طماطم، موتزاريللا", price: 155 },
      { name: "نجرسكو سوبيرم", desc: "سلامي، سوسيس، بسطرمة، صوص طماطم، موتزاريللا", price: 170 },
      { name: "نجرسكو برجر", desc: "برجر، صوص أحمر، زيتون، خضار، موتزاريللا", price: 165 },
      { name: "لازانيا لحم مفروم", desc: "مفروم، خضار، صوص أحمر، رومي، موتزاريللا", price: 170 },
      { name: "اسباجتي بولونيز", desc: "لحمة مفرومة، خضار، ثوم، صوص طماطم", price: 140 },
      { name: "اسباجتي كبدة", desc: "كبدة اسكندراني، صوص أحمر، زيتون، خضار", price: 145 },
      { name: "نجرسكو جمبري", desc: "جمبري، خضار، صوص كريمة، موتزاريللا", price: 200 },
      { name: "مكرونة ارابياتا", desc: "جبنة رومي، خضار، ثوم، صوص طماطم", price: 140 }
    ]
  },
  {
    id: "sandwich", title: "صاروخ ساندوتش", emoji: "🚀",
    items: [
      { name: "صاروخ بانيه كريسبي", desc: "كريب رول بانيه كريسبي", price: 90 },
      { name: "صاروخ شيش", desc: "كريب رول شيش", price: 90 },
      { name: "صاروخ كريسبي بافلو", desc: "كريسبي بافلو", price: 95 },
      { name: "صاروخ بالفراخ", desc: "فراخ", price: 85 },
      { name: "صاروخ فراخ مشروم", desc: "فراخ ومشروم", price: 95 },
      { name: "صاروخ كوردن بلو", desc: "كوردن بلو", price: 95 },
      { name: "صاروخ تشيكن رانش", desc: "تشيكن رانش", price: 95 },
      { name: "صاروخ زنجر", desc: "زنجر", price: 90, spicy: true },
      { name: "صاروخ ميكس فراخ", desc: "ميكس فراخ", price: 100, featured: true },
      { name: "صاروخ سوبر كرانشي", desc: "سوبر كرانشي", price: 105 },
      { name: "صاروخ ستريس", desc: "ستريس", price: 90 },
      { name: "صاروخ سلامي", desc: "سلامي", price: 85 },
      { name: "صاروخ سبايسي", desc: "سبايسي", price: 90, spicy: true },
      { name: "صاروخ ميكس لحوم", desc: "ميكس لحوم", price: 100 },
      { name: "صاروخ سوبر سوبيرم", desc: "سوبر سوبرم", price: 105 },
      { name: "صاروخ برجر", desc: "برجر", price: 90 },
      { name: "صاروخ بالسجق البلدي", desc: "سجق بلدي", price: 85 },
      { name: "صاروخ بالبسطرمة", desc: "بسطرمة", price: 85 },
      { name: "صاروخ بالمفروم", desc: "مفروم", price: 85 },
      { name: "صاروخ جمبري", desc: "جمبري", price: 110 },
      { name: "صاروخ مشكل جبن", desc: "مشكل جبن", price: 85 }
    ]
  },
  {
    id: "crepe-savory", title: "الكريب الحادق", emoji: "🌯",
    items: [
      { name: "كريب كوردن بلو", desc: "كوردن بلو، صوص رانش، مايونيز، كاتشب، كابوتشا، فلفل ألوان، موتزاريللا", price: 110 },
      { name: "كريب بانيه على سوسيس", desc: "بانيه، سوسيس، مايونيز، كاتشب، كابوتشا، فلفل ألوان، موتزاريللا", price: 110 },
      { name: "كريب رويال", desc: "شيش، سوسيس، فلفل ألوان، مايونيز، كاتشب، موتزاريللا", price: 120 },
      { name: "كريب هنجري", desc: "بانيه كريسبي، برجر، سموك تركي، كابوتشا، فلفل ألوان، مايونيز، كاتشب، موتزاريللا", price: 130 },
      { name: "كريب تيستي", desc: "بانيه كريسبي، سوسيس، مايونيز، كاتشب، كابوتشا، فلفل ألوان، موتزاريللا", price: 110 },
      { name: "كريب بافلو تشكن", desc: "4 أنواع جبن، كريسبي، ديك رومي، صوص رانش، خضار، موتزاريللا", price: 120 },
      { name: "كريب اكسترا فراخ", desc: "كريسبي، شيش، ديك رومي مدخن، فلفل ألوان، موتزاريللا", price: 125 },
      { name: "كريب سوبر كرانشي", desc: "ديك رومي مدخن، بانيه كريسبي، ستربس، كابوتشا، فلفل ألوان، موتزاريللا", price: 125 },
      { name: "كريب كريسبي", desc: "بانيه كريسبي، مايونيز، كاتشب، كابوتشا، فلفل ألوان، موتزاريللا", price: 105 },
      { name: "كريب زنجر", desc: "زنجر، مايونيز، كاتشب، كابوتشا، فلفل ألوان، موتزاريللا", price: 105, spicy: true },
      { name: "كريب شيش طاووق", desc: "شيش، مايونيز، كاتشب، كابوتشا، فلفل ألوان، موتزاريللا", price: 110 },
      { name: "كريب ميكس فراخ", desc: "بانيه، زنجر، فراخ قطع، خضار، مايونيز، موتزاريللا", price: 120 },
      { name: "كريب فاهيتا فراخ", desc: "فراخ، مشروم، مايونيز، كاتشب، كابوتشا، فلفل ألوان، موتزاريللا", price: 115 },
      { name: "كريب شاورما فراخ", desc: "شاورما فراخ، مايونيز، كاتشب، موتزاريللا", price: 110 },
      { name: "كريب فراخ", desc: "فراخ، مايونيز، كاتشب، كابوتشا، فلفل ألوان، موتزاريللا", price: 105, featured: true },
      { name: "كريب الفريدو", desc: "فراخ، سموك تركي، صوص رانش، مايونيز، كاتشب، كابوتشا، فلفل ألوان، موتزاريللا", price: 125 },
      { name: "كريب ميجا", desc: "سوسيس، سلامي، فلفل ألوان، مايونيز، كاتشب، موتزاريللا", price: 115 },
      { name: "كريب سجق", desc: "سجق، مايونيز، كاتشب، كابوتشا، فلفل ألوان، موتزاريللا", price: 105 },
      { name: "كريب مفروم", desc: "مفروم، مايونيز، كاتشب، كابوتشا، فلفل ألوان، موتزاريللا", price: 105 },
      { name: "كريب كبدة اسكندراني", desc: "كبدة، فلفل ألوان، مايونيز، كاتشب، موتزاريللا", price: 110 },
      { name: "كريب سوسيس", desc: "سوسيس، مايونيز، كاتشب، كابوتشا، فلفل ألوان، موتزاريللا", price: 100 },
      { name: "كريب برجر", desc: "برجر لحم، مايونيز، كاتشب، كابوتشا، فلفل ألوان، موتزاريللا", price: 110 },
      { name: "كريب كفتة", desc: "كفتة، مايونيز، كاتشب، فلفل ألوان، موتزاريللا", price: 110 },
      { name: "كريب جمبري", desc: "جمبري، خضار، مايونيز، كاتشب", price: 130 },
      { name: "كريب مشكل جبن", desc: "كيري، شيدر، مايونيز، كاتشب", price: 100 },
      { name: "كريب بطاطس", desc: "بطاطس، مايونيز، كاتشب", price: 80, featured: true }
    ]
  },
  {
    id: "crepe-sweet", title: "الكريب الحلو", emoji: "🍫",
    items: [
      { name: "كريب شيكولاتة عادي", desc: "شيكولاتة", price: 70, featured: true },
      { name: "كريب شيكولاتة مكسرات", desc: "شيكولاتة ومكسرات", price: 85 },
      { name: "كريب شيكولاتة موز", desc: "شيكولاتة وموز", price: 80 },
      { name: "كريب شيكولاتة بوريو", desc: "شيكولاتة وبوريو", price: 85 },
      { name: "كريب شيكولاتة موز - تفاح", desc: "شيكولاتة، موز، تفاح", price: 85 },
      { name: "كريب شيكولاتة بيضا", desc: "شيكولاتة بيضا", price: 75 },
      { name: "كريب شيكولاتة مكس", desc: "شيكولاتة مكس", price: 80 },
      { name: "كريب شيكولاتة فواكة", desc: "شيكولاتة وفواكة", price: 85 },
      { name: "كريب لوتس", desc: "لوتس", price: 85 },
      { name: "كريب لوتس فواكة", desc: "لوتس وفواكة", price: 90 }
    ]
  },
  {
    id: "calzone", title: "الكاليزوني", emoji: "🥟",
    items: [
      { name: "كاليزوني فراخ", desc: "فراخ", price: 130 },
      { name: "كاليزوني كرسبي", desc: "كرسبي", price: 130 },
      { name: "كاليزوني شاورما فراخ", desc: "شاورما فراخ", price: 130 },
      { name: "كاليزوني ميكس فراخ", desc: "ميكس فراخ", price: 140 },
      { name: "كاليزوني زنجر", desc: "زنجر", price: 130 },
      { name: "كاليزوني ستريس", desc: "ستريس", price: 130 },
      { name: "كاليزوني سجق", desc: "سجق", price: 125 },
      { name: "كاليزوني سلامي", desc: "سلامي", price: 125 },
      { name: "كاليزوني سوبريم", desc: "سوبريم", price: 140 },
      { name: "كاليزوني مشكل لحوم", desc: "مشكل لحوم", price: 140 },
      { name: "كاليزوني سوسيس", desc: "سوسيس", price: 120 },
      { name: "كاليزوني سوسيس مفروم", desc: "سوسيس مفروم", price: 130 },
      { name: "كاليزوني شاورما لحمة", desc: "شاورما لحمة", price: 135 }
    ]
  },
  {
    id: "meshaltet", title: "فطير مشلتت", emoji: "🥯",
    items: [
      { name: "مشلتت سادة", desc: "فطير مشلتت سادة بالسمن البلدي", price: 60 },
      { name: "مشلتت ست الحسن", desc: "بولة قشطة وعسل", price: 90 }
    ]
  },
  {
    id: "fries", title: "فارم فريتس", emoji: "🍟",
    items: [
      { name: "فارم فريتس سموك تركي", desc: "سموك تركي - استربس - صوص شيدر", price: 100 },
      { name: "فارم فريز استربس", desc: "استربس - صوص شيدر", price: 95 },
      { name: "فارم فريز زنجر", desc: "زنجر - صوص شيدر", price: 95 },
      { name: "فارم فريتس سلامي", desc: "سلامي - استربس - صوص شيدر", price: 95 },
      { name: "فارم فريتس مفروم", desc: "مفروم - صوص شيدر", price: 95 },
      { name: "فارم فريتس سوسيس", desc: "سوسيس - فراخ - صوص شيدر", price: 90 },
      { name: "فارم فريتس فرايز", desc: "فرايز - صوص شيدر", price: 70 },
      { name: "فارم فريتس موزاريلا", desc: "موزاريلا - صوص شيدر", price: 90 }
    ]
  },
  {
    id: "dessert", title: "الحلو والشرقي", emoji: "🍰",
    items: [ { name: "ام علي", desc: "أم علي بالحليب والمكسرات", price: 70 } ]
  },
  {
    id: "appetizers", title: "المقبلات", emoji: "🥗",
    items: [
      { name: "سلطة تومية", desc: "سلطة تومية", price: 25 },
      { name: "سلطة بطاطس", desc: "سلطة بطاطس", price: 25 },
      { name: "سلطة كول سلو", desc: "كول سلو", price: 25 },
      { name: "بطاطس بوم فريت", desc: "بطاطس مقلية", price: 40 },
      { name: "كاتشب", desc: "كاتشب", price: 10 },
      { name: "مخلل", desc: "مخلل", price: 15 },
      { name: "حلقات بصل", desc: "حلقات بصل", price: 40 },
      { name: "4 انواع جبنه موزاريلا", desc: "أصابع موزاريلا", price: 60 }
    ]
  },
  {
    id: "sauces", title: "الصوصات", emoji: "🧴",
    items: [
      { name: "صوص باربكيو", desc: "صوص باربكيو", price: 15 },
      { name: "صوص تايجر", desc: "صوص تايجر", price: 15 },
      { name: "صوص الف جزيرة", desc: "صوص ألف جزيرة", price: 15 },
      { name: "صوص شيدر", desc: "صوص شيدر", price: 15 },
      { name: "صوص بافلو", desc: "صوص بافلو", price: 15 },
      { name: "صوص رانش", desc: "صوص رانش", price: 15 },
      { name: "صوص تكساس برجر", desc: "صوص تكساس برجر", price: 15 },
      { name: "صوص ماستر", desc: "صوص ماستر", price: 15 }
    ]
  },
  {
    id: "drinks", title: "المشروبات", emoji: "🥤",
    items: [
      { name: "مياه معدنية صغير", desc: "مياه معدنية", price: 10 },
      { name: "بيبسي - سفن", desc: "بيبسي أو سفن", price: 20 },
      { name: "لتر بيبسي - سفن", desc: "لتر بيبسي أو سفن", price: 35 }
    ]
  },
  {
    id: "extras", title: "إضافات القائمة", emoji: "➕",
    items: [
      { name: "جبنة موزاريلا", desc: "إضافة جبنة موزاريلا", price: 20 },
      { name: "لحوم", desc: "إضافة لحوم", price: 40 },
      { name: "اسماك", desc: "إضافة أسماك", price: 40 },
      { name: "شاورما فراخ", desc: "إضافة شاورما فراخ", price: 30 },
      { name: "شاورما لحمة", desc: "إضافة شاورما لحمة", price: 35 },
      { name: "بيض", desc: "إضافة بيض", price: 10 },
      { name: "مشروم", desc: "إضافة مشروم", price: 15 },
      { name: "فراخ", desc: "إضافة فراخ", price: 30 },
      { name: "شيش", desc: "إضافة شيش", price: 30 },
      { name: "كاستر", desc: "إضافة كاستر", price: 10 },
      { name: "لبن", desc: "إضافة لبن", price: 10 },
      { name: "جوز هند", desc: "إضافة جوز هند", price: 10 },
      { name: "زبيب", desc: "إضافة زبيب", price: 10 },
      { name: "بندق", desc: "إضافة بندق", price: 15 },
      { name: "سكر", desc: "إضافة سكر", price: 5 },
      { name: "شيكولاتة بيضا", desc: "إضافة شيكولاتة بيضا", price: 15 },
      { name: "شيكولاتة نوتيلا", desc: "إضافة نوتيلا", price: 20 }
    ]
  }
];

let cart = []; 
let itemQty = {}; 

const $ = (sel) => document.querySelector(sel);
const formatPrice = (p) => `${p} ج.م`;

function parseKey(key) {
  const lastDashIndex = key.lastIndexOf('-');
  return { sectionId: key.substring(0, lastDashIndex), index: parseInt(key.substring(lastDashIndex + 1)) };
}
function itemKey(sectionId, index) { return `${sectionId}-${index}`; }
function getCartTotalQty() { return cart.reduce((s, i) => s + i.qty, 0); }
function getCartTotalPrice() { return cart.reduce((s, i) => s + i.qty * i.price, 0); }

function renderMenu() {
  const container = $("#menuSections");
  container.innerHTML = MENU.map((section) => `
    <section class="section" id="${section.id}">
      <h2 class="section-title"><span class="emoji">${section.emoji}</span> ${section.title}</h2>
      <div class="grid">
        ${section.items.map((item, iIdx) => cardHTML(section, item, iIdx)).join("")}
      </div>
    </section>
  `).join("");
}

function cardHTML(section, item, iIdx) {
  const key = itemKey(section.id, iIdx);
  const qty = itemQty[key] || 0;
  const selected = qty > 0 ? "selected" : "";
  const badge = item.featured ? `<span class="badge featured">مميز</span>` : item.spicy ? `<span class="badge spicy">🌶️ حار</span>` : "";
  
  const footer = qty > 0
    ? `<div class="qty-control"><button data-action="dec" data-key="${key}">−</button><span>${qty}</span><button data-action="inc" data-key="${key}">+</button></div>`
    : `<button class="add-btn" data-action="add" data-key="${key}">إضافة +</button>`;

  return `
    <div class="card ${selected}" data-key="${key}" data-section="${section.id}" data-index="${iIdx}">
      <div class="card-top"><div class="card-name">${item.name}</div>${badge}</div>
      <div class="card-desc">${item.desc || ""}</div>
      <div class="card-footer"><span class="price">${formatPrice(item.price)}</span>${footer}</div>
    </div>
  `;
}

function renderCategories() {
  const bar = $("#categoriesBar");
  bar.innerHTML = MENU.map((s, i) => `
    <button class="cat-chip ${i === 0 ? "active" : ""}" data-target="${s.id}">
      <span>${s.emoji}</span> ${s.title}
    </button>
  `).join("");

  bar.addEventListener("click", (e) => {
    const chip = e.target.closest(".cat-chip");
    if (!chip) return;
    document.querySelectorAll(".cat-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    document.getElementById(chip.dataset.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function findItem(sectionId, index) {
  return MENU.find(s => s.id === sectionId)?.items[index];
}

function addItem(sectionId, index) {
  const key = itemKey(sectionId, index);
  const item = findItem(sectionId, index);
  if (!item) return;

  const existing = cart.find(c => c.key === key);
  if (existing) existing.qty += 1;
  else cart.push({ key, sectionId, index, name: item.name, price: item.price, qty: 1 });
  
  itemQty[key] = (itemQty[key] || 0) + 1;
  updateCardUI(key);
  updateCartUI();
  showToast(`تمت إضافة: ${item.name}`);
  bumpCartBadge();
}

function decItem(sectionId, index) {
  const key = itemKey(sectionId, index);
  itemQty[key] = Math.max(0, (itemQty[key] || 0) - 1);

  const existing = cart.find(c => c.key === key);
  if (existing) {
    existing.qty -= 1;
    if (existing.qty <= 0) {
      cart = cart.filter(c => c.key !== key);
      delete itemQty[key];
    }
  }
  updateCardUI(key);
  updateCartUI();
}

function updateCardUI(key) {
  const card = document.querySelector(`.card[data-key="${key}"]`);
  if (!card) return;
  const { sectionId, index } = parseKey(key);
  const qty = itemQty[key] || 0;
  const item = findItem(sectionId, index);

  card.classList.toggle("selected", qty > 0);
  const footer = card.querySelector(".card-footer");

  if (qty > 0) {
    footer.innerHTML = `
      <span class="price">${formatPrice(item.price)}</span>
      <div class="qty-control">
        <button data-action="dec" data-key="${key}">−</button><span>${qty}</span><button data-action="inc" data-key="${key}">+</button>
      </div>`;
  } else {
    footer.innerHTML = `
      <span class="price">${formatPrice(item.price)}</span>
      <button class="add-btn" data-action="add" data-key="${key}">إضافة +</button>`;
  }
}

function updateCartUI() {
  const count = getCartTotalQty();
  $("#cartCount").textContent = count;
  $("#fabCount").textContent = count;
  $("#cartFab").hidden = count === 0;

  const container = $("#cartItems");
  if (cart.length === 0) {
    container.innerHTML = `<p class="empty-msg">السلة فاضية، ابدأ الاختيار 👌</p>`;
  } else {
    container.innerHTML = cart.map(c => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${c.name}</div>
          <div class="cart-item-price">${c.qty} × ${formatPrice(c.price)} = ${formatPrice(c.qty * c.price)}</div>
        </div>
        <div class="qty-control">
          <button data-action="dec" data-key="${c.key}">−</button><span>${c.qty}</span><button data-action="inc" data-key="${c.key}">+</button>
        </div>
      </div>
    `).join("");
  }
  $("#cartTotal").textContent = formatPrice(getCartTotalPrice());
  $("#modalTotal").textContent = formatPrice(getCartTotalPrice());
}

function bumpCartBadge() {
  const el = $("#cartCount");
  el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump");
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (btn) {
    const action = btn.dataset.action;
    const { sectionId, index } = parseKey(btn.dataset.key);
    if (action === "add" || action === "inc") addItem(sectionId, index);
    if (action === "dec") decItem(sectionId, index);
    e.stopPropagation();
    return;
  }
  const card = e.target.closest(".card");
  if (card) {
    const { sectionId, index } = parseKey(card.dataset.key);
    addItem(sectionId, index);
  }
});

function openDrawer() { $("#cartDrawer").classList.add("open"); $("#drawerOverlay").hidden = false; }
function closeDrawer() { $("#cartDrawer").classList.remove("open"); $("#drawerOverlay").hidden = true; }
$("#cartBtn").addEventListener("click", openDrawer);
$("#cartFab").addEventListener("click", openDrawer);
$("#closeDrawer").addEventListener("click", closeDrawer);
$("#drawerOverlay").addEventListener("click", closeDrawer);

$("#openCheckoutBtn").addEventListener("click", () => {
  if (cart.length === 0) { showToast("السلة فاضية!"); return; }
  closeDrawer();
  $("#checkoutModal").classList.add("open");
});

$("#closeModalBtn").addEventListener("click", () => {
  $("#checkoutModal").classList.remove("open");
});

$("#sendTelegramBtn").addEventListener("click", async () => {
  const name = $("#custName").value.trim();
  const phone = $("#custPhone").value.trim();
  const address = $("#custAddress").value.trim();
  const statusMsg = $("#webhookStatus");
  const btn = $("#sendTelegramBtn");

  if (!name || !phone || !address) {
    showToast("برجاء إكمال جميع البيانات أولاً ⚠️");
    return;
  }

  btn.disabled = true;
  statusMsg.textContent = "جاري إرسال الطلب إلى البوت...";
  statusMsg.className = "webhook-status";

  let msg = `🍕 *طلب جديد من Telosaa* 🍕\n`;
  msg += `------------------------------\n`;
  msg += `👤 *الاسم:* ${name}\n`;
  msg += `📱 *الموبايل:* ${phone}\n`;
  msg += `📍 *العنوان:* ${address}\n`;
  msg += `------------------------------\n`;
  msg += `*🛒 الأصناف:*\n\n`;

  cart.forEach((item, index) => {
    msg += `${index + 1}. *${item.name}*\n`;
    msg += `   الكمية: ${item.qty} | المجموع: ${item.qty * item.price} ج\n`;
  });

  msg += `------------------------------\n`;
  msg += `*💵 الإجمالي المطلوب: ${getCartTotalPrice()} ج*\n`;
  msg += `------------------------------\n`;

  const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const formData = new URLSearchParams();
    formData.append("chat_id", CHAT_ID);
    formData.append("text", msg);
    formData.append("parse_mode", "Markdown");

    const res = await fetch(telegramUrl, {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    if (!res.ok || !data.ok) {
      throw new Error(data.description || "حدث خطأ أثناء الإرسال");
    }

    statusMsg.textContent = "✅ تم إرسال طلبك إلى البوت بنجاح!";
    statusMsg.classList.add("success");

    cart = []; 
    itemQty = {};
    document.querySelectorAll(".card").forEach(card => updateCardUI(card.dataset.key));
    updateCartUI();
    $("#custName").value = "";
    $("#custPhone").value = "";
    $("#custAddress").value = "";

    setTimeout(() => {
      $("#checkoutModal").classList.remove("open");
      statusMsg.textContent = "";
    }, 3000);

  } catch (err) {
    statusMsg.textContent = "❌ " + err.message;
    statusMsg.classList.add("error");
  } finally {
    btn.disabled = false;
  }
});

function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2000);
}

renderCategories();
renderMenu();
updateCartUI();
