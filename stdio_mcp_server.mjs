#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "nofluffjobs",
  boardId: "nofluffjobs-official",
  domain: "nofluffjobs.com",
  npmName: "zc-nofluffjobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
