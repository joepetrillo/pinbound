import { defineConfig } from "oxlint";
import antiSlop from "ultracite/oxlint/anti-slop";
import core from "ultracite/oxlint/core";
import drizzle from "ultracite/oxlint/drizzle";
import { jsPluginSettings, selectJsPlugins } from "ultracite/oxlint/js-plugins";
import landmines from "ultracite/oxlint/landmines";
import next from "ultracite/oxlint/next";
import nextJsPlugins from "ultracite/oxlint/next/js-plugins";
import react from "ultracite/oxlint/react";
import shadcn from "ultracite/oxlint/shadcn";

const jsPlugins = selectJsPlugins(["react-doctor", "github", "sonarjs"]);

export default defineConfig({
  env: core.env,
  extends: [
    core,
    react,
    next,
    drizzle,
    jsPlugins,
    nextJsPlugins,
    shadcn,
    landmines,
    antiSlop,
  ],
  ignorePatterns: [...core.ignorePatterns, ".agents/**/*"],
  jsPlugins: [
    ...jsPlugins.jsPlugins,
    ...shadcn.jsPlugins,
    ...landmines.jsPlugins,
  ],
  options: { typeAware: true },
  settings: jsPluginSettings,
});
