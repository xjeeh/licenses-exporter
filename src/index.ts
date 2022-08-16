import rimraf from "rimraf";
import * as fs from "fs";
import { init } from "license-checker";
import * as config from "../repositories.json";
import { IPackages } from "./interfaces";

const { repositories, folder } = config;

rimraf('./licenses/*', () => console.log("Finished cleaning the folder"));

repositories.map((path: string) => {
    init(
        { start: `${folder}/${path}` },
        async (err: Error, packages: IPackages) => {
            if (err) {
                console.log(`Error when trying to get licenses from ${path}: ${err}`);
            } else {
                let csvString = "Name, Version, License\n";
                Object.entries(packages).forEach((pack) => {
                    const { 0: fullName, 1: license } = pack;
                    const separator = fullName.lastIndexOf("@");
                    const name = fullName.slice(0, separator);
                    const version = fullName.slice(separator + 1, fullName.length);
                    const { licenses } = license;
                    csvString += `${name}, ${version}, ${licenses} \n`;
                });
                if (!fs.existsSync("licenses")) {
                    fs.mkdirSync("licenses");
                }
                const fileName = path.split("/")[path.split("/").length - 1];
                fs.writeFileSync(
                    `licenses/licenses-${fileName}.csv`,
                    csvString,
                    "utf-8"
                );
                console.log(`Exported ${fileName} licenses`);
            }
        }
    );
});
