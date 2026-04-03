const fs = require('fs');
const path = require('path');

// Directories to skip
const skipDirs = ['_site', 'node_modules', '.git', '.jekyll-cache'];

// Function to recursively find all markdown files
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip certain directories
      if (!skipDirs.includes(file)) {
        findMarkdownFiles(filePath, fileList);
      }
    } else if (path.extname(file) === '.md') {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to update a single markdown file
function updateMarkdownFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');

  // Skip if file already has front matter
  if (data.startsWith('---')) {
    console.log(`Skipping (already has front matter): ${filePath}`);
    return;
  }

  // Extract the first H1 title
  const titleMatch = data.match(/^# (.+)/m);
  const title = titleMatch ? titleMatch[1] : path.basename(filePath, '.md');

  // Create front matter
  const frontMatter = `---
layout: cd1
title: ${title}
---

`;

  const updatedContent = frontMatter + data;

  // Write the updated content
  fs.writeFileSync(filePath, updatedContent, 'utf-8');
  console.log(`Updated: ${filePath}`);
}

// Main execution
const rootDir = '.';
const markdownFiles = findMarkdownFiles(rootDir);

console.log(`Found ${markdownFiles.length} markdown files`);
console.log('');

markdownFiles.forEach((file) => {
  updateMarkdownFile(file);
});

console.log('');
console.log('Done!');
