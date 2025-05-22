import Image from "next/image";
import Link from "next/link";
import Citation from "@/components/Citation";
import first from "@/public/first.svg";

import tsa from "@/public/tsa.png";

export default function Reference() {
  return (
    <main className="bg-white flex flex-col items-center justify-center pb-[5%]">
      <section className="flex items-center justify-center pt-16 md:pt-24 flex-col bg-white">
        <h1 className="text-center text-6xl lg:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-800 pb-3">
          Reference Page
        </h1>

        <Link
          href={"https://tsaweb.org/"}
          target="_blank"
          className="w-full flex justify-center"
        >
          <Image
            src={tsa}
            alt="KY TSA logo"
            className="w-1/2 lg:w-1/3 xl:w-1/5"
          />
        </Link>
        <h2 className="center-text mt-6">
          This website (CraftRoots) was created for the 2024-2025 Technology
          Student Association Webmaster Competition and is strictly fictional.
          All information, links, and documents required by the competition
          guidelines are provided below.
        </h2>
        <h3 className="flex mt-2 mb-0 px-4">
          <Image src={first} alt="" className="w-[30px]" />
          <p className="text-center">
            Webmaster 1st Place @ TSA State Conference!
          </p>
        </h3>
      </section>

      <section className="bg-white mt-6 w-[95vw] sm:w-3/4 md:w-2/3 lg:w-3/5 text-center">
        <h3 className="font-bold text-3xl">General Information</h3>
        <p>
          The website was coded using Javascript, HTML, and CSS. It is being
          hosted using Vercel Hosting services.
        </p>
        <p>
          The following frameworks and software technologies were used to create
          this website:
        </p>
        <p>NextJS, ReactJS, TailwindCSS, Framer Motion</p>
        <p>
          The entire website, including code and content, was created by our
          team. We did not use any templates or pre-built components.
        </p>
        <p className="font-bold">
          TSA Work Log:{" "}
          <Link
            href={"/forms/work-log.pdf"}
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            Here
          </Link>
        </p>
        <p className="font-bold">
          TSA Copyright Checklist:{" "}
          <Link
            href={"/forms/copyright.pdf"}
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            Here
          </Link>
        </p>
        {/* <p>
          Our GitHub repository can be found{" "}
          <Link
            href="/"
            target="_blank"
            className="text-blue-500 hover:underline "
          >
            here
          </Link>
          .
        </p> */}
      </section>

      <section className="bg-white mt-6 w-[95vw] sm:w-3/4 md:w-2/3 lg:w-3/5 xl:w-1/2 text-center flex flex-col items-center justify-center">
        <h3 className="font-bold text-3xl text-center">Sitemap</h3>
        <p>For ease of access, all pages of this website are listed below:</p>
        <ul className="flex flex-col items-start font-bold">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="">
            <p className="text-left">Our Story:</p>
            <ul className="flex flex-col items-start ml-8 font-normal">
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reference" className="hover:underline">
                  Reference
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/menu" className="hover:underline">
              Our Menu
            </Link>
          </li>
          <li className="">
            <p className="text-left">About Our Food:</p>
            <ul className="flex flex-col items-start ml-8 font-normal">
              <li>
                <Link href="/farm-to-table" className="hover:underline">
                  Farm To Table
                </Link>
              </li>
              <li>
                <Link href="/preparation" className="hover:underline">
                  Preparation
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:underline">
                  Sustainability
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/reserve" className="hover:underline">
              Reserve
            </Link>
          </li>
        </ul>
      </section>

      <section className="bg-white mt-6 w-[95vw] sm:w-3/4 md:w-2/3 lg:w-3/5 text-center">
        <h3 className="font-bold text-3xl">Media Sources</h3>
        <p>
          All media sources, including images, audios, and videos, are listed
          below (some designs were created by team members ):
        </p>
        <ol type="1" className="list-decimal list-inside">
          <li>
            <Citation
              author="Hannah Loewentheil"
              authorLink="hi"
              type="image"
              source="Tasty"
              sourceLink="https://tasty.co/article/hannahloewentheil/best-mocktails"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Wikipedia"
              sourceLink="https://en.wikipedia.org/wiki/Technology_Student_Association#/media/File:Technology_Student_Association_Emblem.svg"
            />
          </li>
          <li>
            <Citation
              author="Stefanie Taylor"
              authorLink="https://zestforever.com/author/stefanie-taylor/"
              type="image"
              source="zestforever"
              sourceLink="https://zestforever.com/plant-based-food-combining/"
            />
          </li>
          <li>
            <Citation
              author="Bosman Physio Upington"
              authorLink="https://www.instagram.com/bosman_physio_upington/"
              type="image"
              source="Instagram"
              sourceLink="https://www.instagram.com/p/DJoYyDoo6WS/"
            />
          </li>
          <li>
            <Citation
              author="Farmhouse Sunflower "
              authorLink=""
              type="image"
              source="Farmhouse Sunflower"
              sourceLink="https://farmhousesunflower.wordpress.com/"
            />
          </li>
          <li>
            <Citation
              author="Cassie Smallwood"
              authorLink="https://www.cassiesmallwood.com/"
              type="image"
              source="Cassie Smallwood"
              sourceLink="https://www.cassiesmallwood.com/fruit-coloring-sheets/"
            />
          </li>
          <li>
            <Citation
              author="Yehor Vlasenko"
              authorLink="https://www.dreamstime.com/pandavector_info"
              type="image"
              source="Dreamstime"
              sourceLink="https://www.dreamstime.com/blueberry-berries-sweet-fruit-fruit-single-icon-outline-style-vector-symbol-stock-illustration-blueberry-berries-sweet-fruit-image99713835"
            />
          </li>
          <li>
            <Citation
              author="MarcoFood"
              authorLink="https://stock.adobe.com/contributor/206979041/marcofood?load_type=author&prev_url=detail"
              type="image"
              source="Adobe Stock"
              sourceLink="https://stock.adobe.com/search?k=tomato&asset_id=419231073"
            />
          </li>
          <li>
            <Citation
              author="Savany"
              authorLink="https://www.istockphoto.com/portfolio/Savany?mediatype=photography"
              type="image"
              source="iStock Photo"
              sourceLink="https://www.istockphoto.com/photo/slice-of-orange-gm185311615-19303639"
            />
          </li>
          <li>
            <Citation
              author="Belchonock"
              authorLink="https://depositphotos.com/portfolio-1177973.html?content=photo"
              type="image"
              source="Deposit Photos"
              sourceLink="https://depositphotos.com/serie/185027828.html?qview=87170276"
            />
          </li>
          <li>
            <Citation
              author="rraya"
              authorLink="https://www.istockphoto.com/search/photographer?photographer=rraya&assettype=image&family=creative"
              type="image"
              source="iStock Photo"
              sourceLink="https://www.istockphoto.com/vector/hand-drawn-chili-peppers-on-white-background-gm1221572765-358130307"
            />
          </li>
          <li>
            <Citation
              author="A 5"
              authorLink="https://www.shutterstock.com/g/falisdeka"
              type="image"
              source="shutterstock"
              sourceLink="https://www.shutterstock.com/image-vector/long-beans-line-vector-illustration-isolated-1934352110"
            />
          </li>
          <li>
            <Citation
              author="Setory"
              authorLink="https://www.dreamstime.com/setory_info"
              type="image"
              source="dreamstime"
              sourceLink="https://www.dreamstime.com/stock-illustration-hand-drawn-celery-icon-vector-badge-vegetable-old-ink-style-brochures-banner-restaurant-menu-market-image87656003"
            />
          </li>
          <li>
            <Citation
              author="Cotomag"
              authorLink="https://www.emag.ro/cotomfvg/169176/v?ref=see_vendor_page"
              type="image"
              source="emag"
              sourceLink="https://www.emag.ro/carte-de-colorat-legume-si-verdeturi-sanatoase-coloreaza-scrie-invata-coto17/pd/DBCTMK3BM/"
            />
          </li>
          <li>
            <Citation
              author="FonDesign"
              authorLink="https://www.shutterstock.com/g/kozy_place"
              type="image"
              source="shutterstock"
              sourceLink="https://www.shutterstock.com/image-vector/ginger-root-line-vector-illustration-detailed-2000862851"
            />
          </li>
          <li>
            <Citation
              author="Setory"
              authorLink="https://www.vectorstock.com/royalty-free-vectors/vectors-by_setory"
              type="image"
              source="Vectorstock"
              sourceLink="https://www.vectorstock.com/royalty-free-vector/cauliflower-outline-icon-vector-38167589"
            />
          </li>
          <li>
            <Citation
              author="FonDesign"
              authorLink="https://www.shutterstock.com/g/kozy_place"
              type="image"
              source="shutterstock"
              sourceLink="https://www.shutterstock.com/image-vector/spinach-line-vector-illustration-detailed-food-2000862812"
            />
          </li>
          <li>
            <Citation
              author="Setory"
              authorLink="https://www.vectorstock.com/royalty-free-vectors/vectors-by_setory"
              type="image"
              source="vectorstock"
              sourceLink="https://www.vectorstock.com/royalty-free-vector/green-pea-vegetable-outline-icon-vector-38167600"
            />
          </li>
          <li>
            <Citation
              author="ajt"
              authorLink="https://www.istockphoto.com/portfolio/ajt?mediatype=photography"
              type="image"
              source="istockphoto"
              sourceLink="https://www.istockphoto.com/photo/cucumber-slice-on-white-gm953092192-260193305"
            />
          </li>
          <li>
            <Citation
              author="Ashleigh Shanti"
              authorLink="https://www.bonappetit.com/contributor/ashleigh-shanti"
              type="image"
              source="bonappetit.com"
              sourceLink="https://www.bonappetit.com/recipe/collard-greens-salad-with-fried-plantain-and-sumac"
            />
          </li>
          <li>
            <Citation
              author="Chrissy Tracey"
              authorLink="https://www.bonappetit.com/contributor/chrissy-tracey"
              type="image"
              source="bonappetit.com"
              sourceLink="https://www.bonappetit.com/recipe/sun-gold-balsamic-pasta"
            />
          </li>
          <li>
            <Citation
              author="Chris Morocco"
              authorLink="https://www.eatingwell.com/author/carolyn-casner/"
              type="image"
              source="bonappetit.com"
              sourceLink="https://www.bonappetit.com/recipe/coconut-braised-mushrooms-with-ginger-and-scallions"
            />
          </li>
          <li>
            <Citation
              author="Carolyn Casner"
              authorLink="https://www.eatingwell.com/author/carolyn-casner/"
              type="image"
              source="eatingwell.com"
              sourceLink="https://www.eatingwell.com/recipe/278134/tofu-tacos/"
            />
          </li>
          <li>
            <Citation
              author="An Uong"
              authorLink="https://www.bonappetit.com/contributor/an-uong"
              type="image"
              source="bonappetit.com"
              sourceLink="https://www.bonappetit.com/recipe/vegan-pho"
            />
          </li>
          <li>
            <Citation
              author="Chris Morocco"
              authorLink="https://www.bonappetit.com/contributor/chris-morocco"
              type="image"
              source="bonappetit.com"
              sourceLink="https://www.bonappetit.com/story/miso-polenta"
            />
          </li>
          <li>
            <Citation
              author="'The Foodie Girl'"
              authorLink="https://peri-winklewellness.com/author/foodiegirl/"
              type="image"
              source="peri-winkle-wellness"
              sourceLink="https://peri-winklewellness.com/2023/02/21/hearty-tomato-soup/"
            />
          </li>
          <li>
            <Citation
              author="Hetty McKinnon"
              authorLink="https://www.bonappetit.com/contributor/hetty-mckinnon"
              type="image"
              source="bonappetit.com"
              sourceLink="https://www.bonappetit.com/recipe/broccoli-and-cashew-cream-soup"
            />
          </li>
          <li>
            <Citation
              author="Serena Dai"
              authorLink="https://www.bonappetit.com/contributor/serena-dai"
              type="image"
              source="bonappetit.com"
              sourceLink="https://www.bonappetit.com/recipe/miracle-cabbage-stir-fry"
            />
          </li>
          <li>
            <Citation
              author="Chris Morrocco"
              authorLink="https://www.bonappetit.com/contributor/chris-morocco"
              type="image"
              source="bonappetit.com"
              sourceLink="https://www.bonappetit.com/recipe/charred-kale-with-citrus"
            />
          </li>
          <li>
            <Citation
              author="Kendra Vaculin"
              authorLink="https://www.bonappetit.com/contributor/kendra-vaculin"
              type="image"
              source="bonappetit.com"
              sourceLink="https://www.bonappetit.com/recipe/hummus-bowls-with-merguez-spiced-tempeh"
            />
          </li>
          <li>
            <Citation
              author="Ali Slagle"
              authorLink="https://www.bonappetit.com/contributor/ali-slagle"
              type="image"
              source="bonappetit.com"
              sourceLink="https://www.bonappetit.com/recipe/pan-roasted-sweet-potatoes-and-tempeh"
            />
          </li>
          <li>
            <Citation
              author="Dazzle UI"
              authorLink="https://www.svgrepo.com/author/Dazzle%20UI/"
              type="image icon"
              source="SVG Repo"
              sourceLink="https://www.svgrepo.com/svg/532552/search-alt-2"
            />
          </li>
          <li>
            <Citation
              author="Ailsa Burt"
              authorLink="https://www.bbcgoodfood.com/author/ailsaburt"
              type="image"
              source="BBCgoodfood"
              sourceLink="https://www.bbcgoodfood.com/recipes/ponzu-tofu-poke-bowl"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Fort Worth"
              sourceLink="https://www.maharajadfw.com/fort-worth"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Pizzaeria Centro"
              sourceLink="https://www.pizza-hassloch.com/?product=falafel-teller"
            />
          </li>
          <li>
            <Citation
              author="MFNGraphics"
              authorLink="https://www.etsy.com/shop/MFNGraphics"
              type="image"
              source="Etsy"
              sourceLink="https://www.etsy.com/listing/1506651630/set-of-6-boho-botanical-prints-wall"
            />
          </li>
          <li>
            <Citation
              author="Rtteri Store"
              authorLink="https://www.amazon.com/stores/Rtteri/page/C5B3C00F-940E-4DB4-9450-C02C9E58978F"
              type="image"
              source="Amazon"
              sourceLink="https://www.amazon.com/Cutting-Chopping-Charcuterie-Engraving-Housewarming/dp/B0C3664Z7X"
            />
          </li>
          <li>
            <Citation
              author="Nadezda Barkova"
              authorLink="https://stock.adobe.com/contributor/203816617/nadezdabarkova?load_type=author"
              type="image"
              source="Adobe"
              sourceLink="https://stock.adobe.com/search/images?k=vegetable+line+drawing&asset_id=1001967767"
            />
          </li>
          <li>
            <Citation
              author="Freepik"
              authorLink="https://www.flaticon.com/authors/freepik"
              type="image"
              source="FlatIcon"
              sourceLink="https://www.flaticon.com/free-icon/twitter_124021"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Freepik"
              sourceLink="https://www.freepik.com/free-vector/instagram-icon_954290.htm"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Wikimedia"
              sourceLink="https://commons.wikimedia.org/wiki/File:2023_Facebook_icon.svg"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="LovePik"
              sourceLink="https://lovepik.com/image-400211487/hand-painted-leaves.html"
            />
          </li>
          <li>
            <Citation
              author="Luka Vadachkoria"
              authorLink=""
              type="image"
              source="GPB"
              sourceLink="https://1tv.ge/video/shefmzareulis-dafasebis-kvireuli/"
            />
          </li>
          <li>
            <Citation
              author="Дмитрий"
              authorLink="https://stock.adobe.com/contributor/207286070/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9"
              type="image"
              source="Adobe"
              sourceLink="https://stock.adobe.com/search?k=divider+line&asset_id=426843365"
            />
          </li>
          <li>
            <Citation
              author="Garim"
              authorLink="https://www.cleanpng.com/users/@garim.html"
              type="image"
              source="CleanPNG"
              sourceLink="https://www.cleanpng.com/png-eucalyptus-sprig-eucalyptus-green-leaves-white-flo-8086724/"
            />
          </li>
          <li>
            <Citation
              author="Veruska Anconitano"
              authorLink=""
              type="image"
              source="The Foodellers"
              sourceLink="https://thefoodellers.com/en/best-frying-pans"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="RawPixel"
              sourceLink="https://www.rawpixel.com/image/10484657/png-paper-plant"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="GRFoundation"
              sourceLink="https://annualreport2022.grfoundation.org/leadership-letter/"
            />
          </li>
          <li>
            <Citation
              author="Victoria Sergeeva"
              authorLink="https://www.shutterstock.com/g/VictoriaSergeeva"
              type="image"
              source="ShutterStock"
              sourceLink="https://www.shutterstock.com/image-vector/outline-falling-lettuce-leaf-vector-illustration-2078484067"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="NutraBalance"
              sourceLink="https://www.instagram.com/nutrabalance.official/p/DGWj7GipOMi/"
            />
          </li>
          <li>
            <Citation
              author="Setory"
              authorLink="https://www.dreamstime.com/setory_info"
              type="image"
              source="DreamsTime"
              sourceLink="https://www.dreamstime.com/outline-falling-flying-tomato-slices-vector-illustration-image235236231"
            />
          </li>
          <li>
            <Citation
              author="Nadezhda Saenko"
              authorLink="https://www.dreamstime.com/nadyasaenart_info"
              type="image"
              source="DreamsTime"
              sourceLink="https://www.dreamstime.com/fresh-lettuce-food-illustration-graphic-line-art-style-hand-drawn-vector-outline-element-preparing-meal-perfect-image359099076"
            />
          </li>
          <li>
            <Citation
              author="Katsiaryna K"
              authorLink="https://www.dreamstime.com/ekovaleva2580_info"
              type="image"
              source="DreamsTime"
              sourceLink="https://www.dreamstime.com/brushstroke-gouache-paint-background-shape-texture-drowing-brushstroke-gouache-paint-background-shape-texture-drowing-line-beige-image257971948"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="PNGWing"
              sourceLink="https://www.pngwing.com/en/free-png-ziaps"
            />
          </li>
          <li>
            <Citation
              author="StockKing"
              authorLink="https://www.freepik.com/author/stockking"
              type="image"
              source="FreePik"
              sourceLink="https://www.freepik.com/free-photo/top-view-woman-cuts-eggplant-cutting-board-with-colored-bell-peppers-turquoise-background_12350881.htm#fromView=keyword&page=1&position=2&uuid=7f8ce2e2-c96a-43fc-98b6-df37a0ae2c79&query=Cutting+Vegetables"
            />
          </li>
          <li>
            <Citation
              author="Tirachard Kumtanom"
              authorLink="https://www.vecteezy.com/members/tirachardz454473"
              type="image"
              source="Vectoreezy"
              sourceLink="https://www.vecteezy.com/photo/3654447-hand-of-young-asian-woman-chef-hold-knife-cutting-red-cabbage-on-wooden-board-on-kitchen-table-in-house-cooking-vegetable-salad-lifestyle-healthy-food-and-traditional-natural-concept-top-view-shot"
            />
          </li>
          <li>
            <Citation
              author="Remo"
              authorLink="https://www.freepik.com/author/remo"
              type="image"
              source="FreePik"
              sourceLink="https://www.freepik.com/premium-psd/carrot-top-halm-leaves-slice-transparent-background_355229405.htm"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="AppleSpiceNashville"
              sourceLink="https://www.instagram.com/apple.spice.nashville/p/CwSwqGHvLvO/"
            />
          </li>
          <li>
            <Citation
              author="KitchenEngine"
              authorLink="https://classbento.com/the-kitchen-engine"
              type="image"
              source="ClassBento"
              sourceLink="https://classbento.com/kofta-coconut-curry-and-puffed-up-bread-with-jamie-aquino-spokane"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Himala Unimal"
              sourceLink="https://www.instagram.com/himala_unimal/p/DGpCpnCz8-Z/"
            />
          </li>
          <li>
            <Citation
              author="Elena Pimonova"
              authorLink="https://www.shutterstock.com/g/pim"
              type="image"
              source="ShutterStock"
              sourceLink="https://www.shutterstock.com/image-vector/hand-drawn-sketch-vegetable-tomato-eco-2382010171"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Klipartz"
              sourceLink="https://www.klipartz.com/es/sticker-png-pbgip"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Timken"
              sourceLink="https://www.interempresas.net/FeriaVirtual/Catalogos_y_documentos/723113/TIMKEN_-EOLICO.pdf"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="ToAgriculture"
              sourceLink="https://toagriculture.com/rice-disease-management-guide/"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Almandin"
              sourceLink="https://www.almandin.fr/cave/"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="NioAzul"
              sourceLink="https://www.bioazul.com/en/projects/easytrain-training-researchers-to-address-future-challenges-of-fish-farms/"
            />
          </li>
          <li>
            <Citation
              author="Romans Portfolio"
              authorLink="https://stock.adobe.com/hr/contributor/204421747/roman's-portfolio?load_type=author&prev_url=detail"
              type="image"
              source="Adobe"
              sourceLink="https://stock.adobe.com/hr/images/backgrounds-and-textures-concept-wooden-texture-or-background/423793750"
            />
          </li>
          <li>
            <Citation
              author="FWStudio"
              authorLink="https://www.pexels.com/@fwstudio-33348/"
              type="image"
              source="Pexels"
              sourceLink="https://www.pexels.com/photo/brown-parquet-172276/"
            />
          </li>
          <li>
            <Citation
              author="tree"
              authorLink="https://pngtree.com/tree_4021051?type=2"
              type="image"
              source="PNGTree"
              sourceLink="http://pngtree.com/freebackground/natural-pattern-wood-texture-background_15262936.html"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="University of Kentucky"
              sourceLink="https://fcs-hes.ca.uky.edu/sites/fcs-hes.ca.uky.edu/files/fn-ssb-053-powerupwithplantprotein-pub.pdf"
            />
          </li>
          <li>
            <Citation
              author="Source Agriculture"
              authorLink="https://www.instagram.com/sourceagriculture/"
              type="image"
              source="Instagram"
              sourceLink="https://www.instagram.cosm/sourceagriculture/p/C_wGbvVsMHr/"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="City of Cullman, Alabama"
              sourceLink="https://cullmanal.gov/event/native-tree-sale/"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Energy Theory"
              sourceLink="https://energytheory.com/what-is-a-residential-solar-system/"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="DepositPhotos"
              sourceLink="https://depositphotos.com/photo/ecological-concept-of-the-environment-with-the-cultivation-of-trees-planet-earth-physical-globe-of-259607942.html"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Rehab.com"
              sourceLink="https://www.rehab.com/the-willows-at-red-oak-recovery"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Dreamstime"
              sourceLink="https://www.dreamstime.com/tomato-fresh-food-hand-drawn-illustration-drawing-engraving-ink-line-art-engra-image106111223"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Shutterstock"
              sourceLink="https://www.shutterstock.com/image-vector/vector-drawing-illustration-hand-drawn-ink-2446705883"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Linktree - Depretechospecialist"
              sourceLink="https://linktr.ee/depretechospecialist"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="iStock"
              sourceLink="https://www.istockphoto.com/vector/pencil-drawing-of-garlic-gm1254551997-366718898"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Dreamstime"
              sourceLink="https://www.dreamstime.com/hand-drawn-illustration-set-strawberries-hand-drawn-illustration-set-strawberries-izolated-om-fon-hatched-drawing-image180441367"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Facebook - Prescott Online MSFS"
              sourceLink="https://www.facebook.com/groups/PrescottOnlineMSFS/"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="VectorStock"
              sourceLink="https://www.vectorstock.com/royalty-free-vector/french-lettuce-engraving-fresh-green-salad-sketch-vector-43906360"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="WingsBird"
              sourceLink="https://wingsbird.in/"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="iStock"
              sourceLink="https://www.istockphoto.com/photo/ivy-plant-gm174836763-22784914"
            />
          </li>
          <li>
            <Citation
              author="Shannon Vann"
              authorLink="https://www.instagram.com/shannonvannsf/"
              type="image"
              source="Instagram"
              sourceLink="https://www.instagram.com/shannonvannsf/reel/DFI4Gddvwp_/?locale=zh-hans&hl=ar"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Amazon UK"
              sourceLink="https://www.amazon.co.uk/Botanical-minimalist-Watercolor-Minimalist-botanical/dp/B08NGXDDJ3"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="iStock"
              sourceLink="https://www.istockphoto.com/photo/female-hands-holding-empty-plate-on-white-background-gm1084491202-290988186"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Online Web Fonts"
              sourceLink="https://www.onlinewebfonts.com/download/6ab659c1656e922ff4692bcf9c1e1e33"
            />
          </li>
          <li>
            <Citation
              author="Himala Unimal"
              authorLink="https://www.instagram.com/himala_unimal/"
              type="image"
              source="Instagram"
              sourceLink="https://www.instagram.com/himala_unimal/p/DGpCpnCz8-Z/"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Clover Blog"
              sourceLink="https://blog.clover.com/simple-restaurant-kitchen-layout-ideas/"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Green Queen"
              sourceLink="https://www.greenqueen.com.hk/what-is-sustainability-definition/"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="North Sydney Council"
              sourceLink="https://www.northsydney.nsw.gov.au/waste-recycling/book-bulky-waste-pick"
            />
          </li>
          <li>
            <Citation
              author="PNGTree"
              authorLink="https://pngtree.com"
              type="image"
              source="PNGTree"
              sourceLink="https://pngtree.com/freepng/honeycomb-illustration-design-wallpaper-bees-line-vector_10918963.html"
            />
          </li>
          <li>
            <Citation
              author="NALM Clinic"
              authorLink="https://nalmclinic.com"
              type="image"
              source="NALM Clinic"
              sourceLink="https://nalmclinic.com/blog-1/2022/9/21/do-you-need-to-exclude-gluten-when-you-have-ibd"
            />
          </li>
          <li>
            <Citation
              author=""
              authorLink=""
              type="image"
              source="Bing Images"
              sourceLink="https://th.bing.com/th/id/OIP.yGqGywqfp2P_XNSYx5YjbQHaHa?rs=1&pid=ImgDetMain"
            />
          </li>
          <li>
            <Citation
              author="DrJ"
              authorLink="https://www.drrusselljaffe.com/author/dr-j/"
              type="image"
              source="DrRusselJaffe.com"
              sourceLink="https://www.drrusselljaffe.com/vitamin-c-powder/"
            />
          </li>
          <li>
            <Citation
              author="Jep Gambardella"
              authorLink="https://www.pexels.com/@jep-gambardella/"
              type="video"
              source="Pexels"
              sourceLink="https://www.pexels.com/video/people-eating-a-meal-at-the-restaurant-5101342/"
            />
          </li>
          <li>
            <Citation
              author="CottonBroStudio"
              authorLink="https://www.pexels.com/@cottonbro/"
              type="video"
              source="Pexels"
              sourceLink="https://www.pexels.com/video/a-person-stirring-food-in-a-pan-4252289/"
            />
          </li>
          <li>
            <Citation
              author="Lam Loi"
              authorLink="https://www.pexels.com/@brucelam/"
              type="video"
              source="Pexels"
              sourceLink="https://www.pexels.com/video/a-farmer-spraying-pesticide-on-his-crops-for-pest-control-3065488/"
            />
          </li>
          <li>
            <Citation
              author="Lam Loi"
              authorLink="https://www.pexels.com/@alexander-bobrov-390088/"
              type="video"
              source="Pexels"
              sourceLink="https://www.pexels.com/video/a-farmer-spraying-pesticide-on-his-crops-for-pest-control-3065488/"
            />
          </li>
          <li>
            <Citation
              author="Alexander Bobrov"
              authorLink="https://www.pexels.com/@brucelam/"
              type="video"
              source="Pexels"
              sourceLink="https://www.pexels.com/video/aerial-footage-of-a-cargo-ship-at-sea-loaded-with-containers-2943126/"
            />
          </li>
          <li>
            <Citation
              type="image"
              source="Unsplash"
              sourceLink="https://unsplash.com/photos/3d-render-of-luxury-restaurant-interior-V9CVO_cv-78"
            />
          </li>
          <li>
            <Citation
              type="image"
              source="SVG Repo"
              sourceLink="https://www.svgrepo.com/svg/404692/1st-place-medal"
            />
          </li>
        </ol>
      </section>

      <section className="bg-white mt-6 w-[95vw] sm:w-3/4 md:w-2/3 lg:w-3/5 text-center">
        <h3 className="font-bold text-3xl">Content Sources</h3>
        <p>
          All sources used to gather information about the topic for writing the
          content of the website are listed below:
        </p>
        <ol type="1" className="list-decimal list-inside">
          <li>
            <Citation
              author="Food and Agriculture Organization of the United Nations"
              authorLink="https://www.fao.org/home/en/"
              type="article"
              source="United Nations"
              sourceLink="https://www.fao.org/4/a0701e/a0701e00.htm"
            />
          </li>

          <li>
            <Citation
              author="Environmental Protection Agency"
              authorLink="https://www.epa.gov/"
              type="report"
              source="US EPA"
              sourceLink="https://www.epa.gov/sustainable-management-food/food-donation-basics"
            />
          </li>
          <li>
            <Citation
              author="Eastern Oregon University"
              authorLink="https://online.eou.edu/"
              type="article"
              source="EOU Online"
              sourceLink="https://online.eou.edu/resources/article/veganic-farming-importance-of-sustainable-agriculture/"
            />
          </li>
          <li>
            <Citation
              author="Vegan Family Kitchen"
              authorLink="https://veganfamilykitchen.com/"
              type="article"
              source="Vegan Family Kitchen"
              sourceLink="https://veganfamilykitchen.com/vegan-cooking-for-beginners/"
            />
          </li>
          <li>
            <Citation
              author="Restaurantware"
              authorLink="https://www.restaurantware.com/"
              type="blog"
              source="Restaurantware Blog"
              sourceLink="https://www.restaurantware.com/blogs/restaurant-management/how-to-run-a-successful-farm-to-table-restaurant?srsltid=AfmBOorD3QhPp1bAHTLYu0nRICPH1Cp9lk9uT1zrn6lO-C5TIQkNP15y"
            />
          </li>
          <li>
            <Citation
              author="Physicians Committee for Responsible Medicine"
              authorLink="https://www.pcrm.org/"
              type="report"
              source="PCRM"
              sourceLink="https://www.pcrm.org/good-nutrition/vegan-diet-environment"
            />
          </li>
          <li>
            <Citation
              author="BBC Good Food"
              authorLink="https://www.bbcgoodfood.com/"
              type="recipes"
              source="BBC Good Food"
              sourceLink="https://www.bbcgoodfood.com/recipes/collection/vegan-recipes"
            />
          </li>
          <li>
            <Citation
              author="Clover"
              authorLink="https://blog.clover.com/"
              type="blog"
              source="Clover Blog"
              sourceLink="https://blog.clover.com/simple-restaurant-kitchen-layout-ideas/"
            />
          </li>
          <li>
            <Citation
              author="Green Queen"
              authorLink="https://www.greenqueen.com.hk/"
              type="article"
              source="Green Queen"
              sourceLink="https://www.greenqueen.com.hk/what-is-sustainability-definition/"
            />
          </li>
        </ol>
      </section>
    </main>
  );
}
