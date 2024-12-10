// custom_utils.jsx
export function formatJsonToString(jsonObject) {
  try {
    // Ensure the input is an object
    if (typeof jsonObject !== 'object' || jsonObject === null) {
      throw new Error("Input must be a valid JSON object");
    }

    // Create an array of key-value pairs in the desired format
    const formattedString = formatObject(jsonObject);

    return formattedString;
  } catch (error) {
    console.error("Error formatting JSON object:", error);
    return "Invalid JSON format";
  }
}

// Helper function to format object recursively
function formatObject(obj, prefix = '') {
  let formattedLines = [];

  for (const [key, value] of Object.entries(obj)) {
    // Create a new key string with prefix
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Recursively handle nested objects
      formattedLines.push(...formatObject(value, newKey));
    } else if (Array.isArray(value)) {
      // Handle arrays
      formattedLines.push(`${newKey}: [${value.join(', ')}]`);
    } else {
      // For strings, numbers, etc.
      formattedLines.push(`${newKey}: ${value}`);
    }
  }

  // Add an extra newline after each key-value pair
  return formattedLines.join('\n\n'); // Two newlines for separation
}