$(document).ready(function () {
  "use strict!";
  $("header .links").css("top", $("header").innerHeight());
  $("header .list").on("click", function () {
    $("header .links").toggle();
  });
  $(".services .container .ware i").on("click", function () {
    $(this).next("p").slideToggle();
    $(this).nextAll("span").toggle();
    if ($(this).text() === "-") {
      $(this).text("+");
    } else {
      $(this).text("-");
    }
  });
  $(".devices .container .select .view-specs").on("click", function () {
    $(".devices .container .select ul.select-specs").slideToggle();
  });

  // Laptop Objects
  const laptops = [
    {
      name: "Laptop 1",
      image: "images/laptop1.jpg",
      price: "1000$",
      storagePrice: "32 / 1TB",
      screenInch: "15,6",
      screenType: "OLED",
      screenRef: "144HZ",
      screenNits: "500 Nits",
      processorType: "Core I9",
      ram: "32 - 64",
      storage: "1TB to 4TB",
      battery: "90",
      timeBattery: "6",
    },
    {
      name: "Laptop 2",
      image: "images/laptop2.jpg",
      price: "1200$",
      storagePrice: "64 / 1TB",
      screenInch: "14,6",
      screenType: "OLED",
      screenRef: "240HZ",
      screenNits: "800 Nits",
      processorType: "Core I9",
      ram: "64",
      storage: "2TB",
      battery: "95",
      timeBattery: "7",
    },
    {
      name: "Laptop 3",
      image: "images/laptop3.jpg",
      price: "1500$",
      storagePrice: "128 / 2TB",
      screenInch: "15,4",
      screenType: "LCD",
      screenRef: "360HZ",
      screenNits: "500 Nits",
      processorType: "Core I9",
      ram: "128",
      storage: "4TB",
      battery: "99",
      timeBattery: "5",
    },
    {
      name: "Laptop 4",
      image: "images/laptop4.jpg",
      price: "900$",
      storagePrice: "16 / 1TB",
      screenInch: "14",
      screenType: "LCD",
      screenRef: "120HZ",
      screenNits: "500 Nits",
      processorType: "Core I7",
      ram: "32",
      storage: "1TB",
      battery: "70",
      timeBattery: "4",
    },
    {
      name: "Laptop 5",
      image: "images/laptop5.jpg",
      price: "500$",
      storagePrice: "16 / 512GB",
      screenInch: "12,6",
      screenType: "LCD",
      screenRef: "90HZ",
      screenNits: "500 Nits",
      processorType: "Core I5",
      ram: "24",
      storage: "512GB - 1TB",
      battery: "80",
      timeBattery: "6",
    },
  ];

  // Loop through laptops
  laptops.forEach((laptop) => {
    let specsLap = $("<div>").attr("class", "specs-laptop");

    // Name And img
    let name = $("<div>").attr({ class: "name" });
    let head2 = $("<h2>").text(laptop.name);
    name.append(head2);
    let img = $("<img>").attr({ src: laptop.image });
    name.append(img);
    specsLap.append(name);

    // Main div
    let innerSpecs = $("<div>").attr("class", "inner-specs");
    let mainBr = $("<br>");

    // Price
    let priceSpec = $("<div>").attr("class", "price spec");
    let iPrice = $("<i>").attr("class", "fas fa-money-bill fa-3x");
    priceSpec.append(iPrice);

    let textPrice = $("<div>").attr("class", "text-price");
    let h2Price = $("<h2>").text("Price");
    let h3Price = $("<h3>").text(laptop.price);
    let spanPrice = $("<span>").text(laptop.storagePrice);
    textPrice.append(h2Price);
    textPrice.append(h3Price);
    textPrice.append(spanPrice);

    priceSpec.append(textPrice);
    innerSpecs.append(priceSpec);

    // Screen
    let screenSpec = $("<div>").attr("class", "screen spec");
    let iScreen = $("<i>").attr("class", "fas fa-desktop fa-3x");
    screenSpec.append(iScreen);

    let textScreen = $("<div>").attr("class", "text-screen");
    let h2Screen = $("<h2>").text("Screen");
    let h3Screen = $("<h3>").text(laptop.screenInch);
    let span1Screen = $("<span>").text(laptop.screenType);
    let span2Screen = $("<span>").text(laptop.screenRef);

    span2Screen.append(mainBr);
    let span3Screen = $("<span>").text(laptop.screenNits);
    textScreen.append(h2Screen);
    textScreen.append(h3Screen);
    textScreen.append(span1Screen);
    textScreen.append(span2Screen);
    textScreen.append(span3Screen);

    screenSpec.append(textScreen);
    innerSpecs.append(screenSpec);

    // Processor
    let processorSpec = $("<div>").attr("class", "processor spec");
    let iProcessor = $("<i>").attr("class", "fas fa-server fa-3x");
    processorSpec.append(iProcessor);

    let textProcessor = $("<div>").attr("class", "text-processor");
    let h2Processor = $("<h2>").text("Processor and Storage");
    let h3Processor = $("<h3>").text(laptop.processorType);
    let span1Processor = $("<span>").text(`${laptop.ram} GB RAM`);

    span1Processor.append(mainBr);
    let span2Processor = $("<span>").text(`${laptop.storage} Storage`);

    textProcessor.append(h2Processor);
    textProcessor.append(h3Processor);
    textProcessor.append(span1Processor);
    textProcessor.append(span2Processor);

    processorSpec.append(textProcessor);
    innerSpecs.append(processorSpec);

    // Battery
    let batterySpec = $("<div>").attr("class", "battery spec");
    let iBattery = $("<i>").attr("class", "fas fa-battery-full fa-3x");
    batterySpec.append(iBattery);

    let textBattery = $("<div>").attr("class", "text-screen");
    let h2Battery = $("<h2>").text("Battery");
    let h3Battery = $("<h3>").text(`${laptop.battery} WH`);
    let span1Battery = $("<span>").text(
      `${laptop.timeBattery} Hours In Run Time`
    );
    textBattery.append(h2Battery);
    textBattery.append(h3Battery);
    textBattery.append(span1Battery);

    batterySpec.append(textBattery);
    innerSpecs.append(batterySpec);

    // OS
    let osSpec = $("<div>").attr("class", "OS spec");
    let iOS = $("<i>").attr("class", "fas fa-cog fa-3x");
    osSpec.append(iOS);

    let textOS = $("<div>").attr("class", "text-OS");
    let h2OS = $("<h2>").text("Operating System");
    let h3OS = $("<h3>").text(`Windows 11 Pro`);
    let span1OS = $("<span>").text(`Latest Version`);
    textOS.append(h2OS);
    textOS.append(h3OS);
    textOS.append(span1OS);

    osSpec.append(textOS);
    innerSpecs.append(osSpec);

    specsLap.append(innerSpecs);
    $(".specs-laptops").append(specsLap);
  });

  // PC Objects
  const pcs = [
    {
      name: "PC 1",
      image: "images/PC1.jpg",
      price: "1000$",
      storagePrice: "12 / 512GB",
      ram: "12",
      storage: "512GB",
    },
    {
      name: "PC 2",
      image: "images/PC2.jpg",
      price: "2000$",
      storagePrice: "128 / 4TB",
      ram: "128",
      storage: "4TB",
    },
    {
      name: "PC 3",
      image: "images/PC3.jpg",
      price: "800$",
      storagePrice: "64 / 2TB",
      ram: "64",
      storage: "2TB",
    },
    {
      name: "PC 4",
      image: "images/PC4.jpg",
      price: "1200$",
      storagePrice: "32 / 1TB",
      ram: "32",
      storage: "1TB",
    },
  ];

  // Loop through PCs
  pcs.forEach((pc) => {
    let specsPC = $("<div>").attr("class", "specs-laptop");

    // Name And img
    let name = $("<div>").attr({ class: "name" });
    let head2 = $("<h2>").text(pc.name);
    name.append(head2);
    let img = $("<img>").attr({ src: pc.image });
    name.append(img);
    specsPC.append(name);

    // Main div
    let innerSpecs = $("<div>").attr("class", "inner-specs");
    let mainBr = $("<br>");

    // Price
    let priceSpec = $("<div>").attr("class", "price spec");
    let iPrice = $("<i>").attr("class", "fas fa-money-bill fa-3x");
    priceSpec.append(iPrice);

    let textPrice = $("<div>").attr("class", "text-price");
    let h2Price = $("<h2>").text("Price");
    let h3Price = $("<h3>").text(pc.price);
    let spanPrice = $("<span>").text(pc.storagePrice);
    textPrice.append(h2Price);
    textPrice.append(h3Price);
    textPrice.append(spanPrice);

    priceSpec.append(textPrice);
    innerSpecs.append(priceSpec);

    // Material
    let materialSpec = $("<div>").attr("class", "material spec");
    let iMaterial = $("<i>").attr("class", "fas fa-laptop fa-3x");
    materialSpec.append(iMaterial);

    let textMaterial = $("<div>").attr("class", "text-screen");
    let h2Material = $("<h2>").text("Material");
    let h3Material = $("<h3>").text("Glass");
    let spanMaterial = $("<span>").text('30"');
    textMaterial.append(h2Material);
    textMaterial.append(h3Material);
    textMaterial.append(spanMaterial);

    materialSpec.append(textMaterial);
    innerSpecs.append(materialSpec);

    // Processor
    let processorSpec = $("<div>").attr("class", "processor spec");
    let iProcessor = $("<i>").attr("class", "fas fa-server fa-3x");
    processorSpec.append(iProcessor);

    let textProcessor = $("<div>").attr("class", "text-processor");
    let h2Processor = $("<h2>").text("Processor and Storage");
    let h3Processor = $("<h3>").text("Core I9");
    let span1Processor = $("<span>").text(`${pc.ram} GB RAM`);

    span1Processor.append(mainBr);
    let span2Processor = $("<span>").text(`${pc.storage} Storage`);

    textProcessor.append(h2Processor);
    textProcessor.append(h3Processor);
    textProcessor.append(span1Processor);
    textProcessor.append(span2Processor);

    processorSpec.append(textProcessor);
    innerSpecs.append(processorSpec);

    // OS
    let osSpec = $("<div>").attr("class", "OS spec");
    let iOS = $("<i>").attr("class", "fas fa-cog fa-3x");
    osSpec.append(iOS);

    let textOS = $("<div>").attr("class", "text-OS");
    let h2OS = $("<h2>").text("Operating System");
    let h3OS = $("<h3>").text(`Windows 11 Pro`);
    let span1OS = $("<span>").text(`Latest Version`);
    textOS.append(h2OS);
    textOS.append(h3OS);
    textOS.append(span1OS);

    osSpec.append(textOS);
    innerSpecs.append(osSpec);

    specsPC.append(innerSpecs);
    $(".specs-PC").append(specsPC);
  });

  // Mobile Objects
  const mobiles = [
    {
      name: "Mobile 1",
      image: "images/mobile1.jpg",
      price: "200",
      storagePrice: "8 / 128GB",
      screenInch: "6,5",
      screenType: "LCD",
      ram: "8",
      storage: "128 GB",
      battery: "5000",
      camera: "64",
    },
    {
      name: "Mobile 2",
      image: "images/mobile2.jpg",
      price: "2000",
      storagePrice: "24 / 1 TB",
      screenInch: "7",
      screenType: "OLED foldable",
      ram: "24",
      storage: "1TB",
      battery: "5000",
      camera: "64",
    },
    {
      name: "Mobile 3",
      image: "images/mobile3.jpg",
      price: "600",
      storagePrice: "12 / 256GB",
      screenInch: "6,5",
      screenType: "LCD",
      ram: "12",
      storage: "256GB",
      battery: "5500",
      camera: "108",
    },
    {
      name: "Mobile 4",
      image: "images/mobile4.jpg",
      price: "1200",
      storagePrice: "16 / 1TB",
      screenInch: "6,8",
      screenType: "OLED",
      ram: "16",
      storage: "512GB",
      battery: "5000",
      camera: "200",
    },
    {
      name: "Mobile 5",
      image: "images/mobile5.jpg",
      price: "1000",
      storagePrice: "12 / 512GB",
      screenInch: "6,7",
      screenType: "OLED",
      ram: "12",
      storage: "512GB",
      battery: "4500",
      camera: "100",
    },
  ];

  // Loop through mobiles
  mobiles.forEach((mobile) => {
    let specsMobile = $("<div>").attr("class", "specs-laptop");

    // Name And img
    let name = $("<div>").attr({ class: "name" });
    let head2 = $("<h2>").text(mobile.name);
    name.append(head2);
    let img = $("<img>").attr({ src: mobile.image });
    name.append(img);
    specsMobile.append(name);

    // Main div
    let innerSpecs = $("<div>").attr("class", "inner-specs");
    let mainBr = $("<br>");

    // Price
    let priceSpec = $("<div>").attr("class", "price spec");
    let iPrice = $("<i>").attr("class", "fas fa-money-bill fa-3x");
    priceSpec.append(iPrice);

    let textPrice = $("<div>").attr("class", "text-price");
    let h2Price = $("<h2>").text("Price");
    let h3Price = $("<h3>").text(mobile.price + "$");
    let spanPrice = $("<span>").text(mobile.storagePrice);
    textPrice.append(h2Price);
    textPrice.append(h3Price);
    textPrice.append(spanPrice);

    priceSpec.append(textPrice);
    innerSpecs.append(priceSpec);

    // Screen
    let screenSpec = $("<div>").attr("class", "screen spec");
    let iScreen = $("<i>").attr("class", "fas fa-desktop fa-3x");
    screenSpec.append(iScreen);

    let textScreen = $("<div>").attr("class", "text-screen");
    let h2Screen = $("<h2>").text("Screen");
    let h3Screen = $("<h3>").text(mobile.screenInch + '"');
    let span1Screen = $("<span>").text(mobile.screenType);
    let span2Screen = $("<span>").text(" 120HZ");
    let br = $("<br>");

    span2Screen.append(br);
    let span3Screen = $("<span>").text("800 nits");
    textScreen.append(h2Screen);
    textScreen.append(h3Screen);
    textScreen.append(span1Screen);
    textScreen.append(span2Screen);
    textScreen.append(span3Screen);

    screenSpec.append(textScreen);
    innerSpecs.append(screenSpec);

    // Processor
    let processorSpec = $("<div>").attr("class", "processor spec");
    let iProcessor = $("<i>").attr("class", "fas fa-server fa-3x");
    processorSpec.append(iProcessor);

    let textProcessor = $("<div>").attr("class", "text-processor");
    let h2Processor = $("<h2>").text("Processor and Storage");
    let h3Processor = $("<h3>").text("8 core High 2.0");
    let span1Processor = $("<span>").text(`${mobile.ram} GB RAM`);

    span1Processor.append(mainBr);
    let span2Processor = $("<span>").text(`${mobile.storage} Storage`);

    textProcessor.append(h2Processor);
    textProcessor.append(h3Processor);
    textProcessor.append(span1Processor);
    textProcessor.append(span2Processor);

    processorSpec.append(textProcessor);
    innerSpecs.append(processorSpec);

    // Battery
    let batterySpec = $("<div>").attr("class", "battery spec");
    let iBattery = $("<i>").attr("class", "fas fa-battery-full fa-3x");
    batterySpec.append(iBattery);

    let textBattery = $("<div>").attr("class", "text-screen");
    let h2Battery = $("<h2>").text("Battery");
    let h3Battery = $("<h3>").text(`${mobile.battery} mAh`);
    let span1Battery = $("<span>").text(`6 Hours In Run Time`);
    textBattery.append(h2Battery);
    textBattery.append(h3Battery);
    textBattery.append(span1Battery);

    batterySpec.append(textBattery);
    innerSpecs.append(batterySpec);

    // OS
    let osSpec = $("<div>").attr("class", "OS spec");
    let iOS = $("<i>").attr("class", "fas fa-cog fa-3x");
    osSpec.append(iOS);

    let textOS = $("<div>").attr("class", "text-OS");
    let h2OS = $("<h2>").text("Operating System");
    let h3OS = $("<h3>").text(`Android 12`);
    let span1OS = $("<span>").text(`Latest Version`);
    textOS.append(h2OS);
    textOS.append(h3OS);
    textOS.append(span1OS);

    osSpec.append(textOS);
    innerSpecs.append(osSpec);

    specsMobile.append(innerSpecs);
    $(".specs-mobiles").append(specsMobile);

    // Camera
    let cameraSpec = $("<div>").attr("class", "fans spec");
    let iCamera = $("<i>").attr("class", "fas fa-camera fa-3x");
    cameraSpec.append(iCamera);

    let textCamera = $("<div>").attr("class", "text-camera");
    let h2Mobile = $("<h2>").text("Camera");
    let h3Mobile = $("<h3>").text(mobile.camera + " MPX");
    let spanMobile = $("<span>").text("4K and 8K");
    textCamera.append(h2Mobile);
    textCamera.append(h3Mobile);
    textCamera.append(spanMobile);

    cameraSpec.append(textCamera);
    innerSpecs.append(cameraSpec);
  });

  // Tablet Objects
  const tablets = [
    {
      name: "Tablet 1",
      image: "images/tablet1.jpg",
      price: "500",
      storagePrice: "12 / 256GB",
      screenInch: "11",
      screenType: "LCD",
      ram: "12",
      storage: "256GB",
      battery: "8000",
    },
    {
      name: "Tablet 2",
      image: "images/tablet2.jpg",
      price: "800",
      storagePrice: "16 / 1TB",
      screenInch: "11,6",
      screenType: "LCD",
      ram: "16",
      storage: "1TB",
      battery: "10000",
    },
    {
      name: "Tablet 3",
      image: "images/tablet4.jpg",
      price: "400",
      storagePrice: "8 / 256GB",
      screenInch: "10,6",
      screenType: "LCD",
      ram: "8",
      storage: "256GB",
      battery: "6000",
    },
    {
      name: "Tablet 4",
      image: "images/tablet5.jpg",
      price: "1000",
      storagePrice: "18 / 1TB",
      screenInch: "12,6",
      screenType: "OLED",
      ram: "18",
      storage: "1TB",
      battery: "12000",
    },
    {
      name: "Tablet 5",
      image: "images/tabllet6.jpg",
      price: "1200",
      storagePrice: "18 / 2TB",
      screenInch: "12,8",
      screenType: "OLED",
      ram: "18",
      storage: "2TB",
      battery: "15000",
    },
    {
      name: "Tablet 6",
      image: "images/tabllet6.jpg",
      price: "2000",
      storagePrice: "24 / 2TB",
      screenInch: "15",
      screenType: "Foldable OLED",
      ram: "24",
      storage: "2TB",
      battery: "11000",
    },
  ];

  // Loop through tablets
  tablets.forEach((tablet) => {
    let specsTablet = $("<div>").attr("class", "specs-laptop");

    // Name And img
    let name = $("<div>").attr({ class: "name" });
    let head2 = $("<h2>").text(tablet.name);
    name.append(head2);
    let img = $("<img>").attr({ src: tablet.image });
    name.append(img);
    specsTablet.append(name);

    // Main div
    let innerSpecs = $("<div>").attr("class", "inner-specs");
    let mainBr = $("<br>");

    // Price
    let priceSpec = $("<div>").attr("class", "price spec");
    let iPrice = $("<i>").attr("class", "fas fa-money-bill fa-3x");
    priceSpec.append(iPrice);

    let textPrice = $("<div>").attr("class", "text-price");
    let h2Price = $("<h2>").text("Price");
    let h3Price = $("<h3>").text(tablet.price + "$");
    let spanPrice = $("<span>").text(tablet.storagePrice);
    textPrice.append(h2Price);
    textPrice.append(h3Price);
    textPrice.append(spanPrice);

    priceSpec.append(textPrice);
    innerSpecs.append(priceSpec);

    // Screen
    let screenSpec = $("<div>").attr("class", "screen spec");
    let iScreen = $("<i>").attr("class", "fas fa-desktop fa-3x");
    screenSpec.append(iScreen);

    let textScreen = $("<div>").attr("class", "text-screen");
    let h2Screen = $("<h2>").text("Screen");
    let h3Screen = $("<h3>").text(tablet.screenInch + '"');
    let span1Screen = $("<span>").text(tablet.screenType);
    let span2Screen = $("<span>").text("120HZ");

    let br = $("<br>");
    span2Screen.append(br);
    let span3Screen = $("<span>").text("800 nits");
    textScreen.append(h2Screen);
    textScreen.append(h3Screen);
    textScreen.append(span1Screen);
    textScreen.append(span2Screen);
    textScreen.append(span3Screen);

    screenSpec.append(textScreen);
    innerSpecs.append(screenSpec);

    // Processor
    let processorSpec = $("<div>").attr("class", "processor spec");
    let iProcessor = $("<i>").attr("class", "fas fa-server fa-3x");
    processorSpec.append(iProcessor);

    let textProcessor = $("<div>").attr("class", "text-processor");
    let h2Processor = $("<h2>").text("Processor and Storage");
    let h3Processor = $("<h3>").text("8 core High 2.5");
    let span1Processor = $("<span>").text(`${tablet.ram} GB RAM`);

    span1Processor.append(mainBr);
    let span2Processor = $("<span>").text(`${tablet.storage} Storage`);

    textProcessor.append(h2Processor);
    textProcessor.append(h3Processor);
    textProcessor.append(span1Processor);
    textProcessor.append(span2Processor);

    processorSpec.append(textProcessor);
    innerSpecs.append(processorSpec);

    // Battery
    let batterySpec = $("<div>").attr("class", "battery spec");
    let iBattery = $("<i>").attr("class", "fas fa-battery-full fa-3x");
    batterySpec.append(iBattery);

    let textBattery = $("<div>").attr("class", "text-screen");
    let h2Battery = $("<h2>").text("Battery");
    let h3Battery = $("<h3>").text(`${tablet.battery} mAh`);
    let span1Battery = $("<span>").text(`6 Hours In Run Time`);
    textBattery.append(h2Battery);
    textBattery.append(h3Battery);
    textBattery.append(span1Battery);

    batterySpec.append(textBattery);
    innerSpecs.append(batterySpec);

    // OS
    let osSpec = $("<div>").attr("class", "OS spec");
    let iOS = $("<i>").attr("class", "fas fa-cog fa-3x");
    osSpec.append(iOS);

    let textOS = $("<div>").attr("class", "text-OS");
    let h2OS = $("<h2>").text("Operating System");
    let h3OS = $("<h3>").text(`Android 14`);
    let span1OS = $("<span>").text(`Latest Version`);
    textOS.append(h2OS);
    textOS.append(h3OS);
    textOS.append(span1OS);

    osSpec.append(textOS);
    innerSpecs.append(osSpec);

    specsTablet.append(innerSpecs);
    $(".specs-tablets").append(specsTablet);
  });

  $(".devices .container .select ul li").on("click", function () {
    if ($(this).text() === "Laptop") {
      $(".specs").hide();
      $(".specs-laptops").toggle();
      $("html, body").animate({
        scrollTop: $($(".specs-laptops *:first-child")).offset().top - 20,
      });
    } else if ($(this).text() === "PC") {
      $(".specs").hide();
      $(".specs-PC").toggle();
      $("html, body").animate({
        scrollTop: $($(".specs-PC *:first-child")).offset().top - 20,
      });
    } else if ($(this).text() === "Mobile") {
      $(".specs").hide();
      $(".specs-mobiles").toggle();
      $("html, body").animate({
        scrollTop: $($(".specs-mobiles *:first-child")).offset().top - 20,
      });
    } else if ($(this).text() === "Tablet") {
      $(".specs").hide();
      $(".specs-tablets").toggle();
      $("html, body").animate({
        scrollTop: $($(".specs-tablets *:first-child")).offset().top - 20,
      });
    } else if ($(this).text() === "Hide All") {
      $(".specs").hide();
    } else if ($(this).text() === "All") {
      $(".specs").show();
    }
  });

  // Programs
  const languages = [
    { name: "Python", icon: "fab fa-python", code: 'print("Hello, World!")' },
    {
      name: "JavaScript",
      icon: "fab fa-js",
      code: 'console.log("Hello, World!");',
    },
    {
      name: "Cpp",
      icon: "fab fa-cuttlefish",
      code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}',
    },
    {
      name: "Java",
      icon: "fab fa-java",
      code: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
    },
    {
      name: "PHP",
      icon: "fab fa-php",
      code: '&lt;?php\necho "Hello, World!";\n?&gt;',
    },
    {
      name: "Csharp",
      icon: "fab fa-csharp",
      code: 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}',
    },
  ];

  languages.forEach((lang) => {
    const button = $("<button>")
      .addClass("lang-btn")
      .attr("data-lang", lang.name.toLowerCase())
      .html(`<i class="${lang.icon}"></i> ${lang.name}`)
      .css({
        "background-color": "#007BFF",
        color: "white",
        border: "none",
        padding: "10px 15px",
        "border-radius": "5px",
        cursor: "pointer",
        "margin-right": "10px",
      })
      .hover(
        function () {
          $(this).css("background-color", "#0056b3");
        },
        function () {
          $(this).css("background-color", "#007BFF");
        }
      );

    $("#button-container").append(button);
  });
  const button2 = $("<button>")
    .addClass("lang-btn")
    .text("All")
    .css({
      "background-color": "#007BFF",
      color: "white",
      border: "none",
      padding: "10px 15px",
      "border-radius": "5px",
      cursor: "pointer",
      "margin-right": "10px",
    })
    .hover(
      function () {
        $(this).css("background-color", "#0056b3");
      },
      function () {
        $(this).css("background-color", "#007BFF");
      }
    );
  const buttonHide = $("<button>")
    .addClass("lang-btn")
    .text("Hide")
    .css({
      "background-color": "#007BFF",
      color: "white",
      border: "none",
      padding: "10px 15px",
      "border-radius": "5px",
      cursor: "pointer",
      "margin-right": "10px",
    })
    .hover(
      function () {
        $(this).css("background-color", "#0056b3");
      },
      function () {
        $(this).css("background-color", "#007BFF");
      }
    );
  $("#button-container").append(button2);
  $("#button-container").append(buttonHide);

  languages.forEach((lang) => {
    const codeDiv = $("<div>")
      .addClass("code-snippet")
      .attr("id", lang.name.toLowerCase())
      .html(`<pre><code>${lang.code}</code></pre>`)
      .css({
        display: "none",
        "background-color": "#fff",
        border: "1px solid #ccc",
        padding: "15px",
        "border-radius": "5px",
        "box-shadow": "0 2px 5px rgba(0, 0, 0, 0.1)",
        "margin-top": "10px",
      });

    $("#code-snippets").append(codeDiv);
  });

  $(".lang-btn").click(function () {
    $(".code-snippet").hide();

    const lang = $(this).data("lang");

    $("#" + lang).show();
  });
  button2.on("click", () => {
    $(".code-snippet").show();
  });
  buttonHide.on("click", () => {
    $(".code-snippet").hide();
  });

  let date = new Date();
  $("footer").prepend(date.getFullYear());

  // Scroll To Top Button
  let scrollToTop = $(".scroll-to-top");

  // Click On Scroll To Top To Go Up
  scrollToTop.on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0,
    });
  });

  // transform dark
  $(".home #transform-dark").on("click", function () {
    $(this).toggleClass("white dark");
    if ($(this).attr("class") === "white") {
      $(".home").css("background-image", "url('images/Home.jpg')");
      $("header, .services, .devices, .home .text, .programs, body").css({
        "background-color": "#000620",
        color: "white",
      });
      $(".scroll-to-top").css({
        color: "white",
        backgroundColor: "black",
      });
      $(".programs .container .text-prog").css({
        color: "white",
      });
      $(".note .container").css("color", "#fff");
      $("header .links li a").css("color", "white");
      $("header .links li").hover(
        function () {
          $(this).find("a").css("color", "#0c7dff");
        },
        function () {
          $(this).find("a").css("color", "white");
        }
      );
      $(
        ".devices .container .specs .specs-laptop, .devices .container .select .view-specs, .devices .container .select ul.select-specs, .devices .container .select ul.select-specs::before"
      ).css("background-color", "#333");
    } else if ($(this).attr("class") === "dark") {
      $(".home").css("background-image", "url('images/white-back.jpg')");
      $("header, .services, .devices, .home .text, .programs, body").css({
        "background-color": "#eee",
        color: "black",
      });
      $(".note .container").css({
        color: "black",
        "background-color": "#ff00008a",
      });
      $(".programs .container .text-prog").css({
        color: "black",
      });
      $(".scroll-to-top").css({
        color: "black",
        backgroundColor: "white",
      });
      $("header .links li a").css("color", "black");
      $("header .links li").hover(
        function () {
          $(this).find("a").css("color", "#0c7dff");
        },
        function () {
          $(this).find("a").css("color", "black");
        }
      );
      $(
        ".devices .container .specs .specs-laptop, .devices .container .select .view-specs, .devices .container .select ul.select-specs, .devices .container .select ul.select-specs::before"
      ).css("background-color", "#aaa");
    }

    $(this).find("i").toggleClass("fa-sun fa-moon");
  });
});
