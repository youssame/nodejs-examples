#! /usr/bin/env node
// import our packages
import open from "open";
import fetch from "node-fetch";
import yargs from "yargs";

const {argv} = yargs(process.argv);

const res = await fetch("https://reddit.com/.json")
const data = await res.json() as any;
const randomChildren = data?.data?.children[0];
// @ts-ignore
if (argv.print) {
    const title = randomChildren.data.title
    const link = 'https://reddit.com' + randomChildren.data.permalink;
    console.log(`Open the post "${title}" (${link})`)
    open(link);
}