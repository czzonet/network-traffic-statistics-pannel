import { readUpdateOutputFromShell } from "./lib/readUpdateOutputFromShell";
import { sarParse } from "./lib/sarParse";

async function main() {
  await readUpdateOutputFromShell(
    "sar",
    ["-n", "DEV", "1"],
    (data) => {
      console.log(data.toString());
      sarParse(data.toString());
    },
    (err) => {
      console.error(err);
    }
  );
}

main()
  .then((d) => {
    debugger;
  })
  .catch((e) => {
    console.log("[E] [main]", e);
    debugger;
  });
