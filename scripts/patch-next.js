const fs = require("fs");
const path = require("path");

function patchNext() {
  const nextDist = path.join(__dirname, "..", "node_modules", "next", "dist");
  if (!fs.existsSync(nextDist)) return;

  let count = 0;
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith(".js")) {
        let content = fs.readFileSync(full, "utf8");
        let changed = false;
        if (content.includes("headers.hasOwnProperty(")) {
          content = content.replaceAll(
            "headers.hasOwnProperty(",
            "Object.prototype.hasOwnProperty.call(headers, "
          );
          changed = true;
        }
        if (content.includes("rawHeaders.hasOwnProperty(")) {
          content = content.replaceAll(
            "rawHeaders.hasOwnProperty(",
            "Object.prototype.hasOwnProperty.call(rawHeaders, "
          );
          changed = true;
        }
        if (changed) {
          fs.writeFileSync(full, content, "utf8");
          count++;
        }
      }
    }
  }

  walk(nextDist);
  console.log(`[patch-next] Successfully patched ${count} files for Node 27 compatibility.`);
}

patchNext();
