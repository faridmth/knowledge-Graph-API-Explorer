export function convertTimestamp(timestamp) {
    // Parse the input timestamp
    const date = new Date(timestamp);
    
    // Format the date and time
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    
    // Combine formatted parts
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  }
  
