
function processSlide(escapedNotes, firstSlide) {
  var slideElement = document.querySelector("section");
  if (firstSlide == true){
    createSlideMaster(slideElement);
  }
  window.slide = window.pres.addSlide({ masterName: "DEFAULT_LAYOUT" });
  window.context = []; // array will be used as a stack

  // add notes
  window.slide.addNotes(escapedNotes);
  // slide background
  
  var slideBackgroundElement = document.querySelector(".slide-background");

  let backgroundContentElement = slideBackgroundElement.querySelector(".slide-background-content");
  let backgroundImage = window.getComputedStyle(backgroundContentElement, null).getPropertyValue('background-image');
  if (backgroundImage.length > 7 && (backgroundImage.startsWith("url(\"iapresenter") || backgroundImage.startsWith("url(\"http"))){
    let imgPath = backgroundImage.slice(5, -2);
    slide.background = { path: imgPath };
    let opacity = window.getComputedStyle(backgroundContentElement, null).getPropertyValue('opacity');
    if (opacity != "1"){
      slide.background.transparency = Math.round(100 - parseFloat(opacity) * 100);
    }
  }else{
    // only a color
    let slideBg = window.getComputedStyle(slideBackgroundElement, null).getPropertyValue('background-color');
    let convertedSlideBg = toPptxColor(slideBg)[0];
    slide.background = { color: convertedSlideBg };
  }
   processNode(slideElement);
}


function processHeaderFooterPart(element, objects, slideNumber){

  let hasLogo = (element.querySelector(".logo") != null);
  let hasSlideNumber = (element.innerText == "1") //TODO : make a more reliable way to know if this is the slide number (using a class for instance)

  
  let textStyle = window.getComputedStyle(element, null);
  let textOptions = getTextOptions(textStyle);
  let positionOptions = getPositionAnsSizeOptions(element);
  let boxOptions = getBoxOptions(textStyle);
  let textAlign = textStyle.getPropertyValue('text-align');
  var allOptions = Object.assign({},  positionOptions, textOptions, boxOptions);
  allOptions.align= textAlign;
  //
  // iterate over potential inlines

  if (hasLogo){
    let logoElement = element.querySelector(".logo");
    let logoOptions = getImageOptions(logoElement);
    objects.push({ image: logoOptions }) ;
  }else{
    if (hasSlideNumber){
      Object.assign(slideNumber, allOptions);
    }else{
      // text or date
      var textParts = [];
      processInnerText(element,textParts,allOptions);
      if (textParts.length > 0){
        objects.push({ text: textParts[0] }) ;
      }
      
    }
  }
  

}

// We use the first slide to create the slide master
// Slide master is used mainly for header and footers
// So far we have the same header and footer for all layouts
function createSlideMaster(element){
  var objects = [];
  var slideNumber = {};

  if (element.classList.contains("has-header")){
    let headerLeadingElement = element.querySelector(".header .leading");
    let headerMiddleElement = element.querySelector(".header .middle");
    let headerTrailingElement = element.querySelector(".header .trailing");
    processHeaderFooterPart(headerLeadingElement, objects,slideNumber);
    processHeaderFooterPart(headerMiddleElement, objects,slideNumber);
    processHeaderFooterPart(headerTrailingElement, objects,slideNumber);
  }

  if (element.classList.contains("has-footer")){
    let footerLeadingElement = element.querySelector(".footer .leading");
    let footerMiddleElement = element.querySelector(".footer .middle");
    let footerTrailingElement = element.querySelector(".footer .trailing");
    processHeaderFooterPart(footerLeadingElement, objects,slideNumber);
    processHeaderFooterPart(footerMiddleElement, objects,slideNumber);
    processHeaderFooterPart(footerTrailingElement, objects,slideNumber);
  }

  // background color
  var slideBackgroundElement = document.querySelector(".slide-background");
  let slideBg = window.getComputedStyle(slideBackgroundElement, null).getPropertyValue('background-color');
  let convertedSlideBg = toPptxColor(slideBg)[0];

  var options = {
    title: "DEFAULT_LAYOUT",
    background: { color: convertedSlideBg },
    objects: objects
  }

  if (Object.keys(slideNumber).length !== 0){
    options.slideNumber = slideNumber;
  }

  window.pres.defineSlideMaster(options);
}



// Parse hex/rgb{a} color syntax.
// @input string
// @returns array [r,g,b{,o}]
function parseColor(color) {

  var cache,
    p = parseInt, // Use p as a byte saving reference to parseInt
    color = color.replace(/\s/g, ''); // Remove all spaces

  // Checks for 6 digit hex and converts string to integer
  if (cache = /#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(color))
    cache = [p(cache[1], 16), p(cache[2], 16), p(cache[3], 16)];

  // Checks for 3 digit hex and converts string to integer
  else if (cache = /#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(color))
    cache = [p(cache[1], 16) * 17, p(cache[2], 16) * 17, p(cache[3], 16) * 17];

  // Checks for rgba and converts string to
  // integer/float using unary + operator to save bytes
  else if (cache = /rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(color))
    cache = [+cache[1], +cache[2], +cache[3], +cache[4]];

  // Checks for rgb and converts string to
  // integer/float using unary + operator to save bytes
  else if (cache = /rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(color))
    cache = [+cache[1], +cache[2], +cache[3]];

  // Otherwise throw an exception to make debugging easier
  else throw color + ' is not supported by $.parseColor';

  // Performs RGBA conversion by default
  isNaN(cache[3]) && (cache[3] = 1);

  // Adds or removes 4th value based on rgba support
  // Support is flipped twice to prevent erros if
  // it's not defined
  return [cache.slice(0, 3), cache[3]];// + !!$.support.rgba);
}

function toHex(d) {
  return ("0" + (Number(d).toString(16))).slice(-2).toUpperCase()
}

function toPptxColor(color) {
  let parsed = parseColor(color)
  let col = parsed[0];
  return [toHex(col[0]) + toHex(col[1]) + toHex(col[2]), parsed[1]];
}

function convertDimension(pixels){
  return parseFloat(pixels) * 10.0 / 1440.0;
}

function toPptxDimension(px){
  let targetWidth = 10.0; // 10 inches by default
  //let targetHeight = 5.625;
  let slideElement = document.querySelector("section");
  let slideStyle = window.getComputedStyle(slideElement, null);
  let slideWidth = parseFloat(slideStyle.getPropertyValue('width').slice(0, -2)); // remove the px suffix; 
  return px * targetWidth / slideWidth;
}

function toPptxRect(rectInSlide) {
  // TODO: cache slide dimensions to improve performances
  let targetWidth = 10.0; // 10 inches by default
  let targetHeight = 5.625;
  let slideElement = document.querySelector("section");
  let slideStyle = window.getComputedStyle(slideElement, null);
  let slideWidth = parseFloat(slideStyle.getPropertyValue('width').slice(0, -2)); // remove the px suffix; 
  let slideHeight = parseFloat(slideStyle.getPropertyValue('height').slice(0, -2)); // remove the px suffix; 
  var rect = new Array();
  let x = rectInSlide.x * targetWidth / slideWidth;
  rect['x'] = x;
  rect['y'] = rectInSlide.y * targetHeight / slideHeight;
  rect['w'] = rectInSlide.width * targetWidth / slideWidth;
  rect['h'] = rectInSlide.height * targetWidth / slideWidth;
  return rect;
}

function isBold(fontWeight) {
  switch (fontWeight) {
    case 'normal':
    case '100':
    case '200':
    case '300':
    case '400':
    case '500':
    case '600':
      return 'false';
    case 'bold':
    case '700':
    case '800':
    case '900':
      return "true";
    default:
      return 'false';
  }
}
 
function fontFace(fontFamily, fontWeight) {
  // TODO: Bounds check & improve
  // We could also directly definie the full font name (SF Thin for instance) to avoid the PPT limitation regarding font weight
  let fonts = fontFamily.split(',');
  let firstFont = fonts[0].trim();
  if (firstFont === 'system-ui') {
    return "SF Pro";
  }
  if (firstFont === 'ui-monospace') {
    return "Menlo";
  }

  return firstFont.replaceAll("\"", "");
}

function getBoxOptions(elementStyle) {
  let options = {};
  let background = elementStyle.getPropertyValue('background-color');
  if (background !== "") {
    let convertedBg = toPptxColor(background);
    if (convertedBg[1] != 0) {// Do not export fully transparent bg
      let transparency = Math.round(100 - convertedBg[1] * 100); // 0-100, inverted
      options.fill = { color : convertedBg[0], transparency: transparency};
    }
  }
  let radius = elementStyle.getPropertyValue('border-radius');
  if (radius !== "" && radius != "0px") {
    options.rectRadius = parseFloat(radius.slice(0, -2)) * 10.0 / 1440.0; // Radius is in inches!
    options.shape = window.pres.shapes.ROUNDED_RECTANGLE;
  }
  return options;
}

function getTextOptions(textStyle) {
  let textColor = textStyle.getPropertyValue('color');
  let convertedTextColor = toPptxColor(textColor)[0];
  let fontSize = textStyle.getPropertyValue('font-size').slice(0, -2) * 0.75; // remove the px suffix, 0.75 = conversion between px to pt

  let fontWeight = textStyle.getPropertyValue('font-weight');
  let fontFamily = fontFace(textStyle.getPropertyValue('font-family'));
  let isBoldText = isBold(fontWeight);
  let isItalic = (textStyle.getPropertyValue('font-style') === "italic" ? true : false);
  return {
    bold: isBoldText,
    italic : isItalic,
    color: convertedTextColor,
    fontSize: fontSize,
    fontFace: fontFamily,
  }
}

function getPositionAnsSizeOptions(element) {
  let rect = element.getBoundingClientRect();
  let convertedRect = toPptxRect(rect);

  let options = {
    x: convertedRect.x,
    y: convertedRect.y,
    w: convertedRect.w,
    h: convertedRect.h,
  }
  return options;
}


function processInnerText(element, textParts, parentOptions) {
  const list = element.childNodes;

  for (var i = 0; i < list.length; ++i) {
    let node = list[i];
    if (node) {
      if (node.nodeType == 3) { // Text
        let sanitizedTextWithOptions = sanitizeText(node.textContent)
        let allOptions = Object.assign({}, parentOptions, sanitizedTextWithOptions[1]);
        textParts.push({ text: sanitizedTextWithOptions[0], options: allOptions });
      } else {
        if (node.nodeType == 1) {
          // other tag, probably an inline
          switch (node.nodeName) {
            case 'SUB':
              let subStyle = window.getComputedStyle(node, null);
              var subOptions = {};//getTextOptions(subStyle);
              subOptions.subscript = true;
              processInnerText(node,textParts,subOptions);
              //textParts.push({ text: node.innerText, options: { subscript: true } });
              break;
            case 'SUP':
              let supStyle = window.getComputedStyle(node, null);
              var supOptions = {};//getTextOptions(supStyle);
              supOptions.superscript = true;
              processInnerText(node,textParts,supOptions);
              //textParts.push({ text: node.innerText, options: { superscript: true } });
              break;
            case 'EM':
              textParts.push({ text: node.innerText, options: { italic: true } });
              break;
            case 'STRONG':
              textParts.push({ text: node.innerText, options: { bold: true } });
              break;
            case 'HIGHLIGHT':
              textParts.push({ text: node.innerText, options: { highlight: { color: 'FFEA00' } } });
              break;
            case 'DEL':
              textParts.push({ text: node.innerText, options: { strike: 'sngStrike' } });
              break;
            case 'SPAN':
              let spanStyle = window.getComputedStyle(node, null);
              let spanOptions = getTextOptions(spanStyle);
              processInnerText(node,textParts,spanOptions);
              break;
            default:
              // let's keep the text even if tag is not supported yet
              let sanitizedTextWithOptions = sanitizeText(node.textContent)
              let allOptions = Object.assign({}, parentOptions, sanitizedTextWithOptions[1]);
              textParts.push({ text: sanitizedTextWithOptions[0], options: allOptions });
              break;
          }
        }
      }
    }
  }
}

function processText(element, options) {
  let textStyle = window.getComputedStyle(element, null);
  let textAlign = textStyle.getPropertyValue('text-align');
  let textOptions = getTextOptions(textStyle);
  let positionOptions = getPositionAnsSizeOptions(element);
  let boxOptions = getBoxOptions(textStyle);
  var allOptions = Object.assign({}, options, positionOptions, textOptions, boxOptions);
  var textParts = [];
  let inheritedTextOptions = Object.assign({}, options, textOptions);
  allOptions.fit =  'shrink';
  allOptions.align= textAlign;
  // iterate over potential inlines
  processInnerText(element,textParts,inheritedTextOptions);
  window.slide.addText(textParts, allOptions);
}

function sanitizeText(text) {
  var sanitized = text;//text.replace('\r,', ' ').replace('↵',' ').replace('\n',' ');
  var options = {};
  if (sanitized.startsWith("\t")){
    options.indentLevel = 1;
  }
  if (sanitized.endsWith("\n")){
    sanitized = sanitized.slice(0, -1);
    options.breakLine = true;
  }
  return [sanitized, options];
}



function getImageOptions(element){
  let imageStyle = window.getComputedStyle(element, null);
  let pos = imageStyle.getPropertyValue('object-position').split(' ');
  let fit = imageStyle.getPropertyValue('object-fit');
  let opacity = imageStyle.getPropertyValue('opacity');
  var containOption = (fit == "contain" ? "contain" : "cover");
  let positionOptions = getPositionAnsSizeOptions(element);

  var posX = 50.0;
  var posY = 50.0;
  if (pos.length >= 2){
    posX = parseFloat(pos[0].slice(0, -1));
    posY = parseFloat(pos[1].slice(0, -1));
  }

  let rect = element.getBoundingClientRect();
  let containerRatio = rect.width / rect.height;
  let imageRatio = element.naturalWidth / element.naturalHeight;
  var imageWidth = 0;
  var imageHeight = 0;


  let sizingOptions = { type: containOption,
    w: positionOptions.w,
    h: positionOptions.h,
  };

  if (containOption == "cover"){
    if (imageRatio < containerRatio){
      // container width as guide
      imageWidth = positionOptions.w;
      imageHeight = imageWidth / imageRatio;
    }else{
      // container height as guide
      imageHeight = positionOptions.h;
      imageWidth = imageHeight * imageRatio;
    }
  }else{
    if (containOption == "contain"){
      if (imageRatio < containerRatio){
        // container height as guide
        imageHeight = positionOptions.h;
        imageWidth = imageHeight * imageRatio;

      }else{
        // container width as guide
        imageWidth = positionOptions.w;
        imageHeight = imageWidth / imageRatio;
      }
    }
  }

  if (posX != 50.0 || posY != 50.0){
    if (containOption == "cover"){
      sizingOptions["type"] = "crop";
      if (posX != 50.0){
        if (imageRatio > containerRatio){
          let differenceX = imageWidth - positionOptions.w;
          sizingOptions["y"] = 0;
          if (posX == 0.0){
            sizingOptions["x"] = 0;
          }else{
            if (posX == 100.0){
              sizingOptions["x"] = differenceX;
            }
          }
        }
      }
      if (posY != 50.0){
        if (imageRatio < containerRatio){
          let differenceY = imageHeight - positionOptions.h;
  
          sizingOptions["x"] = 0;
          if (posY == 0.0){
            sizingOptions["y"] = 0;
          }else{
            if (posY == 100.0){
              sizingOptions["y"] = differenceY;
            }
          }
  
        }
      }
    }
    if (containOption == "contain"){
      sizingOptions["type"] = "crop";
      if (posX != 50.0){
        sizingOptions["y"] = 0;
        let differenceX =  positionOptions.w - imageWidth;
        if (posX == 0.0){
          sizingOptions["x"] = 0;
        }else{
          if (posX == 100.0){
            sizingOptions["x"] = -differenceX;
          }
        }
      }
      if (posY != 50.0){
        sizingOptions["x"] = 0;
        let differenceY = positionOptions.h - imageHeight;
        if (posY == 0.0){
          sizingOptions["y"] = 0;
        }else{
          if (posY == 100.0){
            sizingOptions["y"] = -differenceY;
          }
        }
      }

    }
  }

  let src = element.src;
  let imageOptions = {
    path: src,
    w: imageWidth,
    h: imageHeight,
    x: positionOptions.x,
    y: positionOptions.y,
    sizing: sizingOptions,
  }

  if (opacity != "1"){
    imageOptions.transparency = Math.round(100 - parseFloat(opacity) * 100);
  }

  let allOptions = Object.assign({}, imageOptions);
  return allOptions;
}

function processImage(element) {
  let options = getImageOptions(element);
  window.slide.addImage(options);
}

function processVideo(element) {
  let videoStyle = window.getComputedStyle(element, null);
  let src = element.getElementsByTagName("source")[0].src;
  let positionOptions = getPositionAnsSizeOptions(element);

  let videoOptions = {
    type: "video",
    path: src,
    sizing: { type: "cover" },//, w: convertedRect.w, h: convertedRect.h
  }
  let allOptions = Object.assign({}, positionOptions, videoOptions);

  window.slide.addMedia(allOptions);
}

function processCode(element) {
  if (element.getElementsByTagName("code").length > 0) {
    processText(element.getElementsByTagName("code")[0]);
  }

}


function getTablePartBackgroundAndBordersOptions(element, parentOptions) {
  let elementStyle = window.getComputedStyle(element, null);
  let options = Object.assign({}, parentOptions);
  let background = elementStyle.getPropertyValue('background-color');
  if (background !== "") {
    let convertedBg = toPptxColor(background);
    if (convertedBg[1] != 0) {// Do not export fully transparent bg
      options.fill = convertedBg[0];
      options.transparency = Math.round(100 - convertedBg[1] * 100); // 0-100, inverted
    }
  }

    let borderLeftWidth = elementStyle.getPropertyValue('border-left-width');
    let borderTopWidth = elementStyle.getPropertyValue('border-top-width');
    let borderRightWidth = elementStyle.getPropertyValue('border-right-width');
    let borderBottomWidth = elementStyle.getPropertyValue('border-bottom-width');

    let borderLeftRawColor = elementStyle.getPropertyValue('border-left-color');
    let borderTopRawColor = elementStyle.getPropertyValue('border-top-color');
    let borderRightRawColor = elementStyle.getPropertyValue('border-right-color');
    let borderBottomRawColor = elementStyle.getPropertyValue('border-bottom-color');
    let borderLeftColor = toPptxColor(borderLeftRawColor)[0];
    let borderTopColor = toPptxColor(borderTopRawColor)[0];
    let borderRightColor = toPptxColor(borderRightRawColor)[0];
    let borderBottomColor = toPptxColor(borderBottomRawColor)[0];

    let hasLeftBorder = (borderLeftWidth != "" && borderLeftWidth != 0 && borderLeftWidth != "0px");
    let hasTopBorder = (borderTopWidth != "" && borderTopWidth != 0 && borderTopWidth != "0px");
    let hasRightBorder = (borderRightWidth != "" && borderRightWidth != 0 && borderRightWidth != "0px");
    let hasBottomBorder = (borderBottomWidth != "" && borderBottomWidth != 0 && borderBottomWidth != "0px");
    let hasBorder = (hasBottomBorder || hasLeftBorder || hasRightBorder || hasTopBorder);
    if (hasBorder == true){
      // let's remove px unit
      borderLeftWidth = borderLeftWidth.slice(0, -2);
      borderTopWidth = borderTopWidth.slice(0, -2);
      borderRightWidth = borderRightWidth.slice(0, -2);
      borderBottomWidth = borderBottomWidth.slice(0, -2);
      // borders are in the TRBL order
      var borders = [];
      if (borderTopWidth != 0){
        borders.push({color: borderTopColor, pt : borderTopWidth});
      }else{
        borders.push(null);
      }
      if (borderRightWidth != 0){
        borders.push({color: borderRightColor, pt : borderRightWidth});
      }else{
        borders.push(null);
      }
      if (borderBottomWidth != 0){
        borders.push({color: borderBottomColor, pt : borderBottomWidth});
      }else{
        borders.push(null);
      }
      if (borderLeftWidth != 0){
        borders.push({color: borderLeftColor, pt : borderLeftWidth});
      }else{
        borders.push(null);
      }
      options.border = borders;
    }
    return options;
}

function processCell(element, pptxRow, rowOptions){
  let textStyle = window.getComputedStyle(element, null);
  let textOptions = getTextOptions(textStyle);
  var textParts = [];
  // iterate over potential inlines
  processInnerText(element,textParts,textOptions);
  let allOptions = Object.assign({}, rowOptions, textOptions);
  
  let textAlign = textStyle.getPropertyValue('text-align');
  allOptions.align= textAlign;

  var cell = { text: textParts, options: allOptions };

  pptxRow.push(cell);
}

function processRow(element, pptxRows, rowGroupOptions){
  var pptxRow = [];
  let rowOptions = getTablePartBackgroundAndBordersOptions(element, rowGroupOptions);
  let cells = element.children;
  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
    if (cell.nodeName == 'TH' || cell.nodeName == 'TD'){
      processCell(cell, pptxRow, rowOptions);
    }
  }
  pptxRows.push(pptxRow);
}

function processRows(element, pptxRows){
  let rows = element.children;
  let rowGroupOptions = getTablePartBackgroundAndBordersOptions(element, {});
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (row.nodeName == 'TR'){
      processRow(row, pptxRows,rowGroupOptions);
    }
  }
}

function processTable(element) {
  var pptxRows = [];
  var children = element.children;
  let tableOptions = getTablePartBackgroundAndBordersOptions(element, {});
  for (var i = 0; i < children.length; i++) {
    var childElement = children[i];
    if (childElement.nodeName == 'THEAD'){
      processRows(childElement, pptxRows);
    }else{
      if (childElement.nodeName == 'TBODY'){
        processRows(childElement, pptxRows);
      }
    }
  }
  let positionOptions = getPositionAnsSizeOptions(element);
  let allOptions = Object.assign({}, positionOptions, tableOptions);
  window.slide.addTable(pptxRows, allOptions);

}


function processNode(element) {
  // export current node
  switch (element.nodeName) {
    case 'H1':
    case 'H2':
    case 'H3':
    case 'H4':
    case 'H5':
    case 'H6':
    case 'P':
      processText(element, {});
      break;
    case "UL":
      processText(element, { bullet: true })
      break;
    case "OL":
      processText(element, { bullet: { type: "number", style: "arabicPeriod" } })
      break;
    case 'IMG':
      processImage(element);
      break;
    case 'VIDEO':
      processVideo(element);
      break;
    case 'PRE':
      processCode(element);
      break;
    case 'TABLE':
      processTable(element);
      break;
    default:
      //console.log(`Unsupported element`, element.nodeName);
      break;
  }

  // process child nodes
  var children = element.children;
  for (var i = 0; i < children.length; i++) {
    var childElement = children[i];
    
    if (childElement.nodeName === "DIV" && (childElement.classList.contains("footer") || childElement.classList.contains("header"))){
      // Do not process header and footer here, they are manage by the slide master
    }else{
      processNode(childElement);
    }

  }
}

function exportToPptx() {
  window.pres = new PptxGenJS();
  window.pres.layout = 'LAYOUT_16x9'; // should already been set by default
  // create slide
  window.slide = window.pres.addSlide();
  var slideElement = document.querySelector("section");
  var slideBackgroundElement = document.querySelector(".slide-background");
  let slideBg = window.getComputedStyle(slideBackgroundElement, null).getPropertyValue('background-color');
  let convertedSlideBg = toPptxColor(slideBg)[0];
  slide.background = { color: convertedSlideBg };


  processNode(slideElement);
  window.pres.writeFile({ fileName: "Sample Presentation.pptx" });
}  
