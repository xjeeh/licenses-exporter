import { init } from "license-checker";
import * as fs from "fs";

import * as repos from "../repositories.json";

interface IPackages {
    [index: string]: IPackage;
}

interface IPackage {
    licenses: string;
    repository: string;
    publisher: string;
    email: string;
    patch: string;
    licenseFile: string;
}

repos.map(path => {
    init({ start: path }, async (err: Error, packages: IPackages) => {
        if (err) {
            console.log(`Error when trying to get licenses from ${path}: ${err}`);

        } else {
            let csvString = "Name, Version, License\n"
            Object
                .entries(packages)
                .forEach((pack) => {
                    const { 0: fullName, 1: license } = pack;
                    const separator = fullName.lastIndexOf("@")
                    const name = fullName.slice(0, separator);
                    const version = fullName.slice(separator + 1, fullName.length)
                    const { licenses } = license;
                    csvString += `${name}, ${version}, ${licenses} \n`;
                });

            if (!fs.existsSync("licenses")) {
                fs.mkdirSync("licenses");
            }
            const fileName = path.split("/")[path.split("/").length - 1];
            fs.writeFileSync(`licenses/licenses-${fileName}.csv`, csvString, 'utf-8');
            console.log(`Exported ${fileName} licenses`);
        }
    });
})
