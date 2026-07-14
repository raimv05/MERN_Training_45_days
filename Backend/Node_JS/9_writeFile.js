import fs from 'fs';

fs.writeFile('8_message.txt', 'I am awesome!', (err) => {
  if (err) throw err;
  console.log('✅ File has been saved!');
});
