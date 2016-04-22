#!/usr/bin/env node

if(process.env.SUDO_UID){
  console.log("     _              __");
  console.log("    / `\\  (~._    ./  )");
  console.log("    \\__/ __`-_\\__/ ./");
  console.log("   _ \\ \\/  \\   \\ |_   __");
  console.log(" (   )  \\__/ -^    \\ /  \\");
  console.log("  \\_/ \"  \\  | o  o  |.. /  __");
  console.log("       \\. --' ====  /  || /  \\ ");
  console.log("         \\   .  .  |---__.\\__/");
  console.log("         /  :     /   |   |");
  console.log("         /   :   /     \\_/");
  console.log("      --/ ::    (");
  console.log("     (  |     (  (____");
  console.log("   .--  .. ----**.____)");
  console.log("   \\___/          ");
}
else{
  console.log("It's a weird tree");
}
