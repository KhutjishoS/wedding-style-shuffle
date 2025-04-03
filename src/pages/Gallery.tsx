import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { useCart } from "../hooks/useCart";
import { Button } from "../components/ui/button";
import { ShoppingCart, Info, Search } from "lucide-react";
import { toast } from "sonner";
import { ItemDetailsModal } from "../components/ItemDetailsModal";
import { Input } from "../components/ui/input";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const { addItem: addToCart } = useCart();
  const [selectedItem, setSelectedItem] = useState<typeof galleryImages[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    {
      id: "1",
      category: "Ceremonies",
      images: [
        "/images/ceremonie1/1.jpg",
        "/images/ceremonie1/2.jpg",
        "/images/ceremonie1/3.jpg",
        "/images/ceremonie1/4.jpg",
        "/images/ceremonie1/5.jpg"
      ],
      title: "Garden Ceremony",
      price: 2500,
      description: "A romantic outdoor ceremony surrounded by lush gardens and natural beauty.",
      features: [
        "Beautiful garden venue setup",
        "Floral arch and aisle decorations",
        "Seating for up to 100 guests",
        "Sound system and microphone",
        "Ceremony coordination"
      ]
    },
    {
      id: "2",
      category: "Ceremonies",
      images: [
        "/images/ceremonie2/480569696_951514433780261_3288320665349631044_n.jpg",
        "/images/ceremonie2/480551086_951514443780260_2721541515459407422_n.jpg",
        "/images/ceremonie2/480504858_951514450446926_3753842082699191217_n.jpg"
      ],
      title: "Beachfront Vows",
      price: 2800,
      description: "Say 'I do' with the ocean as your backdrop in this stunning beach ceremony.",
      features: [
        "Beach venue setup",
        "Oceanfront ceremony arch",
        "Beach chairs and decor",
        "Sound system",
        "Ceremony coordination"
      ]
    },
    {
      id: "3",
      category: "Ceremonies",
      images: [
        "/images/ceremonie3/480687462_951506617114376_4077395315622307232_n.jpg",
        "/images/ceremonie3/480681934_951506647114373_1585442372476979811_n.jpg",
        "/images/ceremonie3/480875303_951506667114371_6119479256878426417_n.jpg"
      ],
      title: "Historic Chapel",
      price: 3000,
      description: "A timeless ceremony in a historic chapel with classic architecture.",
      features: [
        "Historic venue access",
        "Classic decor elements",
        "Organ music",
        "Seating for 150 guests",
        "Full ceremony coordination"
      ]
    },
    {
      id: "4",
      category: "Ceremonies",
      images: [
        "/images/ceremonie4/480690795_951499777115060_8835219702342839014_n.jpg",
        "/images/ceremonie4/480307391_951500063781698_8448865207850107827_n.jpg",
        "/images/ceremonie4/480687431_951500007115037_7923495200129886526_n.jpg",
        "/images/ceremonie4/480518172_951499813781723_722125075425742965_n.jpg"
      ],
      title: "Vineyard Wedding",
      price: 3200,
      description: "An elegant ceremony among rolling vineyards and scenic views.",
      features: [
        "Vineyard venue access",
        "Wine barrel decor",
        "Outdoor sound system",
        "Seating for 120 guests",
        "Ceremony coordination"
      ]
    },
    {
      id: "5",
      category: "Ceremonies",
      images: [
        "/images/ceremonie5/480666421_951371060461265_3442386647609884713_n.jpg",
        "/images/ceremonie5/480667759_951371037127934_3789420881818881932_n.jpg",
        "/images/ceremonie5/480606359_951371047127933_1235531454787786069_n.jpg",
        "/images/ceremonie5/480641843_951371033794601_1128627670528069349_n.jpg"
      ],
      title: "Mountain View",
      price: 3500,
      description: "A breathtaking ceremony with panoramic mountain views.",
      features: [
        "Mountain venue access",
        "Natural decor elements",
        "Outdoor sound system",
        "Seating for 100 guests",
        "Full ceremony coordination"
      ]
    },
    {
      id: "6",
      category: "Ceremonies",
      images: [
        "/images/ceremonie6/480557863_949934343938270_7048869376672242805_n.jpg",
        "/images/ceremonie6/480308728_949934010604970_5448006679543255545_n.jpg",
        "/images/ceremonie6/480627355_949934307271607_674172796196701207_n.jpg",
        "/images/ceremonie6/480611184_949934257271612_5901421189141295675_n.jpg"
      ],
      title: "Rustic Barn",
      price: 2800,
      description: "A charming ceremony in a beautifully restored barn setting.",
      features: [
        "Barn venue access",
        "Rustic decor elements",
        "String lighting",
        "Seating for 150 guests",
        "Ceremony coordination"
      ]
    },
    {
      id: "7",
      category: "Ceremonies",
      images: [
        "/images/ceremonie7/480204908_949147047350333_1092455940039131129_n.jpg",
        "/images/ceremonie7/480325490_949147100683661_6837484454705760474_n.jpg",
        "/images/ceremonie7/480293938_949147007350337_1203397668394910_n.jpg",
        "/images/ceremonie7/480278083_949153780682993_2578034560435014624_n.jpg",
        "/images/ceremonie7/480300924_949153744016330_8536233043680596666_n.jpg",
        "/images/ceremonie7/480510569_949153717349666_1500864727626464696_n.jpg"
      ],
      title: "Botanical Garden",
      price: 3000,
      description: "A romantic ceremony surrounded by exotic plants and flowers.",
      features: [
        "Garden venue access",
        "Floral arrangements",
        "Garden seating",
        "Seating for 120 guests",
        "Full ceremony coordination"
      ]
    },
    {
      id: "8",
      category: "Ceremonies",
      images: [
        "/images/ceremonie8/479882274_949147097350328_7953661409410526463_n.jpg",
        "/images/ceremonie8/480246506_949147117350326_5998494924542205811_n.jpg",
        "/images/ceremonie8/480299894_949147037350334_4099814658196227200_n.jpg"
      ],
      title: "Lakeside Ceremony",
      price: 3200,
      description: "A serene ceremony by the water with stunning reflections.",
      features: [
        "Lakeside venue access",
        "Waterfront decor",
        "Outdoor sound system",
        "Seating for 100 guests",
        "Ceremony coordination"
      ]
    },
    {
      id: "9",
      category: "Ceremonies",
      images: [
        "/images/ceremonie9/472715511_1971647216676860_9009985963860647129_n.jpg",
        "/images/ceremonie9/472698696_1971647183343530_8644438133968168739_n.jpg",
        "/images/ceremonie9/472714361_1971647186676863_4246925356646610416_n.jpg"
      ],
      title: "Historic Mansion",
      price: 4000,
      description: "An elegant ceremony in a historic mansion with grand architecture.",
      features: [
        "Mansion venue access",
        "Classic decor elements",
        "Grand piano music",
        "Seating for 200 guests",
        "Full ceremony coordination"
      ]
    },
    {
      id: "10",
      category: "Ceremonies",
      images: [
        "/images/ceremonie10/470157714_1953974151777500_417009150538730383_n.jpg",
        "/images/ceremonie10/470130406_1953973888444193_8856148250687304927_n.jpg",
        "/images/ceremonie10/470157972_1953973938444188_826891119728076501_n.jpg"
      ],
      title: "Desert Oasis",
      price: 3500,
      description: "A unique ceremony in a beautiful desert setting with sunset views.",
      features: [
        "Desert venue access",
        "Desert-inspired decor",
        "Outdoor sound system",
        "Seating for 100 guests",
        "Ceremony coordination"
      ]
    },
    {
      id: "11",
      category: "Corporate Events",
      images: [
        "/images/event1/477425350_945391917725846_2275333863110910385_n.jpg",
        "/images/event1/476854076_945392117725826_5264583881646746941_n.jpg",
        "/images/event1/476950285_945391857725852_1721840569329504978_n.jpg",
        "/images/event1/478101285_945391791059192_4872123950632384619_n.jpg"
      ],
      title: "Elegant Reception",
      price: 3500,
      description: "A sophisticated reception with modern elegance and timeless charm.",
      features: [
        "Elegant table settings",
        "Centerpiece arrangements",
        "Lighting design",
        "Dance floor setup",
        "Reception coordination"
      ]
    },
    {
      id: "12",
      category: "Corporate Events",
      images: [
        "/images/event2/476620103_944198907845147_1097655687571343343_n.jpg",
        "/images/event2/476621310_944198927845145_2395653523263969957_n.jpg",
        "/images/event2/476209619_944199121178459_8755346837352040850_n.jpg",
        "/images/event2/475595614_944198914511813_2317221297114989194_n.jpg"
      ],
      title: "Conference Setup",
      price: 4000,
      description: "Professional conference setup with state-of-the-art equipment and comfortable seating.",
      features: [
        "Conference room setup",
        "Audio-visual equipment",
        "Comfortable seating",
        "Refreshment station",
        "Event coordination"
      ]
    },
    {
      id: "13",
      category: "Corporate Events",
      images: [
        "/images/event3/476349525_943416221256749_2042576069572196311_n.jpg",
        "/images/event3/476135326_943416367923401_4938398655207051434_n.jpg",
        "/images/event3/476209910_944184817846556_7612507194160956890_n.jpg",
        "/images/event3/476813326_944184977846540_480112867328119407_n.jpg",
        "/images/event3/476835313_944184834513221_5443111897631582144_n.jpg"
      ],
      title: "Team Building",
      price: 2800,
      description: "Engaging team building activities in a modern and comfortable setting.",
      features: [
        "Activity space setup",
        "Team building equipment",
        "Refreshments",
        "Facilitator coordination",
        "Event materials"
      ]
    },
    {
      id: "14",
      category: "Corporate Events",
      images: [
        "/images/event4/476206783_944183284513376_3421855989492884076_n.jpg",
        "/images/event4/476237127_944183384513366_3074918038533207490_n.jpg",
        "/images/event4/477441551_944183441180027_5287123705831039807_n.jpg"
      ],
      title: "Product Launch",
      price: 4500,
      description: "Impressive product launch event with modern staging and presentation setup.",
      features: [
        "Stage setup",
        "Lighting and sound",
        "Product display area",
        "Guest seating",
        "Event coordination"
      ]
    },
    {
      id: "15",
      category: "Corporate Events",
      images: [
        "/images/event5/476235655_943413834590321_6886689627765012556_n.jpg",
        "/images/event5/476228641_943413947923643_527022431656459600_n.jpg",
        "/images/event5/476251150_943414027923635_7073914065445332359_n.jpg",
        "/images/event5/476371029_943413687923669_9141337536229538665_n.jpg"
      ],
      title: "Awards Ceremony",
      price: 3800,
      description: "Elegant awards ceremony setup with professional staging and lighting.",
      features: [
        "Award stage setup",
        "Professional lighting",
        "Guest seating",
        "Award presentation area",
        "Event coordination"
      ]
    },
    {
      id: "16",
      category: "Corporate Events",
      images: [
        "/images/event6/473007754_924739559791082_5100741358218688006_n.jpg",
        "/images/event6/473428579_924739653124406_2694117564947759234_n.jpg",
        "/images/event6/473249770_924739549791083_8068493742086280090_n.jpg"
      ],
      title: "Networking Event",
      price: 3200,
      description: "Modern networking event setup with comfortable seating and refreshment areas.",
      features: [
        "Networking space setup",
        "Comfortable seating",
        "Refreshment stations",
        "Name badge setup",
        "Event coordination"
      ]
    },
    {
      id: "17",
      category: "Wedding Decor",
      images: [
        "/images/Decor1/480519571_950564120541959_6561017750502438923_n.jpg",
        "/images/Decor1/480769876_950564020541969_149659854745977082_n.jpg",
        "/images/Decor1/480484047_950564013875303_7598497053618817455_n.jpg",
        "/images/Decor1/480312193_950674530530918_166651204163619076_n.jpg",
        "/images/Decor1/480525386_950674633864241_8708300577779764694_n.jpg",
        "/images/Decor1/480299605_950674933864211_9071565449072713950_n.jpg"
      ],
      title: "Floral Arrangements",
      price: 1800,
      description: "Stunning floral arrangements that bring natural beauty to your celebration.",
      features: [
        "Bridal bouquet",
        "Boutonnieres",
        "Centerpieces",
        "Aisle decorations",
        "Custom floral design"
      ]
    },
    {
      id: "29",
      category: "Wedding Decor",
      images: [
        "/images/Decor2/480566866_949130047352033_3661623222168660995_n.jpg",
        "/images/Decor2/480215227_949130034018701_2875916129021066705_n.jpg",
        "/images/Decor2/480300932_949131100685261_1657070326597583254_n.jpg",
        "/images/Decor2/480299309_949131104018594_5373892037800311470_n.jpg",
        "/images/Decor2/480220287_949131084018596_3474092409130204571_n.jpg"
      ],
      title: "Table Settings",
      price: 2200,
      description: "Elegant table settings with premium linens and dinnerware.",
      features: [
        "Premium table linens",
        "Charger plates",
        "Glassware",
        "Flatware sets",
        "Napkin styling"
      ]
    },
    {
      id: "30",
      category: "Wedding Decor",
      images: [
        "/images/Decor3/473324084_924746803123691_9140439091199319172_n.jpg",
        "/images/Decor3/476610429_943417547923283_8586594225736855607_n.jpg",
        "/images/Decor3/476368854_943417374589967_5330615398921300932_n.jpg",
        "/images/Decor3/476352652_943417264589978_2087073601347285971_n.jpg",
        "/images/Decor3/476183988_943417574589947_6549686267085355357_n.jpg"
      ],
      title: "Lighting Design",
      price: 2500,
      description: "Romantic lighting setup to create the perfect ambiance.",
      features: [
        "String lights",
        "Uplighting",
        "Candle arrangements",
        "Chandeliers",
        "Lighting control"
      ]
    },
    {
      id: "31",
      category: "Wedding Decor",
      images: [
        "/images/Decor4/481024875_1080549674096308_751818905887658719_n.jpg",
        "/images/Decor4/473174004_925047946426910_2024386237863409596_n.jpg",
        "/images/Decor4/473191438_925047976426907_4458028424998008246_n.jpg",
        "/images/Decor4/473333805_925047889760249_6924545236427946720_n.jpg",
        "/images/Decor4/473288876_925047739760264_8245079596868496523_n.jpg",
        "/images/Decor4/473127611_925048033093568_5049758999471303595_n.jpg",
        "/images/Decor4/473015821_925047713093600_8579081804805670211_n.jpg",
        "/images/Decor4/473007743_925047973093574_2319309368453168446_n.jpg",
        "/images/Decor4/473186255_925048023093569_5707513431270138061_n.jpg"
      ],
      title: "Backdrop Design",
      price: 1800,
      description: "Stunning backdrops for ceremony and photo opportunities.",
      features: [
        "Custom backdrop design",
        "Installation",
        "Lighting effects",
        "Floral accents",
        "Setup and removal"
      ]
    },
    {
      id: "32",
      category: "Wedding Decor",
      images: [
        "/images/Decor5/473008558_924395903158781_8212304284766433000_n.jpg",
        "/images/Decor5/472986377_924395753158796_1858331941475819271_n.jpg",
        "/images/Decor5/473268718_924396183158753_4570905943769857576_n.jpg",
        "/images/Decor5/473333155_924396206492084_4683019679963366232_n.jpg",
        "/images/Decor5/473007395_924395923158779_6206820666277671145_n.jpg",
        "/images/Decor5/472922935_924395896492115_2646665699950171413_n.jpg"
      ],
      title: "Welcome Sign",
      price: 1200,
      description: "Beautiful welcome signs to greet your guests.",
      features: [
        "Custom design",
        "Premium materials",
        "Stand included",
        "Lighting options",
        "Setup service"
      ]
    },
    {
      id: "33",
      category: "Wedding Decor",
      images: [
        "/images/Decor6/473010842_923655709899467_8282433745859638531_n.jpg",
        "/images/Decor6/472920698_923655829899455_7313299540966171790_n.jpg",
        "/images/Decor6/472908787_923664096565295_6565995894838276276_n.jpg",
        "/images/Decor6/473008440_923664259898612_4220638862804562410_n.jpg",
        "/images/Decor6/472936788_923664276565277_389951432683186608_n.jpg",
        "/images/Decor6/472962591_923664419898596_980290574034003282_n.jpg",
        "/images/Decor6/473062965_923664053231966_5754862583626666502_n.jpg",
        "/images/Decor6/473034361_923664256565279_1620549993213343656_n.jpg"
      ],
      title: "Seating Chart",
      price: 1500,
      description: "Elegant seating chart display for your reception.",
      features: [
        "Custom design",
        "Guest list integration",
        "Stand included",
        "Lighting effects",
        "Setup service"
      ]
    },
    {
      id: "34",
      category: "Wedding Decor",
      images: [
        "/images/Decor7/472552636_1971073533400895_5450319500842116347_n.jpg",
        "/images/Decor7/472715909_1971073786734203_6165175512180546639_n.jpg",
        "/images/Decor7/472684313_1971073416734240_2315219335458938119_n.jpg",
        "/images/Decor7/472671698_1971073670067548_9103709789134854670_n.jpg",
        "/images/Decor7/472718198_1971073390067576_5047368037015793917_n.jpg",
        "/images/Decor7/472744194_1971073473400901_1555917284493928212_n.jpg"
      ],
      title: "Cake Table",
      price: 2000,
      description: "Beautiful cake table setup with custom decorations.",
      features: [
        "Custom backdrop",
        "Table styling",
        "Lighting effects",
        "Cake stand",
        "Setup service"
      ]
    },
    {
      id: "35",
      category: "Wedding Decor",
      images: [
        "/images/Decor4/473288876_925047739760264_8245079596868496523_n.jpg",
        "/images/Decor4/473127611_925048033093568_5049758999471303595_n.jpg",
        "/images/Decor4/473015821_925047713093600_8579081804805670211_n.jpg",
        "/images/Decor4/473007743_925047973093574_2319309368453168446_n.jpg",
        "/images/Decor4/473186255_925048023093569_5707513431270138061_n.jpg"
      ],
      title: "Guest Book Table",
      price: 1500,
      description: "Elegant guest book table setup with custom styling.",
      features: [
        "Table styling",
        "Guest book display",
        "Pen set",
        "Lighting effects",
        "Setup service"
      ]
    },
    {
      id: "36",
      category: "Wedding Decor",
      images: [
        "/images/Decor9/470179549_1953964678445114_9110234904585062032_n.jpg",
        "/images/Decor9/470169282_1953964801778435_3314892056772513572_n.jpg",
        "/images/Decor9/470179049_1953964641778451_774849512482397424_n.jpg",
        "/images/Decor9/470197122_1953964815111767_8150345664670780808_n.jpg",
        "/images/Decor9/470150335_1953964488445133_2307062755690963875_n.jpg"
      ],
      title: "Bar Setup",
      price: 2800,
      description: "Stylish bar setup with custom decorations and lighting.",
      features: [
        "Bar backdrop",
        "Lighting effects",
        "Bar signage",
        "Table styling",
        "Setup service"
      ]
    },
    {
      id: "37",
      category: "Wedding Decor",
      images: [
        "/images/Decor10/469665732_1950787965429452_4250039758769478207_n.jpg",
        "/images/Decor10/469590541_1950790122095903_2589554214316568303_n.jpg",
        "/images/Decor10/469645445_1950790218762560_4152873835194737227_n.jpg",
        "/images/Decor10/469645441_1950790132095902_7523716808055150143_n.jpg",
        "/images/Decor10/469809149_1950790175429231_1263128272750905012_n.jpg",
        "/images/Decor10/469548398_1950790142095901_8800178080462167705_n.jpg"
      ],
      title: "Dance Floor",
      price: 3000,
      description: "Stunning dance floor setup with custom lighting and effects.",
      features: [
        "LED lighting",
        "Custom design",
        "Lighting effects",
        "Setup service",
        "Removal service"
      ]
    },
    {
      id: "18",
      category: "Couples",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ],
      title: "Sunset Portrait",
      price: 1200,
      description: "Capture your love story with a romantic sunset photo session.",
      features: [
        "2-hour photo session",
        "Professional photographer",
        "All edited photos",
        "Online gallery",
        "Print release"
      ]
    },
    {
      id: "19",
      category: "BirthDay",
      images: [
        "/images/Choice1/1.jpg",
        "/images/Choice1/2.jpg",
        "/images/Choice1/3.jpg"
      ],
      title: "Choice 1",
      price: 1200,
      description: "Stunning balloon arch decoration perfect for birthday celebrations.",
      features: [
        "Custom color scheme",
        "Premium quality balloons",
        "Professional installation",
        "Custom signage option",
        "Day-of setup"
      ]
    },
    {
      id: "20",
      category: "BirthDay",
      images: [
        "/images/Choice2/1.jpg",
        "/images/Choice2/2.jpg",
        "/images/Choice2/3.jpg",
        "/images/Choice2/4.jpg"
      ],
      title: "Choice 2",
      price: 1500,
      description: "Elegant cake table setup with custom decorations and lighting.",
      features: [
        "Custom cake stand",
        "Decorative backdrop",
        "Ambient lighting",
        "Coordinated tableware",
        "Setup and styling"
      ]
    },
    {
      id: "21",
      category: "BirthDay",
      images: [
        "/images/Choice3/1.jpg",
        "/images/Choice3/2.jpg",
        "/images/Choice3/3.jpg",
        "/images/Choice3/4.jpg"
      ],
      title: "Choice 3",
      price: 1800,
      description: "Fun and interactive photo booth with props and instant prints.",
      features: [
        "Custom backdrop",
        "Props collection",
        "Instant printing",
        "Digital copies",
        "Attendant service"
      ]
    },
    {
      id: "22",
      category: "BirthDay",
      images: [
        "/images/Choice4/1.jpg",
        "/images/Choice4/2.jpg",
        "/images/Choice4/3.jpg",
        "/images/Choice4/4.jpg"
      ],
      title: "Choice 4",
      price: 2000,
      description: "Professional entertainment package including music and activities.",
      features: [
        "DJ service",
        "Interactive games",
        "Party favors",
        "Sound system",
        "MC service"
      ]
    },
    {
      id: "23",
      category: "BirthDay",
      images: [
        "/images/Choice5/1.jpg",
        "/images/Choice5/2.jpg"
      ],
      title: "Choice 5",
      price: 2500,
      description: "Delicious catering service with customizable menu options.",
      features: [
        "Custom menu planning",
        "Professional staff",
        "Table setup",
        "Beverage service",
        "Cleanup service"
      ]
    },
    {
      id: "24",
      category: "BirthDay",
      images: [
        "/images/Choice6/1.jpg",
        "/images/Choice6/2.jpg",
        "/images/Choice6/3.jpg"
      ],
      title: "Choice 6",
      price: 3000,
      description: "Complete venue transformation with themed decorations.",
      features: [
        "Custom theme design",
        "Ceiling decorations",
        "Table centerpieces",
        "Wall decorations",
        "Setup and removal"
      ]
    },
    {
      id: "25",
      category: "BirthDay",
      images: [
        "/images/Choice7/1.jpg",
        "/images/Choice7/2.jpg",
        "/images/Choice7/3.jpg"
      ],
      title: "Choice 7",
      price: 800,
      description: "Customized party favors for guests to take home.",
      features: [
        "Custom design",
        "Personalized items",
        "Gift wrapping",
        "Display setup",
        "Quantity options"
      ]
    },
    {
      id: "26",
      category: "BirthDay",
      images: [
        "/images/Choice8/1.jpg",
        "/images/Choice8/2.jpg",
        "/images/Choice8/3.jpg",
        "/images/Choice8/4.jpg",
        "/images/Choice8/5.jpg"
      ],
      title: "Choice 8",
      price: 1500,
      description: "Professional lighting setup to create the perfect atmosphere.",
      features: [
        "Custom lighting design",
        "Color coordination",
        "Uplighting",
        "String lights",
        "Professional setup"
      ]
    },
    {
      id: "27",
      category: "BirthDay",
      images: [
        "/images/Choice9/3.jpg",
        "/images/Choice9/4.jpg",
        "/images/Choice9/5.jpg",
        "/images/Choice9/6.jpg"
      ],
      title: "Choice 9",
      price: 3500,
      description: "Complete birthday event planning and coordination service.",
      features: [
        "Full event planning",
        "Vendor coordination",
        "Timeline management",
        "Budget planning",
        "Day-of coordination"
      ]
    },
    {
      id: "28",
      category: "BirthDay",
      images: [
        "/images/Choice10/1.jpg",
        "/images/Choice10/2.jpg"
      ],
      title: "Choice 10",
      price: 1200,
      description: "Special effects and entertainment to make the celebration memorable.",
      features: [
        "Confetti cannons",
        "Bubble machines",
        "Fog effects",
        "LED displays",
        "Professional operation"
      ]
    }
  ];

  const categories = ["All", "Ceremonies", "Corporate Events", "Wedding Decor", "Birthday"];

  const filteredImages = galleryImages.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item: typeof galleryImages[0]) => {
    addToCart({
      id: item.id,
      name: item.title,
      image: item.images ? item.images[0] : item.image,
      price: item.price
    });
    toast.success("Added to cart", {
      description: `${item.title} has been added to your cart`,
      duration: 3000,
    });
  };

  return (
    <div className="page-transition-container">
      <section className="py-20 px-4 bg-rose/5 mt-16">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-rose/10 text-rose text-xs font-medium tracking-wide mb-3">
              Our Products & Services
            </span>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Our Products & Services
            </h1>
            <p className="text-charcoal/70 max-w-3xl mx-auto">
              Browse our collection of stunning events and be inspired for your special occasion.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100} className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/50 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search by title or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-base border-rose/20 focus:border-rose focus:ring-rose"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100} className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === "All"
                  ? "bg-rose text-white"
                  : "bg-white text-charcoal hover:bg-rose/5"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("Ceremonies")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === "Ceremonies"
                  ? "bg-rose text-white"
                  : "bg-white text-charcoal hover:bg-rose/5"
              }`}
            >
              Ceremonies
            </button>
            <button
              onClick={() => setSelectedCategory("Corporate Events")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === "Corporate Events"
                  ? "bg-rose text-white"
                  : "bg-white text-charcoal hover:bg-rose/5"
              }`}
            >
              Corporate Events
            </button>
            <button
              onClick={() => setSelectedCategory("Wedding Decor")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === "Wedding Decor"
                  ? "bg-rose text-white"
                  : "bg-white text-charcoal hover:bg-rose/5"
              }`}
            >
              Wedding Decor
            </button>
              <button
              onClick={() => setSelectedCategory("Birthday")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === "Birthday"
                  ? "bg-rose text-white"
                  : "bg-white text-charcoal hover:bg-rose/5"
              }`}
            >
              Birthday
              </button>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 50}>
                <div className="overflow-hidden rounded-lg shadow-sm">
                  <div className="relative">
                    {item.images ? (
                      <ImageCarousel images={item.images} />
                    ) : (
                    <img 
                      src={item.image} 
                      alt={item.title} 
                        className="w-full h-80 object-cover"
                    />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                        <p className="text-sm font-medium text-rose/90 mb-1">{item.category}</p>
                        <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                        <p className="text-lg font-medium mb-4">R {item.price.toFixed(2)}</p>
                        <div className="flex gap-2">
                          <Button
                            variant="secondary"
                            size="sm"
                            className="flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToCart(item);
                            }}
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                          </Button>
                          <Button
                            variant="secondary"
                            size="sm"
                            className="flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedItem(item);
                            }}
                          >
                            <Info className="w-4 h-4 mr-2" />
                            Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />

      {selectedItem && (
        <ItemDetailsModal
          item={{
            id: selectedItem.id,
            name: selectedItem.title,
            image: selectedItem.images ? selectedItem.images[0] : selectedItem.image,
            images: selectedItem.images,
            price: selectedItem.price,
            category: selectedItem.category,
            description: selectedItem.description,
            features: selectedItem.features
          }}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={() => handleAddToCart(selectedItem)}
        />
      )}
    </div>
  );
};

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative group">
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img 
                src={image} 
                alt={`Image ${index + 1}`}
                className="w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100 z-10"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100 z-10"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
