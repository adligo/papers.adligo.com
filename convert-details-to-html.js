const fs = require('fs');

// Read the index.md file
const filePath = './index.md';
let content = fs.readFileSync(filePath, 'utf-8');

// Normalize line endings to \n
content = content.replace(/\r\n/g, '\n');

// Function to convert markdown links to HTML inside details sections
function convertMarkdownLinksInDetails(text) {
  const lines = text.split('\n');
  let inDetails = false;
  let result = [];
  let convertedCount = 0;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Track if we're inside a details section
    if (line.includes('<details')) {
      inDetails = true;
      result.push(line);
      continue;
    }
    if (line.includes('</details>')) {
      inDetails = false;
      result.push(line);
      continue;
    }

    // If inside details, convert markdown headers with links to HTML
    if (inDetails) {
      // Match patterns like: ##### [Text](url) or - [Text](url)
      // Allow for leading whitespace
      const h5Match = line.match(/^(\s*)(#+)\s+\[([^\]]+)\]\(([^)]+)\)$/);
      const listMatch = line.match(/^(\s*)-\s+\[([^\]]+)\]\(([^)]+)\)$/);

      if (h5Match) {
        const indent = h5Match[1];
        const level = h5Match[2].length;
        const text = h5Match[3];
        const url = h5Match[4];
        line = `${indent}<h${level}><a href="${url}">${text}</a></h${level}>`;
        convertedCount++;
        console.log(`Converted: ${text.substring(0, 30)}...`);
      } else if (listMatch) {
        const indent = listMatch[1];
        const text = listMatch[2];
        const url = listMatch[3];
        line = `${indent}- <a href="${url}">${text}</a>`;
        convertedCount++;
        console.log(`Converted list: ${text.substring(0, 30)}...`);
      }
    }

    result.push(line);
  }

  console.log(`\nTotal conversions: ${convertedCount}`);
  return result.join('\n');
}

// Apply conversion
const updatedContent = convertMarkdownLinksInDetails(content);

// Write back to file
fs.writeFileSync(filePath, updatedContent, 'utf-8');

console.log('✓ Converted all markdown links to HTML inside <details> sections');
console.log('✓ index.md has been updated');
