// Text to other formats
export const textToBinary = (text) => {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");
};

export const textToHex = (text) => {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(16))
    .join(" "); 
};

export const textToDecimal = (text) => {
  return text
    .split("")
    .map((char) => char.charCodeAt(0))
    .join(" ");
};

// Other formats to text  
export const binaryToText = (binary) => {
  return binary
    .split(" ")
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("");
};

export const hexToText = (hex) => {
  return hex
    .split(" ")
    .map((h) => String.fromCharCode(parseInt(h, 16)))
    .join("");
};

export const decimalToText = (decimal) => {
  return decimal
    .split(" ")
    .map((d) => String.fromCharCode(parseInt(d)))
    .join("");
};

export const convertText = (input, inputType, outputType) => {
  if (inputType === outputType) {
    return input;
  }

  try {
    let intermediateText = input;
    if (inputType === "binary") {
      intermediateText = binaryToText(input);
    } else if (inputType === "hex") {
      intermediateText = hexToText(input);
    } else if (inputType === "decimal") {
      intermediateText = decimalToText(input); 
    }

    if (outputType === "binary") {
      return textToBinary(intermediateText);
    } else if (outputType === "hex") {
      return textToHex(intermediateText);
    } else if (outputType === "decimal") {
      return textToDecimal(intermediateText);
    }
    return intermediateText;

  } catch (error) {
    return "Invalid input format";
  }
};